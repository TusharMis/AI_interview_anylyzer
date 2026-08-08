import React, { useState } from 'react';
import { Card, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Progress } from '../ui/Progress';
import { Modal } from '../ui/Modal';
import {
  Mic, Code2, Sparkles, TrendingUp, Award, Clock, ArrowRight, CheckCircle2,
  FileText, Play, Plus, RefreshCw
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useInterviewStore } from '../../store/useInterviewStore';
import { useResumeStore } from '../../store/useResumeStore';

export function DashboardPage({ setActiveTab }) {
  const { user } = useAuthStore();
  const { setInterviewType, startSession } = useInterviewStore();
  const { activeResume } = useResumeStore();
  const [isQuickStartOpen, setQuickStartOpen] = useState(false);

  const handleLaunchInterview = (type) => {
    setInterviewType(type);
    startSession(`session-${Date.now()}`, []);
    setQuickStartOpen(false);
    if (type === 'Coding') {
      setActiveTab('coding-interview');
    } else {
      setActiveTab('ai-interview');
    }
  };

  const pastInterviews = [
    {
      id: 'int-101',
      title: 'Full Stack System Architecture & Microservices',
      type: 'Technical',
      date: 'Yesterday, 4:30 PM',
      score: 92,
      duration: '28 mins',
      status: 'Completed'
    },
    {
      id: 'int-102',
      title: 'Monaco Sandbox Algorithm & Data Structures',
      type: 'Coding',
      date: 'Aug 04, 2026',
      score: 88,
      duration: '45 mins',
      status: 'Completed'
    },
    {
      id: 'int-103',
      title: 'Behavioral Leadership & Conflict Resolution',
      type: 'Behavioral',
      date: 'Aug 01, 2026',
      score: 95,
      duration: '20 mins',
      status: 'Completed'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-6">
      {/* Welcome Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="cyan">Target Role: {user?.target_role || 'Senior Software Engineer'}</Badge>
              <Badge variant="purple">{user?.experience_level || 'Senior Level'}</Badge>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="gradient-text">{user?.full_name || 'Alex'}</span>! 👋
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Ready to elevate your technical confidence? Resume readiness score is currently at <strong className="text-emerald-400">94% match</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button icon={Plus} size="lg" onClick={() => setQuickStartOpen(true)}>
              Start New Mock Interview
            </Button>
            <Button variant="outline" size="lg" icon={FileText} onClick={() => setActiveTab('resume')}>
              Manage Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card hover={false} className="bg-slate-900/80 border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">Interviews Completed</p>
              <h3 className="text-2xl font-bold text-white mt-1">12</h3>
            </div>
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+25% increase this week</span>
          </div>
        </Card>

        <Card hover={false} className="bg-slate-900/80 border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">Average Performance Score</p>
              <h3 className="text-2xl font-bold text-white mt-1">91.6%</h3>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <Progress value={91.6} color="purple" />
          </div>
        </Card>

        <Card hover={false} className="bg-slate-900/80 border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">Coding Accuracy</p>
              <h3 className="text-2xl font-bold text-white mt-1">88%</h3>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Code2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <Progress value={88} color="emerald" />
          </div>
        </Card>

        <Card hover={false} className="bg-slate-900/80 border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">Practice Time</p>
              <h3 className="text-2xl font-bold text-white mt-1">4h 15m</h3>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-3">Target: 5 hours / week</p>
        </Card>
      </div>

      {/* Main Content Split: Past Interviews & Active Resume Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Past Interviews List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Recent Interview Sessions</h3>
            <button
              onClick={() => setActiveTab('reports')}
              className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
            >
              View Full Analytics <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {pastInterviews.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab('reports')}
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={item.type === 'Coding' ? 'cyan' : item.type === 'Technical' ? 'purple' : 'emerald'}>
                      {item.type}
                    </Badge>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-slate-400">{item.duration}</p>
                    <p className="text-sm font-extrabold text-cyan-400">{item.score}% Score</p>
                  </div>
                  <Button variant="ghost" size="sm" icon={ArrowRight}>
                    Report
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Personalization Widget */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Active Resume Profile</h3>
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white truncate max-w-[160px]">{activeResume.fileName}</h4>
                  <p className="text-[10px] text-slate-400">Parsed Skills Extracted</p>
                </div>
              </div>
              <Badge variant="emerald">{activeResume.matchScore}% Match</Badge>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {activeResume.parsedSkills.slice(0, 6).map((skill, i) => (
                <span key={i} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  {skill}
                </span>
              ))}
              {activeResume.parsedSkills.length > 6 && (
                <span className="px-2 py-0.5 rounded-md bg-slate-900 text-[11px] text-slate-500">
                  +{activeResume.parsedSkills.length - 6} more
                </span>
              )}
            </div>

            <Button variant="outline" className="w-full" size="sm" onClick={() => setActiveTab('resume')}>
              Update Resume PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Start Modal */}
      <Modal
        isOpen={isQuickStartOpen}
        onClose={() => setQuickStartOpen(false)}
        title="Choose Interview Track"
        maxWidth="max-w-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => handleLaunchInterview('Technical')}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500 cursor-pointer space-y-3 transition-all"
          >
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Mic className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Technical & System Design</h4>
            <p className="text-xs text-slate-400">Deep-dive technical questions, architecture decisions, and code optimizations.</p>
          </div>

          <div
            onClick={() => handleLaunchInterview('Coding')}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-purple-500 cursor-pointer space-y-3 transition-all"
          >
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Monaco Live Coding Sandbox</h4>
            <p className="text-xs text-slate-400">Algorithmic coding challenges with live compiler execution & unit test suite.</p>
          </div>

          <div
            onClick={() => handleLaunchInterview('HR')}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500 cursor-pointer space-y-3 transition-all"
          >
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">HR & Background Screening</h4>
            <p className="text-xs text-slate-400">Elevator pitch, career progression, salary alignment, and culture fit.</p>
          </div>

          <div
            onClick={() => handleLaunchInterview('Behavioral')}
            className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-amber-500 cursor-pointer space-y-3 transition-all"
          >
            <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">STAR Behavioral Questions</h4>
            <p className="text-xs text-slate-400">Conflict resolution, project ownership, leadership, and setback handling.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
