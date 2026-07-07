# 🎲 D&D 5e Loot RNG System

<div align="center">

![D&D 5e](https://img.shields.io/badge/D%26D-5th%20Edition-red?style=for-the-badge&logo=dungeonsanddragons)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)

**Sistema di generazione loot casuale per Dungeons & Dragons 5e**  
*Random loot generation system for Dungeons & Dragons 5e*

Compatibile con le edizioni **2014** e **2024** • Basato su **SRD 5.1**

[🎮 **PROVA ORA / TRY NOW**](https://loot-rng-system.vercel.app/)

</div>

---

## ✨ Caratteristiche / Features

| 🇮🇹 Italiano | 🇬🇧 English |
|---|---|
| 🎲 Generazione loot con 2 tiri di dado | 🎲 Loot generation with 2 dice rolls |
| 📊 5 tabelle di probabilità diverse | 📊 5 different probability tables |
| 🐉 21 categorie di nemici | 🐉 21 enemy categories |
| 📜 Tabella incantesimi livello 1-9 | 📜 Spell table levels 1-9 |
| 🍀 Test della Fortuna per upgrade rarità | 🍀 Luck test for rarity upgrade |
| 📱 Design responsive mobile-first | 📱 Mobile-first responsive design |
| 🌐 Interfaccia bilingue IT/EN | 🌐 Bilingual interface IT/EN |
| 💾 Storico tiri con esportazione | 💾 Roll history with export |

---

## 🎮 Come Funziona / How It Works

### Procedura per incontro / Encounter Procedure

```
1️⃣ Seleziona il RANGO del nemico (Minion / Elite / Boss)
2️⃣ Seleziona la CATEGORIA del nemico (es. Umanoide Guerriero, Drago, ecc.)
3️⃣ Clicca "TIRA I DADI!"
4️⃣ Il sistema tira automaticamente d100 → determina rarità
5️⃣ Se c'è loot, tira d8 → determina l'oggetto specifico
```

### Ranghi / Ranks

| Rango | Regola | Rule |
|---|---|---|
| **Minion** | Tiro unico per l'intero gruppo | Single roll for entire group |
| **Elite** | Tiro singolo per ogni creatura | Single roll per creature |
| **Boss** | Tiro singolo per ogni creatura | Single roll per creature |

### Rarità / Rarity

| Rarità | Color | English |
|---|---|---|
| ⬜ Comune | Grigio | Common |
| 🟩 Non Comune | Verde | Uncommon |
| 🟦 Raro | Blu | Rare |
| 🟪 Epico | Viola | Epic |
| 🟨 Leggendario | Oro | Legendary |

---

## 📊 Categorie Nemici / Enemy Categories

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

## 🍀 Test della Fortuna / Luck Test

Quando il d100 mostra **75** o **90**, viene tirato un **d4 extra**:
- Risultato **3-4** → La rarità viene **aumentata** di un livello!
- Risultato **1-2** → Nessun cambiamento

*When the d100 shows **75** or **90**, an extra **d4** is rolled:*
- *Result **3-4** → Rarity is **upgraded** by one level!*
- *Result **1-2** → No change*

---

## 🛠 Installazione Locale / Local Installation

```bash
# Clona il repository / Clone the repository
git clone https://github.com/YOUR_USERNAME/dnd-loot-rng.git
cd dnd-loot-rng

# Installa le dipendenze / Install dependencies
npm install

# Avvia il server di sviluppo / Start dev server
npm run dev

# Build per produzione / Production build
npm run build
```
---

## 📁 Struttura Progetto / Project Structure

```
src/
├── App.tsx                    # Main component
├── components/
│   ├── LootRoller.tsx         # Dice rolling UI
│   ├── RollHistory.tsx        # Roll history
│   ├── TablesReference.tsx    # Loot/probability/spell tables
│   ├── RulesReference.tsx     # System rules
│   ├── DiceAnimation.tsx      # Dice animation
│   └── RarityBadge.tsx        # Rarity badge component
├── data/
│   └── lootTables.ts          # All data: probabilities, loot, spells
└── utils/
    └── diceEngine.ts          # Dice rolling engine
```

---

## 📜 Licenza / License

Questo progetto è basato su **SRD 5.1** (Systems Reference Document) di Wizards of the Coast, rilasciato sotto [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

*This project is based on the **SRD 5.1** (Systems Reference Document) by Wizards of the Coast, released under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).*

---

## 🙏 Credits

- **Wizards of the Coast** — D&D 5e SRD 5.1
- **Lucide** — Icone / Icons
- **Tailwind CSS** — Styling

---

<div align="center">

[🎮 Prova Ora / Try Now](https://loot-rng-system.vercel.app/)

</div>
