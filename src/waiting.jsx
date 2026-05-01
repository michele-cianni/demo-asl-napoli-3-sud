import React from 'react';
import { Icon } from './icons.jsx';
import { Badge, Section, SectionHeading, ArrowLink } from './ui.jsx';

// ─── Waiting lists + CUP widget ───

const WaitingLists = () => {
  const [tab, setTab] = React.useState('B');
  const priorities = [
    { id: 'U', label: 'U · Urgente', subtitle: 'entro 72 ore' },
    { id: 'B', label: 'B · Breve', subtitle: 'entro 10 giorni' },
    { id: 'D', label: 'D · Differita', subtitle: 'entro 30–60 giorni' },
    { id: 'P', label: 'P · Programmata', subtitle: 'entro 120 giorni' },
  ];
  const rows = {
    U: [
      { svc: 'Elettrocardiogramma', avg: 1, max: 2, target: 3, ok: true },
      { svc: 'Visita cardiologica', avg: 2, max: 3, target: 3, ok: true },
      { svc: 'Ecografia addome', avg: 2, max: 3, target: 3, ok: true },
    ],
    B: [
      { svc: 'Visita dermatologica', avg: 7, max: 9, target: 10, ok: true },
      { svc: 'Visita oculistica', avg: 8, max: 11, target: 10, ok: false },
      { svc: 'Mammografia', avg: 6, max: 8, target: 10, ok: true },
      { svc: 'Ecografia tiroide', avg: 9, max: 10, target: 10, ok: true },
      { svc: 'Visita ortopedica', avg: 10, max: 13, target: 10, ok: false },
    ],
    D: [
      { svc: 'Colonscopia', avg: 22, max: 28, target: 60, ok: true },
      { svc: 'Gastroscopia', avg: 18, max: 24, target: 60, ok: true },
      { svc: 'Risonanza ginocchio', avg: 34, max: 42, target: 60, ok: true },
      { svc: 'TC torace con mdc', avg: 41, max: 52, target: 60, ok: true },
    ],
    P: [
      {
        svc: 'Visita endocrinologica',
        avg: 68,
        max: 85,
        target: 120,
        ok: true,
      },
      { svc: 'Visita reumatologica', avg: 95, max: 118, target: 120, ok: true },
      { svc: 'Densitometria MOC', avg: 55, max: 70, target: 120, ok: true },
    ],
  };
  const active = rows[tab];
  const maxTarget = Math.max(...active.map((r) => Math.max(r.max, r.target)));

  return (
    <Section bg="var(--bi-bg-alt)" id="liste-attesa">
      <SectionHeading
        eyebrow="Trasparenza"
        title="Liste d'attesa aggiornate al 18 aprile 2026"
        subtitle="Tempi medi di attesa per le prestazioni ambulatoriali erogate dall'ASL Napoli 3 Sud, aggiornati ogni lunedì."
        action={<ArrowLink>Scarica il report completo</ArrowLink>}
      />

      <div
        style={{
          background: 'var(--bi-surface)',
          border: '1px solid var(--bi-border)',
          borderRadius: 16,
          overflow: 'hidden',
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--bi-border)',
            overflow: 'hidden',
          }}
        >
          {priorities.map((p) => {
            const active = tab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setTab(p.id)}
                style={{
                  flex: 1,
                  padding: '20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: active ? 'var(--bi-surface)' : 'var(--bi-bg-alt)',
                  borderBottom: active ? '3px solid var(--bi-primary)' : '3px solid transparent',
                  borderRight: '1px solid var(--bi-border)',
                  textAlign: 'left',
                  transition: 'background 0.15s ease',
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: active ? 'var(--bi-primary)' : 'var(--bi-ink-700)',
                  }}
                >
                  {p.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--bi-ink-500)',
                    marginTop: 2,
                  }}
                >
                  {p.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Header row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 3fr 100px 100px',
            padding: '14px 28px',
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            color: 'var(--bi-ink-500)',
            borderBottom: '1px solid var(--bi-border)',
            background: 'var(--bi-bg-alt)',
          }}
        >
          <div>Prestazione</div>
          <div>Tempo medio vs soglia regionale</div>
          <div style={{ textAlign: 'right' }}>Media</div>
          <div style={{ textAlign: 'right' }}>Soglia</div>
        </div>

        {/* Rows */}
        <div>
          {active.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 3fr 100px 100px',
                alignItems: 'center',
                padding: '18px 28px',
                borderBottom: i === active.length - 1 ? 'none' : '1px solid var(--bi-border)',
                gap: 20,
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  color: 'var(--bi-ink-900)',
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Icon name="stethoscope" size={16} color="var(--bi-ink-500)" />
                {r.svc}
              </div>
              <div
                style={{
                  position: 'relative',
                  height: 8,
                  background: 'var(--bi-ink-100)',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${(r.avg / maxTarget) * 100}%`,
                    background: r.ok ? 'var(--bi-success)' : 'var(--bi-warm)',
                    borderRadius: 4,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: `${(r.target / maxTarget) * 100}%`,
                    top: -4,
                    bottom: -4,
                    width: 2,
                    background: 'var(--bi-ink-700)',
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: 'right',
                  fontWeight: 700,
                  color: r.ok ? 'var(--bi-success)' : 'var(--bi-warm)',
                }}
              >
                {r.avg} gg
              </div>
              <div
                style={{
                  textAlign: 'right',
                  color: 'var(--bi-ink-500)',
                  fontSize: 14,
                }}
              >
                {r.target} gg
              </div>
            </div>
          ))}
        </div>

        {/* Footer legend */}
        <div
          style={{
            padding: '16px 28px',
            background: 'var(--bi-bg-alt)',
            borderTop: '1px solid var(--bi-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 13,
            color: 'var(--bi-ink-500)',
          }}
        >
          <div style={{ display: 'flex', gap: 20 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 12,
                  height: 3,
                  background: 'var(--bi-success)',
                  borderRadius: 2,
                }}
              />{' '}
              Entro soglia
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 12,
                  height: 3,
                  background: 'var(--bi-warm)',
                  borderRadius: 2,
                }}
              />{' '}
              Oltre soglia
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 2,
                  height: 12,
                  background: 'var(--bi-ink-700)',
                }}
              />{' '}
              Soglia regionale
            </span>
          </div>
          <span>Fonte: Agenas · Dati 2026 Q2</span>
        </div>
      </div>
    </Section>
  );
};

export { WaitingLists };
