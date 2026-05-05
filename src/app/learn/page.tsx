'use client';
import React, { useState } from 'react';
import { AppNavbar } from '@/components/Navbar';
import { BookOpen, Shield, Phone, Mail, CreditCard, Lock, Wifi, ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from 'lucide-react';

const modules = [
  {
    id: 1,
    icon: <Mail size={24} />,
    title: 'Phishing Emails',
    desc: 'Learn to identify fake emails that try to steal your personal information.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    tips: [
      'Always check the sender\'s email address carefully — look for misspellings.',
      'Never click links in emails asking you to "verify your account."',
      'Hover over links before clicking to see the actual URL destination.',
      'Legitimate companies never ask for passwords via email.',
      'Look for grammar mistakes and urgency tactics — these are red flags.',
    ],
  },
  {
    id: 2,
    icon: <Phone size={24} />,
    title: 'Vishing (Phone Scams)',
    desc: 'Recognize fraudulent phone calls and protect yourself from voice scams.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    tips: [
      'Banks never ask for OTP, CVV, or PIN over phone calls.',
      'If someone claims to be from RBI/Police, hang up and verify independently.',
      'Scammers create urgency — "Act now or your account will be blocked."',
      'Never install remote access apps like AnyDesk or TeamViewer on request.',
      'Report suspicious numbers to your telecom provider and cybercrime.gov.in.',
    ],
  },
  {
    id: 3,
    icon: <CreditCard size={24} />,
    title: 'UPI & Payment Fraud',
    desc: 'Stay safe while using digital payment apps like GPay, PhonePe, and Paytm.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    tips: [
      'You never need to enter a PIN or approve a request to RECEIVE money.',
      'Be wary of "collect" requests from unknown numbers.',
      'Always verify the recipient before sending money.',
      'Don\'t scan QR codes sent by strangers — they can trigger payments.',
      'Enable transaction limits and alerts on your UPI apps.',
    ],
  },
  {
    id: 4,
    icon: <Lock size={24} />,
    title: 'Password Security',
    desc: 'Create strong passwords and manage them effectively.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    tips: [
      'Use a unique password for each account — never reuse passwords.',
      'Make passwords at least 12 characters with letters, numbers, and symbols.',
      'Use a password manager like Bitwarden or 1Password.',
      'Enable Two-Factor Authentication (2FA) wherever possible.',
      'Never share your passwords via chat, email, or phone.',
    ],
  },
  {
    id: 5,
    icon: <Wifi size={24} />,
    title: 'Safe Browsing & Wi-Fi',
    desc: 'Protect yourself while browsing the internet and using public networks.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    tips: [
      'Always check for HTTPS (padlock icon) before entering sensitive info.',
      'Avoid banking or shopping on public Wi-Fi networks.',
      'Use a VPN when connecting to public or untrusted networks.',
      'Keep your browser and OS updated to patch security vulnerabilities.',
      'Don\'t download software from untrusted sources.',
    ],
  },
  {
    id: 6,
    icon: <Shield size={24} />,
    title: 'Social Media Safety',
    desc: 'Protect your identity and privacy on social media platforms.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    tips: [
      'Set your profiles to private — limit what strangers can see.',
      'Don\'t accept friend requests from people you don\'t know.',
      'Be careful sharing location, travel plans, or personal documents.',
      'Watch out for fake giveaways and "celebrity" accounts asking for money.',
      'Regularly review connected apps and revoke unnecessary permissions.',
    ],
  },
];

export default function LearnPage() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <>
      <AppNavbar />
      <div className="pt-20 pb-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-sm font-semibold mb-4">
            <BookOpen size={14} /> Security Education
          </div>
          <h1 className="text-4xl md:text-5xl font-black">Learn &amp; <span className="gradient-text">Protect</span></h1>
          <p className="text-slate-500 mt-3 text-lg">Interactive guides to keep you and your family safe online.</p>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map(m => (
            <div key={m.id} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenModule(openModule === m.id ? null : m.id)}
                className="w-full p-6 flex items-center gap-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${m.bg} ${m.color} flex items-center justify-center shrink-0`}>
                  {m.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{m.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{m.desc}</p>
                </div>
                <div className="text-slate-500">
                  {openModule === m.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              {openModule === m.id && (
                <div className="px-6 pb-6 border-t border-white/5 pt-4 space-y-3 fade-in-up">
                  {m.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                      <CheckCircle size={16} className={`${m.color} shrink-0 mt-0.5`} />
                      <p className="text-sm text-slate-300">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Quiz CTA */}
        <div className="glass-card border-glow rounded-2xl p-8 mt-10 text-center">
          <AlertTriangle size={32} className="text-amber-400 mx-auto mb-4" />
          <h3 className="text-xl font-black text-white mb-2">Test Your Knowledge</h3>
          <p className="text-slate-400 text-sm mb-6">Take our quick quiz to see how cyber-safe you really are.</p>
          <button className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            Start Quiz →
          </button>
        </div>
      </div>
    </>
  );
}
