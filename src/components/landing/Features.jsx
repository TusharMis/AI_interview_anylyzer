import React from 'react';
import { useApp } from '../../context/AppContext';
import { INITIAL_FEATURE_CARDS } from '../../mockData/startupData';
import { TrendingUp, ShieldAlert, Users, CreditCard, Megaphone, Presentation, ArrowRight, Sparkles } from 'lucide-react';

const ICON_MAP = {
  TrendingUp: TrendingUp,
  ShieldAlert: ShieldAlert,
  Users: Users,
  CreditCard: CreditCard,
  Megaphone: Megaphone,
  Presentation: Presentation
};

export default function Features() {
  const { setActiveFeatureModal } = useApp();

  return (
    <section id="features" className="py-24 relative bg-[#09090E]">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Suite</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Six Pillars of a <span className="text-gradient">Billion-Dollar Launch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            LaunchPilot AI deploys specialized agent clusters trained on top tier venture portfolios to execute your launch playbook in seconds.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_FEATURE_CARDS.map((card) => {
            const Icon = ICON_MAP[card.iconName] || Sparkles;

            return (
              <div
                key={card.id}
                onClick={() => setActiveFeatureModal(card)}
                className={`group relative p-8 rounded-3xl glass-panel-interactive border ${card.borderColor} flex flex-col justify-between cursor-pointer hover:border-purple-500/60 overflow-hidden`}
              >
                {/* Background Card Gradient Pill */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform`}></div>

                <div className="space-y-6 relative z-10">
                  {/* Icon Container */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 transition-all shadow-lg shadow-purple-950/30">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold">
                      AI Agent Active
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
                      {card.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer Metric Badge & Action Link */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10 text-xs font-semibold">
                  <span className="text-slate-400 font-mono">{card.metrics}</span>
                  <span className="text-purple-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
