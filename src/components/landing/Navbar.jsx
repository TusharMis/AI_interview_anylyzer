import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Rocket, ArrowRight, Menu, X, Sparkles, UserCheck } from 'lucide-react';

export default function Navbar() {
  const { currentView, setCurrentView, launchMyStartup } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090E]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() => setCurrentView('landing')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-lg shadow-purple-600/40 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B0B14] rounded-[10px] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              LaunchPilot <span className="text-gradient">AI</span>
            </span>
            <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase font-semibold">Your AI Co-Founder</span>
          </div>
        </div>

        {/* Desktop Menu Nav */}
        <nav className="hidden md:flex items-center space-x-1 px-4 py-1.5 rounded-full glass-panel border-white/10">
          <button
            onClick={() => scrollToSection('hero')}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => launchMyStartup()}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          >
            <UserCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Login</span>
          </button>

          <button
            onClick={() => launchMyStartup()}
            className="glow-btn-purple px-5 py-2.5 rounded-xl text-xs font-extrabold text-white flex items-center space-x-2 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200 animate-pulse" />
            <span>Launch My Startup</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white bg-white/5"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B14]/95 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-3 font-medium text-sm">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-slate-300 hover:text-purple-400">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-left py-2 text-slate-300 hover:text-purple-400">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-slate-300 hover:text-purple-400">Pricing</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-slate-300 hover:text-purple-400">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-slate-300 hover:text-purple-400">Contact</button>
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                launchMyStartup();
              }}
              className="w-full py-2.5 rounded-xl border border-white/10 text-slate-300 text-xs font-semibold"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                launchMyStartup();
              }}
              className="w-full glow-btn-purple py-3 rounded-xl text-white font-bold text-xs flex items-center justify-center space-x-2"
            >
              <span>Launch My Startup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
