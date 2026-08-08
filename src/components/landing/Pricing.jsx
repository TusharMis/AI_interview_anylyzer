import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const { launchMyStartup } = useApp();
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter Pilot",
      price: annual ? "$39" : "$49",
      billing: "/month",
      description: "Ideal for solo founders testing early concept feasibility.",
      features: [
        "3 Full Startup Launch Strategy Runs",
        "TAM / SAM / SOM Market Sizing",
        "Top 3 Competitor Vulnerability Matrix",
        "Export Strategy to Markdown",
        "Standard Agent Processing"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Founder Pro",
      price: annual ? "$149" : "$199",
      billing: "/month",
      description: "Everything required to raise capital and launch a venture.",
      features: [
        "Unlimited Autonomous Strategy Runs",
        "Full Competitor Intelligence Scraper",
        "Granular ICP & Customer Personas",
        "10-Slide Investor Pitch Deck Builder",
        "Monetization & Pricing Calculator",
        "Go-To-Market Channel & Launch Calendar",
        "Priority Autonomous Agent Processing"
      ],
      popular: true,
      cta: "Launch My Startup"
    },
    {
      name: "Scale Studio",
      price: annual ? "$399" : "$499",
      billing: "/month",
      description: "For incubators, venture studios, and serial entrepreneurs.",
      features: [
        "Everything in Founder Pro",
        "Multi-Seat Founder Team Workspaces",
        "Custom API & CRM Integration",
        "White-Label Pitch Deck PDF Exports",
        "Dedicated Venture Architect Support",
        "Real-Time Competitor Price Alerts"
      ],
      popular: false,
      cta: "Contact Enterprise"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple Pricing, <span className="text-gradient">Unlimited Velocity</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose the plan that matches your launch stage. Upgrade or cancel anytime.
          </p>

          {/* Toggle Monthly / Annual */}
          <div className="pt-4 flex items-center justify-center space-x-3">
            <span className={`text-xs font-semibold ${!annual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 rounded-full bg-purple-950 border border-purple-500/40 p-1 flex items-center transition-colors relative"
            >
              <div
                className={`w-6 h-6 rounded-full bg-purple-500 shadow-md transform transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`text-xs font-semibold ${annual ? 'text-white' : 'text-slate-400'}`}>
              Annual <span className="text-purple-400 font-mono text-[11px]">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? 'glass-card-purple border-purple-500/60 shadow-2xl shadow-purple-950/60 scale-105 z-20'
                  : 'glass-panel border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular Co-Founder</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[32px]">{tier.description}</p>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-xs font-mono">{tier.billing}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <Check className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-purple-400' : 'text-emerald-400'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => launchMyStartup()}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
                    tier.popular
                      ? 'glow-btn-purple text-white shadow-xl shadow-purple-600/40'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
