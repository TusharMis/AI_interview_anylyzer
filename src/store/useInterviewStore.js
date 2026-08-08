import { create } from 'zustand';

export const useInterviewStore = create((set, get) => ({
  activeSessionId: null,
  interviewType: 'Technical', // 'HR' | 'Technical' | 'Behavioral' | 'Coding'
  targetRole: 'Full Stack Engineer',
  experienceLevel: 'Mid-Senior',
  currentQuestionIndex: 0,
  questions: [
    {
      id: 'q1',
      question: 'How do you approach designing scalable high-concurrency microservices with real-time WebSocket communication?',
      category: 'System Design',
      difficulty: 'Hard'
    },
    {
      id: 'q2',
      question: 'Walk me through your optimization strategy when dealing with memory leaks and rendering bottlenecks in React/Next.js.',
      category: 'Frontend Performance',
      difficulty: 'Medium'
    }
  ],
  transcripts: [
    {
      id: 'msg-1',
      speaker: 'ai',
      content: 'Hello Alex! I am InterviewAI. I will be conducting your Technical Interview today for the Senior Full Stack Engineer role. Let us begin with system design.',
      timestamp: '10:00 AM'
    }
  ],
  isAiSpeaking: false,
  isUserSpeaking: false,
  timerSeconds: 0,
  isTimerRunning: false,
  isCompleted: false,
  evaluationResult: null,

  setInterviewType: (type) => set({ interviewType: type }),
  setTargetRole: (role) => set({ targetRole: role }),
  setExperienceLevel: (level) => set({ experienceLevel: level }),
  
  startSession: (sessionId, questions) =>
    set({
      activeSessionId: sessionId,
      questions: questions.length > 0 ? questions : get().questions,
      currentQuestionIndex: 0,
      transcripts: [
        {
          id: 'msg-1',
          speaker: 'ai',
          content: `Welcome to your ${get().interviewType} interview! Let's get started with your first challenge.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ],
      isTimerRunning: true,
      isCompleted: false,
      timerSeconds: 0
    }),

  addTranscriptMessage: (speaker, content) =>
    set((state) => ({
      transcripts: [
        ...state.transcripts,
        {
          id: `msg-${Date.now()}`,
          speaker,
          content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    })),

  setAiSpeaking: (speaking) => set({ isAiSpeaking: speaking }),
  setUserSpeaking: (speaking) => set({ isUserSpeaking: speaking }),
  incrementTimer: () => set((state) => ({ timerSeconds: state.timerSeconds + 1 })),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1)
    })),
  completeSession: (evalResult) =>
    set({
      isTimerRunning: false,
      isCompleted: true,
      evaluationResult: evalResult
    })
}));
