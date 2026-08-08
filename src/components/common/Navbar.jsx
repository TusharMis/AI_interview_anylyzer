import React from 'react';
import { Bot, Sparkles, User, Settings, LogOut, FileText, BarChart3, Code2, Mic } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

export function Navbar({ activeTab, setActiveTab }) {
  const { user, isAuthenticated, setAuthModalOpen } = useAuthStore();

  return (
    <nav className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">Interview</span>
              <span className="font-extrabold text-xl tracking-tight gradient-text">AI</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">PRO</span>
            </div>
            <p className="text-[11px] text-slate-400">Next-Gen AI Interview Suite</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        {isAuthenticated && (
          <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'resume'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <FileText className="w-4 h-4" />
              Resume Parser
            </button>

            <button
              onClick={() => setActiveTab('ai-interview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ai-interview'
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Mic className="w-4 h-4" />
              AI Voice Interview
            </button>

            <button
              onClick={() => setActiveTab('coding-interview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'coding-interview'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Live Coding
            </button>

            <button
              onClick={() => setActiveTab('reports')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'reports'
                  ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Reports
            </button>
          </div>
        )}

        {/* User / Auth CTA */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <div 
                onClick={() => setActiveTab('settings')}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all"
              >
                <img
                  src={user?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
                  alt="Avatar"
                  className="w-7 h-7 rounded-full object-cover border border-cyan-500/50"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-semibold text-white leading-none">{user?.full_name}</p>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{user?.target_role}</p>
                </div>
              </div>
            </div>
          ) : (
            <Button onClick={() => setAuthModalOpen(true)} icon={Sparkles} size="sm">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
