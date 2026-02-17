
import React, { useState } from 'react';

const CaseStudy: React.FC = () => {
  const [viewMode, setViewMode] = useState<'simple' | 'technical'>('simple');
  const [leadTarget, setLeadTarget] = useState(500);

  // ROI Calculations
  const hoursSaved = Math.round(leadTarget * 0.33); 
  const costSaved = Math.round(hoursSaved * 40).toLocaleString();

  return (
    <div className="space-y-24 md:space-y-32 animate-in fade-in duration-700">
      
      {/* 1. Hero Section - Refined */}
      <div className="relative pt-6 md:pt-10 pb-12 md:pb-20 border-b border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="space-y-6 max-w-3xl w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <i className="fas fa-network-wired text-blue-400"></i> Internal Tool
            </div>
            <h1 className="text-4xl md:text-7xl font-outfit font-extrabold tracking-tight leading-[1.1] text-white">
              L.G.E.O <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">System</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
              Lead Gen & Email Outreach. A custom "Command Center" for Wise Business Plans. Automating high-ticket client acquisition.
            </p>
          </div>
          <div className="glass p-5 md:p-6 rounded-2xl w-full md:w-auto md:min-w-[250px] space-y-4 border-l-2 border-blue-500 bg-gradient-to-r from-white/[0.02] to-transparent">
             <div className="flex flex-row md:flex-col justify-between md:justify-start gap-2">
               <div>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Architecture</p>
                 <p className="font-outfit text-lg md:text-xl font-bold tracking-tight">Headless Automation</p>
               </div>
               <div className="text-right md:text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Efficiency</p>
                  <p className="font-outfit text-lg md:text-xl font-bold text-green-400 tracking-tight glow-text">95% Time Saved</p>
               </div>
             </div>
             <div className="border-t border-white/5 pt-2 md:pt-0 md:border-t-0">
               <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Core Tech</p>
               <p className="font-outfit text-lg md:text-xl font-bold tracking-tight">n8n + Apify + GSheet</p>
             </div>
          </div>
        </div>
      </div>

      {/* 2. The Directive - REIMAGINED as "Mission Parameters" HUD */}
      <div className="relative group">
         {/* HUD Frame */}
         <div className="absolute inset-0 border border-blue-500/20 rounded-[2.5rem] bg-black/40 backdrop-blur-sm -z-10"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
         
         <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400">Mission Parameters</h2>
               </div>
               <h3 className="text-3xl md:text-5xl font-outfit font-bold text-white leading-tight">
                  Eradicate Manual <br/> <span className="text-gray-500">Prospecting Fatigue.</span>
               </h3>
               <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                  The primary directive is to decouple lead acquisition from human effort. The system must autonomousy <span className="text-white font-bold">identify</span>, <span className="text-white font-bold">qualify</span>, and <span className="text-white font-bold">engage</span> targets without agent intervention.
               </p>
            </div>

            {/* Visual HUD Elements */}
            <div className="grid grid-cols-2 gap-4 relative">
               <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group/card">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover/card:bg-blue-500/10 transition-colors"></div>
                  <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center relative">
                     <i className="fas fa-database text-blue-400 text-lg"></i>
                     <div className="absolute inset-0 border-t border-blue-500 rounded-full animate-spin"></div>
                  </div>
                  <div>
                     <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Constraint A</div>
                     <div className="text-white font-bold">Infinite Scale</div>
                  </div>
               </div>

               <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group/card">
                  <div className="absolute inset-0 bg-green-500/5 group-hover/card:bg-green-500/10 transition-colors"></div>
                  <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center relative">
                     <i className="fas fa-shield-halved text-green-400 text-lg"></i>
                     <div className="absolute inset-0 border-b border-green-500 rounded-full animate-spin-slow"></div>
                  </div>
                  <div>
                     <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Constraint B</div>
                     <div className="text-white font-bold">Domain Safety</div>
                  </div>
               </div>

               <div className="col-span-2 glass p-4 rounded-2xl border border-white/5 flex items-center justify-between px-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
                  <div className="flex items-center gap-4">
                     <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">System Status</div>
                     <div className="text-emerald-400 font-mono text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">OPERATIONAL</div>
                  </div>
                  <div className="flex gap-1">
                     <div className="w-1 h-4 bg-emerald-500 rounded-full opacity-20"></div>
                     <div className="w-1 h-4 bg-emerald-500 rounded-full opacity-40"></div>
                     <div className="w-1 h-4 bg-emerald-500 rounded-full opacity-60"></div>
                     <div className="w-1 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 3. The "Lens" - Solution & Architecture (PRESERVED EXACTLY AS IS) */}
      <div id="solution-architecture" className="scroll-mt-32">
        <div className="flex flex-col items-center mb-8 md:mb-12 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 md:mb-8 text-white">The Solution</h2>
          
          <div className="glass p-1 rounded-full flex relative w-full max-w-[300px] h-12 md:h-14 bg-black/40 shadow-inner">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-b from-white/10 to-white/5 rounded-full transition-all duration-300 ease-out border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
                viewMode === 'simple' ? 'left-1' : 'left-[calc(50%+2px)]'
              }`}
            />
            <button 
              onClick={() => setViewMode('simple')}
              className={`flex-1 relative z-10 text-xs md:text-sm font-bold transition-colors duration-300 ${viewMode === 'simple' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Workflow
            </button>
            <button 
              onClick={() => setViewMode('technical')}
              className={`flex-1 relative z-10 text-xs md:text-sm font-bold transition-colors duration-300 ${viewMode === 'technical' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Architecture
            </button>
          </div>
          <p className="mt-4 text-[10px] md:text-xs text-gray-500 font-mono tracking-tight animate-in fade-in">
            {viewMode === 'simple' ? 'VIEWING AS: SALES AGENT' : 'VIEWING AS: AUTOMATION ENGINEER'}
          </p>
        </div>

        <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 overflow-hidden relative transition-all duration-500 min-h-[450px] border border-white/10 bg-black/20">
           {/* Simple View */}
           <div className={`transition-all duration-500 absolute inset-0 p-6 md:p-12 overflow-y-auto ${viewMode === 'simple' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
              <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 py-4 md:py-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto text-cyan-400 mb-2 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  <i className="fas fa-magic text-2xl md:text-3xl"></i>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">Click & Forget</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  Input your target criteria, click start, and watch the dashboard fill with qualified leads. The system handles the rest.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8 text-left sm:text-center">
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3 sm:mx-auto">1</div>
                    <h4 className="font-bold text-white mb-1">Target</h4>
                    <p className="text-xs md:text-sm text-gray-400">Select niche: SBA Loan, EB-5 Visa, or VC Funding.</p>
                  </div>
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 sm:mx-auto">2</div>
                    <h4 className="font-bold text-white mb-1">Store</h4>
                    <p className="text-xs md:text-sm text-gray-400">Data displayed on UI & backed up to GSheets.</p>
                  </div>
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-3 sm:mx-auto">3</div>
                    <h4 className="font-bold text-white mb-1">Contact</h4>
                    <p className="text-xs md:text-sm text-gray-400">Staggered emails sent safely over 12 hours.</p>
                  </div>
                </div>
              </div>
           </div>

           {/* Technical View */}
           <div className={`transition-all duration-500 absolute inset-0 p-6 md:p-12 overflow-y-auto ${viewMode === 'technical' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex-shrink-0 flex items-center justify-center text-blue-400 font-mono text-xs md:text-sm border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">01</div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 font-mono">Apify & GSheets</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        n8n triggers <span className="text-white">Google Maps Scraper</span>. Data is cleaned, sent to React UI, and <span className="text-white">appended to Google Sheet</span>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-indigo-500/10 flex-shrink-0 flex items-center justify-center text-indigo-400 font-mono text-xs md:text-sm border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">02</div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 font-mono">The Stagger Loop</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        User triggers outreach via webhook. n8n iterates through the lead array with a <span className="text-white">Wait Node (15 mins)</span> between each SMTP dispatch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-400 font-mono text-xs md:text-sm border border-green-500/20 group-hover:bg-green-500/20 transition-colors">03</div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 font-mono">Contextual Injection</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        Templates are dynamically populated. "Immigration" tag triggers E-2 Visa copy; "Finance" tag triggers Business Plan copy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-xl p-4 md:p-6 border border-white/5 font-mono text-[10px] md:text-xs text-gray-400 overflow-y-auto max-h-[300px] md:max-h-[400px] shadow-inner">
                  <p className="text-blue-400 mb-2">// n8n Execution Log</p>
                  <div className="space-y-3">
                    <div className="flex gap-2 border-l-2 border-cyan-500/30 pl-3">
                      <span className="text-cyan-500 font-bold">[APIFY]</span>
                      <span>Task Completed. 50 leads extracted from 'Immigration Lawyers'.</span>
                    </div>
                    <div className="flex gap-2 border-l-2 border-green-500/30 pl-3">
                      <span className="text-green-500 font-bold">[GSHEET]</span>
                      <span>Row Appended: Wise_Leads_Master_v2.</span>
                    </div>
                    <div className="flex gap-2 border-l-2 border-indigo-500/30 pl-3">
                      <span className="text-indigo-500 font-bold">[WEBHOOK]</span>
                      <span>User triggered outreach campaign.</span>
                    </div>
                     <div className="flex gap-2 border-l-2 border-gray-500/30 pl-3">
                      <span className="text-gray-500 font-bold">[WAIT]</span>
                      <span>Pausing for 900000ms (15 mins)...</span>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* 4. Enhanced Impact Metrics - REIMAGINED VISUALS */}
      <div>
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 md:mb-10 text-white">Impact & ROI</h2>
        
        {/* Interactive Calculator */}
        <div className="glass p-8 md:p-12 rounded-[2.5rem] mb-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
           {/* Background glow */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full space-y-8">
              <div>
                  <h3 className="text-3xl font-bold font-outfit text-white mb-2">Efficiency Engine</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Estimate your savings by adjusting the lead volume target.
                  </p>
              </div>
              
              <div className="space-y-6 pt-4 p-6 bg-black/20 rounded-2xl border border-white/5">
                <div className="flex justify-between text-sm font-bold items-end">
                  <span className="text-gray-300">Monthly Leads</span>
                  <span className="text-4xl font-outfit text-blue-400">{leadTarget}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={leadTarget} 
                  onChange={(e) => setLeadTarget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                />
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-mono tracking-widest">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 italic border-l-2 border-white/10 pl-3">
                * Based on ~20 mins manual effort per lead (Search, Qualify, Email) vs 0 mins automated.
              </p>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.2)] group hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <h4 className="text-5xl font-bold text-white font-outfit mb-2 tracking-tight">{hoursSaved}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Hours Saved</p>
               </div>
               <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.2)] group hover:border-green-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-sack-dollar text-xl"></i>
                  </div>
                  <h4 className="text-5xl font-bold text-white font-outfit mb-2 tracking-tight">${costSaved}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Est. Savings</p>
               </div>
            </div>
          </div>
        </div>

        {/* Updated Visual Charts - REPLACING STANDARD CHARTS WITH CREATIVE VISUALS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Visual 1: Extraction Core (Replacing Lead Velocity Chart) */}
            <div className="glass p-8 rounded-[2.5rem] flex flex-col min-h-[400px] border border-white/10 bg-black/20 relative overflow-hidden group">
               {/* Animated Background */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] animate-pulse"></div>
               
               <div className="relative z-10 mb-8 flex justify-between items-end">
                 <div>
                    <h4 className="font-bold text-white text-xl mb-1 font-outfit">Extraction Velocity</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Real-time Throughput</p>
                 </div>
                 <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-mono animate-pulse">
                    LIVE
                 </div>
               </div>
               
               <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                  {/* Central Core Visual */}
                  <div className="w-48 h-48 rounded-full border-4 border-blue-500/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-[spin_3s_linear_infinite]"></div>
                      <div className="absolute inset-2 rounded-full border-b-4 border-cyan-400/50 animate-[spin_4s_linear_infinite_reverse]"></div>
                      <div className="w-32 h-32 bg-blue-500/10 rounded-full blur-xl absolute"></div>
                      <div className="text-center">
                          <div className="text-4xl font-bold text-white font-outfit">850</div>
                          <div className="text-[10px] uppercase text-blue-300 font-bold tracking-widest">Leads/Hr</div>
                      </div>
                  </div>

                  <div className="w-full mt-12 grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-gray-500 text-[10px] uppercase font-bold mb-1">Manual</div>
                          <div className="text-red-400 font-mono text-lg">12/hr</div>
                      </div>
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                          <div className="text-blue-300 text-[10px] uppercase font-bold mb-1">L.G.E.O</div>
                          <div className="text-white font-mono text-lg">850/hr</div>
                      </div>
                       <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-gray-500 text-[10px] uppercase font-bold mb-1">Gain</div>
                          <div className="text-green-400 font-mono text-lg">70x</div>
                      </div>
                  </div>
               </div>
            </div>

            {/* Visual 2: Temporal Efficiency (Replacing Time Chart) */}
            <div className="glass p-8 rounded-[2.5rem] flex flex-col min-h-[400px] border border-white/10 bg-black/20 relative overflow-hidden">
               
               <div className="relative z-10 mb-10">
                 <h4 className="font-bold text-white text-xl mb-1 font-outfit">Temporal Shift</h4>
                 <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Process Time Comparison</p>
               </div>
               
               <div className="flex-1 flex flex-col justify-center gap-12 relative z-10 px-4">
                  
                  {/* Timeline 1: Manual */}
                  <div className="relative">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          <span>Manual Workflow</span>
                          <span className="text-red-400">Slow</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500/50 w-[80%] rounded-full relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.8)]"></div>
                          </div>
                      </div>
                      <div className="mt-2 text-[10px] text-gray-600 font-mono">
                          Search • • • Qualify • • • • Copy • • • • Paste • • • Email
                      </div>
                  </div>

                  {/* Timeline 2: Automated */}
                  <div className="relative">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white mb-2">
                          <span className="flex items-center gap-2"><i className="fas fa-bolt text-yellow-400"></i> L.G.E.O Workflow</span>
                          <span className="text-green-400">Instant</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[5%] rounded-full relative shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] animate-ping"></div>
                          </div>
                      </div>
                      <div className="mt-2 text-[10px] text-cyan-400/60 font-mono">
                          Done.
                      </div>
                  </div>

                  {/* Summary Block */}
                  <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-blue-900/20 to-transparent border border-white/5 flex items-center justify-between">
                      <div>
                          <div className="text-xs text-gray-400 uppercase font-bold mb-1">Time Compression</div>
                          <div className="text-2xl font-bold text-white font-outfit">98.5%</div>
                      </div>
                      <div className="h-10 w-[1px] bg-white/10"></div>
                      <div>
                          <div className="text-xs text-gray-400 uppercase font-bold mb-1">Resource Freeing</div>
                          <div className="text-2xl font-bold text-white font-outfit">40 hrs/wk</div>
                      </div>
                  </div>

               </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudy;
