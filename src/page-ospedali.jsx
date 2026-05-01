import React from 'react';
import { Icon } from './icons.jsx';
import { Button, Badge, ArrowLink, Section, SectionHeading, Breadcrumb, Eyebrow } from './ui.jsx';
import { TopBar, BrandRow, StickyHeader } from './header.jsx';
import { Footer } from './footer.jsx';
import { FeedbackWidget } from './feedback.jsx';

// ─── Pagina lista Ospedali (PRD §5.5) ───
// URL: /strutture/ospedali/
// Breadcrumb: Home → Strutture → Ospedali

const OSPEDALI = [
  {
    id: 'maresca',
    nome: 'Ospedale Maresca',
    comune: 'Torre del Greco',
    indirizzo: 'Via Montedoro, Torre del Greco (NA)',
    telefono: '081 849 2111',
    ps: true,
    psCodice: 'PS attivo 24/7',
    specialita: [
      'Cardiologia',
      'Chirurgia Generale',
      'Ortopedia',
      'Medicina Interna',
      'Pronto Soccorso',
    ],
    badge: 'PS 24/7',
    badgeTone: 'warm',
    href: 'page-maresca.html',
  },
  {
    id: 'boscoreale',
    nome: 'Presidio Ospedaliero di Boscoreale',
    comune: 'Boscoreale',
    indirizzo: 'Via Passanti 147, Boscoreale (NA)',
    telefono: '081 857 5111',
    ps: true,
    psCodice: 'PS attivo 24/7',
    specialita: ['Medicina Interna', 'Geriatria', 'Oncologia', 'Pronto Soccorso', 'Neurologia'],
    badge: 'PS 24/7',
    badgeTone: 'warm',
    href: '#',
  },
  {
    id: 'castellammare',
    nome: 'Presidio Ospedaliero San Leonardo',
    comune: 'Castellammare di Stabia',
    indirizzo: 'Via Cosenza, Castellammare di Stabia (NA)',
    telefono: '081 872 7111',
    ps: true,
    psCodice: 'PS attivo 24/7',
    specialita: [
      'Cardiologia',
      'Chirurgia Vascolare',
      'Ostetricia',
      'Neonatologia',
      'Pronto Soccorso',
    ],
    badge: 'PS 24/7',
    badgeTone: 'warm',
    href: '#',
  },
  {
    id: 'torre-annunziata',
    nome: 'Presidio Ospedaliero Mariano Lauro',
    comune: 'Torre Annunziata',
    indirizzo: 'Via Palazziello, Torre Annunziata (NA)',
    telefono: '081 861 2111',
    ps: false,
    specialita: ['Riabilitazione', 'Lungodegenza', 'Pneumologia', 'Urologia'],
    badge: 'Riabilitazione',
    badgeTone: 'teal',
    href: '#',
  },
  {
    id: 'gragnano',
    nome: 'Presidio Ospedaliero di Gragnano',
    comune: 'Gragnano',
    indirizzo: 'Via Vittorio Veneto, Gragnano (NA)',
    telefono: '081 801 2111',
    ps: false,
    specialita: ['Chirurgia Generale', 'Ortopedia', 'Oculistica', 'Otorinolaringoiatria'],
    badge: 'Day Surgery',
    badgeTone: 'primary',
    href: '#',
  },
  {
    id: 'sorrento',
    nome: 'Presidio Ospedaliero di Sorrento',
    comune: 'Sorrento',
    indirizzo: 'Corso Italia 1, Sorrento (NA)',
    telefono: '081 533 2111',
    ps: true,
    psCodice: 'PS stagionale',
    specialita: ['Medicina Interna', 'Chirurgia Generale', 'Pronto Soccorso', 'Cardiologia'],
    badge: 'PS stagionale',
    badgeTone: 'primary',
    href: '#',
  },
];

const ALL_COMUNI = [...new Set(OSPEDALI.map((o) => o.comune))].sort();
const ALL_SPECIALITA = [...new Set(OSPEDALI.flatMap((o) => o.specialita))].sort();

// ── Chip filtro ──
const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '6px 14px',
      borderRadius: 99,
      border: `1.5px solid ${active ? 'var(--bi-primary)' : 'var(--bi-border)'}`,
      background: active ? 'var(--bi-primary)' : 'var(--bi-surface)',
      color: active ? '#fff' : 'var(--bi-ink-700)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.15s',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </button>
);

// ── Card ospedale ──
const OspedaleCard = ({ osp }) => {
  const badgeTones = {
    warm: { bg: 'var(--bi-warm-100)', fg: 'var(--bi-warm)' },
    teal: { bg: 'var(--bi-teal-100)', fg: 'var(--bi-teal-700)' },
    primary: { bg: 'var(--bi-primary-100)', fg: 'var(--bi-primary-800)' },
  };
  const t = badgeTones[osp.badgeTone] || badgeTones.primary;

  return (
    <a
      href={osp.href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bi-surface)',
        border: '1px solid var(--bi-border)',
        borderRadius: 12,
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {/* Immagine placeholder 16:9 */}
      <div
        className="placeholder-img"
        style={{
          aspectRatio: '16/9',
          borderRadius: 0,
          fontSize: 11,
          color: 'var(--bi-primary-800)',
        }}
      >
        FOTO REALE · {osp.nome} · 800×450
      </div>

      <div
        style={{
          padding: '20px 22px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* Badge + PS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '3px 10px',
              borderRadius: 99,
              background: t.bg,
              color: t.fg,
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            {osp.badge}
          </span>
        </div>

        {/* Nome */}
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--ff-serif)',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'var(--bi-ink-900)',
          }}
        >
          {osp.nome}
        </h3>

        {/* Indirizzo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            fontSize: 13,
            color: 'var(--bi-ink-500)',
          }}
        >
          <Icon name="hospital" size={14} style={{ flexShrink: 0, marginTop: 1 }} />
          {osp.indirizzo}
        </div>

        {/* Telefono */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: 'var(--bi-ink-700)',
          }}
          onClick={(e) => e.preventDefault()}
        >
          <Icon name="phone" size={14} style={{ color: 'var(--bi-primary)' }} />
          <a
            href={`tel:${osp.telefono.replace(/\s/g, '')}`}
            style={{
              color: 'var(--bi-primary)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {osp.telefono}
          </a>
        </div>

        {/* Specialità chips (max 3) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginTop: 'auto',
            paddingTop: 8,
          }}
        >
          {osp.specialita.slice(0, 3).map((s) => (
            <span
              key={s}
              style={{
                padding: '3px 10px',
                borderRadius: 99,
                background: 'var(--bi-bg-alt)',
                color: 'var(--bi-ink-700)',
                fontSize: 11,
                fontWeight: 600,
                border: '1px solid var(--bi-border)',
              }}
            >
              {s}
            </span>
          ))}
          {osp.specialita.length > 3 && (
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 99,
                background: 'var(--bi-bg-alt)',
                color: 'var(--bi-ink-500)',
                fontSize: 11,
                fontWeight: 600,
                border: '1px solid var(--bi-border)',
              }}
            >
              +{osp.specialita.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            paddingTop: 12,
            borderTop: '1px solid var(--bi-border)',
            color: 'var(--bi-primary)',
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Scheda struttura
          <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </a>
  );
};

// ── Stato vuoto ──
const EmptyState = ({ onReset }) => (
  <div
    style={{
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '64px 32px',
      color: 'var(--bi-ink-500)',
    }}
  >
    <div style={{ fontSize: 48, marginBottom: 16 }}>🏥</div>
    <div
      style={{
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 8,
        color: 'var(--bi-ink-700)',
      }}
    >
      Nessun ospedale corrisponde ai filtri selezionati
    </div>
    <button
      onClick={onReset}
      style={{
        marginTop: 16,
        padding: '10px 24px',
        background: 'var(--bi-primary)',
        color: '#fff',
        borderRadius: 6,
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer',
        border: 'none',
      }}
    >
      Azzera filtri
    </button>
  </div>
);

// ── Pagina principale ──
const PageOspedali = () => {
  const [search, setSearch] = React.useState('');
  const [comuneFilter, setComuneFilter] = React.useState(null);
  const [specFilter, setSpecFilter] = React.useState(null);
  const [view, setView] = React.useState('lista'); // lista | mappa

  const filtered = OSPEDALI.filter((o) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      o.nome.toLowerCase().includes(q) ||
      o.specialita.some((s) => s.toLowerCase().includes(q));
    const matchComune = !comuneFilter || o.comune === comuneFilter;
    const matchSpec = !specFilter || o.specialita.includes(specFilter);
    return matchSearch && matchComune && matchSpec;
  });

  const resetFilters = () => {
    setSearch('');
    setComuneFilter(null);
    setSpecFilter(null);
  };

  const hasFilters = search || comuneFilter || specFilter;

  return (
    <div data-screen-label="05 Ospedali — lista" style={{ background: 'var(--bi-bg)' }}>
      <TopBar />
      <BrandRow />
      <StickyHeader activeItem="strutture" />
      <Breadcrumb
        items={[
          { label: 'Home', href: 'index.html' },
          { label: 'Strutture', href: '#' },
          { label: 'Ospedali' },
        ]}
      />

      {/* ── Titolo pagina ── */}
      <div style={{ background: 'var(--bi-surface)', padding: '32px 0 0' }}>
        <div className="container">
          <h1
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 500,
              lineHeight: 1.1,
              color: 'var(--bi-ink-900)',
              marginBottom: 12,
            }}
          >
            Ospedali
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'var(--bi-ink-500)',
              maxWidth: 680,
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            La rete ospedaliera dell'ASL Napoli 3 Sud comprende {OSPEDALI.length} presidi
            distribuiti nel territorio dei 58 comuni dell'area vesuviana, stabiese e sorrentina.
          </p>
        </div>
      </div>

      {/* ── Barra di ricerca ── */}
      <div
        style={{
          background: 'var(--bi-surface)',
          borderBottom: '1px solid var(--bi-border)',
          padding: '24px 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {/* Search input */}
            <div
              style={{
                flex: '1 1 300px',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bi-bg)',
                border: '1.5px solid var(--bi-border)',
                borderRadius: 8,
                overflow: 'hidden',
                transition: 'border-color 0.15s',
              }}
              onFocusCapture={(e) => (e.currentTarget.style.borderColor = 'var(--bi-primary)')}
              onBlurCapture={(e) => (e.currentTarget.style.borderColor = 'var(--bi-border)')}
            >
              <span
                style={{
                  padding: '0 14px',
                  color: 'var(--bi-ink-500)',
                  flexShrink: 0,
                }}
              >
                <Icon name="search" size={18} />
              </span>
              <input
                type="text"
                placeholder="Cerca per nome ospedale o specialità…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 0',
                  fontSize: 15,
                  background: 'transparent',
                  color: 'var(--bi-ink-900)',
                  fontFamily: 'var(--ff-sans)',
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{
                    padding: '0 14px',
                    color: 'var(--bi-ink-500)',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="close" size={16} />
                </button>
              )}
            </div>

            {/* Toggle lista / mappa */}
            <div
              style={{
                display: 'flex',
                border: '1.5px solid var(--bi-border)',
                borderRadius: 8,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {[
                { id: 'lista', icon: 'menu', label: 'Lista' },
                { id: 'mappa', icon: 'hospital', label: 'Mappa' },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '9px 16px',
                    fontSize: 13,
                    fontWeight: 700,
                    background: view === v.id ? 'var(--bi-primary)' : 'var(--bi-surface)',
                    color: view === v.id ? '#fff' : 'var(--bi-ink-700)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  <Icon name={v.icon} size={15} />
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtri a chip */}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            {/* Filtro comune */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--bi-ink-500)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 8,
                }}
              >
                Comune
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <FilterChip
                  label="Tutti"
                  active={!comuneFilter}
                  onClick={() => setComuneFilter(null)}
                />
                {ALL_COMUNI.map((c) => (
                  <FilterChip
                    key={c}
                    label={c}
                    active={comuneFilter === c}
                    onClick={() => setComuneFilter(comuneFilter === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            {/* Filtro specialità */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--bi-ink-500)',
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  marginBottom: 8,
                }}
              >
                Specialità
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <FilterChip
                  label="Tutte"
                  active={!specFilter}
                  onClick={() => setSpecFilter(null)}
                />
                {ALL_SPECIALITA.slice(0, 8).map((s) => (
                  <FilterChip
                    key={s}
                    label={s}
                    active={specFilter === s}
                    onClick={() => setSpecFilter(specFilter === s ? null : s)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contatore risultati */}
          {hasFilters && (
            <div
              style={{
                marginTop: 12,
                fontSize: 13,
                color: 'var(--bi-ink-500)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span>
                {filtered.length === 0
                  ? 'Nessun risultato'
                  : `${filtered.length} ospedal${filtered.length !== 1 ? 'i' : 'e'} trovat${filtered.length !== 1 ? 'i' : 'o'}`}
              </span>
              <button
                onClick={resetFilters}
                style={{
                  color: 'var(--bi-primary)',
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Azzera filtri
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Vista lista ── */}
      {view === 'lista' && (
        <div style={{ padding: '48px 0 80px' }}>
          <div className="container">
            {filtered.length === 0 ? (
              <div style={{ display: 'grid' }}>
                <EmptyState onReset={resetFilters} />
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: 24,
                }}
              >
                {filtered.map((osp) => (
                  <OspedaleCard key={osp.id} osp={osp} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Vista mappa (placeholder) ── */}
      {view === 'mappa' && (
        <div style={{ padding: '48px 0 80px' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 340px',
                gap: 24,
                alignItems: 'start',
              }}
            >
              {/* Mappa placeholder */}
              <div
                className="placeholder-img"
                style={{
                  aspectRatio: '4/3',
                  borderRadius: 12,
                  fontSize: 13,
                  color: 'var(--bi-primary-800)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                }}
              >
                <Icon name="hospital" size={48} />
                <div style={{ fontWeight: 700 }}>Mappa interattiva</div>
                <div style={{ opacity: 0.7, fontSize: 12 }}>
                  OpenStreetMap / Leaflet.js — da integrare in sviluppo
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  {OSPEDALI.map((o) => (
                    <div
                      key={o.id}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: o.ps ? 'var(--bi-warm)' : 'var(--bi-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      title={o.nome}
                    >
                      <Icon name="hospital" size={14} style={{ color: '#fff' }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lista laterale */}
              <div
                style={{
                  background: 'var(--bi-surface)',
                  border: '1px solid var(--bi-border)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--bi-border)',
                    fontWeight: 700,
                    fontSize: 14,
                    color: 'var(--bi-ink-900)',
                  }}
                >
                  {filtered.length} osped{filtered.length !== 1 ? 'ali' : 'ale'} nel territorio
                </div>
                {filtered.map((osp, i) => (
                  <a
                    key={osp.id}
                    href={osp.href}
                    style={{
                      display: 'flex',
                      gap: 12,
                      padding: '14px 20px',
                      borderBottom: i < filtered.length - 1 ? '1px solid var(--bi-border)' : 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background 0.12s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--bi-primary-050)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        flexShrink: 0,
                        background: osp.ps ? 'var(--bi-warm-100)' : 'var(--bi-primary-050)',
                        color: osp.ps ? 'var(--bi-warm)' : 'var(--bi-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="hospital" size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: 'var(--bi-ink-900)',
                          lineHeight: 1.3,
                        }}
                      >
                        {osp.nome}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: 'var(--bi-ink-500)',
                          marginTop: 2,
                        }}
                      >
                        {osp.comune}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <FeedbackWidget />
      <Footer />
    </div>
  );
};

export { PageOspedali };
