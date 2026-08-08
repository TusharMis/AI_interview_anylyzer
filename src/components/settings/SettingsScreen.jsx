import React, { useState } from 'react';
import { Card, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { User, Key, Sliders, Save, Check } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export function SettingsScreen() {
  const { user, updateProfile } = useAuthStore();
  const [fullName, setFullName] = useState(user?.full_name || 'Alex Rivera');
  const [targetRole, setTargetRole] = useState(user?.target_role || 'Senior Full Stack Engineer');
  const [expLevel, setExpLevel] = useState(user?.experience_level || 'Senior (5+ yrs)');
  const [openaiKey, setOpenaiKey] = useState('sk-proj-••••••••••••••••••••••••');
  const [geminiKey, setGeminiKey] = useState('AIzaSy••••••••••••••••••••••••');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      full_name: fullName,
      target_role: targetRole,
      experience_level: expLevel
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      <div className="space-y-2">
        <Badge variant="cyan">Platform Preferences</Badge>
        <h1 className="text-3xl font-extrabold text-white">Account & AI Settings</h1>
        <p className="text-xs text-slate-400">Configure your profile, candidate target role, and custom OpenAI/Gemini API keys.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Details */}
        <Card hover={false} className="bg-slate-900/90 border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <User className="w-5 h-5 text-cyan-400" />
            Candidate Profile
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Target Job Role</label>
              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Experience Level</label>
              <select
                value={expLevel}
                onChange={(e) => setExpLevel(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="Junior (0-2 yrs)">Junior (0-2 yrs)</option>
                <option value="Mid-Level (2-5 yrs)">Mid-Level (2-5 yrs)</option>
                <option value="Senior (5+ yrs)">Senior (5+ yrs)</option>
                <option value="Staff / Lead Architect">Staff / Lead Architect</option>
              </select>
            </div>
          </div>
        </Card>

        {/* API Key Configurations */}
        <Card hover={false} className="bg-slate-900/90 border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Key className="w-5 h-5 text-purple-400" />
            Custom LLM API Keys (Optional)
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">OpenAI API Key</label>
              <input
                type="password"
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-mono focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Google Gemini API Key</label>
              <input
                type="password"
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-mono focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-3">
          <Button type="submit" icon={savedSuccess ? Check : Save}>
            {savedSuccess ? 'Settings Saved Successfully!' : 'Save Preferences'}
          </Button>
        </div>
      </form>
    </div>
  );
}
