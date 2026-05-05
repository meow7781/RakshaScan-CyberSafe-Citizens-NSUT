'use client';
import React from 'react';
import Link from 'next/link';
import { Shield, Target, Users, Zap, Award, ArrowRight } from 'lucide-react';

const team = [
  { name: 'Team CyberKavach', role: 'Full Stack + AI/ML', focus: 'Building India\'s citizen security shield' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-cyan-500 flex items-center justify-center">
              <Shield className="text-white" size={18} />
            </div>
            <span className="text-lg font-extrabold">Cyber<span className="text-red-400">Kavach</span></span>
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">← Back Home</Link>
        </div>
      </nav>

      <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black">About <span className="gradient-text">CyberKavach</span></h1>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            An AI-powered cybersecurity platform built to protect every Indian citizen from digital threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Target size={28} />, title: 'Our Mission', desc: 'To make cybersecurity accessible, free, and understandable for every citizen of India.' },
            { icon: <Zap size={28} />, title: 'Our Tech', desc: 'Powered by machine learning models trained on millions of threat samples for real-time detection.' },
            { icon: <Award size={28} />, title: 'Our Impact', desc: 'Over 50,000 citizens protected and 2.4 million URLs scanned since launch.' },
          ].map(item => (
            <div key={item.title} className="glass-card-hover rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card border-glow rounded-2xl p-12 text-center">
          <Users size={32} className="text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-white mb-2">Built for NSUT Hackathon</h2>
          <p className="text-slate-400 mb-6">Track 3 — Cyber Safety for Citizens</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all">
            Join CyberKavach <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
