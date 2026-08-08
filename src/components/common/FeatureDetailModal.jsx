import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ArrowRight, Sparkles, TrendingUp, ShieldAlert, Users, CreditCard, Megaphone, Presentation, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  TrendingUp: TrendingUp,
  ShieldAlert: ShieldAlert,
  Users: Users,
  CreditCard: CreditCard,
  Megaphone: Megaphone,
  Presentation: Presentation
};

export default function FeatureDetailModal() {
  const { activeFeatureModal, setActiveFeatureModal, navigateToTab } = useApp();

  if (!activeFeatureModal) return null;

  const Icon = ICON_MAP[activeFeatureModal.iconName] || Sparkles;

  const handleOpenModule = () => {
    const tabId = activeFeatureModal.id;
    setActiveFeatureModal(null);
    navigateToTab(tabId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-950/60 text-slate-100 p-6 md:p-8 space-y-6">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-400">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{activeFeatureModal.tagline}</span>
              <h3 className="text-2xl font-bold text-gradient">{activeFeatureModal.title}</h3>
            </div>
          </div>
          <button
            onClick={() => setActiveFeatureModal(null)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {activeFeatureModal.description}
        </p>

        {/* Feature Highlights */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-purple-300 font-semibold pb-2 border-b border-white/10">
            <span>Verified AI Output Capabilities</span>
            <span>{activeFeatureModal.metrics}</span>
          </div>

          <div className="space-y-2">
            {activeFeatureModal.details?.keyDrivers && (
              activeFeatureModal.details.keyDrivers.map((driver, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{driver}</span>
                </div>
              ))
            )}
            {activeFeatureModal.details?.differentiators && (
              activeFeatureModal.details.differentiators.map((diff, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{diff}</span>
                </div>
              ))
            )}
            {activeFeatureModal.details?.slides && (
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {activeFeatureModal.details.slides.slice(0, 6).map((slide, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-black/40 border border-white/5 font-mono">
                    {slide}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end space-x-3 pt-2">
          <button
            onClick={() => setActiveFeatureModal(null)}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 text-sm font-semibold transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleOpenModule}
            className="glow-btn-purple px-6 py-2.5 rounded-xl text-white font-bold text-sm flex items-center space-x-2 group"
          >
            <span>Open Interactive Module</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
