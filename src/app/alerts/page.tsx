'use client';
import React from 'react';
import { AppNavbar } from '@/components/Navbar';
import { Bell, AlertTriangle, Shield, Info, ChevronRight } from 'lucide-react';

const alerts = [
  { id: 1, title: 'Critical: New SBI Phishing Campaign Detected', desc: 'A large-scale phishing campaign targeting SBI customers has been detected. Fake SMS messages directing users to cloned banking portals.', severity: 'critical', time: '10 min ago', read: false },
  { id: 2, title: 'High: Fake Aadhaar Update App on Play Store', desc: 'A malicious app disguised as an Aadhaar update tool has been found. It steals KYC data and biometric information.', severity: 'high', time: '45 min ago', read: false },
  { id: 3, title: 'Medium: WhatsApp Job Scam Surge', desc: 'Reports of fake work-from-home job offers on WhatsApp have increased by 300% this week.', severity: 'medium', time: '2 hours ago', read: true },
  { id: 4, title: 'Info: New Security Update Available', desc: 'CyberKavach v2.1 is now available with improved phishing detection and faster URL scanning.', severity: 'info', time: '5 hours ago', read: true },
  { id: 5, title: 'Critical: RBI Impersonation Calls Spreading', desc: 'Scammers are calling citizens claiming to be from RBI, threatening account freezing unless immediate KYC is completed.', severity: 'critical', time: '8 hours ago', read: true },
  { id: 6, title: 'High: Cryptocurrency Investment Scam', desc: 'Fake crypto platforms promising 10x returns have scammed over ₹50 crore from Indian investors in Q1 2025.', severity: 'high', time: '1 day ago', read: true },
];

const severityConfig = {
  critical: { color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', icon: <AlertTriangle size={18} /> },
  high: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: <AlertTriangle size={18} /> },
  medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', icon: <Shield size={18} /> },
  info: { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: <Info size={18} /> },
};

export default function AlertsPage() {
  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
              <Bell size={28} className="text-red-400" /> Threat Alerts
            </h1>
            <p className="text-slate-500 mt-1">Stay informed about the latest cyber threats in India.</p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 animate-pulse">
            2 New
          </span>
        </div>

        <div className="space-y-3">
          {alerts.map(a => {
            const cfg = severityConfig[a.severity as keyof typeof severityConfig];
            return (
              <div key={a.id} className={`glass-card rounded-2xl p-5 transition-all hover:bg-white/[0.02] cursor-pointer group ${!a.read ? 'border-l-2 border-l-red-500' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${cfg.bg} ${cfg.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    {cfg.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`font-bold text-sm ${!a.read ? 'text-white' : 'text-slate-300'}`}>{a.title}</h3>
                      {!a.read && <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">{a.desc}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${cfg.border} ${cfg.bg} ${cfg.color} uppercase`}>{a.severity}</span>
                      <span className="text-[10px] text-slate-600 font-mono">{a.time}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-700 group-hover:text-slate-400 transition-colors mt-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
