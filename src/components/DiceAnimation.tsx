import { useState, useEffect } from 'react';

interface DiceAnimationProps {
  value: number;
  sides: number;
  label: string;
  isRolling: boolean;
  color?: string;
}

export default function DiceAnimation({ value, sides, label, isRolling, color = 'from-red-600 to-red-800' }: DiceAnimationProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * sides) + 1);
      }, 50);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        setDisplayValue(value);
      }, 800);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } else {
      setDisplayValue(value);
    }
  }, [isRolling, value, sides]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg transform transition-transform ${
          isRolling ? 'animate-bounce' : ''
        }`}
      >
        <span className="text-white font-bold text-xl sm:text-2xl font-mono">
          {displayValue}
        </span>
      </div>
      <span className="text-xs text-gray-400 font-mono">{label}</span>
    </div>
  );
}
