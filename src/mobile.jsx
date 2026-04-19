// ─── Mobile preview section — iPhone frame showing same site ───

const MobilePreview = () => {
  return (
    <Section bg="var(--bi-bg-alt)" pad="80px 0" id="mobile">
      <SectionHeading
        eyebrow="Responsive"
        title="Pensato mobile-first"
        subtitle="Il 68% dei cittadini accede all'ASL da smartphone. L'interfaccia adotta un menu esteso a tab e CTA sempre raggiungibili con il pollice."
        align="center"
      />

      <div style={{
        display: "grid", gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center", gap: 64, maxWidth: 1100, margin: "0 auto",
      }}>
        {/* LEFT bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {[
            { icon: "search", title: "Ricerca persistente", desc: "Barra di ricerca sempre visibile nella bottom nav" },
            { icon: "calendar", title: "CUP in un tap", desc: "Shortcut al CUP e all'Area Personale nel thumb-zone" },
            { icon: "accessibility", title: "Accessibile AA", desc: "Contrasto 7:1, touch target ≥44px, screen reader ready" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--bi-teal-100)", color: "var(--bi-teal-700)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon name={b.icon} size={20} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                  {b.title}
                </div>
                <div style={{ fontSize: 14, color: "var(--bi-ink-500)", lineHeight: 1.5 }}>
                  {b.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER iPhone */}
        <div style={{ transform: "scale(0.88)", transformOrigin: "center" }}>
          <IOSDevice width={360} height={760} dark={false}>
            <MobileContent />
          </IOSDevice>
        </div>

        {/* RIGHT bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {[
            { icon: "shield", title: "SPID & CIE", desc: "Login forte integrato nella webapp, no redirect esterni" },
            { icon: "download", title: "Installabile (PWA)", desc: "Aggiungi alla home per un accesso offline alle info essenziali" },
            { icon: "globe", title: "Multilingua", desc: "Italiano, inglese, arabo, ucraino per facilitare l'accesso" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--bi-primary-050)", color: "var(--bi-primary)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon name={b.icon} size={20} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                  {b.title}
                </div>
                <div style={{ fontSize: 14, color: "var(--bi-ink-500)", lineHeight: 1.5 }}>
                  {b.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const MobileContent = () => (
  <div style={{ background: "var(--bi-bg)", minHeight: "100%", fontFamily: "var(--ff-sans)" }}>
    {/* top brand */}
    <div style={{ padding: "56px 16px 12px", background: "var(--bi-surface)", borderBottom: "1px solid var(--bi-border)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8, background: "var(--bi-primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v18M3 12h18" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ flex: 1, lineHeight: 1.15 }}>
          <div style={{ fontSize: 9, color: "var(--bi-ink-500)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>
            Regione Campania
          </div>
          <div style={{ fontFamily: "var(--ff-serif)", fontSize: 15, fontWeight: 500 }}>
            ASL Napoli 3 Sud
          </div>
        </div>
        <Icon name="menu" size={22} color="var(--bi-ink-700)" />
      </div>
    </div>

    {/* hero mobile */}
    <div style={{ padding: "20px 16px", background: "linear-gradient(160deg, var(--bi-primary-050), var(--bi-surface))" }}>
      <div style={{
        fontFamily: "var(--ff-serif)", fontSize: 26, fontWeight: 500,
        lineHeight: 1.1, letterSpacing: -0.3, marginBottom: 12,
      }}>
        La salute dei cittadini, <em style={{ fontStyle: "italic", color: "var(--bi-teal)" }}>a portata di mano.</em>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "10px 12px", background: "#fff",
        border: "1px solid var(--bi-border)", borderRadius: 10,
        boxShadow: "var(--shadow-sm)",
      }}>
        <Icon name="search" size={16} color="var(--bi-primary)" />
        <span style={{ fontSize: 13, color: "var(--bi-ink-500)", flex: 1 }}>Cerca un servizio…</span>
      </div>
    </div>

    {/* quick actions */}
    <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
      {[
        { t: "Prenota visita", i: "calendar", tone: "primary" },
        { t: "Ritira referto", i: "document", tone: "teal" },
        { t: "Liste d'attesa", i: "clock",    tone: "primary" },
        { t: "Cambio medico",  i: "users",    tone: "teal" },
      ].map((a, i) => {
        const bg = a.tone === "teal" ? "var(--bi-teal-100)" : "var(--bi-primary-050)";
        const fg = a.tone === "teal" ? "var(--bi-teal-700)" : "var(--bi-primary)";
        return (
          <div key={i} style={{
            padding: 14, borderRadius: 10,
            background: "#fff", border: "1px solid var(--bi-border)",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{
              width: 32, height: 32, borderRadius: 8,
              background: bg, color: fg,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={a.i} size={16} />
            </span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>{a.t}</span>
          </div>
        );
      })}
    </div>

    {/* news card */}
    <div style={{ padding: "0 16px 16px" }}>
      <div style={{ fontSize: 11, color: "var(--bi-ink-500)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>
        In evidenza
      </div>
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--bi-border)", overflow: "hidden" }}>
        <div className="placeholder-img" style={{ height: 110, fontSize: 10 }}>PLACEHOLDER · foto</div>
        <div style={{ padding: 14 }}>
          <Badge tone="warm">Avviso</Badge>
          <div style={{ fontFamily: "var(--ff-serif)", fontSize: 15, fontWeight: 500, lineHeight: 1.3, marginTop: 8 }}>
            Campagna vaccinale antinfluenzale 2026
          </div>
        </div>
      </div>
    </div>

    {/* bottom tab bar */}
    <div style={{
      position: "sticky", bottom: 0, marginTop: "auto",
      background: "#fff", borderTop: "1px solid var(--bi-border)",
      padding: "8px 0 24px",
      display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
    }}>
      {[
        { t: "Home",    i: "hospital",    active: true },
        { t: "Servizi", i: "document" },
        { t: "Cerca",   i: "search" },
        { t: "Avvisi",  i: "alert" },
        { t: "Profilo", i: "users" },
      ].map((tab, i) => (
        <div key={i} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
          color: tab.active ? "var(--bi-primary)" : "var(--bi-ink-500)",
        }}>
          <Icon name={tab.i} size={20} />
          <span style={{ fontSize: 10, fontWeight: tab.active ? 700 : 500 }}>{tab.t}</span>
        </div>
      ))}
    </div>
  </div>
);

Object.assign(window, { MobilePreview });
