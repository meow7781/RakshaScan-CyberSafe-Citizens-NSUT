'use client';
import React from 'react';
import { AppNavbar } from '@/components/Navbar';
import { Globe, AlertTriangle, MapPin } from 'lucide-react';

const regions = [
  { state: 'Maharashtra', city: 'Mumbai', threats: 847, top: 'Banking Phishing', severity: 'critical' },
  { state: 'Delhi NCR', city: 'New Delhi', threats: 623, top: 'KYC Scam', severity: 'critical' },
  { state: 'Karnataka', city: 'Bangalore', threats: 512, top: 'Tech Support Fraud', severity: 'high' },
  { state: 'Tamil Nadu', city: 'Chennai', threats: 398, top: 'UPI Fraud', severity: 'high' },
  { state: 'Telangana', city: 'Hyderabad', threats: 356, top: 'Job Scam', severity: 'medium' },
  { state: 'West Bengal', city: 'Kolkata', threats: 287, top: 'Lottery Scam', severity: 'medium' },
  { state: 'Gujarat', city: 'Ahmedabad', threats: 234, top: 'Investment Fraud', severity: 'medium' },
  { state: 'Uttar Pradesh', city: 'Lucknow', threats: 198, top: 'SMS Scam', severity: 'low' },
];

export default function ThreatMapPage() {
  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-4">
            <Globe size={14} /> Live Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-black">Threat <span className="gradient-text">Map</span></h1>
          <p className="text-slate-500 mt-3 text-lg">Real-time cyber threat activity across India.</p>
        </div>

        {/* Visual Map */}
        <div className="glass-card rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
            <span className="text-sm font-bold text-slate-400">LIVE — Updated every 30 seconds</span>
          </div>
          <div className="w-full h-80 bg-gradient-to-br from-red-950/40 to-slate-950/40 rounded-xl border border-white/5 relative">
            {/* Simulated hotspots */}
            {[
              { left: '68%', top: '35%', size: 'w-12 h-12', label: 'Mumbai', threats: 847 },
              { left: '62%', top: '22%', size: 'w-10 h-10', label: 'Delhi', threats: 623 },
              { left: '65%', top: '60%', size: 'w-9 h-9', label: 'Bangalore', threats: 512 },
              { left: '72%', top: '58%', size: 'w-8 h-8', label: 'Chennai', threats: 398 },
              { left: '70%', top: '50%', size: 'w-7 h-7', label: 'Hyderabad', threats: 356 },
            ].map((spot, i) => (
              <div key={i} className="absolute group cursor-pointer" style={{ left: spot.left, top: spot.top, transform: 'translate(-50%, -50%)' }}>
                <div className={`${spot.size} rounded-full bg-rose-500/20 flex items-center justify-center pulse-ring`} style={{ animationDelay: `${i * 0.5}s` }}>
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#111827] border border-white/10 rounded-lg px-3 py-1 text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {spot.label}: {spot.threats}
                </div>
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-slate-600 text-sm">India Threat Heatmap</p>
            </div>
          </div>
        </div>

        {/* Region Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-white/5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Region</span><span>City</span><span>Active Threats</span><span>Top Threat</span><span>Severity</span>
          </div>
          {regions.map((r, i) => (
            <div key={i} className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center">
              <span className="text-sm font-semibold text-slate-300 flex items-center gap-2"><MapPin size={14} className="text-red-400" /> {r.state}</span>
              <span className="text-sm text-slate-400">{r.city}</span>
              <span className="text-sm font-bold text-white font-mono">{r.threats}</span>
              <span className="text-sm text-slate-400">{r.top}</span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border w-fit ${
                r.severity === 'critical' ? 'border-rose-500/20 bg-rose-500/10 text-rose-400' :
                r.severity === 'high' ? 'border-amber-500/20 bg-amber-500/10 text-amber-400' :
                r.severity === 'medium' ? 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400' :
                'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
              }`}>{r.severity}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
