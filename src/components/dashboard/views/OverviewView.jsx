import React from 'react';
import { useApp } from '../../../context/AppContext';
import { 
  Sparkles, TrendingUp, ShieldAlert, Users, CreditCard, 
  Megaphone, Presentation, ArrowRight, CheckCircle2, ShieldCheck, Zap 
} from 'lucide-react';

export default function OverviewView() {
  const { selectedStartup, navigateToTab } = useApp();

  const moduleList = [
    { id: 'market-research', name: 'Market Research', desc: 'TAM/SAM/SOM breakdown & growth drivers', val: selectedStartup.tam, icon: TrendingUp, color: 'text-purple-400' },
    { id: 'competitor-intelligence', name: 'Competitor Intel', desc: 'Incumbent feature parity & moat analysis', val: '4 Key Incumbents', icon: ShieldAlert, color: 'text-violet-400' },
    { id: 'customer-personas', name: 'Customer Personas', desc: 'Ideal customer profiles & willingness to pay', val: '3 Verified ICPs', icon: Users, color: 'text-indigo-400' },
    { id: 'pricing-strategy', name: 'Pricing Strategy', desc: 'Monetization tiers & unit economics model', val: '84% Gross Margin', icon: CreditCard, color: 'text-cyan-400' },
    { id: 'marketing-strategy', name: 'Marketing Strategy', desc: 'Go-To-Market channels & launch playbook', val: '6 GTM Channels', icon: Megaphone, color: 'text-fuchsia-400' },
    { id: 'investor-pitch', name: 'Investor Pitch Deck', desc: '10-Slide pitch deck ready for fundraise', val: '10 Deck Slides', icon: Presentation, color: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Top Banner Executive Card */}
      <div className="p-8 rounded-3xl glass-card-purple border-purple-500/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 relative z-10 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Co-Founder Launch Readiness Dossier</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">{selectedStartup.name}</h2>
          <p className="text-sm text-slate-300 max-w-2xl">{selectedStartup.tagline}</p>
          
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
            <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">Industry: {selectedStartup.industry}</span>
            <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">Status: {selectedStartup.status}</span>
          </div>
        </div>

        {/* Launch Score Radial Indicator */}
        <div className="relative z-10 shrink-0 text-center bg-black/50 p-6 rounded-3xl border border-purple-500/30 flex flex-col items-center justify-center space-y-1">
          <div className="text-5xl font-extrabold text-gradient">{selectedStartup.readinessScore}/100</div>
          <div className="text-xs font-bold text-slate-300">Launch Readiness Score</div>
          <div className="text-[10px] text-emerald-400 font-mono">YC / Venture Portfolio Grade</div>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass-panel border-white/10 space-y-1">
          <div className="text-xs text-slate-400 font-mono">TOTAL ADDRESSABLE MARKET</div>
          <div className="text-2xl font-bold text-white">{selectedStartup.tam}</div>
          <div className="text-[10px] text-emerald-400 font-mono">Growth: {selectedStartup.growth}</div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border-white/10 space-y-1">
          <div className="text-xs text-slate-400 font-mono">SERVICEABLE MARKET (SAM)</div>
          <div className="text-2xl font-bold text-white">{selectedStartup.sam}</div>
          <div className="text-[10px] text-purple-400 font-mono">24% Capture Goal</div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border-white/10 space-y-1">
          <div className="text-xs text-slate-400 font-mono">COMPETITIVE GAPS</div>
          <div className="text-2xl font-bold text-white">3 Core Moats</div>
          <div className="text-[10px] text-cyan-400 font-mono">Validated Scraper Data</div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border-white/10 space-y-1">
          <div className="text-xs text-slate-400 font-mono">FUNDRAISING TARGET</div>
          <div className="text-2xl font-bold text-white">$2.5M Seed</div>
          <div className="text-[10px] text-indigo-400 font-mono">10 Slide Deck Ready</div>
        </div>
      </div>

      {/* 6 Strategy Pillars Quick Launch Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Interactive Co-Founder Modules</h3>
          <span className="text-xs text-purple-400 font-mono">Click any module to inspect deep analysis</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleList.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => navigateToTab(item.id)}
                className="p-6 rounded-3xl glass-panel-interactive border-white/10 flex flex-col justify-between cursor-pointer space-y-4 group hover:border-purple-500/50"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-white/[0.04] border border-white/10 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300">
                    {item.val}
                  </span>
                </div>

                <div className="space-y-1 text-left">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.name}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Open Deep Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
