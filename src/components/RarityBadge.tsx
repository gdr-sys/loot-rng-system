import type { Rarity } from '../data/lootTables';

const rarityColors: Record<Rarity | 'Niente', { bg: string; text: string; border: string; glow: string }> = {
  'Niente': { bg: 'bg-gray-800/50', text: 'text-gray-400', border: 'border-gray-600', glow: '' },
  'Comune': { bg: 'bg-gray-700/50', text: 'text-gray-300', border: 'border-gray-500', glow: '' },
  'Non Comune': { bg: 'bg-green-900/50', text: 'text-green-400', border: 'border-green-600', glow: 'shadow-green-500/20 shadow-lg' },
  'Raro': { bg: 'bg-blue-900/50', text: 'text-blue-400', border: 'border-blue-600', glow: 'shadow-blue-500/20 shadow-lg' },
  'Epico': { bg: 'bg-purple-900/50', text: 'text-purple-400', border: 'border-purple-600', glow: 'shadow-purple-500/30 shadow-lg' },
  'Leggendario': { bg: 'bg-amber-900/50', text: 'text-amber-400', border: 'border-amber-500', glow: 'shadow-amber-500/30 shadow-lg' },
};

const rarityEN: Record<string, string> = {
  'Niente': 'Nothing',
  'Comune': 'Common',
  'Non Comune': 'Uncommon',
  'Raro': 'Rare',
  'Epico': 'Epic',
  'Leggendario': 'Legendary',
};

interface RarityBadgeProps {
  rarity: Rarity | 'Niente';
  showEN?: boolean;
  large?: boolean;
}

export default function RarityBadge({ rarity, showEN = false, large = false }: RarityBadgeProps) {
  const colors = rarityColors[rarity];
  return (
    <span
      className={`inline-flex items-center gap-1 ${colors.bg} ${colors.text} ${colors.border} border rounded-full font-semibold ${colors.glow} ${
        large ? 'px-4 py-2 text-base' : 'px-3 py-1 text-xs'
      }`}
    >
      {rarity === 'Leggendario' && '✦ '}
      {rarity === 'Epico' && '◆ '}
      {rarity}
      {showEN && rarity !== 'Niente' && (
        <span className="opacity-60 text-xs ml-1">({rarityEN[rarity]})</span>
      )}
    </span>
  );
}

export { rarityColors };
