# 🎲 D&D 5e Loot RNG System

<div align="center">

![D&D 5e](https://img.shields.io/badge/D%26D-5th%20Edition-red?style=for-the-badge&logo=dungeonsanddragons)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)

**Sistema di generazione loot casuale per Dungeons & Dragons 5e**  
*Random loot generation system for Dungeons & Dragons 5e*

Compatibile con le edizioni **2014** e **2024** • Basato su **SRD 5.1** • **Tabelle Personalizzabili**

[🎮 **PROVA ORA / TRY NOW**](https://loot-rng-system.vercel.app/)

</div>

---

## ✨ Caratteristiche / Features

| 🇮🇹 Italiano | 🇬🇧 English |
|---|---|
| 🎲 Moltiplicatore tiri (×1 a ×99) | 🎲 Roll multiplier (×1 to ×99) |
| 📊 Tabelle completamente modificabili | 📊 Fully editable tables |
| 🔄 Import/Export JSON | 🔄 JSON Import/Export |
| 🐉 21 categorie di nemici | 🐉 21 enemy categories |
| 👥 Multi-selezione per gruppi Minion | 👥 Multi-select for Minion groups |
| ☠️ Stato oggetti (incluso Maledetto) | ☠️ Item condition (including Cursed) |
| 📜 Tabella incantesimi livello 1-9 | 📜 Spell table levels 1-9 |
| 🍀 Test della Fortuna per upgrade | 🍀 Luck test for upgrades |
| 📱 Layout responsive con storico | 📱 Responsive layout with history |
| 🌐 Interfaccia bilingue IT/EN | 🌐 Bilingual interface IT/EN |

---

## 🎮 Come Funziona / How It Works

### Procedura Rapida / Quick Procedure

```
1️⃣ Seleziona RANGO (Minion / Elite / Boss)
2️⃣ Seleziona CATEGORIA/E nemico (multi-selezione per Minion)
3️⃣ Imposta MOLTIPLICATORE (×1 a ×99)
4️⃣ Opzionale: scegli STATO oggetto (Intatto/Danneggiato/Inutilizzabile/Maledetto)
5️⃣ Clicca "TIRA I DADI!"
6️⃣ Vedi i risultati con lo storico a fianco!
```

### Nuovo: Moltiplicatore / New: Multiplier

Tira **più dadi contemporaneamente**! Perfetto per:
- Gruppi di nemici (5 goblin = ×5 tiri)
- Bottini multipli di una tana
- Sessioni veloci

### Nuovo: Stato Oggetti / New: Item Condition

| Stato | Descrizione |
|---|---|
| ✓ **Intatto** | Oggetto in perfette condizioni |
| ⚠ **Danneggiato** | Richiede riparazione |
| ✗ **Inutilizzabile** | Non recuperabile |
| ☠ **Maledetto** | Oggetto maledetto (effetto DM) |

L'oggetto mostrerà: `Spada +1 (MALEDETTO)`

---

## 📊 Tabelle Personalizzabili / Customizable Tables

### Modifica Tabelle / Edit Tables

1. Vai su **📊 Tabelle**
2. Clicca **✏️ Modifica**
3. Modifica nomi, aggiungi/rimuovi oggetti
4. Clicca **💾 Fine Modifica**

### Import/Export JSON

Condividi le tue tabelle personalizzate:
- **Esporta** → salva file `.json`
- **Importa** → carica file `.json` di altri
- **Reset** → ripristina valori SRD predefiniti

---

## 🐉 Categorie Nemici / Enemy Categories

<details>
<summary><b>Visualizza tutte le 21 categorie / View all 21 categories</b></summary>

| # | 🇮🇹 Italiano | 🇬🇧 English | Tabella |
|---|---|---|---|
| 1 | Umanoidi — Guerriero | Humanoids — Warrior | Standard |
| 2 | Umanoidi — Incantatore | Humanoids — Spellcaster | Standard |
| 3 | Umanoidi — Ladro/Ranger | Humanoids — Rogue/Ranger | Standard |
| 4 | Bestie | Beasts | Bestie |
| 5 | Non Morti — Fisico | Undead — Physical | Standard |
| 6 | Non Morti — Incorporeo | Undead — Incorporeal | Standard |
| 7 | Demoni | Demons | Standard |
| 8 | Diavoli | Devils | Standard |
| 9 | Draghi | Dragons | Standard |
| 10 | Costrutti | Constructs | Standard |
| 11 | Aberrazioni | Aberrations | Standard |
| 12 | Fate Benevole | Benevolent Fey | Standard |
| 13 | Fate Malvagie | Malevolent Fey | Standard |
| 14 | Giganti | Giants | Standard |
| 15 | Melme & Ooze | Oozes & Slimes | Melme |
| 16 | Piante | Plants | Piante |
| 17 | Elementali — Fuoco | Elementals — Fire | Standard |
| 18 | Elementali — Acqua | Elementals — Water | Standard |
| 19 | Elementali — Terra | Elementals — Earth | Standard |
| 20 | Elementali — Aria | Elementals — Air | Standard |
| 21 | Celestiali | Celestials | Celestiali |

</details>

---

## 🛠 Installazione Locale / Local Installation

```bash
# Clona il repository
git clone https://github.com/YOUR_USERNAME/dnd-loot-rng.git
cd dnd-loot-rng

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build
```

---

## 🚀 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/dnd-loot-rng)

### Alternative gratuite:
- **[Netlify](https://netlify.com)** — Drag & drop della cartella `dist/`
- **[GitHub Pages](https://pages.github.com)** — Free hosting
- **[Cloudflare Pages](https://pages.cloudflare.com)** — Bandwidth illimitato
- **[Surge.sh](https://surge.sh)** — Deploy in 30 secondi

---

## 📁 Struttura Progetto / Project Structure

```
src/
├── App.tsx                    # Main component + layout
├── components/
│   ├── LootRoller.tsx         # Dice rolling + multiplier + condition
│   ├── RollHistory.tsx        # Roll history (compact mode)
│   ├── TablesReference.tsx    # Editable tables + JSON import/export
│   ├── RulesReference.tsx     # System rules
│   ├── DiceAnimation.tsx      # Dice animation
│   └── RarityBadge.tsx        # Rarity badge
├── context/
│   └── DataContext.tsx        # Editable data context + persistence
├── data/
│   └── lootTables.ts          # Default SRD data
└── utils/
    └── diceEngine.ts          # Multi-roll dice engine
```

---

## 📖 Documentazione / Documentation

Consulta [DEVELOPMENT.md](./DEVELOPMENT.md) per:
- Architettura dettagliata
- Flusso del motore multi-roll
- Guide di personalizzazione
- Istruzioni deploy complete

---

## 📜 Licenza / License

Basato su **SRD 5.1** di Wizards of the Coast, rilasciato sotto [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

<div align="center">

**Made with ❤️ for D&D players everywhere**

[🎮 Prova Ora](https://loot-rng-system.vercel.app/) • [📖 Docs](./DEVELOPMENT.md) • [🐛 Segnala Bug](../../issues)

</div>
