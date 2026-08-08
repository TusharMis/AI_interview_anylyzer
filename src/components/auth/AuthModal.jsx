import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Mail, Lock, User, Sparkles, KeyRound } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export function AuthModal() {
  const { isAuthModalOpen, setAuthModalOpen, login, signUp, resetPassword, isLoading, authError } = useAuthStore();
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'login') {
      await login(email, password);
    } else if (mode === 'signup') {
      await signUp(email, password, fullName);
    } else if (mode === 'forgot') {
      await resetPassword(email);
    }
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={() => setAuthModalOpen(false)}
      title={
        mode === 'login'
          ? 'Sign in to InterviewAI'
          : mode === 'signup'
          ? 'Create your InterviewAI Account'
          : 'Reset Your Password'
      }
      maxWidth="max-w-md"
    >
      <div className="space-y-4">
        {/* Toggle Pills */}
        <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              mode === 'login' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              mode === 'signup' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {authError && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
            {authError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.developer@example.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-medium text-slate-300">Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-[11px] text-cyan-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          )}

          <Button type="submit" className="w-full mt-2" isLoading={isLoading} icon={Sparkles}>
            {mode === 'login'
              ? 'Sign In & Launch Dashboard'
              : mode === 'signup'
              ? 'Create Free Account'
              : 'Send Reset Link'}
          </Button>
        </form>

        {mode === 'forgot' && (
          <button
            type="button"
            onClick={() => setMode('login')}
            className="w-full text-center text-xs text-slate-400 hover:text-white"
          >
            ← Back to Sign In
          </button>
        )}
      </div>
    </Modal>
  );
}
