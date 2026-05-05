'use client';
import React from 'react';
import Link from 'next/link';
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPage() {
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

      <div className="pt-28 pb-16 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-5xl font-black">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="text-slate-500 mt-4">Last updated: May 2025</p>
        </div>

        <div className="glass-card rounded-2xl p-8 space-y-8">
          {[
            { title: 'Data Collection', content: 'CyberKavach collects minimal data necessary to provide our security services. This includes URLs submitted for scanning, scam reports, and basic account information. We do not collect or store browsing history.' },
            { title: 'Data Usage', content: 'All submitted data is used solely to improve our AI threat detection models and protect the community. Scam reports are anonymized before being added to our threat intelligence database.' },
            { title: 'Data Protection', content: 'We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. All user data is stored on secure, CERT-In compliant servers within India.' },
            { title: 'Third-Party Sharing', content: 'We do not sell or share personal data with third parties. Anonymized threat data may be shared with CERT-In and law enforcement agencies to protect citizens.' },
            { title: 'Your Rights', content: 'You have the right to access, modify, or delete your personal data at any time. Contact us at privacy@cyberkavach.in for any data-related requests.' },
            { title: 'Cookies', content: 'We use essential cookies only for authentication and session management. No tracking or advertising cookies are used.' },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-white mb-2">{section.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
