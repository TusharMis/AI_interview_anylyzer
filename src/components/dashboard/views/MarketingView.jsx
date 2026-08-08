import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { Megaphone, CheckSquare, Square, Rocket, Share2, Sparkles } from 'lucide-react';

export default function MarketingView() {
  const { selectedStartup, showToast } = useApp();

  const [checklist, setChecklist] = useState([
    { id: 1, week: "Week 1", task: "Publish Teaser Landing Page with LaunchPilot AI signups", completed: true },
    { id: 2, week: "Week 1", task: "Submit Product Hunt & Hacker News Show HN launch post", completed: true },
    { id: 3, week: "Week 2", task: "Distribute 5 Founder thought-leadership threads on LinkedIn & X", completed: false },
    { id: 4, week: "Week 2", task: "Launch Interactive ROI & TAM Calculator micro-site", completed: false },
    { id: 5, week: "Week 3", task: "Initiate cold outreach email sequence to 200 target ICP CTOs", completed: false },
    { id: 6, week: "Week 4", task: "Host Live Launch Demo & Webinar with venture partner Q&A", completed: false },
  ]);

  const toggleTask = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
    showToast("Launch checklist progress updated!");
  };

  const channels = [
    { name: "Product Hunt & Hacker News", type: "Viral Community Launch", expectedTraffic: "5,000 - 15,000 Visitors", targetCac: "$12" },
    { name: "LinkedIn Founder Thought Leadership", type: "B2B Organic Inbound", expectedTraffic: "1,200 ICP Leads / Mo", targetCac: "$35" },
    { name: "Micro-Site Interactive Calculators", type: "SEO & Lead Magnet", expectedTraffic: "8,000 Organic Visits", targetCac: "$18" },
    { name: "Outbound Automated Email Engine", type: "Direct Enterprise Sales", expectedTraffic: "40 Demo Bookings", targetCac: "$85" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold">
          <Megaphone className="w-3.5 h-3.5" />
          <span>Go-To-Market Engine</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mt-1">Marketing Strategy & Launch Playbook</h2>
      </div>

      {/* 4-Week Interactive Launch Execution Checklist */}
      <div className="p-8 rounded-3xl glass-panel border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span>4-Week Launch Velocity Checklist</span>
            </h3>
            <p className="text-xs text-slate-400">Step-by-step milestones curated by venture growth architects.</p>
          </div>
          <span className="text-xs font-mono font-bold text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
            {checklist.filter(c => c.completed).length} / {checklist.length} Milestones Done
          </span>
        </div>

        <div className="space-y-2">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleTask(item.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                item.completed
                  ? 'bg-purple-950/30 border-purple-500/40 text-slate-300 line-through opacity-80'
                  : 'bg-white/[0.02] border-white/10 text-white hover:border-purple-500/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                {item.completed ? (
                  <CheckSquare className="w-4 h-4 text-purple-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-slate-500 shrink-0" />
                )}
                <span>{item.task}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">{item.week}</span>
            </div>
          ))}
        </div>
      </div>

      {/* GTM Acquisition Channels Grid */}
      <div className="p-6 rounded-3xl glass-panel border-white/10 space-y-4">
        <h3 className="text-lg font-bold text-white">Go-To-Market Channel Breakdown</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((ch, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-purple-400">
                <span>{ch.type}</span>
                <span className="font-mono text-slate-400">Target CAC: {ch.targetCac}</span>
              </div>
              <h4 className="text-base font-bold text-white">{ch.name}</h4>
              <p className="text-xs text-slate-300">Target Velocity: {ch.expectedTraffic}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
