// Generates Palm Hills PWA icons (dark bg + red diamond) with zero dependencies.
// Pure Node: builds raw RGBA pixels and encodes a PNG via zlib.
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

const BG = [0x16, 0x16, 0x16];     // --ph-black
const RED = [0xc4, 0x20, 0x3c];    // --ph-red

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}

function png(size, { maskable = false } = {}) {
  // Diamond (square rotated 45°): |x|+|y| <= r in centered coords.
  const cx = size / 2;
  const cy = size / 2;
  // Maskable icons need the art inside the safe zone (~80% center).
  const r = size * (maskable ? 0.30 : 0.42);

  const raw = Buffer.alloc(size * (size * 4 + 1));
  let p = 0;
  for (let y = 0; y < size; y++) {
    raw[p++] = 0; // filter byte: none
    for (let x = 0; x < size; x++) {
      const inside = Math.abs(x + 0.5 - cx) + Math.abs(y + 0.5 - cy) <= r;
      const [rr, gg, bb] = inside ? RED : BG;
      raw[p++] = rr;
      raw[p++] = gg;
      raw[p++] = bb;
      raw[p++] = 0xff;
    }
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type RGBA
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync(new URL("../assets/", import.meta.url), { recursive: true });
const out = (name) => new URL(`../assets/${name}`, import.meta.url);

writeFileSync(out("icon-192.png"), png(192));
writeFileSync(out("icon-512.png"), png(512));
writeFileSync(out("icon-maskable-512.png"), png(512, { maskable: true }));
writeFileSync(out("apple-touch-icon.png"), png(180));
console.log("icons written to assets/");
