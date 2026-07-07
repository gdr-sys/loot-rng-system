interface RulesReferenceProps {
  lang: 'it' | 'en';
}

export default function RulesReference({ lang }: RulesReferenceProps) {
  if (lang === 'it') {
    return (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
          <h3 className="text-lg font-bold text-amber-400 mb-3">1. Come Funziona il Sistema</h3>
          <p className="mb-3">
            Il sistema è progettato per essere rapido, coerente e utilizzabile sia in D&D 5e 2014 che 2024.
            Ogni incontro richiede al massimo <strong className="text-white">due tiri di dado</strong>.
          </p>
          <div className="bg-gray-900/50 rounded-lg p-4 mb-3">
            <h4 className="font-bold text-white mb-2">Procedura per incontro:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong className="text-amber-400">Passo 1</strong> — Tira 1d100 e consulta la tabella Ranghi e Probabilità per determinare se c'è loot e di che rarità.</li>
              <li><strong className="text-amber-400">Passo 2</strong> — Se c'è loot, identifica categoria e sottocategoria del nemico, poi tira 1d8 sulla tabella corrispondente.</li>
            </ol>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Regole fondamentali:</h4>
            <ul className="space-y-2">
              <li>🔹 <strong className="text-white">MINION:</strong> tiro unico per l'intero gruppo, non per ogni creatura.</li>
              <li>🔹 <strong className="text-white">ELITE e BOSS:</strong> tiro singolo per ogni creatura.</li>
              <li>🔹 Il rango viene stabilito dal DM in base al contesto narrativo, non necessariamente dal CR ufficiale.</li>
              <li>🔹 <strong className="text-red-400">Non esiste un sistema di pity.</strong> Se il dado dice che non c'è nulla, è così.</li>
              <li>🔹 Non è previsto il crafting. I materiali senza valore meccanico sono indicati come tali.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
          <h3 className="text-lg font-bold text-amber-400 mb-3">2. Test della Fortuna</h3>
          <p>
            Per i valori <strong className="text-white">75</strong> e <strong className="text-white">90</strong> sul d100,
            tira un <strong className="text-emerald-400">1d4 extra</strong>: con valori superiori alla media (3-4),
            passi alla rarità successiva.
          </p>
        </section>

        <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
          <h3 className="text-lg font-bold text-amber-400 mb-3">3. Stato degli Oggetti (Opzionale)</h3>
          <p className="mb-3">Regola opzionale e narrativa, senza tiri aggiuntivi. Il DM valuta liberamente.</p>
          <div className="space-y-2">
            <div className="flex gap-3 items-start">
              <span className="text-green-400 font-bold shrink-0">INTATTO</span>
              <span>— Nemico ben equipaggiato, lo scontro non ha danneggiato l'oggetto.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-yellow-400 font-bold shrink-0">DANNEGGIATO</span>
              <span>— Scontro violento o nemico mal equipaggiato. Richiede riparazione.</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-red-400 font-bold shrink-0">INUTILIZZABILE</span>
              <span>— Oggetto distrutto dallo scontro o in condizioni pessime. Non recuperabile.</span>
            </div>
          </div>
        </section>

        <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
          <h3 className="text-lg font-bold text-amber-400 mb-3">4. Tabelle Probabilità Speciali</h3>
          <ul className="space-y-2">
            <li>📊 <strong className="text-white">Standard</strong> — Umanoidi, Non Morti, Demoni & Diavoli, Draghi, Costrutti, Aberrazioni, Fate, Giganti, Elementali.</li>
            <li>🐻 <strong className="text-white">Bestie</strong> — Nessun Leggendario. Probabilità ridotte.</li>
            <li>🫠 <strong className="text-white">Melme & Ooze</strong> — Solo acido-resistenti. Nessun Epico per Minion/Elite. Nessun Leggendario.</li>
            <li>🌿 <strong className="text-white">Piante</strong> — Nessun Leggendario.</li>
            <li>✨ <strong className="text-white">Celestiali</strong> — Portano sempre qualcosa di significativo. Probabilità di Niente molto basse.</li>
          </ul>
        </section>
      </div>
    );
  }

  // English version
  return (
    <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
      <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
        <h3 className="text-lg font-bold text-amber-400 mb-3">1. How the System Works</h3>
        <p className="mb-3">
          The system is designed to be fast, consistent, and usable in both D&D 5e 2014 and 2024.
          Each encounter requires at most <strong className="text-white">two dice rolls</strong>.
        </p>
        <div className="bg-gray-900/50 rounded-lg p-4 mb-3">
          <h4 className="font-bold text-white mb-2">Encounter Procedure:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-amber-400">Step 1</strong> — Roll 1d100 and consult the Ranks and Probabilities table to determine if there's loot and its rarity.</li>
            <li><strong className="text-amber-400">Step 2</strong> — If there's loot, identify the enemy's category and subcategory, then roll 1d8 on the corresponding table.</li>
          </ol>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4">
          <h4 className="font-bold text-white mb-2">Core Rules:</h4>
          <ul className="space-y-2">
            <li>🔹 <strong className="text-white">MINION:</strong> Single roll for the entire group, not per creature.</li>
            <li>🔹 <strong className="text-white">ELITE and BOSS:</strong> Single roll per creature.</li>
            <li>🔹 Rank is determined by the DM based on narrative context, not necessarily by official CR.</li>
            <li>🔹 <strong className="text-red-400">There is no pity system.</strong> If the die says nothing, that's it.</li>
            <li>🔹 Crafting is not included. Materials with no mechanical value are labeled as such.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
        <h3 className="text-lg font-bold text-amber-400 mb-3">2. Luck Test</h3>
        <p>
          For values <strong className="text-white">75</strong> and <strong className="text-white">90</strong> on the d100,
          roll an extra <strong className="text-emerald-400">1d4</strong>: with above-average results (3-4),
          you upgrade to the next rarity.
        </p>
      </section>

      <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
        <h3 className="text-lg font-bold text-amber-400 mb-3">3. Item Condition (Optional)</h3>
        <p className="mb-3">Optional narrative rule, no additional rolls. DM decides freely.</p>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="text-green-400 font-bold shrink-0">INTACT</span>
            <span>— Well-equipped enemy, combat didn't damage the item.</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-yellow-400 font-bold shrink-0">DAMAGED</span>
            <span>— Violent combat or poorly equipped enemy. Requires repair.</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-red-400 font-bold shrink-0">UNUSABLE</span>
            <span>— Item destroyed by combat or already in poor condition. Not recoverable.</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-800/60 rounded-xl p-5 border border-gray-700">
        <h3 className="text-lg font-bold text-amber-400 mb-3">4. Special Probability Tables</h3>
        <ul className="space-y-2">
          <li>📊 <strong className="text-white">Standard</strong> — Humanoids, Undead, Demons & Devils, Dragons, Constructs, Aberrations, Fey, Giants, Elementals.</li>
          <li>🐻 <strong className="text-white">Beasts</strong> — No Legendary. Reduced probabilities.</li>
          <li>🫠 <strong className="text-white">Oozes & Slimes</strong> — Acid-resistant only. No Epic for Minion/Elite. No Legendary.</li>
          <li>🌿 <strong className="text-white">Plants</strong> — No Legendary.</li>
          <li>✨ <strong className="text-white">Celestials</strong> — Always carry something significant. Very low Nothing chance.</li>
        </ul>
      </section>
    </div>
  );
}
