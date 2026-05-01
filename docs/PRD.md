# PRD — Restyling Sito Web ASL Napoli 3 Sud

**Cliente:** ASL Napoli 3 Sud
**Fornitore:** CID Software S.p.A.
**Versione documento:** 1.0
**Data:** 19 aprile 2026
**Autore:** Michele Cianni
**Stato:** Draft

---

## 1. Contesto e obiettivi

### 1.1 Background

Il sito istituzionale [aslnapoli3sud.it](https://www.aslnapoli3sud.it) presenta criticità note, emerse nelle riunioni del 3 febbraio e 17 marzo 2026 tra CID Software e la Direzione ASL:

- Informazioni eccessive e disperse in homepage, con architettura poco intuitiva.
- Duplicazioni tematiche (es. sovrapposizione tra *Come fare per* e *Di cosa hai bisogno*).
- Servizi online frammentati, non chiaramente distinti dai servizi regionali.
- Assenza di funzionalità digitali attese dagli utenti (download referti, prenotazioni guidate).
- Integrazione sito–social poco coerente.
- Contenuti testuali prolissi, scarsa valorizzazione di immagini e video reali.
- Mancata conformità al **Modello ASL** di Designers Italia / AGID, che è ormai lo standard nazionale per i siti delle Aziende Sanitarie Locali.

La richiesta di restyling è stata formalizzata dalla Direzione Amministrativa con l'obiettivo di rendere il portale **più facilmente consultabile, navigabile e comprensibile per cittadini e utenti**, prendendo come benchmark iniziali INPS e ASL Caserta, ma convergendo in ultima istanza sul modello AGID.

### 1.2 Obiettivi del progetto

| # | Obiettivo | Metrica / criterio di successo |
| --- | ----------- | -------------------------------- |
| O1 | Aderenza al Modello ASL di AGID | Checklist AGID soddisfatta al 100% sulle pagine oggetto del restyling |
| O2 | Conformità accessibilità | WCAG 2.1 livello AA su tutte le nuove pagine; dichiarazione di accessibilità aggiornata |
| O3 | Riduzione del sovraccarico informativo in homepage | Riduzione del numero di blocchi visibili above-the-fold rispetto alla homepage attuale |
| O4 | Attivazione di 5 nuove funzionalità digitali a valore per il cittadino | Rilasciate in produzione entro la fine del progetto |
| O5 | Coerenza grafica con Bootstrap Italia | 100% dei componenti UI basati sulla libreria Bootstrap Italia |
| O6 | Miglioramento della chiarezza percepita dei contenuti | Media voti ≥ 4/5 sulla funzionalità AGID di valutazione della chiarezza, dopo 3 mesi dal go-live |

### 1.3 Non-obiettivi (out of scope)

Per chiarezza, il progetto **non** include:

- Integrazione diretta nel sito ASL di SPID/CIE per autenticare l'utente verso servizi transazionali. L'autenticazione avverrà sui portali regionali (FSE Campania / Sinfonia, CUP regionale).
- Sviluppo di un CUP aziendale. Le prenotazioni rimandano al sistema regionale.
- Migrazione del CMS o scelta dello stack tecnologico (trattati in documento tecnico separato).
- Restyling di pagine diverse dalle 4 indicate (homepage + 3 interne); le altre pagine saranno adeguate in fasi successive.
- Backoffice editoriale: la gestione contenuti è già in capo alla risorsa Francesca Teoli (CID) in coordinamento con URP.

---

## 2. Stakeholder e personas

### 2.1 Stakeholder

| Stakeholder | Ruolo nel progetto |
| ------------- | -------------------- |
| Dir. Amm. Chiacchio (ASL) | Sponsor, decisore finale |
| Dott.ssa Giannini (ASL) | Referente contenutistico e di coordinamento |
| Ing. Massa, Ing. Manzo, Ing. Vitanostra, Ing. Di Pino (ASL) | Referenti tecnici |
| Dott.ssa Cannella (ASL) | Revisione contenuti |
| URP ASL | Fonte dati di contatto, gestione richieste cittadini |
| Dott. Anastasio (CID) | Project Manager |
| Dott.ssa Petrosino (CID) | Account Manager |
| Ing. Carlino (CID) | Esperto prodotto |
| Team CID (Della Bruna, Russo, Cortellazzi) | Sviluppo |
| Teoli (CID) | Gestione contenuti portale |
| Cittadini dei 58 comuni del territorio ASL Napoli 3 Sud | Utenti finali |

### 2.2 Personas

**P1 — Maria, 68 anni, residente a Torre Annunziata.** Deve prenotare una visita cardiologica prescritta dal medico di base. Usa il sito dal tablet. Bassa dimestichezza digitale, si confonde davanti a troppe scelte. Si aspetta di trovare un percorso guidato chiaro e, se si perde, di poter chiedere aiuto rapidamente.

**P2 — Antonio, 42 anni, caregiver del padre.** Gestisce referti, prenotazioni e impegnative per conto del padre anziano. Media dimestichezza digitale, usa prevalentemente lo smartphone. Vuole efficienza: trovare in pochi click l'informazione o il servizio, scaricare i referti senza dover andare in ospedale.

**P3 — Giulia, 29 anni, giovane madre.** Cerca informazioni sugli screening mammografici e sui vaccini per il figlio. Alta dimestichezza digitale. Si aspetta un sito mobile-first, veloce, con contenuti video chiari. È la persona-tipo che trae maggior valore dall'integrazione con i canali social.

**P4 — Operatore URP.** Usa il sito indirettamente: quando un cittadino chiama, spesso verifica online le informazioni da comunicare. Si aspetta dati sempre aggiornati, coerenti tra sito e recapiti pubblicati altrove (es. Google), per non dover gestire correzioni in tempo reale.

---

## 3. Vincoli e standard di riferimento

### 3.1 Standard normativi (obbligatori)

- **Linee guida AGID di design per i siti internet e servizi digitali della PA** ([docs.italia.it](https://docs.italia.it/italia/design/lg-design-servizi-web/)).
- **Modello ASL di Designers Italia** (alberatura, tipi contenuto, layout Figma).
- **Decreto legislativo 14 marzo 2013, n. 33** e **Delibera ANAC n. 495/2024** — Amministrazione Trasparente.
- **Regolamento UE 2016/679 (GDPR)**.
- **Direttiva UE 2016/2102** e **Legge 4/2004** — accessibilità (WCAG 2.1 AA minimo).

### 3.2 Standard tecnici di riferimento

- **Bootstrap Italia** come design system UI (estensione di Bootstrap 5 conforme al design system della PA italiana).
- **Template e componenti del Modello ASL** (Figma Community, file ufficiale Designers Italia).
- Mobile-first responsive design.
- Certificato HTTPS attivo (già presente).

### 3.3 Vincoli di processo

- I contenuti social in formato **reel** non possono essere pubblicati nativamente in homepage per motivi di coerenza grafica (chiarito da CID nel verbale 3/2). Vanno convertiti o collegati.
- La sezione **Amministrazione Trasparente** deve restare accessibile dal footer e indicizzabile dai motori di ricerca.
- I **recapiti pubblicati** devono essere coerenti con quelli forniti dall'URP; la verifica è compito della risorsa Teoli.

---

## 4. Architettura informativa

Si adotta in modo stretto l'alberatura del Modello ASL AGID. Le **5 sezioni principali** sono:

```text
Home
├── Servizi e prestazioni       [menu principale]
│   ├── Visite specialistiche
│   ├── Esami e analisi
│   ├── Prevenzione e vaccini
│   ├── Percorsi di cura e assistenza
│   ├── Igiene pubblica e animali
│   ├── Interventi di chirurgia
│   ├── Pronto soccorso             (pagina servizio)
│   └── Fascicolo Sanitario Elettronico (pagina servizio, link a FSE Campania)
│
├── Strutture                    [menu principale]
│   ├── Ospedali
│   ├── Ambulatori e poliambulatori
│   ├── Laboratori di analisi
│   ├── Medici di base e pediatri
│   └── Altre strutture territoriali
│
├── Come fare per                [menu principale]
│   ├── Prenotare una visita o un esame
│   ├── Ritirare un referto
│   ├── Pagare il ticket
│   ├── Cambiare/scegliere il medico di base
│   ├── Richiedere esenzioni
│   └── Iscriversi al SSN
│
├── ASL comunica                 [menu principale]
│   ├── Notizie
│   ├── Comunicati stampa
│   ├── Eventi
│   ├── Concorsi
│   └── Bandi di gara
│
└── Organizzazione               [accessibile dal footer]
    ├── Dirigenti
    ├── Dipartimenti
    └── Uffici
```

Altre pagine trasversali (footer): Amministrazione Trasparente, Albo pretorio, Dichiarazione di accessibilità, Informativa privacy, Cookie, Carta dei servizi, Mappa del sito, Segnalazioni, FAQ.

**Decisioni di merge con i verbali:**

- Le proposte dei verbali "Servizi online" e "Dedicato a" vengono **assorbite** dentro le sezioni AGID:
  - *Servizi online* → diventa una vista filtrata dentro *Servizi e prestazioni* e *Come fare per*. Non è una sezione a sé.
  - *Dedicato a* → corrisponde alle **Pagine Utente** del Modello ASL (es. Anziani, Giovani, Donne, Caregiver), accessibili dalla sezione *Tutto per* in homepage.
- Il blocco "Patologie – Piani della prevenzione – Liste di attesa" è rimosso dalla homepage come da decisione del 3/2. Patologie e prevenzione confluiscono in *Servizi e prestazioni*; Liste di attesa vanno in *Amministrazione Trasparente* o linkano al portale regionale.
- "Di cosa hai bisogno" è **rimosso** perché ridondante rispetto a *Come fare per* (differenziazione richiesta nel verbale 17/3, qui risolta con l'eliminazione del duplicato).

---

## 5. Specifica pagine

Il progetto di restyling copre **una homepage + 4 pagine interne**:

- §5.1 Homepage
- §5.2 Servizi e prestazioni (pagina lista 1° livello AGID)
- §5.3 Come fare per (pagina foglia con video tutorial)
- §5.4 Download referti (pagina foglia tipologia Servizio)
- §5.5 Ospedali (pagina lista 2° livello AGID)
- §5.6 Ospedale di Torre del Greco "Maresca" (pagina foglia tipologia Struttura, esempio concreto)

La coppia §5.5 + §5.6 è conteggiata come un'unica pagina interna ("Ospedali") perché rappresenta la navigazione standard lista-dettaglio di una stessa sezione del sito.

### 5.1 Homepage

**Obiettivo di pagina.** Orientare rapidamente l'utente verso le 3 operazioni più frequenti (trova un servizio, trova una struttura, scopri come fare per) ed esporre le comunicazioni istituzionali prioritarie.

**Struttura a blocchi (dall'alto verso il basso):**

1. **Header istituzionale** — slim header con dicitura "Regione Campania / Ministero della Salute", logo ASL Napoli 3 Sud, link "Servizi", "Seguici su" (social), selettore lingua se applicabile. Componente Bootstrap Italia: `it-header-slim-wrapper` + `it-header-center-wrapper` + `it-header-navbar-wrapper`.

2. **Menu principale** — voci: *Servizi e prestazioni*, *Strutture*, *Come fare per*, *ASL comunica*. A destra: bottone "Area riservata" (link al FSE / portale regionale).

3. **Hero con ricerca globale** — barra di ricerca centrale ("Cerca servizi, strutture, uffici…") + massimo 6 chip di ricerca rapida con le parole chiave più cercate (es. "Vaccini", "Prenotazione visite", "Scelta medico", "Certificati", "Screening", "Pronto Soccorso"). Questo blocco sostituisce l'attuale hero dispersivo.

4. **Notizie in evidenza** — 3 card (1 grande + 2 piccole), selezione editoriale ASL. Componente Bootstrap Italia: `it-card`.

5. **Servizi e prestazioni in evidenza** — massimo 3 categorie (consigliate: Visite specialistiche, Esami e analisi, Prevenzione e vaccini). Ogni card con icona, titolo, descrizione breve, link.

6. **Fascicolo Sanitario Elettronico (FSE)** — banner dedicato con CTA verso FSE Campania.

7. **Come fare per** — 4-6 guide passo-passo più cercate, ciascuna con icona e titolo. Richiamo al verbale del 17/3: ogni guida linkata punta a una pagina in cui il **video tutorial è in primo piano** e il testo esplicativo è secondario.

8. **Tutto per** (pagine Utente) — collegamenti a Pagine aggregatrici per categorie di utenza: Anziani, Giovani, Donne, Bambini, Caregiver, Persone con disabilità.

9. **ASL Comunica** — ultimi 3 contenuti editoriali (notizie, comunicati, eventi) in ordine cronologico inverso.

10. **Bandi e concorsi** — fino a 3 bandi + 3 concorsi più recenti, se presenti.

11. **Funzionalità di valutazione della chiarezza informativa** (obbligatoria AGID) — subito sopra il footer.

12. **Footer** — contatti URP, indirizzi, mappa dei 4 distretti, link istituzionali, Amministrazione Trasparente, Albo pretorio, Privacy, Cookie, Dichiarazione di accessibilità, Mappa del sito, Segnalazioni, FAQ, social.

**Note operative:**

- Galleria video **rimossa** dalla homepage come deciso il 17/3. I video confluiscono nelle pagine di *Come fare per* e in una sezione *Video* dentro *ASL comunica*.
- Calendario screening **rimosso** dalla homepage (decisione 3/2); accessibile da *Servizi e prestazioni* → *Prevenzione e vaccini*.
- Le immagini degli ospedali devono essere **reali** (non stock), fornite dal team social ASL.

---

### 5.2 Pagina — Servizi e prestazioni (pagina lista di 1° livello)

**Obiettivo di pagina.** Dare all'utente una panoramica completa delle categorie di servizi erogati dall'ASL e guidarlo alla categoria di suo interesse.

**URL:** `/servizi/`
**Breadcrumb:** Home → Servizi e prestazioni

**Struttura a blocchi:**

1. **Header + menu principale** (come homepage, con voce "Servizi e prestazioni" in stato attivo).
2. **Breadcrumb**.
3. **Titolo di pagina**: "Servizi e prestazioni".
4. **Occhiello / descrizione breve** (2-3 righe): cosa l'utente trova in questa pagina.
5. **Barra di ricerca interna** alla sezione servizi, con filtri per categoria.
6. **Servizi in evidenza** — massimo 3 servizi selezionati editorialmente (es. d'inverno "Vaccino antinfluenzale", in estate "Screening prevenzione"). Card con immagine, titolo, breve descrizione, CTA "Scopri di più".
7. **Esplora per categoria** (obbligatoria AGID) — griglia di card una per ciascuna categoria di secondo livello (Visite specialistiche, Esami e analisi, Prevenzione e vaccini, Percorsi di cura, Igiene pubblica e animali, Interventi di chirurgia, Pronto Soccorso, FSE). Ogni card ha titolo, descrizione, link.
8. **Come fare per** — richiamo alle 4-6 guide passo-passo più correlate ai servizi.
9. **Fascicolo Sanitario Elettronico** — banner dedicato con link alla scheda servizio.
10. **Pronto Soccorso** — banner dedicato con **stato affollamento in tempo reale** (vedi §6.2), oppure link alla piattaforma regionale se il dato non è disponibile.
11. **Parliamo di** — tag cloud degli argomenti correlati ai servizi (es. "Diabete", "Oncologia", "Maternità"). Al click si apre una Pagina aggregatrice argomento con tab *Servizi* selezionata.
12. **Valutazione chiarezza informativa** (obbligatoria AGID).
13. **Footer**.

---

### 5.3 Pagina — Come fare per (pagina foglia, procedura complessa con video)

Esempio concreto: **"Come fare per prenotare una visita specialistica"**.

**Obiettivo di pagina.** Guidare passo-passo l'utente nel completare una procedura, con il video tutorial come contenuto primario (decisione verbale 17/3).

**URL:** `/come-fare-per/prenotare-visita-specialistica/`
**Breadcrumb:** Home → Come fare per → Prenotare una visita specialistica

**Struttura a blocchi:**

1. **Header + menu** ("Come fare per" attivo).
2. **Breadcrumb**.
3. **Titolo di pagina**: "Prenotare una visita specialistica".
4. **Occhiello** (2-3 righe): cosa si ottiene con questa procedura e per chi è rivolta.
5. **Video tutorial in primo piano** — player responsive, dimensione principale sulla pagina. Include sottotitoli (obbligatori per accessibilità), trascrizione scaricabile, pulsante per abilitare LIS se disponibile. Sotto al video: riga con durata, data ultimo aggiornamento del contenuto, condivisione social.
6. **A chi è rivolto** — breve elenco dei destinatari (es. cittadini con impegnativa medica, esenti, non esenti).
7. **Cosa serve** — elenco di requisiti (impegnativa elettronica/ricetta dematerializzata, tessera sanitaria, eventuali esenzioni).
8. **Come si fa** — passaggi numerati della procedura. Ogni passo ha titolo, descrizione e, se utile, immagine/illustrazione. Ultimo passo contiene CTA **"Vai al CUP regionale"** che apre il portale regionale in nuova scheda (Strada A: front-door).
9. **Tempi e scadenze** — informazioni su tempi di prenotazione, modifica, disdetta.
10. **Costi** — ticket, esenzioni, modalità di pagamento, link a "Come fare per pagare il ticket".
11. **Maggiori informazioni** — accordion (tendina) con FAQ e dettagli approfonditi che non appesantiscono la pagina principale (richiesta verbale 17/3).
12. **Canali alternativi** — se prenoti via CUP telefonico, farmacia abilitata, app Campania Salute: numeri, orari, link.
13. **Contatti ufficio responsabile** — URP distretto competente con telefono, email, orari.
14. **Argomenti correlati** — tag (es. "Esami diagnostici", "Ticket sanitario").
15. **Valutazione chiarezza informativa**.
16. **Footer**.

---

### 5.4 Pagina — Download referti (pagina foglia tipologia Servizio)

**Obiettivo di pagina.** Spiegare al cittadino come scaricare i referti dei propri esami. La pagina del sito ASL è **informativa e di indirizzamento** al portale regionale (Strada A), non una pagina transazionale.

**URL:** `/servizi/esami-e-analisi/ritiro-referti-online/`
**Breadcrumb:** Home → Servizi e prestazioni → Esami e analisi → Ritiro referti online

**Struttura a blocchi (tipologia Servizio AGID):**

1. **Header + menu**.
2. **Breadcrumb**.
3. **Titolo di pagina**: "Ritiro referti online".
4. **Occhiello**: servizio che consente di scaricare in autonomia i propri referti tramite il Fascicolo Sanitario Elettronico della Regione Campania, senza recarsi fisicamente in ASL.
5. **CTA primaria evidente**: bottone **"Vai al portale referti"** con icona esterna, che apre FSE Campania in nuova scheda. In prossimità, icone dei metodi di autenticazione accettati (SPID, CIE, CNS).
6. **A chi è rivolto**: assistiti SSR iscritti all'ASL Napoli 3 Sud, con FSE attivo.
7. **Come funziona** (3-4 passi schematici):
   1. Autenticati sul portale regionale con SPID/CIE.
   2. Seleziona il referto dall'elenco.
   3. Scarica il PDF firmato digitalmente.
   4. Conserva o condividi il referto come preferisci.
8. **Tempi di pubblicazione referti**: indicativi per tipologia (es. referti di laboratorio entro 3-5 giorni dall'esame, referti radiologici entro 7-10 giorni).
9. **Cosa serve**: SPID livello 2 / CIE con PIN / CNS, tessera sanitaria.
10. **Problemi di accesso o referto non trovato**: istruzioni di troubleshooting e canali di assistenza (URP, numero verde regionale).
11. **Delega**: come scaricare il referto di un familiare (es. minore, persona con disabilità), rimando al modulo di delega.
12. **Ritiro cartaceo**: per chi non ha strumenti digitali, indicazioni per ritirare il referto cartaceo allo sportello. Orari e sedi.
13. **Privacy**: breve box informativo con link all'informativa GDPR sul trattamento dei dati sanitari.
14. **Contatti**: URP del distretto, email, telefono, orari.
15. **Argomenti correlati**: FSE, Esami di laboratorio, Radiologia.
16. **Valutazione chiarezza informativa**.
17. **Footer**.

> **Nota.** Questa pagina non contiene area riservata né form di autenticazione. La scelta è coerente con la Strada A concordata: il sito ASL è una *front-door* informativa, la transazione avviene sul portale regionale. Se in futuro l'ASL vorrà integrare un'area riservata aziendale, servirà un PRD dedicato.

---

### 5.5 Pagina lista — Ospedali (pagina lista di 2° livello)

**Obiettivo di pagina.** Permettere all'utente di trovare rapidamente, da mobile o da desktop, l'ospedale della rete ASL Napoli 3 Sud più adatto alle sue esigenze, con strumenti di ricerca e filtro e una panoramica visiva immediata.

**URL:** `/strutture/ospedali/`
**Breadcrumb:** Home → Strutture → Ospedali

**Struttura a blocchi (mobile-first):**

1. **Header + menu** ("Strutture" in stato attivo).
2. **Breadcrumb**.
3. **Hero compatto** — titolo "Ospedali" + sottotitolo di una riga. Senza immagine di sfondo: il contenuto visuale è nelle card sottostanti.
4. **Barra di ricerca** — input a tutta larghezza con placeholder "Cerca per nome ospedale o specialità".
5. **Filtri a chip** — due gruppi: *Comune* e *Specialità*. Su desktop sempre visibili; su mobile in bottom sheet apribile da bottoni `[Filtra per comune ▾]` `[Filtra per specialità ▾]` con applicazione tramite CTA sticky.
6. **Toggle Lista / Mappa** — segmented control in alto a destra. Default: **Lista** (su mobile la mappa è frustrante come default).
7. **Vista Lista** — griglia di card ospedale (2 colonne desktop, 1 colonna mobile). Ogni card contiene:
   - Immagine reale dell'ospedale (proporzione 16:9)
   - Badge "PS 24h" in sovraimpressione se il pronto soccorso è attivo
   - Titolo, comune, distanza (se geolocalizzazione consentita)
   - Descrizione breve (2 righe, troncata)
   - Badge con fino a 3 specialità principali + "+N"
   - CTA: link "Scopri di più" + icon button "Chiama" + icon button "Indicazioni"
   - Card cliccabile per intero verso la pagina foglia.
8. **Vista Mappa** (alternativa) — mappa con marker cluster. Popup al click: foto, nome, indirizzo, CTA scheda. Su desktop: barra laterale con lista degli ospedali nel viewport. Su mobile: carosello orizzontale di card compatte sotto la mappa.
9. **Paginazione** — preferibile a "carica altri" per indicizzabilità SEO. Se ci sono pochi ospedali (tipicamente <15), la paginazione non serve.
10. **Stato vuoto** — se nessun risultato: icona + "Nessun ospedale corrisponde ai filtri selezionati" + bottone "Azzera filtri".
11. **Valutazione chiarezza informativa** (obbligatoria AGID).
12. **Footer**.

**Decisioni di design motivate:**

- **Niente "Ospedali in evidenza"** sopra la lista: creerebbe una gerarchia editoriale tra strutture che è politicamente sensibile per un ente pubblico. Tutti gli ospedali sono trattati paritariamente; la differenziazione avviene tramite filtri scelti dall'utente.
- **Default vista Lista, non Mappa**: su mobile la mappa richiede pinch-zoom, è lenta al primo caricamento, e se l'utente ha già in mente il comune la ricerca testuale è più veloce.
- **Card con immagine reale protagonista**: coerente con la richiesta del verbale 17/3 ("utilizzo di immagini reali per ciascun ospedale"). Pattern simile a feed social, familiare all'utente.

---

### 5.6 Pagina foglia — Ospedale Maresca di Torre del Greco (tipologia Struttura)

**Obiettivo di pagina.** Fornire all'utente tutte le informazioni di una singola struttura ospedaliera secondo lo schema **Tipologia Struttura** del Modello ASL di Designers Italia, mantenendo le funzionalità trasversali F1 (Prenota visita), F2 (Stato PS), F3 (Valutazione chiarezza).

**URL:** `/strutture/ospedali/maresca-torre-del-greco/`
**Breadcrumb:** Home → Strutture → Ospedali → Ospedale Maresca

**Scelta dell'ospedale di riferimento.** Ospedale Maresca (Torre del Greco) è usato come esempio perché ha pronto soccorso attivo (necessario per esemplificare F2) ed è distinto dagli ospedali già trattati nei Figma CID precedenti. L'esistenza della struttura nella rete ASL Napoli 3 Sud va confermata con URP/ASL prima di portare il mockup in produzione.

#### 5.6.1 Campi della Tipologia Struttura (aderenza al Modello AGID)

La pagina implementa rigorosamente i campi previsti dal documento di architettura del Modello ASL per la tipologia Struttura. La tabella sottostante indica, per ciascun campo, se è necessario od opzionale, il tipo di contenuto e la sua collocazione in pagina.

| # | Campo | Obbligatorietà | Tipo contenuto | Collocazione in pagina |
| --- | ------- | ---------------- | ---------------- | ------------------------ |
| 1 | Nome della struttura | Necessario | Testo (tassonomia Strutture) | Hero — titolo H1 |
| 2 | Immagine | **Opzionale (incluso)** | File immagine | Hero — sfondo o affiancato al titolo |
| 3 | Descrizione breve | Necessario | Testo breve (max 160 car.) | Hero — sottotitolo |
| 4 | A chi è rivolto/a | Necessario | Testo breve (max 255 car.) + chip Utenti | Sezione dedicata dopo Hero |
| 5 | Dove | Necessario | Testo breve (max 255 car.) | Sezione "Dove" con link "Apri in mappa" |
| 6 | Come accedere | Necessario | Rich text | Sezione "Come accedere" |
| 7 | Orari di apertura | Necessario | Rich text | Sezione "Orari di apertura" |
| 8 | Contatti | Necessario | Testo breve (max 255 car.) | Sezione "Contatti" (vedi §5.6.3) |
| 9 | Servizi e prestazioni | Necessario | Relazione con Tipologia Servizio | Sezione "Servizi e prestazioni" con Card Services |
| 10 | Responsabile della struttura | Necessario | Relazione con Tipologia Persona | Sezione "Responsabile" con Card People |
| 11 | Galleria | **Opzionale (incluso)** | Immagini/video con didascalie | Sezione "Galleria" |
| 12 | Ultimo aggiornamento | Necessario | Datetime | Footer di pagina, prima del blocco Valutazione |

**Campi opzionali esclusi** (non valorizzati in questa specifica): Sottotitolo, Cos'è, Coordinatore della struttura, Personale della struttura, Avvisi e notizie, Unità organizzativa di appartenenza, Strutture correlate, Ulteriori informazioni, Parliamo di (tag Argomenti). Possono essere reintrodotti in versioni successive senza modifiche strutturali al layout.

**Nota sul campo "Reparti".** I reparti ospedalieri non sono trattati come elenco autonomo nella scheda Struttura. Coerentemente con il Modello ASL, le attività erogate dall'ospedale sono mappate nel campo **Servizi e prestazioni** (relazione con tipologia Servizio). Se in futuro l'ASL volesse rappresentare i reparti come entità organizzative, servirà valorizzare il campo **Unità organizzativa di appartenenza**, oggi escluso.

#### 5.6.2 Struttura della pagina (blocchi)

La pagina implementa esclusivamente i campi della tipologia Struttura previsti dal Modello AGID, senza aggiunta di blocchi funzionali estranei. Le funzionalità trasversali F1 (Prenota visita) e F2 (Stato PS) **non vivono in questa pagina** ma nelle rispettive pagine foglia dedicate (vedi §6.1 e §6.2). Nella scheda Struttura sono presenti solo **link contestuali** verso quelle pagine, dove è naturale collocarli (es. nel rich text di *Come accedere* o nell'Hero come badge cliccabile).

1. **Header + menu principale** — voce "Strutture" in stato attivo.

2. **Breadcrumb** — Home / Strutture / Ospedali / **Ospedale Maresca**.

3. **Hero** — implementa i campi *Nome* (H1), *Descrizione breve* (max 160 caratteri, sotto-H1), *Immagine* (opzionale, di sfondo o affiancata). Include inoltre il campo *Dove* (indirizzo breve sotto il titolo). Se la struttura ha un PS attivo, badge cliccabile "PS attivo 24/7 — vedi stato in tempo reale →" che porta alla scheda Servizio *Pronto Soccorso* (dove vive F2). Due CTA secondarie scroll-to-anchor: "Dove" e "Contatti".

4. **A chi è rivolto/a** — campo AGID necessario. Testo breve (max 255 caratteri) con linguaggio semplice; se rilevante, chip di tassonomia Utenti (es. Anziani, Donne, Bambini) usando il componente `chip` dell'UI Kit Italia. Omettere i chip se la struttura è rivolta a tutta l'utenza dell'ASL.

5. **Dove** — campo AGID necessario. Testo breve (max 255 caratteri) con via e numero civico, CAP, città, eventualmente quartiere o circoscrizione. Link "Apri in mappa" verso Google Maps o OpenStreetMap, come richiesto dal modello. Sottoblocco con mappa embedded opzionale.

6. **Come accedere** — campo AGID necessario. Rich text con attenzione particolare agli accessi per persone con disabilità, modalità di arrivo (auto, mezzi pubblici), costi e regole di accesso (es. normative per visitatori). Questo campo **assorbe** ciò che nella versione precedente del PRD era frammentato in "Come arrivare" + "Accessibilità" + "Parcheggi". Può contenere link contestuali a pagine correlate (es. "Per prenotare una visita vedi *[Come fare per prenotare](/come-fare-per/prenotare-visita/)*").

7. **Orari di apertura** — campo AGID necessario. Rich text strutturato, con tabella o lista per giorni feriali/festivi. Indicare esplicitamente se alcuni servizi interni hanno orari differenti (rimandando alle rispettive schede Servizio).

8. **Contatti** — campo AGID necessario, testo breve (max 255 caratteri). Vedi dettaglio in §5.6.3.

9. **Servizi e prestazioni** — campo AGID necessario. Elenco di Card Services (componente UI Kit ASL) verso le pagine foglia Servizio erogate dall'ospedale, **tra cui la Card verso il Servizio "Pronto Soccorso"** dove è esposto lo stato di affollamento in tempo reale (F2). Raggruppabili per categoria di servizio (Visite specialistiche, Esami e analisi, ecc.) per migliorare la scansione visiva. Se la lista è lunga (>12 elementi), aggiungere barra di ricerca interna alla sezione.

10. **Responsabile della struttura** — campo AGID necessario. Card People (componente UI Kit ASL) con nome, qualifica e link alla pagina foglia Persona.

11. **Galleria** — campo AGID opzionale, incluso. Carosello di immagini reali + video con didascalie. Su desktop: griglia 3 colonne con eventuale primo elemento double-width per un video principale. Su mobile: carosello swipeable orizzontale. Tutti i video con sottotitoli e trascrizione scaricabile (WCAG 2.1 AA). Se alcuni video non sono ancora disponibili al go-live, la sezione si riduce alla sola parte foto senza placeholder.

12. **Ultimo aggiornamento** — campo AGID necessario. Riga testuale prima del blocco valutazione, es. "Ultimo aggiornamento: 22 aprile 2026".

13. **[F3] Valutazione chiarezza informativa** — obbligatoria AGID su ogni pagina (vedi §6.3).

14. **Footer** — standard.

#### 5.6.3 Campo "Contatti" — gestione del limite di 255 caratteri

Il Modello AGID fissa per il campo *Contatti* un limite di 255 caratteri. Questo vincolo rende impossibile includere in un solo campo tutti i numeri dell'ospedale (centralino, URP, PS, direzione, CUP, accettazione, informazioni degenti).

**Approccio scelto** (coerente con AGID, senza sforare il limite):

- Nel campo *Contatti* compaiono solo i **punti di contatto diretti della struttura**: centralino, email istituzionale, eventualmente PEC. Esempio di composizione in 255 caratteri:

  > "Centralino: 081 XXXXXXX (24/7) · Email: <ospedale.maresca@aslnapoli3sud.it> · PEC: <maresca.aslna3sud@pec.it> · URP ospedaliero: 081 YYYYYYY (Lun-Ven 9-13)"

- Gli altri numeri (CUP, URP distrettuale, prenotazione referti, ecc.) **non** sono replicati nella scheda ospedale: sono raggiungibili tramite **link contestuali** dentro le sezioni pertinenti:
  - Nella sezione *[F1] CTA Prenota visita*: link "Vai al CUP regionale" e numero del CUP telefonico.
  - Nella sezione *Servizi e prestazioni*: ogni Card Service porta alla propria pagina foglia dove sono indicati i contatti specifici del servizio.
  - Nel footer globale: link a *Contatti URP* di distretto e alla pagina *Segnalazioni*.

Questo approccio rispetta la separazione AGID tra informazioni della struttura fisica e informazioni dei servizi erogati, evitando duplicazioni.

#### 5.6.4 Componenti UI Kit ASL / Italia utilizzati

Come indicato dal documento AGID per la tipologia Struttura:

- **Chips dello UI Kit Italia** — per tassonomie Utenti (campo *A chi è rivolto/a*) e Argomenti (se attivato).
- **Card Services dello UI Kit ASL** — per il campo *Servizi e prestazioni*.
- **Card People dello UI Kit ASL** — per il campo *Responsabile della struttura*.
- **Card Place dello UI Kit ASL** — non applicabile a questa pagina (si usa per riferimenti ad altre strutture correlate, campo opzionale escluso).

#### 5.6.5 Gerarchia degli intent (razionale della composizione)

Lo schema AGID definisce *quali campi* usare, ma lascia libertà sull'*ordine di presentazione*. L'ordine scelto in §5.6.2 segue il Modello ASL rispettando la logica informativa tipica di una scheda Struttura:

1. **Identità della struttura** (Hero con Nome, Descrizione breve, Immagine, indirizzo essenziale).
2. **A chi si rivolge** (A chi è rivolto/a) — chiarisce subito se la struttura è pertinente per l'utente.
3. **Informazioni pratiche di accesso** (Dove, Come accedere, Orari, Contatti) — le info operative che servono a chi ha deciso di rivolgersi a questa struttura.
4. **Cosa si fa qui** (Servizi e prestazioni) — il ventaglio di servizi erogati, ciascuno con link alla propria scheda.
5. **Chi dirige la struttura** (Responsabile) — informazione istituzionale, meno urgente operativamente.
6. **Contenuto visuale di approfondimento** (Galleria) — importante editorialmente ma non prioritario per l'intent operativo.
7. **Metadati** (Ultimo aggiornamento) + **feedback** (valutazione chiarezza) prima del footer.

Le funzionalità trasversali F1 e F2 **non sono in questa pagina** e hanno la propria collocazione naturale:

- **F2 (Stato PS)** vive nella pagina foglia Servizio "Pronto Soccorso", coerentemente con l'indicazione AGID secondo cui lo stato di affollamento è un attributo della **scheda servizio PS**, non della scheda struttura. La scheda ospedale rimanda alla scheda PS tramite: (a) badge cliccabile in Hero se il PS è attivo, (b) Card Service del Pronto Soccorso nella sezione *Servizi e prestazioni*.
- **F1 (Prenota visita)** vive nella pagina *Come fare per prenotare una visita* (§5.3), accessibile dai chip di ricerca rapida in homepage, dal menu *Come fare per*, e da link contestuali nel rich text di *Come accedere*.

Questa separazione rispetta il principio AGID di mono-responsabilità delle schede: la scheda Struttura informa **sulla struttura fisica**, la scheda Servizio informa **sul servizio** (incluso il suo stato operativo se dinamico).

#### 5.6.6 Open point specifici

- **Q1 del PRD** (stato PS via API) resta critica ma non impatta direttamente questa pagina: F2 vive nella scheda Servizio *Pronto Soccorso*. Qui l'unica conseguenza è sul badge in Hero, che dovrà gestire gli stati "PS attivo", "PS attivo ma stato non disponibile", "PS non presente".
- Video reparti / video tour — se non prodotti al go-live, la galleria mostra solo foto. Da verificare timeline produzione con Dott.ssa Meo Colombo (grafica CID) e team social.
- Elenco effettivo dei servizi erogati dall'Ospedale Maresca — da verificare con Dott.ssa Cannella (revisione contenuti ASL) e URP.
- Esistenza dell'Ospedale Maresca nella rete ASL Napoli 3 Sud — da confermare formalmente (ipotesi basata su contesto territoriale, non su fonte ASL diretta).

---

## 6. Specifica funzionalità nuove

Il progetto introduce **5 nuove funzionalità**, numerate da F1 a F5.

### 6.1 F1 — Prenotazione visite online (front-door verso CUP regionale)

**Razionale.** Il cittadino oggi non sa dove andare per prenotare: il sito ASL non è chiaro nell'indirizzarlo al CUP regionale. La feature non introduce un CUP aziendale, ma un **percorso guidato** che porta al servizio giusto.

**User story.** Come cittadino con impegnativa medica, voglio capire dal sito ASL come prenotare una visita specialistica e arrivare al CUP regionale nel minor numero di passaggi possibile, senza confondermi tra canali.

**Flow (high-level):**

1. L'utente clicca "Prenota una visita" dall'homepage o dal menu *Come fare per*.
2. Atterra sulla pagina *Come fare per prenotare una visita* (vedi §5.3).
3. Scorre il video tutorial e i passi.
4. Clicca CTA "Vai al CUP regionale".
5. Viene reindirizzato al portale CUP Campania in nuova scheda, preservando la sessione del sito ASL.

**Requisiti funzionali:**

- RF1.1 La CTA verso il CUP è visibile nella homepage (chip di ricerca rapida), nel menu *Come fare per*, nella pagina *Come fare per prenotare una visita* (§5.3), e come link contestuale dal rich text di *Come accedere* nelle schede Struttura degli ospedali.
- RF1.2 La funzionalità **non è presente come blocco autonomo** nelle schede Struttura (ospedali): le schede Struttura rimandano alla pagina *Come fare per prenotare* tramite link contestuali, coerentemente con la separazione AGID tra scheda struttura e scheda servizio/procedura.
- RF1.3 Il link esterno al CUP è marcato come tale (icona `external-link` di Bootstrap Italia) e apre in `target="_blank"` con `rel="noopener noreferrer"`.
- RF1.4 Se il portale CUP regionale è indisponibile (pagina di errore), il sito ASL mostra in pagina un fallback con numeri di telefono del CUP e orari.
- RF1.5 Sono indicati sempre i **canali alternativi**: CUP telefonico, farmacie abilitate, app Campania Salute.

**Edge case da gestire:**

- Utente senza SPID → deve trovare nella pagina indicazioni su come ottenerlo.
- Utente con difficoltà digitali → deve trovare evidenza dei canali alternativi.
- Utente che cerca una prestazione non prenotabile tramite CUP (es. esami urgenti) → deve trovare spiegazione chiara.

**Metriche di successo:**

- Click-through rate dalla homepage alle pagine *Come fare per*.
- Click-through rate dalle pagine *Come fare per* al CUP regionale.
- Tasso di abbandono sulla pagina *Come fare per prenotare una visita*.

---

### 6.2 F2 — Stato affollamento Pronto Soccorso in tempo reale

**Razionale.** Richiesta esplicitamente supportata dal Modello ASL AGID, che rende **obbligatorio** rendere disponibile l'informazione sullo stato di affollamento del PS **nella scheda servizio dedicata** (pagina foglia tipologia Servizio "Pronto Soccorso"), non nella scheda struttura ospedaliera. Questa separazione è intenzionale: l'affollamento è un attributo dinamico del servizio PS, non della struttura fisica che lo ospita.

**User story.** Come cittadino o caregiver, voglio sapere prima di recarmi in un Pronto Soccorso dell'ASL quanti pazienti ci sono in attesa e il codice triage, per scegliere la sede meno affollata o orientarmi su un canale alternativo (guardia medica, 116117).

**Collocazione della funzionalità:**

- Vive nella pagina foglia Servizio *Pronto Soccorso* dentro la sezione *Servizi e prestazioni*.
- Le schede Struttura degli ospedali (§5.6) **non** ospitano il widget: contengono solo un badge cliccabile in Hero ("PS attivo 24/7 — vedi stato in tempo reale →") e una Card Service del Pronto Soccorso nella sezione *Servizi e prestazioni* dell'ospedale.

**Flow:**

1. L'utente accede alla pagina *Pronto Soccorso* attraverso uno dei seguenti percorsi:
   - Menu principale *Servizi e prestazioni* → Card *Pronto Soccorso*.
   - Homepage → banner/chip rapido *Pronto Soccorso*.
   - Scheda Struttura di un singolo ospedale → badge PS in Hero o Card Service *Pronto Soccorso*.
   - Chatbot F4 → ramo "Pronto Soccorso".
2. Vede nella pagina un elenco dei PS della rete ASL.
3. Per ciascun PS vede: numero di pazienti in attesa, suddivisione per codice triage (bianco/verde/azzurro/arancione/rosso), timestamp ultimo aggiornamento.
4. Può approfondire sulla pagina *Struttura* dell'ospedale che ospita il PS (per informazioni pratiche: indirizzo, come accedere, ecc.).

**Requisiti funzionali:**

- RF2.1 Il widget di stato PS è presente esclusivamente nella pagina foglia Servizio *Pronto Soccorso*. Non deve essere duplicato nelle schede Struttura.
- RF2.2 Il dato è aggiornato automaticamente a intervalli regolari (frequenza da concordare: suggerito max 5 minuti).
- RF2.3 Se il dato non è disponibile per una sede, il box della sede mostra messaggio "Dato non disponibile — ultimo aggiornamento: [timestamp]" + link al portale regionale, se esiste.
- RF2.4 L'informazione è accompagnata da un disclaimer chiaro: "I dati sono indicativi. In caso di emergenza chiama il 118."
- RF2.5 È presente in pagina un box esplicativo dei codici triage.

**Edge case:**

- Sistema regionale / aziendale di triage non raggiungibile → mostrare timestamp ultimo dato noto e messaggio esplicativo.
- Codici triage molto vecchi (>30 minuti) → evidenziare visivamente la staleness.

**Vincoli importanti:**

- La fonte dati dello stato PS dipende dal sistema informatico aziendale e/o regionale. **Va confermato in fase successiva se questa fonte esiste e se espone un'API**; in caso contrario, la feature si riduce a un link statico al portale regionale. Questo è un *open point* del PRD (vedi §9).

---

### 6.3 F3 — Valutazione chiarezza informativa delle pagine

**Razionale.** Obbligo esplicito del Modello ASL AGID: "ogni pagina del sito deve permettere ai cittadini di valutare la chiarezza delle pagine, come da indicazione dell'eGovernment Benchmark". Presente prima del footer su ogni pagina.

**User story.** Come ASL, voglio raccogliere feedback strutturato dai cittadini sulle pagine del sito, per capire quali contenuti sono poco chiari e migliorarli iterativamente.

**Flow:**

1. In fondo ad ogni pagina, l'utente vede la domanda: "Queste informazioni ti sono state utili?".
2. Due opzioni primarie: **Sì** / **No**.
3. Se **Sì**: domande chiuse (es. "Cosa ti è stato più utile?") a scelta multipla con opzioni predefinite + commento opzionale.
4. Se **No**: domande chiuse ("Cosa non ti è risultato chiaro?") + commento opzionale.
5. Submit non richiede autenticazione, registra il feedback con URL di pagina, timestamp, user-agent (non IP per GDPR).
6. L'utente vede un messaggio di conferma e ringraziamento.

**Requisiti funzionali:**

- RF3.1 Presente su tutte le pagine del sito, sempre nella stessa posizione (prima del footer).
- RF3.2 Domande chiuse standardizzate, così da poter aggregare i dati per categoria di pagina.
- RF3.3 Campo commento libero con limite caratteri (es. 500) e filtro anti-spam.
- RF3.4 Backoffice (anche minimale) che permetta a Teoli e team URP di vedere i feedback aggregati per pagina, filtrati per data.
- RF3.5 Conforme GDPR: nessun dato personale raccolto salvo commento libero (con warning di non inserire dati personali).

**Componente Bootstrap Italia:** adattamento del componente `it-feedback` se disponibile, o componente custom che segue il pattern del kit AGID.

**Metriche di successo:**

- Numero di pagine con almeno 10 feedback nei primi 3 mesi.
- Media voti "Sì" su totale risposte.
- Tempo medio di risposta ai commenti critici da parte del team editoriale.

---

### 6.4 F4 — Chatbot di orientamento (decision tree, NO AI generativa)

**Razionale.** La Dott.ssa Giannini ha evidenziato che "le informazioni risultano ancora eccessive in homepage" e ha chiesto una struttura meno dispersiva con accessi progressivi. Un chatbot di orientamento può aiutare a restringere lo scope informativo in base alla domanda reale dell'utente.

**Scelta architetturale critica.** Il chatbot **non** utilizza LLM + RAG. Utilizza un **decision tree** scripted, con alberi di conversazione curati editorialmente dal team contenuti ASL. La motivazione:

- Un chatbot sanitario basato su LLM generativo può allucinare orari, controindicazioni, procedure — con rischi concreti per la salute degli utenti.
- Un decision tree è prevedibile, auditable, aggiornabile dal team editoriale senza necessità di retraining, e trasparente: ogni risposta è una risposta scritta e firmata dall'ASL.
- Rispetta il principio di *accountability* richiesto dal GDPR e dalle linee guida AGID per servizi digitali della PA.

Questa scelta è **esplicitamente motivata** nel PRD per evitare che venga riaperta in corso d'opera: se in futuro l'ASL vorrà adottare un'architettura RAG+LLM, servirà un'analisi dei rischi, un piano di guardrail, una policy di disclaimer e un ciclo di validazione editoriale dei contenuti.

**User story.** Come cittadino che non sa da dove iniziare, voglio interagire con un assistente che, attraverso poche domande, mi porti rapidamente alla pagina o al servizio di cui ho bisogno, senza dover navigare un menu complesso.

**Flow tipico:**

1. L'utente clicca l'icona del chatbot (bottone fisso in basso a destra, desktop e mobile).
2. Si apre un pannello con messaggio iniziale: "Ciao, posso aiutarti a orientarti tra i servizi dell'ASL. Di cosa hai bisogno?".
3. Vengono proposti bottoni con le macro-opzioni: *Prenotare una visita*, *Ritirare un referto*, *Trovare un ospedale/ambulatorio*, *Cambiare medico di base*, *Vaccini e screening*, *Altro*.
4. Ad ogni scelta, l'albero si approfondisce con ulteriori domande chiuse.
5. In fondo, il chatbot presenta:
   - la pagina del sito corrispondente (link interno)
   - oppure il link esterno al portale regionale (CUP, FSE)
   - i recapiti dell'ufficio competente (telefono, email)
6. In ogni nodo è disponibile un bottone "Parla con un operatore" che porta alla pagina di contatto URP o mostra il numero verde.

**Requisiti funzionali:**

- RF4.1 Albero di conversazione gestibile da backoffice (JSON o CMS dedicato), modificabile dal team editoriale senza deploy.
- RF4.2 Nessun input libero dell'utente nelle fasi iniziali; solo bottoni predefiniti. Input libero ammesso solo come alternativa "cerca altro" che esegue una ricerca full-text sul sito.
- RF4.3 Disclaimer fisso in ogni conversazione: "Questo assistente fornisce solo informazioni di orientamento. Non fornisce consigli medici. In caso di emergenza, chiama il 118."
- RF4.4 Log delle conversazioni anonimizzato per analisi dei nodi più frequentati e per ottimizzare l'albero.
- RF4.5 Accessibile via tastiera, screen reader compatibile, conforme WCAG 2.1 AA.
- RF4.6 Esperienza graziosa in caso di errore: "Mi dispiace, si è verificato un errore. Puoi contattare l'URP al numero…".

**Edge case:**

- Utente che scrive input libero senza averlo richiesto → messaggio di guida con bottoni.
- Utente che cerca informazioni mediche ("ho mal di pancia, cosa faccio?") → risposta standard che rimanda a guardia medica / 118 / medico di base, NON suggerisce diagnosi.
- Ricerca full-text senza risultati → proposta dei canali di contatto.

**Metriche di successo:**

- Tasso di completamento conversazione (utente che arriva a una pagina di destinazione).
- Tasso di fallback verso operatore umano.
- Top 10 percorsi dell'albero (per ottimizzare l'ordinamento).

---

### 6.5 F5 — Download referti (pagina servizio dedicata, front-door verso FSE)

**Razionale.** Funzionalità esplicitamente richiesta nel verbale del 17/3 ("inserimento di una sezione per il download dei referti"). Con la scelta Strada A, si realizza come **pagina di servizio** che informa e reindirizza al FSE Campania, non come modulo transazionale nel sito ASL.

**User story.** Come cittadino (o caregiver), voglio sapere chiaramente dal sito ASL come scaricare i miei referti (o quelli di un familiare di cui sono delegato) ed essere portato senza frizione al portale regionale giusto.

La pagina è descritta in dettaglio in §5.4. Qui si raccolgono i requisiti funzionali della feature:

**Requisiti funzionali:**

- RF5.1 La pagina è raggiungibile da:
  - menu *Servizi e prestazioni* → *Esami e analisi*;
  - menu *Come fare per* → *Ritirare un referto*;
  - chip di ricerca rapida in homepage ("Referti");
  - chatbot F4, nel ramo "Ritirare un referto".
- RF5.2 CTA primaria "Vai al portale referti" sempre visibile, desktop e mobile.
- RF5.3 Spiegazione chiara dei livelli di autenticazione richiesti (SPID L2, CIE, CNS).
- RF5.4 Sezione "Delega" con riferimento al modulo per scaricare referti di minori / persone con disabilità.
- RF5.5 Sezione "Ritiro cartaceo" per chi non ha strumenti digitali, con sedi e orari.
- RF5.6 Tempi di pubblicazione referti per tipologia.
- RF5.7 Contatti per assistenza.

**Edge case:**

- Portale regionale down → pagina mostra avviso in alto e propone ritiro cartaceo.
- Utente senza SPID → sezione dedicata con link a "Come ottenere SPID".
- Referto non disponibile online dopo i tempi previsti → istruzioni per contattare la struttura.

**Metriche di successo:**

- Click-through rate dalla pagina al portale FSE.
- Riduzione delle chiamate URP per richieste di assistenza al download referti (misurabile tramite URP in un periodo 6-12 mesi).

---

## 7. Requisiti non funzionali

### 7.1 Accessibilità

- Conformità WCAG 2.1 livello AA su tutte le pagine del progetto.
- Dichiarazione di accessibilità aggiornata secondo modello AgID.
- Contrasto colore minimo 4.5:1 per testo normale, 3:1 per testo grande (rispettato dai token Bootstrap Italia).
- Navigazione completa da tastiera.
- Compatibilità screen reader (NVDA, VoiceOver) testata.
- Sottotitoli obbligatori su tutti i video tutorial.
- Testo alternativo su tutte le immagini informative.
- Form con etichette associate esplicitamente.

### 7.2 Performance

- Lighthouse Performance score ≥ 90 (mobile) sulle pagine principali.
- LCP (Largest Contentful Paint) < 2.5 s su connessione 4G.
- Ottimizzazione immagini (formati moderni WebP/AVIF, lazy loading).
- CLS (Cumulative Layout Shift) < 0.1.

### 7.3 SEO

- Titoli e meta description ottimizzati per ogni pagina.
- Struttura dati schema.org adeguata per tipologia di contenuto (MedicalBusiness, Event, NewsArticle).
- Sitemap XML aggiornata.
- URL parlanti e coerenti con la tassonomia AGID.

### 7.4 Sicurezza e privacy

- HTTPS obbligatorio.
- Cookie banner conforme (solo cookie tecnici preaccettati, consenso esplicito per gli altri).
- Informativa privacy dettagliata.
- Nessun dato personale raccolto nelle funzionalità F3 e F4 oltre a quanto minimo necessario.
- Log conversazioni chatbot anonimizzati.

### 7.5 Manutenibilità editoriale

- CMS (esistente o nuovo) con ruoli distinti: editor, revisore, pubblicatore.
- Possibilità di programmare la pubblicazione di notizie/eventi.
- Template coerenti per i tipi di contenuto del Modello ASL (Servizio, Struttura, Come fare per, Notizia, ecc.).

### 7.6 Mobile-first

- Design responsive basato sulle griglie Bootstrap Italia.
- Target minimi di interazione 44x44 px per elementi tappabili.
- Test obbligatorio su iOS Safari, Android Chrome.

---

## 8. Roadmap, criteri di accettazione e metriche

### 8.1 Fasi di progetto

| Fase | Deliverable | Durata indicativa |
|------|-------------|-------------------|
| 1. Kick-off e convalida PRD | Questo documento approvato | 1 settimana |
| 2. Content audit | Mappa contenuti attuali vs nuovi (a cura Dott.ssa Cannella + Teoli) | 2 settimane |
| 3. Wireframe low-fi (Figma) | 4 pagine + componenti F1-F5 | 2 settimane |
| 4. Mockup hi-fi (Figma) | 4 pagine con Bootstrap Italia + Modello ASL | 3 settimane |
| 5. Validazione con utenti | Test di usabilità con 5-8 cittadini target | 1 settimana |
| 6. Sviluppo frontend | Implementazione Bootstrap Italia | 6-8 settimane |
| 7. Integrazione F1-F5 | Link CUP, stato PS, feedback, chatbot, pagina referti | in parallelo alla fase 6 |
| 8. Test e QA | Accessibilità, performance, cross-browser | 2 settimane |
| 9. Go-live su staging + UAT | Sign-off Direzione ASL | 2 settimane |
| 10. Go-live produzione e monitoraggio | Sito online | — |

Le durate sono indicative e dovranno essere raffinate nella pianificazione con l'Ing. Russo (come da verbale 17/3).

### 8.2 Criteri di accettazione del progetto

- Tutte le 4 pagine aderiscono al Modello ASL AGID verificato con checklist ufficiale.
- Tutte le 5 funzionalità F1-F5 sono rilasciate e funzionanti in produzione.
- Lighthouse Performance ≥ 90 mobile sulle 4 pagine.
- WCAG 2.1 AA verificato con strumento automatico + audit manuale.
- Test di usabilità con 5-8 utenti completato e rispondente ai task principali (trova un servizio, prenota una visita, scarica un referto, usa il chatbot).
- Dichiarazione di accessibilità aggiornata.
- Sign-off del Dir. Amm. Chiacchio e della Dott.ssa Giannini.

### 8.3 Metriche post go-live (a 3 e 6 mesi)

- Bounce rate homepage in calo rispetto a baseline pre-restyling.
- Task completion rate in aumento (tramite analytics su funnel CUP, referti).
- Numero di feedback raccolti tramite F3, con media voti tracciata.
- Numero di interazioni chatbot F4, tasso di completamento.
- Riduzione chiamate URP per richieste ripetitive (metrica qualitativa URP).

---

## 9. Rischi e open question

### 9.1 Rischi

| ID | Rischio | Impatto | Mitigazione |
|----|---------|---------|-------------|
| R1 | API stato PS non disponibile o inaffidabile | Alto (F2 potrebbe non essere fattibile) | Fallback a link portale regionale. Verifica tecnica in fase 2. |
| R2 | Disallineamento tra contenuti del sito e dati Google/URP | Medio | Processo di revisione Teoli già in atto, da formalizzare in nota ufficiale come da verbale 17/3. |
| R3 | Contenuti editoriali non pronti entro fase 6 | Medio | Content audit precoce in fase 2, task force Cannella + Teoli. |
| R4 | Resistenza al cambiamento degli operatori interni | Medio | Formazione dedicata, progetto pilota su Modulistica come concordato. |
| R5 | Integrazione FSE Campania modifica requisiti nel tempo | Basso-Medio | Progettazione difensiva: front-door informativa minimizza l'impatto. |
| R6 | Utenti ripongono aspettative eccessive nel chatbot (si aspettano AI conversazionale) | Medio | Comunicazione trasparente nel messaggio iniziale, onboarding chiaro, bottone "parla con operatore" sempre accessibile. |

### 9.2 Open question

Sono questioni aperte che richiedono una decisione prima o durante la fase 2:

- **Q1.** Esiste un endpoint/sistema regionale o aziendale che espone in tempo reale lo stato di affollamento dei Pronto Soccorso? Se no, F2 si riduce a un link.
- **Q2.** Qual è la piattaforma di FSE Campania ufficialmente in uso (Sinfonia? altro) e qual è l'URL stabile di autenticazione?
- **Q3.** Chi, dal lato ASL, detiene la governance editoriale del chatbot (approva e revisiona l'albero di conversazione)?
- **Q4.** L'Albo pretorio attuale è un sotto-dominio o una sottosezione? (Impatta footer e navigazione.)
- **Q5.** Quali sono i KPI specifici richiesti dalla Direzione per validare il progetto a 6 mesi?
- **Q6.** Sulla proposta di progetto pilota per la digitalizzazione della Modulistica (verbale 3/2): deve essere parte di questo progetto o gestita come workstream separato?
- **Q7.** Quale calendario editoriale dei contenuti social verrà integrato sul sito, in quale sezione, e con quale pipeline di conversione dei reel in formati idonei alla pubblicazione web (verbale 17/3)?

---

## 10. Appendice

### 10.1 Documenti di riferimento

- Verbale riunione 3 febbraio 2026 — Restyling sito web ASL Napoli 3 Sud.
- Verbale riunione 17 marzo 2026 — Presentazione nuovo sito web.
- Design dei siti web delle ASL — Designers Italia / AGID (documento ufficiale).
- Linee guida di design per i siti internet e i servizi digitali della PA — AGID.
- File Figma Community "Modello ASL" — Designers Italia.
- Design system Bootstrap Italia — [italia.github.io/bootstrap-italia](https://italia.github.io/bootstrap-italia/).
- Figma proto esistenti CID: Homepage, pagina Ospedali/Eccellenze, pagina Breast Unit (Boscoreale).

### 10.2 Glossario

- **AGID** — Agenzia per l'Italia Digitale.
- **ASL** — Azienda Sanitaria Locale.
- **Bootstrap Italia** — design system ufficiale della PA italiana, estensione di Bootstrap 5.
- **CUP** — Centro Unico di Prenotazione.
- **FSE** — Fascicolo Sanitario Elettronico.
- **LCP** — Largest Contentful Paint (metrica Core Web Vitals).
- **LIS** — Lingua Italiana dei Segni.
- **Modello ASL** — modello di riferimento di Designers Italia per i siti web delle ASL.
- **PRD** — Product Requirements Document.
- **RAG** — Retrieval Augmented Generation.
- **SPID** — Sistema Pubblico di Identità Digitale.
- **SSR** — Servizio Sanitario Regionale.
- **UAT** — User Acceptance Test.
- **URP** — Ufficio Relazioni con il Pubblico.
- **WCAG** — Web Content Accessibility Guidelines.

---

*Fine documento.*
