import React from 'react';
import { Bot, Mic, Code2, Sparkles, FileText, CheckCircle2, ArrowRight, Shield, Zap, Award, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useAuthStore } from '../../store/useAuthStore';

export function LandingPage({ setActiveTab }) {
  const { setAuthModalOpen } = useAuthStore();

  const handleStartFree = () => {
    setAuthModalOpen(true);
    setActiveTab('dashboard');
  };

  return (
    <div className="space-y-24 py-8">
      {/* Hero Section */}
      <section className="relative text-center max-w-5xl mx-auto px-4 pt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation LLM Interview Coach v2.0</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
          Master Tech Interviews with <br />
          <span className="gradient-text">Adaptive Real-Time AI</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Conduct authentic HR, Technical System Design, Behavioral, and Live Coding interviews tailored dynamically to your resume & target role. Receive instant speech-to-text transcript analysis and performance diagnostic reports.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" icon={ArrowRight} onClick={handleStartFree}>
            Start Mock Interview Free
          </Button>
          <Button size="lg" variant="outline" icon={Play} onClick={() => setActiveTab('ai-interview')}>
            Try Live Demo
          </Button>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>OpenAI GPT-4o & Gemini Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Integrated Monaco Code Sandbox</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>PDF Resume Skill Extractor</span>
          </div>
        </div>
      </section>

      {/* Interactive Demo Showcase Mock */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-4 md:p-8 border border-slate-800 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">InterviewAI Live Workspace — Technical & Coding Session</span>
            </div>
            <Badge variant="emerald">Live Audio Sync</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Voice Panel */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center avatar-glow">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">AI Interview Lead</h4>
                    <p className="text-xs text-cyan-400">Asking System Architecture Question</p>
                  </div>
                </div>
                <Badge variant="purple">Speaking...</Badge>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-cyan-400">Interviewer Question:</p>
                <p className="leading-relaxed">
                  "How would you design a distributed rate-limiting microservice handling 50,000 requests per second across regional API gateways?"
                </p>
              </div>

              {/* Sound Wave Animation */}
              <div className="flex items-center justify-center gap-1.5 h-10 bg-slate-950/60 rounded-xl px-4 border border-slate-800/80">
                {[40, 75, 30, 90, 65, 45, 80, 50, 95, 30, 70, 85, 40].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-purple-500 animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${idx * 100}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Monaco Code Editor Preview */}
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-300 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-cyan-400 font-bold">rate_limiter.py</span>
                <span className="text-slate-500">Python 3.11</span>
              </div>
              <pre className="text-emerald-400">
{`import time

class TokenBucketLimiter:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity
        self.tokens = capacity
        self.refill_rate = refill_rate
        self.last_refill = time.time()`}
              </pre>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Test Execution: <strong className="text-emerald-400">3/3 Passed</strong></span>
                <span>Latency: <strong>14.2ms</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="purple">Comprehensive Platform</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered for Technical Mastery</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Everything you need to excel in top-tier software engineering, product manager, and tech interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">AI Voice & Audio Sync</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engage in realistic voice interviews powered by Speech-to-Text STT transcription and natural neural text-to-speech feedback.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Monaco Live Code Sandbox</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Write, compile, and test code in Python, JavaScript, and TypeScript with instant test case verification and LLM code review.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">PDF Resume Personalization</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upload your PDF resume to extract skills, experience levels, and projects so AI asks highly relevant questions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
