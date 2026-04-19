// ─── CTA band — Area personale / FSE ───
const CTABand = () => (
  <section style={{
    background: "linear-gradient(135deg, var(--bi-primary) 0%, #004A99 100%)",
    color: "#fff", position: "relative", overflow: "hidden",
    padding: "80px 0",
  }}>
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(circle at 20% 50%, rgba(0,121,140,0.35), transparent 55%)",
      pointerEvents: "none",
    }} />
    <div aria-hidden style={{
      position: "absolute", top: -100, right: -100,
      width: 500, height: 500, border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "50%",
    }} />
    <div aria-hidden style={{
      position: "absolute", top: 40, right: 60,
      width: 300, height: 300, border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "50%",
    }} />

    <div className="container" style={{
      position: "relative",
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center",
    }}>
      <div>
        <Eyebrow color="rgba(255,255,255,0.8)">Fascicolo Sanitario Elettronico</Eyebrow>
        <h2 style={{
          fontFamily: "var(--ff-serif)", fontWeight: 500,
          fontSize: "clamp(36px, 3.8vw, 52px)", lineHeight: 1.1, letterSpacing: -0.5,
          margin: "0 0 20px", color: "#fff",
        }}>
          La tua salute in un unico posto,<br/>
          <em style={{ fontStyle: "italic", color: "#9BD4DB" }}>accessibile con SPID o CIE.</em>
        </h2>
        <p style={{
          fontSize: 18, lineHeight: 1.6,
          color: "rgba(255,255,255,0.85)", margin: "0 0 32px",
          maxWidth: 520,
        }}>
          Referti, prescrizioni, ricette dematerializzate, vaccinazioni, esenzioni. Consulta e condividi la tua storia clinica in sicurezza.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="white" size="lg" icon="users">Accedi con SPID</Button>
          <Button variant="outlineWhite" size="lg" icon="users">Accedi con CIE</Button>
        </div>
      </div>

      {/* FSE mock card */}
      <div style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 20, padding: 28,
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 0.8 }}>
              Fascicolo di
            </div>
            <div style={{ fontFamily: "var(--ff-serif)", fontSize: 22, fontWeight: 500 }}>
              Giovanna Esposito
            </div>
          </div>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 600,
          }}>GE</div>
        </div>
        {[
          { label: "Referti disponibili",  val: "3 nuovi",  icon: "document", tone: "#9BD4DB" },
          { label: "Prescrizioni attive",  val: "2",        icon: "pill",     tone: "#FFD480" },
          { label: "Prossimi appuntamenti",val: "1 · 12 mag",icon: "calendar",tone: "#9BD4DB" },
          { label: "Vaccinazioni 2025",    val: "4 dosi",   icon: "shield",   tone: "#C8E6C9" },
        ].map((r, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "14px 0",
            borderTop: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
          }}>
            <span style={{
              width: 36, height: 36, borderRadius: 8,
              background: "rgba(255,255,255,0.1)", color: r.tone,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={r.icon} size={18} />
            </span>
            <span style={{ flex: 1, fontSize: 14, color: "rgba(255,255,255,0.85)" }}>{r.label}</span>
            <span style={{ fontWeight: 700 }}>{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Footer ───
const Footer = () => (
  <footer style={{ background: "var(--bi-ink-900)", color: "rgba(255,255,255,0.8)" }}>
    <div className="container" style={{ padding: "64px 32px 24px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
        gap: 40, marginBottom: 48,
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: "var(--bi-primary)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v18M3 12h18" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ fontFamily: "var(--ff-serif)", color: "#fff", fontSize: 22, fontWeight: 500 }}>
              ASL Napoli 3 Sud
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 24, maxWidth: 340 }}>
            Via Marconi, 66 — 80059 Torre del Greco (NA)<br/>
            C.F. / P.IVA 06321661211<br/>
            PEC: protocollo@pec.aslnapoli3sud.it
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { n: "facebook" }, { n: "instagram" }, { n: "x" }, { n: "youtube" }, { n: "linkedin" },
            ].map(s => (
              <a key={s.n} href="#" style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.8)",
              }}>
                <Icon name={s.n} size={16} />
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Servizi",
            links: ["Prenotazione CUP", "Pagamenti PagoPA", "Ritiro referti online", "Cambio medico", "Liste d'attesa", "Fascicolo Sanitario"],
          },
          {
            title: "L'ASL",
            links: ["Chi siamo", "Direzione strategica", "Piano performance", "Bilancio", "Carta dei servizi", "Contatti"],
          },
          {
            title: "Trasparenza",
            links: ["Amministrazione Trasparente", "Albo Pretorio", "Bandi di gara", "Concorsi", "Privacy policy", "Cookie policy"],
          },
          {
            title: "Aiuto",
            links: ["URP", "Segnalazioni", "FAQ", "Accessibilità", "Dichiarazione di accessibilità", "Mappa del sito"],
          },
        ].map((col, i) => (
          <div key={i}>
            <div style={{
              color: "#fff", fontWeight: 700, fontSize: 14,
              textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 16,
            }}>{col.title}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map(l => (
                <li key={l}>
                  <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16,
        fontSize: 13, color: "rgba(255,255,255,0.55)",
      }}>
        <div>© 2026 ASL Napoli 3 Sud · Azienda Sanitaria Locale</div>
        <div style={{ display: "flex", gap: 20 }}>
          <span>Sito realizzato seguendo le linee guida di Designers Italia</span>
          <span>Powered by Bootstrap Italia</span>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { CTABand, Footer });
