import React, { useEffect } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import confetti from 'canvas-confetti';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Progress } from '../ui/Progress';
import {
  Award, Sparkles, CheckCircle2, AlertTriangle, Lightbulb, ArrowRight, Download, MessageSquare, Check
} from 'lucide-react';
import { useInterviewStore } from '../../store/useInterviewStore';

export function ReportsScreen({ setActiveTab }) {
  const { evaluationResult, interviewType } = useInterviewStore();

  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const report = evaluationResult || {
    overall_score: 93.5,
    communication: 94.0,
    technical: 92.0,
    confidence: 90.0,
    grammar: 96.0,
    strengths: [
      'Articulate response using structured STAR methodology',
      'Optimal Big-O Hash Map implementation during live coding',
      'Proactive clarification of edge cases before writing code'
    ],
    weaknesses: [
      'Elaborate more on automated unit testing frameworks under load',
      'Minor opportunity to discuss distributed caching strategies'
    ],
    recommendations: [
      'Practice describing system bottlenecks under heavy load concurrency',
      'Deepen knowledge on asynchronous message queues like Kafka or RabbitMQ'
    ]
  };

  const radarData = [
    { subject: 'Technical', A: report.technical, fullMark: 100 },
    { subject: 'Communication', A: report.communication, fullMark: 100 },
    { subject: 'Confidence', A: report.confidence, fullMark: 100 },
    { subject: 'Grammar', A: report.grammar, fullMark: 100 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-6">
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="emerald">Session Complete</Badge>
            <Badge variant="purple">{interviewType} Interview</Badge>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Diagnostic Evaluation Report</h1>
          <p className="text-xs text-slate-300">Generated on {new Date().toLocaleDateString()} for Candidate Alex Rivera</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={Download}>
            Export Diagnostic PDF
          </Button>
          <Button size="sm" icon={Sparkles} onClick={() => setActiveTab('dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>

      {/* Main Grid: Left Radar Chart & Overall Gauge (5 Cols), Right Metrics Breakdown (7 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side Score Gauge & Recharts Radar */}
        <div className="lg:col-span-5 space-y-6">
          <Card hover={false} className="bg-slate-900/90 border-slate-800 text-center space-y-6">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 inline-block mx-auto">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Overall Performance Score</p>
              <h2 className="text-5xl font-black gradient-text mt-1">{report.overall_score}%</h2>
              <Badge variant="emerald" className="mt-2">Strong Hire Recommendation</Badge>
            </div>

            {/* Radar Chart */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#1f2937" />
                  <PolarAngleAxis dataKey="subject" stroke="#9ca3af" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#374151" />
                  <Radar name="Candidate" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Right Side: Category Metrics Progress */}
        <div className="lg:col-span-7 space-y-6">
          <Card hover={false} className="bg-slate-900/90 border-slate-800 space-y-5">
            <h3 className="text-lg font-bold text-white">Competency Scores</h3>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-slate-200">System Architecture & Technical Depth</span>
                  <span className="text-cyan-400">{report.technical}%</span>
                </div>
                <Progress value={report.technical} color="cyan" />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-slate-200">Verbal & Written Communication</span>
                  <span className="text-purple-400">{report.communication}%</span>
                </div>
                <Progress value={report.communication} color="purple" />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-slate-200">Delivery Confidence & Presence</span>
                  <span className="text-emerald-400">{report.confidence}%</span>
                </div>
                <Progress value={report.confidence} color="emerald" />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span className="text-slate-200">Grammar & Diction Precision</span>
                  <span className="text-amber-400">{report.grammar}%</span>
                </div>
                <Progress value={report.grammar} color="amber" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Strengths, Weaknesses & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hover={false} className="bg-slate-900/90 border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Strengths
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.strengths.map((str, i) => (
              <li key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                • {str}
              </li>
            ))}
          </ul>
        </Card>

        <Card hover={false} className="bg-slate-900/90 border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Areas for Growth
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.weaknesses.map((wk, i) => (
              <li key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                • {wk}
              </li>
            ))}
          </ul>
        </Card>

        <Card hover={false} className="bg-slate-900/90 border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
            Actionable Next Steps
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.recommendations.map((rec, i) => (
              <li key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                • {rec}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
