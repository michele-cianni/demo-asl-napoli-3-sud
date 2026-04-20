// ─── Pagina "Come fare per: Prenotare una visita specialistica" (PRD §5.3) ───

// ── Video player placeholder ──
const VideoPlayer = () => {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div style={{ marginBottom: 40 }}>
      {/* Player */}
      <div
        onClick={() => setPlaying((p) => !p)}
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9
          background: "linear-gradient(135deg, #001f3f, var(--bi-primary))",
          borderRadius: 10,
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        {/* Thumbnail-like gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: playing
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              transition: "all 0.2s",
            }}
          >
            {playing ? (
              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "4px solid #fff",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="var(--bi-primary)"
              >
                <path d="M7 4v16l13-8z" />
              </svg>
            )}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {playing
              ? "In riproduzione…"
              : "Come prenotare una visita specialistica"}
          </div>
        </div>
        {/* Badge durata */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "3px 9px",
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          4:30
        </div>
        {/* Badge sottotitoli */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "3px 9px",
            borderRadius: 4,
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Icon name="accessibility" size={12} color="#fff" />
          CC
        </div>
      </div>

      {/* Meta row sotto il video */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 20,
          marginTop: 14,
          padding: "10px 0",
          borderBottom: "1px solid var(--bi-border)",
          fontSize: 13,
          color: "var(--bi-ink-500)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Icon name="clock" size={14} /> 4 min 30 sec
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Icon name="calendar" size={14} /> Aggiornato il 15 marzo 2026
        </span>
        <span style={{ color: "var(--bi-primary)", fontWeight: 600 }}>
          Trascrizione disponibile ↓
        </span>
        <span
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <a
            href="#"
            style={{
              color: "var(--bi-ink-400)",
              display: "flex",
              alignItems: "center",
              gap: 4,
              textDecoration: "none",
            }}
          >
            <Icon name="facebook" size={16} /> Condividi
          </a>
          <a
            href="#"
            style={{
              color: "var(--bi-ink-400)",
              display: "flex",
              alignItems: "center",
              gap: 4,
              textDecoration: "none",
            }}
          >
            <Icon name="x" size={16} />
          </a>
          <a
            href="#"
            style={{
              color: "var(--bi-ink-400)",
              display: "flex",
              alignItems: "center",
              gap: 4,
              textDecoration: "none",
            }}
          >
            <Icon name="mail" size={16} />
          </a>
        </span>
      </div>
    </div>
  );
};

// ── Accordion ──
const Accordion = ({ items }) => {
  const [open, setOpen] = React.useState(null);
  return (
    <div
      style={{
        border: "1px solid var(--bi-border)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom:
              i < items.length - 1 ? "1px solid var(--bi-border)" : "none",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              background: "var(--bi-surface)",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--bi-ink-900)",
              fontFamily: "var(--ff-sans)",
            }}
          >
            {item.q}
            <Icon
              name={open === i ? "chevron-down" : "chevron-right"}
              size={18}
              color="var(--bi-primary)"
            />
          </button>
          {open === i && (
            <div
              style={{
                padding: "0 20px 16px",
                fontSize: 14,
                color: "var(--bi-ink-600)",
                lineHeight: 1.65,
                background: "var(--bi-primary-050)",
              }}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ── Pagina principale ──
const PageComeFarePer = () => {
  const steps = [
    {
      n: 1,
      title: "Ottieni l'impegnativa dal tuo medico di base",
      desc: "Chiedi al tuo medico di medicina generale la ricetta dematerializzata (RDE) per la prestazione specialistica di cui hai bisogno. Il medico la inserisce direttamente nel sistema: non ti serve la versione cartacea.",
    },
    {
      n: 2,
      title: "Scegli come prenotare",
      desc: "Puoi prenotare in tre modi: online tramite il CUP regionale (il più rapido), telefonicamente al numero verde gratuito 800 019 774, oppure di persona in farmacia abilitata FarmaciUp o allo sportello CUP ASL.",
    },
    {
      n: 3,
      title: "Accedi al CUP regionale e seleziona la prestazione",
      desc: "Sul portale CUP Campania, autenticati con SPID livello 2 o CIE. Inserisci il codice fiscale e il numero di ricetta (NRE) indicato sull'impegnativa. Scegli la data, l'ora e il presidio preferiti tra quelli disponibili.",
    },
    {
      n: 4,
      title: "Conferma l'appuntamento e ricevi la notifica",
      desc: "Dopo la conferma ricevi un SMS e/o email con i dettagli dell'appuntamento: data, ora, luogo, indicazioni su cosa portare. Ricorda di presentarti con la tessera sanitaria e, se previsto, con la quota di ticket.",
      cta: true,
    },
  ];

  const faq = [
    {
      q: "Posso prenotare senza SPID o CIE?",
      a: "Sì. Puoi prenotare telefonicamente al numero verde 800 019 774 (gratuito, attivo lun-ven 8:00–19:00, sab 8:00–13:00) oppure recandoti di persona presso gli sportelli CUP o le farmacie abilitate FarmaciUp.",
    },
    {
      q: "Come faccio a disdire o spostare un appuntamento?",
      a: "Puoi disdire o spostare l'appuntamento almeno 24 ore prima tramite lo stesso portale CUP, per telefono oppure in farmacia. La disdetta tardiva può comportare l'addebito del ticket.",
    },
    {
      q: "La ricetta medica ha una scadenza?",
      a: "Le ricette dematerializzate (RDE) sono valide 30 giorni dalla data di emissione. Dopo la scadenza il numero di ricetta non è più prenotabile e devi chiedere al medico una nuova impegnativa.",
    },
    {
      q: "Cosa succede se sono esente dal ticket?",
      a: "Durante la prenotazione puoi indicare il codice di esenzione (per reddito, patologia o invalidità). Il sistema CUP riconosce l'esenzione automaticamente se sei già registrato. In caso di dubbi porta la documentazione di esenzione all'appuntamento.",
    },
    {
      q: "Posso prenotare per un familiare?",
      a: "Sì, tramite il CUP telefonico o in farmacia puoi prenotare anche per un familiare. Online, se hai la delega attivata sul portale FSE Campania, puoi operare per conto di chi deleghi.",
    },
  ];

  return (
    <div
      data-screen-label="03 Come fare per — Prenotare una visita"
      style={{ background: "var(--bi-bg)" }}
    >
      <TopBar />
      <BrandRow />
      <MainNav active="come-fare-per" />
      <Breadcrumb
        items={[
          { label: "Home", href: "index.html" },
          { label: "Come fare per", href: "#" },
          { label: "Prenotare una visita specialistica" },
        ]}
      />

      <div style={{ background: "var(--bi-surface)", padding: "40px 0 0" }}>
        <div className="container">
          <Eyebrow>Come fare per</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--ff-serif)",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "var(--bi-ink-900)",
              margin: "0 0 16px",
            }}
          >
            Prenotare una visita specialistica
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "var(--bi-ink-500)",
              maxWidth: 640,
              lineHeight: 1.6,
              margin: "0 0 32px",
            }}
          >
            Scopri come prenotare una visita con uno specialista ASL partendo
            dall'impegnativa del tuo medico di base, passo per passo. Il video
            in primo piano ti guida in 4 minuti.
          </p>
        </div>
      </div>

      <Section bg="var(--bi-surface)" pad="0 0 48px">
        <div>
          {/* ── Video in primo piano ── */}
          <VideoPlayer />

          {/* ── A chi è rivolto ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 24,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                marginBottom: 12,
              }}
            >
              A chi è rivolto
            </h2>
            <ul
              style={{
                paddingLeft: 20,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                fontSize: 15,
                color: "var(--bi-ink-700)",
                lineHeight: 1.5,
              }}
            >
              <li>
                Cittadini iscritti al SSN con prescrizione (impegnativa) del
                medico di medicina generale o del pediatra
              </li>
              <li>Pazienti esenti per reddito, patologia o invalidità</li>
              <li>
                Pazienti non esenti soggetti al pagamento del ticket sanitario
              </li>
              <li>Caregiver con delega attiva sul portale FSE Campania</li>
            </ul>
          </div>

          {/* ── Cosa serve ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 24,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                marginBottom: 12,
              }}
            >
              Cosa serve
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  icon: "document",
                  text: "Impegnativa elettronica (RDE) rilasciata dal medico di base",
                },
                { icon: "users", text: "Tessera sanitaria (Codice Fiscale)" },
                {
                  icon: "shield",
                  text: "Documentazione di esenzione (se applicabile)",
                },
                {
                  icon: "globe",
                  text: "SPID livello 2 o CIE (per prenotazione online)",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    borderRadius: 6,
                    background: "var(--bi-primary-050)",
                    border: "1px solid var(--bi-primary-100)",
                  }}
                >
                  <Icon name={r.icon} size={18} color="var(--bi-primary)" />
                  <span style={{ fontSize: 15, color: "var(--bi-ink-800)" }}>
                    {r.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Come si fa (passi numerati) ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 24,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                marginBottom: 24,
              }}
            >
              Come si fa
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    paddingBottom: i < steps.length - 1 ? 28 : 0,
                    position: "relative",
                  }}
                >
                  {/* Linea verticale di connessione */}
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 19,
                        top: 44,
                        bottom: 0,
                        width: 2,
                        background: "var(--bi-primary-100)",
                      }}
                    />
                  )}
                  {/* Numero */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: "var(--bi-primary)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 17,
                      zIndex: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 17,
                        color: "var(--bi-ink-900)",
                        marginBottom: 6,
                        lineHeight: 1.3,
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        color: "var(--bi-ink-600)",
                        lineHeight: 1.65,
                      }}
                    >
                      {s.desc}
                    </div>
                    {s.cta && (
                      <div style={{ marginTop: 16 }}>
                        <a
                          href="https://cup.regione.campania.it"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "12px 24px",
                            borderRadius: 4,
                            background: "var(--bi-primary)",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 15,
                            textDecoration: "none",
                          }}
                        >
                          Vai al CUP regionale
                          <Icon name="external" size={16} color="#fff" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tempi e scadenze ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 24,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                marginBottom: 16,
              }}
            >
              Tempi e scadenze
            </h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ background: "var(--bi-primary-050)" }}>
                  {["Classe priorità", "Sigla", "Entro", "Descrizione"].map(
                    (h) => (
                      <th
                        key={h}
                        style={{
                          padding: "10px 14px",
                          textAlign: "left",
                          fontWeight: 700,
                          color: "var(--bi-primary-800)",
                          borderBottom: "2px solid var(--bi-primary-100)",
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Urgente",
                    "U",
                    "72 ore",
                    "Condizione clinica che potrebbe aggravarsi rapidamente",
                  ],
                  [
                    "Breve",
                    "B",
                    "10 giorni",
                    "Condizione rilevante ma non immediatamente pericolosa",
                  ],
                  [
                    "Differita",
                    "D",
                    "30–60 gg",
                    "Condizione non urgente, valutazione programmata",
                  ],
                  [
                    "Programmata",
                    "P",
                    "120 gg",
                    "Prestazione di routine o controllo di follow-up",
                  ],
                ].map(([cls, sig, entro, desc], i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--bi-border)",
                      background:
                        i % 2 === 0 ? "var(--bi-surface)" : "var(--bi-bg-alt)",
                    }}
                  >
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>
                      {cls}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <span
                        style={{
                          padding: "2px 8px",
                          background: "var(--bi-primary-100)",
                          color: "var(--bi-primary-800)",
                          borderRadius: 4,
                          fontWeight: 700,
                        }}
                      >
                        {sig}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "10px 14px",
                        color: "var(--bi-primary)",
                        fontWeight: 700,
                      }}
                    >
                      {entro}
                    </td>
                    <td
                      style={{
                        padding: "10px 14px",
                        color: "var(--bi-ink-500)",
                      }}
                    >
                      {desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Costi ── */}
          <div
            style={{
              marginBottom: 40,
              padding: "20px 24px",
              background: "var(--bi-bg-alt)",
              borderRadius: 8,
              border: "1px solid var(--bi-border)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 22,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                margin: "0 0 10px",
              }}
            >
              Costi
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--bi-ink-600)",
                lineHeight: 1.6,
                margin: "0 0 12px",
              }}
            >
              L'importo del ticket dipende dalla prestazione richiesta e dalla
              tua situazione reddituale. Il pagamento si effettua online (CUP),
              in farmacia, tramite app, oppure allo sportello prima della
              visita.
            </p>
            <a
              href="#"
              style={{
                color: "var(--bi-primary)",
                fontWeight: 700,
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Come fare per pagare il ticket{" "}
              <Icon name="arrow-right" size={14} />
            </a>
          </div>

          {/* ── FAQ accordion ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 24,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                marginBottom: 16,
              }}
            >
              Maggiori informazioni
            </h2>
            <Accordion items={faq} />
          </div>

          {/* ── Canali alternativi ── */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--ff-serif)",
                fontSize: 24,
                fontWeight: 500,
                color: "var(--bi-ink-900)",
                marginBottom: 16,
              }}
            >
              Canali alternativi di prenotazione
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 14,
              }}
            >
              {[
                {
                  icon: "phone",
                  title: "CUP Telefonico",
                  detail:
                    "800 019 774 — gratuito\nLun-Ven 8:00–19:00 | Sab 8:00–13:00",
                },
                {
                  icon: "pill",
                  title: "Farmacie FarmaciUp",
                  detail: "Oltre 300 farmacie abilitate sul territorio ASL",
                },
                {
                  icon: "globe",
                  title: "App Campania Salute",
                  detail: "Disponibile per iOS e Android — prenotazione 24/7",
                },
                {
                  icon: "hospital",
                  title: "Sportello CUP ASL",
                  detail: "Presso i presidi ospedalieri e i distretti sanitari",
                },
              ].map((ch, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px",
                    borderRadius: 8,
                    background: "var(--bi-surface)",
                    border: "1px solid var(--bi-border)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "var(--bi-primary-050)",
                      color: "var(--bi-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Icon name={ch.icon} size={18} />
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: "var(--bi-ink-900)",
                      marginBottom: 4,
                    }}
                  >
                    {ch.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--bi-ink-500)",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {ch.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contatti URP ── */}
          <div
            style={{
              marginBottom: 40,
              padding: "20px 24px",
              background: "var(--bi-primary-050)",
              borderRadius: 8,
              border: "1px solid var(--bi-primary-100)",
              display: "flex",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <Icon
              name="phone"
              size={24}
              color="var(--bi-primary)"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: "var(--bi-ink-900)",
                  marginBottom: 6,
                }}
              >
                Ufficio Relazioni con il Pubblico (URP)
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--bi-ink-600)",
                  lineHeight: 1.7,
                }}
              >
                <div>
                  <strong>Tel.</strong> 081 8722111 — Lun-Ven 9:00–13:00 |
                  Mar-Gio 15:00–17:00
                </div>
                <div>
                  <strong>Email:</strong> urp@aslnapoli3sud.it
                </div>
                <div>
                  <strong>Sede:</strong> Via Acquaviva 109, Castellammare di
                  Stabia (NA)
                </div>
              </div>
            </div>
          </div>

          {/* ── Tag correlati ── */}
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--bi-ink-500)",
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: 0.8,
              }}
            >
              Argomenti correlati
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                "Esami diagnostici",
                "Ticket sanitario",
                "Esenzioni",
                "Medico di base",
                "SPID",
                "FSE",
              ].map((tag) => (
                <a
                  key={tag}
                  href="#"
                  style={{
                    padding: "6px 14px",
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 600,
                    border: "1.5px solid var(--bi-border)",
                    background: "var(--bi-surface)",
                    color: "var(--bi-ink-700)",
                    textDecoration: "none",
                  }}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FeedbackWidget />
      <Footer />
    </div>
  );
};

window.PageComeFarePer = PageComeFarePer;
