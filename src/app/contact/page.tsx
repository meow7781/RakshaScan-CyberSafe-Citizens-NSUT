'use client';
import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-slate-400 mt-4 text-lg">Have a question or want to report a threat? Reach out to us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <Mail size={22} />, label: 'Email', value: 'help@cyberkavach.in' },
            { icon: <Phone size={22} />, label: 'Helpline', value: '1930 (Cyber Crime)' },
            { icon: <MapPin size={22} />, label: 'Location', value: 'NSUT, New Delhi' },
          ].map(c => (
            <div key={c.label} className="glass-card-hover rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-3">{c.icon}</div>
              <p className="text-xs text-slate-500 mb-1">{c.label}</p>
              <p className="text-sm font-bold text-white">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Name</label>
                <input placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-red-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Email</label>
                <input placeholder="you@email.com" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-red-500 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Subject</label>
              <input placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-red-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Message</label>
              <textarea placeholder="Tell us more..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:border-red-500 outline-none transition-all resize-none h-32" />
            </div>
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
