import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Badge, Eyebrow } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Hero.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── Hero with search ───
const Hero = () => {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const { isMobile } = useResponsive();

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
    <section className={styles.section}>
      {/* decorative geometry */}
      <div aria-hidden className={styles.decor1} />
      <div aria-hidden className={styles.decor2} />
      <div aria-hidden className={styles.decor3} />

      <div className={cx('container', styles.grid)}>
        {/* left — search & message */}
        <div className="animate-in">
          <Eyebrow>Servizio sanitario regionale</Eyebrow>
          <h1 className={styles.heading}>
            La salute dei cittadini, <em>a portata di mano.</em>
          </h1>
          <p className={styles.intro}>
            Prenota prestazioni, scarica referti, trova il presidio più vicino. Cerca un servizio o
            scopri come fare per.
          </p>

          {/* search box */}
          <div className={cx(styles.searchBox, focused && styles['searchBox--focused'])}>
            <div className={styles.searchRow}>
              <Icon name="search" size={22} color="var(--bi-primary)" />
              <input
                type="text"
                placeholder="Cerca un servizio, una prestazione o una struttura…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 200)}
                className={styles.searchInput}
              />
              {!isMobile && (
                <button className={styles.micBtn}>
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
              <div className={styles.dropdown}>
                <div className={styles.dropdown__label}>
                  {query ? `${filtered.length} risultati` : 'Suggerimenti'}
                </div>
                {filtered.map((s, i) => (
                  <a key={i} href="#" className={styles.suggestion}>
                    <span className={styles.suggestion__icon}>
                      <Icon name={s.icon} size={16} />
                    </span>
                    <span style={{ flex: 1 }}>{s.label}</span>
                    <span className={styles.suggestion__cat}>{s.cat}</span>
                    <Icon name="arrow-up-right" size={14} color="var(--bi-ink-500)" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* quick chips */}
          <div className={styles.chips}>
            <span className={styles.chips__label}>Ricerca rapida:</span>
            {quick.map((q) => (
              <a key={q} href="#" className={styles.chip}>
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
  const { isMobile } = useResponsive();

  const placeholder = (
    <div className={cx('placeholder-img', styles.placeholder, styles[isMobile ? 'placeholder--mobile' : 'placeholder--desktop'])}>
      PLACEHOLDER IMG · Medico con paziente · 1200×900
    </div>
  );

  const appointmentCard = (
    <div className={isMobile ? cx(styles.apptCard, styles['apptCard--mobile']) : styles.apptCard}>
      <div className={styles.apptCard__head}>
        <span className={styles.apptCard__iconWrap}>
          <Icon name="calendar" size={16} />
        </span>
        <div className={styles.apptCard__label}>Prossima visita</div>
      </div>
      <div className={styles.apptCard__title}>Cardiologia · Visita di controllo</div>
      <div className={styles.apptCard__loc}>
        <Icon name="location" size={13} /> P.O. Boscotrecase — Amb. 3A
      </div>
      <div className={styles.apptCard__date}>
        <div className={styles.apptCard__day}>12</div>
        <div>
          <div className={styles.apptCard__month}>Mag 2026</div>
          <div className={styles.apptCard__time}>09:30 — con Dott. R. Esposito</div>
        </div>
      </div>
    </div>
  );

  const waitingCard = (
    <div className={isMobile ? cx(styles.waitCard, styles['waitCard--mobile']) : styles.waitCard}>
      <div className={styles.waitCard__head}>
        <span className={styles.waitCard__dot} />
        <span className={styles.waitCard__label}>Liste d&apos;attesa · oggi</span>
      </div>
      {[
        { label: 'Ecografia addome', days: 8, tone: 'success' },
        { label: 'Visita dermatologica', days: 21, tone: 'warning' },
        { label: 'TAC torace', days: 45, tone: 'danger' },
      ].map((r, i) => (
        <div key={i} className={styles.waitCard__row}>
          <span style={{ fontSize: 13, color: 'var(--bi-ink-900)' }}>{r.label}</span>
          <Badge tone={r.tone}>{r.days} gg</Badge>
        </div>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <div className={styles.visualMobile}>
        {placeholder}
        {appointmentCard}
        {waitingCard}
      </div>
    );
  }

  return (
    <div className={styles.visual}>
      {placeholder}
      {appointmentCard}
      {waitingCard}
    </div>
  );
};

export { Hero };
