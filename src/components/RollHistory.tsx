import { Trash2, Download } from 'lucide-react';
import type { RollResult, ItemCondition } from '../utils/diceEngine';
import RarityBadge from './RarityBadge';

interface RollHistoryProps {
  history: RollResult[];
  onClear: () => void;
  lang: 'it' | 'en';
}

const conditionLabels: Record<ItemCondition, { it: string; en: string }> = {
  intatto: { it: 'Intatto', en: 'Intact' },
  danneggiato: { it: 'Danneggiato', en: 'Damaged' },
  inutilizzabile: { it: 'Inutilizzabile', en: 'Unusable' },
  maledetto: { it: 'Maledetto', en: 'Cursed' },
};

export default function RollHistory({ history, onClear, lang }: RollHistoryProps) {
  const exportHistory = () => {
    const lines = history.map(r => {
      const time = new Date(r.timestamp).toLocaleTimeString();
      const date = new Date(r.timestamp).toLocaleDateString();
      const condition = r.condition ? ` [${conditionLabels[r.condition][lang].toUpperCase()}]` : '';
      const loot = r.lootItem ? `${r.lootItem.name}${condition} (${r.lootItem.nameEN})` : (r.finalRarity === 'Niente' ? 'Niente / Nothing' : '—');
      const spell = r.spellName ? ` [Spell: ${r.spellName} / ${r.spellNameEN} Lv.${r.spellLevel}]` : '';
      const rollInfo = r.totalRolls && r.totalRolls > 1 ? ` [${r.rollIndex}/${r.totalRolls}]` : '';
      return `[${date} ${time}]${rollInfo} ${r.playerName} | ${r.rank} | ${lang === 'it' ? r.category.name : r.category.nameEN} | d100:${r.d100Roll} → ${r.finalRarity} | d8:${r.d8Roll ?? '—'} | ${loot}${spell}`;
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `loot-history-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <div className="text-6xl mb-4">🎲</div>
        <p className="text-lg">{lang === 'it' ? 'Nessun tiro ancora' : 'No rolls yet'}</p>
        <p className="text-sm mt-2">{lang === 'it' ? 'Vai su "Tira" per iniziare!' : 'Go to "Roll" to start!'}</p>
      </div>
    );
  }

  // Group by date
  const groupedByDate: Record<string, RollResult[]> = {};
  history.forEach(r => {
    const date = new Date(r.timestamp).toLocaleDateString();
    if (!groupedByDate[date]) groupedByDate[date] = [];
    groupedByDate[date].push(r);
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          📜 {lang === 'it' ? 'Storico Completo' : 'Full History'}
          <span className="text-sm font-normal text-gray-500">({history.length} {lang === 'it' ? 'tiri' : 'rolls'})</span>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={exportHistory}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs text-gray-300 transition-colors"
          >
            <Download size={14} />
            {lang === 'it' ? 'Esporta .txt' : 'Export .txt'}
          </button>
          <button
            onClick={() => {
              if (confirm(lang === 'it' ? 'Cancellare tutto lo storico?' : 'Clear all history?')) {
                onClear();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-900/50 hover:bg-red-800/50 rounded-lg text-xs text-red-400 transition-colors"
          >
            <Trash2 size={14} />
            {lang === 'it' ? 'Cancella tutto' : 'Clear all'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedByDate).map(([date, rolls]) => (
          <div key={date}>
            <h3 className="text-sm font-medium text-gray-500 mb-2 sticky top-0 bg-gray-900/90 py-1 backdrop-blur-sm">
              📅 {date} <span className="text-gray-600">({rolls.length})</span>
            </h3>
            <div className="space-y-2">
              {rolls.map(r => (
                <HistoryItem key={r.id} result={r} lang={lang} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistoryItem({ result: r, lang }: { result: RollResult; lang: 'it' | 'en' }) {
  const conditionText = r.condition ? conditionLabels[r.condition] : null;
  
  return (
    <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-3 hover:bg-gray-800/80 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-white font-medium">{r.playerName}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-sm">{r.rank}</span>
            {r.totalRolls && r.totalRolls > 1 && (
              <>
                <span className="text-gray-600">•</span>
                <span className="bg-amber-900/40 text-amber-400 text-xs px-1.5 py-0.5 rounded">
                  {r.rollIndex}/{r.totalRolls}
                </span>
              </>
            )}
          </div>
          
          {/* Category */}
          <div className="text-xs text-gray-500 mb-2">
            {lang === 'it' ? r.category.name : r.category.nameEN}
          </div>
          
          {/* Rarity + Dice */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <RarityBadge rarity={r.finalRarity} />
            {r.luckyUpgrade && <span className="text-emerald-400 text-xs">⬆ Lucky!</span>}
            <span className="text-gray-600 text-xs font-mono">
              d100:{r.d100Roll}
              {r.luckyD4Roll !== undefined && ` d4:${r.luckyD4Roll}`}
              {r.d8Roll !== undefined && ` d8:${r.d8Roll}`}
            </span>
          </div>
          
          {/* Loot */}
          {r.lootItem && (
            <div className="bg-gray-900/60 rounded px-2 py-1.5 mb-1">
              <div className="text-sm text-white">
                🎁 {r.lootItem.name}
                {conditionText && (
                  <span className="text-purple-400 text-xs ml-1">
                    ({conditionText[lang].toUpperCase()})
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 italic">{r.lootItem.nameEN}</div>
            </div>
          )}
          
          {/* Spell */}
          {r.spellName && (
            <div className="text-xs text-indigo-400 bg-indigo-900/20 rounded px-2 py-1">
              📜 {r.spellName} ({r.spellNameEN}) — Lv.{r.spellLevel}
            </div>
          )}
          
          {/* Nothing */}
          {r.finalRarity === 'Niente' && (
            <div className="text-gray-500 text-sm">💀 {lang === 'it' ? 'Niente bottino' : 'No loot'}</div>
          )}
        </div>
        
        {/* Timestamp */}
        <div className="text-right shrink-0">
          <div className="text-[10px] text-gray-600 font-mono">
            {new Date(r.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}
