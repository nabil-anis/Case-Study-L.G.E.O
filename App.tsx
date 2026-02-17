
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ReadingView from './components/ReadingView';
import Settings from './components/Settings';

const App: React.FC = () => {
  // Reading is the landing page view as per project requirements
  const [viewMode, setViewMode] = useState<'visuals' | 'reading'>('reading');

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white overflow-x-hidden selection:bg-blue-500/30 font-inter">
      {/* Dynamic Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-cyan-900/05 blur-[100px] rounded-full" />
      </div>
      
      {/* Absolute Header (Not anchored, scrolls with page) */}
      <nav className="absolute top-10 inset-x-0 z-50 flex flex-col items-center gap-6 pointer-events-none px-4">
        <div className="pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="glass-dark px-6 md:px-8 py-3 rounded-full flex items-center justify-center border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-2xl transition-all hover:border-white/20 hover:scale-[1.02] duration-300">
             <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-center">
               <span className="font-outfit font-black text-sm md:text-lg tracking-[0.2em] text-white uppercase whitespace-nowrap">
                 L.G.E.O
               </span>
               <span className="hidden md:inline text-white/20">|</span>
               <span className="font-outfit font-medium text-[10px] md:text-xs tracking-[0.1em] text-gray-400 uppercase whitespace-nowrap">
                 Made for <span className="text-blue-400 font-bold">Wise Business Plans</span>
               </span>
             </div>
          </div>
        </div>

        {/* Global View Toggle */}
        <div className="pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-1000 delay-150">
          <div className="glass p-1 rounded-full flex relative w-48 md:w-56 h-10 md:h-12 bg-black/40 border border-white/5 shadow-inner">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-b from-white/15 to-white/5 rounded-full transition-all duration-300 ease-out border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
                viewMode === 'visuals' ? 'left-1' : 'left-[calc(50%+2px)]'
              }`}
            />
            <button 
              onClick={() => setViewMode('visuals')}
              className={`flex-1 relative z-10 text-[10px] md:text-[11px] uppercase tracking-widest font-bold transition-colors duration-300 ${viewMode === 'visuals' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Visuals
            </button>
            <button 
              onClick={() => setViewMode('reading')}
              className={`flex-1 relative z-10 text-[10px] md:text-[11px] uppercase tracking-widest font-bold transition-colors duration-300 ${viewMode === 'reading' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Case Study
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Stream */}
      <main className="pt-64 pb-20 space-y-24 md:space-y-32">
        
        <section id="content-view" className="max-w-7xl mx-auto px-4 md:px-6">
          {viewMode === 'visuals' ? (
            <Dashboard />
          ) : (
            <ReadingView />
          )}
        </section>

        {/* Section 2: Tech Stack / Footer */}
        <section id="about" className="max-w-7xl mx-auto px-4 md:px-6">
          <Settings />
        </section>

      </main>

      <footer className="border-t border-white/5 py-10 text-center text-gray-600 text-[10px] md:text-xs tracking-wider uppercase">
        <p>&copy; 2026 L.G.E.O Internal Systems. Wise Business Plans.</p>
      </footer>
    </div>
  );
};

export default App;
