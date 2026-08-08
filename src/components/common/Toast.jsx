import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast() {
  const { toastMessage, setToastMessage } = useApp();

  if (!toastMessage) return null;

  const isSuccess = toastMessage.type !== 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center space-x-3 px-5 py-3.5 rounded-2xl glass-panel border border-purple-500/40 shadow-2xl shadow-purple-900/40 text-slate-100 backdrop-blur-xl">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
        )}
        <span className="text-sm font-medium tracking-wide">{toastMessage.message}</span>
        <button
          onClick={() => setToastMessage(null)}
          className="ml-3 text-slate-400 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
