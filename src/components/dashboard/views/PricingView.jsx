import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { CreditCard, Calculator, ArrowRight, DollarSign, TrendingUp } from 'lucide-react';

export default function PricingView() {
  const { selectedStartup } = useApp();

  const [avgPrice, setAvgPrice] = useState(199);
  const [cac, setCac] = useState(250);
  const [churnRate, setChurnRate] = useState(3.5); // %

  // Calculations
  const ltv = Math.round(avgPrice / (churnRate / 100));
  const ltvCacRatio = (ltv / cac).toFixed(1);
  const paybackMonths = Math.round(cac / avgPrice);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <CreditCard className="w-3.5 h-3.5" />
          <span>Monetization & Unit Economics</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mt-1">Pricing Strategy & Unit Calculator</h2>
      </div>

      {/* Interactive Unit Economics Calculator */}
      <div className="p-8 rounded-3xl glass-card-purple border-purple-500/40 space-y-6">
        <div className="flex items-center space-x-2 text-white font-bold text-lg">
          <Calculator className="w-5 h-5 text-purple-400" />
          <span>Real-Time SaaS Unit Economics Simulator</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Slider 1: ARPU */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Avg Monthly Price (ARPU)</span>
              <span className="text-purple-400 font-mono">${avgPrice}/mo</span>
            </div>
            <input
              type="range"
              min="29"
              max="999"
              value={avgPrice}
              onChange={(e) => setAvgPrice(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Slider 2: CAC */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Target CAC</span>
              <span className="text-cyan-400 font-mono">${cac}</span>
            </div>
            <input
              type="range"
              min="50"
              max="1500"
              value={cac}
              onChange={(e) => setCac(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          {/* Slider 3: Churn Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Monthly Churn %</span>
              <span className="text-emerald-400 font-mono">{churnRate}%</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="10.0"
              step="0.5"
              value={churnRate}
              onChange={(e) => setChurnRate(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Calculated Results Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-500/30 text-center">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div className="text-xs text-slate-400 font-mono">ESTIMATED LTV</div>
            <div className="text-3xl font-extrabold text-white">${ltv.toLocaleString()}</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div className="text-xs text-slate-400 font-mono">LTV : CAC RATIO</div>
            <div className="text-3xl font-extrabold text-purple-400">{ltvCacRatio}x</div>
            <div className="text-[10px] text-emerald-400 font-mono">{ltvCacRatio >= 3.0 ? '✓ Venture Grade (> 3.0x)' : 'Needs Margin Optimization'}</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div className="text-xs text-slate-400 font-mono">CAC PAYBACK PERIOD</div>
            <div className="text-3xl font-extrabold text-white">{paybackMonths} Mo</div>
          </div>
        </div>
      </div>

      {/* Recommended Packaging Tiers */}
      <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-4">
        <h3 className="text-lg font-bold text-white">Recommended Monetization Tiers for {selectedStartup.name}</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase">Starter Pilot</div>
            <div className="text-2xl font-bold text-white">$49/mo</div>
            <p className="text-xs text-slate-400">Entry level for solo devs & small setups.</p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/40 space-y-2">
            <div className="text-xs font-bold text-purple-400 uppercase">Pro Scale (Recommended)</div>
            <div className="text-2xl font-bold text-white">${avgPrice}/mo</div>
            <p className="text-xs text-slate-300">Core tier with multi-agent automation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase">Enterprise Custom</div>
            <div className="text-2xl font-bold text-white">$999/mo</div>
            <p className="text-xs text-slate-400">Dedicated agent instances & white-label.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
