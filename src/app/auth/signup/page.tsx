'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Mail, Lock, ArrowRight, Eye, EyeOff, User } from 'lucide-react';

export default function SignupPage() {
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0a0f] items-center justify-center p-12 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-red-600 top-[-200px] right-[-100px]" style={{opacity:0.08}}/>
        <div className="relative z-10 max-w-md space-y-8">
          <Link href="/" className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)]"><Shield className="text-white" size={26}/></div><span className="text-2xl font-extrabold">Cyber<span className="text-red-500">Kavach</span></span></Link>
          <h1 className="text-4xl font-black leading-tight">Join the<br/><span className="gradient-text">Shield Network.</span></h1>
          <p className="text-slate-400 leading-relaxed">Create your free account and start protecting yourself from phishing, scams, and cyber threats.</p>
          <div className="space-y-3 pt-4">{['Real-time phishing URL detection','Personalized threat alerts','AI-powered security assistant'].map(f=><div key={f} className="flex items-center gap-3 text-sm text-slate-400"><div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0"><div className="w-2 h-2 rounded-full bg-red-400"/></div>{f}</div>)}</div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a0f]">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center"><Shield className="text-white" size={22}/></div><span className="text-xl font-extrabold">Cyber<span className="text-red-500">Kavach</span></span></div>
          <div><h2 className="text-3xl font-black text-white">Create Account</h2><p className="text-slate-500 mt-2">Start your journey to digital safety.</p></div>
          <form className="space-y-5" onSubmit={e=>{e.preventDefault();window.location.href='/scan';}}>
            <div className="space-y-2"><label className="text-sm font-semibold text-slate-400">Full Name</label><div className="relative"><User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"/><input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"/></div></div>
            <div className="space-y-2"><label className="text-sm font-semibold text-slate-400">Email</label><div className="relative"><Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"/><input type="email" placeholder="you@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"/></div></div>
            <div className="space-y-2"><label className="text-sm font-semibold text-slate-400">Password</label><div className="relative"><Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"/><input type={showPw?'text':'password'} placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"/><button type="button" onClick={()=>setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400">{showPw?<EyeOff size={18}/>:<Eye size={18}/>}</button></div><div className="flex gap-1 mt-2">{[1,2,3,4].map(i=><div key={i} className={`h-1 flex-1 rounded-full ${i<=2?'bg-red-500':'bg-white/10'}`}/>)}</div></div>
            <button type="submit" className="w-full btn-red py-4 flex items-center justify-center gap-2 active:scale-[0.98]">Create Account <ArrowRight size={18}/></button>
          </form>
          <p className="text-center text-sm text-slate-500">Already have an account? <Link href="/auth/login" className="text-red-400 hover:text-red-300 font-semibold">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}
