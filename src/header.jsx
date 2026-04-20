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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
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
        <span style={{ opacity: 0.2 }}>|</span>
        <a href="#" style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>
          Amministrazione Trasparente
        </a>
        <a href="#" style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>
          Albo Pretorio
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
          <Icon name="globe" size={14} /> ITA{" "}
          <Icon name="chevron-down" size={12} />
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
  <div
    style={{
      background: "var(--bi-surface)",
      borderBottom: "1px solid var(--bi-border)",
    }}
  >
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 96,
        gap: 32,
      }}
    >
      {/* Logo lockup */}
      <a
        href="index.html"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: "var(--bi-ink-900)",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 10,
            background: "var(--bi-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3v18M3 12h18"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div style={{ lineHeight: 1.15 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: "var(--bi-ink-500)",
              textTransform: "uppercase",
            }}
          >
            Regione Campania · Azienda Sanitaria Locale
          </div>
          <div
            style={{
              fontFamily: "var(--ff-serif)",
              fontSize: 26,
              fontWeight: 500,
              color: "var(--bi-ink-900)",
              marginTop: 2,
            }}
          >
            ASL Napoli 3 Sud
          </div>
        </div>
      </a>

      {/* Right: urgent contacts + actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            paddingRight: 24,
            borderRight: "1px solid var(--bi-border)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--bi-warm-100)",
              color: "var(--bi-warm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="ambulance" size={18} />
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div
              style={{
                fontSize: 11,
                color: "var(--bi-ink-500)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 0.6,
              }}
            >
              Emergenza
            </div>
            <a
              href="tel:112"
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "var(--bi-ink-900)",
              }}
            >
              112 · 118
            </a>
          </div>
        </div>

        <Button variant="primary" icon="calendar">
          Prenota con CUP
        </Button>
      </div>
    </div>
  </div>
);

// ─── Main navigation ───
const MainNav = ({ activeItem, active }) => {
  activeItem = activeItem || active || "home";
  const items = [
    { id: "home", label: "Home", href: "index.html" },
    {
      id: "servizi",
      label: "Servizi e prestazioni",
      href: "page-servizi.html",
      mega: true,
    },
    {
      id: "come-fare-per",
      label: "Come fare per",
      href: "page-come-fare-per.html",
      mega: true,
    },
    { id: "strutture", label: "Strutture", href: "#", mega: true },
    { id: "asl-comunica", label: "ASL comunica", href: "#" },
    { id: "amministrazione", label: "Amministrazione", href: "#" },
  ];
  return (
    <div
      style={{
        background: "var(--bi-primary)",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 40,
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: 56,
        }}
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
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                borderBottom:
                  activeItem === item.id
                    ? "3px solid #fff"
                    : "3px solid transparent",
                paddingTop: 3,
                textDecoration: "none",
              }}
            >
              {item.label}
              {item.mega && <Icon name="chevron-down" size={13} />}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0 16px",
              height: 40,
              borderRadius: 20,
              background: "rgba(255,255,255,0.16)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <Icon name="search" size={16} />
            Cerca nel sito
            <span
              style={{
                fontSize: 11,
                padding: "2px 6px",
                borderRadius: 4,
                background: "rgba(255,255,255,0.18)",
                fontFamily: "var(--ff-mono)",
              }}
            >
              /{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { TopBar, BrandRow, MainNav });
