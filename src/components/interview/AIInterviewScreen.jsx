import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  Mic, MicOff, Volume2, VolumeX, Send, Bot, User, Clock, Square, Sparkles
} from 'lucide-react';
import { useInterviewStore } from '../../store/useInterviewStore';

export function AIInterviewScreen({ setActiveTab }) {
  const {
    interviewType, targetRole, questions, currentQuestionIndex,
    transcripts, isAiSpeaking, timerSeconds,
    addTranscriptMessage, setAiSpeaking, setUserSpeaking,
    incrementTimer, nextQuestion, completeSession
  } = useInterviewStore();

  const [inputSpeechText, setInputSpeechText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const transcriptEndRef = useRef(null);

  // Timer counter interval
  useEffect(() => {
    const timer = setInterval(() => {
      incrementTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, [incrementTimer]);

  // Auto-scroll transcript to bottom
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendAnswer = () => {
    if (!inputSpeechText.trim()) return;

    // Add user answer
    addTranscriptMessage('user', inputSpeechText);
    setInputSpeechText('');
    setUserSpeaking(false);

    // Simulate AI thinking and speech response
    setAiSpeaking(true);
    setTimeout(() => {
      let aiReply = "That's a very solid answer. I particularly liked your point on maintaining stateless architecture. How do you handle cache invalidation in that context?";
      if (currentQuestionIndex < questions.length - 1) {
        aiReply = `Good response! Let's move to the next question: "${questions[currentQuestionIndex + 1].question}"`;
        nextQuestion();
      }
      addTranscriptMessage('ai', aiReply);
      setAiSpeaking(false);

      // Trigger Web Speech API SpeechSynthesis if available
      if ('speechSynthesis' in window && !isMuted) {
        const utterance = new SpeechSynthesisUtterance(aiReply);
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    }, 1500);
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setUserSpeaking(true);
      
      // Web Speech API recognition fallback
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onresult = (event) => {
          const current = event.resultIndex;
          const transcript = event.results[current][0].transcript;
          setInputSpeechText(transcript);
        };

        recognition.onend = () => {
          setIsRecording(false);
          setUserSpeaking(false);
        };

        recognition.start();
      } else {
        // Fallback placeholder text generator
        setTimeout(() => {
          setInputSpeechText("In my previous project, we implemented Redis clusters with a write-through caching strategy to ensure database consistency.");
          setIsRecording(false);
          setUserSpeaking(false);
        }, 2000);
      }
    } else {
      setIsRecording(false);
      setUserSpeaking(false);
    }
  };

  const currentQ = questions[currentQuestionIndex] || questions[0];

  const handleFinishInterview = () => {
    completeSession({
      technical_score: 92,
      communication_score: 94,
      problem_solving_score: 89,
      culture_fit_score: 95
    });
    setActiveTab('reports');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 py-4">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3">
          <Badge variant={interviewType === 'Technical' ? 'purple' : 'cyan'}>
            {interviewType} Interview Track
          </Badge>
          <span className="text-xs text-slate-400 font-medium">Role: <strong className="text-white">{targetRole}</strong></span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{formatTimer(timerSeconds)}</span>
          </div>

          <Button variant="danger" size="sm" icon={Square} onClick={handleFinishInterview}>
            End & Evaluate
          </Button>
        </div>
      </div>

      {/* Main Grid: Left Avatar & Controls, Right Transcript */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Avatar & Voice Visualizer (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card hover={false} className="bg-slate-900/90 border-slate-800 text-center space-y-6">
            {/* AI Avatar Display */}
            <div className="relative w-36 h-36 mx-auto">
              <div className={`w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center p-1.5 ${isAiSpeaking ? 'avatar-glow scale-105 transition-all' : ''}`}>
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border-2 border-slate-800">
                  <Bot className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
              {isAiSpeaking && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase shadow-lg animate-bounce">
                  AI Speaking...
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">InterviewAI Persona</h3>
              <p className="text-xs text-slate-400 mt-0.5">Senior Staff Engineer Evaluator</p>
            </div>

            {/* Current Active Question Card */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-cyan-400 font-bold">Question {currentQuestionIndex + 1} of {questions.length}</span>
                <Badge variant="purple">{currentQ.difficulty}</Badge>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                "{currentQ.question}"
              </p>
            </div>

            {/* Realtime Audio Wave Visualizer */}
            <div className="space-y-2">
              <p className="text-[11px] text-slate-400 font-mono">Real-Time Mic Waveform</p>
              <div className="flex items-center justify-center gap-1.5 h-12 bg-slate-950 rounded-xl px-4 border border-slate-800">
                {[30, 60, 25, 80, 50, 95, 70, 40, 85, 30, 60, 45, 90, 35].map((val, idx) => (
                  <div
                    key={idx}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      isRecording
                        ? 'bg-gradient-to-t from-cyan-400 to-purple-500 animate-pulse'
                        : 'bg-slate-800'
                    }`}
                    style={{ height: isRecording ? `${val}%` : '20%', animationDelay: `${idx * 80}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Voice Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <Button
                variant={isRecording ? 'danger' : 'primary'}
                icon={isRecording ? MicOff : Mic}
                onClick={toggleRecording}
              >
                {isRecording ? 'Stop Mic' : 'Speak Answer'}
              </Button>

              <Button
                variant="outline"
                icon={isMuted ? VolumeX : Volume2}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? 'Unmute AI' : 'Mute AI'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Side: Chat Transcript & Input (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col h-[600px] glass-panel rounded-2xl border border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Live Interview Dialogue Stream
            </h3>
            <span className="text-[11px] text-slate-400">{transcripts.length} exchanges</span>
          </div>

          {/* Transcript Messages Scroll Area */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-950/60">
            {transcripts.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.speaker === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed ${
                    msg.speaker === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1 text-[10px] opacity-70">
                    <span className="font-bold">{msg.speaker === 'user' ? 'You (Candidate)' : 'InterviewAI Lead'}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <p>{msg.content}</p>
                </div>

                {msg.speaker === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>

          {/* Text Response Input Bar */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex gap-2">
            <input
              type="text"
              value={inputSpeechText}
              onChange={(e) => setInputSpeechText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendAnswer()}
              placeholder="Type your response or click 'Speak Answer'..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
            <Button icon={Send} onClick={handleSendAnswer}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
