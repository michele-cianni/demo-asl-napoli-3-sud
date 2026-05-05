# Design: Integrazione immagini reali nelle pagine

## Contesto

Il progetto usa placeholder colorati con testo descrittivo al posto di immagini reali. Sono ora disponibili 9 immagini in `public/images/` che corrispondono esattamente ai contenuti esistenti. L'obiettivo è sostituire i placeholder con le foto reali nel modo più coerente con i pattern visivi già presenti.

---

## Mapping immagini → pagine

| Immagine | File | Componente / sezione |
|---|---|---|
| `placeholder_1200x900 vers1.png` | `src/component/Hero.jsx` | `HeroVisual` — immagine hero desktop |
| `terapia_dolore_castellammare.png` | `src/component/News.jsx` | Card news "Nuovo ambulatorio terapia del dolore" |
| `concorso_pubblico.png` | `src/component/News.jsx` | Card news "Concorso infermieri 24 posti" |
| `giornata_voce.png` | `src/component/News.jsx` | Card news "Giornata mondiale della voce" |
| `servizi_vaccino.png` | `src/page/Servizi.jsx` | ServicesHighlights card vaccino |
| `servizi_screening_mammografico.png` | `src/page/Servizi.jsx` | ServicesHighlights card screening |
| `servizi_terapia_dolore.png` | `src/page/Servizi.jsx` | ServicesHighlights card terapia dolore |
| `screen_come_fare_per.png` | `src/page/ComeFarePer.jsx` | VideoPlayer — immagine di sfondo |

> `placeholder_1200x900 vers2.png` non viene utilizzata in questa iterazione (riserva per futura galleria o seconda hero).

---

## Design per file

### 1. `src/component/Hero.jsx` — HeroVisual

Sostituire il `<div className="placeholder-img">` con un tag `<img>` dentro il wrapper `.visual` esistente. L'immagine prende le stesse dimensioni del placeholder (controlled via CSS module `styles.placeholder`).

```jsx
<img
  src="/images/placeholder_1200x900%20vers1.png"
  alt="Medico con paziente"
  className={cx(styles.placeholder, styles['placeholder--desktop'])}
  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
/>
```

> I nomi file con spazio si referenziano con `%20` nell'attributo `src`.

### 2. `src/component/News.jsx` — news card images

Aggiungere il campo `img` a ciascun item nell'array `items`:

```js
{ ..., img: '/images/terapia_dolore_castellammare.png' }
{ ..., img: '/images/concorso_pubblico.png' }
{ ..., img: '/images/giornata_voce.png' }
```

Sostituire il `<div className="placeholder-img" ...>` con un `<img>`:

```jsx
<img
  src={item.img}
  alt={item.imgLabel}
  style={{ width: '100%', aspectRatio: '5/3', objectFit: 'cover', display: 'block' }}
/>
```

### 3. `src/page/Servizi.jsx` — ServicesHighlights

Aggiungere il campo `img` a ciascun item:

```js
{ ..., img: '/images/servizi_vaccino.png' }
{ ..., img: '/images/servizi_screening_mammografico.png' }
{ ..., img: '/images/servizi_terapia_dolore.png' }
```

Sostituire il `<div>` con gradiente+icona (righe 82-94) con un `<img>`:

```jsx
<img
  src={item.img}
  alt={item.title}
  style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
/>
```

L'icona viene rimossa dalla card header (è già presente il badge nel body).

### 4. `src/page/ComeFarePer.jsx` — VideoPlayer

Il VideoPlayer ha già un `div` con `position: relative` e `paddingBottom: 56.25%`. Aggiungere un `<img>` assoluto come sfondo dietro l'overlay del tasto play:

```jsx
<img
  src="/images/screen_come_fare_per.png"
  alt="Come fare per prenotare una visita"
  style={{
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: playing ? 0.3 : 0.6,
    transition: 'opacity 0.3s',
  }}
/>
```

L'overlay esistente (gradient background) viene mantenuto sopra l'immagine per garantire leggibilità del pulsante play.

---

## Verifica

1. `npm run dev` e aprire:
   - `localhost:5173` → hero con foto, news con 3 foto reali
   - `localhost:5173/page-servizi.html` → 3 card con foto servizi
   - `localhost:5173/page-come-fare-per.html` → VideoPlayer con screenshot come sfondo
2. Controllare responsive: hero si nasconde su mobile (comportamento già esistente), news card scalano correttamente
3. Verificare dark mode (le immagini non sono influenzate, l'overlay nel VideoPlayer è già semitrasparente)
