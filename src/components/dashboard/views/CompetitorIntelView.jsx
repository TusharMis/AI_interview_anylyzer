import React from 'react';
import { useApp } from '../../../context/AppContext';
import { ShieldAlert, Check, X, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function CompetitorIntelView() {
  const { selectedStartup, showToast } = useApp();

  const competitors = [
    { name: "Legacy SaaS Alpha", pricing: "$2,400/mo", marketShare: "38%", weakness: "No real-time AI agents, manual 4-week setup", moatGap: "10x Slower" },
    { name: "CloudBot Inc", pricing: "$990/mo", marketShare: "22%", weakness: "High price, clunky UI, lacks pitch deck export", moatGap: "No Pitch Generation" },
    { name: "Agentify Pro", pricing: "$499/mo", marketShare: "14%", weakness: "Basic LLM wrapper without TAM algorithms", moatGap: "Unverified TAM" },
    { name: selectedStartup.name + " (You)", pricing: "$199/mo", marketShare: "Fastest Growing", weakness: "None (Venture Grade)", moatGap: "Multi-Agent Dominance" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Real-Time Market Teardowns</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mt-1">Competitor Intelligence Matrix</h2>
        </div>

        <button
          onClick={() => showToast("Competitor pricing scrapers triggered...")}
          className="px-4 py-2 rounded-xl bg-violet-600/30 border border-violet-500/40 text-violet-300 hover:text-white text-xs font-bold flex items-center space-x-2 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          <span>Refresh Live Scrapers</span>
        </button>
      </div>

      {/* Feature Matrix Table */}
      <div className="p-6 rounded-3xl glass-panel border-white/10 overflow-x-auto space-y-4">
        <h3 className="text-lg font-bold text-white">Side-by-Side Feature Parity Comparison</h3>

        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 font-mono">
              <th className="p-3">Solution / Platform</th>
              <th className="p-3">Avg Monthly Price</th>
              <th className="p-3">Market Share</th>
              <th className="p-3">Autonomous AI Agents</th>
              <th className="p-3">Investor Pitch Deck</th>
              <th className="p-3">Execution Speed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {competitors.map((comp, idx) => {
              const isUs = comp.name.includes('(You)');

              return (
                <tr key={idx} className={isUs ? 'bg-purple-950/30 font-bold text-white' : 'text-slate-300 hover:bg-white/[0.02]'}>
                  <td className="p-3 flex items-center space-x-2">
                    {isUs ? (
                      <span className="px-2 py-0.5 rounded bg-purple-500 text-white font-extrabold text-[10px]">YOU</span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    )}
                    <span>{comp.name}</span>
                  </td>
                  <td className="p-3 font-mono">{comp.pricing}</td>
                  <td className="p-3 font-mono">{comp.marketShare}</td>
                  <td className="p-3">
                    {isUs ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-rose-400" />}
                  </td>
                  <td className="p-3">
                    {isUs ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-rose-400" />}
                  </td>
                  <td className="p-3 font-mono text-purple-300">{isUs ? '< 45 Seconds' : '3-4 Weeks'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Incumbent Vulnerabilities & Moat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-3">
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>Incumbent Vulnerability #1</span>
          </div>
          <h4 className="text-base font-bold text-white">Outdated Static Reports</h4>
          <p className="text-xs text-slate-300">Legacy advisory firms deliver 80-page PDFs that become obsolete within 30 days of market shifts.</p>
        </div>

        <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-3">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>Incumbent Vulnerability #2</span>
          </div>
          <h4 className="text-base font-bold text-white">Exorbitant Consulting Costs</h4>
          <p className="text-xs text-slate-300">Founders waste $20k-$50k on manual market analysts who lack automated data pipelines.</p>
        </div>

        <div className="p-6 rounded-3xl glass-card-purple border-purple-500/40 space-y-3">
          <div className="flex items-center space-x-2 text-purple-300 font-bold text-xs">
            <Sparkles className="w-4 h-4" />
            <span>Your Strategic Moat</span>
          </div>
          <h4 className="text-base font-bold text-white">Multi-Agent Continuous Verification</h4>
          <p className="text-xs text-slate-300">Autonomous agents continuously benchmark your strategy against live market changes and investor criteria.</p>
        </div>
      </div>

    </div>
  );
}
