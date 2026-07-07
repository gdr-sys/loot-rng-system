import { 
  type Rank, 
  type ProbabilityTable, 
  type Rarity, 
  type EnemyCategory, 
  type LootItem,
  type SpellLevel,
  type ProbabilityRow
} from '../data/lootTables';

export type ItemCondition = 'intatto' | 'danneggiato' | 'inutilizzabile' | 'maledetto';

export interface RollResult {
  id: string;
  timestamp: number;
  playerName: string;
  // Step 1
  d100Roll: number;
  rank: Rank;
  category: EnemyCategory;
  probabilityTableUsed: ProbabilityTable;
  rarityResult: Rarity | 'Niente';
  // Luck test
  luckyD4Roll?: number;
  luckyUpgrade?: boolean;
  finalRarity: Rarity | 'Niente';
  // Step 2
  d8Roll?: number;
  lootItem?: LootItem;
  // Condition
  condition?: ItemCondition;
  // Spell (if applicable)
  spellLevelRoll?: number;
  spellLevel?: number;
  spellRoll?: number;
  spellName?: string;
  spellNameEN?: string;
  // Multi-roll index
  rollIndex?: number;
  totalRolls?: number;
}

function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollD100(): number {
  return rollDie(100);
}

export function rollD8(): number {
  return rollDie(8);
}

export function rollD4(): number {
  return rollDie(4);
}

function parseRange(rangeStr: string): { min: number; max: number } | null {
  if (rangeStr === '—' || rangeStr === '-') return null;
  
  const cleaned = rangeStr.replace(/00/g, '100');
  
  if (cleaned.includes('-')) {
    const parts = cleaned.split('-');
    const min = parseInt(parts[0]);
    const max = parseInt(parts[1]);
    return { min, max };
  }
  
  const val = parseInt(cleaned);
  return { min: val, max: val };
}

export function determineRarity(
  d100: number, 
  rank: Rank, 
  probTables: Record<ProbabilityTable, ProbabilityRow[]>,
  probTableName: ProbabilityTable
): Rarity | 'Niente' {
  const table = probTables[probTableName];
  
  const rankKey = rank === 'Minion' ? 'minionRange' : rank === 'Elite' ? 'eliteRange' : 'bossRange';
  
  for (const row of table) {
    const range = parseRange(row[rankKey]);
    if (range && d100 >= range.min && d100 <= range.max) {
      return row.rarity;
    }
  }
  
  // Fallback: use percentages
  let cumulative = 0;
  for (const row of table) {
    const pct = rank === 'Minion' ? row.minionPct : rank === 'Elite' ? row.elitePct : row.bossPct;
    cumulative += pct;
    if (d100 <= cumulative) {
      return row.rarity;
    }
  }
  
  return 'Niente';
}

export function needsLuckTest(d100: number): boolean {
  return d100 === 75 || d100 === 90;
}

export function applyLuckTest(rarity: Rarity | 'Niente', d4: number): { upgraded: boolean; newRarity: Rarity | 'Niente' } {
  if (d4 > 2) {
    const upgradeMap: Record<string, Rarity> = {
      'Comune': 'Non Comune',
      'Non Comune': 'Raro',
      'Raro': 'Epico',
      'Epico': 'Leggendario',
    };
    if (rarity !== 'Niente' && rarity !== 'Leggendario' && upgradeMap[rarity]) {
      return { upgraded: true, newRarity: upgradeMap[rarity] };
    }
  }
  return { upgraded: false, newRarity: rarity };
}

export function performFullRoll(
  rank: Rank,
  category: EnemyCategory,
  playerName: string,
  condition: ItemCondition | null,
  probTables: Record<ProbabilityTable, ProbabilityRow[]>,
  spellTableData: SpellLevel[],
  rollIndex?: number,
  totalRolls?: number
): RollResult {
  const probTable = category.probabilityTable;
  
  // Step 1: Roll d100
  const d100 = rollD100();
  let rarity = determineRarity(d100, rank, probTables, probTable);
  
  // Luck test
  let luckyD4Roll: number | undefined;
  let luckyUpgrade = false;
  let finalRarity = rarity;
  
  if (needsLuckTest(d100) && rarity !== 'Niente') {
    luckyD4Roll = rollD4();
    const result = applyLuckTest(rarity, luckyD4Roll);
    luckyUpgrade = result.upgraded;
    finalRarity = result.newRarity;
  }
  
  // Step 2: If there's loot, roll d8
  let d8Roll: number | undefined;
  let lootItem: LootItem | undefined;
  
  if (finalRarity !== 'Niente') {
    d8Roll = rollD8();
    const rarityTable = category.rarities.find(r => r.rarity === finalRarity);
    if (rarityTable) {
      lootItem = rarityTable.items.find(i => i.roll === d8Roll);
    }
  }
  
  // If spell scroll, roll spell
  let spellLevelRoll: number | undefined;
  let spellLevel: number | undefined;
  let spellRoll: number | undefined;
  let spellName: string | undefined;
  let spellNameEN: string | undefined;
  
  if (lootItem && (lootItem.name.toLowerCase().includes('pergamena incantesimo') || lootItem.name.toLowerCase().includes('libro degli incantesimi'))) {
    if (finalRarity === 'Non Comune') {
      spellLevel = 1;
    } else if (finalRarity === 'Raro') {
      spellLevelRoll = rollDie(2);
      spellLevel = spellLevelRoll === 1 ? 2 : 3;
    } else if (finalRarity === 'Epico') {
      spellLevelRoll = rollDie(2);
      spellLevel = spellLevelRoll === 1 ? 4 : 5;
    } else if (finalRarity === 'Leggendario') {
      spellLevelRoll = rollDie(4);
      spellLevel = 5 + spellLevelRoll;
    }
    
    if (spellLevel) {
      const spellLevelData = spellTableData.find(s => s.level === spellLevel);
      if (spellLevelData) {
        const dieSides = parseInt(spellLevelData.die.replace('d', ''));
        spellRoll = rollDie(dieSides);
        const spell = spellLevelData.spells.find(s => s.roll === spellRoll);
        if (spell) {
          spellName = spell.name;
          spellNameEN = spell.nameEN;
        }
      }
    }
  }
  
  return {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    playerName,
    d100Roll: d100,
    rank,
    category,
    probabilityTableUsed: probTable,
    rarityResult: rarity,
    luckyD4Roll,
    luckyUpgrade,
    finalRarity,
    d8Roll,
    lootItem,
    condition: condition || undefined,
    spellLevelRoll,
    spellLevel,
    spellRoll,
    spellName,
    spellNameEN,
    rollIndex,
    totalRolls,
  };
}

export function performMultipleRolls(
  rank: Rank,
  categories: EnemyCategory[],
  playerName: string,
  condition: ItemCondition | null,
  multiplier: number,
  probTables: Record<ProbabilityTable, ProbabilityRow[]>,
  spellTableData: SpellLevel[]
): RollResult[] {
  const results: RollResult[] = [];
  
  for (let i = 0; i < multiplier; i++) {
    // For each roll, pick a random category from selected ones
    const category = categories[Math.floor(Math.random() * categories.length)];
    const result = performFullRoll(
      rank,
      category,
      playerName,
      condition,
      probTables,
      spellTableData,
      i + 1,
      multiplier
    );
    results.push(result);
  }
  
  return results;
}
