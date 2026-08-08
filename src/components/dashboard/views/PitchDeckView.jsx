import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { Presentation, ChevronLeft, ChevronRight, Download, Sparkles, CheckCircle } from 'lucide-react';

export default function PitchDeckView() {
  const { selectedStartup, showToast } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      num: 1,
      title: "Title & One-Line Hook",
      headline: selectedStartup.name + " — " + selectedStartup.tagline,
      subtitle: "Autonomous AI Co-Founder for Next-Gen Founders",
      content: "Transforming raw ideas into launch-ready business strategies in under 45 seconds using specialized multi-agent AI clusters."
    },
    {
      num: 2,
      title: "The Massive Market Friction",
      headline: "Startup Launch Velocity Is Broken",
      subtitle: "Founders waste $50,000+ and 4 months on manual advisory retainers.",
      content: "80% of venture ideas fail early due to unverified TAM assumptions, incomplete competitor intelligence, and fragmented pitch narrative execution."
    },
    {
      num: 3,
      title: "The Autonomous Solution",
      headline: "LaunchPilot AI Multi-Agent Engine",
      subtitle: "Deterministic YC-grade strategy generated automatically.",
      content: "Market Architect Agent + Competitor Scraper Agent + Financial Quant Agent + Pitch Deck Specialist AI working in harmony."
    },
    {
      num: 4,
      title: "Total Addressable Market (TAM)",
      headline: selectedStartup.tam + " Global Addressable Opportunity",
      subtitle: "CAGR: +28.4% YoY enterprise growth acceleration.",
      content: "Serviceable Addressable Market (SAM): " + selectedStartup.sam + " | Year 3 Serviceable Obtainable Target: $45M ARR."
    },
    {
      num: 5,
      title: "Proprietary Technology & AI Architecture",
      headline: "Autonomous Verification Pipeline",
      subtitle: "Continuous real-time scrapers & quantitative financial models.",
      content: "Zero data retention enterprise privacy + fine-tuned domain LLM agents guaranteeing 99.4% strategy precision."
    },
    {
      num: 6,
      title: "Competitive Moat & Defensibility",
      headline: "10x Execution Speed Advantage",
      subtitle: "Legacy firms require 4 weeks; LaunchPilot takes 45 seconds.",
      content: "Deep proprietary benchmarking datasets cross-referenced against 1,000+ Series A funded startup pitch decks."
    },
    {
      num: 7,
      title: "Business Model & Unit Economics",
      headline: "Tiered SaaS & Usage Monetization",
      subtitle: "84% Target Gross Margin | 4.8x LTV/CAC Ratio.",
      content: "Starter Pilot ($49/mo), Founder Pro ($199/mo), and Enterprise Custom ($999/mo) with recurring annual expansion."
    },
    {
      num: 8,
      title: "Go-To-Market Traction Plan",
      headline: "Product-Led Growth + Direct Outbound",
      subtitle: "Viral Product Hunt launch + Founder LinkedIn Thought Leadership.",
      content: "Interactive calculator micro-sites generating 10,000+ organic inbound founder leads monthly."
    },
    {
      num: 9,
      title: "Team & Unfair Advantages",
      headline: "Engineered by Operators & AI Researchers",
      subtitle: "Ex-YC founders, Google AI engineers, and B2B SaaS architects.",
      content: "Proven track record scaling software ventures from zero to $10M+ ARR."
    },
    {
      num: 10,
      title: "Fundraising Ask & Capital Allocation",
      headline: "Raising $2.5M Seed Round",
      subtitle: "18-Month Runway to hit $5M ARR milestone.",
      content: "Use of funds: 60% Engineering & Multi-Agent R&D, 30% GTM & Founder Acquisition, 10% Legal & Operations."
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Presentation className="w-3.5 h-3.5" />
            <span>Investor-Grade Pitch Deck</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mt-1">10-Slide Pitch Deck Builder</h2>
        </div>

        <button
          onClick={() => showToast("Exporting 10-Slide Pitch Deck PDF...")}
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center space-x-2 transition-colors shadow-lg shadow-purple-600/30"
        >
          <Download className="w-4 h-4" />
          <span>Download Pitch Deck PDF</span>
        </button>
      </div>

      {/* Slide Presenter Frame */}
      <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-3xl glass-card-purple border-purple-500/40 p-8 sm:p-12 flex flex-col justify-between shadow-2xl shadow-purple-950/70 overflow-hidden">
        
        {/* Top Slide Meta */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-purple-500/30 pb-4 text-purple-300">
          <span>{selectedStartup.name} — Pitch Deck</span>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 font-bold">
            Slide {currentSlide + 1} of 10
          </span>
        </div>

        {/* Slide Main Content */}
        <div className="my-auto space-y-4 text-left max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
            {slides[currentSlide].title}
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {slides[currentSlide].headline}
          </h3>
          <h4 className="text-sm sm:text-base font-semibold text-purple-200">
            {slides[currentSlide].subtitle}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2">
            {slides[currentSlide].content}
          </p>
        </div>

        {/* Slide Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-purple-500/30">
          <button
            disabled={currentSlide === 0}
            onClick={() => setCurrentSlide(prev => prev - 1)}
            className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Slide</span>
          </button>

          <div className="flex space-x-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-purple-400' : 'w-2 bg-white/20'}`}
              ></button>
            ))}
          </div>

          <button
            disabled={currentSlide === slides.length - 1}
            onClick={() => setCurrentSlide(prev => prev + 1)}
            className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold disabled:opacity-30 transition-colors"
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
