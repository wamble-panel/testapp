// ============ SCREENS ============
const { useState } = React;

/* ---------- HILLS TODAY (home) ---------- */
function ScreenHills({ time }) {
  const [tab, setTab] = useState("news");
  const [launch, setLaunch] = useState("P/X");
  return (
    <div className="screen">
      <HeaderHome time={time} />
      <div className="body" style={{ padding: "30px 22px 130px" }}>
        {/* News & Events */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <h2 style={sectionTitle}>NEWS <span style={{ color: "var(--ph-red)" }}>&amp; EVENTS</span></h2>
          <div style={pill}>
            <button onClick={() => setTab("news")} style={pillBtn(tab === "news")}>News</button>
            <button onClick={() => setTab("events")} style={pillBtn(tab === "events")}>Events</button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, overflowX: "auto", marginTop: 18, paddingBottom: 4 }} className="hscroll">
          <NewsCard date="13 Dec 2025" title="Palm Hills X Marriott International" bg="linear-gradient(160deg,#f4f4f6,#cfcfd6)" logo />
          <NewsCard date="02 Nov 2025" title="A New Chapter at Palm Hills New Cairo" bg="linear-gradient(160deg,#d8dde4,#aeb6c2)" />
        </div>
        <div style={{ marginTop: 14 }}><ReadMore /></div>

        {/* Sales Launches */}
        <h2 style={{ ...sectionTitle, marginTop: 40 }}>SALES <span style={{ color: "var(--ph-red)" }}>LAUNCHES</span></h2>
        <div style={tabRow}>
          {["P/X", "Palm Hills New Cairo", "Badya", "Ha"].map((t) => (
            <button key={t} onClick={() => setLaunch(t)} style={tabItem(launch === t)}>{t}</button>
          ))}
        </div>
        <div style={{ position: "relative", marginTop: 18, borderRadius: 4, overflow: "hidden", height: 188, background: "linear-gradient(120deg,#bcd4e8,#9fb8d4)" }}>
          <Stripe label="launch visual" />
          <div style={{ position: "absolute", right: 0, bottom: 0, top: 0, width: 150, background: "rgba(40,40,40,.55)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <span style={{ color: "#fff", fontFamily: "var(--slab)", fontWeight: 700, fontSize: 22, lineHeight: 1.1 }}>Reserve Now</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 14 }}>
          {[0, 1, 2].map((i) => <span key={i} style={{ width: i === 0 ? 18 : 7, height: 7, borderRadius: 4, background: i === 0 ? "var(--ph-red)" : "#d6d6d6" }} />)}
        </div>
      </div>
    </div>
  );
}

function NewsCard({ date, title, bg, logo }) {
  return (
    <div style={{ flex: "none", width: 270, borderRadius: 4, overflow: "hidden", position: "relative", height: 230, background: bg, boxShadow: "0 2px 10px rgba(0,0,0,.08)" }}>
      <div style={{ position: "absolute", top: 0, right: 22, background: "#7c7c84", color: "#fff", padding: "8px 14px 10px", textAlign: "center", borderTop: "4px solid var(--ph-red)" }}>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 21, lineHeight: 1 }}>{date.split(" ").slice(0, 2).join(" ")}</div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 21, lineHeight: 1.1 }}>{date.split(" ")[2]}</div>
      </div>
      {logo && <div style={{ position: "absolute", left: 18, top: 56, fontFamily: "var(--slab)", fontWeight: 800, fontSize: 80, color: "#141414", letterSpacing: -4, opacity: .92 }}>P/X</div>}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "30px 18px 16px", background: "linear-gradient(transparent,rgba(20,20,20,.78))" }}>
        <span style={{ color: "#fff", fontFamily: "var(--sans)", fontWeight: 500, fontSize: 21, lineHeight: 1.15 }}>{title}</span>
      </div>
    </div>
  );
}

function ReadMore({ text = "Read more" }) {
  return (
    <button style={{ background: "none", border: "1.5px solid var(--ph-red)", color: "var(--ph-red)", borderRadius: 30, padding: "10px 22px", fontFamily: "var(--slab)", fontWeight: 700, fontSize: 18, display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      {text} <IconArrowR2 size={20} stroke="var(--ph-red)" sw={2} />
    </button>
  );
}

/* ---------- MY SPACE / GATE PASSES ---------- */
function ScreenSpace({ time, onMyUnits, onGenerate }) {
  const [tab, setTab] = useState("gate");
  return (
    <div className="screen">
      <HeaderCompound time={time} />
      <div className="body" style={{ padding: "30px 24px 130px" }}>
        <h2 style={{ ...sectionTitle, fontSize: 32 }}>GATE <span style={{ color: "var(--ph-red)" }}>PASSES</span>
          <button onClick={onGenerate} style={{ float: "right", background: "none", border: "none", cursor: "pointer", color: "var(--ph-red)", marginTop: 2 }}><IconPlusCircle size={32} stroke="var(--ph-red)" /></button>
        </h2>
        <div style={{ ...tabRow, marginTop: 22 }}>
          <button onClick={() => setTab("gate")} style={tabItem(tab === "gate")}>Gate</button>
          <button onClick={() => setTab("beach")} style={tabItem(tab === "beach")}>Beach/Pool</button>
        </div>

        <div style={{ textAlign: "center", padding: "44px 0 30px" }}>
          <IconGate size={66} stroke="#1b1b1b" sw={1.6} />
          <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 30, marginTop: 18 }}>No passes generated yet.</div>
        </div>

        <button onClick={onGenerate} style={{ width: "100%", border: "1.5px solid var(--ph-red)", background: "#fff", color: "var(--ph-red)", borderRadius: 40, padding: "18px", fontFamily: "var(--slab)", fontWeight: 700, fontSize: 22, letterSpacing: ".5px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          GENERATE NEW PASS <IconArrowR2 size={24} stroke="var(--ph-red)" />
        </button>

        <h2 style={{ ...sectionTitle, fontSize: 30, marginTop: 44 }}>MANAGE YOUR <span style={{ color: "var(--ph-red)" }}>UNITS</span></h2>
        <button onClick={onMyUnits} style={unitCard}>
          <IconHouseSmall size={28} stroke="#1b1b1b" />
          <div style={{ textAlign: "left", flex: 1, marginLeft: 14 }}>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 23 }}>MY UNITS</div>
            <div style={{ color: "var(--ph-gray)", fontFamily: "var(--slab)", fontWeight: 500, fontSize: 21, letterSpacing: .5 }}>HAC-JCH-242BF</div>
          </div>
          <IconChevR size={22} stroke="var(--ph-red)" />
        </button>
      </div>
    </div>
  );
}

/* ---------- MY UNITS (subpage) ---------- */
function ScreenMyUnits({ time, onBack }) {
  return (
    <div className="screen">
      <HeaderTitle time={time} title="MY UNITS" onBack={onBack} />
      <div className="body" style={{ padding: "26px 24px 130px" }}>
        <div style={{ border: "1px solid var(--ph-gray-line)", borderRadius: 4, padding: "26px 22px", display: "flex", alignItems: "center", gap: 18 }}>
          <IconHouseSmall size={34} stroke="#1b1b1b" />
          <div>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 30 }}>HAC-JCH-242BF</div>
            <div style={{ color: "var(--ph-gray)", fontFamily: "var(--slab)", fontWeight: 500, fontSize: 24 }}>Family Member</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 40, color: "var(--ph-gray)" }}>
          <IconBulb size={24} stroke="var(--ph-red)" />
          <p style={{ margin: 0, fontFamily: "var(--slab)", fontWeight: 500, fontSize: 23, lineHeight: 1.4, color: "var(--ph-gray)" }}>
            You are currently viewing units in Hacienda Bay,to view <br />
            units in other compounds <span style={{ color: "var(--ph-red)", fontWeight: 700 }}>Switch Compound</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMMUNITY ---------- */
function ScreenCommunity({ time }) {
  return (
    <div className="screen">
      <HeaderCompound time={time} />
      <div className="body" style={{ padding: "34px 24px 130px" }}>
        <h2 style={{ ...sectionTitle, fontSize: 33 }}>ANNOUNCEMENT</h2>
        <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 22 }}>
          <AnnounceCard date="12 Sep 2025  10:0 PM" title={<>Tonight at <b>SASS</b>: Oriental Night</>} body="Hacienda Bay owners enjoy free entrance all night" />
          <AnnounceCard date="08 Sep 2025  06:30 PM" title={<>Beach Cleanup Morning</>} body="Join your neighbours for a community beach cleanup" />
        </div>
      </div>
    </div>
  );
}
function AnnounceCard({ date, title, body }) {
  return (
    <div style={{ border: "1px solid var(--ph-gray-line)" }}>
      <div style={{ height: 130, background: "linear-gradient(110deg,#fbfbfd,#e9e9ef)", position: "relative" }}>
        <Stripe label="cover image" light />
      </div>
      <div style={{ padding: "18px 22px 22px" }}>
        <div style={{ color: "var(--ph-gray)", fontFamily: "var(--slab)", fontWeight: 500, fontSize: 21 }}>{date}</div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 25, textAlign: "center", margin: "14px 0", lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontFamily: "var(--sans)", fontSize: 21, lineHeight: 1.3, marginBottom: 14 }}>{body}</div>
        <button style={{ background: "none", border: "none", padding: 0, color: "var(--ph-red)", fontFamily: "var(--slab)", fontWeight: 700, fontSize: 21, cursor: "pointer" }}>Read more</button>
      </div>
    </div>
  );
}

/* ---------- MORE ---------- */
function ScreenMore({ time, onMyUsers }) {
  const tiles = [
    { Icon: IconPeoplePair, label: "My Invitations" },
    { Icon: IconPeoplePair, label: "My Users", action: onMyUsers },
    { Icon: IconCar, label: "My Vehicles" },
    { Icon: IconCheckSquare, label: "My Reservations" },
  ];
  return (
    <div className="screen">
      <HeaderName time={time} name="MAHMOU..." />
      <div className="body" style={{ padding: "30px 22px 130px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {tiles.map((t) => (
            <button key={t.label} onClick={t.action} style={moreTile}>
              <div style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--ph-red-soft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <t.Icon size={30} stroke="var(--ph-red)" sw={1.9} />
              </div>
              <span style={{ fontFamily: "var(--sans)", fontSize: 23, fontWeight: 500 }}>{t.label}</span>
            </button>
          ))}
        </div>

        <ListRow Icon={IconGear} title="Account &amp; Settings" sub="Profile &amp; Account and App Settings to manage and customize your information" />
        <ListRow Icon={IconChat} title="Sales Inquiry" sub="Register here if you are interested to buy a property in Palm Hills" />
        <ListRow Icon={IconCommunity} title="Choose Your Neighbour" sub="Invite who you want to live next to" />
      </div>
    </div>
  );
}
function ListRow({ Icon, title, sub }) {
  return (
    <div style={{ border: "1px solid var(--ph-gray-line)", padding: "22px 20px", display: "flex", gap: 16, marginTop: 20, alignItems: "flex-start" }}>
      <Icon size={26} stroke="#1b1b1b" />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 26, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: title }} />
        <div style={{ color: "var(--ph-gray)", fontFamily: "var(--sans)", fontSize: 20, lineHeight: 1.35 }} dangerouslySetInnerHTML={{ __html: sub }} />
      </div>
      <IconChevR size={22} stroke="var(--ph-red)" />
    </div>
  );
}

/* ---------- shared bits ---------- */
function Stripe({ label, light }) {
  return (
    <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(0,0,0,.04) 0 10px,transparent 10px 20px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, color: light ? "#b3b3bb" : "#7f8794", letterSpacing: 1 }}>{label}</span>
    </div>
  );
}

const sectionTitle = { fontFamily: "var(--slab)", fontWeight: 700, fontSize: 33, margin: 0, color: "#161616", letterSpacing: ".3px" };
const pill = { display: "flex", background: "#ececec", borderRadius: 30, padding: 4, flex: "none" };
const pillBtn = (on) => ({ border: "none", cursor: "pointer", borderRadius: 30, padding: "7px 18px", fontFamily: "var(--slab)", fontWeight: 600, fontSize: 18, background: on ? "#161616" : "transparent", color: on ? "#fff" : "#8a8a8a" });
const tabRow = { display: "flex", gap: 26, marginTop: 16, borderBottom: "1px solid #e3e3e3", paddingBottom: 0, overflowX: "auto" };
const tabItem = (on) => ({ border: "none", background: "none", cursor: "pointer", fontFamily: "var(--slab)", fontWeight: on ? 700 : 500, fontSize: 23, color: on ? "#161616" : "#9a9a9a", paddingBottom: 12, borderBottom: on ? "3px solid #161616" : "3px solid transparent", whiteSpace: "nowrap", flex: "none" });
const unitCard = { width: "100%", marginTop: 22, border: "1px solid var(--ph-gray-line)", borderRadius: 4, padding: "22px 20px", display: "flex", alignItems: "center", background: "#fff", cursor: "pointer" };
const moreTile = { border: "1px solid var(--ph-gray-line)", background: "#fff", cursor: "pointer", padding: "26px 14px", display: "flex", flexDirection: "column", alignItems: "center" };

Object.assign(window, { ScreenHills, ScreenSpace, ScreenMyUnits, ScreenCommunity, ScreenMore });
