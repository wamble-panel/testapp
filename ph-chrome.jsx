// ============ CHROME: StatusBar, Logo, Headers, BottomNav, QR ============

const LOGO = "assets/logo-diamond.png";

function StatusBar({ time = "7:51" }) {
  return (
    <div className="statusbar">
      <span className="sb-time">{time}</span>
      <div className="sb-island">
        <span className="call">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#34c759"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z"/></svg>
          <span style={{ fontFamily: "var(--sans)" }}>4h</span>
        </span>
        <span className="dots">{Array.from({ length: 11 }).map((_, i) => <i key={i} />)}</span>
      </div>
      <div className="sb-right">
        {/* signal */}
        <svg width="19" height="13" viewBox="0 0 19 13" fill="#fff"><rect x="0" y="8" width="3" height="5" rx="1"/><rect x="5" y="5.5" width="3" height="7.5" rx="1"/><rect x="10" y="3" width="3" height="10" rx="1"/><rect x="15" y="0.5" width="3" height="12.5" rx="1" opacity="0.4"/></svg>
        {/* battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x="1" y="1" width="22" height="11" rx="3" stroke="#fff" strokeOpacity="0.5" strokeWidth="1"/><rect x="2.6" y="2.6" width="13" height="7.8" rx="1.6" fill="#fff"/><rect x="24.5" y="4.5" width="1.6" height="4" rx="1" fill="#fff" fillOpacity="0.5"/></svg>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#f5a623", display: "inline-block" }} />
      </div>
    </div>
  );
}

function Diamond({ size = 84, src = LOGO, rotate = -8, style }) {
  // red diamond logo, slightly rotated, hanging off the header
  return (
    <div style={{
      width: size, height: size, transform: `rotate(${rotate}deg)`,
      borderRadius: 8, overflow: "hidden",
      boxShadow: "0 6px 16px -4px rgba(0,0,0,.45)",
      background: "#C4203C", ...style,
    }}>
      <img src={src} alt="Palm Hills" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

/* ---- Header: compound ("Currently Viewing / Hacienda Bay") ---- */
function HeaderCompound({ time, sub = "Currently Viewing", title = "Hacienda Bay" }) {
  return (
    <div style={{ flex: "none", position: "relative", zIndex: 4 }}>
      <StatusBar time={time} />
      <div style={{ background: "var(--ph-black)", color: "#fff", padding: "2px 22px 16px", textAlign: "center", position: "relative" }}>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 500, fontSize: 21, opacity: .96 }}>{sub}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 2 }}>
          <span style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 33, letterSpacing: ".2px" }}>{title}</span>
          <IconChevDown size={18} stroke="var(--ph-red)" />
        </div>
        <div style={{ position: "absolute", right: 22, top: -2 }}><IconBell size={27} /></div>
      </div>
      <div style={{ height: 0, position: "relative" }}>
        <Diamond size={84} style={{ position: "absolute", left: 18, top: -42 }} />
      </div>
    </div>
  );
}

/* ---- Header: home ("Welcome back / MAHMOUD KHALED") ---- */
function HeaderHome({ time, name = "MAHMOUD KHALED" }) {
  return (
    <div style={{ flex: "none", position: "relative", zIndex: 4 }}>
      <StatusBar time={time} />
      <div style={{ background: "var(--ph-black)", color: "#fff", padding: "2px 60px 18px", textAlign: "center", position: "relative" }}>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 500, fontSize: 20, opacity: .96 }}>Welcome back</div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 31, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
        <div style={{ position: "absolute", right: 22, top: 14 }}><IconBell size={27} /></div>
      </div>
      <div style={{ height: 0, position: "relative" }}>
        <Diamond size={84} style={{ position: "absolute", left: 18, top: -42 }} />
      </div>
    </div>
  );
}

/* ---- Header: title bar with back ("MY UNITS") ---- */
function HeaderTitle({ time, title, onBack }) {
  return (
    <div style={{ flex: "none", position: "relative", zIndex: 4 }}>
      <StatusBar time={time} />
      <div style={{ background: "var(--ph-black)", color: "#fff", padding: "10px 24px 26px", display: "flex", alignItems: "center", position: "relative" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#fff", padding: 0, cursor: "pointer", display: "flex" }}>
          <IconChevL size={28} />
        </button>
        <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontFamily: "var(--slab)", fontWeight: 700, fontSize: 30, letterSpacing: ".5px", pointerEvents: "none" }}>{title}</div>
      </div>
    </div>
  );
}

/* ---- Header: plain ("MAHMOU...") for More ---- */
function HeaderName({ time, name }) {
  return (
    <div style={{ flex: "none", position: "relative", zIndex: 4 }}>
      <StatusBar time={time} />
      <div style={{ background: "var(--ph-black)", color: "#fff", padding: "8px 24px 20px", position: "relative", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 32, letterSpacing: ".5px" }}>{name}</div>
        <div style={{ position: "absolute", right: 22, top: 16 }}><IconBell size={27} /></div>
      </div>
      <div style={{ height: 0, position: "relative" }}>
        <Diamond size={84} style={{ position: "absolute", left: 18, top: -42 }} />
      </div>
    </div>
  );
}

/* ---- Bottom Navigation + floating My Pass diamond ---- */
const NAV = [
  { key: "hills", label: "Hills Today", Icon: IconHome },
  { key: "space", label: "My Space", Icon: IconSpace },
  { key: "community", label: "Community", Icon: IconCommunity },
  { key: "more", label: "More", Icon: IconMore },
];

function BottomNav({ active, onNav, onPass }) {
  return (
    <div style={{ flex: "none", position: "relative", background: "#fff", borderTop: "1px solid #eee", zIndex: 6 }}>
      {/* floating My Pass diamond */}
      <button onClick={onPass} aria-label="My Pass" style={{
        position: "absolute", right: 14, top: -34, width: 86, height: 86,
        transform: "rotate(45deg)", background: "var(--ph-red)", border: "none",
        borderRadius: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 8px 20px -6px rgba(196,32,60,.6)", zIndex: 7,
      }}>
        <span style={{ transform: "rotate(-45deg)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <IconQR size={22} color="#fff" />
          <span style={{ color: "#fff", fontSize: 10.5, fontWeight: 700, fontFamily: "var(--slab)" }}>My Pass</span>
        </span>
      </button>

      <div style={{ display: "flex", padding: "12px 8px 8px" }}>
        {NAV.map(({ key, label, Icon }) => {
          const on = active === key;
          const isLast = key === "more";
          return (
            <button key={key} onClick={() => onNav(key)} style={{
              flex: 1, background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              color: on ? "var(--ph-red)" : "#1b1b1b", paddingRight: isLast ? 24 : 0,
              position: "relative",
            }}>
              {on && <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", width: 34, height: 3, background: "var(--ph-red)", borderRadius: 2 }} />}
              <Icon size={27} stroke={on ? "var(--ph-red)" : "#1b1b1b"} sw={on ? 2.4 : 2} />
              <span style={{ fontSize: 14, fontWeight: on ? 700 : 500, fontFamily: "var(--sans)", color: on ? "var(--ph-red)" : "#1b1b1b" }}>{label}</span>
            </button>
          );
        })}
      </div>
      {/* iOS home indicator */}
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: 8 }}>
        <span style={{ width: 134, height: 5, borderRadius: 3, background: "#111" }} />
      </div>
    </div>
  );
}

/* ---- QR code (deterministic pseudo-QR, looks real) ---- */
function QRCode({ size = 220, value = "PALM-HILLS" }) {
  const N = 29;
  // deterministic PRNG seeded from value
  let seed = 0; for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) >>> 0;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const finder = (r, c) =>
    (r >= 0 && r < 7 && c >= 0 && c < 7) &&
    (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
  const inFinderZone = (r, c) => (r < 8 && c < 8) || (r < 8 && c >= N - 8) || (r >= N - 8 && c < 8);
  const cell = size / N;
  const rects = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      let on = false;
      if (r < 7 && c < 7) on = finder(r, c);
      else if (r < 7 && c >= N - 7) on = finder(r, c - (N - 7));
      else if (r >= N - 7 && c < 7) on = finder(r - (N - 7), c);
      else if (inFinderZone(r, c)) on = false;
      else on = rnd() > 0.5;
      if (on) rects.push(<rect key={r + "-" + c} x={(c * cell).toFixed(2)} y={(r * cell).toFixed(2)} width={Math.ceil(cell) } height={Math.ceil(cell)} fill="#161616" />);
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" style={{ display: "block" }}>
      <rect width={size} height={size} fill="#fff" />
      {rects}
    </svg>
  );
}

Object.assign(window, {
  StatusBar, Diamond, HeaderCompound, HeaderHome, HeaderTitle, HeaderName, BottomNav, QRCode, LOGO,
});
