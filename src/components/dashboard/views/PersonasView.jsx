import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { Users, DollarSign, Target, Copy, CheckCircle2, MessageSquare } from 'lucide-react';

export default function PersonasView() {
  const { selectedStartup, showToast } = useApp();
  const [copiedIdx, setCopiedIdx] = useState(null);

  const personas = [
    {
      name: "Scaleup CTO Marcus",
      role: "VP of Engineering & CTO",
      company: "Series B Scaleup (120 devs)",
      painPoint: "Engineering teams lose 35% sprint velocity on manual code security reviews.",
      willingnessToPay: "$1,500 - $3,500 / month",
      triggers: ["Failed SOC2 compliance audit", "PR backlog exceeding 72 hours"],
      outreachScript: "Subject: Eliminating PR backlogs for 120+ dev teams\n\nHi Marcus,\nNotice your engineering team is scaling rapidly. DevFlow AI automates code reviews out-of-the-box, saving 15 hours/dev weekly. Open to a 5-min demo?"
    },
    {
      name: "Product Leader Sarah",
      role: "Director of Product Operations",
      company: "Mid-Market Enterprise (500+ employees)",
      painPoint: "Slow market validation cycles costing months of engineering budget.",
      willingnessToPay: "$500 - $1,200 / month",
      triggers: ["Quarterly OKR planning", "Executive pressure for faster GTM"],
      outreachScript: "Subject: 10x faster market validation for Q4 product OKRs\n\nHi Sarah,\nQuick question — how long does your product team take to validate new SaaS feature ideas? LaunchPilot AI generates YC-grade market strategy in 45 seconds."
    }
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    showToast("Outreach template copied to clipboard!");
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <Users className="w-3.5 h-3.5" />
          <span>Granular Customer Profiling</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mt-1">Customer Personas & Buying Triggers</h2>
      </div>

      {/* Personas Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {personas.map((persona, idx) => (
          <div key={idx} className="p-8 rounded-3xl glass-panel border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Persona Profile Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-extrabold text-base">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{persona.name}</h3>
                    <div className="text-xs text-purple-400 font-mono">{persona.role} • {persona.company}</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                  {persona.willingnessToPay}
                </span>
              </div>

              {/* Core Friction / Pain Point */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Primary Pain Point</span>
                <p className="text-sm text-slate-200 bg-white/[0.02] p-3 rounded-xl border border-white/5">{persona.painPoint}</p>
              </div>

              {/* Buying Triggers */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Decision-Maker Triggers</span>
                <div className="flex flex-wrap gap-2">
                  {persona.triggers.map((trig, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs">
                      ⚡ {trig}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outreach Email Script */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>AI Cold Outreach Email Script</span>
                  <button
                    onClick={() => handleCopy(persona.outreachScript, idx)}
                    className="text-purple-400 hover:text-white font-bold flex items-center space-x-1"
                  >
                    {copiedIdx === idx ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIdx === idx ? 'Copied!' : 'Copy Script'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {persona.outreachScript}
                </pre>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
