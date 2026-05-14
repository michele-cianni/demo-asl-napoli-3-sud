import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';
import { useResponsive } from '../hooks/useResponsive.js';
import { Icon } from '../icons.jsx';
import { BoundaryLayer } from './BoundaryLayer.jsx';

const INITIAL_CENTER = [40.74, 14.43];
const INITIAL_ZOOM = 11;

const createMarkerIcon = (isPS) => {
  const bg = isPS ? '#d14900' : '#52b075';
  return L.divIcon({
    html: `<div style="width:36px;height:36px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.35);border:2.5px solid rgba(255,255,255,.8)">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </div>`,
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -40],
  });
};

const BADGE_TONES = {
  warm: { bg: '#fff0e6', fg: '#d14900' },
  teal: { bg: '#e6f4f6', fg: '#00667a' },
  primary: { bg: '#e6f0f8', fg: '#004f9e' },
};

// Forza invalidateSize dopo il montaggio — due passaggi per coprire mobile lento
const MapInitializer = () => {
  const map = useMap();
  useEffect(() => {
    const t1 = setTimeout(() => map.invalidateSize(), 100);
    const t2 = setTimeout(() => map.invalidateSize(), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [map]);
  return null;
};

// Componente interno che legge la mappa via useMap per aggiornare i bounds
const BoundsController = ({ ospedali }) => {
  const map = useMap();

  useEffect(() => {
    if (ospedali.length === 0) return;
    if (ospedali.length === 1) {
      map.flyTo(ospedali[0].coords, 14, { duration: 0.6 });
    } else {
      map.fitBounds(
        ospedali.map((o) => o.coords),
        { padding: [40, 40], duration: 0.6 },
      );
    }
  }, [ospedali, map]);

  return null;
};

const MapView = ({ ospedali }) => {
  const { isMobile } = useResponsive();
  const [selectedId, setSelectedId] = useState(null);
  const markerRefs = useRef(new Map());
  const sidebarRef = useRef(null);
  const mapWrapRef = useRef(null);

  const handleSidebarClick = (osp) => {
    setSelectedId(osp.id);
    const marker = markerRefs.current.get(osp.id);
    if (marker) marker.openPopup();
    if (isMobile && mapWrapRef.current) {
      mapWrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMarkerClick = (id) => {
    setSelectedId(id);
    if (sidebarRef.current) {
      const row = sidebarRef.current.querySelector(`[data-id="${id}"]`);
      if (row) row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div
      style={{
        display: isMobile ? 'flex' : 'grid',
        flexDirection: isMobile ? 'column' : undefined,
        gridTemplateColumns: isMobile ? undefined : '1fr 340px',
        gap: 24,
        alignItems: 'start',
      }}
    >
      {/* Mappa — isolation:isolate crea uno stacking context isolato
          così i z-index interni di Leaflet (400+) non sfondano lo sticky header */}
      <div
        ref={mapWrapRef}
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid var(--bi-border)',
          minHeight: isMobile ? 300 : 450,
          position: 'relative',
          isolation: 'isolate',
        }}
      >
        {/* Legenda sovrapposta in basso a sinistra */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 12,
            zIndex: 500,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(4px)',
            borderRadius: 8,
            padding: '8px 12px',
            boxShadow: '0 1px 6px rgba(0,0,0,0.18)',
            fontSize: 11,
            lineHeight: 1.8,
            color: '#1a1a2e',
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#d14900', flexShrink: 0, display: 'inline-block' }} />
            Pronto Soccorso 24/7
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#52b075', flexShrink: 0, display: 'inline-block' }} />
            Presidio Ospedaliero
          </div>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', marginTop: 4, paddingTop: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 14, height: 3, background: '#50639d', flexShrink: 0, display: 'inline-block', borderRadius: 1 }} />
              ASL Napoli 3 Sud
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 14, height: 2, background: '#52b075', flexShrink: 0, display: 'inline-block', borderRadius: 1, opacity: 0.7 }} />
              Regione Campania
            </div>
          </div>
        </div>
        <MapContainer
          center={INITIAL_CENTER}
          zoom={INITIAL_ZOOM}
          minZoom={9}
          maxZoom={16}
          scrollWheelZoom={false}
          style={{ width: '100%', height: isMobile ? 300 : 450 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <BoundaryLayer />
          <MapInitializer />
          <BoundsController ospedali={ospedali} />
          {ospedali.map((osp) => (
            <Marker
              key={osp.id}
              position={osp.coords}
              icon={createMarkerIcon(osp.ps)}
              ref={(ref) => {
                if (ref) markerRefs.current.set(osp.id, ref);
                else markerRefs.current.delete(osp.id);
              }}
              eventHandlers={{ click: () => handleMarkerClick(osp.id) }}
            >
              <Popup maxWidth={260}>
                <div style={{ minWidth: 190, fontFamily: 'Titillium Web, sans-serif' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: 99,
                      background: (BADGE_TONES[osp.badgeTone] || BADGE_TONES.primary).bg,
                      color: (BADGE_TONES[osp.badgeTone] || BADGE_TONES.primary).fg,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      marginBottom: 6,
                    }}
                  >
                    {osp.badge}
                  </span>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 4,
                      lineHeight: 1.3,
                      color: '#1a1a2e',
                    }}
                  >
                    {osp.nome}
                  </div>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>
                    {osp.indirizzo}
                  </div>
                  <a
                    href={`tel:${osp.telefono.replace(/\s/g, '')}`}
                    style={{
                      fontSize: 12,
                      color: '#52b075',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: 10,
                      textDecoration: 'none',
                    }}
                  >
                    📞 {osp.telefono}
                  </a>
                  {osp.href !== '#' && (
                    <a
                      href={osp.href}
                      style={{
                        display: 'inline-block',
                        padding: '5px 12px',
                        background: '#52b075',
                        color: '#fff',
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Scheda struttura →
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Sidebar lista */}
      <div
        ref={sidebarRef}
        style={{
          background: 'var(--bi-surface)',
          border: '1px solid var(--bi-border)',
          borderRadius: 12,
          overflow: 'hidden',
          maxHeight: isMobile ? 'none' : 450,
          overflowY: isMobile ? 'visible' : 'auto',
        }}
      >
        <div
          style={{
            padding: '14px 20px',
            borderBottom: '1px solid var(--bi-border)',
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--bi-ink-900)',
            position: 'sticky',
            top: 0,
            background: 'var(--bi-surface)',
            zIndex: 1,
          }}
        >
          {ospedali.length} osped{ospedali.length !== 1 ? 'ali' : 'ale'} nel territorio
        </div>

        {ospedali.length === 0 && (
          <div
            style={{
              padding: '32px 20px',
              textAlign: 'center',
              color: 'var(--bi-ink-500)',
              fontSize: 13,
            }}
          >
            Nessun ospedale corrisponde ai filtri
          </div>
        )}

        {ospedali.map((osp, i) => (
          <button
            key={osp.id}
            data-id={osp.id}
            onClick={() => handleSidebarClick(osp)}
            style={{
              display: 'flex',
              gap: 12,
              padding: '14px 20px',
              width: '100%',
              textAlign: 'left',
              borderBottom: i < ospedali.length - 1 ? '1px solid var(--bi-border)' : 'none',
              background: selectedId === osp.id ? 'var(--bi-primary-050)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.12s',
            }}
            onMouseEnter={(e) => {
              if (selectedId !== osp.id)
                e.currentTarget.style.background = 'var(--bi-bg-alt)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                selectedId === osp.id ? 'var(--bi-primary-050)' : 'transparent';
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
            <div style={{ flex: 1, minWidth: 0 }}>
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
              <div style={{ fontSize: 12, color: 'var(--bi-ink-500)', marginTop: 2 }}>
                {osp.comune}
              </div>
            </div>
            {selectedId === osp.id && (
              <div
                style={{
                  flexShrink: 0,
                  width: 4,
                  alignSelf: 'stretch',
                  background: 'var(--bi-primary)',
                  borderRadius: 2,
                  marginLeft: 4,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export { MapView };
