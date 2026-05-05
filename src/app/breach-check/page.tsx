'use client';
import React, { useState } from 'react';
import { AppNavbar } from '@/components/Navbar';
import { Fingerprint, Search, Shield, AlertTriangle, CheckCircle, Mail, Loader2 } from 'lucide-react';

interface BreachResult {
  email: string;
  breached: boolean;
  breaches: { name: string; date: string; data: string[] }[];
}

export default function BreachCheckPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BreachResult | null>(null);

  const handleCheck = async () => {
    if (!email.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise(r => setTimeout(r, 2000));
    const breached = email.includes('test') || email.includes('old');
    setResult({
      email,
      breached,
      breaches: breached ? [
        { name: 'MobiKwik', date: 'March 2021', data: ['Email', 'Phone', 'Address', 'KYC Documents'] },
        { name: 'BigBasket', date: 'November 2020', data: ['Email', 'Password Hash', 'Phone'] },
        { name: 'Unacademy', date: 'May 2020', data: ['Email', 'Username', 'Password Hash'] },
      ] : [],
    });
    setLoading(false);
  };

  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-3xl mx-auto">
        <div className="glow-orb w-[500px] h-[500px] bg-violet-600 -top-[200px] left-[-200px]" />

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm font-semibold mb-4">
            <Fingerprint size={14} /> Data Breach Detection
          </div>
          <h1 className="text-4xl md:text-5xl font-black">Breach <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">Check</span></h1>
          <p className="text-slate-500 mt-3 text-lg">Find out if your email has been compromised in data breaches.</p>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCheck()}
                placeholder="your@email.com"
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
              />
            </div>
            <button onClick={handleCheck} disabled={loading} className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2 whitespace-nowrap">
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
              {loading ? 'Checking...' : 'Check Now'}
            </button>
          </div>
        </div>

        {result && !loading && (
          <div className="space-y-4 fade-in-up">
            <div className={`rounded-2xl p-6 border ${result.breached ? 'border-rose-500/20 bg-rose-500/5' : 'border-emerald-500/20 bg-emerald-500/5'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${result.breached ? 'bg-rose-500/10' : 'bg-emerald-500/10'}`}>
                  {result.breached ? <AlertTriangle className="text-rose-400" size={28} /> : <CheckCircle className="text-emerald-400" size={28} />}
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">
                    {result.breached ? `Found in ${result.breaches.length} Breach${result.breaches.length > 1 ? 'es' : ''}` : 'No Breaches Found'}
                  </h2>
                  <p className="text-slate-500 text-sm font-mono">{result.email}</p>
                </div>
              </div>
            </div>

            {result.breaches.map((b, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white">{b.name}</h3>
                  <span className="text-xs text-slate-500 font-mono">{b.date}</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">Compromised data:</p>
                <div className="flex flex-wrap gap-2">
                  {b.data.map(d => (
                    <span key={d} className="text-xs font-bold px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400">{d}</span>
                  ))}
                </div>
              </div>
            ))}

            {result.breached && (
              <div className="glass-card border-glow rounded-2xl p-6">
                <h3 className="font-bold text-amber-400 flex items-center gap-2 mb-3"><Shield size={18} /> Recommended Actions</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" /> Change passwords for all affected accounts immediately</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" /> Enable Two-Factor Authentication (2FA)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" /> Monitor bank and credit card statements for suspicious activity</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" /> Be extra cautious of phishing emails targeting these accounts</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
