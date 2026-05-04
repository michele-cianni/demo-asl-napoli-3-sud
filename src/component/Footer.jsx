import { Icon } from '../icons.jsx';
import { useResponsive } from '../hooks/useResponsive.js';
import styles from './Footer.module.css';

const cx = (...parts) => parts.filter(Boolean).join(' ');

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

export { Footer };
