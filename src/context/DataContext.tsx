import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { 
  enemyCategories as defaultEnemyCategories, 
  spellTable as defaultSpellTable,
  probabilityTables as defaultProbabilityTables,
  type EnemyCategory, 
  type SpellLevel,
  type ProbabilityTable,
  type ProbabilityRow
} from '../data/lootTables';

interface DataContextType {
  enemyCategories: EnemyCategory[];
  setEnemyCategories: (cats: EnemyCategory[]) => void;
  spellTable: SpellLevel[];
  setSpellTable: (spells: SpellLevel[]) => void;
  probabilityTables: Record<ProbabilityTable, ProbabilityRow[]>;
  setProbabilityTables: (tables: Record<ProbabilityTable, ProbabilityRow[]>) => void;
  resetToDefaults: () => void;
  exportAllData: () => string;
  importAllData: (json: string) => boolean;
}

const DataContext = createContext<DataContextType | null>(null);

const STORAGE_KEYS = {
  categories: 'dnd-loot-custom-categories',
  spells: 'dnd-loot-custom-spells',
  probabilities: 'dnd-loot-custom-probabilities',
};

export function DataProvider({ children }: { children: ReactNode }) {
  const [enemyCategories, setEnemyCategoriesState] = useState<EnemyCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.categories);
      return saved ? JSON.parse(saved) : defaultEnemyCategories;
    } catch {
      return defaultEnemyCategories;
    }
  });

  const [spellTable, setSpellTableState] = useState<SpellLevel[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.spells);
      return saved ? JSON.parse(saved) : defaultSpellTable;
    } catch {
      return defaultSpellTable;
    }
  });

  const [probabilityTables, setProbabilityTablesState] = useState<Record<ProbabilityTable, ProbabilityRow[]>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.probabilities);
      return saved ? JSON.parse(saved) : defaultProbabilityTables;
    } catch {
      return defaultProbabilityTables;
    }
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(enemyCategories));
    } catch { /* ignore */ }
  }, [enemyCategories]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.spells, JSON.stringify(spellTable));
    } catch { /* ignore */ }
  }, [spellTable]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.probabilities, JSON.stringify(probabilityTables));
    } catch { /* ignore */ }
  }, [probabilityTables]);

  const setEnemyCategories = (cats: EnemyCategory[]) => {
    setEnemyCategoriesState(cats);
  };

  const setSpellTable = (spells: SpellLevel[]) => {
    setSpellTableState(spells);
  };

  const setProbabilityTables = (tables: Record<ProbabilityTable, ProbabilityRow[]>) => {
    setProbabilityTablesState(tables);
  };

  const resetToDefaults = () => {
    setEnemyCategoriesState(defaultEnemyCategories);
    setSpellTableState(defaultSpellTable);
    setProbabilityTablesState(defaultProbabilityTables);
    localStorage.removeItem(STORAGE_KEYS.categories);
    localStorage.removeItem(STORAGE_KEYS.spells);
    localStorage.removeItem(STORAGE_KEYS.probabilities);
  };

  const exportAllData = () => {
    return JSON.stringify({
      version: '1.0',
      exportDate: new Date().toISOString(),
      enemyCategories,
      spellTable,
      probabilityTables,
    }, null, 2);
  };

  const importAllData = (json: string): boolean => {
    try {
      const data = JSON.parse(json);
      if (data.enemyCategories) setEnemyCategoriesState(data.enemyCategories);
      if (data.spellTable) setSpellTableState(data.spellTable);
      if (data.probabilityTables) setProbabilityTablesState(data.probabilityTables);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <DataContext.Provider value={{
      enemyCategories,
      setEnemyCategories,
      spellTable,
      setSpellTable,
      probabilityTables,
      setProbabilityTables,
      resetToDefaults,
      exportAllData,
      importAllData,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
