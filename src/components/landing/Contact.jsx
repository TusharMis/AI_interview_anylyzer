import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const { showToast } = useApp();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Message sent! Our Venture Architect team will respond shortly.");
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0B14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your <span className="text-gradient">Launch Roadmap?</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Have questions about enterprise custom AI agent deployments, venture studio licensing, or strategic partnerships? Contact our venture engineering team.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl glass-panel border-white/10">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">DIRECT EMAIL</div>
                  <div className="text-sm font-bold text-white">founders@launchpilot.ai</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl glass-panel border-white/10">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">SUPPORT & ADVISORY</div>
                  <div className="text-sm font-bold text-white">24/7 AI Co-Founder Helpdesk</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 rounded-3xl glass-panel border-purple-500/30 shadow-2xl shadow-purple-950/40">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-xs text-slate-400">Thank you for reaching out. We will get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Send Us a Direct Note</h3>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@startup.io"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Message / Startup Overview</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your venture goals or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full glow-btn-purple py-3.5 px-4 rounded-xl text-white font-extrabold text-sm flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
