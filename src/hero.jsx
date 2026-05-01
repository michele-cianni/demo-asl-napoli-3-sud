import React from 'react';
import { Icon } from './icons.jsx';
import { Button, Badge, Eyebrow } from './ui.jsx';

// ─── Hero with search ───
const Hero = () => {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);

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
        padding: '80px 0 100px',
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
          gridTemplateColumns: '1.15fr 1fr',
          gap: 72,
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
              fontSize: 'clamp(40px, 5vw, 64px)',
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
              fontSize: 19,
              lineHeight: 1.55,
              color: 'var(--bi-ink-700)',
              marginBottom: 32,
              maxWidth: 560,
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
                padding: '6px 6px 6px 20px',
                gap: 12,
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
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--ff-sans)',
                  fontSize: 17,
                  padding: '16px 0',
                  background: 'transparent',
                  color: 'var(--bi-ink-900)',
                }}
              />
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
              <Button variant="primary" iconRight="arrow-right" size="md">
                Cerca
              </Button>
            </div>

            {focused && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  right: 0,
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid var(--bi-border)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: 8,
                  zIndex: 30,
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
const HeroVisual = () => (
  <div style={{ position: 'relative', minHeight: 480 }}>
    {/* background placeholder image */}
    <div
      className="placeholder-img"
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 20,
        fontSize: 11,
        background:
          'repeating-linear-gradient(135deg, rgba(0,121,140,0.08), rgba(0,121,140,0.08) 10px, rgba(0,121,140,0.16) 10px, rgba(0,121,140,0.16) 20px), #E3F1F3',
        color: 'var(--bi-teal-700)',
      }}
    >
      PLACEHOLDER IMG · Medico con paziente · 1200×900
    </div>

    {/* card 1 — CUP next appointment */}
    <div
      style={{
        position: 'absolute',
        top: 40,
        left: -40,
        width: 300,
        padding: 20,
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

    {/* card 2 — waiting list micro-widget */}
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        right: -30,
        width: 280,
        padding: 20,
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
          Liste d'attesa · oggi
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
            padding: '10px 0',
            borderTop: i > 0 ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <span style={{ fontSize: 13, color: 'var(--bi-ink-900)' }}>{r.label}</span>
          <Badge tone={r.tone}>{r.days} gg</Badge>
        </div>
      ))}
    </div>
  </div>
);

export { Hero };
