
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20 pt-10 border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start max-w-5xl mx-auto">
        
        {/* Left: About / Context */}
        <div className="flex-1 space-y-8">
           <h3 className="text-2xl font-outfit font-bold text-white mb-2">Platform Context</h3>
           <p className="text-gray-400 leading-relaxed text-sm">
             L.G.E.O (Lead Gen & Email Outreach) is an internal tool designed to solve the problem of data scarcity in the high-ticket B2B space.
             It leverages a "Headless Automation" architecture where the frontend triggers complex, long-running backend jobs.
           </p>
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Architecture</p>
                 <p className="text-xl font-bold text-white">Event Driven</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Status</p>
                 <p className="text-xl font-bold text-white">Live Internal</p>
              </div>
           </div>
        </div>

        {/* Right: Tech Stack */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl font-outfit font-bold text-white mb-8">Technology Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'n8n', desc: 'Workflow Orchestration', icon: 'fa-project-diagram', color: 'text-orange-400' },
              { name: 'Apify', desc: 'Web Scraping Agents', icon: 'fa-robot', color: 'text-cyan-400' },
              { name: 'Google Sheets', desc: 'Data Persistence', icon: 'fa-table', color: 'text-green-500' },
              { name: 'SMTP', desc: 'Staggered Outreach', icon: 'fa-envelope', color: 'text-white' },
            ].map((tech) => (
              <div key={tech.name} className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors group">
                 <div className={`w-10 h-10 rounded-lg bg-black/40 flex items-center justify-center ${tech.color} border border-white/5 group-hover:border-${tech.color.split('-')[1]}-500/30 transition-colors`}>
                    <i className={`fas ${tech.icon}`}></i>
                 </div>
                 <div>
                    <p className="font-bold text-white text-sm">{tech.name}</p>
                    <p className="text-[10px] text-gray-500">{tech.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;
