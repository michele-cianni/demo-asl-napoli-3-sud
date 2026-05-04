import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Badge, ArrowLink, Section, SectionHeading } from './UI.jsx';
import styles from './News.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

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

      <div className={styles.news__grid}>
        {/* Featured */}
        <article className={styles.news__featCard}>
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
          <div className={styles.news__featBody}>
            <div className={styles.news__featMeta}>
              <Badge tone={feat.badgeTone}>{feat.badge}</Badge>
              <span className={styles.news__featDate}>
                {feat.date} · {feat.readTime} di lettura
              </span>
            </div>
            <h3 className={styles.news__featTitle}>{feat.title}</h3>
            <p className={styles.news__featDesc}>{feat.desc}</p>
            <ArrowLink>Leggi l&apos;avviso</ArrowLink>
          </div>
        </article>

        {/* List */}
        <div className={styles.news__list}>
          {rest.map((item, i) => (
            <a key={i} href="#" className={styles.news__listItem}>
              <div className={styles.news__listMeta}>
                <Badge tone={item.badgeTone}>{item.badge}</Badge>
                <span className={styles.news__listDate}>
                  {item.date} · {item.readTime}
                </span>
              </div>
              <h4 className={styles.news__listTitle}>{item.title}</h4>
              <p className={styles.news__listDesc}>{item.desc}</p>
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
      <div className={styles.fac__tabsRow}>
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={cx(styles.fac__tab, active === i && styles['fac__tab--active'])}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.fac__grid}>
        {presidi.map((p, i) => (
          <a key={i} href="#" className={styles.fac__card}>
            <div className={styles.fac__cardHead}>
              <span className={styles.fac__icon}>
                <Icon name="hospital" size={20} />
              </span>
              <div style={{ flex: 1 }}>
                <div className={styles.fac__cardName}>{p.name}</div>
                <div className={styles.fac__cardCity}>
                  <Icon name="location" size={12} /> {p.city}
                </div>
              </div>
            </div>
            <div className={styles.fac__cardStats}>
              <div>
                <div className={styles.fac__statValue}>{p.beds}</div>
                <div className={styles.fac__statLabel}>Posti letto</div>
              </div>
              <div>
                <div className={styles.fac__statValue}>{p.depts}</div>
                <div className={styles.fac__statLabel}>Reparti</div>
              </div>
              <div className={styles.fac__statPhone}>
                <Icon name="phone" size={12} /> {p.phone}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export { News, Facilities };
