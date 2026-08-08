import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Play, ArrowRight, Bot, Zap, TrendingUp, ShieldCheck, CheckCircle, ChevronRight, Layers } from 'lucide-react';

export default function Hero() {
  const { launchMyStartup, setIsDemoModalOpen } = useApp();
  const [ideaInput, setIdeaInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    launchMyStartup({ name: ideaInput || 'Stealth AI Venture', tagline: ideaInput });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-grid-pattern">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] radial-blur-purple opacity-70 pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Badge Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border-purple-500/40 text-purple-300 text-xs font-semibold tracking-wide shadow-lg shadow-purple-950/40 animate-float">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
          <span className="text-white font-extrabold">Autonomous Multi-Agent Engine v2.4</span>
          <span className="w-1 h-1 rounded-full bg-purple-400"></span>
          <span className="text-purple-300">Y Combinator-Grade Strategy</span>
        </div>

        {/* Hero Title & Subheading */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block text-gradient">LaunchPilot AI</span>
            <span className="block text-3xl sm:text-5xl text-slate-300 mt-2 font-bold">
              Your AI Co-Founder
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
            Transform your startup idea into a complete launch-ready business strategy using autonomous AI agents.
          </p>
        </div>

        {/* Interactive Prompt Form Box */}
        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-2 rounded-2xl glass-panel border-purple-500/30 shadow-2xl shadow-purple-950/50 flex flex-col sm:flex-row items-center gap-2 group"
        >
          <div className="flex items-center space-x-3 px-3 w-full text-slate-400">
            <Bot className="w-5 h-5 text-purple-400 shrink-0" />
            <input
              type="text"
              value={ideaInput}
              onChange={(e) => setIdeaInput(e.target.value)}
              placeholder="Describe your startup idea (e.g. AI-powered clinical notes for doctors)..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto glow-btn-purple px-6 py-3.5 rounded-xl text-white font-extrabold text-sm flex items-center justify-center space-x-2 shrink-0 group-hover:scale-[1.02] transition-transform"
          >
            <span>Launch My Startup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => launchMyStartup()}
            className="glow-btn-purple px-8 py-4 rounded-2xl text-white font-extrabold text-base flex items-center space-x-3 shadow-2xl shadow-purple-600/50"
          >
            <Zap className="w-5 h-5 fill-white" />
            <span>Launch My Startup</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-7 py-4 rounded-2xl glass-panel-interactive border-white/15 text-slate-200 hover:text-white font-bold text-base flex items-center space-x-3"
          >
            <div className="p-1.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Play className="w-4 h-4 fill-purple-400" />
            </div>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Trust Badges & Metrics Row */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>YC & Techstars Standard Frameworks</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>100% Autonomous AI Execution</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>10,000+ Founders Launched</span>
          </div>
        </div>

        {/* Product Glass Dashboard Interactive Mockup Frame */}
        <div className="pt-10 max-w-5xl mx-auto">
          <div className="relative rounded-3xl glass-panel border-purple-500/30 p-4 shadow-2xl shadow-purple-950/70 overflow-hidden group">
            {/* Mock Header Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 mb-4 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="ml-2 font-mono text-[11px] text-slate-400">launchpilot.ai/workspace/devflow-ai</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>4 AI Co-Founders Active</span>
              </div>
            </div>

            {/* Mockup Dashboard Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[11px] text-purple-400 font-bold uppercase tracking-wider">Market Research Agent</div>
                <div className="text-xl font-bold text-white">$18.4 Billion TAM</div>
                <p className="text-xs text-slate-400 line-clamp-2">Autonomous sizing for GitHub developer tools & enterprise compliance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[11px] text-violet-400 font-bold uppercase tracking-wider">Competitor Intel Agent</div>
                <div className="text-xl font-bold text-white">3 Incumbent Gaps</div>
                <p className="text-xs text-slate-400 line-clamp-2">Legacy tools lack real-time code security agent auditing.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider">Pitch Deck Specialist</div>
                <div className="text-xl font-bold text-white">10 Slides Generated</div>
                <p className="text-xs text-slate-400 line-clamp-2">Ready-to-present investor deck with $2.5M seed valuation defense.</p>
              </div>
            </div>

            {/* Click Overlay Banner */}
            <div 
              onClick={() => launchMyStartup()}
              className="mt-4 p-3 rounded-xl bg-purple-950/40 border border-purple-500/40 flex items-center justify-between text-xs text-purple-300 font-semibold cursor-pointer hover:bg-purple-900/50 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Click anywhere on this preview to open your live AI Co-Founder Dashboard</span>
              </div>
              <div className="flex items-center space-x-1 text-white">
                <span>Enter Workspace</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
