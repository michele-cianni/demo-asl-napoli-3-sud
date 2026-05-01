# TASKS — Refactor e Qualita Tecnica

Questo file traccia i task da fare per consolidare il progetto sul nuovo stack Vite + ESM e migliorare manutenzione, qualita e scalabilita.

---

## Backlog prioritizzato

- [x] Allineare la documentazione tecnica al nuovo stack
      - Priorita: alta
      - Costo: basso
      - Azioni:
            - Aggiornare `CLAUDE.md` per riflettere Vite + ESM (rimuovere riferimenti obsoleti a CDN + Babel runtime).
            - Verificare che le istruzioni di avvio/build/test siano coerenti con gli script npm reali.
            - Aggiornare eventuali note architetturali nei file docs collegati.
      - Beneficio: evita regressioni e onboarding sbagliato.

- [ ] Standardizzare stile e formattazione del codice
      - Priorita: alta
      - Costo: basso
      - Azioni:
            - Introdurre Prettier con configurazione condivisa.
            - Introdurre ESLint con regole base per React/JSX.
            - Aggiungere script npm: `lint`, `format`, `check`.
            - Uniformare quote/stile tra file (es. `src/main.jsx` e altri entry file).
      - Beneficio: diff piu piccoli, review piu veloci, meno rumore.

- [ ] Separare contenuto da presentazione
      - Priorita: media-alta
      - Costo: medio
      - Azioni:
            - Estrarre dataset hardcoded in moduli dedicati, ad esempio in `src/data/`.
            - Mantenere i componenti piu semplici e guidati da props.
            - Ridurre duplicazioni di stringhe/array in pagine e sezioni ripetitive.
      - Beneficio: manutenzione contenuti semplice, meno duplicazioni, componenti testabili.

- [ ] Ridurre duplicazioni delle entry page
      - Priorita: media
      - Costo: basso-medio
      - Azioni:
            - Identificare pattern comune nei file `main-*` (render pagina + chatbot + mount).
            - Creare helper/factory condivisa per il bootstrap delle pagine.
            - Adottare il nuovo helper in tutte le entry compatibili.
      - Beneficio: meno codice ripetuto, meno rischio incoerenze tra pagine.

- [ ] Introdurre una struttura per feature
      - Priorita: media
      - Costo: medio
      - Azioni:
            - Definire target structure a domini (es. `home`, `ospedali`, `referti`, `shared/ui`, `shared/layout`).
            - Spostare gradualmente file e aggiornare import senza big-bang rewrite.
            - Documentare regole di collocazione file per i nuovi componenti.
      - Beneficio: scalabilita e navigazione piu chiara.

- [ ] Pulizia degli inline style piu ripetuti
      - Priorita: media
      - Costo: basso-medio
      - Azioni:
            - Individuare pattern stilistici duplicati in componenti multipli.
            - Estrarre style object comuni o piccoli wrapper riutilizzabili.
            - Mantenere invariata la direzione visuale/design system attuale.
      - Beneficio: meno boilerplate, piu coerenza visiva.

- [ ] Aggiungere test minimi di sicurezza architetturale
      - Priorita: alta
      - Costo: medio
      - Azioni:
            - Introdurre smoke test di rendering per le entry principali.
            - Verificare che ogni pagina monti senza crash.
            - Verificare presenza elementi core per pagina.
      - Beneficio: protezione contro regressioni durante refactor.

- [ ] Preparare un check qualita in CI
      - Priorita: alta
      - Costo: basso
      - Azioni:
            - Configurare pipeline minima: install, lint, build.
            - Bloccare merge in presenza di errori nei quality gate.
            - Documentare i controlli automatici nel flusso di contributo.
      - Beneficio: quality gate automatico prima del merge.

---

## Ordine consigliato di esecuzione

1. Documentazione stack (allineamento immediato).
2. Tooling qualita locale (Prettier + ESLint + script npm).
3. CI minima (lint/build automatici).
4. Smoke test entry principali.
5. Refactor contenuto/presentazione (`src/data/`).
6. Helper comune per entry page.
7. Migrazione progressiva a struttura per feature.
8. Pulizia style inline ripetuti.
