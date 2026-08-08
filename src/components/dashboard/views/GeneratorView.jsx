import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import confetti from 'canvas-confetti';
import { Sparkles, Bot, Play, CheckCircle2, Loader2, ArrowRight, RefreshCw, FileText, Cpu } from 'lucide-react';

export default function GeneratorView() {
  const { selectedStartup, setSelectedStartup, showToast, navigateToTab } = useApp();
  
  const [startupName, setStartupName] = useState(selectedStartup.name || '');
  const [industry, setIndustry] = useState(selectedStartup.industry || '');
  const [problem, setProblem] = useState(selectedStartup.problem || '');
  const [targetAudience, setTargetAudience] = useState(selectedStartup.targetAudience || '');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [logs, setLogs] = useState([]);

  const agentSteps = [
    { title: "Market Architect Agent", desc: "Synthesizing TAM / SAM / SOM data & CAGR growth trends" },
    { title: "Competitor Crawler Agent", desc: "Auditing G2 reviews, pricing tiers & positioning gaps" },
    { title: "Persona Specialist Agent", desc: "Modeling ICP buyer profiles & willingness-to-pay" },
    { title: "Financial Model Agent", desc: "Calculating unit economics, CAC targets & gross margins" },
    { title: "Investor Pitch Deck Builder", desc: "Structuring 10-slide YC-style presentation deck" }
  ];

  const handleRunStrategyGenerator = () => {
    setIsGenerating(true);
    setGenerationStep(0);
    setLogs(["[00:00] Initializing Autonomous AI Co-Founder Cluster..."]);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < agentSteps.length) {
        setGenerationStep(current);
        setLogs(prev => [
          ...prev,
          `[00:0${current * 2}] ${agentSteps[current].title}: ${agentSteps[current].desc}`
        ]);
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        setLogs(prev => [
          ...prev,
          "[00:10] Strategy Generation 100% Complete! Dossier verified."
        ]);
        
        // Update active startup object
        const updated = {
          ...selectedStartup,
          name: startupName || selectedStartup.name,
          industry: industry || selectedStartup.industry,
          problem: problem || selectedStartup.problem,
          targetAudience: targetAudience || selectedStartup.targetAudience,
          readinessScore: Math.floor(Math.random() * 8) + 90, // 90-98
          status: "Fully Generated Strategy"
        };
        setSelectedStartup(updated);
        showToast("Strategy Dossier successfully generated! 🚀");
        
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Strategy Studio</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mt-1">AI Co-Founder Generator</h2>
        </div>

        <button
          onClick={() => navigateToTab('overview')}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:text-white"
        >
          View Active Dossier
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Form: Inputs */}
        <div className="p-8 rounded-3xl glass-panel border-purple-500/30 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span>Venture Blueprint Inputs</span>
            </h3>
            <p className="text-xs text-slate-400">Define your core parameters for autonomous AI strategy agents.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Startup / Project Name</label>
              <input
                type="text"
                value={startupName}
                onChange={(e) => setStartupName(e.target.value)}
                placeholder="e.g. DevFlow AI"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Industry & Domain</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Developer Tools & Cyber Security"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Target Customer Segment</label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="e.g. CTOs & Engineering Managers at 50-500 scaleups"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Primary Problem Statement</label>
              <textarea
                rows={3}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe the friction or inefficiency your venture solves..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
          </div>

          <button
            disabled={isGenerating}
            onClick={handleRunStrategyGenerator}
            className="w-full glow-btn-purple py-4 px-6 rounded-2xl text-white font-extrabold text-sm flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Executing AI Agents ({generationStep + 1}/5)...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Run Autonomous AI Strategy Suite</span>
              </>
            )}
          </button>
        </div>

        {/* Right Terminal: Simulated Agent Execution Stream */}
        <div className="p-8 rounded-3xl glass-panel border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Live AI Agent Pipeline Stream</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                {isGenerating ? 'PROCESSING' : 'READY'}
              </span>
            </div>

            {/* Agent Progress Steps */}
            <div className="space-y-2.5">
              {agentSteps.map((step, idx) => {
                const isDone = idx < generationStep;
                const isCurrent = idx === generationStep && isGenerating;

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all text-xs ${
                      isDone
                        ? 'bg-purple-950/40 border-purple-500/40 text-white'
                        : isCurrent
                        ? 'bg-purple-600/20 border-purple-400 text-white animate-pulse'
                        : 'bg-white/[0.02] border-white/5 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center space-x-2">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : isCurrent ? (
                          <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[9px]">{idx + 1}</span>
                        )}
                        <span>{step.title}</span>
                      </span>
                      <span className="text-[10px] font-mono opacity-70">
                        {isDone ? 'COMPLETE' : isCurrent ? 'RUNNING' : 'WAITING'}
                      </span>
                    </div>
                    <p className="text-[11px] opacity-75 mt-1 ml-6">{step.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Log Output Console */}
            <div className="bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-[11px] text-purple-300 h-32 overflow-y-auto space-y-1">
              {logs.map((log, lIdx) => (
                <div key={lIdx} className="leading-relaxed">&gt; {log}</div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-400">Yields: Market TAM, Competitors, Personas, Deck</span>
            <button
              onClick={() => navigateToTab('market-research')}
              className="text-purple-400 hover:text-white font-bold flex items-center gap-1"
            >
              <span>Explore Output Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
