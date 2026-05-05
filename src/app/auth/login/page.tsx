'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0a0f] items-center justify-center p-12 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-red-600 top-[-200px] left-[-100px]" style={{opacity:0.08}}/>
        <div className="glow-orb w-[400px] h-[400px] bg-red-500 bottom-[-100px] right-[-100px]" style={{animationDelay:'3s',opacity:0.06}}/>
        <div className="relative z-10 max-w-md space-y-8">
          <Link href="/" className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)]"><Shield className="text-white" size={26}/></div><span className="text-2xl font-extrabold">Cyber<span className="text-red-500">Kavach</span></span></Link>
          <h1 className="text-4xl font-black leading-tight">Welcome back,<br/><span className="gradient-text">Defender.</span></h1>
          <p className="text-slate-400 leading-relaxed">Your security dashboard awaits. Check threat alerts, scan URLs, and protect your digital identity.</p>
          <div className="flex gap-3 pt-4">{['2.4M+ Scans','98.7% Accuracy','50K+ Users'].map(s=><span key={s} className="text-xs font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">{s}</span>)}</div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a0f]">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center"><Shield className="text-white" size={22}/></div><span className="text-xl font-extrabold">Cyber<span className="text-red-500">Kavach</span></span></div>
          <div><h2 className="text-3xl font-black text-white">Log In</h2><p className="text-slate-500 mt-2">Enter your credentials to access your dashboard.</p></div>
          <div className="rounded-2xl border border-red-500/15 bg-red-500/8 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Tester Login</p>
            <p className="mt-2 text-sm text-slate-300">Email: <span className="font-semibold text-white">tester@securify.com</span></p>
            <p className="mt-1 text-sm text-slate-300">Password: <span className="font-semibold text-white">Test@1234</span></p>
          </div>
          <form className="space-y-5" onSubmit={e=>{e.preventDefault();window.location.href='/scan';}}>
            <div className="space-y-2"><label className="text-sm font-semibold text-slate-400">Email</label><div className="relative"><Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"/><input type="email" defaultValue="tester@securify.com" placeholder="you@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"/></div></div>
            <div className="space-y-2"><label className="text-sm font-semibold text-slate-400">Password</label><div className="relative"><Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"/><input type={showPw?'text':'password'} defaultValue="Test@1234" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-3.5 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"/><button type="button" onClick={()=>setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400">{showPw?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></div>
            <div className="flex justify-between items-center text-sm"><label className="flex items-center gap-2 text-slate-500 cursor-pointer"><input type="checkbox" className="rounded border-slate-700 bg-transparent accent-red-600"/>Remember me</label><a href="#" className="text-red-400 hover:text-red-300 font-medium">Forgot password?</a></div>
            <button type="submit" className="w-full btn-red py-4 flex items-center justify-center gap-2 active:scale-[0.98]">Log In <ArrowRight size={18}/></button>
          </form>
          <div className="relative text-center"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"/></div><span className="relative bg-[#0a0a0f] px-4 text-xs text-slate-600 font-medium">OR</span></div>
          <button className="w-full border border-white/10 hover:border-red-500/20 text-slate-100 font-semibold py-3.5 rounded-xl transition-all hover:bg-white/5 flex items-center justify-center gap-3 bg-white/[0.03]"><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.003 24.003 0 0 0 0 21.56l7.98-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>Continue with Google</button>
          <p className="text-center text-sm text-slate-500">Don&apos;t have an account? <Link href="/auth/signup" className="text-red-400 hover:text-red-300 font-semibold">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}
