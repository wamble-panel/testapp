// ============ MY PASS + APP ============
const { useState: useS } = React;

const PHOTO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2RZqXTweE4Ju_K7EU5rDvXu0it5xvi75ww&s";

function ScreenMyPass({ time, onBack }) {
  const [tab, setTab] = useS("gate");
  const [flipped, setFlipped] = useS(false);
  return (
    <div className="screen">
      <HeaderTitle time={time} title="MY PASS" onBack={onBack} />
      <div className="body" style={{ padding: "26px 24px 130px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* tabs */}
        <div style={{ display: "flex", gap: 30, alignSelf: "stretch", borderBottom: "1px solid #e3e3e3" }}>
          <button onClick={() => setTab("gate")} style={passTab(tab === "gate")}>Gate</button>
          <button onClick={() => setTab("beach")} style={passTab(tab === "beach")}>Beach/Pool</button>
        </div>

        <div style={{ marginTop: 30, fontFamily: "var(--slab)", fontWeight: 500, fontSize: 19, color: "var(--ph-gray)", letterSpacing: .5 }}>
          {tab === "gate" ? "HAC-JCH-242BF · Gate 13" : "Beach / Pool Access"}
        </div>

        {/* flip card */}
        <div style={{ perspective: 1400, marginTop: 26 }}>
          <button onClick={() => setFlipped((f) => !f)} aria-label="Flip pass" style={{
            position: "relative", width: 286, height: 286, border: "none", background: "transparent",
            cursor: "pointer", padding: 0, transformStyle: "preserve-3d",
            transition: "transform .7s cubic-bezier(.4,.2,.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}>
            {/* front: QR */}
            <div style={passFace(false)}>
              <div style={{ position: "absolute", top: 14, left: 14 }}><Diamond size={34} rotate={0} /></div>
              <QRCode size={210} value="PALM-HILLS-KAREEM-ALI-242BF" />
              <div style={{ position: "absolute", bottom: 12, fontFamily: "ui-monospace,monospace", fontSize: 12, letterSpacing: 3, color: "#9a9a9a" }}>SCAN AT GATE</div>
            </div>
            {/* back: photo */}
            <div style={passFace(true)}>
              <img src={PHOTO_URL} alt="Kareem Ali" referrerPolicy="no-referrer" onError={(e)=>{e.currentTarget.style.display='none';}}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 14, background: "linear-gradient(transparent 60%,rgba(0,0,0,.45))" }}>
                <span style={{ color: "#fff", fontFamily: "var(--slab)", fontWeight: 700, fontSize: 18, letterSpacing: 1 }}>VERIFIED RESIDENT</span>
              </div>
            </div>
          </button>
        </div>

        {/* name */}
        <div style={{ marginTop: 26, fontFamily: "var(--slab)", fontWeight: 700, fontSize: 32, color: "#161616" }}>Kareem Ali</div>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8, color: "var(--ph-red)", fontFamily: "var(--sans)", fontWeight: 600, fontSize: 16 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ph-red)", display: "inline-block" }} />
          {flipped ? "Tap photo to show QR" : "Tap QR to flip"}
        </div>
      </div>
    </div>
  );
}
const passTab = (on) => ({ border: "none", background: "none", cursor: "pointer", fontFamily: "var(--slab)", fontWeight: on ? 700 : 500, fontSize: 23, color: on ? "#161616" : "#9a9a9a", paddingBottom: 12, borderBottom: on ? "3px solid var(--ph-red)" : "3px solid transparent" });
const passFace = (back) => ({
  position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
  background: "#fff", borderRadius: 18, overflow: "hidden",
  boxShadow: "0 18px 44px -14px rgba(0,0,0,.32), 0 0 0 1px #eee",
  display: "flex", alignItems: "center", justifyContent: "center",
  transform: back ? "rotateY(180deg)" : "none",
});

/* ---------------- APP ---------------- */
function App() {
  const [tab, setTab] = useS("space");      // active bottom tab
  const [overlay, setOverlay] = useS(null);  // "myUnits" | "myPass" | "passForm" | null
  const time = tab === "hills" || tab === "more" ? "7:47" : "7:51";

  const nav = (k) => { setOverlay(null); setTab(k); };

  let main;
  if (tab === "hills") main = <ScreenHills time={time} />;
  else if (tab === "space") main = <ScreenSpace time={time} onMyUnits={() => setOverlay("myUnits")} onGenerate={() => setOverlay("myPass")} />;
  else if (tab === "community") main = <ScreenCommunity time={time} />;
  else main = <ScreenMore time={time} onMyUsers={() => setOverlay("myUnits")} />;

  return (
    <div className="phone">
      {/* base tab screen */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, minHeight: 0, display: "flex" }}>{main}</div>
      </div>

      {/* overlays slide over */}
      {overlay === "myUnits" && (
        <Overlay><ScreenMyUnits time={time} onBack={() => setOverlay(null)} /></Overlay>
      )}
      {overlay === "myPass" && (
        <Overlay><ScreenMyPass time={time} onBack={() => setOverlay(null)} /></Overlay>
      )}

      {/* bottom nav sits above base screen, hidden under full overlays that carry their own */}
      {!overlay && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <BottomNav active={tab} onNav={nav} onPass={() => setOverlay("myPass")} />
        </div>
      )}
      {/* overlays also need a way to reach My Pass via bottom nav? They have a back button. */}
      {overlay && overlay !== "myPass" && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <BottomNav active={tab} onNav={nav} onPass={() => setOverlay("myPass")} />
        </div>
      )}
    </div>
  );
}

function Overlay({ children }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 20, background: "#fff", animation: "slideIn .28s ease" }}>
      {children}
    </div>
  );
}

const styleEl = document.createElement("style");
styleEl.textContent = "@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}} .hscroll::-webkit-scrollbar{height:0}";
document.head.appendChild(styleEl);

/* ---- responsive scale to viewport ---- */
function scalePhone() {
  const stage = document.getElementById("stage");
  const phone = document.querySelector(".phone");
  if (!phone) return;
  const pad = 24;
  const s = Math.min((window.innerWidth - pad) / 390, (window.innerHeight - pad) / 844, 1.15);
  phone.style.transform = `scale(${s})`;
  phone.style.transformOrigin = "center center";
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(scalePhone, 60);
window.addEventListener("resize", scalePhone);
