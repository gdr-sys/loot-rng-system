import { useState, useCallback } from 'react';
import { Dices, BookOpen, ScrollText, History, Globe } from 'lucide-react';
import { DataProvider } from './context/DataContext';
import LootRoller from './components/LootRoller';
import RollHistory from './components/RollHistory';
import TablesReference from './components/TablesReference';
import RulesReference from './components/RulesReference';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { RollResult } from './utils/diceEngine';

type Tab = 'roll' | 'history' | 'tables' | 'rules';
type Lang = 'it' | 'en';

function AppContent() {
  const [activeTab, setActiveTab] = useState<Tab>('roll');
  const [lang, setLang] = useState<Lang>('it');
  const [history, setHistory] = useLocalStorage<RollResult[]>('dnd-loot-rng-history', []);
  const [lastResults, setLastResults] = useState<RollResult[]>([]);

  const handleRoll = useCallback((results: RollResult[]) => {
    setLastResults(results);
    setHistory(prev => [...results, ...prev]);
  }, [setHistory]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setLastResults([]);
  }, [setHistory]);

  const tabs: { id: Tab; label: { it: string; en: string }; icon: typeof Dices; badge?: number }[] = [
    { id: 'roll', label: { it: '🎲 Tira', en: '🎲 Roll' }, icon: Dices },
    { id: 'history', label: { it: '📜 Storico', en: '📜 History' }, icon: History, badge: history.length },
    { id: 'tables', label: { it: '📊 Tabelle', en: '📊 Tables' }, icon: ScrollText },
    { id: 'rules', label: { it: '📖 Regole', en: '📖 Rules' }, icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Dices size={20} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent leading-tight">
                  D&D 5e Loot RNG
                </h1>
                <p className="text-[9px] text-gray-500 leading-tight">SRD 5.1 • 2014 & 2024</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex items-center gap-1 flex-1 justify-center">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {tab.label[lang]}
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-[9px] font-bold flex items-center justify-center text-white">
                      {tab.badge > 99 ? '99' : tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(l => (l === 'it' ? 'en' : 'it'))}
              className="flex items-center gap-1 px-2 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs text-gray-300 transition-colors border border-gray-700 shrink-0"
              title={lang === 'it' ? 'Switch to English' : 'Passa all\'italiano'}
            >
              <Globe size={12} />
              {lang === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-4">
        {activeTab === 'roll' && (
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <LootRoller onRoll={handleRoll} lang={lang} lastResults={lastResults} />
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <RollHistory history={history} onClear={clearHistory} lang={lang} />
          </div>
        )}

        {activeTab === 'tables' && (
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <TablesReference lang={lang} />
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
            <RulesReference lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-2 text-center text-[10px] text-gray-600 border-t border-gray-800/50">
        D&D 5e Loot RNG System • Based on SRD 5.1 • {lang === 'it' ? 'Edizione 2014 & 2024' : '2014 & 2024 Edition'}
      </footer>
    </div>
  );
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;
