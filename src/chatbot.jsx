import React from 'react';
import { Icon } from './icons.jsx';
import { Button } from './ui.jsx';

// ─── Chatbot F4 — Assistente orientativo ASL (PRD §6.4) ───
// RF4.1 FAB fisso | RF4.2 solo opzioni, no free input iniziale
// RF4.3 disclaimer | RF4.4 branche "Prenotare" e "Referti" complete

// ── Albero di dialogo ──
const TREE = {
  root: {
    msg: "Ciao! Sono l'assistente ASL Napoli 3 Sud. Posso aiutarti a trovare informazioni di orientamento. Cosa ti serve?",
    options: [
      { label: 'Prenotare una visita specialistica', next: 'prenota' },
      { label: 'Ritirare un referto', next: 'referti' },
      { label: 'Pagare il ticket', next: 'ticket' },
      { label: 'Trovare un presidio', next: 'presidio' },
      { label: 'Contatti e orari', next: 'contatti' },
      { label: 'Altro', next: 'altro' },
    ],
  },
  prenota: {
    msg: "Per prenotare una visita specialistica hai bisogno dell'impegnativa (ricetta) del tuo medico di base. Ce l'hai?",
    options: [
      { label: "Sì, ho l'impegnativa", next: 'prenota_si' },
      { label: "No, non ce l'ho ancora", next: 'prenota_no' },
    ],
  },
  prenota_si: {
    msg: 'Ottimo! Puoi prenotare in tre modi: online tramite il CUP regionale (il più rapido), per telefono al numero verde gratuito 800 019 774, oppure in farmacia abilitata FarmaciUp.',
    options: [
      { label: 'Vai alla guida completa', next: 'prenota_guida' },
      {
        label: 'Accedi al CUP regionale',
        next: 'prenota_cup',
        external: 'https://cup.regione.campania.it',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  prenota_no: {
    msg: "Per prenotare devi prima avere l'impegnativa (ricetta dematerializzata) del tuo medico di medicina generale o del pediatra di libera scelta. Contatta il tuo medico per richiederla.",
    options: [
      { label: "Come si chiede l'impegnativa", next: 'prenota_guida' },
      { label: 'Trova il mio medico di base', next: 'medico_base' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  prenota_guida: {
    msg: 'Nella guida "Come fare per prenotare" trovi tutti i passaggi, i tempi di attesa per classe di priorità (U/B/D/P) e i canali alternativi.',
    options: [
      {
        label: 'Apri la guida',
        next: 'link_prenota',
        internal: 'page-come-fare-per.html',
      },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  prenota_cup: {
    msg: 'Ti sto reindirizzando al portale CUP Campania. Avrai bisogno di SPID livello 2 o CIE con PIN.',
    options: [{ label: "Torna all'inizio", next: 'root' }],
  },
  referti: {
    msg: 'I referti degli esami sono disponibili online tramite il Fascicolo Sanitario Elettronico (FSE) della Regione Campania. Hai SPID o CIE?',
    options: [
      { label: 'Sì, ho SPID o CIE', next: 'referti_si' },
      { label: 'No, non li ho', next: 'referti_no' },
      { label: 'Devo ritirare per un familiare', next: 'referti_delega' },
    ],
  },
  referti_si: {
    msg: 'Ottimo! Accedi al portale FSE Campania con SPID livello 2 o CIE con PIN. Trovi lì tutti i referti pubblicati dalla ASL.',
    options: [
      {
        label: 'Accedi al portale referti',
        next: 'link_referti',
        external: 'https://fse.regione.campania.it',
      },
      {
        label: 'Vai alla guida completa',
        next: 'referti_guida',
        internal: 'page-referti.html',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_no: {
    msg: "Senza SPID o CIE puoi ritirare il referto cartaceo allo sportello del presidio dove hai eseguito l'esame. Puoi anche richiedere assistenza per attivare SPID.",
    options: [
      { label: 'Dove ritirarlo allo sportello', next: 'referti_sportello' },
      { label: 'Come ottenere SPID', next: 'spid_info' },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_delega: {
    msg: 'Per scaricare referti per un familiare devi attivare la delega sul portale FSE oppure presentarsi allo sportello con il modulo di delega e il documento di identità.',
    options: [
      {
        label: 'Vai alla guida referti',
        next: 'referti_guida',
        internal: 'page-referti.html',
      },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_guida: {
    msg: 'Nella pagina "Ritiro referti online" trovi la procedura completa, i tempi di pubblicazione e i presidi per il ritiro cartaceo.',
    options: [
      {
        label: 'Apri la pagina referti',
        next: 'link_referti_guida',
        internal: 'page-referti.html',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  referti_sportello: {
    msg: 'Puoi ritirare il referto cartaceo presso: Presidio di Boscoreale, Presidio San Leonardo (Castellammare), Presidio Maresca (Torre del Greco). Portare tessera sanitaria.',
    options: [
      {
        label: 'Vedi orari dettagliati',
        next: 'referti_guida',
        internal: 'page-referti.html',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  ticket: {
    msg: 'Puoi pagare il ticket sanitario online tramite il portale PagoPA, in farmacia, al tabacchino abilitato oppure allo sportello cassa del presidio.',
    options: [
      {
        label: 'Paga online con PagoPA',
        next: 'link_pagopa',
        external: 'https://www.pagopa.gov.it',
      },
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  presidio: {
    msg: "L'ASL Napoli 3 Sud copre 56 Comuni. I presidi principali sono: P.O. San Leonardo (Castellammare), P.O. Maresca (Torre del Greco), P.O. Boscoreale, Distretto 58 (Pompei).",
    options: [
      { label: 'Vedi tutti i presidi', next: 'link_presidi' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  link_presidi: {
    msg: "Puoi trovare l'elenco completo dei presidi e dei distretti sul sito ASL, oppure chiamando l'URP.",
    options: [
      { label: 'Contatta URP', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  contatti: {
    msg: 'Centralino ASL: 081 8722111\nURP (relazioni pubblico): 081 8722111 — Lun–Ven 9:00–13:00, Mar–Gio 15:00–17:00\nEmail URP: urp@aslnapoli3sud.it\nCUP telefonico: 800 019 774 (gratuito)',
    options: [{ label: "Torna all'inizio", next: 'root' }],
  },
  medico_base: {
    msg: 'Per trovare o cambiare il tuo medico di medicina generale, accedi alla sezione scelta/revoca sul portale FSE Campania o recati al distretto sanitario di competenza.',
    options: [
      {
        label: 'Vai al portale FSE',
        next: 'link_fse',
        external: 'https://fse.regione.campania.it',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  spid_info: {
    msg: 'SPID si ottiene gratuitamente tramite uno degli Identity Provider accreditati (Poste Italiane, Aruba, Intesa Sanpaolo ecc.). Il processo richiede circa 15 minuti online.',
    options: [
      {
        label: 'Scopri come ottenere SPID',
        next: 'link_spid',
        external: 'https://www.spid.gov.it/come-attivare-spid/',
      },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  altro: {
    msg: 'Per richieste non in elenco, il modo più efficace è contattare direttamente il nostro Ufficio Relazioni con il Pubblico.',
    options: [
      { label: 'Parla con un operatore', next: 'operatore' },
      { label: "Torna all'inizio", next: 'root' },
    ],
  },
  operatore: {
    msg: 'Per parlare con un operatore:\n• Telefono: 081 8722111\n• Lun–Ven 9:00–13:00 | Mar–Gio 15:00–17:00\n• Email: urp@aslnapoli3sud.it',
    options: [{ label: "Torna all'inizio", next: 'root' }],
  },
  // Nodi "foglia" con link: solo messaggio di redirect
  link_prenota: null,
  link_referti: null,
  link_referti_guida: null,
  link_pagopa: null,
  link_fse: null,
  link_spid: null,
};

// ── Chatbot component ──
const Chatbot = () => {
  const [open, setOpen] = React.useState(false);
  const [node, setNode] = React.useState('root');
  const [history, setHistory] = React.useState([]);
  const messagesEndRef = React.useRef(null);

  const currentNode = TREE[node] || TREE['root'];

  React.useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, history, node]);

  const handleOption = (opt) => {
    // Handle external link options
    if (opt.external) {
      window.open(opt.external, '_blank', 'noopener,noreferrer');
    }
    // Handle internal link options
    if (opt.internal) {
      window.location.href = opt.internal;
      return;
    }
    // Navigate to next node
    if (opt.next) {
      setHistory((h) => [...h, node]);
      setNode(opt.next);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setNode(prev);
  };

  const handleReset = () => {
    setHistory([]);
    setNode('root');
  };

  return (
    <>
      {/* ── FAB ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Chiudi assistente' : 'Apri assistente virtuale'}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 22px',
          borderRadius: 99,
          background: 'var(--bi-primary)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          fontFamily: 'var(--ff-sans)',
          fontWeight: 700,
          fontSize: 15,
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
        }}
      >
        {open ? (
          <Icon name="close" size={20} color="#fff" />
        ) : (
          <Icon name="microphone" size={20} color="#fff" />
        )}
        {!open && 'Aiuto'}
      </button>

      {/* ── Pannello slide-in ── */}
      {open && (
        <div
          role="dialog"
          aria-label="Assistente virtuale ASL"
          aria-modal="true"
          style={{
            position: 'fixed',
            bottom: 88,
            right: 24,
            zIndex: 9998,
            width: 'min(380px, calc(100vw - 32px))',
            maxHeight: 'calc(100vh - 120px)',
            background: 'var(--bi-surface)',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--bi-border)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--bi-primary)',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="stethoscope" size={18} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: 1,
                  }}
                >
                  Assistente ASL
                </div>
                <div
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: 11,
                    marginTop: 2,
                  }}
                >
                  Napoli 3 Sud
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Chiudi"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              <Icon name="close" size={18} color="rgba(255,255,255,0.85)" />
            </button>
          </div>

          {/* Disclaimer RF4.3 */}
          <div
            style={{
              background: 'var(--bi-warm-100, #fff8e6)',
              padding: '10px 16px',
              fontSize: 12,
              color: 'var(--bi-ink-700)',
              lineHeight: 1.5,
              flexShrink: 0,
              borderBottom: '1px solid var(--bi-border)',
            }}
          >
            <strong>Avviso:</strong> questo assistente fornisce solo informazioni di orientamento.
            Non fornisce consigli medici. <strong>In caso di emergenza, chiama il 118.</strong>
          </div>

          {/* Corpo messaggi */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            {/* Messaggio corrente */}
            <div
              style={{
                background: 'var(--bi-bg-alt)',
                padding: '12px 14px',
                borderRadius: 10,
                borderBottomLeftRadius: 2,
                fontSize: 14,
                color: 'var(--bi-ink-800)',
                lineHeight: 1.6,
                marginBottom: 16,
                whiteSpace: 'pre-line',
                maxWidth: '90%',
              }}
            >
              {currentNode && currentNode.msg}
            </div>

            {/* Opzioni */}
            {currentNode && currentNode.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {currentNode.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: '1.5px solid var(--bi-primary-100)',
                      background: 'var(--bi-surface)',
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--bi-primary)',
                      fontFamily: 'var(--ff-sans)',
                      lineHeight: 1.4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 8,
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--bi-primary-050)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bi-surface)';
                    }}
                  >
                    <span>{opt.label}</span>
                    {opt.external ? (
                      <Icon name="external" size={12} color="var(--bi-primary)" />
                    ) : (
                      <Icon name="chevron-right" size={12} color="var(--bi-primary)" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer con azioni persistenti */}
          <div
            style={{
              flexShrink: 0,
              borderTop: '1px solid var(--bi-border)',
              padding: '10px 14px',
              display: 'flex',
              gap: 8,
            }}
          >
            {history.length > 0 && (
              <button
                onClick={handleBack}
                style={{
                  padding: '8px 14px',
                  borderRadius: 6,
                  border: '1px solid var(--bi-border)',
                  background: 'var(--bi-surface)',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'var(--bi-ink-600)',
                  fontFamily: 'var(--ff-sans)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                ← Torna
              </button>
            )}
            <a
              href="tel:0818722111"
              style={{
                flex: 1,
                padding: '8px 14px',
                borderRadius: 6,
                background: 'var(--bi-primary)',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                textDecoration: 'none',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              <Icon name="phone" size={13} color="#fff" />
              Parla con un operatore
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export { Chatbot };
