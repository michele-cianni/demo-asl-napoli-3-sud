// ─── Tweaks panel ───

const TweaksPanel = ({ tweaks, onChange, onClose }) => {
  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 100,
      width: 320,
      background: "#1A2736", color: "#fff",
      borderRadius: 14,
      boxShadow: "0 24px 56px rgba(0,0,0,0.35)",
      border: "1px solid rgba(255,255,255,0.1)",
      fontFamily: "var(--ff-sans)",
      overflow: "hidden",
    }}>
      <div style={{
        padding: "14px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#66D9A0", boxShadow: "0 0 0 3px rgba(102,217,160,0.25)",
          }} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase" }}>
            Tweaks
          </span>
        </div>
        <button onClick={onClose} style={{ color: "rgba(255,255,255,0.6)", padding: 4 }}>
          <Icon name="close" size={16} />
        </button>
      </div>

      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 18 }}>
        {/* Theme */}
        <TweakRow label="Tema">
          <SegControl
            options={[{ v: "light", l: "Chiaro" }, { v: "dark", l: "Scuro" }]}
            value={tweaks.theme}
            onChange={v => onChange({ theme: v })}
          />
        </TweakRow>

        {/* Primary color */}
        <TweakRow label="Colore primario">
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { v: "blu", hex: "#0066CC", l: "Blu" },
              { v: "teal", hex: "#00798C", l: "Teal" },
              { v: "campania", hex: "#003D82", l: "Regione" },
              { v: "magenta", hex: "#A31A57", l: "Magenta" },
            ].map(c => (
              <button key={c.v} onClick={() => onChange({ primary: c.v })} title={c.l} style={{
                width: 32, height: 32, borderRadius: 8,
                background: c.hex,
                border: tweaks.primary === c.v ? "2px solid #fff" : "2px solid rgba(255,255,255,0.18)",
                boxShadow: tweaks.primary === c.v ? "0 0 0 2px #66D9A0" : "none",
              }} />
            ))}
          </div>
        </TweakRow>

        {/* Hero variant */}
        <TweakRow label="Variante hero">
          <SegControl
            options={[
              { v: "search", l: "Ricerca" },
              { v: "actions", l: "Azioni" },
              { v: "campaign", l: "Campagna" },
            ]}
            value={tweaks.hero}
            onChange={v => onChange({ hero: v })}
          />
        </TweakRow>

        {/* Density */}
        <TweakRow label="Densità">
          <SegControl
            options={[{ v: "compact", l: "Compatta" }, { v: "regular", l: "Standard" }]}
            value={tweaks.density}
            onChange={v => onChange({ density: v })}
          />
        </TweakRow>

        <div style={{
          padding: 10, borderRadius: 8,
          background: "rgba(255,255,255,0.05)",
          fontSize: 11, lineHeight: 1.5, color: "rgba(255,255,255,0.6)",
        }}>
          Le modifiche sono persistenti. Disattiva "Tweaks" dalla toolbar per nascondere il pannello.
        </div>
      </div>
    </div>
  );
};

const TweakRow = ({ label, children }) => (
  <div>
    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8, color: "rgba(255,255,255,0.55)", marginBottom: 8, fontWeight: 700 }}>
      {label}
    </div>
    {children}
  </div>
);

const SegControl = ({ options, value, onChange }) => (
  <div style={{
    display: "flex", gap: 2,
    background: "rgba(0,0,0,0.3)", padding: 2, borderRadius: 6,
  }}>
    {options.map(o => (
      <button key={o.v} onClick={() => onChange(o.v)} style={{
        flex: 1,
        padding: "6px 10px",
        borderRadius: 4,
        fontSize: 12, fontWeight: 600,
        background: value === o.v ? "#0066CC" : "transparent",
        color: value === o.v ? "#fff" : "rgba(255,255,255,0.7)",
      }}>
        {o.l}
      </button>
    ))}
  </div>
);

// ─── Alternative hero variants ───
const HeroActions = () => (
  <section style={{
    position: "relative", padding: "80px 0",
    background: "linear-gradient(160deg, var(--bi-primary-050) 0%, var(--bi-surface) 70%)",
  }}>
    <div className="container">
      <div style={{ maxWidth: 820, marginBottom: 48 }}>
        <Eyebrow>Servizio sanitario regionale</Eyebrow>
        <h1 style={{
          fontFamily: "var(--ff-serif)", fontWeight: 500,
          fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: -1,
          margin: "0 0 20px", color: "var(--bi-ink-900)",
        }}>
          Cosa vuoi fare <em style={{ fontStyle: "italic", color: "var(--bi-teal)" }}>oggi?</em>
        </h1>
        <p style={{ fontSize: 19, color: "var(--bi-ink-700)", margin: 0, maxWidth: 620 }}>
          Scegli un'azione per iniziare. Ogni percorso è guidato passo per passo.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          { t: "Prenotare una visita",      i: "calendar", c: "var(--bi-primary)", bg: "var(--bi-primary-050)" },
          { t: "Ritirare un referto",       i: "document", c: "var(--bi-teal)",    bg: "var(--bi-teal-100)" },
          { t: "Consultare liste d'attesa", i: "clock",    c: "var(--bi-warm)",    bg: "var(--bi-warm-100)" },
          { t: "Accedere all'FSE",          i: "shield",   c: "var(--bi-primary)", bg: "var(--bi-primary-050)" },
        ].map((a, i) => (
          <a key={i} href="#" style={{
            padding: 28, borderRadius: 16, background: "#fff",
            border: "1px solid var(--bi-border)",
            color: "var(--bi-ink-900)",
            display: "flex", flexDirection: "column", gap: 20, minHeight: 180,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{
              width: 52, height: 52, borderRadius: 12,
              background: a.bg, color: a.c,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={a.i} size={26} />
            </div>
            <div style={{
              fontFamily: "var(--ff-serif)", fontSize: 22, fontWeight: 500,
              lineHeight: 1.2, flex: 1,
            }}>{a.t}</div>
            <div style={{ color: a.c, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              Inizia <Icon name="arrow-right" size={14} />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const HeroCampaign = () => (
  <section style={{
    position: "relative",
    background: "var(--bi-ink-900)",
    color: "#fff",
    overflow: "hidden",
    minHeight: 560,
    display: "flex", alignItems: "center",
  }}>
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(ellipse at 70% 40%, rgba(0,121,140,0.45), transparent 55%), radial-gradient(circle at 20% 80%, rgba(0,102,204,0.35), transparent 50%)",
    }} />
    <div aria-hidden className="placeholder-img" style={{
      position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
      borderRadius: 0, opacity: 0.6, fontSize: 11,
      background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
      color: "rgba(255,255,255,0.5)",
    }}>
      PLACEHOLDER · scena di cura · full bleed
    </div>
    <div className="container" style={{ position: "relative", padding: "80px 0" }}>
      <div style={{ maxWidth: 620 }}>
        <Badge tone="warm" icon="alert">Campagna 2026</Badge>
        <h1 style={{
          fontFamily: "var(--ff-serif)", fontWeight: 500,
          fontSize: "clamp(44px, 5.5vw, 72px)", lineHeight: 1.02, letterSpacing: -1,
          margin: "20px 0 20px", color: "#fff", textWrap: "pretty",
        }}>
          Dai voce al tuo <em style={{ fontStyle: "italic", color: "#9BD4DB" }}>Sì.</em>
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", margin: "0 0 32px", lineHeight: 1.5, maxWidth: 520 }}>
          Al rilascio della carta d'identità puoi dare il consenso alla donazione di organi e tessuti. Un gesto che può salvare vite.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="white" size="lg" iconRight="arrow-right">Scopri come aderire</Button>
          <Button variant="outlineWhite" size="lg" icon="play">Guarda il video</Button>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { TweaksPanel, HeroActions, HeroCampaign });
