# ASL Napoli 3 Sud - Mockup Frontend

Mockup ad alta fedelta del sito ASL Napoli 3 Sud, sviluppato con React 19 e Vite 8.
Il progetto include piu pagine tematiche, componenti condivisi, dati geografici (GeoJSON) e una base UI coerente con token di design ispirati a Bootstrap Italia / Designers Italia.

## Stack

- React 19
- Vite 8
- JavaScript/JSX + TypeScript (moduli mappa distretti)
- CSS Modules + token globali in [styles.css](styles.css)
- ESLint

## Requisiti

- Node.js 20+ (consigliato)
- npm 10+ (consigliato)

## Avvio rapido

```bash
npm install
npm run dev
```

Il server di sviluppo parte di default su `http://localhost:5173`.

## Script disponibili

```bash
npm run dev       # Avvia il dev server
npm run build     # Build produzione in dist/
npm run preview   # Preview della build
npm run lint      # Controllo lint
```

## Struttura principale

- [index.html](index.html): homepage
- [page-servizi.html](page-servizi.html): pagina servizi
- [page-referti.html](page-referti.html): pagina referti
- [page-come-fare-per.html](page-come-fare-per.html): pagina "Come fare per"
- [page-ospedali.html](page-ospedali.html): pagina ospedali
- [page-maresca.html](page-maresca.html): pagina Ospedale Maresca
- [page-distretti.html](page-distretti.html): pagina distretti con mappa
- [page-redazione-web.html](page-redazione-web.html): pagina redazione web
- [index-print.html](index-print.html): versione print

Codice sorgente:

- [src/main*.jsx](src): entrypoint pagina-specifici
- [src/page](src/page): componenti pagina
- [src/component](src/component): componenti condivisi UI/layout
- [src/district-map](src/district-map): modulo mappa distretti (TS/TSX)
- [src/data](src/data): dataset applicativi
- [public/data](public/data): GeoJSON territoriali
- [public/images](public/images): asset immagini

Documentazione interna:

- [CLAUDE.md](CLAUDE.md): convenzioni operative del progetto
- [docs/design-asl-docs.md](docs/design-asl-docs.md): note di design
- [docs/specs](docs/specs): specifiche funzionali

## Convenzioni di progetto

- Contenuti testuali in italiano
- Approccio multi-entry (una pagina HTML + un entrypoint React per sezione)
- Design tokens definiti in [styles.css](styles.css)
- Componenti riusabili centralizzati in [src/component](src/component)

## Build e deploy

Build produzione:

```bash
npm run build
```

Output generato in [dist](dist) (creata durante la build), pronto per hosting statico.

## Qualita del codice

Esegui lint prima di aprire PR:

```bash
npm run lint
```

## Note

- I link non ancora integrati possono usare `href="#"` come placeholder.
- I file GeoJSON in [public/data](public/data) alimentano le visualizzazioni territoriali.
