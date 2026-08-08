import React from 'react';
import { Bot, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg text-white">Interview<span className="gradient-text">AI</span></span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Enterprise-grade mock interviews powered by advanced generative AI and real-time coding sandbox tools.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Interview Tracks</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">HR & Culture Fit</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">System Architecture & Tech</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">STAR Behavioral Questions</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Live Monaco Coding Sandbox</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Platform Tech</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>Next.js 15 & React 19</li>
            <li>Python FastAPI Microservice</li>
            <li>Supabase Auth & Database</li>
            <li>OpenAI GPT-4o & Gemini Flash</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Community</h4>
          <div className="flex items-center gap-3">
            {/* GitHub SVG */}
            <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            {/* Twitter SVG */}
            <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn SVG */}
            <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
              </svg>
            </a>
          </div>
          <p className="text-[11px] text-slate-500 mt-4 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for tech candidate success.
          </p>
        </div>
      </div>
    </footer>
  );
}
