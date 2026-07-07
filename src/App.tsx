import { useState, useEffect, useCallback } from 'react';
import { Dices, BookOpen, ScrollText, History, Globe } from 'lucide-react';
import LootRoller from './components/LootRoller';
import RollHistory from './components/RollHistory';
import TablesReference from './components/TablesReference';
import RulesReference from './components/RulesReference';
import type { RollResult } from './utils/diceEngine';

type Tab = 'roll' | 'history' | 'tables' | 'rules';
type Lang = 'it' | 'en';

const HISTORY_KEY = 'dnd-loot-rng-history';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('roll');
  const [lang, setLang] = useState<Lang>('it');
  const [history, setHistory] = useState<RollResult[]>(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch {
      // Storage full or unavailable
    }
  }, [history]);

  const handleRoll = useCallback((result: RollResult) => {
    setHistory(prev => [result, ...prev]);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const tabs: { id: Tab; label: { it: string; en: string }; icon: typeof Dices }[] = [
    { id: 'roll', label: { it: 'Tira', en: 'Roll' }, icon: Dices },
    { id: 'history', label: { it: 'Storico', en: 'History' }, icon: History },
    { id: 'tables', label: { it: 'Tabelle', en: 'Tables' }, icon: ScrollText },
    { id: 'rules', label: { it: 'Regole', en: 'Rules' }, icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Dices size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
                  D&D 5e Loot RNG
                </h1>
                <p className="text-[10px] text-gray-500 leading-tight">
                  {lang === 'it' ? 'Edizione 2014 & 2024 • SRD 5.1' : '2014 & 2024 Edition • SRD 5.1'}
                </p>
              </div>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(l => (l === 'it' ? 'en' : 'it'))}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs text-gray-300 transition-colors border border-gray-700"
              title={lang === 'it' ? 'Switch to English' : 'Passa all\'italiano'}
            >
              <Globe size={14} />
              {lang === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {activeTab === 'roll' && <LootRoller onRoll={handleRoll} lang={lang} />}
        {activeTab === 'history' && (
          <RollHistory history={history} onClear={clearHistory} lang={lang} />
        )}
        {activeTab === 'tables' && <TablesReference lang={lang} />}
        {activeTab === 'rules' && <RulesReference lang={lang} />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 shadow-2xl">
        <div className="max-w-4xl mx-auto flex">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const historyCount = tab.id === 'history' ? history.length : 0;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-2 transition-colors relative ${
                  isActive
                    ? 'text-amber-400'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-amber-400 rounded-full" />
                )}
                <div className="relative">
                  <Icon size={20} />
                  {historyCount > 0 && tab.id === 'history' && (
                    <span className="absolute -top-1.5 -right-2.5 w-4 h-4 bg-red-600 rounded-full text-[9px] font-bold flex items-center justify-center text-white">
                      {historyCount > 99 ? '99' : historyCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium">{tab.label[lang]}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
