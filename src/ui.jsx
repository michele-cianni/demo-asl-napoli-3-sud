// ─── UI primitives — Bootstrap Italia–inspired ───

const btnStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--ff-sans)",
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 1.2,
    padding: "12px 20px",
    borderRadius: 4,
    border: "2px solid transparent",
    cursor: "pointer",
    transition: "all 0.15s ease",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

const Button = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconRight,
  onClick,
  as = "button",
  href,
  block,
}) => {
  const variants = {
    primary: {
      background: "var(--bi-primary)",
      color: "#fff",
      borderColor: "var(--bi-primary)",
    },
    warm: {
      background: "var(--bi-warm)",
      color: "#fff",
      borderColor: "var(--bi-warm)",
    },
    outline: {
      background: "transparent",
      color: "var(--bi-primary)",
      borderColor: "var(--bi-primary)",
    },
    ghost: {
      background: "transparent",
      color: "var(--bi-primary)",
      borderColor: "transparent",
    },
    white: {
      background: "#fff",
      color: "var(--bi-primary)",
      borderColor: "#fff",
    },
    outlineWhite: {
      background: "transparent",
      color: "#fff",
      borderColor: "rgba(255,255,255,0.8)",
    },
    subtle: {
      background: "var(--bi-primary-050)",
      color: "var(--bi-primary-800)",
      borderColor: "transparent",
    },
  };
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13 },
    md: { padding: "12px 20px", fontSize: 15 },
    lg: { padding: "16px 28px", fontSize: 17 },
    xl: { padding: "20px 32px", fontSize: 18 },
  };

  const style = {
    ...btnStyles.base,
    ...variants[variant],
    ...sizes[size],
    width: block ? "100%" : "auto",
  };

  const content = (
    <>
      {icon && (
        <Icon name={icon} size={size === "lg" || size === "xl" ? 20 : 16} />
      )}
      <span>{children}</span>
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === "lg" || size === "xl" ? 20 : 16}
        />
      )}
    </>
  );

  if (as === "a" || href)
    return (
      <a href={href || "#"} onClick={onClick} style={style}>
        {content}
      </a>
    );
  return (
    <button onClick={onClick} style={style}>
      {content}
    </button>
  );
};

// ─── Badge / Chip ───
const Badge = ({ children, tone = "primary", icon }) => {
  const tones = {
    primary: { bg: "var(--bi-primary-100)", fg: "var(--bi-primary-800)" },
    teal: { bg: "var(--bi-teal-100)", fg: "var(--bi-teal-700)" },
    warm: { bg: "var(--bi-warm-100)", fg: "var(--bi-warm)" },
    success: { bg: "#D4ECDD", fg: "var(--bi-success)" },
    warning: { bg: "#FAEDCC", fg: "var(--bi-warning)" },
    danger: { bg: "#FBDCE1", fg: "var(--bi-danger)" },
    neutral: { bg: "var(--bi-ink-100)", fg: "var(--bi-ink-700)" },
  };
  const t = tones[tone] || tones.primary;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 99,
        background: t.bg,
        color: t.fg,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1.4,
        textTransform: "uppercase",
        letterSpacing: 0.4,
      }}
    >
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
};

// ─── Link with arrow (Designers Italia "Vai a" pattern) ───
const ArrowLink = ({ children, href = "#", color = "var(--bi-primary)" }) => (
  <a
    href={href}
    style={{
      color,
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderBottom: "1px solid currentColor",
      paddingBottom: 2,
      textDecoration: "none",
    }}
  >
    {children} <Icon name="arrow-right" size={15} />
  </a>
);

// ─── Section wrapper ───
const Section = ({ children, bg, pad = "80px 0", style, id }) => (
  <section
    id={id}
    style={{ background: bg, padding: pad, position: "relative", ...style }}
  >
    <div className="container">{children}</div>
  </section>
);

// ─── Eyebrow ───
const Eyebrow = ({ children, color = "var(--bi-teal)" }) => (
  <div
    style={{
      color,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 1.2,
      textTransform: "uppercase",
      marginBottom: 12,
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    <span
      style={{
        width: 24,
        height: 2,
        background: color,
        display: "inline-block",
      }}
    />
    {children}
  </div>
);

// ─── Section heading ───
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: align === "center" ? "column" : "row",
      alignItems: align === "center" ? "center" : "flex-end",
      justifyContent: "space-between",
      textAlign: align,
      gap: 24,
      marginBottom: 40,
    }}
  >
    <div style={{ maxWidth: align === "center" ? 720 : 680 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        style={{
          fontFamily: "var(--ff-serif)",
          fontWeight: 500,
          fontSize: "clamp(32px, 3.4vw, 48px)",
          lineHeight: 1.1,
          letterSpacing: -0.5,
          margin: 0,
          color: "var(--bi-ink-900)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 16,
            marginBottom: 0,
            color: "var(--bi-ink-500)",
            fontSize: 18,
            lineHeight: 1.55,
            maxWidth: 620,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
    {action}
  </div>
);

// ─── Breadcrumb ───
const Breadcrumb = ({ items }) => (
  <nav
    aria-label="Percorso di navigazione"
    style={{
      background: "var(--bi-surface)",
      borderBottom: "1px solid var(--bi-border)",
      padding: "10px 0",
    }}
  >
    <div className="container">
      <ol
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: 13,
          color: "var(--bi-ink-500)",
        }}
      >
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {i > 0 && (
              <Icon name="chevron-right" size={12} color="var(--bi-ink-300)" />
            )}
            {item.href ? (
              <a
                href={item.href}
                style={{ color: "var(--bi-primary)", fontWeight: 600 }}
              >
                {item.label}
              </a>
            ) : (
              <span
                aria-current="page"
                style={{ color: "var(--bi-ink-600)", fontWeight: 600 }}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

Object.assign(window, {
  Button,
  Badge,
  ArrowLink,
  Section,
  Eyebrow,
  SectionHeading,
  Breadcrumb,
});
