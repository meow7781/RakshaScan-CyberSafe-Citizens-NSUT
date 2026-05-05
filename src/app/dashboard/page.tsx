'use client';
import React from 'react';
import { AppNavbar } from '@/components/Navbar';
import { Shield, TrendingUp, AlertTriangle, Globe, Users, Activity, ArrowUp, ArrowDown, Eye } from 'lucide-react';

const stats = [
  { label: 'Threats Blocked', value: '12,847', change: '+12.3%', up: true, icon: <Shield size={20} /> },
  { label: 'URLs Scanned', value: '2.4M', change: '+8.1%', up: true, icon: <Globe size={20} /> },
  { label: 'Active Threats', value: '47', change: '-3.2%', up: false, icon: <AlertTriangle size={20} /> },
  { label: 'Citizens Protected', value: '50,291', change: '+15.7%', up: true, icon: <Users size={20} /> },
];

const recentScans = [
  { url: 'paytm-rewards-claim.xyz', status: 'Phishing', time: '2m ago', severity: 'critical' },
  { url: 'sbi-kyc-update.net', status: 'Malware', time: '5m ago', severity: 'critical' },
  { url: 'google.com', status: 'Safe', time: '8m ago', severity: 'safe' },
  { url: 'amazon-deal-50off.tk', status: 'Suspicious', time: '12m ago', severity: 'warning' },
  { url: 'github.com', status: 'Safe', time: '15m ago', severity: 'safe' },
  { url: 'rbi-refund-process.in', status: 'Phishing', time: '18m ago', severity: 'critical' },
];

const topThreats = [
  { name: 'Banking Phishing', count: 4521, pct: 82 },
  { name: 'SMS Scam', count: 3210, pct: 65 },
  { name: 'Fake Apps', count: 2108, pct: 48 },
  { name: 'Vishing', count: 1547, pct: 35 },
  { name: 'Email Fraud', count: 987, pct: 22 },
];

export default function DashboardPage() {
  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white">Threat <span className="gradient-text">Dashboard</span></h1>
          <p className="text-slate-500 mt-1">Real-time cybersecurity intelligence across India.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(s => (
            <div key={s.label} className="glass-card rounded-2xl p-5 group hover:border-red-500/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="text-red-400">{s.icon}</div>
                <span className={`text-xs font-bold flex items-center gap-1 ${s.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {s.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />} {s.change}
                </span>
              </div>
              <p className="text-2xl font-black text-white">{s.value}</p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Scans */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2"><Activity size={18} className="text-red-400" /> Recent Scans</h2>
              <span className="text-xs text-slate-500">Last 30 minutes</span>
            </div>
            <div className="space-y-2">
              {recentScans.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      s.severity === 'critical' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]' :
                      s.severity === 'warning' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' :
                      'bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.6)]'
                    }`} />
                    <span className="text-sm text-slate-300 font-mono">{s.url}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      s.severity === 'critical' ? 'border-rose-500/20 bg-rose-500/10 text-rose-400' :
                      s.severity === 'warning' ? 'border-amber-500/20 bg-amber-500/10 text-amber-400' :
                      'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                    }`}>{s.status}</span>
                    <span className="text-xs text-slate-600 font-mono w-14 text-right">{s.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Threats */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6"><TrendingUp size={18} className="text-rose-400" /> Top Threats</h2>
            <div className="space-y-5">
              {topThreats.map(t => (
                <div key={t.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">{t.name}</span>
                    <span className="text-slate-500 font-mono">{t.count.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-rose-500 rounded-full transition-all duration-1000" style={{ width: `${t.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Map Placeholder */}
        <div className="glass-card rounded-2xl p-8 mt-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
            <span className="text-sm font-bold text-slate-400">LIVE THREAT HEATMAP</span>
          </div>
          <div className="w-full h-64 bg-gradient-to-br from-red-950/50 to-slate-950/50 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="glow-orb w-32 h-32 bg-rose-500 top-[20%] left-[30%]" style={{ opacity: 0.15 }} />
            <div className="glow-orb w-24 h-24 bg-amber-500 top-[50%] left-[60%]" style={{ opacity: 0.12, animationDelay: '2s' }} />
            <div className="glow-orb w-20 h-20 bg-rose-500 bottom-[20%] left-[45%]" style={{ opacity: 0.1, animationDelay: '4s' }} />
            <div className="relative z-10 text-center">
              <Eye size={32} className="text-slate-600 mx-auto mb-2" />
              <p className="text-slate-500 text-sm font-medium">India Threat Heatmap</p>
              <p className="text-xs text-slate-600 mt-1">47 active threats across 12 states</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
