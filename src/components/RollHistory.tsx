import { Trash2, Download } from 'lucide-react';
import type { RollResult } from '../utils/diceEngine';
import RarityBadge from './RarityBadge';

interface RollHistoryProps {
  history: RollResult[];
  onClear: () => void;
  lang: 'it' | 'en';
}

export default function RollHistory({ history, onClear, lang }: RollHistoryProps) {
  const exportHistory = () => {
    const lines = history.map(r => {
      const time = new Date(r.timestamp).toLocaleTimeString();
      const loot = r.lootItem ? `${r.lootItem.name} (${r.lootItem.nameEN})` : (r.finalRarity === 'Niente' ? 'Niente / Nothing' : '—');
      const spell = r.spellName ? ` [Spell: ${r.spellName} / ${r.spellNameEN} Lv.${r.spellLevel}]` : '';
      return `[${time}] ${r.playerName} | ${r.rank} | ${lang === 'it' ? r.category.name : r.category.nameEN} | d100:${r.d100Roll} → ${r.finalRarity} | d8:${r.d8Roll ?? '—'} | ${loot}${spell}`;
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
      <div className="text-center py-12 text-gray-500">
        <div className="text-4xl mb-3">🎲</div>
        <p>{lang === 'it' ? 'Nessun tiro ancora. Inizia a tirare!' : 'No rolls yet. Start rolling!'}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">
          {lang === 'it' ? `Storico (${history.length} tiri)` : `History (${history.length} rolls)`}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={exportHistory}
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs text-gray-300 transition-colors"
          >
            <Download size={14} />
            {lang === 'it' ? 'Esporta' : 'Export'}
          </button>
          <button
            onClick={onClear}
            className="flex items-center gap-1 px-3 py-1.5 bg-red-900/50 hover:bg-red-800/50 rounded-lg text-xs text-red-400 transition-colors"
          >
            <Trash2 size={14} />
            {lang === 'it' ? 'Cancella tutto' : 'Clear all'}
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
        {history.map(r => (
          <div
            key={r.id}
            className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-3 hover:bg-gray-800/80 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-medium text-sm">{r.playerName}</span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{r.rank}</span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-xs truncate">
                    {lang === 'it' ? r.category.name : r.category.nameEN}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <RarityBadge rarity={r.finalRarity} showEN={lang === 'en'} />
                  {r.luckyUpgrade && (
                    <span className="text-emerald-500 text-xs">⬆ Luck</span>
                  )}
                </div>
                {r.lootItem && (
                  <div className="mt-1.5">
                    <div className="text-sm text-white">{r.lootItem.name}</div>
                    <div className="text-xs text-gray-500 italic">{r.lootItem.nameEN}</div>
                  </div>
                )}
                {r.spellName && (
                  <div className="mt-1 text-xs text-indigo-400">
                    📜 {r.spellName} ({r.spellNameEN}) — Lv.{r.spellLevel}
                  </div>
                )}
              </div>
              <div className="text-right shrink-0">
                <div className="text-[10px] text-gray-600 font-mono">
                  {new Date(r.timestamp).toLocaleTimeString()}
                </div>
                <div className="text-[10px] text-gray-600 font-mono mt-0.5">
                  d100:{r.d100Roll} {r.d8Roll !== undefined && `d8:${r.d8Roll}`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
