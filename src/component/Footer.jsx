import React from 'react';
import { Icon } from '../icons.jsx';
import { Button, Eyebrow } from './UI.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Footer.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

// ─── CTA band — Area personale / FSE ───
const CTABand = () => (
  <section className={styles.ctaBand}>
    <div aria-hidden className={styles.ctaBand__overlay} />
    <div aria-hidden className={styles.ctaBand__ringLg} />
    <div aria-hidden className={styles.ctaBand__ringSm} />

    <div className={cx('container', styles.ctaBand__grid)}>
      <div>
        <Eyebrow color="rgba(255,255,255,0.8)">Fascicolo Sanitario Elettronico</Eyebrow>
        <h2 className={styles.ctaBand__title}>
          La tua salute in un unico posto,
          <br />
          <em className={styles.ctaBand__titleEm}>accessibile con SPID o CIE.</em>
        </h2>
        <p className={styles.ctaBand__intro}>
          Referti, prescrizioni, ricette dematerializzate, vaccinazioni, esenzioni. Consulta e
          condividi la tua storia clinica in sicurezza.
        </p>
        <div className={styles.ctaBand__buttons}>
          <Button variant="white" size="lg" icon="users">
            Accedi con SPID
          </Button>
          <Button variant="outlineWhite" size="lg" icon="users">
            Accedi con CIE
          </Button>
        </div>
      </div>

      {/* FSE mock card */}
      <div className={styles.ctaCard}>
        <div className={styles.ctaCard__head}>
          <div>
            <div className={styles.ctaCard__eyebrow}>Fascicolo di</div>
            <div className={styles.ctaCard__name}>Giovanna Esposito</div>
          </div>
          <div className={styles.ctaCard__avatar}>GE</div>
        </div>
        {[
          { label: 'Referti disponibili', val: '3 nuovi', icon: 'document', tone: '#9BD4DB' },
          { label: 'Prescrizioni attive', val: '2', icon: 'pill', tone: '#FFD480' },
          { label: 'Prossimi appuntamenti', val: '1 · 12 mag', icon: 'calendar', tone: '#9BD4DB' },
          { label: 'Vaccinazioni 2025', val: '4 dosi', icon: 'shield', tone: '#C8E6C9' },
        ].map((r, i) => (
          <div key={i} className={styles.ctaCard__row}>
            <span className={styles.ctaCard__icon} style={{ color: r.tone }}>
              <Icon name={r.icon} size={18} />
            </span>
            <span className={styles.ctaCard__label}>{r.label}</span>
            <span className={styles.ctaCard__val}>{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Footer ───
const Footer = () => {
  const { isMobile } = useResponsive();

  return (
    <footer className={styles.footer}>
      <div className={cx('container', styles.footer__inner)}>
        {/* Logo row */}
        <div className={styles.footer__logos}>
          <div className={styles.footer__brand}>
            <div className={cx(styles.footer__badge, styles['footer__badge--primary'])}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v18M3 12h18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.footer__brandTitle}>ASL Napoli 3 Sud</div>
          </div>

          {!isMobile && <div className={styles.footer__sep} />}

          <div className={styles.footer__brand}>
            <div className={cx(styles.footer__badge, styles['footer__badge--soft'])}>
              <Icon name="shield" size={22} color="rgba(255,255,255,0.85)" />
            </div>
            <div className={styles.footer__brandTitle}>Portale Regione Campania</div>
          </div>
        </div>

        {/* 3 nav columns */}
        <div className={styles.footer__cols}>
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
              <div className={styles.footer__colTitle}>{col.title}</div>
              <ul className={styles.footer__list}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className={styles.footer__link}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CONTATTI + SEGUICI SU */}
        <div className={styles.footer__contactRow}>
          <div>
            <div className={styles.footer__colTitle}>Contatti</div>
            <p className={styles.footer__contactText}>
              Via Marconi, 66 — 80059 Torre del Greco (NA)
              <br />
              C.F. / P.IVA 06321661211
              <br />
              PEC: protocollo@pec.aslnapoli3sud.it
              <br />
              +39 081 8727111
            </p>
            <a href="#" className={styles.footer__contactLink}>
              Invia una segnalazione
            </a>
          </div>
          <div>
            <div className={styles.footer__colTitle}>Seguici su</div>
            <div className={styles.footer__social}>
              {['facebook', 'instagram', 'x', 'youtube', 'linkedin'].map((n) => (
                <a key={n} href="#" className={styles.footer__socialLink}>
                  <Icon name={n} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={cx('container', styles.footer__legal)}>
          <div className={styles.footer__legalList}>
            {[
              'Dichiarazione di accessibilità',
              'FAQ',
              'Informativa cookie',
              'Informativa privacy',
              'Note legali',
              'Mappa del sito',
            ].map((l) => (
              <a key={l} href="#" className={styles.footer__legalLink}>
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
