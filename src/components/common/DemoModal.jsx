import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Play, Pause, Sparkles, Bot, Zap, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function DemoModal() {
  const { isDemoModalOpen, setIsDemoModalOpen, launchMyStartup } = useApp();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  if (!isDemoModalOpen) return null;

  const demoSteps = [
    { title: "Idea Intake & Intent Parsing", agent: "Strategy Architect AI", detail: "Scans industry, target audience, competitive moat, and revenue vector." },
    { title: "Quantitative TAM Sizing", agent: "Financial Quant Agent", detail: "Synthesizes market data into verified TAM/SAM/SOM financial models." },
    { title: "Competitor Vulnerability Audit", agent: "Intelligence Crawler", detail: "Exposes incumbent pricing gaps, bad reviews, and unserved market niches." },
    { title: "Investor Pitch Deck Synthesis", agent: "Pitch Specialist AI", detail: "Outputs 10 investor-grade slides with financial projections and exit targets." }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-950/50 text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gradient">LaunchPilot AI Interactive Demo</h3>
              <p className="text-xs text-slate-400">Autonomous Startup Co-Founder Engine in Action</p>
            </div>
          </div>
          <button
            onClick={() => setIsDemoModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Simulated Video Player Screen */}
          <div className="md:col-span-2 relative aspect-video bg-slate-950/90 rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6">
            <div className="absolute inset-0 radial-blur-purple opacity-40 pointer-events-none"></div>

            {/* Video Overlay Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live AI Co-Founder Processing</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">00:45 / 02:00</span>
            </div>

            {/* Video Simulated Output Stream */}
            <div className="relative z-10 my-auto text-left space-y-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-2 text-xs text-purple-400 font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow" />
                <span>{demoSteps[activeStep].agent}</span>
              </div>
              <h4 className="text-base font-bold text-white">{demoSteps[activeStep].title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-mono bg-black/40 p-2.5 rounded-lg border border-white/5">
                &gt; {demoSteps[activeStep].detail}
              </p>
            </div>

            {/* Simulated Player Controls */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-lg shadow-purple-600/30"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause Demo' : 'Resume Demo'}</span>
              </button>
              <div className="flex space-x-1">
                {demoSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all ${idx === activeStep ? 'w-8 bg-purple-500' : 'w-2 bg-white/20'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Side Pipeline Summary */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">4-Step Autonomous Execution</h4>
              {demoSteps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    activeStep === idx
                      ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-lg shadow-purple-950/40'
                      : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span>0{idx + 1}. {step.title}</span>
                    {activeStep === idx && <Check className="w-3.5 h-3.5 text-purple-400" />}
                  </div>
                  <p className="text-[11px] opacity-80 line-clamp-1">{step.agent}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setIsDemoModalOpen(false);
                launchMyStartup();
              }}
              className="w-full glow-btn-purple py-3.5 px-4 rounded-xl text-white font-bold text-sm flex items-center justify-center space-x-2 group"
            >
              <span>Launch My Startup Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
