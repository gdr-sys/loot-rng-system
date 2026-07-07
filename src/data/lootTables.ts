// ============================================================
// D&D 5e Loot RNG System — Complete Loot Tables Data
// Based on SRD 5.1 — Custom items can be added
// ============================================================

export type Rarity = 'Comune' | 'Non Comune' | 'Raro' | 'Epico' | 'Leggendario';
export type Rank = 'Minion' | 'Elite' | 'Boss';
export type ProbabilityTable = 'Standard' | 'Bestie' | 'Melme' | 'Piante' | 'Celestiali';

export interface ProbabilityRow {
  result: string;
  resultEN: string;
  rarity: Rarity | 'Niente';
  minionPct: number;
  elitePct: number;
  bossPct: number;
  minionRange: string;
  eliteRange: string;
  bossRange: string;
}

export interface LootItem {
  roll: number;
  name: string;
  nameEN: string;
}

export interface RarityTable {
  rarity: Rarity;
  items: LootItem[];
}

export interface EnemyCategory {
  id: string;
  name: string;
  nameEN: string;
  description: string;
  descriptionEN: string;
  probabilityTable: ProbabilityTable;
  rarities: RarityTable[];
}

// ============================================================
// PROBABILITY TABLES
// ============================================================

export const probabilityTables: Record<ProbabilityTable, ProbabilityRow[]> = {
  Standard: [
    { result: 'Niente', resultEN: 'Nothing', rarity: 'Niente', minionPct: 40, elitePct: 20, bossPct: 0, minionRange: '01-40', eliteRange: '01-20', bossRange: '—' },
    { result: 'Comune', resultEN: 'Common', rarity: 'Comune', minionPct: 35, elitePct: 30, bossPct: 20, minionRange: '41-75', eliteRange: '21-50', bossRange: '01-20' },
    { result: 'Non Comune', resultEN: 'Uncommon', rarity: 'Non Comune', minionPct: 15, elitePct: 30, bossPct: 35, minionRange: '75-90', eliteRange: '51-80', bossRange: '21-55' },
    { result: 'Raro', resultEN: 'Rare', rarity: 'Raro', minionPct: 8, elitePct: 15, bossPct: 30, minionRange: '90-98', eliteRange: '81-95', bossRange: '56-85' },
    { result: 'Epico', resultEN: 'Epic', rarity: 'Epico', minionPct: 2, elitePct: 4, bossPct: 12, minionRange: '99-100', eliteRange: '96-99', bossRange: '86-97' },
    { result: 'Leggendario', resultEN: 'Legendary', rarity: 'Leggendario', minionPct: 0, elitePct: 1, bossPct: 3, minionRange: '—', eliteRange: '100', bossRange: '98-00' },
  ],
  Bestie: [
    { result: 'Niente', resultEN: 'Nothing', rarity: 'Niente', minionPct: 70, elitePct: 50, bossPct: 30, minionRange: '01-59', eliteRange: '01-50', bossRange: '01-30' },
    { result: 'Comune', resultEN: 'Common', rarity: 'Comune', minionPct: 20, elitePct: 30, bossPct: 30, minionRange: '60-90', eliteRange: '51-80', bossRange: '31-60' },
    { result: 'Non Comune', resultEN: 'Uncommon', rarity: 'Non Comune', minionPct: 8, elitePct: 15, bossPct: 25, minionRange: '91-98', eliteRange: '81-95', bossRange: '61-85' },
    { result: 'Raro', resultEN: 'Rare', rarity: 'Raro', minionPct: 2, elitePct: 4, bossPct: 12, minionRange: '99-00', eliteRange: '96-99', bossRange: '86-97' },
    { result: 'Epico', resultEN: 'Epic', rarity: 'Epico', minionPct: 0, elitePct: 1, bossPct: 3, minionRange: '—', eliteRange: '100', bossRange: '98-00' },
    { result: 'Leggendario', resultEN: 'Legendary', rarity: 'Leggendario', minionPct: 0, elitePct: 0, bossPct: 0, minionRange: '—', eliteRange: '—', bossRange: '—' },
  ],
  Melme: [
    { result: 'Niente', resultEN: 'Nothing', rarity: 'Niente', minionPct: 80, elitePct: 60, bossPct: 40, minionRange: '01-80', eliteRange: '01-60', bossRange: '01-40' },
    { result: 'Comune', resultEN: 'Common', rarity: 'Comune', minionPct: 15, elitePct: 25, bossPct: 30, minionRange: '81-95', eliteRange: '61-85', bossRange: '41-70' },
    { result: 'Non Comune', resultEN: 'Uncommon', rarity: 'Non Comune', minionPct: 4, elitePct: 12, bossPct: 20, minionRange: '96-99', eliteRange: '86-97', bossRange: '71-90' },
    { result: 'Raro', resultEN: 'Rare', rarity: 'Raro', minionPct: 1, elitePct: 3, bossPct: 8, minionRange: '100', eliteRange: '98-00', bossRange: '91-98' },
    { result: 'Epico', resultEN: 'Epic', rarity: 'Epico', minionPct: 0, elitePct: 0, bossPct: 2, minionRange: '—', eliteRange: '—', bossRange: '99-00' },
    { result: 'Leggendario', resultEN: 'Legendary', rarity: 'Leggendario', minionPct: 0, elitePct: 0, bossPct: 0, minionRange: '—', eliteRange: '—', bossRange: '—' },
  ],
  Piante: [
    { result: 'Niente', resultEN: 'Nothing', rarity: 'Niente', minionPct: 75, elitePct: 55, bossPct: 35, minionRange: '01-75', eliteRange: '01-55', bossRange: '01-35' },
    { result: 'Comune', resultEN: 'Common', rarity: 'Comune', minionPct: 18, elitePct: 28, bossPct: 30, minionRange: '76-93', eliteRange: '56-83', bossRange: '36-65' },
    { result: 'Non Comune', resultEN: 'Uncommon', rarity: 'Non Comune', minionPct: 6, elitePct: 14, bossPct: 22, minionRange: '94-99', eliteRange: '84-97', bossRange: '66-87' },
    { result: 'Raro', resultEN: 'Rare', rarity: 'Raro', minionPct: 1, elitePct: 3, bossPct: 10, minionRange: '100', eliteRange: '98-00', bossRange: '88-97' },
    { result: 'Epico', resultEN: 'Epic', rarity: 'Epico', minionPct: 0, elitePct: 0, bossPct: 3, minionRange: '—', eliteRange: '—', bossRange: '98-00' },
    { result: 'Leggendario', resultEN: 'Legendary', rarity: 'Leggendario', minionPct: 0, elitePct: 0, bossPct: 0, minionRange: '—', eliteRange: '—', bossRange: '—' },
  ],
  Celestiali: [
    { result: 'Niente', resultEN: 'Nothing', rarity: 'Niente', minionPct: 20, elitePct: 10, bossPct: 0, minionRange: '01-20', eliteRange: '01-10', bossRange: '—' },
    { result: 'Comune', resultEN: 'Common', rarity: 'Comune', minionPct: 35, elitePct: 25, bossPct: 15, minionRange: '21-55', eliteRange: '11-35', bossRange: '01-15' },
    { result: 'Non Comune', resultEN: 'Uncommon', rarity: 'Non Comune', minionPct: 30, elitePct: 35, bossPct: 30, minionRange: '56-85', eliteRange: '36-70', bossRange: '16-45' },
    { result: 'Raro', resultEN: 'Rare', rarity: 'Raro', minionPct: 12, elitePct: 22, bossPct: 35, minionRange: '86-97', eliteRange: '71-92', bossRange: '46-80' },
    { result: 'Epico', resultEN: 'Epic', rarity: 'Epico', minionPct: 3, elitePct: 7, bossPct: 15, minionRange: '98-00', eliteRange: '93-99', bossRange: '81-95' },
    { result: 'Leggendario', resultEN: 'Legendary', rarity: 'Leggendario', minionPct: 0, elitePct: 1, bossPct: 5, minionRange: '—', eliteRange: '100', bossRange: '96-00' },
  ],
};

// ============================================================
// SPELL TABLES
// ============================================================

export interface SpellEntry {
  roll: number;
  name: string;
  nameEN: string;
}

export interface SpellLevel {
  level: number;
  die: string;
  spells: SpellEntry[];
}

export const spellTable: SpellLevel[] = [
  {
    level: 1, die: 'd8',
    spells: [
      { roll: 1, name: 'Dardo Incantato', nameEN: 'Magic Missile' },
      { roll: 2, name: 'Mani Brucianti', nameEN: 'Burning Hands' },
      { roll: 3, name: 'Charme su Persone', nameEN: 'Charm Person' },
      { roll: 4, name: 'Dardo di Acido', nameEN: 'Acid Splash' },
      { roll: 5, name: 'Scudo', nameEN: 'Shield' },
      { roll: 6, name: 'Sonno', nameEN: 'Sleep' },
      { roll: 7, name: 'Dardo di Gelo', nameEN: 'Ray of Frost' },
      { roll: 8, name: 'Dardo di Fuoco', nameEN: 'Fire Bolt' },
    ],
  },
  {
    level: 2, die: 'd8',
    spells: [
      { roll: 1, name: 'Freccia Acida di Melf', nameEN: "Melf's Acid Arrow" },
      { roll: 2, name: 'Invisibilità', nameEN: 'Invisibility' },
      { roll: 3, name: 'Oscurità', nameEN: 'Darkness' },
      { roll: 4, name: 'Ragnatela', nameEN: 'Web' },
      { roll: 5, name: 'Forza Fantasma', nameEN: 'Phantasmal Force' },
      { roll: 6, name: 'Suggestionare', nameEN: 'Suggestion' },
      { roll: 7, name: 'Nebbia Assassina', nameEN: 'Cloudkill' },
      { roll: 8, name: 'Immagine Speculare', nameEN: 'Mirror Image' },
    ],
  },
  {
    level: 3, die: 'd8',
    spells: [
      { roll: 1, name: 'Palla di Fuoco', nameEN: 'Fireball' },
      { roll: 2, name: 'Fulmine', nameEN: 'Lightning Bolt' },
      { roll: 3, name: 'Volare', nameEN: 'Fly' },
      { roll: 4, name: 'Contrincantesimo', nameEN: 'Counterspell' },
      { roll: 5, name: 'Dissolvere Magie', nameEN: 'Dispel Magic' },
      { roll: 6, name: 'Ipnosi', nameEN: 'Hypnotic Pattern' },
      { roll: 7, name: 'Frecce di Fulmine', nameEN: 'Lightning Arrow' },
      { roll: 8, name: 'Timore', nameEN: 'Fear' },
    ],
  },
  {
    level: 4, die: 'd8',
    spells: [
      { roll: 1, name: 'Muro di Fuoco', nameEN: 'Wall of Fire' },
      { roll: 2, name: 'Polimorfismo', nameEN: 'Polymorph' },
      { roll: 3, name: 'Sfera Infuocata di Otiluke', nameEN: "Otiluke's Resilient Sphere" },
      { roll: 4, name: 'Occhio Arcano', nameEN: 'Arcane Eye' },
      { roll: 5, name: 'Grande Invisibilità', nameEN: 'Greater Invisibility' },
      { roll: 6, name: 'Confusione', nameEN: 'Confusion' },
      { roll: 7, name: 'Porta Dimensionale', nameEN: 'Dimension Door' },
      { roll: 8, name: 'Individuazione della Sfera', nameEN: 'Locate Creature' },
    ],
  },
  {
    level: 5, die: 'd8',
    spells: [
      { roll: 1, name: 'Cono di Freddo', nameEN: 'Cone of Cold' },
      { roll: 2, name: 'Animare Morti', nameEN: 'Animate Dead' },
      { roll: 3, name: 'Nube Mortale', nameEN: 'Cloudkill' },
      { roll: 4, name: 'Dominare Persone', nameEN: 'Dominate Person' },
      { roll: 5, name: 'Muro di Forza', nameEN: 'Wall of Force' },
      { roll: 6, name: 'Telecinesi', nameEN: 'Telekinesis' },
      { roll: 7, name: 'Modificare Memoria', nameEN: 'Modify Memory' },
      { roll: 8, name: 'Legame Planare', nameEN: 'Planar Binding' },
    ],
  },
  {
    level: 6, die: 'd6',
    spells: [
      { roll: 1, name: 'Disintegrazione', nameEN: 'Disintegrate' },
      { roll: 2, name: 'Catena di Fulmini', nameEN: 'Chain Lightning' },
      { roll: 3, name: 'Visione Vera', nameEN: 'True Seeing' },
      { roll: 4, name: 'Sfera di Annientamento', nameEN: 'Globe of Invulnerability' },
      { roll: 5, name: 'Suggestione di Massa', nameEN: 'Mass Suggestion' },
      { roll: 6, name: 'Individuazione del Pensiero', nameEN: 'Detect Thoughts' },
    ],
  },
  {
    level: 7, die: 'd6',
    spells: [
      { roll: 1, name: 'Dito della Morte', nameEN: 'Finger of Death' },
      { roll: 2, name: 'Teletrasporto', nameEN: 'Teleport' },
      { roll: 3, name: 'Inversione della Gravità', nameEN: 'Reverse Gravity' },
      { roll: 4, name: 'Prisma Spettrale', nameEN: 'Prismatic Spray' },
      { roll: 5, name: 'Tempesta di Fuoco', nameEN: 'Fire Storm' },
      { roll: 6, name: 'Forma Eterea', nameEN: 'Etherealness' },
    ],
  },
  {
    level: 8, die: 'd4',
    spells: [
      { roll: 1, name: 'Terremoto', nameEN: 'Earthquake' },
      { roll: 2, name: 'Mente Vuota', nameEN: 'Feeblemind' },
      { roll: 3, name: 'Dominare Mostri', nameEN: 'Dominate Monster' },
      { roll: 4, name: 'Nube Incendiaria', nameEN: 'Incendiary Cloud' },
    ],
  },
  {
    level: 9, die: 'd4',
    spells: [
      { roll: 1, name: 'Desiderio', nameEN: 'Wish' },
      { roll: 2, name: 'Meteora', nameEN: 'Meteor Swarm' },
      { roll: 3, name: 'Proiezione Astrale', nameEN: 'Astral Projection' },
      { roll: 4, name: 'Arresto del Tempo', nameEN: 'Time Stop' },
    ],
  },
];

// ============================================================
// ENEMY CATEGORIES & LOOT TABLES
// ============================================================

export const enemyCategories: EnemyCategory[] = [
  // 5.1 Umanoidi — Guerriero
  {
    id: 'humanoid-warrior',
    name: 'Umanoidi — Guerriero',
    nameEN: 'Humanoids — Warrior',
    description: 'Soldati, briganti, orchi, goblin armati, guardie, mercenari.',
    descriptionEN: 'Soldiers, bandits, orcs, armed goblins, guards, mercenaries.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: '2d6 monete d\'oro', nameEN: '2d6 gold coins' },
          { roll: 2, name: 'Spada corta usurata', nameEN: 'Worn shortsword' },
          { roll: 3, name: 'Scudo di legno scheggiato', nameEN: 'Chipped wooden shield' },
          { roll: 4, name: 'Pozione di Guarigione', nameEN: 'Potion of Healing' },
          { roll: 5, name: 'Torcia e acciarino', nameEN: 'Torch and tinderbox' },
          { roll: 6, name: 'Razioni da viaggio (1d4 giorni)', nameEN: 'Travel rations (1d4 days)' },
          { roll: 7, name: 'Armatura di cuoio rattoppata', nameEN: 'Patched leather armor' },
          { roll: 8, name: 'Fiala di veleno comune', nameEN: 'Vial of basic poison' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: 'Spada lunga ben mantenuta', nameEN: 'Well-maintained longsword' },
          { roll: 2, name: 'Cotta di maglia', nameEN: 'Chain mail' },
          { roll: 3, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
          { roll: 4, name: '2d10 mo + 1d6 gemme grezze', nameEN: '2d10 gp + 1d6 rough gems' },
          { roll: 5, name: 'Arco lungo con faretra (20 frecce)', nameEN: 'Longbow with quiver (20 arrows)' },
          { roll: 6, name: 'Armatura di cuoio borchiato', nameEN: 'Studded leather armor' },
          { roll: 7, name: 'Pergamena incantesimo 1° livello', nameEN: 'Spell scroll (1st level)' },
          { roll: 8, name: 'Mantello della Protezione', nameEN: 'Cloak of Protection' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Spada lunga +1', nameEN: 'Longsword +1' },
          { roll: 2, name: 'Armatura a maglie +1', nameEN: 'Chain mail +1' },
          { roll: 3, name: 'Scudo +1', nameEN: 'Shield +1' },
          { roll: 4, name: 'Pozione di Guarigione Suprema', nameEN: 'Potion of Superior Healing' },
          { roll: 5, name: 'Stivali di Elven Kind', nameEN: 'Boots of Elvenkind' },
          { roll: 6, name: 'Guanti dell\'Ogre', nameEN: 'Gauntlets of Ogre Power' },
          { roll: 7, name: 'Pergamena incantesimo 3° livello', nameEN: 'Spell scroll (3rd level)' },
          { roll: 8, name: 'Cintura della forza del gigante (minore)', nameEN: 'Belt of Giant Strength (minor)' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Spada lunga +2', nameEN: 'Longsword +2' },
          { roll: 2, name: 'Armatura a piastre +1', nameEN: 'Plate armor +1' },
          { roll: 3, name: 'Scudo +2', nameEN: 'Shield +2' },
          { roll: 4, name: 'Mantello di Spostamento', nameEN: 'Cloak of Displacement' },
          { roll: 5, name: 'Anello di Protezione', nameEN: 'Ring of Protection' },
          { roll: 6, name: 'Elmo della Telepatia', nameEN: 'Helm of Telepathy' },
          { roll: 7, name: 'Stivali della Velocità', nameEN: 'Boots of Speed' },
          { roll: 8, name: 'Guanti di Destrezza', nameEN: 'Gloves of Dexterity' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Spada lunga +3', nameEN: 'Longsword +3' },
          { roll: 2, name: 'Armatura a piastre +2', nameEN: 'Plate armor +2' },
          { roll: 3, name: 'Spada Vorpal', nameEN: 'Vorpal Sword' },
          { roll: 4, name: 'Scudo +3', nameEN: 'Shield +3' },
          { roll: 5, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
          { roll: 6, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 7, name: 'Armatura Invulnerabile', nameEN: 'Armor of Invulnerability' },
          { roll: 8, name: 'Cintura della forza del gigante (superiore)', nameEN: 'Belt of Giant Strength (greater)' },
        ],
      },
    ],
  },

  // 5.2 Umanoidi — Incantatore
  {
    id: 'humanoid-caster',
    name: 'Umanoidi — Incantatore',
    nameEN: 'Humanoids — Spellcaster',
    description: 'Maghi, sciamani, cultisti, sacerdoti, stregoni.',
    descriptionEN: 'Wizards, shamans, cultists, priests, sorcerers.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: '2d6 monete d\'oro', nameEN: '2d6 gold coins' },
          { roll: 2, name: 'Componenti materiali varie (borsa)', nameEN: 'Assorted material components (pouch)' },
          { roll: 3, name: 'Libro di appunti arcani (non leggibile)', nameEN: 'Arcane notebook (unreadable)' },
          { roll: 4, name: 'Candele e incenso rituale', nameEN: 'Ritual candles and incense' },
          { roll: 5, name: 'Pozione di Guarigione', nameEN: 'Potion of Healing' },
          { roll: 6, name: 'Bastone da passeggio nodoso', nameEN: 'Gnarled walking staff' },
          { roll: 7, name: 'Amuleto simbolico (nessun potere)', nameEN: 'Symbolic amulet (no power)' },
          { roll: 8, name: 'Razioni ed erbe essiccate', nameEN: 'Rations and dried herbs' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: 'Pergamena incantesimo 1° livello', nameEN: 'Spell scroll (1st level)' },
          { roll: 2, name: 'Focus arcano di cristallo', nameEN: 'Crystal arcane focus' },
          { roll: 3, name: 'Pozione di Chiaroveggenza', nameEN: 'Potion of Clairvoyance' },
          { roll: 4, name: '2d10 mo + simbolo cultista', nameEN: '2d10 gp + cultist symbol' },
          { roll: 5, name: 'Libro degli incantesimi (1d4 di 1° liv.)', nameEN: 'Spellbook (1d4 1st-level spells)' },
          { roll: 6, name: 'Bacchetta con 1d4 cariche (1° livello)', nameEN: 'Wand with 1d4 charges (1st level)' },
          { roll: 7, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
          { roll: 8, name: 'Mantello della Protezione', nameEN: 'Cloak of Protection' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Libro degli incantesimi (1d4 di 2-3° liv.)', nameEN: 'Spellbook (1d4 2nd-3rd level spells)' },
          { roll: 2, name: 'Bacchetta dei Dardi Magici', nameEN: 'Wand of Magic Missiles' },
          { roll: 3, name: 'Pergamena incantesimo 3° livello', nameEN: 'Spell scroll (3rd level)' },
          { roll: 4, name: 'Sfera di cristallo (minore)', nameEN: 'Crystal ball (minor)' },
          { roll: 5, name: 'Collana di Palle di Fuoco', nameEN: 'Necklace of Fireballs' },
          { roll: 6, name: 'Anello di Contenimento degli Incantesimi', nameEN: 'Ring of Spell Storing' },
          { roll: 7, name: 'Pozione di Chiaroveggenza superiore', nameEN: 'Greater Potion of Clairvoyance' },
          { roll: 8, name: 'Cappello dell\'Intelletto', nameEN: 'Headband of Intellect' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Libro degli incantesimi (1d4 di 4-5° liv.)', nameEN: 'Spellbook (1d4 4th-5th level spells)' },
          { roll: 2, name: 'Bacchetta dei Raggi di Gelo', nameEN: 'Wand of Frost Rays' },
          { roll: 3, name: 'Pergamena incantesimo 5° livello', nameEN: 'Spell scroll (5th level)' },
          { roll: 4, name: 'Sfera di Cristallo', nameEN: 'Crystal Ball' },
          { roll: 5, name: 'Anello della Mente', nameEN: 'Ring of Mind Shielding' },
          { roll: 6, name: 'Diadema dell\'Intelletto', nameEN: 'Circlet of Intellect' },
          { roll: 7, name: 'Mantello del Mago', nameEN: 'Robe of the Archmagi' },
          { roll: 8, name: 'Bacchetta di Paralisi', nameEN: 'Wand of Paralysis' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Libro degli incantesimi (1d4 di 6-9° liv.)', nameEN: 'Spellbook (1d4 6th-9th level spells)' },
          { roll: 2, name: 'Bastone dei Maghi', nameEN: 'Staff of the Magi' },
          { roll: 3, name: 'Sfera di Cristallo superiore', nameEN: 'Greater Crystal Ball' },
          { roll: 4, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 5, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
          { roll: 6, name: 'Amuleto della Salute', nameEN: 'Amulet of Health' },
          { roll: 7, name: 'Bacchetta delle Meraviglie', nameEN: 'Wand of Wonder' },
          { roll: 8, name: 'Tomo della Comprensione', nameEN: 'Tome of Understanding' },
        ],
      },
    ],
  },

  // 5.3 Umanoidi — Ladro / Ranger
  {
    id: 'humanoid-rogue',
    name: 'Umanoidi — Ladro / Ranger',
    nameEN: 'Humanoids — Rogue / Ranger',
    description: 'Assassini, esploratori, ranger, druidi, spie.',
    descriptionEN: 'Assassins, scouts, rangers, druids, spies.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: '2d6 monete d\'oro', nameEN: '2d6 gold coins' },
          { roll: 2, name: 'Pugnale affilato', nameEN: 'Sharp dagger' },
          { roll: 3, name: 'Corda di canapa (15 m)', nameEN: 'Hemp rope (50 ft)' },
          { roll: 4, name: 'Kit da scasso', nameEN: 'Thieves\' tools' },
          { roll: 5, name: 'Faretra con 1d10 frecce', nameEN: 'Quiver with 1d10 arrows' },
          { roll: 6, name: 'Mantello scuro consumato', nameEN: 'Worn dark cloak' },
          { roll: 7, name: 'Razioni da viaggio (1d4 giorni)', nameEN: 'Travel rations (1d4 days)' },
          { roll: 8, name: 'Trappola da caccia', nameEN: 'Hunting trap' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: 'Arco corto ben mantenuto', nameEN: 'Well-maintained shortbow' },
          { roll: 2, name: 'Due pugnali bilanciati', nameEN: 'Two balanced daggers' },
          { roll: 3, name: 'Mantello dell\'Elfo', nameEN: 'Cloak of Elvenkind' },
          { roll: 4, name: 'Kit da scasso di qualità', nameEN: 'Quality thieves\' tools' },
          { roll: 5, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
          { roll: 6, name: '2d10 mo + mappa parziale', nameEN: '2d10 gp + partial map' },
          { roll: 7, name: 'Stivali silenziosi (non magici)', nameEN: 'Silent boots (non-magical)' },
          { roll: 8, name: 'Veleno da contatto (1d4 dosi)', nameEN: 'Contact poison (1d4 doses)' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Arco lungo +1', nameEN: 'Longbow +1' },
          { roll: 2, name: 'Pugnale +1', nameEN: 'Dagger +1' },
          { roll: 3, name: 'Stivali di Elven Kind', nameEN: 'Boots of Elvenkind' },
          { roll: 4, name: 'Mantello dell\'Elfo (magico)', nameEN: 'Cloak of Elvenkind (magical)' },
          { roll: 5, name: 'Guanti del Ladro', nameEN: 'Gloves of Thievery' },
          { roll: 6, name: 'Pozione di Invisibilità', nameEN: 'Potion of Invisibility' },
          { roll: 7, name: 'Frecce di Ricerca (1d6)', nameEN: 'Arrows of Seeking (1d6)' },
          { roll: 8, name: 'Anello del Salto', nameEN: 'Ring of Jumping' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Arco lungo +2', nameEN: 'Longbow +2' },
          { roll: 2, name: 'Pugnale +2', nameEN: 'Dagger +2' },
          { roll: 3, name: 'Mantello di Spostamento', nameEN: 'Cloak of Displacement' },
          { roll: 4, name: 'Stivali della Velocità', nameEN: 'Boots of Speed' },
          { roll: 5, name: 'Anello dell\'Evasione', nameEN: 'Ring of Evasion' },
          { roll: 6, name: 'Occhiali della Notte', nameEN: 'Goggles of Night' },
          { roll: 7, name: 'Scimitarra della Velocità', nameEN: 'Scimitar of Speed' },
          { roll: 8, name: 'Bracciali della Difesa', nameEN: 'Bracers of Defense' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Arco lungo +3', nameEN: 'Longbow +3' },
          { roll: 2, name: 'Pugnale +3', nameEN: 'Dagger +3' },
          { roll: 3, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
          { roll: 4, name: 'Anello dell\'Invisibilità', nameEN: 'Ring of Invisibility' },
          { roll: 5, name: 'Stivali dei Piani', nameEN: 'Boots of the Planes' },
          { roll: 6, name: 'Guanti di Destrezza', nameEN: 'Gloves of Dexterity' },
          { roll: 7, name: 'Scimitarra della Velocità +3', nameEN: 'Scimitar of Speed +3' },
          { roll: 8, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
        ],
      },
    ],
  },

  // 5.4 Bestie
  {
    id: 'beasts',
    name: 'Bestie',
    nameEN: 'Beasts',
    description: 'Loot da vittime precedenti o dalla tana. Nessun Leggendario.',
    descriptionEN: 'Loot from previous victims or lair. No Legendary.',
    probabilityTable: 'Bestie',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: 'Dente o artiglio (ricordo, nessun valore)', nameEN: 'Tooth or claw (memento, no value)' },
          { roll: 2, name: 'Collare o bardatura bestia addestrata', nameEN: 'Collar or harness (trained beast)' },
          { roll: 3, name: 'Borsa marcia 1d6 mo (vittima prec.)', nameEN: 'Rotting pouch 1d6 gp (prev. victim)' },
          { roll: 4, name: 'Anello semplice (vittima prec.)', nameEN: 'Simple ring (prev. victim)' },
          { roll: 5, name: 'Pugnale arrugginito (vittima prec.)', nameEN: 'Rusty dagger (prev. victim)' },
          { roll: 6, name: 'Amuleto spezzato (vittima prec.)', nameEN: 'Broken amulet (prev. victim)' },
          { roll: 7, name: 'Monete sparse 1d10 (vittima prec.)', nameEN: 'Scattered coins 1d10 (prev. victim)' },
          { roll: 8, name: 'Gemma grezza (vittima prec.)', nameEN: 'Rough gem (prev. victim)' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: 'Borsa 2d10 mo (vittima prec.)', nameEN: 'Pouch 2d10 gp (prev. victim)' },
          { roll: 2, name: 'Anello d\'argento semplice (vittima prec.)', nameEN: 'Simple silver ring (prev. victim)' },
          { roll: 3, name: 'Pozione di Guarigione integra (vittima prec.)', nameEN: 'Intact Potion of Healing (prev. victim)' },
          { roll: 4, name: 'Amuleto semplice (vittima prec.)', nameEN: 'Simple amulet (prev. victim)' },
          { roll: 5, name: 'Mappa parziale (vittima prec.)', nameEN: 'Partial map (prev. victim)' },
          { roll: 6, name: 'Pergamena incantesimo 1° livello (vittima prec.)', nameEN: 'Spell scroll 1st level (prev. victim)' },
          { roll: 7, name: 'Gemme semipreziose 1d4 (vittima prec.)', nameEN: 'Semi-precious gems 1d4 (prev. victim)' },
          { roll: 8, name: 'Sigillo o stemma nobiliare (vittima prec.)', nameEN: 'Noble seal or crest (prev. victim)' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Borsa 2d6 mo e gemme (vittima prec.)', nameEN: 'Pouch 2d6 gp and gems (prev. victim)' },
          { roll: 2, name: 'Anello di Protezione (vittima prec.)', nameEN: 'Ring of Protection (prev. victim)' },
          { roll: 3, name: 'Amuleto della Salute (vittima prec.)', nameEN: 'Amulet of Health (prev. victim)' },
          { roll: 4, name: 'Pozione di Guarigione Superiore (vittima prec.)', nameEN: 'Potion of Greater Healing (prev. victim)' },
          { roll: 5, name: 'Pergamena incantesimo 2-3° livello (vittima prec.)', nameEN: 'Spell scroll 2nd-3rd level (prev. victim)' },
          { roll: 6, name: 'Gemme preziose 1d4 (vittima prec.)', nameEN: 'Precious gems 1d4 (prev. victim)' },
          { roll: 7, name: 'Collana magica minore (vittima prec.)', nameEN: 'Minor magical necklace (prev. victim)' },
          { roll: 8, name: 'Medaglione dei Pensieri (vittima prec.)', nameEN: 'Medallion of Thoughts (prev. victim)' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Anello dell\'Evasione (vittima prec.)', nameEN: 'Ring of Evasion (prev. victim)' },
          { roll: 2, name: 'Anello della Mente (vittima prec.)', nameEN: 'Ring of Mind Shielding (prev. victim)' },
          { roll: 3, name: 'Pozione di Guarigione Suprema (vittima prec.)', nameEN: 'Potion of Superior Healing (prev. victim)' },
          { roll: 4, name: 'Pergamena incantesimo 4-5° livello (vittima prec.)', nameEN: 'Spell scroll 4th-5th level (prev. victim)' },
          { roll: 5, name: 'Gemme rare 1d4 (vittima prec.)', nameEN: 'Rare gems 1d4 (prev. victim)' },
          { roll: 6, name: 'Amuleto degli Scudi (vittima prec.)', nameEN: 'Brooch of Shielding (prev. victim)' },
          { roll: 7, name: 'Anello di Resistenza (vittima prec.)', nameEN: 'Ring of Resistance (prev. victim)' },
          { roll: 8, name: 'Collana di Adattamento (vittima prec.)', nameEN: 'Necklace of Adaptation (prev. victim)' },
        ],
      },
    ],
  },

  // 5.5 Non Morti — Fisico
  {
    id: 'undead-physical',
    name: 'Non Morti — Fisico',
    nameEN: 'Undead — Physical',
    description: 'Scheletri, zombie, ghoul, wight, revenant. Portano oggetti addosso.',
    descriptionEN: 'Skeletons, zombies, ghouls, wights, revenants. Carry items on their person.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: '1d6 mo arrugginite', nameEN: '1d6 rusted gold coins' },
          { roll: 2, name: 'Osso inciso con rune (nessun potere)', nameEN: 'Rune-carved bone (no power)' },
          { roll: 3, name: 'Armatura di cuoio marcita (indossabile)', nameEN: 'Rotted leather armor (wearable)' },
          { roll: 4, name: 'Spada corta scheggiata', nameEN: 'Chipped shortsword' },
          { roll: 5, name: 'Amuleto funerario semplice', nameEN: 'Simple funerary amulet' },
          { roll: 6, name: 'Bende con unguenti (nessun potere)', nameEN: 'Bandages with ointments (no power)' },
          { roll: 7, name: 'Simbolo religioso corrotto', nameEN: 'Corrupted holy symbol' },
          { roll: 8, name: 'Anello funerario semplice', nameEN: 'Simple funerary ring' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: '2d10 mo antiche', nameEN: '2d10 ancient gold coins' },
          { roll: 2, name: 'Spada lunga ben conservata', nameEN: 'Well-preserved longsword' },
          { roll: 3, name: 'Armatura a maglie arrugginita ma funzionale', nameEN: 'Rusty but functional chain mail' },
          { roll: 4, name: 'Pozione di Guarigione', nameEN: 'Potion of Healing' },
          { roll: 5, name: 'Amuleto oscuro (nessun potere)', nameEN: 'Dark amulet (no power)' },
          { roll: 6, name: 'Pergamena incantesimo 1° livello (oscuro)', nameEN: 'Spell scroll 1st level (dark)' },
          { roll: 7, name: 'Gemme funebri 1d4', nameEN: 'Funerary gems 1d4' },
          { roll: 8, name: 'Simbolo sacro profanato', nameEN: 'Desecrated holy symbol' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Spada lunga +1 (antica)', nameEN: 'Longsword +1 (ancient)' },
          { roll: 2, name: 'Armatura a maglie +1 (antica)', nameEN: 'Chain mail +1 (ancient)' },
          { roll: 3, name: 'Amuleto della Salute', nameEN: 'Amulet of Health' },
          { roll: 4, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
          { roll: 5, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
          { roll: 6, name: 'Anello di Protezione', nameEN: 'Ring of Protection' },
          { roll: 7, name: 'Scudo +1 (antico)', nameEN: 'Shield +1 (ancient)' },
          { roll: 8, name: 'Simbolo sacro animato', nameEN: 'Animated holy symbol' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Spada lunga +2 (antica, con iscrizioni)', nameEN: 'Longsword +2 (ancient, inscribed)' },
          { roll: 2, name: 'Armatura a piastre +1 (antica)', nameEN: 'Plate armor +1 (ancient)' },
          { roll: 3, name: 'Mantello di Spostamento', nameEN: 'Cloak of Displacement' },
          { roll: 4, name: 'Anello dell\'Evasione', nameEN: 'Ring of Evasion' },
          { roll: 5, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
          { roll: 6, name: 'Scudo +2 (antico)', nameEN: 'Shield +2 (ancient)' },
          { roll: 7, name: 'Elmo della Telepatia', nameEN: 'Helm of Telepathy' },
          { roll: 8, name: 'Amuleto degli Scudi', nameEN: 'Brooch of Shielding' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Spada lunga +3 (con nome)', nameEN: 'Longsword +3 (named)' },
          { roll: 2, name: 'Armatura a piastre +2 (maledetta?)', nameEN: 'Plate armor +2 (cursed?)' },
          { roll: 3, name: 'Falce della Morte (Scythe of Life Stealing)', nameEN: 'Scythe of Life Stealing' },
          { roll: 4, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 5, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
          { roll: 6, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
          { roll: 7, name: 'Corona del non morto (valore narrativo)', nameEN: 'Undead crown (narrative value)' },
          { roll: 8, name: 'Amuleto della Salute superiore', nameEN: 'Greater Amulet of Health' },
        ],
      },
    ],
  },

  // 5.6 Non Morti — Incorporeo
  {
    id: 'undead-incorporeal',
    name: 'Non Morti — Incorporeo',
    nameEN: 'Undead — Incorporeal',
    description: 'Spettri, banshee, ombre, fantasmi. Loot nel luogo (cripta, dungeon).',
    descriptionEN: 'Specters, banshees, shadows, ghosts. Loot found in location (crypt, dungeon).',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: 'Monete antiche sparse 1d10', nameEN: 'Scattered ancient coins 1d10' },
          { roll: 2, name: 'Candele votive consumate (nessun potere)', nameEN: 'Spent votive candles (no power)' },
          { roll: 3, name: 'Libro di preghiere corrotto', nameEN: 'Corrupted prayer book' },
          { roll: 4, name: 'Gemma grezza opaca', nameEN: 'Opaque rough gem' },
          { roll: 5, name: 'Lettera sbiadita illeggibile', nameEN: 'Faded illegible letter' },
          { roll: 6, name: 'Simbolo religioso abbandonato', nameEN: 'Abandoned holy symbol' },
          { roll: 7, name: 'Gioiello spezzato senza valore', nameEN: 'Broken worthless jewelry' },
          { roll: 8, name: 'Frammento di lapide con iscrizione', nameEN: 'Tombstone fragment with inscription' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: '2d10 mo antiche', nameEN: '2d10 ancient gold coins' },
          { roll: 2, name: 'Diario parzialmente leggibile (indizi narrativi)', nameEN: 'Partially readable diary (narrative clues)' },
          { roll: 3, name: 'Gemme funebri 1d4', nameEN: 'Funerary gems 1d4' },
          { roll: 4, name: 'Pergamena incantesimo 1° livello', nameEN: 'Spell scroll (1st level)' },
          { roll: 5, name: 'Gioiello antico integro', nameEN: 'Intact antique jewel' },
          { roll: 6, name: 'Simbolo sacro profanato funzionale', nameEN: 'Functional desecrated holy symbol' },
          { roll: 7, name: 'Pozione di Guarigione (abbandonata)', nameEN: 'Potion of Healing (abandoned)' },
          { roll: 8, name: 'Lettera leggibile con segreto narrativo', nameEN: 'Readable letter with narrative secret' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Gemme preziose 1d4', nameEN: 'Precious gems 1d4' },
          { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
          { roll: 3, name: 'Anello di Protezione (abbandonato)', nameEN: 'Ring of Protection (abandoned)' },
          { roll: 4, name: 'Amuleto della Salute (abbandonato)', nameEN: 'Amulet of Health (abandoned)' },
          { roll: 5, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
          { roll: 6, name: 'Libro degli incantesimi parziale', nameEN: 'Partial spellbook' },
          { roll: 7, name: 'Gioiello antico (2d6×10 mo)', nameEN: 'Antique jewel (2d6×10 gp)' },
          { roll: 8, name: 'Medaglione dei Pensieri', nameEN: 'Medallion of Thoughts' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
          { roll: 2, name: 'Anello dell\'Evasione', nameEN: 'Ring of Evasion' },
          { roll: 3, name: 'Mantello di Spostamento', nameEN: 'Cloak of Displacement' },
          { roll: 4, name: 'Gemme rare 1d4', nameEN: 'Rare gems 1d4' },
          { roll: 5, name: 'Libro degli incantesimi completo', nameEN: 'Complete spellbook' },
          { roll: 6, name: 'Diadema dell\'Intelletto', nameEN: 'Circlet of Intellect' },
          { roll: 7, name: 'Pozione di Guarigione Suprema', nameEN: 'Potion of Superior Healing' },
          { roll: 8, name: 'Gioiello rarissimo (2d6×100 mo)', nameEN: 'Very rare jewel (2d6×100 gp)' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
          { roll: 2, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 3, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
          { roll: 4, name: 'Libro degli incantesimi leggendario', nameEN: 'Legendary spellbook' },
          { roll: 5, name: 'Corona antica (valore narrativo enorme)', nameEN: 'Ancient crown (enormous narrative value)' },
          { roll: 6, name: 'Amuleto della Salute superiore', nameEN: 'Greater Amulet of Health' },
          { roll: 7, name: 'Sfera di Cristallo', nameEN: 'Crystal Ball' },
          { roll: 8, name: 'Reliquia sacra perduta (DM)', nameEN: 'Lost holy relic (DM)' },
        ],
      },
    ],
  },

  // 5.7 Demoni
  {
    id: 'demons',
    name: 'Demoni',
    nameEN: 'Demons',
    description: 'Dretch, quasit, balor, marilith. Loot brutale e corrotto. Oggetti maledetti a discrezione DM.',
    descriptionEN: 'Dretch, quasit, balor, marilith. Brutal and corrupted loot. Cursed items at DM discretion.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: 'Frammento osso demoniaco (nessun potere)', nameEN: 'Demonic bone fragment (no power)' },
          { roll: 2, name: 'Sangue dem. cristallizzato (nessun potere)', nameEN: 'Crystallized demon blood (no power)' },
          { roll: 3, name: 'Simbolo dell\'Abisso corrotto', nameEN: 'Corrupted symbol of the Abyss' },
          { roll: 4, name: 'Dente o artiglio demoniaco (ricordo)', nameEN: 'Demonic tooth or claw (memento)' },
          { roll: 5, name: 'Monete abissali (nessun valore piano mat.)', nameEN: 'Abyssal coins (no material plane value)' },
          { roll: 6, name: 'Amuleto corrotto (nessun potere)', nameEN: 'Corrupted amulet (no power)' },
          { roll: 7, name: 'Frammento armatura demoniaca inutilizzabile', nameEN: 'Unusable demonic armor fragment' },
          { roll: 8, name: 'Pietra abissale grezza', nameEN: 'Rough abyssal stone' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: 'Arma corrotta +0 (conta come magica)', nameEN: 'Corrupted weapon +0 (counts as magical)' },
          { roll: 2, name: 'Sangue dem. concentrato (1d4 dosi, veleno)', nameEN: 'Concentrated demon blood (1d4 doses, poison)' },
          { roll: 3, name: 'Pergamena incantesimo 1° livello (oscuro)', nameEN: 'Spell scroll 1st level (dark)' },
          { roll: 4, name: 'Simbolo abissale funzionale', nameEN: 'Functional abyssal symbol' },
          { roll: 5, name: 'Gemme corrotte 1d4', nameEN: 'Corrupted gems 1d4' },
          { roll: 6, name: 'Pozione di Guarigione (vittima prec.)', nameEN: 'Potion of Healing (prev. victim)' },
          { roll: 7, name: 'Frammento pietra abissale rara', nameEN: 'Rare abyssal stone fragment' },
          { roll: 8, name: 'Amuleto della Resistenza minore', nameEN: 'Minor Amulet of Resistance' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Arma demoniaca +1 (maledetta, DM)', nameEN: 'Demonic weapon +1 (cursed, DM)' },
          { roll: 2, name: 'Armatura demoniaca +1 (maledetta, DM)', nameEN: 'Demonic armor +1 (cursed, DM)' },
          { roll: 3, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
          { roll: 4, name: 'Gemme abissali rare 1d4', nameEN: 'Rare abyssal gems 1d4' },
          { roll: 5, name: 'Anello di Resistenza al Fuoco', nameEN: 'Ring of Fire Resistance' },
          { roll: 6, name: 'Pozione di Resistenza', nameEN: 'Potion of Resistance' },
          { roll: 7, name: 'Amuleto della Salute corrotto', nameEN: 'Corrupted Amulet of Health' },
          { roll: 8, name: 'Scudo demoniaco +1', nameEN: 'Demonic shield +1' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Arma demoniaca +2 (maledetta)', nameEN: 'Demonic weapon +2 (cursed)' },
          { roll: 2, name: 'Armatura demoniaca +1 (pesante, maledetta)', nameEN: 'Demonic armor +1 (heavy, cursed)' },
          { roll: 3, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
          { roll: 4, name: 'Anello di Resistenza agli Elementi', nameEN: 'Ring of Elemental Resistance' },
          { roll: 5, name: 'Mantello di Spostamento corrotto', nameEN: 'Corrupted Cloak of Displacement' },
          { roll: 6, name: 'Gemme abissali leggendarie 1d4', nameEN: 'Legendary abyssal gems 1d4' },
          { roll: 7, name: 'Amuleto degli Scudi demoniaco', nameEN: 'Demonic Brooch of Shielding' },
          { roll: 8, name: 'Scudo demoniaco +2', nameEN: 'Demonic shield +2' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Arma demoniaca +3 (fortemente maledetta)', nameEN: 'Demonic weapon +3 (heavily cursed)' },
          { roll: 2, name: 'Armatura demoniaca +2 (fortemente maledetta)', nameEN: 'Demonic armor +2 (heavily cursed)' },
          { roll: 3, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
          { roll: 4, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 5, name: 'Mantello dell\'Invisibilità corrotto', nameEN: 'Corrupted Cloak of Invisibility' },
          { roll: 6, name: 'Reliquia abissale (effetto DM)', nameEN: 'Abyssal relic (DM effect)' },
          { roll: 7, name: 'Sfera di Cristallo corrotta', nameEN: 'Corrupted Crystal Ball' },
          { roll: 8, name: 'Corona demoniaca (potere narrativo enorme)', nameEN: 'Demonic crown (enormous narrative power)' },
        ],
      },
    ],
  },

  // 5.8 Diavoli
  {
    id: 'devils',
    name: 'Diavoli',
    nameEN: 'Devils',
    description: 'Imp, bearded devil, pit fiend, erinye. Loot elegante e contrattuale.',
    descriptionEN: 'Imp, bearded devil, pit fiend, erinyes. Elegant and contractual loot.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: 'Contratto infernale vuoto (pergamena elegante)', nameEN: 'Blank infernal contract (elegant scroll)' },
          { roll: 2, name: 'Monete infernali nere (nessun valore)', nameEN: 'Black infernal coins (no value)' },
          { roll: 3, name: 'Simbolo delle Nove Inferno', nameEN: 'Symbol of the Nine Hells' },
          { roll: 4, name: 'Gemma rossa grezza', nameEN: 'Rough red gem' },
          { roll: 5, name: 'Sigillo di un Arcidiavolo (nessun potere)', nameEN: 'Archdevil seal (no power)' },
          { roll: 6, name: 'Penna di scrittura infernale', nameEN: 'Infernal writing quill' },
          { roll: 7, name: 'Frammento armatura infernale inutilizzabile', nameEN: 'Unusable infernal armor fragment' },
          { roll: 8, name: 'Pietra infernale levigata', nameEN: 'Polished infernal stone' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: 'Contratto infernale parziale (valore narrativo)', nameEN: 'Partial infernal contract (narrative value)' },
          { roll: 2, name: 'Arma infernale +0 (conta come magica)', nameEN: 'Infernal weapon +0 (counts as magical)' },
          { roll: 3, name: 'Pergamena incantesimo 1° livello', nameEN: 'Spell scroll (1st level)' },
          { roll: 4, name: 'Gemme rosse 1d4', nameEN: 'Red gems 1d4' },
          { roll: 5, name: 'Simbolo infernale funzionale', nameEN: 'Functional infernal symbol' },
          { roll: 6, name: 'Pozione di Resistenza al Fuoco', nameEN: 'Potion of Fire Resistance' },
          { roll: 7, name: 'Amuleto infernale minore', nameEN: 'Minor infernal amulet' },
          { roll: 8, name: 'Sigillo di convocazione (uso singolo, pericoloso)', nameEN: 'Summoning seal (single use, dangerous)' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: 'Arma infernale +1', nameEN: 'Infernal weapon +1' },
          { roll: 2, name: 'Armatura infernale +1', nameEN: 'Infernal armor +1' },
          { roll: 3, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
          { roll: 4, name: 'Contratto con clausola attiva (valore narrativo)', nameEN: 'Contract with active clause (narrative value)' },
          { roll: 5, name: 'Anello di Resistenza al Fuoco', nameEN: 'Ring of Fire Resistance' },
          { roll: 6, name: 'Gemme preziose infernali 1d4', nameEN: 'Precious infernal gems 1d4' },
          { roll: 7, name: 'Amuleto della Salute infernale', nameEN: 'Infernal Amulet of Health' },
          { roll: 8, name: 'Scudo infernale +1', nameEN: 'Infernal shield +1' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: 'Arma infernale +2', nameEN: 'Infernal weapon +2' },
          { roll: 2, name: 'Armatura infernale +1 (pesante)', nameEN: 'Infernal armor +1 (heavy)' },
          { roll: 3, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
          { roll: 4, name: 'Contratto con potere attivo (effetto DM)', nameEN: 'Contract with active power (DM effect)' },
          { roll: 5, name: 'Anello di Resistenza agli Elementi', nameEN: 'Ring of Elemental Resistance' },
          { roll: 6, name: 'Mantello di Spostamento infernale', nameEN: 'Infernal Cloak of Displacement' },
          { roll: 7, name: 'Diadema dell\'Intelletto infernale', nameEN: 'Infernal Circlet of Intellect' },
          { roll: 8, name: 'Scudo infernale +2', nameEN: 'Infernal shield +2' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: 'Arma infernale +3', nameEN: 'Infernal weapon +3' },
          { roll: 2, name: 'Armatura infernale +2', nameEN: 'Infernal armor +2' },
          { roll: 3, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
          { roll: 4, name: 'Contratto leggendario (potere narr. e meccanico)', nameEN: 'Legendary contract (narrative & mechanical power)' },
          { roll: 5, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 6, name: 'Mantello dell\'Invisibilità infernale', nameEN: 'Infernal Cloak of Invisibility' },
          { roll: 7, name: 'Corona infernale (potere narrativo enorme)', nameEN: 'Infernal crown (enormous narrative power)' },
          { roll: 8, name: 'Reliquia delle Nove Inferno (effetto DM)', nameEN: 'Relic of the Nine Hells (DM effect)' },
        ],
      },
    ],
  },

  // 5.9 Draghi
  {
    id: 'dragons',
    name: 'Draghi',
    nameEN: 'Dragons',
    description: 'Loot dalla tana. Rango=età: Minion=Giovane, Elite=Adulto, Boss=Antico. Già ricco dal Comune.',
    descriptionEN: 'Lair loot. Rank=age: Minion=Young, Elite=Adult, Boss=Ancient. Already rich from Common.',
    probabilityTable: 'Standard',
    rarities: [
      {
        rarity: 'Comune',
        items: [
          { roll: 1, name: '4d6 mo', nameEN: '4d6 gp' },
          { roll: 2, name: 'Gemme grezze 1d6', nameEN: 'Rough gems 1d6' },
          { roll: 3, name: 'Gioiello antico semplice', nameEN: 'Simple antique jewel' },
          { roll: 4, name: 'Arma mundana di qualità (collezione)', nameEN: 'Quality mundane weapon (collection)' },
          { roll: 5, name: 'Monete di civiltà scomparse (valore storico)', nameEN: 'Coins of lost civilizations (historical value)' },
          { roll: 6, name: 'Scultura preziosa piccola (2d6×10 mo)', nameEN: 'Small precious sculpture (2d6×10 gp)' },
          { roll: 7, name: 'Armatura mundana di qualità (collezione)', nameEN: 'Quality mundane armor (collection)' },
          { roll: 8, name: 'Pergamena incantesimo 1° livello', nameEN: 'Spell scroll (1st level)' },
        ],
      },
      {
        rarity: 'Non Comune',
        items: [
          { roll: 1, name: '4d10 mo + 1d6 gemme', nameEN: '4d10 gp + 1d6 gems' },
          { roll: 2, name: 'Gemme semipreziose 1d6', nameEN: 'Semi-precious gems 1d6' },
          { roll: 3, name: 'Gioiello antico elaborato (2d6×50 mo)', nameEN: 'Elaborate antique jewel (2d6×50 gp)' },
          { roll: 4, name: 'Spada lunga di qualità superiore', nameEN: 'Superior quality longsword' },
          { roll: 5, name: 'Pozione di Guarigione Superiore (1d4 fiale)', nameEN: 'Potion of Greater Healing (1d4 vials)' },
          { roll: 6, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
          { roll: 7, name: 'Scultura preziosa rara (2d6×100 mo)', nameEN: 'Rare precious sculpture (2d6×100 gp)' },
          { roll: 8, name: 'Armatura a maglie di qualità superiore', nameEN: 'Superior quality chain mail' },
        ],
      },
      {
        rarity: 'Raro',
        items: [
          { roll: 1, name: '4d10×10 mo + gemme preziose', nameEN: '4d10×10 gp + precious gems' },
          { roll: 2, name: 'Spada lunga +1 (antica, con storia)', nameEN: 'Longsword +1 (ancient, with history)' },
          { roll: 3, name: 'Armatura a maglie +1 (antica)', nameEN: 'Chain mail +1 (ancient)' },
          { roll: 4, name: 'Pozione di Guarigione Suprema (1d4 fiale)', nameEN: 'Potion of Superior Healing (1d4 vials)' },
          { roll: 5, name: 'Pergamena incantesimo 3-4° livello', nameEN: 'Spell scroll 3rd-4th level' },
          { roll: 6, name: 'Anello di Protezione', nameEN: 'Ring of Protection' },
          { roll: 7, name: 'Gemme rare 1d6', nameEN: 'Rare gems 1d6' },
          { roll: 8, name: 'Opera d\'arte rarissima (2d6×250 mo)', nameEN: 'Very rare art piece (2d6×250 gp)' },
        ],
      },
      {
        rarity: 'Epico',
        items: [
          { roll: 1, name: '4d10×100 mo + gemme leggendarie', nameEN: '4d10×100 gp + legendary gems' },
          { roll: 2, name: 'Spada lunga +2 (antica, con nome)', nameEN: 'Longsword +2 (ancient, named)' },
          { roll: 3, name: 'Armatura a piastre +1 (antica)', nameEN: 'Plate armor +1 (ancient)' },
          { roll: 4, name: 'Mantello di Spostamento', nameEN: 'Cloak of Displacement' },
          { roll: 5, name: 'Pergamena incantesimo 5-6° livello', nameEN: 'Spell scroll 5th-6th level' },
          { roll: 6, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
          { roll: 7, name: 'Sfera di Cristallo', nameEN: 'Crystal Ball' },
          { roll: 8, name: 'Opera d\'arte leggendaria (2d6×1000 mo)', nameEN: 'Legendary art piece (2d6×1000 gp)' },
        ],
      },
      {
        rarity: 'Leggendario',
        items: [
          { roll: 1, name: '4d10×1000 mo + gemme rarissime', nameEN: '4d10×1000 gp + very rare gems' },
          { roll: 2, name: 'Spada lunga +3 (leggendaria, con nome)', nameEN: 'Longsword +3 (legendary, named)' },
          { roll: 3, name: 'Armatura a piastre +2 (leggendaria)', nameEN: 'Plate armor +2 (legendary)' },
          { roll: 4, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
          { roll: 5, name: 'Pergamena incantesimo 7-9° livello', nameEN: 'Spell scroll 7th-9th level' },
          { roll: 6, name: 'Bastone dei Maghi', nameEN: 'Staff of the Magi' },
          { roll: 7, name: 'Anello dei Tre Desideri', nameEN: 'Ring of Three Wishes' },
          { roll: 8, name: 'Reliquia draconiana unica (effetto DM)', nameEN: 'Unique draconic relic (DM effect)' },
        ],
      },
    ],
  },

  // 5.10 Costrutti
  {
    id: 'constructs',
    name: 'Costrutti',
    nameEN: 'Constructs',
    description: 'Golem, animated armor, shield guardian. Loot dal costrutto o dal creatore.',
    descriptionEN: 'Golems, animated armor, shield guardians. Loot from construct or creator.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Ingranaggi e viti metalliche (nessun valore)', nameEN: 'Metal gears and screws (no value)' },
        { roll: 2, name: 'Frammento pietra incisa (nessun potere)', nameEN: 'Inscribed stone fragment (no power)' },
        { roll: 3, name: 'Monete del creatore 1d6 (nel luogo)', nameEN: 'Creator\'s coins 1d6 (in location)' },
        { roll: 4, name: 'Strumenti da fabbro semplici (del creatore)', nameEN: 'Simple smith\'s tools (creator\'s)' },
        { roll: 5, name: 'Simbolo del creatore inciso (nessun potere)', nameEN: 'Creator\'s inscribed symbol (no power)' },
        { roll: 6, name: 'Frammento armatura metallica inutilizzabile', nameEN: 'Unusable metal armor fragment' },
        { roll: 7, name: 'Pietra grezza non incantata', nameEN: 'Rough unenchanted stone' },
        { roll: 8, name: 'Documento tecnico illeggibile (del creatore)', nameEN: 'Illegible technical document (creator\'s)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Nucleo energetico minore (focus arcano)', nameEN: 'Minor power core (arcane focus)' },
        { roll: 2, name: 'Monete del creatore 2d10 (nel luogo)', nameEN: 'Creator\'s coins 2d10 (in location)' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (del creatore)', nameEN: 'Spell scroll 1st level (creator\'s)' },
        { roll: 4, name: 'Strumenti da fabbro di qualità (del creatore)', nameEN: 'Quality smith\'s tools (creator\'s)' },
        { roll: 5, name: 'Gemme grezze 1d4 (componenti)', nameEN: 'Rough gems 1d4 (components)' },
        { roll: 6, name: 'Documento tecnico leggibile (valore narrativo)', nameEN: 'Readable technical document (narrative value)' },
        { roll: 7, name: 'Pozione di Guarigione (del creatore)', nameEN: 'Potion of Healing (creator\'s)' },
        { roll: 8, name: 'Amuleto del creatore (nessun potere)', nameEN: 'Creator\'s amulet (no power)' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Nucleo energetico (focus arcano superiore)', nameEN: 'Power core (greater arcane focus)' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 3, name: 'Gemme preziose 1d4 (componenti)', nameEN: 'Precious gems 1d4 (components)' },
        { roll: 4, name: 'Anello di Protezione (del creatore)', nameEN: 'Ring of Protection (creator\'s)' },
        { roll: 5, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
        { roll: 6, name: 'Documento tecnico raro (istruzioni costrutti)', nameEN: 'Rare technical document (construct instructions)' },
        { roll: 7, name: 'Armatura di cuoio +1 (del creatore)', nameEN: 'Leather armor +1 (creator\'s)' },
        { roll: 8, name: 'Amuleto della Salute (del creatore)', nameEN: 'Amulet of Health (creator\'s)' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Nucleo energetico superiore (effetto DM)', nameEN: 'Greater power core (DM effect)' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Gemme rare 1d4 (componenti)', nameEN: 'Rare gems 1d4 (components)' },
        { roll: 4, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
        { roll: 5, name: 'Mantello di Spostamento (del creatore)', nameEN: 'Cloak of Displacement (creator\'s)' },
        { roll: 6, name: 'Documento tecnico leggendario', nameEN: 'Legendary technical document' },
        { roll: 7, name: 'Diadema dell\'Intelletto (del creatore)', nameEN: 'Circlet of Intellect (creator\'s)' },
        { roll: 8, name: 'Armatura a maglie +1 (del creatore)', nameEN: 'Chain mail +1 (creator\'s)' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Nucleo energetico leggendario (potere unico DM)', nameEN: 'Legendary power core (unique DM power)' },
        { roll: 2, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 3, name: 'Gemme leggendarie 1d4', nameEN: 'Legendary gems 1d4' },
        { roll: 4, name: 'Anello dei Tre Desideri', nameEN: 'Ring of Three Wishes' },
        { roll: 5, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
        { roll: 6, name: 'Bastone dei Maghi', nameEN: 'Staff of the Magi' },
        { roll: 7, name: 'Sfera di Cristallo superiore', nameEN: 'Greater Crystal Ball' },
        { roll: 8, name: 'Tomo della Comprensione', nameEN: 'Tome of Understanding' },
      ]},
    ],
  },

  // 5.11 Aberrazioni
  {
    id: 'aberrations',
    name: 'Aberrazioni',
    nameEN: 'Aberrations',
    description: 'Mind flayer, beholder, aboleth. Oggetti extraplanari, psionici e delle vittime.',
    descriptionEN: 'Mind flayers, beholders, aboleths. Extraplanar, psionic items and victims\' belongings.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Frammento chitinoso inutilizzabile', nameEN: 'Unusable chitinous fragment' },
        { roll: 2, name: 'Monete vittima prec. 1d6', nameEN: 'Prev. victim coins 1d6' },
        { roll: 3, name: 'Occhio cristallizzato (nessun potere)', nameEN: 'Crystallized eye (no power)' },
        { roll: 4, name: 'Simbolo psionico inciso (nessun potere)', nameEN: 'Inscribed psionic symbol (no power)' },
        { roll: 5, name: 'Amuleto vittima prec.', nameEN: 'Prev. victim amulet' },
        { roll: 6, name: 'Pietra extraplanare grezza', nameEN: 'Rough extraplanar stone' },
        { roll: 7, name: 'Documento illeggibile in lingua sconosciuta', nameEN: 'Illegible document in unknown language' },
        { roll: 8, name: 'Gemma grezza opaca', nameEN: 'Opaque rough gem' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Monete 2d10 (vittima prec.)', nameEN: 'Coins 2d10 (prev. victim)' },
        { roll: 2, name: 'Cristallo psionico minore (focus arcano)', nameEN: 'Minor psionic crystal (arcane focus)' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello', nameEN: 'Spell scroll (1st level)' },
        { roll: 4, name: 'Gemme grezze 1d4', nameEN: 'Rough gems 1d4' },
        { roll: 5, name: 'Amuleto della Salute (vittima prec.)', nameEN: 'Amulet of Health (prev. victim)' },
        { roll: 6, name: 'Documento parziale leggibile (valore narrativo)', nameEN: 'Partially readable document (narrative value)' },
        { roll: 7, name: 'Pozione di Guarigione (vittima prec.)', nameEN: 'Potion of Healing (prev. victim)' },
        { roll: 8, name: 'Pietra extraplanare rara', nameEN: 'Rare extraplanar stone' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Cristallo psionico (focus arcano superiore)', nameEN: 'Psionic crystal (greater arcane focus)' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 3, name: 'Gemme preziose 1d4', nameEN: 'Precious gems 1d4' },
        { roll: 4, name: 'Anello di Protezione (vittima prec.)', nameEN: 'Ring of Protection (prev. victim)' },
        { roll: 5, name: 'Elmo della Telepatia', nameEN: 'Helm of Telepathy' },
        { roll: 6, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
        { roll: 7, name: 'Medaglione dei Pensieri', nameEN: 'Medallion of Thoughts' },
        { roll: 8, name: 'Documento raro in lingua sconosciuta', nameEN: 'Rare document in unknown language' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Cristallo psionico superiore (effetto DM)', nameEN: 'Greater psionic crystal (DM effect)' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Diadema dell\'Intelletto', nameEN: 'Circlet of Intellect' },
        { roll: 4, name: 'Gemme rare 1d4', nameEN: 'Rare gems 1d4' },
        { roll: 5, name: 'Anello della Mente', nameEN: 'Ring of Mind Shielding' },
        { roll: 6, name: 'Mantello di Spostamento', nameEN: 'Cloak of Displacement' },
        { roll: 7, name: 'Sfera di Cristallo', nameEN: 'Crystal Ball' },
        { roll: 8, name: 'Elmo della Brillanza', nameEN: 'Helm of Brilliance' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Cristallo psionico leggendario (potere unico DM)', nameEN: 'Legendary psionic crystal (unique DM power)' },
        { roll: 2, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 3, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
        { roll: 4, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
        { roll: 5, name: 'Sfera di Cristallo superiore', nameEN: 'Greater Crystal Ball' },
        { roll: 6, name: 'Tomo della Comprensione', nameEN: 'Tome of Understanding' },
        { roll: 7, name: 'Reliquia extraplanare unica (effetto DM)', nameEN: 'Unique extraplanar relic (DM effect)' },
        { roll: 8, name: 'Corona psionica (potere narrativo enorme)', nameEN: 'Psionic crown (enormous narrative power)' },
      ]},
    ],
  },

  // 5.12 Fate Benevole
  {
    id: 'fey-benevolent',
    name: 'Fate Benevole',
    nameEN: 'Benevolent Fey',
    description: 'Pixie, dryad, sprite, unicorno.',
    descriptionEN: 'Pixies, dryads, sprites, unicorns.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Fiori magici appassiti (nessun potere)', nameEN: 'Wilted magical flowers (no power)' },
        { roll: 2, name: 'Bacche selvatiche (nessun potere)', nameEN: 'Wild berries (no power)' },
        { roll: 3, name: 'Monete fatate (nessun valore piano mat.)', nameEN: 'Fey coins (no material plane value)' },
        { roll: 4, name: 'Piuma colorata rara (nessun potere)', nameEN: 'Rare colorful feather (no power)' },
        { roll: 5, name: 'Pietra levigata con runa (nessun potere)', nameEN: 'Smooth rune-stone (no power)' },
        { roll: 6, name: 'Filo d\'oro fatato (nessun potere meccanico)', nameEN: 'Fey golden thread (no mechanical power)' },
        { roll: 7, name: 'Gemma grezza luminosa', nameEN: 'Luminous rough gem' },
        { roll: 8, name: 'Foglia perennemente verde (nessun potere)', nameEN: 'Evergreen leaf (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Pozione di Guarigione fatata', nameEN: 'Fey Potion of Healing' },
        { roll: 2, name: 'Pergamena incantesimo 1° livello (magia nat.)', nameEN: 'Spell scroll 1st level (nature magic)' },
        { roll: 3, name: 'Gemme luminose 1d4', nameEN: 'Luminous gems 1d4' },
        { roll: 4, name: 'Polvere fatata (effetto DM)', nameEN: 'Fey dust (DM effect)' },
        { roll: 5, name: 'Amuleto della natura (nessun potere mec.)', nameEN: 'Nature amulet (no mechanical power)' },
        { roll: 6, name: 'Monete d\'oro fatate 2d10', nameEN: 'Fey gold coins 2d10' },
        { roll: 7, name: 'Fiala di rugiada (Pozione Guarigione Sup.)', nameEN: 'Dew vial (Potion of Greater Healing)' },
        { roll: 8, name: 'Simbolo druidico funzionale', nameEN: 'Functional druidic symbol' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Pergamena incantesimo 2-3° livello (nat.)', nameEN: 'Spell scroll 2nd-3rd level (nature)' },
        { roll: 2, name: 'Mantello dell\'Elfo', nameEN: 'Cloak of Elvenkind' },
        { roll: 3, name: 'Stivali di Elven Kind', nameEN: 'Boots of Elvenkind' },
        { roll: 4, name: 'Pozione di Guarigione Superiore fatata', nameEN: 'Fey Potion of Greater Healing' },
        { roll: 5, name: 'Gemme rare luminose 1d4', nameEN: 'Rare luminous gems 1d4' },
        { roll: 6, name: 'Anello di Protezione fatato', nameEN: 'Fey Ring of Protection' },
        { roll: 7, name: 'Bacchetta fatata (effetto DM)', nameEN: 'Fey wand (DM effect)' },
        { roll: 8, name: 'Amuleto della Salute fatato', nameEN: 'Fey Amulet of Health' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 2, name: 'Mantello di Spostamento fatato', nameEN: 'Fey Cloak of Displacement' },
        { roll: 3, name: 'Stivali della Velocità fatati', nameEN: 'Fey Boots of Speed' },
        { roll: 4, name: 'Anello dell\'Evasione', nameEN: 'Ring of Evasion' },
        { roll: 5, name: 'Gemme leggendarie luminose 1d4', nameEN: 'Legendary luminous gems 1d4' },
        { roll: 6, name: 'Bacchetta delle Meraviglie', nameEN: 'Wand of Wonder' },
        { roll: 7, name: 'Diadema dell\'Intelletto fatato', nameEN: 'Fey Circlet of Intellect' },
        { roll: 8, name: 'Arpa delle Fate (effetto narrativo enorme)', nameEN: 'Harp of the Fey (enormous narrative effect)' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 2, name: 'Mantello dell\'Invisibilità fatato', nameEN: 'Fey Cloak of Invisibility' },
        { roll: 3, name: 'Anello dei Tre Desideri fatato', nameEN: 'Fey Ring of Three Wishes' },
        { roll: 4, name: 'Reliquia fatata unica (effetto DM)', nameEN: 'Unique fey relic (DM effect)' },
        { roll: 5, name: 'Corona delle Fate (potere narrativo enorme)', nameEN: 'Crown of the Fey (enormous narrative power)' },
        { roll: 6, name: 'Bacchetta leggendaria (effetto DM)', nameEN: 'Legendary wand (DM effect)' },
        { roll: 7, name: 'Tomo della Comprensione fatato', nameEN: 'Fey Tome of Understanding' },
        { roll: 8, name: 'Sfera di Cristallo fatata', nameEN: 'Fey Crystal Ball' },
      ]},
    ],
  },

  // 5.13 Fate Malvagie
  {
    id: 'fey-malevolent',
    name: 'Fate Malvagie',
    nameEN: 'Malevolent Fey',
    description: 'Hag, quickling, redcap, meenlock.',
    descriptionEN: 'Hags, quicklings, redcaps, meenlocks.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Osso inciso con maledizione (nessun potere)', nameEN: 'Curse-inscribed bone (no power)' },
        { roll: 2, name: 'Monete fatate corrotte (nessun valore)', nameEN: 'Corrupted fey coins (no value)' },
        { roll: 3, name: 'Erbe velenose essiccate (nessun potere)', nameEN: 'Dried poisonous herbs (no power)' },
        { roll: 4, name: 'Occhio di vetro inquietante (nessun potere)', nameEN: 'Unsettling glass eye (no power)' },
        { roll: 5, name: 'Dente di creatura sconosciuta (nessun potere)', nameEN: 'Unknown creature tooth (no power)' },
        { roll: 6, name: 'Filo nero intrecciato con capelli', nameEN: 'Black thread woven with hair' },
        { roll: 7, name: 'Gemma grezza opaca', nameEN: 'Opaque rough gem' },
        { roll: 8, name: 'Simbolo maledetto (nessun potere)', nameEN: 'Cursed symbol (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Pozione di veleno', nameEN: 'Potion of Poison' },
        { roll: 2, name: 'Pergamena incantesimo 1° livello (oscuro)', nameEN: 'Spell scroll 1st level (dark)' },
        { roll: 3, name: 'Gemme corrotte 1d4', nameEN: 'Corrupted gems 1d4' },
        { roll: 4, name: 'Ingredienti per rituale (valore narrativo)', nameEN: 'Ritual ingredients (narrative value)' },
        { roll: 5, name: 'Amuleto maledetto minore (DM)', nameEN: 'Minor cursed amulet (DM)' },
        { roll: 6, name: 'Monete d\'oro corrotte 2d10', nameEN: 'Corrupted gold coins 2d10' },
        { roll: 7, name: 'Libro di ricette oscure (valore narrativo)', nameEN: 'Dark recipe book (narrative value)' },
        { roll: 8, name: 'Simbolo fatato corrotto funzionale', nameEN: 'Functional corrupted fey symbol' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Pergamena incantesimo 2-3° livello (oscuro)', nameEN: 'Spell scroll 2nd-3rd level (dark)' },
        { roll: 2, name: 'Pozione di Guarigione Superiore (rubata)', nameEN: 'Potion of Greater Healing (stolen)' },
        { roll: 3, name: 'Gemme preziose corrotte 1d4', nameEN: 'Corrupted precious gems 1d4' },
        { roll: 4, name: 'Anello di Protezione maledetto', nameEN: 'Cursed Ring of Protection' },
        { roll: 5, name: 'Mantello dell\'Elfo corrotto', nameEN: 'Corrupted Cloak of Elvenkind' },
        { roll: 6, name: 'Bacchetta corrotta (effetto DM)', nameEN: 'Corrupted wand (DM effect)' },
        { roll: 7, name: 'Libro degli incantesimi oscuro parziale', nameEN: 'Partial dark spellbook' },
        { roll: 8, name: 'Amuleto della Salute corrotto', nameEN: 'Corrupted Amulet of Health' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 2, name: 'Mantello di Spostamento corrotto', nameEN: 'Corrupted Cloak of Displacement' },
        { roll: 3, name: 'Gemme rare corrotte 1d4', nameEN: 'Corrupted rare gems 1d4' },
        { roll: 4, name: 'Anello dell\'Evasione corrotto', nameEN: 'Corrupted Ring of Evasion' },
        { roll: 5, name: 'Libro degli incantesimi oscuro completo', nameEN: 'Complete dark spellbook' },
        { roll: 6, name: 'Diadema dell\'Intelletto corrotto', nameEN: 'Corrupted Circlet of Intellect' },
        { roll: 7, name: 'Bacchetta delle Meraviglie corrotta', nameEN: 'Corrupted Wand of Wonder' },
        { roll: 8, name: 'Reliquia fatata oscura (effetto DM)', nameEN: 'Dark fey relic (DM effect)' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 2, name: 'Mantello dell\'Invisibilità corrotto', nameEN: 'Corrupted Cloak of Invisibility' },
        { roll: 3, name: 'Anello dei Tre Desideri corrotto (maledetto)', nameEN: 'Corrupted Ring of Three Wishes (cursed)' },
        { roll: 4, name: 'Corona delle Fate Oscure', nameEN: 'Crown of the Dark Fey' },
        { roll: 5, name: 'Reliquia maledetta leggendaria (effetto DM)', nameEN: 'Legendary cursed relic (DM effect)' },
        { roll: 6, name: 'Sfera di Cristallo oscura', nameEN: 'Dark Crystal Ball' },
        { roll: 7, name: 'Tomo della Comprensione oscuro', nameEN: 'Dark Tome of Understanding' },
        { roll: 8, name: 'Bacchetta leggendaria corrotta', nameEN: 'Corrupted legendary wand' },
      ]},
    ],
  },

  // 5.14 Giganti
  {
    id: 'giants',
    name: 'Giganti',
    nameEN: 'Giants',
    description: 'Hill giant, stone giant, storm giant. Oggetti rubati o raccolti, spesso danneggiati.',
    descriptionEN: 'Hill giants, stone giants, storm giants. Stolen or collected items, often damaged.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: '4d6 mo (dalla tasca)', nameEN: '4d6 gp (from pocket)' },
        { roll: 2, name: 'Gemme grezze 1d4 (ciondoli)', nameEN: 'Rough gems 1d4 (pendants)' },
        { roll: 3, name: 'Arma taglia enorme inutilizzabile', nameEN: 'Huge-sized unusable weapon' },
        { roll: 4, name: 'Oggetto mundano schiacciato (nessun valore)', nameEN: 'Crushed mundane object (no value)' },
        { roll: 5, name: 'Osso enorme intagliato (nessun potere)', nameEN: 'Huge carved bone (no power)' },
        { roll: 6, name: 'Pelle animale grezza (nessun valore)', nameEN: 'Raw animal hide (no value)' },
        { roll: 7, name: 'Monete antiche schiacciate 1d10', nameEN: 'Crushed ancient coins 1d10' },
        { roll: 8, name: 'Pietra decorativa (nessun potere)', nameEN: 'Decorative stone (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: '2d10×10 mo', nameEN: '2d10×10 gp' },
        { roll: 2, name: 'Gemme semipreziose 1d4', nameEN: 'Semi-precious gems 1d4' },
        { roll: 3, name: 'Arma taglia normale ben conservata (rubata)', nameEN: 'Well-preserved normal-sized weapon (stolen)' },
        { roll: 4, name: 'Pozione di Guarigione (rubata)', nameEN: 'Potion of Healing (stolen)' },
        { roll: 5, name: 'Gioiello rozzo (2d6×50 mo)', nameEN: 'Crude jewel (2d6×50 gp)' },
        { roll: 6, name: 'Pergamena incantesimo 1° livello (rubata)', nameEN: 'Spell scroll 1st level (stolen)' },
        { roll: 7, name: 'Scultura rozza (2d6×100 mo)', nameEN: 'Crude sculpture (2d6×100 gp)' },
        { roll: 8, name: 'Armatura taglia normale (rubata)', nameEN: 'Normal-sized armor (stolen)' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: '2d10×100 mo', nameEN: '2d10×100 gp' },
        { roll: 2, name: 'Gemme preziose 1d4', nameEN: 'Precious gems 1d4' },
        { roll: 3, name: 'Spada lunga +1 (rubata)', nameEN: 'Longsword +1 (stolen)' },
        { roll: 4, name: 'Armatura a maglie +1 (rubata)', nameEN: 'Chain mail +1 (stolen)' },
        { roll: 5, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
        { roll: 6, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 7, name: 'Gioiello antico (2d6×250 mo)', nameEN: 'Antique jewel (2d6×250 gp)' },
        { roll: 8, name: 'Anello di Protezione (rubato)', nameEN: 'Ring of Protection (stolen)' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: '2d10×500 mo + gemme rare', nameEN: '2d10×500 gp + rare gems' },
        { roll: 2, name: 'Spada lunga +2 (rubata, con storia)', nameEN: 'Longsword +2 (stolen, with history)' },
        { roll: 3, name: 'Armatura a piastre +1 (rubata)', nameEN: 'Plate armor +1 (stolen)' },
        { roll: 4, name: 'Mantello di Spostamento (rubato)', nameEN: 'Cloak of Displacement (stolen)' },
        { roll: 5, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 6, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
        { roll: 7, name: 'Opera d\'arte leggendaria (2d6×1000 mo)', nameEN: 'Legendary art piece (2d6×1000 gp)' },
        { roll: 8, name: 'Scudo +2 (rubato)', nameEN: 'Shield +2 (stolen)' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: '2d10×1000 mo + gemme leggendarie', nameEN: '2d10×1000 gp + legendary gems' },
        { roll: 2, name: 'Spada lunga +3 (leggendaria, con nome)', nameEN: 'Longsword +3 (legendary, named)' },
        { roll: 3, name: 'Armatura a piastre +2 (leggendaria)', nameEN: 'Plate armor +2 (legendary)' },
        { roll: 4, name: 'Mantello dell\'Invisibilità', nameEN: 'Cloak of Invisibility' },
        { roll: 5, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 6, name: 'Bastone dei Maghi (rubato)', nameEN: 'Staff of the Magi (stolen)' },
        { roll: 7, name: 'Anello dei Tre Desideri', nameEN: 'Ring of Three Wishes' },
        { roll: 8, name: 'Reliquia dei giganti (effetto DM)', nameEN: 'Giant relic (DM effect)' },
      ]},
    ],
  },

  // 5.15 Melme & Ooze
  {
    id: 'oozes',
    name: 'Melme & Ooze',
    nameEN: 'Oozes & Slimes',
    description: 'Black pudding, gelatinous cube. Solo resistenti agli acidi. Prob. speciali. Nessun Leggendario.',
    descriptionEN: 'Black puddings, gelatinous cubes. Acid-resistant items only. Special probabilities. No Legendary.',
    probabilityTable: 'Melme',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Monete corrose 1d6 (vittima prec.)', nameEN: 'Corroded coins 1d6 (prev. victim)' },
        { roll: 2, name: 'Gemma grezza resistente agli acidi', nameEN: 'Acid-resistant rough gem' },
        { roll: 3, name: 'Frammento metallico inutilizzabile (vittima prec.)', nameEN: 'Unusable metal fragment (prev. victim)' },
        { roll: 4, name: 'Anello semplice corroso (vittima prec.)', nameEN: 'Corroded simple ring (prev. victim)' },
        { roll: 5, name: 'Amuleto parzialmente dissolto (vittima prec.)', nameEN: 'Partially dissolved amulet (prev. victim)' },
        { roll: 6, name: 'Pietra resistente agli acidi (nessun potere)', nameEN: 'Acid-resistant stone (no power)' },
        { roll: 7, name: 'Monete d\'oro 1d10 resistenti alla dissoluzione', nameEN: 'Dissolution-resistant gold coins 1d10' },
        { roll: 8, name: 'Dente o osso resistente (nessun potere)', nameEN: 'Resistant tooth or bone (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Monete 2d10 resistenti alla dissoluzione', nameEN: 'Dissolution-resistant coins 2d10' },
        { roll: 2, name: 'Gemme semipreziose 1d4 (insolubili)', nameEN: 'Insoluble semi-precious gems 1d4' },
        { roll: 3, name: 'Anello d\'argento integro (vittima prec.)', nameEN: 'Intact silver ring (prev. victim)' },
        { roll: 4, name: 'Amuleto integro (vittima prec.)', nameEN: 'Intact amulet (prev. victim)' },
        { roll: 5, name: 'Pergamena magica resistente (1° livello)', nameEN: 'Resistant magic scroll (1st level)' },
        { roll: 6, name: 'Gemme luminose resistenti 1d4', nameEN: 'Resistant luminous gems 1d4' },
        { roll: 7, name: 'Pozione integra (Guarigione)', nameEN: 'Intact potion (Healing)' },
        { roll: 8, name: 'Gioiello resistente (2d6×10 mo)', nameEN: 'Resistant jewel (2d6×10 gp)' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Gemme preziose resistenti 1d4', nameEN: 'Resistant precious gems 1d4' },
        { roll: 2, name: 'Anello di Protezione (vittima prec.)', nameEN: 'Ring of Protection (prev. victim)' },
        { roll: 3, name: 'Amuleto della Salute (vittima prec.)', nameEN: 'Amulet of Health (prev. victim)' },
        { roll: 4, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 5, name: 'Pozione di Guarigione Superiore integra', nameEN: 'Intact Potion of Greater Healing' },
        { roll: 6, name: 'Medaglione dei Pensieri (vittima prec.)', nameEN: 'Medallion of Thoughts (prev. victim)' },
        { roll: 7, name: 'Gioiello raro resistente (2d6×100 mo)', nameEN: 'Resistant rare jewel (2d6×100 gp)' },
        { roll: 8, name: 'Anello di Resistenza agli Elementi', nameEN: 'Ring of Elemental Resistance' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Gemme rare resistenti 1d4', nameEN: 'Resistant rare gems 1d4' },
        { roll: 2, name: 'Anello dell\'Evasione', nameEN: 'Ring of Evasion' },
        { roll: 3, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 4, name: 'Anello di Resistenza agli Incantesimi', nameEN: 'Ring of Spell Turning' },
        { roll: 5, name: 'Sfera di Cristallo integra (vittima prec.)', nameEN: 'Intact Crystal Ball (prev. victim)' },
        { roll: 6, name: 'Diadema dell\'Intelletto (vittima prec.)', nameEN: 'Circlet of Intellect (prev. victim)' },
        { roll: 7, name: 'Gioiello leggendario resistente (2d6×500 mo)', nameEN: 'Resistant legendary jewel (2d6×500 gp)' },
        { roll: 8, name: 'Reliquia resistente (effetto DM)', nameEN: 'Resistant relic (DM effect)' },
      ]},
    ],
  },

  // 5.16 Piante
  {
    id: 'plants',
    name: 'Piante',
    nameEN: 'Plants',
    description: 'Treant, violet fungus, shambling mound. Prob. speciali. Nessun Leggendario.',
    descriptionEN: 'Treants, violet fungi, shambling mounds. Special probabilities. No Legendary.',
    probabilityTable: 'Piante',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Bacche velenose (nessun potere mec.)', nameEN: 'Poisonous berries (no mechanical power)' },
        { roll: 2, name: 'Monete 1d6 (vittima prec.)', nameEN: 'Coins 1d6 (prev. victim)' },
        { roll: 3, name: 'Radice rara (nessun potere mec.)', nameEN: 'Rare root (no mechanical power)' },
        { roll: 4, name: 'Gemma grezza intrappolata nella corteccia', nameEN: 'Rough gem trapped in bark' },
        { roll: 5, name: 'Seme magico dormiente (nessun potere)', nameEN: 'Dormant magical seed (no power)' },
        { roll: 6, name: 'Anello semplice (vittima prec.)', nameEN: 'Simple ring (prev. victim)' },
        { roll: 7, name: 'Frammento di legno duro (nessun valore)', nameEN: 'Hardwood fragment (no value)' },
        { roll: 8, name: 'Amuleto intrappolato (vittima prec.)', nameEN: 'Trapped amulet (prev. victim)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Monete 2d10 (vittima prec.)', nameEN: 'Coins 2d10 (prev. victim)' },
        { roll: 2, name: 'Gemme grezze 1d4 (intrappolate)', nameEN: 'Rough gems 1d4 (trapped)' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (vittima prec.)', nameEN: 'Spell scroll 1st level (prev. victim)' },
        { roll: 4, name: 'Pozione di Guarigione (vittima prec.)', nameEN: 'Potion of Healing (prev. victim)' },
        { roll: 5, name: 'Anello d\'argento (vittima prec.)', nameEN: 'Silver ring (prev. victim)' },
        { roll: 6, name: 'Amuleto della natura funzionale', nameEN: 'Functional nature amulet' },
        { roll: 7, name: 'Seme magico attivo (effetto DM)', nameEN: 'Active magical seed (DM effect)' },
        { roll: 8, name: 'Gioiello intrappolato (2d6×10 mo)', nameEN: 'Trapped jewel (2d6×10 gp)' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Gemme preziose 1d4', nameEN: 'Precious gems 1d4' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 3, name: 'Anello di Protezione (vittima prec.)', nameEN: 'Ring of Protection (prev. victim)' },
        { roll: 4, name: 'Pozione di Guarigione Superiore', nameEN: 'Potion of Greater Healing' },
        { roll: 5, name: 'Amuleto della Salute (vittima prec.)', nameEN: 'Amulet of Health (prev. victim)' },
        { roll: 6, name: 'Bastone druidico +1 (cresciuto nella pianta)', nameEN: 'Druidic staff +1 (grown in plant)' },
        { roll: 7, name: 'Gioiello raro (2d6×100 mo)', nameEN: 'Rare jewel (2d6×100 gp)' },
        { roll: 8, name: 'Seme leggendario (effetto narrativo enorme)', nameEN: 'Legendary seed (enormous narrative effect)' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Gemme rare 1d4', nameEN: 'Rare gems 1d4' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Bastone druidico +2', nameEN: 'Druidic staff +2' },
        { roll: 4, name: 'Anello della natura (effetto DM)', nameEN: 'Ring of Nature (DM effect)' },
        { roll: 5, name: 'Mantello dell\'Elfo superiore', nameEN: 'Greater Cloak of Elvenkind' },
        { roll: 6, name: 'Diadema vegetale (effetto DM)', nameEN: 'Plant diadem (DM effect)' },
        { roll: 7, name: 'Reliquia naturale unica (effetto DM)', nameEN: 'Unique natural relic (DM effect)' },
        { roll: 8, name: 'Seme leggendario potenziato', nameEN: 'Enhanced legendary seed' },
      ]},
    ],
  },

  // 5.17 Elementali — Fuoco
  {
    id: 'elemental-fire',
    name: 'Elementali — Fuoco',
    nameEN: 'Elementals — Fire',
    description: 'Fire elemental, salamander, azer, magmin.',
    descriptionEN: 'Fire elementals, salamanders, azers, magmins.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Cenere magica (nessun potere)', nameEN: 'Magical ash (no power)' },
        { roll: 2, name: 'Pietra vulcanica rara (nessun potere)', nameEN: 'Rare volcanic stone (no power)' },
        { roll: 3, name: 'Monete fuse e deformate (nessun valore)', nameEN: 'Melted and warped coins (no value)' },
        { roll: 4, name: 'Cristallo di fuoco grezzo (nessun potere)', nameEN: 'Rough fire crystal (no power)' },
        { roll: 5, name: 'Frammento di ossidiana (nessun potere)', nameEN: 'Obsidian fragment (no power)' },
        { roll: 6, name: 'Gemma grezza annerita', nameEN: 'Blackened rough gem' },
        { roll: 7, name: 'Simbolo elementale del fuoco (nessun potere)', nameEN: 'Fire elemental symbol (no power)' },
        { roll: 8, name: 'Carbone magico (nessun potere)', nameEN: 'Magical coal (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Cristallo di fuoco (focus arcano)', nameEN: 'Fire crystal (arcane focus)' },
        { roll: 2, name: 'Gemme grezze 1d4 (resistenti al fuoco)', nameEN: 'Rough gems 1d4 (fire-resistant)' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (fuoco)', nameEN: 'Spell scroll 1st level (fire)' },
        { roll: 4, name: 'Pozione di Resistenza al Fuoco', nameEN: 'Potion of Fire Resistance' },
        { roll: 5, name: 'Pietra vulcanica lavorata (2d6×10 mo)', nameEN: 'Crafted volcanic stone (2d6×10 gp)' },
        { roll: 6, name: 'Amuleto resistenza fuoco minore', nameEN: 'Minor fire resistance amulet' },
        { roll: 7, name: 'Monete d\'oro fuse recuperabili 2d10', nameEN: 'Recoverable melted gold coins 2d10' },
        { roll: 8, name: 'Simbolo elementale funzionale', nameEN: 'Functional elemental symbol' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Cristallo di fuoco superiore (focus arcano)', nameEN: 'Greater fire crystal (arcane focus)' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello (fuoco)', nameEN: 'Spell scroll 2nd-3rd level (fire)' },
        { roll: 3, name: 'Anello di Resistenza al Fuoco', nameEN: 'Ring of Fire Resistance' },
        { roll: 4, name: 'Gemme preziose resistenti al fuoco 1d4', nameEN: 'Fire-resistant precious gems 1d4' },
        { roll: 5, name: 'Pozione di Resistenza al Fuoco superiore', nameEN: 'Greater Potion of Fire Resistance' },
        { roll: 6, name: 'Armatura +1 resistente al fuoco', nameEN: 'Armor +1 fire-resistant' },
        { roll: 7, name: 'Pietra del fuoco elementale (effetto DM)', nameEN: 'Elemental fire stone (DM effect)' },
        { roll: 8, name: 'Amuleto resistenza al fuoco', nameEN: 'Fire resistance amulet' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Cristallo di fuoco leggendario (effetto DM)', nameEN: 'Legendary fire crystal (DM effect)' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Anello di Immunità al Fuoco', nameEN: 'Ring of Fire Immunity' },
        { roll: 4, name: 'Armatura +2 resistente al fuoco', nameEN: 'Armor +2 fire-resistant' },
        { roll: 5, name: 'Mantello di resistenza al fuoco', nameEN: 'Cloak of fire resistance' },
        { roll: 6, name: 'Gemme rare elementali 1d4', nameEN: 'Rare elemental gems 1d4' },
        { roll: 7, name: 'Spada Fiammeggiante +2', nameEN: 'Flame Tongue Sword +2' },
        { roll: 8, name: 'Reliquia elementale del fuoco', nameEN: 'Fire elemental relic' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Cuore elementale del fuoco (potere unico DM)', nameEN: 'Fire elemental heart (unique DM power)' },
        { roll: 2, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 3, name: 'Spada Fiammeggiante +3', nameEN: 'Flame Tongue Sword +3' },
        { roll: 4, name: 'Armatura +2 con immunità al fuoco', nameEN: 'Armor +2 with fire immunity' },
        { roll: 5, name: 'Anello dei Tre Desideri elementale', nameEN: 'Elemental Ring of Three Wishes' },
        { roll: 6, name: 'Mantello dell\'Invisibilità elementale', nameEN: 'Elemental Cloak of Invisibility' },
        { roll: 7, name: 'Bastone del fuoco leggendario', nameEN: 'Legendary staff of fire' },
        { roll: 8, name: 'Reliquia elementale leggendaria', nameEN: 'Legendary elemental relic' },
      ]},
    ],
  },

  // 5.18 Elementali — Acqua
  {
    id: 'elemental-water',
    name: 'Elementali — Acqua',
    nameEN: 'Elementals — Water',
    description: 'Water elemental, marid, merrow.',
    descriptionEN: 'Water elementals, marids, merrow.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Perla grezza (nessun potere)', nameEN: 'Rough pearl (no power)' },
        { roll: 2, name: 'Conchiglia rara (nessun potere)', nameEN: 'Rare shell (no power)' },
        { roll: 3, name: 'Pietra levigata dall\'acqua (nessun potere)', nameEN: 'Water-smoothed stone (no power)' },
        { roll: 4, name: 'Cristallo d\'acqua grezzo (nessun potere)', nameEN: 'Rough water crystal (no power)' },
        { roll: 5, name: 'Alghe magiche essiccate (nessun potere)', nameEN: 'Dried magical algae (no power)' },
        { roll: 6, name: 'Gemma grezza bagnata', nameEN: 'Wet rough gem' },
        { roll: 7, name: 'Simbolo elementale dell\'acqua (nessun potere)', nameEN: 'Water elemental symbol (no power)' },
        { roll: 8, name: 'Sale marino cristallizzato (nessun potere)', nameEN: 'Crystallized sea salt (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Cristallo d\'acqua (focus arcano)', nameEN: 'Water crystal (arcane focus)' },
        { roll: 2, name: 'Perle semipreziose 1d4', nameEN: 'Semi-precious pearls 1d4' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (acqua)', nameEN: 'Spell scroll 1st level (water)' },
        { roll: 4, name: 'Pozione di Respirazione Acquatica', nameEN: 'Potion of Water Breathing' },
        { roll: 5, name: 'Pietra marina lavorata (2d6×10 mo)', nameEN: 'Crafted sea stone (2d6×10 gp)' },
        { roll: 6, name: 'Amuleto resistenza freddo minore', nameEN: 'Minor cold resistance amulet' },
        { roll: 7, name: 'Monete recuperate dal fondale 2d10', nameEN: 'Seabed-recovered coins 2d10' },
        { roll: 8, name: 'Simbolo elementale funzionale', nameEN: 'Functional elemental symbol' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Cristallo d\'acqua superiore (focus arcano)', nameEN: 'Greater water crystal (arcane focus)' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 3, name: 'Anello di Resistenza al Freddo', nameEN: 'Ring of Cold Resistance' },
        { roll: 4, name: 'Perle preziose 1d4', nameEN: 'Precious pearls 1d4' },
        { roll: 5, name: 'Pozione Respirazione Acquatica superiore', nameEN: 'Greater Potion of Water Breathing' },
        { roll: 6, name: 'Stivali del camminatore sulle acque', nameEN: 'Boots of Water Walking' },
        { roll: 7, name: 'Amuleto della resistenza al freddo', nameEN: 'Amulet of Cold Resistance' },
        { roll: 8, name: 'Tridente +1 elementale', nameEN: 'Elemental trident +1' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Cristallo d\'acqua leggendario (effetto DM)', nameEN: 'Legendary water crystal (DM effect)' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Anello di Immunità al Freddo', nameEN: 'Ring of Cold Immunity' },
        { roll: 4, name: 'Perle rare 1d4', nameEN: 'Rare pearls 1d4' },
        { roll: 5, name: 'Mantello di resistenza al freddo', nameEN: 'Cloak of cold resistance' },
        { roll: 6, name: 'Tridente +2 elementale', nameEN: 'Elemental trident +2' },
        { roll: 7, name: 'Stivali del camminatore sulle acque sup.', nameEN: 'Greater Boots of Water Walking' },
        { roll: 8, name: 'Reliquia elementale dell\'acqua', nameEN: 'Water elemental relic' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Cuore elementale dell\'acqua (potere unico DM)', nameEN: 'Water elemental heart (unique DM power)' },
        { roll: 2, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 3, name: 'Tridente +3 elementale', nameEN: 'Elemental trident +3' },
        { roll: 4, name: 'Anello dei Tre Desideri elementale', nameEN: 'Elemental Ring of Three Wishes' },
        { roll: 5, name: 'Mantello dell\'Invisibilità elementale', nameEN: 'Elemental Cloak of Invisibility' },
        { roll: 6, name: 'Bastone dell\'acqua leggendario', nameEN: 'Legendary staff of water' },
        { roll: 7, name: 'Perle leggendarie 1d4', nameEN: 'Legendary pearls 1d4' },
        { roll: 8, name: 'Reliquia elementale leggendaria', nameEN: 'Legendary elemental relic' },
      ]},
    ],
  },

  // 5.19 Elementali — Terra
  {
    id: 'elemental-earth',
    name: 'Elementali — Terra',
    nameEN: 'Elementals — Earth',
    description: 'Earth elemental, dao, gargoyle.',
    descriptionEN: 'Earth elementals, dao, gargoyles.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Pietra rara non lavorata (nessun potere)', nameEN: 'Unworked rare stone (no power)' },
        { roll: 2, name: 'Cristallo di terra grezzo (nessun potere)', nameEN: 'Rough earth crystal (no power)' },
        { roll: 3, name: 'Gemma grezza estratta (nessun potere)', nameEN: 'Extracted rough gem (no power)' },
        { roll: 4, name: 'Minerale raro grezzo (nessun potere)', nameEN: 'Rough rare mineral (no power)' },
        { roll: 5, name: 'Frammento di roccia magica (nessun potere)', nameEN: 'Magical rock fragment (no power)' },
        { roll: 6, name: 'Polvere di pietra magica (nessun potere)', nameEN: 'Magical stone dust (no power)' },
        { roll: 7, name: 'Simbolo elementale della terra (nessun potere)', nameEN: 'Earth elemental symbol (no power)' },
        { roll: 8, name: 'Cristallo di quarzo grezzo', nameEN: 'Rough quartz crystal' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Cristallo di terra (focus arcano)', nameEN: 'Earth crystal (arcane focus)' },
        { roll: 2, name: 'Gemme grezze 1d4', nameEN: 'Rough gems 1d4' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (terra)', nameEN: 'Spell scroll 1st level (earth)' },
        { roll: 4, name: 'Minerale raro lavorato (2d6×10 mo)', nameEN: 'Crafted rare mineral (2d6×10 gp)' },
        { roll: 5, name: 'Pozione di Resistenza agli Acidi', nameEN: 'Potion of Acid Resistance' },
        { roll: 6, name: 'Amuleto resistenza acidi minore', nameEN: 'Minor acid resistance amulet' },
        { roll: 7, name: 'Monete estratte dalla roccia 2d10', nameEN: 'Rock-extracted coins 2d10' },
        { roll: 8, name: 'Simbolo elementale funzionale', nameEN: 'Functional elemental symbol' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Cristallo di terra superiore (focus arcano)', nameEN: 'Greater earth crystal (arcane focus)' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 3, name: 'Anello di Resistenza agli Acidi', nameEN: 'Ring of Acid Resistance' },
        { roll: 4, name: 'Gemme preziose 1d4', nameEN: 'Precious gems 1d4' },
        { roll: 5, name: 'Armatura di pietra +1 (pesante, elementale)', nameEN: 'Stone armor +1 (heavy, elemental)' },
        { roll: 6, name: 'Amuleto della resistenza alla pietra', nameEN: 'Amulet of stone resistance' },
        { roll: 7, name: 'Minerale leggendario grezzo (2d6×100 mo)', nameEN: 'Rough legendary mineral (2d6×100 gp)' },
        { roll: 8, name: 'Scudo di pietra +1 elementale', nameEN: 'Elemental stone shield +1' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Cristallo di terra leggendario (effetto DM)', nameEN: 'Legendary earth crystal (DM effect)' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Anello di Immunità agli Acidi', nameEN: 'Ring of Acid Immunity' },
        { roll: 4, name: 'Gemme rare 1d4', nameEN: 'Rare gems 1d4' },
        { roll: 5, name: 'Armatura di pietra +2', nameEN: 'Stone armor +2' },
        { roll: 6, name: 'Scudo di pietra +2 elementale', nameEN: 'Elemental stone shield +2' },
        { roll: 7, name: 'Minerale rarissimo (2d6×500 mo)', nameEN: 'Very rare mineral (2d6×500 gp)' },
        { roll: 8, name: 'Reliquia elementale della terra', nameEN: 'Earth elemental relic' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Cuore elementale della terra (potere unico DM)', nameEN: 'Earth elemental heart (unique DM power)' },
        { roll: 2, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 3, name: 'Armatura di pietra +3 leggendaria', nameEN: 'Legendary stone armor +3' },
        { roll: 4, name: 'Anello dei Tre Desideri elementale', nameEN: 'Elemental Ring of Three Wishes' },
        { roll: 5, name: 'Mantello dell\'Invisibilità elementale', nameEN: 'Elemental Cloak of Invisibility' },
        { roll: 6, name: 'Bastone della terra leggendario', nameEN: 'Legendary staff of earth' },
        { roll: 7, name: 'Gemme leggendarie 1d4', nameEN: 'Legendary gems 1d4' },
        { roll: 8, name: 'Reliquia elementale leggendaria', nameEN: 'Legendary elemental relic' },
      ]},
    ],
  },

  // 5.20 Elementali — Aria
  {
    id: 'elemental-air',
    name: 'Elementali — Aria',
    nameEN: 'Elementals — Air',
    description: 'Air elemental, djinni, invisible stalker.',
    descriptionEN: 'Air elementals, djinn, invisible stalkers.',
    probabilityTable: 'Standard',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Piuma rara (nessun potere)', nameEN: 'Rare feather (no power)' },
        { roll: 2, name: 'Cristallo d\'aria grezzo (nessun potere)', nameEN: 'Rough air crystal (no power)' },
        { roll: 3, name: 'Polvere di vento cristallizzata (nessun potere)', nameEN: 'Crystallized wind dust (no power)' },
        { roll: 4, name: 'Gemma grezza trasparente', nameEN: 'Transparent rough gem' },
        { roll: 5, name: 'Frammento di nuvola solidificata (nessun potere)', nameEN: 'Solidified cloud fragment (no power)' },
        { roll: 6, name: 'Simbolo elementale dell\'aria (nessun potere)', nameEN: 'Air elemental symbol (no power)' },
        { roll: 7, name: 'Pietra levigata dal vento (nessun potere)', nameEN: 'Wind-smoothed stone (no power)' },
        { roll: 8, name: 'Piuma magica (nessun potere)', nameEN: 'Magical feather (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Cristallo d\'aria (focus arcano)', nameEN: 'Air crystal (arcane focus)' },
        { roll: 2, name: 'Gemme grezze trasparenti 1d4', nameEN: 'Transparent rough gems 1d4' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (aria)', nameEN: 'Spell scroll 1st level (air)' },
        { roll: 4, name: 'Pozione di Volare minore (effetto DM)', nameEN: 'Minor Potion of Flying (DM effect)' },
        { roll: 5, name: 'Piume rare preziose (2d6×10 mo)', nameEN: 'Precious rare feathers (2d6×10 gp)' },
        { roll: 6, name: 'Amuleto della caduta lenta', nameEN: 'Amulet of Slow Falling' },
        { roll: 7, name: 'Monete portate dal vento 2d10', nameEN: 'Wind-carried coins 2d10' },
        { roll: 8, name: 'Simbolo elementale funzionale', nameEN: 'Functional elemental symbol' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Cristallo d\'aria superiore (focus arcano)', nameEN: 'Greater air crystal (arcane focus)' },
        { roll: 2, name: 'Pergamena incantesimo 2-3° livello', nameEN: 'Spell scroll 2nd-3rd level' },
        { roll: 3, name: 'Anello di Caduta Lenta', nameEN: 'Ring of Feather Falling' },
        { roll: 4, name: 'Gemme trasparenti preziose 1d4', nameEN: 'Precious transparent gems 1d4' },
        { roll: 5, name: 'Stivali del vento (effetto DM)', nameEN: 'Boots of the Wind (DM effect)' },
        { roll: 6, name: 'Mantello della resistenza al fulmine', nameEN: 'Cloak of lightning resistance' },
        { roll: 7, name: 'Piume leggendarie (2d6×100 mo)', nameEN: 'Legendary feathers (2d6×100 gp)' },
        { roll: 8, name: 'Arco del vento +1', nameEN: 'Wind bow +1' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Cristallo d\'aria leggendario (effetto DM)', nameEN: 'Legendary air crystal (DM effect)' },
        { roll: 2, name: 'Pergamena incantesimo 4-5° livello', nameEN: 'Spell scroll 4th-5th level' },
        { roll: 3, name: 'Anello di Immunità al Fulmine', nameEN: 'Ring of Lightning Immunity' },
        { roll: 4, name: 'Stivali del vento superiori', nameEN: 'Greater Boots of the Wind' },
        { roll: 5, name: 'Mantello dell\'Invisibilità elementale', nameEN: 'Elemental Cloak of Invisibility' },
        { roll: 6, name: 'Arco del vento +2', nameEN: 'Wind bow +2' },
        { roll: 7, name: 'Gemme trasparenti rare 1d4', nameEN: 'Rare transparent gems 1d4' },
        { roll: 8, name: 'Reliquia elementale dell\'aria', nameEN: 'Air elemental relic' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Cuore elementale dell\'aria (potere unico DM)', nameEN: 'Air elemental heart (unique DM power)' },
        { roll: 2, name: 'Pergamena incantesimo 6-9° livello', nameEN: 'Spell scroll 6th-9th level' },
        { roll: 3, name: 'Arco del vento +3', nameEN: 'Wind bow +3' },
        { roll: 4, name: 'Anello dei Tre Desideri elementale', nameEN: 'Elemental Ring of Three Wishes' },
        { roll: 5, name: 'Mantello dell\'Invisibilità elementale sup.', nameEN: 'Greater Elemental Cloak of Invisibility' },
        { roll: 6, name: 'Bastone dell\'aria leggendario', nameEN: 'Legendary staff of air' },
        { roll: 7, name: 'Gemme trasparenti leggendarie 1d4', nameEN: 'Legendary transparent gems 1d4' },
        { roll: 8, name: 'Reliquia elementale leggendaria', nameEN: 'Legendary elemental relic' },
      ]},
    ],
  },

  // 5.21 Celestiali
  {
    id: 'celestials',
    name: 'Celestiali',
    nameEN: 'Celestials',
    description: 'Angelici, pegaso, unicorno, couatl. Probabilità speciali (Sez. 2).',
    descriptionEN: 'Angels, pegasi, unicorns, couatl. Special probabilities (Sec. 2).',
    probabilityTable: 'Celestiali',
    rarities: [
      { rarity: 'Comune', items: [
        { roll: 1, name: 'Piuma celestiale (nessun potere meccanico)', nameEN: 'Celestial feather (no mechanical power)' },
        { roll: 2, name: 'Simbolo sacro semplice', nameEN: 'Simple holy symbol' },
        { roll: 3, name: 'Monete d\'oro benedette 1d6', nameEN: 'Blessed gold coins 1d6' },
        { roll: 4, name: 'Cristallo di luce grezzo (nessun potere)', nameEN: 'Rough light crystal (no power)' },
        { roll: 5, name: 'Pergamena di preghiera (nessun potere)', nameEN: 'Prayer scroll (no power)' },
        { roll: 6, name: 'Gemma grezza luminosa', nameEN: 'Luminous rough gem' },
        { roll: 7, name: 'Amuleto sacro semplice (nessun potere)', nameEN: 'Simple holy amulet (no power)' },
        { roll: 8, name: 'Pietra benedetta (nessun potere)', nameEN: 'Blessed stone (no power)' },
      ]},
      { rarity: 'Non Comune', items: [
        { roll: 1, name: 'Simbolo sacro funzionale', nameEN: 'Functional holy symbol' },
        { roll: 2, name: 'Pozione di Guarigione benedetta', nameEN: 'Blessed Potion of Healing' },
        { roll: 3, name: 'Pergamena incantesimo 1° livello (divino)', nameEN: 'Spell scroll 1st level (divine)' },
        { roll: 4, name: 'Gemme luminose 1d4', nameEN: 'Luminous gems 1d4' },
        { roll: 5, name: 'Monete d\'oro benedette 2d10', nameEN: 'Blessed gold coins 2d10' },
        { roll: 6, name: 'Amuleto della protezione sacra minore', nameEN: 'Minor holy protection amulet' },
        { roll: 7, name: 'Piume celestiali preziose (2d6×10 mo)', nameEN: 'Precious celestial feathers (2d6×10 gp)' },
        { roll: 8, name: 'Cristallo di luce (focus divino)', nameEN: 'Light crystal (divine focus)' },
      ]},
      { rarity: 'Raro', items: [
        { roll: 1, name: 'Pergamena incantesimo 2-3° livello (divino)', nameEN: 'Spell scroll 2nd-3rd level (divine)' },
        { roll: 2, name: 'Simbolo sacro +1', nameEN: 'Holy symbol +1' },
        { roll: 3, name: 'Armatura benedetta +1', nameEN: 'Blessed armor +1' },
        { roll: 4, name: 'Pozione di Guarigione Superiore benedetta', nameEN: 'Blessed Potion of Greater Healing' },
        { roll: 5, name: 'Anello di Protezione sacra', nameEN: 'Holy Ring of Protection' },
        { roll: 6, name: 'Gemme celestiali rare 1d4', nameEN: 'Rare celestial gems 1d4' },
        { roll: 7, name: 'Amuleto della Salute benedetto', nameEN: 'Blessed Amulet of Health' },
        { roll: 8, name: 'Scudo sacro +1', nameEN: 'Holy shield +1' },
      ]},
      { rarity: 'Epico', items: [
        { roll: 1, name: 'Pergamena incantesimo 4-5° livello (divino)', nameEN: 'Spell scroll 4th-5th level (divine)' },
        { roll: 2, name: 'Armatura benedetta +2', nameEN: 'Blessed armor +2' },
        { roll: 3, name: 'Spada sacra +2', nameEN: 'Holy sword +2' },
        { roll: 4, name: 'Anello di Resistenza agli Incantesimi sacro', nameEN: 'Holy Ring of Spell Turning' },
        { roll: 5, name: 'Mantello di Spostamento benedetto', nameEN: 'Blessed Cloak of Displacement' },
        { roll: 6, name: 'Gemme celestiali 1d4', nameEN: 'Celestial gems 1d4' },
        { roll: 7, name: 'Diadema della saggezza celestiale', nameEN: 'Celestial diadem of wisdom' },
        { roll: 8, name: 'Scudo sacro +2', nameEN: 'Holy shield +2' },
      ]},
      { rarity: 'Leggendario', items: [
        { roll: 1, name: 'Pergamena incantesimo 6-9° livello (divino)', nameEN: 'Spell scroll 6th-9th level (divine)' },
        { roll: 2, name: 'Armatura celestiale +3', nameEN: 'Celestial armor +3' },
        { roll: 3, name: 'Spada sacra +3', nameEN: 'Holy sword +3' },
        { roll: 4, name: 'Anello dei Tre Desideri benedetto', nameEN: 'Blessed Ring of Three Wishes' },
        { roll: 5, name: 'Mantello dell\'Invisibilità benedetto', nameEN: 'Blessed Cloak of Invisibility' },
        { roll: 6, name: 'Bastone della saggezza divina', nameEN: 'Staff of Divine Wisdom' },
        { roll: 7, name: 'Reliquia celestiale unica (effetto DM)', nameEN: 'Unique celestial relic (DM effect)' },
        { roll: 8, name: 'Corona celestiale (potere narr. e meccanico)', nameEN: 'Celestial crown (narrative & mechanical power)' },
      ]},
    ],
  },
];
