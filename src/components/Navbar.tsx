'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Search, AlertTriangle, LayoutDashboard, BookOpen, MessageSquare, Fingerprint, Bell, LogOut, Globe } from 'lucide-react';

export const AppNavbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: 'Scanner', href: '/scan', icon: <Search size={18} /> },
    { name: 'Report', href: '/report', icon: <AlertTriangle size={18} /> },
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Learn', href: '/learn', icon: <BookOpen size={18} /> },
    { name: 'Chat', href: '/chat', icon: <MessageSquare size={18} /> },
    { name: 'Breach', href: '/breach-check', icon: <Fingerprint size={18} /> },
    { name: 'Threats', href: '/threat-map', icon: <Globe size={18} /> },
    { name: 'Alerts', href: '/alerts', icon: <Bell size={18} /> },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-shadow"><Shield className="text-white" size={18}/></div>
          <span className="text-lg font-extrabold hidden sm:inline">Cyber<span className="text-red-500">Kavach</span></span>
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">{navItems.map(item=>{const isActive=pathname===item.href;return(
          <Link key={item.name} href={item.href} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${isActive?'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/20':'text-slate-500 hover:bg-white/5 hover:text-slate-300'}`}>{item.icon}<span className="hidden md:inline">{item.name}</span></Link>
        );})}</div>
        <Link href="/auth/login" className="text-slate-500 hover:text-red-400 transition-colors p-2"><LogOut size={18}/></Link>
      </div>
    </nav>
  );
};
