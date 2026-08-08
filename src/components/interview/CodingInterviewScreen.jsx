import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  Play, CheckCircle2, Sparkles, HelpCircle, Terminal
} from 'lucide-react';
import { useCodeStore } from '../../store/useCodeStore';
import { useInterviewStore } from '../../store/useInterviewStore';

export function CodingInterviewScreen({ setActiveTab }) {
  const { language, code, isExecuting, executionResult, setLanguage, setCode, setExecuting, setExecutionResult } = useCodeStore();
  const { completeSession } = useInterviewStore();
  const [activeTabLeft, setActiveTabLeft] = useState('problem'); // 'problem' | 'hints'
  const [showHint, setShowHint] = useState(false);

  const handleRunCode = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecutionResult({
        status: 'success',
        passed_count: 3,
        total_count: 3,
        results: [
          { test_id: 1, input: 'nums = [2, 7, 11, 15], target = 9', expected_output: '[0, 1]', actual_output: '[0, 1]', passed: true },
          { test_id: 2, input: 'nums = [3, 2, 4], target = 6', expected_output: '[1, 2]', actual_output: '[1, 2]', passed: true },
          { test_id: 3, input: 'nums = [3, 3], target = 6', expected_output: '[0, 1]', actual_output: '[0, 1]', passed: true }
        ],
        ai_feedback: 'Optimal solution! Big-O Time Complexity: O(N) time using a hash map lookup strategy. Memory Space Complexity: O(N).',
        execution_time_ms: 14.8
      });
    }, 1200);
  };

  const handleSubmitCode = () => {
    completeSession({
      technical_score: 95,
      communication_score: 90,
      problem_solving_score: 96,
      culture_fit_score: 92
    });
    setActiveTab('reports');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4 py-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3">
          <Badge variant="cyan">Monaco Coding Sandbox</Badge>
          <span className="text-xs text-slate-300 font-bold">Two Sum Array Lookup Optimization</span>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-cyan-400 font-mono focus:outline-none"
          >
            <option value="python">Python 3.11</option>
            <option value="javascript">JavaScript (Node.js)</option>
            <option value="typescript">TypeScript 5.0</option>
          </select>

          <Button icon={Play} isLoading={isExecuting} onClick={handleRunCode} size="sm">
            Run Test Cases
          </Button>

          <Button variant="secondary" size="sm" icon={Sparkles} onClick={handleSubmitCode}>
            Submit Code & Finish
          </Button>
        </div>
      </div>

      {/* Main Split Grid: Left Problem Statement, Right Monaco Code Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Problem Spec Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 h-[650px] overflow-y-auto">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveTabLeft('problem')}
                className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                  activeTabLeft === 'problem' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-400'
                }`}
              >
                Problem Specification
              </button>
              <button
                onClick={() => setActiveTabLeft('hints')}
                className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                  activeTabLeft === 'hints' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-slate-400'
                }`}
              >
                AI Hints & Tips
              </button>
            </div>

            {activeTabLeft === 'problem' ? (
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">1. Two Sum (Algorithm)</h3>
                  <Badge variant="emerald">Easy / Medium</Badge>
                </div>

                <p className="leading-relaxed">
                  Given an array of integers <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded">nums</code> and an integer <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded">target</code>, return indices of the two numbers such that they add up to target.
                </p>

                <p className="leading-relaxed">
                  You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
                </p>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Example 1:</h4>
                  <pre className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400">
{`Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Constraints:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-400">
                    <li>2 &lt;= nums.length &lt;= 10<sup>4</sup></li>
                    <li>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></li>
                    <li>Only one valid answer exists.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-slate-300">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  AI Architect Hints
                </h3>

                {!showHint ? (
                  <Button variant="outline" size="sm" onClick={() => setShowHint(true)}>
                    Reveal Optimization Hint
                  </Button>
                ) : (
                  <div className="bg-purple-950/40 border border-purple-500/30 p-4 rounded-xl space-y-2 text-purple-200">
                    <p className="font-bold">Hint 1 (Hash Map Lookup):</p>
                    <p>
                      Instead of using nested loops which yields O(N²), store each number's index in a hash map as you iterate. Look up if <code>target - current_num</code> already exists in O(1) time!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Monaco Code Sandbox & Output Panel (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Editor Container */}
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden h-[420px]">
            <Editor
              height="100%"
              language={language === 'cpp' ? 'cpp' : language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                fontSize: 13,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 12 }
              }}
            />
          </div>

          {/* Terminal & Test Execution Results */}
          <div className="glass-panel rounded-2xl p-4 border border-slate-800 bg-slate-950/90 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="flex items-center gap-2 text-slate-300 font-bold">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Execution Output & Test Suite
              </span>
              {executionResult && (
                <Badge variant="emerald">
                  {executionResult.passed_count}/{executionResult.total_count} Passed ({executionResult.execution_time_ms}ms)
                </Badge>
              )}
            </div>

            {executionResult ? (
              <div className="space-y-2">
                <div className="flex gap-2">
                  {executionResult.results.map((t) => (
                    <span
                      key={t.test_id}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] flex items-center gap-1 font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Test {t.test_id} Passed
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-[11px] bg-slate-900 p-3 rounded-xl border border-slate-800 leading-relaxed">
                  {executionResult.ai_feedback}
                </p>
              </div>
            ) : (
              <p className="text-slate-500 text-[11px]">Click 'Run Test Cases' to compile and execute your code against test suites.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
