
import React from 'react';

const ReadingView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-800">
      
      {/* Header */}
      <header className="space-y-8 border-b border-white/5 pb-16">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
          Internal Tool <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span> Wise Business Plans
        </div>
        <h1 className="text-4xl md:text-6xl font-outfit font-extrabold tracking-tight text-white leading-tight">
          System: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">L.G.E.O</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
            Lead Gen & Email Outreach — Automating High-Ticket Client Acquisition
        </p>
        <div className="flex flex-wrap gap-8 items-center text-xs text-gray-500 font-mono uppercase tracking-[0.2em]">
          <div className="space-y-1">
             <p className="text-[9px] opacity-50">Deployed For</p>
             <p className="text-gray-300">Wise Business Plans</p>
          </div>
          <div className="space-y-1">
             <p className="text-[9px] opacity-50">Core Engine</p>
             <p className="text-gray-300">n8n + Apify + GSheets</p>
          </div>
          <div className="space-y-1">
             <p className="text-[9px] opacity-50">Outcome</p>
             <p className="text-emerald-400">95% Time Reduction</p>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <article className="prose prose-invert prose-lg max-w-none space-y-16">
        
        <section className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white border-l-4 border-blue-500 pl-6 tracking-tight">1. Executive Summary</h2>
          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
            <p>
              <strong>L.G.E.O</strong> is a custom-built internal tool designed for Wise Business Plans to automate the discovery and outreach process for high-value business plan services (SBA 7(a) loans, EB-5 Visas, and Venture Capital).
            </p>
            <p>
              By integrating a reactive frontend with <strong>n8n automation</strong> and <strong>Apify scraping agents</strong>, the system reduces manual prospecting time by 95%. It transforms a fragmented workflow into a controlled operation: scraping live data, backing it up to Google Sheets, and executing safe, time-staggered email campaigns.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white border-l-4 border-cyan-500 pl-6 tracking-tight">2. The Problem & Friction</h2>
          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
            <p>Wise Business Plans creates specialized documentation for businesses seeking capital. Finding these businesses manually is inefficient.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-2xl">
                    <h5 className="text-white font-bold mb-2">Data Scarcity</h5>
                    <p className="text-sm text-gray-500">Finding a business that just applied for an SBA loan requires scraping noisy registries like Google Maps and State Filings.</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                    <h5 className="text-white font-bold mb-2">Manual Fatigue</h5>
                    <p className="text-sm text-gray-500">Agents spent hours copying data into spreadsheets and sending emails one by one.</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                    <h5 className="text-white font-bold mb-2">Spam Risks</h5>
                    <p className="text-sm text-gray-500">Sending bulk emails instantaneously triggers spam filters. A staggered approach was mandatory.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white border-l-4 border-indigo-500 pl-6 tracking-tight">3. Automation Pipeline</h2>
          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
            <p>
              The application operates on a <strong>Headless Automation</strong> model split into two clear phases: <span className="text-cyan-400">Phase 1: Lead Generation</span> and <span className="text-purple-400">Phase 2: Email Outreach</span>.
            </p>

            {/* LIVE FLOW DIAGRAM */}
            <div className="mt-12 p-6 md:p-12 rounded-[2.5rem] bg-black/20 border border-white/5 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
                
                <h3 className="text-xl md:text-2xl font-outfit font-bold text-white mb-12 text-center relative z-10">
                    The L.G.E.O Workflow
                </h3>

                <div className="relative">
                    {/* Vertical Line Connector */}
                    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-green-500/20 md:-translate-x-1/2"></div>

                    {/* --- PHASE 1 HEADER --- */}
                    <div className="relative z-10 flex items-center justify-center gap-4 mb-12">
                       <div className="h-px bg-cyan-500/30 w-12 md:w-24"></div>
                       <span className="text-cyan-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold bg-[#050505] px-2 border border-cyan-500/30 rounded-full py-1">Phase 1: Lead Generation</span>
                       <div className="h-px bg-cyan-500/30 w-12 md:w-24"></div>
                    </div>

                    {/* Step 1: UI Trigger */}
                    <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 mb-10 group">
                        <div className="order-2 md:order-1 flex-1 md:text-right pt-1 md:pt-0">
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">1. Parameter Input</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                User inputs industry & location (e.g., "Software in Austin") into the React UI.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center relative z-20">
                            <i className="fas fa-keyboard text-[10px] text-cyan-200"></i>
                        </div>
                        <div className="order-3 hidden md:block flex-1"></div>
                    </div>

                    {/* Step 2: Apify Scrape */}
                    <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 mb-10 group">
                        <div className="order-3 md:order-1 hidden md:block flex-1"></div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center relative z-20">
                            <i className="fas fa-robot text-[10px] text-cyan-200"></i>
                        </div>
                        <div className="order-2 md:order-3 flex-1 md:text-left pt-1 md:pt-0">
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">2. Apify Extraction</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                n8n webhook triggers Apify Actor to scrape Google Maps/LinkedIn for fresh data.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Cleaning */}
                    <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 mb-10 group">
                        <div className="order-2 md:order-1 flex-1 md:text-right pt-1 md:pt-0">
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">3. Data Validation</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                n8n filters out businesses without emails or phones to ensure high quality.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center relative z-20">
                            <i className="fas fa-filter text-[10px] text-cyan-200"></i>
                        </div>
                        <div className="order-3 hidden md:block flex-1"></div>
                    </div>

                     {/* Step 4: Dual Storage */}
                     <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 mb-16 group">
                        <div className="order-3 md:order-1 hidden md:block flex-1"></div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center relative z-20">
                            <i className="fas fa-server text-[10px] text-cyan-200"></i>
                        </div>
                        <div className="order-2 md:order-3 flex-1 md:text-left pt-1 md:pt-0">
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">4. Dual Storage</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                Data is simultaneously <span className="text-cyan-400">appended to Google Sheets</span> (Backup) and sent to <span className="text-cyan-400">React UI</span> (Display).
                            </p>
                        </div>
                    </div>


                    {/* --- PHASE 2 HEADER --- */}
                    <div className="relative z-10 flex items-center justify-center gap-4 mb-12">
                       <div className="h-px bg-purple-500/30 w-12 md:w-24"></div>
                       <span className="text-purple-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold bg-[#050505] px-2 border border-purple-500/30 rounded-full py-1">Phase 2: Email Outreach</span>
                       <div className="h-px bg-purple-500/30 w-12 md:w-24"></div>
                    </div>

                    {/* Step 5: Agent Selection */}
                    <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 mb-10 group">
                        <div className="order-2 md:order-1 flex-1 md:text-right pt-1 md:pt-0">
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">5. Manual Selection</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                Agent reviews UI table, selects qualified leads, and clicks "Start Campaign".
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center justify-center relative z-20">
                            <i className="fas fa-mouse-pointer text-[10px] text-purple-200"></i>
                        </div>
                        <div className="order-3 hidden md:block flex-1"></div>
                    </div>

                    {/* Step 6: Template Logic */}
                    <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 mb-10 group">
                        <div className="order-3 md:order-1 hidden md:block flex-1"></div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center justify-center relative z-20">
                            <i className="fas fa-code-branch text-[10px] text-purple-200"></i>
                        </div>
                        <div className="order-2 md:order-3 flex-1 md:text-left pt-1 md:pt-0">
                            <h4 className="text-white font-bold text-sm md:text-base mb-1">6. Dynamic Templating</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                n8n selects the correct email template based on industry tags (e.g. Visa vs. SBA Loan).
                            </p>
                        </div>
                    </div>

                    {/* Step 7: Staggered Loop */}
                    <div className="relative z-10 flex flex-row items-start md:items-center gap-6 md:gap-8 group">
                        <div className="order-2 md:order-1 flex-1 md:text-right pt-1 md:pt-0">
                            <h4 className="text-green-400 font-bold text-sm md:text-base mb-1">7. Staggered Delivery</h4>
                            <p className="text-gray-500 text-[10px] md:text-xs">
                                <span className="text-white">Send Email</span> → <span className="text-white">Wait 15 Mins</span> → <span className="text-white">Repeat</span>. High deliverability achieved.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center justify-center relative z-20">
                            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-spin-slow"></div>
                            <i className="fas fa-paper-plane text-[10px] text-green-200"></i>
                        </div>
                        <div className="order-3 hidden md:block flex-1"></div>
                    </div>

                </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white border-l-4 border-emerald-500 pl-6 tracking-tight">4. Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-xl underline decoration-blue-500 underline-offset-8">Google Sheet Integration</h4>
              <p className="text-gray-400 text-sm">
                Every lead scraped is automatically row-appended to a Master Google Sheet. This creates a permanent database asset even before outreach begins.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-xl underline decoration-cyan-500 underline-offset-8">Safe-Mode Campaigning</h4>
              <p className="text-gray-400 text-sm">
                The 15-minute staggered delay logic is critical. The backend handles the long-running process asynchronously to maintain domain reputation while the user is free to close the tab.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-900/10 to-transparent border border-white/5 p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden">
          <h3 className="text-white font-bold mb-6 text-2xl tracking-tight">Business Impact</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            The L.G.E.O dashboard has fundamentally changed how Wise Business Plans operates. 
            <br/><br/>
            Agents no longer search for leads; they simply review what the system finds. This 90% time reduction allows the team to focus on closing deals rather than finding them.
          </p>
          <p className="mt-8 text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">— Wise Business Plans Engineering</p>
        </section>

      </article>
    </div>
  );
};

export default ReadingView;
