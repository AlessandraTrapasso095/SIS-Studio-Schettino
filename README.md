# Studio Schettino

Sito web istituzionale di **Studio Schettino**, realtà di ingegneria con sede a Rende (CS), specializzata in progettazione integrata, infrastrutture, BIM, verifiche, sicurezza, consulenza e formazione.

Il progetto nasce con l'obiettivo di rappresentare digitalmente lo Studio attraverso un'esperienza moderna, essenziale e orientata ai contenuti, valorizzandone competenze, servizi, persone e attività.

---

## Panoramica

Il sito presenta le principali aree dello Studio attraverso una struttura chiara e responsive:

- presentazione dello Studio;
- dati e numeri principali;
- servizi di ingegneria;
- team;
- BIM e progettazione integrata;
- verifica dei progetti;
- formazione e certificazioni;
- news e attività;
- recruiting;
- contatti.

L'interfaccia è progettata per mantenere una forte identità visiva, con particolare attenzione alla leggibilità, alla gerarchia delle informazioni e alla fruizione da desktop, tablet e dispositivi mobili.

---

## Tecnologie

Il progetto è sviluppato con:

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion**
- **Lucide React**

---

## Struttura del progetto

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   ├── layout/
│   └── ui/
│
├── lib/
│   └── content.ts
│
├── public/
│   ├── images/
│   │   ├── bim/
│   │   ├── hero/
│   │   ├── news/
│   │   ├── recruiting/
│   │   ├── services/
│   │   ├── studio/
│   │   ├── team/
│   │   ├── training/
│   │   └── verification/
│   │
│   └── logo/
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Sezioni principali

### Hero

Introduzione visuale dello Studio con immagine infrastrutturale, identità del brand e accesso immediato alle sezioni principali.

### Studio

Presentazione della realtà professionale, della sua evoluzione e del legame con il territorio calabrese.

### Numeri

Sintesi dei principali dati dello Studio:

- 17 anni di progettazione;
- 2.150 ore di formazione;
- 385 commesse portate a termine.

### Servizi

Le principali aree di attività comprendono:

- Impiantistica
- Progettazione civile
- Sicurezza e Consulenza
- Opere Strategiche
- Agroalimentare
- Antincendio
- Domotica
- Formazione

### Team

Presentazione dei professionisti che compongono Studio Schettino, con ruolo e fotografia individuale.

### BIM

Sezione dedicata ai processi BIM e alle attività di progettazione integrata, modellazione e gestione digitale del progetto.

Tra le attività presentate:

- redazione OGI / PGI;
- modellazione BIM 3D;
- Clash Detection;
- gestione CDE.

### Verifiche

Area dedicata alle attività di verifica dei progetti e ai relativi processi tecnici.

### Formazione e certificazioni

Presentazione delle attività formative dello Studio e delle principali certificazioni conseguite.

### News

Raccolta delle attività, visite tecniche, iniziative e aggiornamenti dello Studio.

### Recruiting

Area dedicata alle opportunità professionali e alle candidature.

### Contatti

Informazioni e riferimenti per entrare in contatto con Studio Schettino.

---

## Installazione

Clonare il repository:

```bash
git clone https://github.com/AlessandraTrapasso095/SIS-Studio-Schettino.git
```

Entrare nella directory del progetto:

```bash
cd SIS-Studio-Schettino
```

Installare le dipendenze:

```bash
npm install
```

Avviare l'ambiente di sviluppo:

```bash
npm run dev
```

Il progetto sarà disponibile in locale all'indirizzo indicato dal server Next.js.

---

## Comandi disponibili

### Ambiente di sviluppo

```bash
npm run dev
```

Avvia il server di sviluppo Next.js.

### Build di produzione

```bash
npm run build
```

Genera la build ottimizzata per la produzione.

### Avvio della build

```bash
npm run start
```

Avvia l'applicazione utilizzando la build di produzione.

### Lint

```bash
npm run lint
```

Esegue i controlli ESLint sul progetto.

### TypeScript

```bash
npm run typecheck
```

Esegue il controllo statico dei tipi senza generare file aggiuntivi.

---

## Responsive design

L'interfaccia è progettata per adattarsi alle principali dimensioni di visualizzazione:

- smartphone;
- tablet;
- notebook;
- desktop;
- monitor ad alta risoluzione.

Layout, tipografia, immagini, navigazione e spaziature vengono adattati in funzione dello spazio disponibile.

---

## Accessibilità

Il progetto include particolare attenzione a:

- struttura semantica delle pagine;
- navigazione tramite tastiera;
- stati di focus visibili;
- testi alternativi per le immagini;
- contrasto dei contenuti;
- supporto a `prefers-reduced-motion`;
- link e controlli chiaramente identificabili.

---

## Performance

Il progetto utilizza le funzionalità native di Next.js per ottimizzare il caricamento e la distribuzione delle risorse.

Tra gli accorgimenti adottati:

- `next/image` per la gestione delle immagini;
- caricamento prioritario delle risorse principali;
- lazy loading dei contenuti non immediatamente visibili;
- componentizzazione dell'interfaccia;
- ottimizzazione responsive delle immagini;
- animazioni leggere e mirate.

---

## Contatti Studio Schettino

**S.I.S. S.r.l.**

Via Finlandia n. 5  
87036 Rende (CS)  
Italia

**Telefono:** +39 0984 653529

**Email:** segreteria@studioschettino.it

**PEC:** ingegneriaschettinosrl@pec.it

**P. IVA:** 03849810787  
**REA:** CS 260790

---

## Sito ufficiale

Studio Schettino  
www.studioschettino.it

---

## Note

I contenuti, i riferimenti professionali, i nomi, i marchi e il materiale fotografico relativi a Studio Schettino appartengono ai rispettivi titolari.

Il repository contiene il codice sorgente e le risorse necessarie al funzionamento dell'interfaccia web.

---

© 2026 Studio Schettino


## Credits

Concept, UI/UX e sviluppo web realizzati da Alessandra Trapasso, Full Stack Web Deveoper.