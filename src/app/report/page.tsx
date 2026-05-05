'use client';
import React, { useState } from 'react';
import { AppNavbar } from '@/components/Navbar';
import { AlertTriangle, Upload, Phone, Mail, Link2, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ReportPage() {
  const [type, setType] = useState<'url' | 'phone' | 'email' | 'social'>('url');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <AppNavbar />
        <div className="pt-20 pb-16 px-6 max-w-2xl mx-auto text-center">
          <div className="mt-24">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-emerald-400" />
            </div>
            <h1 className="text-3xl font-black text-white mb-4">Report Submitted</h1>
            <p className="text-slate-400 mb-8">Thank you for keeping the community safe. Our AI team will analyze this report.</p>
            <button onClick={() => setSubmitted(false)} className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all">
              Submit Another Report
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-sm font-semibold mb-4">
            <AlertTriangle size={14} /> Community Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-black">Report a <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">Scam</span></h1>
          <p className="text-slate-500 mt-3 text-lg">Help build a safer digital environment by reporting suspicious activities.</p>
        </div>

        {/* Type Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'url' as const, icon: <Link2 size={22} />, label: 'Malicious URL', color: 'blue' },
            { id: 'phone' as const, icon: <Phone size={22} />, label: 'Scam Call/SMS', color: 'rose' },
            { id: 'email' as const, icon: <Mail size={22} />, label: 'Phishing Email', color: 'amber' },
            { id: 'social' as const, icon: <MessageSquare size={22} />, label: 'Social Media', color: 'violet' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setType(t.id)}
              className={`p-4 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 ${
                type === t.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/20 scale-[1.02]'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              {t.icon}
              <span className="font-semibold text-xs">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="glass-card rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'url' && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Suspicious URL</label>
                <input placeholder="https://..." required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
            )}
            {type === 'phone' && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Phone Number</label>
                <input placeholder="+91..." required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
            )}
            {type === 'email' && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Sender Email</label>
                <input placeholder="scammer@example.com" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
            )}
            {type === 'social' && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Platform &amp; Username</label>
                <input placeholder="Instagram: @scammer_acc" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Description</label>
              <textarea placeholder="What happened? Describe the interaction..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none h-32" />
            </div>

            <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Upload size={20} />
              </div>
              <p className="font-semibold text-slate-300 text-sm">Upload Evidence</p>
              <p className="text-xs text-slate-600 mt-1">Screenshots, emails, or recordings (Max 5MB)</p>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-amber-300/80">
                <strong className="text-amber-300">Note:</strong> False reporting may lead to restrictions. Ensure all information is accurate.
              </p>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2">
              {loading ? 'Submitting...' : <><Send size={18} /> Submit Report</>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
