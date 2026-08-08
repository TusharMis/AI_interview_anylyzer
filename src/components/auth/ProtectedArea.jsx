import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { Lock, Sparkles } from 'lucide-react';

export function ProtectedArea({ children }) {
  const { isAuthenticated, setAuthModalOpen } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 glass-panel rounded-3xl border border-slate-800 text-center space-y-6">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
          <Lock className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Authentication Required</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Please sign in or create an account to access the InterviewAI workspace, PDF resume parser, live Monaco coding room, and analytics reports.
          </p>
        </div>

        <Button icon={Sparkles} className="w-full" onClick={() => setAuthModalOpen(true)}>
          Sign In to Access Dashboard
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
