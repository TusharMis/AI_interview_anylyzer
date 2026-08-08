import React from 'react';
import { useApp } from '../../context/AppContext';
import { Bot, Cpu, Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const { launchMyStartup } = useApp();

  return (
    <section id="about" className="py-24 relative bg-[#0B0B14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Architected for Founders</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built by Operators, Powered by <span className="text-gradient">Multi-Agent Intelligence</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Traditional launch prep requires months of expensive consultants, agency retainer fees, and fragmented spreadsheets. LaunchPilot AI compresses that entire timeline into under 60 seconds with hyper-specialized autonomous agent teams.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Deterministic financial sizing algorithms backed by real market databases</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Competitor scrapers that detect pricing shifts and customer dissatisfaction</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Investor-grade pitch decks ready for immediate PDF & slide presentation</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => launchMyStartup()}
                className="glow-btn-purple px-6 py-3.5 rounded-xl text-white font-extrabold text-sm flex items-center space-x-2 group"
              >
                <span>Experience Autonomous Co-Founding</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Stats Card Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl glass-panel border-purple-500/30 space-y-2">
              <div className="text-4xl font-extrabold text-gradient">10x</div>
              <div className="text-sm font-bold text-white">Faster Launch Speed</div>
              <p className="text-xs text-slate-400">Go from idea to complete GTM strategy in 45 seconds.</p>
            </div>

            <div className="p-6 rounded-3xl glass-panel border-cyan-500/30 space-y-2">
              <div className="text-4xl font-extrabold text-gradient-cyan">$50K+</div>
              <div className="text-sm font-bold text-white">Saved in Advisory Fees</div>
              <p className="text-xs text-slate-400">Eliminate traditional agency & legal strategy retainers.</p>
            </div>

            <div className="p-6 rounded-3xl glass-panel border-violet-500/30 space-y-2">
              <div className="text-4xl font-extrabold text-white">99.4%</div>
              <div className="text-sm font-bold text-white">Model Precision</div>
              <p className="text-xs text-slate-400">Cross-referenced against 1,000+ Series A pitch decks.</p>
            </div>

            <div className="p-6 rounded-3xl glass-panel border-emerald-500/30 space-y-2">
              <div className="text-4xl font-extrabold text-emerald-400">24/7</div>
              <div className="text-sm font-bold text-white">Autonomous Co-Founder</div>
              <p className="text-xs text-slate-400">Continuous market monitoring & iteration updates.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
