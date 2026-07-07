import { useState, useMemo } from 'react';
import { Dice1, Search, X, Zap, Shield, Crown, Plus, Minus, Check } from 'lucide-react';
import { type Rank } from '../data/lootTables';
import { performMultipleRolls, type RollResult, type ItemCondition } from '../utils/diceEngine';
import { useData } from '../context/DataContext';
import DiceAnimation from './DiceAnimation';
import RarityBadge from './RarityBadge';

interface LootRollerProps {
  onRoll: (results: RollResult[]) => void;
  lang: 'it' | 'en';
  lastResults: RollResult[];
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
  Minion: { it: 'Gruppo (multi-selezione)', en: 'Group (multi-select)' },
  Elite: { it: 'Tiro singolo per creatura', en: 'Single roll per creature' },
  Boss: { it: 'Tiro singolo per creatura', en: 'Single roll per creature' },
};

const conditionLabels: Record<ItemCondition, { it: string; en: string; color: string; icon: string }> = {
  intatto: { it: 'Intatto', en: 'Intact', color: 'text-green-400 border-green-600 bg-green-900/30', icon: '✓' },
  danneggiato: { it: 'Danneggiato', en: 'Damaged', color: 'text-yellow-400 border-yellow-600 bg-yellow-900/30', icon: '⚠' },
  inutilizzabile: { it: 'Inutilizzabile', en: 'Unusable', color: 'text-red-400 border-red-600 bg-red-900/30', icon: '✗' },
  maledetto: { it: 'Maledetto', en: 'Cursed', color: 'text-purple-400 border-purple-600 bg-purple-900/30', icon: '☠' },
};

export default function LootRoller({ onRoll, lang, lastResults }: LootRollerProps) {
  const { enemyCategories, spellTable, probabilityTables } = useData();
  
  const [selectedRank, setSelectedRank] = useState<Rank>('Minion');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([enemyCategories[0]?.id || '']);
  const [playerName, setPlayerName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRolling, setIsRolling] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [selectedCondition, setSelectedCondition] = useState<ItemCondition | null>(null);

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
  }, [searchQuery, enemyCategories]);

  const toggleCategory = (catId: string) => {
    if (selectedRank === 'Minion') {
      setSelectedCategories(prev => {
        if (prev.includes(catId)) {
          return prev.length > 1 ? prev.filter(id => id !== catId) : prev;
        }
        return [...prev, catId];
      });
    } else {
      setSelectedCategories([catId]);
    }
  };

  const handleRankChange = (rank: Rank) => {
    setSelectedRank(rank);
    if (rank !== 'Minion' && selectedCategories.length > 1) {
      setSelectedCategories([selectedCategories[0]]);
    }
  };

  const handleRoll = () => {
    if (!playerName.trim()) {
      setPlayerName('Avventuriero');
    }
    setIsRolling(true);

    const categories = enemyCategories.filter(c => selectedCategories.includes(c.id));

    setTimeout(() => {
      const results = performMultipleRolls(
        selectedRank,
        categories,
        playerName.trim() || 'Avventuriero',
        selectedCondition,
        multiplier,
        probabilityTables,
        spellTable
      );
      setIsRolling(false);
      onRoll(results);
    }, 1000);
  };

  const adjustMultiplier = (delta: number) => {
    setMultiplier(prev => Math.max(1, Math.min(99, prev + delta)));
  };

  return (
    <div className="space-y-5">
      {/* Player Name */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">
          {lang === 'it' ? '👤 Giocatore' : '👤 Player'}
        </label>
        <div className="relative">
          <input
            type="text"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            placeholder={lang === 'it' ? 'Nome del giocatore...' : 'Player name...'}
            className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {playerName && (
            <button
              onClick={() => setPlayerName('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Rank Selection */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5">
          {lang === 'it' ? '⚔️ Rango Nemico' : '⚔️ Enemy Rank'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(['Minion', 'Elite', 'Boss'] as Rank[]).map(rank => {
            const Icon = rankIcons[rank];
            const isSelected = selectedRank === rank;
            return (
              <button
                key={rank}
                onClick={() => handleRankChange(rank)}
                className={`flex flex-col items-center gap-1 p-2.5 rounded-lg border-2 transition-all ${
                  isSelected
                    ? `bg-gradient-to-b ${rankColors[rank]} border-white/30 shadow-lg`
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-500'
                }`}
              >
                <Icon size={20} className={isSelected ? 'text-white' : 'text-gray-400'} />
                <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                  {rank}
                </span>
                <span className="text-[9px] text-gray-400 text-center leading-tight">
                  {rankDescriptions[rank][lang]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Item Condition */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5">
          {lang === 'it' ? '📦 Stato Oggetti (Opzionale)' : '📦 Item Condition (Optional)'}
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {(Object.keys(conditionLabels) as ItemCondition[]).map(cond => {
            const label = conditionLabels[cond];
            const isSelected = selectedCondition === cond;
            return (
              <button
                key={cond}
                onClick={() => setSelectedCondition(isSelected ? null : cond)}
                className={`flex items-center justify-center gap-1 px-2 py-2 rounded-lg border text-xs font-medium transition-all ${
                  isSelected
                    ? label.color + ' border-current'
                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                <span>{label.icon}</span>
                <span className="hidden sm:inline">{label[lang]}</span>
                {isSelected && <Check size={12} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Enemy Category */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-xs font-medium text-gray-400">
            {lang === 'it' ? '🐉 Tipo di Nemico' : '🐉 Enemy Type'}
            {selectedRank === 'Minion' && (
              <span className="ml-1 text-amber-500/70">({lang === 'it' ? 'clicca per multi-selezione' : 'click for multi-select'})</span>
            )}
          </label>
          {selectedCategories.length > 0 && (
            <span className="text-xs text-amber-400">
              {selectedCategories.length} {lang === 'it' ? 'sel.' : 'sel.'}
            </span>
          )}
        </div>

        {/* Search */}
        <div className="relative mb-2">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={lang === 'it' ? 'Cerca categoria...' : 'Search category...'}
            className="w-full bg-gray-800/80 border border-gray-700 rounded-lg pl-8 pr-8 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-[240px] overflow-y-auto pr-1 rounded-lg">
          {filteredCategories.map(cat => {
            const isSelected = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`text-left p-2.5 rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'bg-amber-900/40 border-amber-500/50 shadow-lg shadow-amber-500/10'
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600 hover:bg-gray-800'
                }`}
              >
                <div className="flex items-start gap-2">
                  {selectedRank === 'Minion' && (
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-amber-500 border-amber-500' : 'border-gray-600'
                    }`}>
                      {isSelected && <Check size={10} className="text-white" />}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium text-xs leading-tight truncate ${isSelected ? 'text-amber-300' : 'text-gray-200'}`}>
                      {lang === 'it' ? cat.name : cat.nameEN}
                    </div>
                    <div className="text-[9px] text-gray-500 leading-tight mt-0.5 line-clamp-2">
                      {lang === 'it' ? cat.description : cat.descriptionEN}
                    </div>
                    <div className="text-[8px] text-amber-500/60 mt-0.5">
                      [{cat.probabilityTable}]
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-4 text-gray-500 text-sm">
            {lang === 'it' ? 'Nessun risultato' : 'No results'}
          </div>
        )}
      </div>

      {/* ── ROLL AREA: Multiplier + Button ── */}
      <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700 space-y-3">
        {/* Multiplier — "Quante volte tiri" */}
        <div>
          <div className="text-center text-xs text-gray-400 mb-2">
            {lang === 'it' ? 'Quante volte vuoi tirare i dadi?' : 'How many times do you want to roll?'}
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => adjustMultiplier(-1)}
              disabled={multiplier <= 1}
              className="w-10 h-10 flex items-center justify-center bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg"
            >
              <Minus size={18} />
            </button>

            <div className="relative w-28">
              <input
                type="number"
                min={1}
                max={99}
                value={multiplier}
                onChange={e => setMultiplier(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                className="w-full h-12 bg-gray-900 border-2 border-amber-500/50 rounded-xl text-center text-amber-400 font-bold text-3xl focus:outline-none focus:border-amber-400 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                style={{ MozAppearance: 'textfield' } as React.CSSProperties}
              />
              <div className="absolute -bottom-4 left-0 right-0 text-center text-[10px] text-gray-500">
                {multiplier === 1 
                  ? (lang === 'it' ? '1 tiro' : '1 roll')
                  : (lang === 'it' ? `${multiplier} tiri` : `${multiplier} rolls`)}
              </div>
            </div>

            <button
              onClick={() => adjustMultiplier(1)}
              disabled={multiplier >= 99}
              className="w-10 h-10 flex items-center justify-center bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg"
            >
              <Plus size={18} />
            </button>
          </div>
          {/* Quick presets */}
          <div className="flex items-center justify-center gap-1.5 mt-5">
            {[1, 2, 3, 5, 10].map(n => (
              <button
                key={n}
                onClick={() => setMultiplier(n)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  multiplier === n
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600'
                }`}
              >
                ×{n}
              </button>
            ))}
          </div>
        </div>

        {/* Roll Button */}
        <button
          onClick={handleRoll}
          disabled={isRolling || selectedCategories.length === 0}
          className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 ${
            isRolling || selectedCategories.length === 0
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
          }`}
        >
          <Zap size={24} className={isRolling ? 'animate-spin' : ''} />
          {isRolling
            ? (lang === 'it' ? 'Tirando i dadi...' : 'Rolling dice...')
            : multiplier > 1 
              ? (lang === 'it' ? `TIRA I DADI  ×${multiplier}` : `ROLL DICE  ×${multiplier}`)
              : (lang === 'it' ? 'TIRA I DADI!' : 'ROLL THE DICE!')}
        </button>
      </div>

      {/* Last 5 Results */}
      {lastResults.length > 0 && !isRolling && (
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-gray-400 flex items-center gap-2">
            {lang === 'it' ? '🎁 Ultimi Risultati' : '🎁 Latest Results'}
            <span className="text-xs font-normal text-gray-600">
              ({Math.min(lastResults.length, 5)}/{lastResults.length})
            </span>
          </h3>
          <div className="space-y-2">
            {lastResults.slice(0, 5).map((result, idx) => (
              <ResultCard key={result.id} result={result} lang={lang} isFirst={idx === 0} />
            ))}
          </div>
          {lastResults.length > 5 && (
            <div className="text-center text-xs text-gray-500 py-1">
              {lang === 'it' ? `+ altri ${lastResults.length - 5} nello Storico completo →` : `+ ${lastResults.length - 5} more in full History →`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ResultCard({ result, lang, isFirst }: { result: RollResult; lang: 'it' | 'en'; isFirst: boolean }) {
  const conditionText = result.condition ? conditionLabels[result.condition] : null;
  
  return (
    <div className={`bg-gray-800/80 border rounded-lg p-3 transition-all ${
      isFirst ? 'border-amber-500/40 ring-1 ring-amber-500/20' : 'border-gray-700/50'
    }`}>
      {result.totalRolls && result.totalRolls > 1 && (
        <div className="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
          <span className="bg-gray-700 px-1.5 py-0.5 rounded">
            {lang === 'it' ? `Tiro ${result.rollIndex}/${result.totalRolls}` : `Roll ${result.rollIndex}/${result.totalRolls}`}
          </span>
          <span className="text-gray-600">•</span>
          <span>{lang === 'it' ? result.category.name : result.category.nameEN}</span>
        </div>
      )}
      
      {/* Dice + Rarity Row */}
      <div className="flex items-center gap-3 mb-2">
        <DiceAnimation value={result.d100Roll} sides={100} label="d100" isRolling={false} color="from-amber-600 to-amber-800" small />
        {result.luckyD4Roll !== undefined && (
          <DiceAnimation value={result.luckyD4Roll} sides={4} label="d4 🍀" isRolling={false} color="from-emerald-600 to-emerald-800" small />
        )}
        {result.d8Roll !== undefined && (
          <DiceAnimation value={result.d8Roll} sides={8} label="d8" isRolling={false} color="from-blue-600 to-blue-800" small />
        )}
        <div className="flex-1 text-right">
          <RarityBadge rarity={result.finalRarity} />
          {result.luckyUpgrade && (
            <span className="text-emerald-400 text-[10px] ml-1 animate-pulse">⬆</span>
          )}
        </div>
      </div>

      {/* Loot Item */}
      {result.lootItem && (
        <div className="bg-gray-900/60 rounded px-3 py-2">
          <div className="text-sm text-white font-medium">
            🎁 {result.lootItem.name}
            {conditionText && (
              <span className={`ml-2 text-xs ${conditionText.color.split(' ')[0]}`}>
                ({conditionText[lang].toUpperCase()})
              </span>
            )}
          </div>
          <div className="text-[11px] text-gray-500 italic">{result.lootItem.nameEN}</div>
        </div>
      )}

      {/* Spell */}
      {result.spellName && (
        <div className="mt-2 bg-indigo-900/30 rounded px-3 py-1.5 border border-indigo-700/30">
          <div className="text-xs text-indigo-400">
            📜 <span className="font-medium">{result.spellName}</span>
            <span className="text-indigo-400/60 ml-1">({result.spellNameEN})</span>
            <span className="ml-2 text-indigo-500">Lv.{result.spellLevel}</span>
          </div>
        </div>
      )}

      {/* Nothing */}
      {result.finalRarity === 'Niente' && (
        <div className="text-center py-3 text-gray-500">
          <span className="text-2xl">💀</span>
          <div className="text-sm mt-1">{lang === 'it' ? 'Niente bottino' : 'No loot'}</div>
        </div>
      )}
    </div>
  );
}
