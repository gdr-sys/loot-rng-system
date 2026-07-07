# D&D 5e Loot RNG System — Documento di Sviluppo / Development Document

## 📋 Panoramica / Overview

**IT:** Webapp per il sistema di loot RNG per D&D 5e (Edizione 2014 & 2024), basata su SRD 5.1 con supporto per oggetti custom.

**EN:** Web app for the D&D 5e loot RNG system (2014 & 2024 Edition), based on SRD 5.1 with support for custom items.

---

## 🛠 Stack Tecnologico / Tech Stack

| Tecnologia / Technology | Versione / Version | Scopo / Purpose |
|---|---|---|
| React | 19.x | UI Framework |
| TypeScript | 5.x | Type safety |
| Vite | 7.x | Build tool & dev server |
| Tailwind CSS | 4.x | Styling |
| Lucide React | latest | Icone / Icons |

---

## 📁 Struttura Progetto / Project Structure

```
src/
├── App.tsx                        # Componente principale / Main component
├── main.tsx                       # Entry point React
├── index.css                      # Stili globali / Global styles
├── components/
│   ├── LootRoller.tsx             # UI per tirare i dadi / Dice rolling UI
│   ├── RollHistory.tsx            # Storico dei tiri / Roll history
│   ├── TablesReference.tsx        # Consultazione tabelle / Table reference
│   ├── RulesReference.tsx         # Regole del sistema / System rules
│   ├── DiceAnimation.tsx          # Animazione dadi / Dice animation
│   └── RarityBadge.tsx            # Badge rarità con colori / Rarity badge
├── data/
│   └── lootTables.ts              # TUTTI i dati: probabilità, loot, incantesimi
│                                  # ALL data: probabilities, loot, spells
└── utils/
    ├── diceEngine.ts              # Motore di tiro / Dice engine
    └── cn.ts                      # Utility classi CSS / CSS class utility
```

---

## 🎮 Funzionalità / Features

### 1. Tiro dei Dadi / Dice Rolling
- **Nome giocatore** con campo di testo e pulsante X per cancellare
- **Selezione rango** (Minion / Elite / Boss) con icone e descrizioni
- **Ricerca categoria nemico** con barra di ricerca e dropdown filtrato
- **Pulsante X** per cancellare la ricerca rapidamente
- **Animazione dadi** durante il tiro
- **Risultato completo** con rarità, oggetto, e incantesimo (se applicabile)
- **Test della Fortuna** automatico per valori 75 e 90 su d100

### 2. Storico Tiri / Roll History
- **Condiviso tra tutti** — lo storico è unico per tutti gli utenti sulla stessa sessione
- **Persistenza** tramite localStorage
- **Esportazione** in formato testo (.txt)
- **Cancellazione** con pulsante dedicato
- Badge contatore nella navigazione

### 3. Tabelle di Riferimento / Reference Tables
- **Tabelle Loot** — Tutte le 21 categorie con ricerca
- **Tabelle Probabilità** — Tutte e 5 le tabelle (Standard, Bestie, Melme, Piante, Celestiali)
- **Tabelle Incantesimi** — Tutti i livelli da 1 a 9

### 4. Regole / Rules
- Spiegazione completa del sistema
- Test della Fortuna
- Stato degli oggetti (opzionale)
- Tabelle probabilità speciali

### 5. Internazionalizzazione / i18n
- **Italiano** (predefinito) e **Inglese**
- Toggle lingua nell'header
- Nomi oggetti con traduzione ufficiale EN
- Nomi incantesimi con traduzione ufficiale EN

---

## 📊 Dati / Data

### Tabelle Probabilità / Probability Tables
| Tabella / Table | Usata per / Used for |
|---|---|
| Standard | Umanoidi, Non Morti, Demoni, Diavoli, Draghi, Costrutti, Aberrazioni, Fate, Giganti, Elementali |
| Bestie / Beasts | Bestie (no Leggendario) |
| Melme / Oozes | Melme & Ooze (solo acido-resistenti, no Epico Minion/Elite, no Leggendario) |
| Piante / Plants | Piante (no Leggendario) |
| Celestiali / Celestials | Celestiali (probabilità Niente molto basse) |

### Categorie Nemici / Enemy Categories (21 totali)
1. Umanoidi — Guerriero / Humanoids — Warrior
2. Umanoidi — Incantatore / Humanoids — Spellcaster
3. Umanoidi — Ladro / Ranger / Humanoids — Rogue / Ranger
4. Bestie / Beasts
5. Non Morti — Fisico / Undead — Physical
6. Non Morti — Incorporeo / Undead — Incorporeal
7. Demoni / Demons
8. Diavoli / Devils
9. Draghi / Dragons
10. Costrutti / Constructs
11. Aberrazioni / Aberrations
12. Fate Benevole / Benevolent Fey
13. Fate Malvagie / Malevolent Fey
14. Giganti / Giants
15. Melme & Ooze / Oozes & Slimes
16. Piante / Plants
17. Elementali — Fuoco / Elementals — Fire
18. Elementali — Acqua / Elementals — Water
19. Elementali — Terra / Elementals — Earth
20. Elementali — Aria / Elementals — Air
21. Celestiali / Celestials

### Incantesimi / Spells
- Livelli 1-5: d8 (8 incantesimi ciascuno)
- Livelli 6-7: d6 (6 incantesimi ciascuno)
- Livelli 8-9: d4 (4 incantesimi ciascuno)

---

## 🔧 Motore di Tiro / Dice Engine

### Flusso / Flow
```
1. Utente seleziona: Rango + Categoria + Nome
2. Sistema tira d100
3. d100 → consulta tabella probabilità della categoria → determina rarità
4. Se d100 = 75 o 90: tira d4 extra (Test Fortuna)
   - d4 ≥ 3: upgrade rarità
5. Se rarità ≠ Niente: tira d8 sulla tabella loot
6. Se oggetto = pergamena/libro: tira per incantesimo
   - Non Comune → Lv.1 (d8)
   - Raro → Lv.2-3 (d2 + d8)
   - Epico → Lv.4-5 (d2 + d8)
   - Leggendario → Lv.6-9 (d4 + dado specifico)
7. Risultato salvato nello storico (localStorage)
```

---

## 🚀 Deploy Gratuito / Free Deployment

### Opzione 1: Netlify (Consigliata / Recommended)

1. **Crea account** su [netlify.com](https://netlify.com)
2. **Connetti il repository** (GitHub, GitLab, Bitbucket)
3. **Impostazioni build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy automatico** ad ogni push

**Oppure drag & drop:**
1. Esegui `npm run build` in locale
2. Trascina la cartella `dist/` su [app.netlify.com/drop](https://app.netlify.com/drop)
3. Sito online in 30 secondi!

**Limiti gratuiti:** 100 GB bandwidth/mese, 300 minuti build/mese.

### Opzione 2: Vercel

1. **Crea account** su [vercel.com](https://vercel.com)
2. **Importa progetto** da GitHub
3. **Framework Preset:** Vite
4. Deploy automatico

**Limiti gratuiti:** 100 GB bandwidth/mese, illimitati deploy.

### Opzione 3: GitHub Pages

1. Installa: `npm install -D gh-pages`
2. Aggiungi a `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && npx gh-pages -d dist"
   }
   ```
3. Aggiungi `base` in `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/nome-repo/',
     // ...
   })
   ```
4. Esegui: `npm run deploy`
5. Abilita GitHub Pages nelle Settings del repo → Source: `gh-pages` branch

**Limiti:** 1 GB storage, 100 GB bandwidth/mese.

### Opzione 4: Cloudflare Pages

1. **Crea account** su [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Connetti GitHub**
3. **Build settings:**
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy automatico

**Limiti gratuiti:** Bandwidth illimitato, 500 deploy/mese.

### Opzione 5: Surge.sh (Più Rapida / Fastest)

1. Installa surge: `npm install -g surge`
2. Build: `npm run build`
3. Deploy: `cd dist && surge`
4. Segui le istruzioni per scegliere il dominio

**Limiti gratuiti:** Illimitati progetti, dominio `.surge.sh`.

---

## 📝 Note Tecniche / Technical Notes

### Persistenza Dati / Data Persistence
- Lo storico usa **localStorage** del browser
- I dati sono **per-browser**, non sincronizzati tra dispositivi
- Per condividere lo storico tra utenti servirerebbe un backend (Firebase, Supabase, ecc.)
- La funzione "Esporta" permette di salvare lo storico in un file .txt

### Per uno storico condiviso tra tutti gli utenti / For shared history across all users
Se si vuole che TUTTI gli utenti vedano lo stesso storico, le opzioni sono:

1. **Firebase Realtime Database** (gratuito fino a 1 GB storage, 10 GB bandwidth/mese)
   - Installare: `npm install firebase`
   - Configurare: Creare un progetto Firebase
   - Usare `onValue()` per ascoltare i cambiamenti in tempo reale

2. **Supabase** (gratuito fino a 500 MB, 2 GB bandwidth)
   - Installare: `npm install @supabase/supabase-js`
   - Creare tabella `roll_history`
   - Real-time subscriptions incluse

3. **JSON file su GitHub** (per gruppi piccoli)
   - Usare GitHub API per leggere/scrivere un file JSON nel repo
   - Richiede token di accesso

### Personalizzazione / Customization
- Per aggiungere oggetti custom: modificare `src/data/lootTables.ts`
- Per aggiungere nuove categorie: aggiungere un oggetto all'array `enemyCategories`
- Per modificare le probabilità: modificare `probabilityTables`

---

## 🎨 Design System

### Colori Rarità / Rarity Colors
| Rarità / Rarity | Colore / Color | Tailwind Class |
|---|---|---|
| Comune / Common | Grigio / Gray | `text-gray-300`, `border-gray-500` |
| Non Comune / Uncommon | Verde / Green | `text-green-400`, `border-green-600` |
| Raro / Rare | Blu / Blue | `text-blue-400`, `border-blue-600` |
| Epico / Epic | Viola / Purple | `text-purple-400`, `border-purple-600` |
| Leggendario / Legendary | Oro / Gold | `text-amber-400`, `border-amber-500` |

### Colori Rango / Rank Colors
| Rango / Rank | Colore / Color |
|---|---|
| Minion | Grigio / Gray |
| Elite | Blu / Blue |
| Boss | Rosso / Red |

---

## 📜 Licenza / License

Basato su SRD 5.1 (Systems Reference Document) di Wizards of the Coast, rilasciato sotto Creative Commons Attribution 4.0 International License.

Based on the SRD 5.1 (Systems Reference Document) by Wizards of the Coast, released under the Creative Commons Attribution 4.0 International License.
