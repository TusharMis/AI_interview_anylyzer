import React from 'react';
import { useApp } from '../../../context/AppContext';
import { BarChart3, TrendingUp, Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function AnalyticsView() {
  const { selectedStartup } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Venture Telemetry</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mt-1">Analytics & Readiness Breakdown</h2>
      </div>

      {/* Analytics Score Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl glass-card-purple border-purple-500/40 space-y-2">
          <div className="text-xs text-purple-300 font-mono">READINESS INDEX</div>
          <div className="text-4xl font-extrabold text-white">{selectedStartup.readinessScore}/100</div>
          <div className="text-[10px] text-emerald-400 font-mono">Top 5% Venture Grade</div>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-2">
          <div className="text-xs text-slate-400 font-mono">EXECUTION VELOCITY</div>
          <div className="text-4xl font-extrabold text-white">45 Sec</div>
          <div className="text-[10px] text-purple-400 font-mono">99.2% Time Compression</div>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-2">
          <div className="text-xs text-slate-400 font-mono">ACTIVE AGENT CLUSTERS</div>
          <div className="text-4xl font-extrabold text-white">4 AI Agents</div>
          <div className="text-[10px] text-cyan-400 font-mono">100% Operational</div>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-2">
          <div className="text-xs text-slate-400 font-mono">VERIFIED DATA POINTS</div>
          <div className="text-4xl font-extrabold text-white">1,480+</div>
          <div className="text-[10px] text-indigo-400 font-mono">Real-Time Benchmark</div>
        </div>
      </div>

      {/* Strategy Component Scores */}
      <div className="p-8 rounded-3xl glass-panel border-white/10 space-y-6">
        <h3 className="text-lg font-bold text-white">Readiness Score Sub-Category Performance</h3>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Market TAM & CAGR Validation</span>
              <span className="text-purple-400 font-mono">96 / 100</span>
            </div>
            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full w-[96%]"></div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Competitor Moat & Differentiators</span>
              <span className="text-violet-400 font-mono">92 / 100</span>
            </div>
            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-violet-500 rounded-full w-[92%]"></div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Customer Persona & Willingness to Pay</span>
              <span className="text-cyan-400 font-mono">94 / 100</span>
            </div>
            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full w-[94%]"></div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Pricing Strategy & LTV / CAC</span>
              <span className="text-emerald-400 font-mono">90 / 100</span>
            </div>
            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
