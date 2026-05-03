import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './icons.jsx';
import { useResponsive } from './responsive.jsx';

// ─── Header: topbar + brand row + main nav ───

const TopBar = () => {
  const { isCompact, isMobile } = useResponsive();

  if (isCompact) {
    return (
      <div
        style={{
          background: 'var(--bi-ink-900)',
          color: '#fff',
          fontSize: 13,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: 12,
            minHeight: 40,
            paddingTop: 8,
            paddingBottom: 8,
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#"
            style={{
              color: 'rgba(255,255,255,0.85)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Icon name="globe" size={14} />
            {isMobile ? 'Regione Campania' : 'Portale Regione Campania'}
          </a>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'space-between' : 'flex-start',
              gap: 14,
              flexWrap: 'wrap',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'rgba(255,255,255,0.85)',
                fontSize: 13,
              }}
            >
              <Icon name="accessibility" size={14} /> Accessibilita
            </button>
            <a
              href="#"
              style={{
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Icon name="users" size={14} /> Area personale
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'var(--bi-ink-900)',
        color: '#fff',
        fontSize: 13,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 40,
          gap: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#"
            style={{
              color: 'rgba(255,255,255,0.85)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
            }}
          >
            <Icon name="globe" size={14} />
            Portale Regione Campania
            <Icon name="external" size={11} />
          </a>
          <span style={{ opacity: 0.2 }}>|</span>
          <a
            href="#"
            style={{
              color: 'rgba(255,255,255,0.85)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
            }}
          >
            Amministrazione Trasparente
          </a>
          <span style={{ opacity: 0.2 }}>|</span>
          <a
            href="#"
            style={{
              color: 'rgba(255,255,255,0.85)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
            }}
          >
            Albo Pretorio
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.85)',
              fontSize: 13,
            }}
          >
            <Icon name="globe" size={14} /> ITA <Icon name="chevron-down" size={12} />
          </button>
          <span style={{ opacity: 0.2 }}>|</span>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.85)',
              fontSize: 13,
            }}
          >
            <Icon name="accessibility" size={14} /> Accessibilita
          </button>
          <span style={{ opacity: 0.2 }}>|</span>
          <a
            href="#"
            style={{
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Icon name="users" size={14} /> Area personale
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Brand row ───
const BrandRow = () => {
  const { isCompact, isMobile } = useResponsive();

  return (
    <div
      style={{
        background: 'var(--bi-surface)',
        borderBottom: '1px solid var(--bi-border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: isCompact ? 'auto' : 120,
          gap: isCompact ? 16 : 32,
          paddingTop: isCompact ? 16 : 0,
          paddingBottom: isCompact ? 16 : 0,
          flexWrap: isCompact ? 'wrap' : 'nowrap',
        }}
      >
        <a
          href="index.html"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 12 : 18,
            textDecoration: 'none',
            flex: '1 1 320px',
            minWidth: 0,
          }}
        >
          <img
            src="https://www.aslnapoli3sud.it/o/na3theme-theme/images/logo_primario.png"
            alt="ASL Napoli 3 Sud"
            style={{
              height: isMobile ? 48 : isCompact ? 56 : 68,
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <div style={{ lineHeight: 1.2, minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--ff-sans)',
                fontSize: isMobile ? 24 : isCompact ? 28 : 30,
                fontWeight: 700,
                color: 'var(--bi-ink-900)',
                letterSpacing: -0.5,
              }}
            >
              ASL Napoli 3 Sud
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: isMobile ? 1 : 1.5,
                color: 'var(--bi-ink-500)',
                textTransform: 'uppercase',
                marginTop: 4,
              }}
            >
              Azienda Sanitaria Locale
            </div>
          </div>
        </a>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'space-between' : 'flex-end',
            gap: 16,
            flexWrap: 'wrap',
            width: isMobile ? '100%' : 'auto',
            flex: isCompact ? '1 1 100%' : '0 0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            {!isMobile && (
              <span
                style={{
                  fontSize: 13,
                  color: 'var(--bi-ink-500)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                Seguici su
              </span>
            )}
            {[
              { name: 'facebook', label: 'Facebook' },
              { name: 'instagram', label: 'Instagram' },
              { name: 'x', label: 'X (Twitter)' },
              { name: 'youtube', label: 'YouTube' },
              { name: 'linkedin', label: 'LinkedIn' },
            ].map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.label}
                style={{
                  color: 'var(--bi-ink-500)',
                  display: 'flex',
                  lineHeight: 1,
                }}
              >
                <Icon name={s.name} size={isMobile ? 20 : 22} />
              </a>
            ))}
          </div>
          {!isMobile && <span style={{ width: 1, height: 24, background: 'var(--bi-border)' }} />}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: isMobile ? '0 16px' : '0 18px',
              height: 40,
              width: isMobile ? '100%' : 'auto',
              borderRadius: 20,
              border: '1.5px solid var(--bi-primary)',
              background: 'transparent',
              color: 'var(--bi-primary)',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Icon name="search" size={16} />
            Cerca nel sito
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileMainNav = ({ items, activeItem, onOpenChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [panelTop, setPanelTop] = React.useState(0);
  const mobileMenuId = React.useId();
  const menuBtnRef = React.useRef(null);
  const firstItemRef = React.useRef(null);
  const barRef = React.useRef(null);
  const hasMounted = React.useRef(false);

  const setMenu = React.useCallback((val) => {
    setIsMenuOpen(val);
    onOpenChange?.(val);
  }, [onOpenChange]);

  // Escape key + body scroll lock
  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) return () => { document.body.style.overflow = ''; };
    const onKey = (e) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, setMenu]);

  // Focus management: primo item all'apertura, pulsante alla chiusura (salta il mount iniziale)
  React.useEffect(() => {
    if (!hasMounted.current) { hasMounted.current = true; return; }
    if (isMenuOpen) {
      firstItemRef.current?.focus();
    } else {
      menuBtnRef.current?.focus();
    }
  }, [isMenuOpen]);

  const handleToggle = () => {
    if (!isMenuOpen && barRef.current) {
      setPanelTop(barRef.current.getBoundingClientRect().bottom);
    }
    setMenu((open) => !open);
  };

  const renderNavLink = (item, ref) => {
    const isActive = activeItem === item.id;

    return (
      <a
        key={item.id}
        ref={ref}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '14px 16px',
          paddingTop: 14,
          color: '#fff',
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
          borderBottom: 'none',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 14,
          background: isActive ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
        }}
        onClick={() => setMenu(false)}
      >
        <span>{item.label}</span>
        <Icon name="chevron-right" size={16} />
      </a>
    );
  };

  return (
    <>
      <div
        ref={barRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          minHeight: 56,
          padding: '8px 0',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.6,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            Navigazione
          </span>
          <span style={{ fontSize: 15, fontWeight: 600 }}>
            {isMenuOpen ? 'Esplora le sezioni del sito' : 'Apri il menu principale'}
          </span>
        </div>
        <button
          ref={menuBtnRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={mobileMenuId}
          aria-label={isMenuOpen ? 'Chiudi il menu principale' : 'Apri il menu principale'}
          onClick={handleToggle}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            minWidth: 112,
            height: 40,
            padding: '0 16px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.32)',
            background: isMenuOpen ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.08)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={18} />
          {isMenuOpen ? 'Chiudi' : 'Menu'}
        </button>
      </div>
      {isMenuOpen && createPortal(
        <nav
          id={mobileMenuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principale"
          style={{
            position: 'fixed',
            top: panelTop,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            zIndex: 35,
            background: 'var(--bi-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: '14px 16px',
            paddingBottom: 'env(safe-area-inset-bottom, 16px)',
          }}
        >
          {items.map((item, i) => renderNavLink(item, i === 0 ? firstItemRef : undefined))}
        </nav>,
        document.body
      )}
    </>
  );
};

// ─── Main navigation (senza "Home" — il logo è il link alla homepage) ───
const MainNav = ({ activeItem, active, onMenuOpenChange }) => {
  const { isCompact, isMobile } = useResponsive();
  activeItem = activeItem || active || '';

  const items = [
    {
      id: 'servizi',
      label: 'Servizi e prestazioni',
      href: 'page-servizi.html',
    },
    {
      id: 'come-fare-per',
      label: 'Come fare per',
      href: 'page-come-fare-per.html',
    },
    { id: 'strutture', label: 'Strutture', href: 'page-ospedali.html' },
    { id: 'asl-comunica', label: 'ASL comunica', href: '#' },
  ];

  const renderNavLink = (item) => {
    const isActive = activeItem === item.id;

    return (
      <a
        key={item.id}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',
          padding: isCompact ? '14px 16px' : '0 20px',
          paddingTop: isCompact ? 14 : 3,
          color: '#fff',
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
          borderBottom: isActive ? '3px solid #fff' : '3px solid transparent',
          border: 'none',
          borderRadius: 0,
          background: 'transparent',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.background = 'rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <div
      style={{
        background: 'var(--bi-primary)',
        color: '#fff',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: isMobile ? 'column' : 'row',
          height: isMobile ? 'auto' : isCompact ? 'auto' : 56,
        }}
      >
        {isMobile ? (
          <MobileMainNav items={items} activeItem={activeItem} onOpenChange={onMenuOpenChange} />
        ) : (
          <nav
            aria-label="Menu principale"
            className={isCompact ? 'h-scroll' : undefined}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: 0,
              minWidth: isCompact ? '100%' : 'auto',
              overflowX: isCompact ? 'auto' : 'visible',
              padding: 0,
            }}
          >
            {items.map((item) => renderNavLink(item))}
          </nav>
        )}
      </div>
    </div>
  );
};

// ─── Banda CUP / URP sempre visibile ───
const QuickActions = () => {
  const { isCompact, isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div
        style={{
          background: 'var(--bi-surface)',
          borderTop: '2px solid var(--bi-primary)',
          borderBottom: '1px solid var(--bi-border)',
        }}
      >
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '10px 16px' }}
        >
          {/* CUP */}
          <a
            href="#"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--bi-bg)',
              border: '1px solid var(--bi-border)',
              textDecoration: 'none',
              color: 'var(--bi-ink-900)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="calendar" size={14} style={{ color: 'var(--bi-primary)', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, color: 'var(--bi-primary)', fontSize: 12, letterSpacing: 0.4 }}>CUP</span>
              <Icon name="phone" size={12} style={{ color: 'var(--bi-primary)', marginLeft: 'auto' }} />
            </div>
            <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--bi-primary)' }}>06 01020304</span>
            <span style={{ fontSize: 11, color: 'var(--bi-ink-500)', lineHeight: 1.3 }}>Prenota servizi e prestazioni</span>
          </a>
          {/* URP */}
          <a
            href="#"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--bi-bg)',
              border: '1px solid var(--bi-border)',
              textDecoration: 'none',
              color: 'var(--bi-ink-900)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="mail" size={14} style={{ color: 'var(--bi-ink-500)', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, color: 'var(--bi-ink-700)', fontSize: 12, letterSpacing: 0.4 }}>URP</span>
              <Icon name="phone" size={12} style={{ color: 'var(--bi-ink-500)', marginLeft: 'auto' }} />
            </div>
            <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--bi-ink-700)' }}>06 01020304</span>
            <span style={{ fontSize: 11, color: 'var(--bi-ink-500)', lineHeight: 1.3 }}>Richiedi informazioni o segnalazione</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'var(--bi-surface)',
        borderTop: '2px solid var(--bi-primary)',
        borderBottom: '1px solid var(--bi-border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: isCompact ? 12 : 48,
          minHeight: isCompact ? 'auto' : 48,
          paddingTop: isCompact ? 10 : 0,
          paddingBottom: isCompact ? 10 : 0,
        }}
      >
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 14,
            textDecoration: 'none',
            color: 'var(--bi-ink-900)',
            padding: isCompact ? '10px 12px' : 0,
            borderRadius: isCompact ? 10 : 0,
            background: isCompact ? 'var(--bi-bg)' : 'transparent',
            border: isCompact ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <Icon name="calendar" size={16} style={{ color: 'var(--bi-primary)', flexShrink: 0 }} />
          <span>Prenota servizi e prestazioni</span>
          <span style={{ fontWeight: 700, color: 'var(--bi-primary)', fontSize: 13, letterSpacing: 0.5 }}>CUP</span>
          <span style={{ fontWeight: 600, color: 'var(--bi-primary)' }}>06 01020304</span>
          <Icon name="phone" size={14} style={{ color: 'var(--bi-primary)' }} />
        </a>
        {!isCompact && (
          <span style={{ width: 1, height: 20, background: 'var(--bi-border)', flexShrink: 0 }} />
        )}
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 14,
            textDecoration: 'none',
            color: 'var(--bi-ink-900)',
            padding: isCompact ? '10px 12px' : 0,
            borderRadius: isCompact ? 10 : 0,
            background: isCompact ? 'var(--bi-bg)' : 'transparent',
            border: isCompact ? '1px solid var(--bi-border)' : 'none',
          }}
        >
          <Icon name="mail" size={16} style={{ color: 'var(--bi-ink-500)', flexShrink: 0 }} />
          <span>Richiedi informazioni o fai una segnalazione</span>
          <span style={{ fontWeight: 700, color: 'var(--bi-ink-700)', fontSize: 13, letterSpacing: 0.5 }}>URP</span>
          <span style={{ fontWeight: 600, color: 'var(--bi-ink-700)' }}>06 01020304</span>
          <Icon name="phone" size={14} style={{ color: 'var(--bi-ink-500)' }} />
        </a>
      </div>
    </div>
  );
};

// ─── Wrapper sticky: nav + banda CUP/URP ───
const StickyHeader = ({ activeItem, active }) => {
  const { isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <MainNav activeItem={activeItem} active={active} onMenuOpenChange={setMenuOpen} />
      {!(isMobile && menuOpen) && <QuickActions />}
    </div>
  );
};

export { TopBar, BrandRow, MainNav, QuickActions, StickyHeader };
