import React from 'react';
import { Icon } from './icons.jsx';
import { Button, Eyebrow } from './ui.jsx';
import { useResponsive } from './responsive.jsx';

// ─── CTA band — Area personale / FSE ───
const CTABand = () => {
  const { isMobile, isCompact } = useResponsive();

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, var(--bi-primary) 0%, #004A99 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '56px 0' : '80px 0',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0,121,140,0.35), transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '50%',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 40,
          right: 60,
          width: 300,
          height: 300,
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '50%',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '1.2fr 1fr',
          gap: isCompact ? 32 : 64,
          alignItems: 'center',
        }}
      >
        <div>
          <Eyebrow color="rgba(255,255,255,0.8)">Fascicolo Sanitario Elettronico</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--ff-serif)',
              fontWeight: 500,
              fontSize: 'clamp(30px, 6vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: -0.5,
              margin: '0 0 20px',
              color: '#fff',
            }}
          >
            La tua salute in un unico posto,
            <br />
            <em style={{ fontStyle: 'italic', color: '#9BD4DB' }}>accessibile con SPID o CIE.</em>
          </h2>
          <p
            style={{
              fontSize: isMobile ? 16 : 18,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 32px',
              maxWidth: isCompact ? '100%' : 520,
            }}
          >
            Referti, prescrizioni, ricette dematerializzate, vaccinazioni, esenzioni. Consulta e
            condividi la tua storia clinica in sicurezza.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <Button variant="white" size="lg" icon="users">
              Accedi con SPID
            </Button>
            <Button variant="outlineWhite" size="lg" icon="users">
              Accedi con CIE
            </Button>
          </div>
        </div>

        {/* FSE mock card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 20,
            padding: isMobile ? 20 : 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.8,
                }}
              >
                Fascicolo di
              </div>
              <div
                style={{
                  fontFamily: 'var(--ff-serif)',
                  fontSize: 22,
                  fontWeight: 500,
                }}
              >
                Giovanna Esposito
              </div>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--ff-serif)',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              GE
            </div>
          </div>
          {[
            {
              label: 'Referti disponibili',
              val: '3 nuovi',
              icon: 'document',
              tone: '#9BD4DB',
            },
            {
              label: 'Prescrizioni attive',
              val: '2',
              icon: 'pill',
              tone: '#FFD480',
            },
            {
              label: 'Prossimi appuntamenti',
              val: '1 · 12 mag',
              icon: 'calendar',
              tone: '#9BD4DB',
            },
            {
              label: 'Vaccinazioni 2025',
              val: '4 dosi',
              icon: 'shield',
              tone: '#C8E6C9',
            },
          ].map((r, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 0',
                borderTop: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.1)',
                  color: r.tone,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name={r.icon} size={18} />
              </span>
              <span style={{ flex: 1, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                {r.label}
              </span>
              <span style={{ fontWeight: 700 }}>{r.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───
const Footer = () => {
  const { isMobile, isCompact } = useResponsive();

  return (
    <footer style={{ background: 'var(--bi-ink-900)', color: 'rgba(255,255,255,0.8)' }}>
      <div className="container" style={{ padding: isMobile ? '40px 0 0' : '48px 0 0' }}>
        {/* Logo row */}
        <div
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 20 : 40,
            paddingBottom: 40,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: 'var(--bi-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v18M3 12h18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div
              style={{
                fontFamily: 'var(--ff-serif)',
                color: '#fff',
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              ASL Napoli 3 Sud
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                width: 1,
                height: 44,
                background: 'rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}
            />
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name="shield" size={22} color="rgba(255,255,255,0.85)" />
            </div>
            <div
              style={{
                fontFamily: 'var(--ff-serif)',
                color: '#fff',
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Portale Regione Campania
            </div>
          </div>
        </div>

        {/* 3 nav columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isCompact ? 'repeat(2, 1fr)' : '1fr 1fr 1fr',
            gap: 40,
            padding: '48px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {[
            {
              title: 'Area Informativa',
              links: ['Servizi e prestazioni', 'Come fare per', 'Strutture', 'ASL Comunica'],
            },
            {
              title: 'Area Istituzionale',
              links: [
                'Organizzazione',
                'Documenti',
                'Personale',
                'Lavora con noi',
                'Ufficio Relazioni con il Pubblico (URP)',
                'Centro Unico Prenotazioni (CUP)',
              ],
            },
            {
              title: 'Trasparenza',
              links: ['Amministrazione trasparente', 'Albo pretorio', 'Carta dei servizi'],
            },
          ].map((col, i) => (
            <div key={i}>
              <div
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  marginBottom: 20,
                }}
              >
                {col.title}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 14,
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CONTATTI + SEGUICI SU */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
            gap: 40,
            padding: '40px 0 48px',
          }}
        >
          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Contatti
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, margin: '0 0 12px' }}>
              Via Marconi, 66 — 80059 Torre del Greco (NA)
              <br />
              C.F. / P.IVA 06321661211
              <br />
              PEC: protocollo@pec.aslnapoli3sud.it
              <br />
              +39 081 8727111
            </p>
            <a
              href="#"
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'underline',
              }}
            >
              Invia una segnalazione
            </a>
          </div>
          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Seguici su
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['facebook', 'instagram', 'x', 'youtube', 'linkedin'].map((n) => (
                <a
                  key={n}
                  href="#"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  <Icon name={n} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="container"
          style={{
            padding: isMobile ? '20px 16px' : '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              'Dichiarazione di accessibilità',
              'FAQ',
              'Informativa cookie',
              'Informativa privacy',
              'Note legali',
              'Mappa del sito',
            ].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'underline',
                  fontSize: 13,
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CTABand, Footer };
