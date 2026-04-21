// ─── Header: topbar + brand row + main nav ───

const TopBar = () => (
  <div
    style={{
      background: "var(--bi-ink-900)",
      color: "#fff",
      fontSize: 13,
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        gap: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <a
          href="#"
          style={{
            color: "rgba(255,255,255,0.85)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
          }}
        >
          <Icon name="globe" size={14} />
          Portale Regione Campania
          <Icon name="external" size={11} />
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "rgba(255,255,255,0.85)",
            fontSize: 13,
          }}
        >
          <Icon name="globe" size={14} /> ITA <Icon name="chevron-down" size={12} />
        </button>
        <span style={{ opacity: 0.2 }}>|</span>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "rgba(255,255,255,0.85)",
            fontSize: 13,
          }}
        >
          <Icon name="accessibility" size={14} /> Accessibilità
        </button>
        <span style={{ opacity: 0.2 }}>|</span>
        <a
          href="#"
          style={{
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Icon name="users" size={14} /> Area personale
        </a>
      </div>
    </div>
  </div>
);

// ─── Brand row ───
const BrandRow = () => (
  <div style={{ background: "var(--bi-surface)", borderBottom: "1px solid var(--bi-border)" }}>
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,
        gap: 32,
      }}
    >
      {/* Logo lockup — funge da link alla homepage */}
      <a
        href="index.html"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          textDecoration: "none",
        }}
      >
        <img
          src="https://www.aslnapoli3sud.it/o/na3theme-theme/images/logo_primario.png"
          alt="ASL Napoli 3 Sud"
          style={{ height: 68, width: "auto", objectFit: "contain" }}
        />
        <div style={{ lineHeight: 1.2 }}>
          <div
            style={{
              fontFamily: "var(--ff-sans)",
              fontSize: 30,
              fontWeight: 700,
              color: "var(--bi-ink-900)",
              letterSpacing: -0.5,
            }}
          >
            ASL Napoli 3 Sud
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: "var(--bi-ink-500)",
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            Azienda Sanitaria Locale
          </div>
        </div>
      </a>

      {/* Destra: social + cerca */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: 13, color: "var(--bi-ink-500)", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Seguici su
          </span>
          {[
            { name: "facebook", label: "Facebook" },
            { name: "instagram", label: "Instagram" },
            { name: "x", label: "X (Twitter)" },
            { name: "youtube", label: "YouTube" },
            { name: "linkedin", label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.name}
              href="#"
              aria-label={s.label}
              style={{ color: "var(--bi-ink-500)", display: "flex", lineHeight: 1 }}
            >
              <Icon name={s.name} size={22} />
            </a>
          ))}
        </div>
        <span style={{ width: 1, height: 24, background: "var(--bi-border)" }} />
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "0 18px",
            height: 40,
            borderRadius: 20,
            border: "1.5px solid var(--bi-primary)",
            background: "transparent",
            color: "var(--bi-primary)",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Icon name="search" size={16} />
          Cerca nel sito
        </button>
      </div>
    </div>
  </div>
);

// ─── Main navigation (senza "Home" — il logo è il link alla homepage) ───
const MainNav = ({ activeItem, active }) => {
  activeItem = activeItem || active || "";
  const items = [
    { id: "servizi", label: "Servizi e prestazioni", href: "page-servizi.html", mega: true },
    { id: "come-fare-per", label: "Come fare per", href: "page-come-fare-per.html", mega: true },
    { id: "strutture", label: "Strutture", href: "#", mega: true },
    { id: "asl-comunica", label: "ASL comunica", href: "#" },
  ];
  return (
    <div style={{ background: "var(--bi-primary)", color: "#fff" }}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "stretch", height: 56 }}
      >
        <nav style={{ display: "flex", alignItems: "stretch" }}>
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activeItem === item.id ? "page" : undefined}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0 20px",
                paddingTop: 3,
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                borderBottom:
                  activeItem === item.id ? "3px solid #fff" : "3px solid transparent",
              }}
            >
              {item.label}
              {item.mega && <Icon name="chevron-down" size={13} />}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

// ─── Banda CUP / URP sempre visibile ───
const QuickActions = () => (
  <div
    style={{
      background: "var(--bi-surface)",
      borderTop: "2px solid var(--bi-primary)",
      borderBottom: "1px solid var(--bi-border)",
    }}
  >
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 48,
        height: 48,
      }}
    >
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 14,
          textDecoration: "none",
          color: "var(--bi-ink-900)",
        }}
      >
        <Icon name="calendar" size={16} style={{ color: "var(--bi-primary)", flexShrink: 0 }} />
        <span>Prenota servizi e prestazioni</span>
        <span
          style={{
            fontWeight: 700,
            color: "var(--bi-primary)",
            fontSize: 13,
            letterSpacing: 0.5,
          }}
        >
          CUP
        </span>
        <span style={{ fontWeight: 600, color: "var(--bi-primary)" }}>06 01020304</span>
        <Icon name="phone" size={14} style={{ color: "var(--bi-primary)" }} />
      </a>
      <span style={{ width: 1, height: 20, background: "var(--bi-border)", flexShrink: 0 }} />
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 14,
          textDecoration: "none",
          color: "var(--bi-ink-900)",
        }}
      >
        <Icon name="mail" size={16} style={{ color: "var(--bi-ink-500)", flexShrink: 0 }} />
        <span>Richiedi informazioni o fai una segnalazione</span>
        <span
          style={{
            fontWeight: 700,
            color: "var(--bi-ink-700)",
            fontSize: 13,
            letterSpacing: 0.5,
          }}
        >
          URP
        </span>
        <span style={{ fontWeight: 600, color: "var(--bi-ink-700)" }}>06 01020304</span>
        <Icon name="phone" size={14} style={{ color: "var(--bi-ink-500)" }} />
      </a>
    </div>
  </div>
);

// ─── Wrapper sticky: nav + banda CUP/URP ───
const StickyHeader = ({ activeItem, active }) => (
  <div style={{ position: "sticky", top: 0, zIndex: 40, boxShadow: "var(--shadow-sm)" }}>
    <MainNav activeItem={activeItem} active={active} />
    <QuickActions />
  </div>
);

Object.assign(window, { TopBar, BrandRow, MainNav, QuickActions, StickyHeader });
