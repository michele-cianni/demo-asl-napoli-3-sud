import React from 'react';
import { Icon } from './icons.jsx';
import { Button, Badge, Eyebrow } from './ui.jsx';
import { useResponsive } from './responsive.jsx';

// ─── Hero with search ───
const Hero = () => {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const { isMobile, isCompact } = useResponsive();

  const suggestions = [
    {
      label: 'Prenotare una visita specialistica',
      icon: 'calendar',
      cat: 'Servizio',
    },
    { label: 'Ritirare un referto online', icon: 'document', cat: 'Servizio' },
    { label: 'Cambio medico di base', icon: 'users', cat: 'Come fare per' },
    {
      label: 'Esenzione ticket per reddito',
      icon: 'document',
      cat: 'Come fare per',
    },
    {
      label: 'Distretto sanitario di Torre del Greco',
      icon: 'hospital',
      cat: 'Struttura',
    },
  ];

  const quick = [
    "Liste d'attesa",
    'CUP online',
    'Cambio medico',
    'Referti online',
    'Screening',
    'Vaccinazioni',
  ];

  const filtered = query
    ? suggestions.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : suggestions.slice(0, 4);

  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(160deg, var(--bi-primary-050) 0%, var(--bi-surface) 70%)',
        overflow: 'hidden',
        padding: isMobile ? '48px 0 56px' : isCompact ? '64px 0 80px' : '80px 0 100px',
      }}
    >
      {/* decorative geometry */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,121,140,0.10) 0%, transparent 65%)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -180,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,204,0.10) 0%, transparent 65%)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 120,
          right: '38%',
          width: 1,
          height: 260,
          background: 'linear-gradient(to bottom, transparent, var(--bi-primary-100), transparent)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '1.15fr 1fr',
          gap: isCompact ? 40 : 72,
          alignItems: 'center',
        }}
      >
        {/* left — search & message */}
        <div className="animate-in">
          <Eyebrow>Servizio sanitario regionale</Eyebrow>
          <h1
            style={{
              fontFamily: 'var(--ff-serif)',
              fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: -1,
              margin: '0 0 24px',
              color: 'var(--bi-ink-900)',
              textWrap: 'pretty',
            }}
          >
            La salute dei cittadini,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--bi-teal)' }}>a portata di mano.</em>
          </h1>
          <p
            style={{
              fontSize: isMobile ? 17 : 19,
              lineHeight: 1.55,
              color: 'var(--bi-ink-700)',
              marginBottom: 32,
              maxWidth: isCompact ? '100%' : 560,
            }}
          >
            Prenota prestazioni, scarica referti, trova il presidio più vicino. Cerca un servizio o
            scopri come fare per.
          </p>

          {/* search box */}
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: focused
                ? '0 0 0 4px rgba(0,102,204,0.15), var(--shadow-lg)'
                : 'var(--shadow-md)',
              border: '1px solid var(--bi-border)',
              transition: 'all 0.2s ease',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                padding: isMobile ? '12px 14px' : '6px 6px 6px 20px',
                gap: isMobile ? 10 : 12,
              }}
            >
              <Icon name="search" size={22} color="var(--bi-primary)" />
              <input
                type="text"
                placeholder="Cerca un servizio, una prestazione o una struttura…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 200)}
                style={{
                  flex: 1,
                  minWidth: isMobile ? 'calc(100% - 34px)' : 0,
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--ff-sans)',
                  fontSize: isMobile ? 16 : 17,
                  padding: isMobile ? '6px 0 2px' : '16px 0',
                  background: 'transparent',
                  color: 'var(--bi-ink-900)',
                }}
              />
              {!isMobile && (
                <button
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bi-ink-500)',
                  }}
                >
                  <Icon name="microphone" size={18} />
                </button>
              )}
              <div style={{ width: isMobile ? '100%' : 'auto' }}>
                <Button variant="primary" iconRight="arrow-right" size="md" block={isMobile}>
                  Cerca
                </Button>
              </div>
            </div>

            {focused && (
              <div
                style={{
                  position: isMobile ? 'static' : 'absolute',
                  top: isMobile ? 'auto' : 'calc(100% + 8px)',
                  left: isMobile ? 'auto' : 0,
                  right: isMobile ? 'auto' : 0,
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid var(--bi-border)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: 8,
                  zIndex: 30,
                  marginTop: isMobile ? 8 : 0,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    color: 'var(--bi-ink-500)',
                    textTransform: 'uppercase',
                    padding: '8px 12px',
                  }}
                >
                  {query ? `${filtered.length} risultati` : 'Suggerimenti'}
                </div>
                {filtered.map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 12px',
                      borderRadius: 8,
                      color: 'var(--bi-ink-900)',
                      fontSize: 15,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bi-bg-alt)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: 'var(--bi-primary-050)',
                        color: 'var(--bi-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name={s.icon} size={16} />
                    </span>
                    <span style={{ flex: 1 }}>{s.label}</span>
                    <span style={{ fontSize: 12, color: 'var(--bi-ink-500)' }}>{s.cat}</span>
                    <Icon name="arrow-up-right" size={14} color="var(--bi-ink-500)" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* quick chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            <span
              style={{
                fontSize: 13,
                color: 'var(--bi-ink-500)',
                alignSelf: 'center',
                marginRight: 4,
                width: isMobile ? '100%' : 'auto',
              }}
            >
              Ricerca rapida:
            </span>
            {quick.map((q) => (
              <a
                key={q}
                href="#"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '6px 12px',
                  borderRadius: 99,
                  background: '#fff',
                  border: '1px solid var(--bi-border)',
                  color: 'var(--bi-ink-700)',
                }}
              >
                {q}
              </a>
            ))}
          </div>
        </div>

        {/* right — hero visual: composed data card */}
        <HeroVisual />
      </div>
    </section>
  );
};

// Synthetic hero visual — evocative "dashboard" card, no photo needed
const HeroVisual = () => {
  const { isMobile, isCompact } = useResponsive();

  const placeholder = (
    <div
      className="placeholder-img"
      style={{
        position: isMobile ? 'relative' : 'absolute',
        inset: isMobile ? 'auto' : 0,
        aspectRatio: isMobile ? '16 / 11' : undefined,
        borderRadius: 20,
        fontSize: 11,
        background:
          'repeating-linear-gradient(135deg, rgba(0,121,140,0.08), rgba(0,121,140,0.08) 10px, rgba(0,121,140,0.16) 10px, rgba(0,121,140,0.16) 20px), #E3F1F3',
        color: 'var(--bi-teal-700)',
      }}
    >
      PLACEHOLDER IMG · Medico con paziente · 1200×900
    </div>
  );

  const appointmentCard = (
    <div
      style={{
        position: isMobile ? 'relative' : 'absolute',
        top: isMobile ? 'auto' : isCompact ? 24 : 40,
        left: isMobile ? 'auto' : isCompact ? 16 : -40,
        width: isMobile ? '100%' : isCompact ? 280 : 300,
        padding: isMobile ? 18 : 20,
        background: '#fff',
        borderRadius: 14,
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--bi-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'var(--bi-primary-100)',
            color: 'var(--bi-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="calendar" size={16} />
        </span>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            color: 'var(--bi-ink-500)',
          }}
        >
          Prossima visita
        </div>
      </div>
      <div
        style={{
          fontFamily: 'var(--ff-serif)',
          fontSize: 20,
          fontWeight: 500,
          color: 'var(--bi-ink-900)',
          marginBottom: 6,
        }}
      >
        Cardiologia · Visita di controllo
      </div>
      <div style={{ fontSize: 14, color: 'var(--bi-ink-500)', marginBottom: 12 }}>
        <Icon name="location" size={13} /> P.O. Boscotrecase — Amb. 3A
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 12px',
          borderRadius: 8,
          background: 'var(--bi-primary-050)',
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--bi-primary)' }}>12</div>
        <div>
          <div
            style={{
              fontSize: 11,
              color: 'var(--bi-ink-500)',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            Mag 2026
          </div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>09:30 — con Dott. R. Esposito</div>
        </div>
      </div>
    </div>
  );

  const waitingCard = (
    <div
      style={{
        position: isMobile ? 'relative' : 'absolute',
        bottom: isMobile ? 'auto' : isCompact ? 24 : 30,
        right: isMobile ? 'auto' : isCompact ? 16 : -30,
        width: isMobile ? '100%' : isCompact ? 260 : 280,
        padding: isMobile ? 18 : 20,
        background: '#fff',
        borderRadius: 14,
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--bi-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--bi-success)',
            boxShadow: '0 0 0 3px rgba(0,128,85,0.2)',
            animation: 'pulse 2s ease infinite',
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--bi-ink-700)',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          Liste d&apos;attesa · oggi
        </span>
      </div>
      {[
        { label: 'Ecografia addome', days: 8, tone: 'success' },
        { label: 'Visita dermatologica', days: 21, tone: 'warning' },
        { label: 'TAC torace', days: 45, tone: 'danger' },
      ].map((r, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '10px 0',
            borderTop: i > 0 ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <span style={{ fontSize: 13, color: 'var(--bi-ink-900)' }}>{r.label}</span>
          <Badge tone={r.tone}>{r.days} gg</Badge>
        </div>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {placeholder}
        {appointmentCard}
        {waitingCard}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', minHeight: isCompact ? 520 : 480 }}>
      {placeholder}
      {appointmentCard}
      {waitingCard}
    </div>
  );
};

export { Hero };
