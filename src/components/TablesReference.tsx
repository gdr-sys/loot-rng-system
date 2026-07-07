import { useState, useMemo } from 'react';
import { Search, X, ChevronDown, ChevronRight, Plus, Trash2, Download, Upload, RotateCcw, Edit2, Save } from 'lucide-react';
import { type ProbabilityTable, type Rarity, type LootItem, type SpellEntry } from '../data/lootTables';
import { useData } from '../context/DataContext';
import RarityBadge from './RarityBadge';

interface TablesReferenceProps {
  lang: 'it' | 'en';
}

const probTableNames: Record<ProbabilityTable, { it: string; en: string }> = {
  Standard: { it: 'Probabilità Standard', en: 'Standard Probability' },
  Bestie: { it: 'Probabilità Bestie', en: 'Beast Probability' },
  Melme: { it: 'Probabilità Melme & Ooze', en: 'Ooze & Slime Probability' },
  Piante: { it: 'Probabilità Piante', en: 'Plant Probability' },
  Celestiali: { it: 'Probabilità Celestiali', en: 'Celestial Probability' },
};

export default function TablesReference({ lang }: TablesReferenceProps) {
  const { 
    enemyCategories, setEnemyCategories,
    spellTable, setSpellTable,
    probabilityTables,
    resetToDefaults, exportAllData, importAllData 
  } = useData();
  
  const [activeTab, setActiveTab] = useState<'prob' | 'loot' | 'spells'>('loot');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return enemyCategories;
    const q = searchQuery.toLowerCase();
    return enemyCategories.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.nameEN.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.descriptionEN.toLowerCase().includes(q) ||
        c.rarities.some(r =>
          r.items.some(
            i => i.name.toLowerCase().includes(q) || i.nameEN.toLowerCase().includes(q)
          )
        )
    );
  }, [searchQuery, enemyCategories]);

  const handleExport = () => {
    const json = exportAllData();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dnd-loot-tables-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const text = await file.text();
        const success = importAllData(text);
        if (success) {
          alert(lang === 'it' ? 'Dati importati con successo!' : 'Data imported successfully!');
        } else {
          alert(lang === 'it' ? 'Errore nell\'importazione' : 'Import error');
        }
      }
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm(lang === 'it' ? 'Ripristinare tutti i dati predefiniti?' : 'Reset all data to defaults?')) {
      resetToDefaults();
    }
  };

  const updateLootItem = (catId: string, rarity: Rarity, roll: number, field: 'name' | 'nameEN', value: string) => {
    const newCategories = enemyCategories.map(cat => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        rarities: cat.rarities.map(r => {
          if (r.rarity !== rarity) return r;
          return {
            ...r,
            items: r.items.map(item => {
              if (item.roll !== roll) return item;
              return { ...item, [field]: value };
            })
          };
        })
      };
    });
    setEnemyCategories(newCategories);
  };

  const addLootItem = (catId: string, rarity: Rarity) => {
    const newCategories = enemyCategories.map(cat => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        rarities: cat.rarities.map(r => {
          if (r.rarity !== rarity) return r;
          const maxRoll = Math.max(...r.items.map(i => i.roll), 0);
          const newItem: LootItem = {
            roll: maxRoll + 1,
            name: lang === 'it' ? 'Nuovo oggetto' : 'New item',
            nameEN: 'New item'
          };
          return { ...r, items: [...r.items, newItem] };
        })
      };
    });
    setEnemyCategories(newCategories);
  };

  const deleteLootItem = (catId: string, rarity: Rarity, roll: number) => {
    const newCategories = enemyCategories.map(cat => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        rarities: cat.rarities.map(r => {
          if (r.rarity !== rarity) return r;
          return { ...r, items: r.items.filter(item => item.roll !== roll) };
        })
      };
    });
    setEnemyCategories(newCategories);
  };

  const updateSpell = (level: number, roll: number, field: 'name' | 'nameEN', value: string) => {
    const newSpellTable = spellTable.map(lvl => {
      if (lvl.level !== level) return lvl;
      return {
        ...lvl,
        spells: lvl.spells.map(spell => {
          if (spell.roll !== roll) return spell;
          return { ...spell, [field]: value };
        })
      };
    });
    setSpellTable(newSpellTable);
  };

  const addSpell = (level: number) => {
    const newSpellTable = spellTable.map(lvl => {
      if (lvl.level !== level) return lvl;
      const maxRoll = Math.max(...lvl.spells.map(s => s.roll), 0);
      const newSpell: SpellEntry = {
        roll: maxRoll + 1,
        name: lang === 'it' ? 'Nuovo incantesimo' : 'New spell',
        nameEN: 'New spell'
      };
      return { ...lvl, spells: [...lvl.spells, newSpell] };
    });
    setSpellTable(newSpellTable);
  };

  const deleteSpell = (level: number, roll: number) => {
    const newSpellTable = spellTable.map(lvl => {
      if (lvl.level !== level) return lvl;
      return { ...lvl, spells: lvl.spells.filter(spell => spell.roll !== roll) };
    });
    setSpellTable(newSpellTable);
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 bg-gray-800/60 rounded-lg p-2 border border-gray-700">
        <button
          onClick={() => setEditMode(!editMode)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            editMode ? 'bg-amber-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {editMode ? <Save size={14} /> : <Edit2 size={14} />}
          {editMode ? (lang === 'it' ? 'Fine Modifica' : 'Done Editing') : (lang === 'it' ? 'Modifica' : 'Edit')}
        </button>
        <div className="flex-1" />
        <button onClick={handleExport} className="flex items-center gap-1 px-2 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-xs text-gray-300">
          <Download size={12} />
          {lang === 'it' ? 'Esporta JSON' : 'Export JSON'}
        </button>
        <button onClick={handleImport} className="flex items-center gap-1 px-2 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-xs text-gray-300">
          <Upload size={12} />
          {lang === 'it' ? 'Importa JSON' : 'Import JSON'}
        </button>
        <button onClick={handleReset} className="flex items-center gap-1 px-2 py-1.5 bg-red-900/50 hover:bg-red-800/50 rounded text-xs text-red-400">
          <RotateCcw size={12} />
          {lang === 'it' ? 'Reset' : 'Reset'}
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-gray-700 pb-2">
        <button
          onClick={() => setActiveTab('loot')}
          className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
            activeTab === 'loot' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          {lang === 'it' ? '🎁 Loot' : '🎁 Loot'}
        </button>
        <button
          onClick={() => setActiveTab('prob')}
          className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
            activeTab === 'prob' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          {lang === 'it' ? '📊 Probabilità' : '📊 Probabilities'}
        </button>
        <button
          onClick={() => setActiveTab('spells')}
          className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
            activeTab === 'spells' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          {lang === 'it' ? '📜 Incantesimi' : '📜 Spells'}
        </button>
      </div>

      {/* Probability Tables */}
      {activeTab === 'prob' && (
        <div className="space-y-6">
          {(Object.keys(probabilityTables) as ProbabilityTable[]).map(tableName => {
            const table = probabilityTables[tableName];
            return (
              <div key={tableName} className="bg-gray-800/60 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg font-bold text-amber-400 mb-3">
                  {probTableNames[tableName][lang]}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 px-2 text-gray-400">{lang === 'it' ? 'Risultato' : 'Result'}</th>
                        <th className="text-center py-2 px-2 text-gray-400">Minion %</th>
                        <th className="text-center py-2 px-2 text-gray-400">Elite %</th>
                        <th className="text-center py-2 px-2 text-gray-400">Boss %</th>
                        <th className="text-center py-2 px-2 text-gray-400">Range M</th>
                        <th className="text-center py-2 px-2 text-gray-400">Range E</th>
                        <th className="text-center py-2 px-2 text-gray-400">Range B</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.map(row => (
                        <tr key={row.result} className="border-b border-gray-700/30">
                          <td className="py-2 px-2"><RarityBadge rarity={row.rarity} /></td>
                          <td className="text-center py-2 px-2 text-gray-300 font-mono">{row.minionPct}%</td>
                          <td className="text-center py-2 px-2 text-gray-300 font-mono">{row.elitePct}%</td>
                          <td className="text-center py-2 px-2 text-gray-300 font-mono">{row.bossPct}%</td>
                          <td className="text-center py-2 px-2 text-gray-500 font-mono text-xs">{row.minionRange}</td>
                          <td className="text-center py-2 px-2 text-gray-500 font-mono text-xs">{row.eliteRange}</td>
                          <td className="text-center py-2 px-2 text-gray-500 font-mono text-xs">{row.bossRange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Loot Tables */}
      {activeTab === 'loot' && (
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={lang === 'it' ? 'Cerca categoria o oggetto...' : 'Search category or item...'}
              className="w-full bg-gray-800/80 border border-gray-700 rounded-lg pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Categories */}
          {filteredCategories.map(cat => (
            <div key={cat.id} className="bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-700/50 transition-colors"
              >
                <div className="text-left">
                  <div className="text-white font-medium">{lang === 'it' ? cat.name : cat.nameEN}</div>
                  <div className="text-xs text-gray-500">
                    {lang === 'it' ? cat.description : cat.descriptionEN}
                    <span className="ml-2 text-amber-500/60">[{cat.probabilityTable}]</span>
                  </div>
                </div>
                {expandedCategory === cat.id ? <ChevronDown size={20} className="text-gray-400 shrink-0" /> : <ChevronRight size={20} className="text-gray-400 shrink-0" />}
              </button>

              {expandedCategory === cat.id && (
                <div className="px-4 pb-4 space-y-4">
                  {cat.rarities.map(rarityTable => (
                    <div key={rarityTable.rarity}>
                      <div className="flex items-center justify-between mb-2">
                        <RarityBadge rarity={rarityTable.rarity} />
                        {editMode && (
                          <button
                            onClick={() => addLootItem(cat.id, rarityTable.rarity)}
                            className="flex items-center gap-1 px-2 py-1 bg-green-900/50 hover:bg-green-800/50 rounded text-xs text-green-400"
                          >
                            <Plus size={12} /> {lang === 'it' ? 'Aggiungi' : 'Add'}
                          </button>
                        )}
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-700/50">
                              <th className="text-left py-1 px-2 text-gray-500 w-8">d8</th>
                              <th className="text-left py-1 px-2 text-gray-500">{lang === 'it' ? 'Oggetto' : 'Item'}</th>
                              <th className="text-left py-1 px-2 text-gray-500">EN</th>
                              {editMode && <th className="w-8"></th>}
                            </tr>
                          </thead>
                          <tbody>
                            {rarityTable.items.map(item => {
                              
                              return (
                                <tr key={item.roll} className="border-b border-gray-700/20 hover:bg-gray-700/30">
                                  <td className="py-1.5 px-2 text-amber-500 font-mono font-bold">{item.roll}</td>
                                  <td className="py-1.5 px-2">
                                    {editMode ? (
                                      <input
                                        type="text"
                                        value={item.name}
                                        onChange={e => updateLootItem(cat.id, rarityTable.rarity, item.roll, 'name', e.target.value)}
                                        className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-0.5 text-gray-200 text-sm focus:outline-none focus:border-amber-500"
                                      />
                                    ) : (
                                      <span className="text-gray-200">{item.name}</span>
                                    )}
                                  </td>
                                  <td className="py-1.5 px-2">
                                    {editMode ? (
                                      <input
                                        type="text"
                                        value={item.nameEN}
                                        onChange={e => updateLootItem(cat.id, rarityTable.rarity, item.roll, 'nameEN', e.target.value)}
                                        className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-0.5 text-gray-500 italic text-xs focus:outline-none focus:border-amber-500"
                                      />
                                    ) : (
                                      <span className="text-gray-500 italic text-xs">{item.nameEN}</span>
                                    )}
                                  </td>
                                  {editMode && (
                                    <td className="py-1.5 px-1">
                                      <button
                                        onClick={() => deleteLootItem(cat.id, rarityTable.rarity, item.roll)}
                                        className="text-red-500 hover:text-red-400"
                                      >
                                        <Trash2 size={12} />
                                      </button>
                                    </td>
                                  )}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Spell Tables */}
      {activeTab === 'spells' && (
        <div className="space-y-4">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700">
            <div className="text-sm text-gray-400 mb-4">
              {lang === 'it' ? (
                <>
                  <p className="mb-2">Quando il loot è una pergamena o libro degli incantesimi:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong>Non Comune</strong> → 1° livello (d8)</li>
                    <li><strong>Raro</strong> → 2-3° livello (1d2 + d8)</li>
                    <li><strong>Epico</strong> → 4-5° livello (1d2 + d8)</li>
                    <li><strong>Leggendario</strong> → 6-9° livello (1d4 + dado indicato)</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="mb-2">When loot is a spell scroll or spellbook:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong>Uncommon</strong> → 1st level (d8)</li>
                    <li><strong>Rare</strong> → 2nd-3rd level (1d2 + d8)</li>
                    <li><strong>Epic</strong> → 4th-5th level (1d2 + d8)</li>
                    <li><strong>Legendary</strong> → 6th-9th level (1d4 + indicated die)</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {spellTable.map(level => (
            <div key={level.level} className="bg-gray-800/60 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-amber-400 font-bold">
                  {lang === 'it' ? `${level.level}° Livello` : `${level.level}${['st','nd','rd'][level.level-1] || 'th'} Level`}
                  <span className="text-gray-500 font-normal ml-2">({level.die})</span>
                </h4>
                {editMode && (
                  <button
                    onClick={() => addSpell(level.level)}
                    className="flex items-center gap-1 px-2 py-1 bg-green-900/50 hover:bg-green-800/50 rounded text-xs text-green-400"
                  >
                    <Plus size={12} /> {lang === 'it' ? 'Aggiungi' : 'Add'}
                  </button>
                )}
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {level.spells.map(spell => (
                    <tr key={spell.roll} className="border-b border-gray-700/20">
                      <td className="py-1.5 px-2 text-amber-500 font-mono font-bold w-8">{spell.roll}</td>
                      <td className="py-1.5 px-2">
                        {editMode ? (
                          <input
                            type="text"
                            value={spell.name}
                            onChange={e => updateSpell(level.level, spell.roll, 'name', e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-0.5 text-gray-200 text-sm focus:outline-none focus:border-amber-500"
                          />
                        ) : (
                          <span className="text-gray-200">{spell.name}</span>
                        )}
                      </td>
                      <td className="py-1.5 px-2">
                        {editMode ? (
                          <input
                            type="text"
                            value={spell.nameEN}
                            onChange={e => updateSpell(level.level, spell.roll, 'nameEN', e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-0.5 text-gray-500 italic text-xs focus:outline-none focus:border-amber-500"
                          />
                        ) : (
                          <span className="text-gray-500 italic text-xs">{spell.nameEN}</span>
                        )}
                      </td>
                      {editMode && (
                        <td className="py-1.5 px-1 w-8">
                          <button onClick={() => deleteSpell(level.level, spell.roll)} className="text-red-500 hover:text-red-400">
                            <Trash2 size={12} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
