import React from 'react';
import { useApp } from '../../../context/AppContext';
import { TrendingUp, CheckCircle2, AlertTriangle, ShieldCheck, Download } from 'lucide-react';

export default function MarketResearchView() {
  const { selectedStartup, showToast } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Autonomous Market Intelligence</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mt-1">Market Research & TAM Sizing</h2>
        </div>

        <button
          onClick={() => showToast("Exporting TAM Sizing Model to PDF...")}
          className="px-4 py-2 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:text-white text-xs font-bold flex items-center space-x-2 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Export TAM Model</span>
        </button>
      </div>

      {/* 3 Metric Pillars (TAM / SAM / SOM) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl glass-card-purple border-purple-500/40 space-y-3">
          <div className="text-xs font-bold text-purple-300 uppercase tracking-wider">Total Addressable Market (TAM)</div>
          <div className="text-4xl font-extrabold text-white">{selectedStartup.tam || '$42.8B'}</div>
          <p className="text-xs text-slate-300">Global TAM for {selectedStartup.industry} tools and enterprise software replacement cycles.</p>
          <div className="pt-2 border-t border-purple-500/20 text-[10px] text-purple-400 font-mono">CAGR: +28.4% YoY</div>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-cyan-500/30 space-y-3">
          <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Serviceable Addressable Market (SAM)</div>
          <div className="text-4xl font-extrabold text-white">{selectedStartup.sam || '$11.4B'}</div>
          <p className="text-xs text-slate-300">North America & EU B2B target organizations matching ICP parameters.</p>
          <div className="pt-2 border-t border-white/10 text-[10px] text-cyan-400 font-mono">Capture Velocity Target: 24%</div>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-emerald-500/30 space-y-3">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Serviceable Obtainable Market (SOM)</div>
          <div className="text-4xl font-extrabold text-white">$1.8 Billion</div>
          <p className="text-xs text-slate-300">Year 3 target obtainable market share based on GTM channel execution speed.</p>
          <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 font-mono">Target Revenue: $45M ARR</div>
        </div>
      </div>

      {/* Market Projection Visual Chart Representation */}
      <div className="p-8 rounded-3xl glass-panel border-white/10 space-y-6">
        <h3 className="text-lg font-bold text-white">5-Year Market Size Growth Projection ($ Billions)</h3>
        
        {/* Styled Bar Chart */}
        <div className="grid grid-cols-5 gap-4 items-end h-48 pt-8 px-4 border-b border-white/10">
          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-xs font-mono text-purple-300 font-bold">$12.4B</span>
            <div className="w-full bg-purple-950 rounded-t-xl h-16 group-hover:bg-purple-600 transition-all border border-purple-500/40"></div>
            <span className="text-[11px] text-slate-400 font-mono">2024</span>
          </div>

          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-xs font-mono text-purple-300 font-bold">$18.2B</span>
            <div className="w-full bg-purple-950 rounded-t-xl h-24 group-hover:bg-purple-600 transition-all border border-purple-500/40"></div>
            <span className="text-[11px] text-slate-400 font-mono">2025</span>
          </div>

          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-xs font-mono text-purple-300 font-bold">$26.5B</span>
            <div className="w-full bg-purple-900 rounded-t-xl h-32 group-hover:bg-purple-500 transition-all border border-purple-400"></div>
            <span className="text-[11px] text-purple-300 font-mono font-bold">2026 (Current)</span>
          </div>

          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-xs font-mono text-purple-300 font-bold">$34.8B</span>
            <div className="w-full bg-purple-800 rounded-t-xl h-40 group-hover:bg-purple-500 transition-all border border-purple-400"></div>
            <span className="text-[11px] text-slate-400 font-mono">2027</span>
          </div>

          <div className="flex flex-col items-center space-y-2 group">
            <span className="text-xs font-mono text-purple-300 font-bold">$42.8B</span>
            <div className="w-full bg-gradient-to-t from-purple-700 to-indigo-500 rounded-t-xl h-48 group-hover:scale-105 transition-all shadow-xl shadow-purple-950/60 border border-purple-400"></div>
            <span className="text-[11px] text-white font-mono font-bold">2028 Target</span>
          </div>
        </div>
      </div>

      {/* Macro Drivers & Risk Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-4">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Primary Market Drivers</span>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="font-bold text-white">1. Accelerated Autonomous Agent Adoption</span>
              <p>78% of fortune 500 tech teams are budgeting for multi-agent software infrastructure in 2026.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="font-bold text-white">2. Developer Productivity Crisis</span>
              <p>Engineering labor rates have risen 24%, driving demand for instant automation strategy tools.</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-4">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
            <AlertTriangle className="w-5 h-5" />
            <span>Risk Mitigation Playbook</span>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="font-bold text-white">1. Cloud Giant Feature Bundling</span>
              <p>Mitigation: Build proprietary domain-specific multi-agent models with zero data retention guarantees.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="font-bold text-white">2. Regulatory EU Compliance</span>
              <p>Mitigation: Deploy SOC2 Type II compliance layers out-of-the-box for all enterprise runs.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
