import React from 'react';
import { useApp } from '../../../context/AppContext';
import { SAMPLE_REPORTS } from '../../../mockData/startupData';
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ReportsView() {
  const { showToast } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Executive Dossiers</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white mt-1">Exportable Strategy Reports</h2>
      </div>

      {/* Reports Table */}
      <div className="p-6 rounded-3xl glass-panel border-white/10 overflow-x-auto space-y-4">
        <h3 className="text-lg font-bold text-white">Generated Launch Strategy Dossiers</h3>

        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 font-mono">
              <th className="p-3">Report Title</th>
              <th className="p-3">Generated Date</th>
              <th className="p-3">Report Type</th>
              <th className="p-3">File Size</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {SAMPLE_REPORTS.map((rep) => (
              <tr key={rep.id} className="hover:bg-white/[0.02] text-slate-300">
                <td className="p-3 font-bold text-white flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{rep.title}</span>
                </td>
                <td className="p-3 font-mono text-slate-400">{rep.date}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono">
                    {rep.type}
                  </span>
                </td>
                <td className="p-3 font-mono">{rep.size} ({rep.pages} pages)</td>
                <td className="p-3">
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{rep.status}</span>
                  </span>
                </td>
                <td className="p-3 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => showToast(`Previewing report ${rep.title}`)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                      title="Preview Dossier"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => showToast(`Downloading ${rep.title}...`)}
                      className="p-2 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:text-white"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
