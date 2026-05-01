import React from 'react';
import { Icon } from './icons.jsx';
import { Button, Badge, ArrowLink, Section, SectionHeading, Eyebrow } from './ui.jsx';

// ─── In evidenza (news) + Strutture ───

const News = () => {
  const items = [
    {
      badge: 'Avviso',
      badgeTone: 'warm',
      date: '18 aprile 2026',
      title: 'Nuovo ambulatorio per la terapia del dolore a Castellammare',
      desc: 'Dal 5 maggio apre il nuovo centro di II livello al Presidio San Leonardo. Visite su prenotazione CUP.',
      readTime: '2 min',
      feat: true,
    },
    {
      badge: 'Bando',
      badgeTone: 'primary',
      date: '15 aprile 2026',
      title: 'Concorso pubblico per 24 posti di Infermiere',
      desc: 'Scadenza presentazione domande: 30 maggio 2026.',
      readTime: '3 min',
    },
    {
      badge: 'Salute',
      badgeTone: 'teal',
      date: '12 aprile 2026',
      title: 'Giornata mondiale della voce: visite gratuite il 16 aprile',
      desc: "Otorinolaringoiatria aperta al pubblico presso 4 presidi dell'ASL.",
      readTime: '1 min',
    },
    {
      badge: 'Avviso',
      badgeTone: 'warm',
      date: '10 aprile 2026',
      title: 'Modifiche orari Punti Prelievo Pasqua 2026',
      desc: 'Variazioni dal 18 al 21 aprile. Consulta il calendario completo.',
      readTime: '1 min',
    },
  ];

  const [feat, ...rest] = items;

  return (
    <Section bg="var(--bi-bg-alt)" id="news">
      <SectionHeading
        eyebrow="ASL comunica"
        title="In evidenza"
        subtitle="Avvisi, notizie, campagne e bandi dell'azienda sanitaria."
        action={<ArrowLink>Tutte le notizie</ArrowLink>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24 }}>
        {/* Featured */}
        <article
          style={{
            background: 'var(--bi-surface)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid var(--bi-border)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className="placeholder-img"
            style={{
              aspectRatio: '16/9',
              borderRadius: 0,
              fontSize: 11,
              color: 'var(--bi-primary-800)',
            }}
          >
            PLACEHOLDER IMG · Ambulatorio terapia del dolore · 1600×900
          </div>
          <div style={{ padding: 32, flex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <Badge tone={feat.badgeTone}>{feat.badge}</Badge>
              <span style={{ fontSize: 13, color: 'var(--bi-ink-500)' }}>
                {feat.date} · {feat.readTime} di lettura
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--ff-serif)',
                fontSize: 28,
                fontWeight: 500,
                lineHeight: 1.2,
                margin: '0 0 12px',
                color: 'var(--bi-ink-900)',
                textWrap: 'pretty',
              }}
            >
              {feat.title}
            </h3>
            <p
              style={{
                color: 'var(--bi-ink-500)',
                fontSize: 16,
                lineHeight: 1.6,
                margin: '0 0 20px',
              }}
            >
              {feat.desc}
            </p>
            <ArrowLink>Leggi l'avviso</ArrowLink>
          </div>
        </article>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {rest.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                background: 'var(--bi-surface)',
                borderRadius: 12,
                border: '1px solid var(--bi-border)',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                color: 'var(--bi-ink-900)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--bi-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--bi-border)')}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <Badge tone={item.badgeTone}>{item.badge}</Badge>
                <span style={{ fontSize: 12, color: 'var(--bi-ink-500)' }}>
                  {item.date} · {item.readTime}
                </span>
              </div>
              <h4
                style={{
                  margin: 0,
                  fontFamily: 'var(--ff-serif)',
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: 'var(--bi-ink-900)',
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  color: 'var(--bi-ink-500)',
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ─── Strutture — presidi e distretti ───
const Facilities = () => {
  const tabs = ['Presidi ospedalieri', 'Distretti sanitari', 'Consultori', 'Punti prelievo'];
  const [active, setActive] = React.useState(0);
  const presidi = [
    {
      name: 'P.O. Santa Maria delle Grazie',
      city: 'Pozzuoli',
      beds: 250,
      depts: 14,
      phone: '081 855 2111',
    },
    {
      name: 'P.O. Santa Maria della Pietà',
      city: 'Nola',
      beds: 180,
      depts: 12,
      phone: '081 310 5111',
    },
    {
      name: 'P.O. San Leonardo',
      city: 'Castellammare',
      beds: 310,
      depts: 18,
      phone: '081 872 9111',
    },
    {
      name: 'P.O. Anna Rizzoli',
      city: 'Ischia',
      beds: 95,
      depts: 8,
      phone: '081 507 9111',
    },
    {
      name: 'P.O. Boscotrecase',
      city: 'Boscotrecase',
      beds: 135,
      depts: 10,
      phone: '081 535 3111',
    },
    {
      name: 'P.O. Maresca',
      city: 'Torre del Greco',
      beds: 215,
      depts: 13,
      phone: '081 849 0111',
    },
  ];

  return (
    <Section bg="var(--bi-surface)" id="strutture">
      <SectionHeading
        eyebrow="Sul territorio"
        title="Presidi e distretti dell'ASL"
        subtitle="62 strutture al servizio di circa 1.1 milioni di cittadini nei comuni a sud della provincia di Napoli."
        action={
          <Button variant="outline" icon="location">
            Mappa interattiva
          </Button>
        }
      />

      {/* tabs */}
      <div
        style={{
          display: 'flex',
          gap: 4,
          marginBottom: 24,
          borderBottom: '1px solid var(--bi-border)',
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            style={{
              padding: '14px 20px',
              fontSize: 14,
              fontWeight: 600,
              color: active === i ? 'var(--bi-primary)' : 'var(--bi-ink-500)',
              borderBottom: active === i ? '3px solid var(--bi-primary)' : '3px solid transparent',
              marginBottom: -1,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {presidi.map((p, i) => (
          <a
            key={i}
            href="#"
            style={{
              padding: 24,
              borderRadius: 12,
              border: '1px solid var(--bi-border)',
              background: 'var(--bi-surface)',
              color: 'var(--bi-ink-900)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--bi-primary)';
              e.currentTarget.style.background = 'var(--bi-primary-050)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--bi-border)';
              e.currentTarget.style.background = 'var(--bi-surface)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: 'var(--bi-primary-050)',
                  color: 'var(--bi-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name="hospital" size={20} />
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: 'var(--ff-serif)',
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    marginBottom: 2,
                  }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 13, color: 'var(--bi-ink-500)' }}>
                  <Icon name="location" size={12} /> {p.city}
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 20,
                paddingTop: 16,
                borderTop: '1px solid var(--bi-border)',
                fontSize: 13,
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: 'var(--bi-ink-900)',
                  }}
                >
                  {p.beds}
                </div>
                <div
                  style={{
                    color: 'var(--bi-ink-500)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                  }}
                >
                  Posti letto
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: 'var(--bi-ink-900)',
                  }}
                >
                  {p.depts}
                </div>
                <div
                  style={{
                    color: 'var(--bi-ink-500)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                  }}
                >
                  Reparti
                </div>
              </div>
              <div style={{ flex: 1, textAlign: 'right', alignSelf: 'center' }}>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--bi-primary)',
                    fontWeight: 600,
                  }}
                >
                  <Icon name="phone" size={12} /> {p.phone}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export { News, Facilities };
