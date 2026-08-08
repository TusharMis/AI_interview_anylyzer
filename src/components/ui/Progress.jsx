import React from 'react';

export function Progress({ value = 0, max = 100, color = 'cyan', className = '' }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const colors = {
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    purple: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    emerald: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    amber: 'bg-gradient-to-r from-amber-500 to-orange-500'
  };

  return (
    <div className={`w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50 ${className}`}>
      <div
        className={`h-full transition-all duration-500 ease-out rounded-full ${colors[color] || colors.cyan}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
