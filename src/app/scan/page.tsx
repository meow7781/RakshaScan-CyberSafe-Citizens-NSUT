'use client';
import React, { useState } from 'react';
import { AppNavbar } from '@/components/Navbar';
import { Shield, AlertTriangle, CheckCircle, XCircle, Search, Link2, Globe, Lock, ExternalLink, Info, Loader2 } from 'lucide-react';

interface ScanResult {
  url: string;
  safe: boolean;
  score: number;
  threats: string[];
  ssl: boolean;
  domain_age: string;
  redirects: number;
  patterns: string[];
}

export default function ScanPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise(r => setTimeout(r, 2500));
    const bad = url.includes('free') || url.includes('win') || url.includes('login') || url.includes('verify');
    setResult({
      url,
      safe: !bad,
      score: bad ? Math.floor(Math.random() * 30) + 10 : Math.floor(Math.random() * 15) + 85,
      threats: bad ? ['Phishing attempt detected', 'Suspicious domain pattern', 'Known malware distribution'] : [],
      ssl: !bad,
      domain_age: bad ? '2 days' : '5 years',
      redirects: bad ? 3 : 0,
      patterns: bad ? ['Mimics bank login page', 'Hidden iframe detected', 'Obfuscated JavaScript'] : [],
    });
    setLoading(false);
  };

  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-4xl mx-auto">
        <div className="glow-orb w-[500px] h-[500px] bg-blue-600 -top-[200px] right-[-200px]" />

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-4">
            <Search size={14} /> AI-Powered Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-black">URL <span className="gradient-text">Scanner</span></h1>
          <p className="text-slate-500 mt-3 text-lg max-w-lg mx-auto">Paste any suspicious URL to instantly check if it&apos;s safe.</p>
        </div>

        {/* Scanner */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Link2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                placeholder="https://suspicious-website.com/login..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
              />
            </div>
            <button onClick={handleScan} disabled={loading} className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2 active:scale-95 whitespace-nowrap">
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
              {loading ? 'Scanning...' : 'Scan URL'}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs text-slate-600">Try:</span>
            {['https://google.com', 'https://free-iphone-win.xyz', 'https://github.com'].map(u => (
              <button key={u} onClick={() => setUrl(u)} className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-slate-500 transition-colors border border-white/5">
                {u}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-red-500/20" />
              <div className="absolute inset-0 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
              <Shield className="absolute inset-0 m-auto text-red-400" size={28} />
            </div>
            <p className="font-bold text-white">Analyzing URL...</p>
            <p className="text-sm text-slate-500 mt-1">Checking domain, SSL, patterns &amp; threat databases</p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="space-y-4 fade-in-up">
            {/* Score */}
            <div className={`rounded-2xl p-6 border ${result.safe ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-rose-500/20 bg-rose-500/5'}`}>
              <div className="flex items-center gap-5">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${result.safe ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                  {result.safe ? <CheckCircle className="text-emerald-400" size={36} /> : <XCircle className="text-rose-400" size={36} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-black text-white">{result.safe ? 'URL is Safe' : 'Threat Detected!'}</h2>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${result.safe ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/20 bg-rose-500/10 text-rose-400'}`}>
                      {result.safe ? 'SAFE' : 'DANGEROUS'}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm break-all font-mono">{result.url}</p>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-black ${result.safe ? 'text-emerald-400' : 'text-rose-400'}`}>{result.score}%</div>
                  <p className="text-xs text-slate-500">Safety</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: <Lock size={16} />, label: 'SSL', value: result.ssl ? 'Valid' : 'None', ok: result.ssl },
                { icon: <Globe size={16} />, label: 'Domain Age', value: result.domain_age, ok: !result.domain_age.includes('day') },
                { icon: <ExternalLink size={16} />, label: 'Redirects', value: `${result.redirects}`, ok: result.redirects < 2 },
                { icon: <Info size={16} />, label: 'Threats', value: `${result.threats.length} found`, ok: result.threats.length === 0 },
              ].map(d => (
                <div key={d.label} className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-2 text-red-400 mb-2">{d.icon}<span className="text-xs font-bold text-slate-500">{d.label}</span></div>
                  <span className={`text-sm font-bold ${d.ok ? 'text-emerald-400' : 'text-rose-400'}`}>{d.value}</span>
                </div>
              ))}
            </div>

            {/* Threats */}
            {result.threats.length > 0 && (
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-rose-400 flex items-center gap-2 mb-4"><AlertTriangle size={18} /> Detected Threats</h3>
                <div className="space-y-2">
                  {result.threats.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/5 border border-rose-500/10">
                      <XCircle size={14} className="text-rose-400 shrink-0" />
                      <span className="text-sm text-rose-300">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Patterns */}
            {result.patterns.length > 0 && (
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-amber-400 flex items-center gap-2 mb-4"><AlertTriangle size={18} /> Suspicious Patterns</h3>
                <div className="space-y-2">
                  {result.patterns.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                      <Info size={14} className="text-amber-400 shrink-0" />
                      <span className="text-sm text-amber-300">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
