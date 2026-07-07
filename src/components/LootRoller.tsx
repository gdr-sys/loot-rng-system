import { useState, useMemo } from 'react';
import { Dice1, Search, X, Zap, Shield, Crown, ChevronDown, ChevronUp } from 'lucide-react';
import { enemyCategories, type Rank } from '../data/lootTables';
import { performFullRoll, type RollResult } from '../utils/diceEngine';
import DiceAnimation from './DiceAnimation';
import RarityBadge from './RarityBadge';

interface LootRollerProps {
  onRoll: (result: RollResult) => void;
  lang: 'it' | 'en';
}

const rankIcons: Record<Rank, typeof Dice1> = {
  Minion: Dice1,
  Elite: Shield,
  Boss: Crown,
};

const rankColors: Record<Rank, string> = {
  Minion: 'from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600',
  Elite: 'from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600',
  Boss: 'from-red-600 to-red-700 hover:from-red-500 hover:to-red-600',
};

const rankDescriptions: Record<Rank, { it: string; en: string }> = {
  Minion: { it: 'Tiro unico per l\'intero gruppo', en: 'Single roll for entire group' },
  Elite: { it: 'Tiro singolo per ogni creatura', en: 'Single roll per creature' },
  Boss: { it: 'Tiro singolo per ogni creatura', en: 'Single roll per creature' },
};

export default function LootRoller({ onRoll, lang }: LootRollerProps) {
  const [selectedRank, setSelectedRank] = useState<Rank>('Minion');
  const [selectedCategory, setSelectedCategory] = useState(enemyCategories[0].id);
  const [playerName, setPlayerName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRolling, setIsRolling] = useState(false);
  const [lastResult, setLastResult] = useState<RollResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return enemyCategories;
    const q = searchQuery.toLowerCase();
    return enemyCategories.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.nameEN.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.descriptionEN.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const selectedCategoryData = enemyCategories.find(c => c.id === selectedCategory);

  const handleRoll = () => {
    if (!playerName.trim()) {
      setPlayerName('Avventuriero');
    }
    setIsRolling(true);
    setShowDetails(false);

    setTimeout(() => {
      const result = performFullRoll(
        selectedRank,
        selectedCategory,
        playerName.trim() || 'Avventuriero'
      );
      setLastResult(result);
      setIsRolling(false);
      setShowDetails(true);
      onRoll(result);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Player Name */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {lang === 'it' ? '👤 Nome Giocatore' : '👤 Player Name'}
        </label>
        <div className="relative">
          <input
            type="text"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            placeholder={lang === 'it' ? 'Nome del giocatore...' : 'Player name...'}
            className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
          {playerName && (
            <button
              onClick={() => setPlayerName('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Rank Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {lang === 'it' ? '⚔️ Rango Nemico' : '⚔️ Enemy Rank'}
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(['Minion', 'Elite', 'Boss'] as Rank[]).map(rank => {
            const Icon = rankIcons[rank];
            const isSelected = selectedRank === rank;
            return (
              <button
                key={rank}
                onClick={() => setSelectedRank(rank)}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? `bg-gradient-to-b ${rankColors[rank]} border-white/30 shadow-lg scale-105`
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-500'
                }`}
              >
                <Icon size={24} className={isSelected ? 'text-white' : 'text-gray-400'} />
                <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                  {rank}
                </span>
                <span className="text-[10px] text-gray-400 text-center leading-tight">
                  {rankDescriptions[rank][lang]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Enemy Category */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {lang === 'it' ? '🐉 Tipo di Nemico' : '🐉 Enemy Type'}
        </label>
        <div className="relative">
          <div className="relative mb-2">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setShowCategoryDropdown(true);
              }}
              onFocus={() => setShowCategoryDropdown(true)}
              placeholder={lang === 'it' ? 'Cerca categoria...' : 'Search category...'}
              className="w-full bg-gray-800/80 border border-gray-700 rounded-lg pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowCategoryDropdown(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Selected Category Display */}
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="w-full flex items-center justify-between bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 text-left hover:border-gray-500 transition-colors"
          >
            <div>
              <div className="text-white font-medium">
                {selectedCategoryData ? (lang === 'it' ? selectedCategoryData.name : selectedCategoryData.nameEN) : '—'}
              </div>
              <div className="text-xs text-gray-500">
                {selectedCategoryData ? (lang === 'it' ? selectedCategoryData.description : selectedCategoryData.descriptionEN) : ''}
              </div>
            </div>
            {showCategoryDropdown ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
          </button>

          {/* Dropdown */}
          {showCategoryDropdown && (
            <div className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl max-h-64 overflow-y-auto">
              {filteredCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowCategoryDropdown(false);
                    setSearchQuery('');
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700/50 last:border-0 ${
                    selectedCategory === cat.id ? 'bg-gray-700/50' : ''
                  }`}
                >
                  <div className="text-white font-medium text-sm">
                    {lang === 'it' ? cat.name : cat.nameEN}
                  </div>
                  <div className="text-xs text-gray-500">
                    {lang === 'it' ? cat.description : cat.descriptionEN}
                    <span className="ml-2 text-amber-500/70">[{cat.probabilityTable}]</span>
                  </div>
                </button>
              ))}
              {filteredCategories.length === 0 && (
                <div className="px-4 py-3 text-gray-500 text-sm text-center">
                  {lang === 'it' ? 'Nessun risultato' : 'No results'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Roll Button */}
      <button
        onClick={handleRoll}
        disabled={isRolling}
        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 ${
          isRolling
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40'
        }`}
      >
        <Zap size={24} className={isRolling ? 'animate-spin' : ''} />
        {isRolling
          ? (lang === 'it' ? 'Tirando i dadi...' : 'Rolling dice...')
          : (lang === 'it' ? 'TIRA I DADI!' : 'ROLL THE DICE!')}
      </button>

      {/* Result Display */}
      {lastResult && showDetails && (
        <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 space-y-4 animate-fade-in">
          {/* Dice Display */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <DiceAnimation
              value={lastResult.d100Roll}
              sides={100}
              label="d100"
              isRolling={isRolling}
              color="from-amber-600 to-amber-800"
            />
            {lastResult.luckyD4Roll !== undefined && (
              <DiceAnimation
                value={lastResult.luckyD4Roll}
                sides={4}
                label={lang === 'it' ? 'd4 Fortuna' : 'd4 Luck'}
                isRolling={isRolling}
                color="from-emerald-600 to-emerald-800"
              />
            )}
            {lastResult.d8Roll !== undefined && (
              <DiceAnimation
                value={lastResult.d8Roll}
                sides={8}
                label="d8"
                isRolling={isRolling}
                color="from-blue-600 to-blue-800"
              />
            )}
          </div>

          {/* Rarity */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <RarityBadge rarity={lastResult.finalRarity} showEN large />
              {lastResult.luckyUpgrade && (
                <span className="text-emerald-400 text-sm font-medium animate-pulse">
                  ⬆ {lang === 'it' ? 'Upgrade Fortuna!' : 'Lucky Upgrade!'}
                </span>
              )}
            </div>
          </div>

          {/* Loot Item */}
          {lastResult.lootItem && (
            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">
                  🎁 {lastResult.lootItem.name}
                </div>
                <div className="text-sm text-gray-400 italic">
                  {lastResult.lootItem.nameEN}
                </div>
              </div>
            </div>
          )}

          {/* Spell Info */}
          {lastResult.spellName && (
            <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-700/50">
              <div className="text-center">
                <div className="text-sm text-indigo-400 mb-1">
                  📜 {lang === 'it' ? `Incantesimo ${lastResult.spellLevel}° livello` : `${lastResult.spellLevel}th-level Spell`}
                </div>
                <div className="text-lg font-bold text-indigo-300">
                  {lastResult.spellName}
                </div>
                <div className="text-sm text-indigo-400/70 italic">
                  {lastResult.spellNameEN}
                </div>
              </div>
            </div>
          )}

          {/* Nothing */}
          {lastResult.finalRarity === 'Niente' && (
            <div className="text-center py-4">
              <div className="text-4xl mb-2">💀</div>
              <div className="text-gray-400 text-lg">
                {lang === 'it' ? 'Niente bottino. Il dado ha parlato.' : 'No loot. The die has spoken.'}
              </div>
            </div>
          )}

          {/* Roll Details */}
          <details className="text-xs text-gray-500">
            <summary className="cursor-pointer hover:text-gray-300 transition-colors">
              {lang === 'it' ? 'Dettagli del tiro' : 'Roll details'}
            </summary>
            <div className="mt-2 space-y-1 bg-gray-900/50 rounded p-3 font-mono">
              <div>d100: {lastResult.d100Roll} → {lastResult.rarityResult}</div>
              {lastResult.luckyD4Roll !== undefined && (
                <div>d4 ({lang === 'it' ? 'fortuna' : 'luck'}): {lastResult.luckyD4Roll} → {lastResult.luckyUpgrade ? (lang === 'it' ? 'UPGRADE!' : 'UPGRADE!') : (lang === 'it' ? 'nessun cambio' : 'no change')}</div>
              )}
              {lastResult.d8Roll !== undefined && (
                <div>d8: {lastResult.d8Roll} → {lastResult.lootItem?.name}</div>
              )}
              <div>{lang === 'it' ? 'Tabella' : 'Table'}: {lastResult.probabilityTableUsed}</div>
              <div>{lang === 'it' ? 'Categoria' : 'Category'}: {lang === 'it' ? lastResult.category.name : lastResult.category.nameEN}</div>
              <div>{lang === 'it' ? 'Rango' : 'Rank'}: {lastResult.rank}</div>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
