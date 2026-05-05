'use client';
import React, { useState, useRef, useEffect } from 'react';
import { AppNavbar } from '@/components/Navbar';
import { MessageSquare, Send, Bot, User, Shield, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const botResponses: Record<string, string> = {
  'phishing': 'Phishing is a type of cyber attack where criminals send fake emails, messages, or create fake websites that look legitimate to steal your personal information like passwords, credit card numbers, or Aadhaar details.\n\n**How to spot phishing:**\n• Check the sender\'s email carefully\n• Look for spelling mistakes\n• Don\'t click suspicious links\n• Verify through official channels',
  'scam': 'Common scams in India include:\n\n1. **KYC Update Scam** — Fake messages asking you to update KYC\n2. **Lottery/Prize Scam** — "You\'ve won!" messages\n3. **Job Scam** — Fake work-from-home offers\n4. **Loan Scam** — Instant loan apps that steal data\n\nAlways verify through official sources and never share OTPs.',
  'password': 'Here are tips for strong passwords:\n\n• Use **12+ characters** with mix of letters, numbers, symbols\n• **Never reuse** passwords across sites\n• Use a **password manager** like Bitwarden\n• Enable **2FA** (Two-Factor Authentication) everywhere\n• Change passwords immediately if you suspect a breach',
  'upi': 'UPI Safety Tips:\n\n• **Never enter PIN to receive money** — this is the #1 scam\n• Don\'t scan QR codes from strangers\n• Verify recipient details before sending\n• Set transaction limits on your UPI app\n• Report fraud to your bank within 24 hours',
  'report': 'To report a cybercrime in India:\n\n1. **National Helpline:** Call **1930** (Cyber Crime Helpline)\n2. **Online:** File a complaint at **cybercrime.gov.in**\n3. **Local Police:** Visit your nearest police station\n4. **Bank:** Report to your bank immediately for financial fraud\n\nYou can also use CyberKavach\'s Report feature to alert the community.',
};

function getBotReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(botResponses)) {
    if (lower.includes(key)) return val;
  }
  return 'I\'m CyberKavach AI, your cybersecurity assistant. I can help you with:\n\n• **Phishing** detection and prevention\n• **Scam** identification\n• **Password** security best practices\n• **UPI** payment safety\n• How to **report** cybercrimes\n\nWhat would you like to know about?';
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello! I\'m **CyberKavach AI** 🛡️\n\nI\'m here to help you stay safe online. Ask me about phishing, scams, password security, UPI fraud, or how to report cybercrimes.\n\nWhat can I help you with today?' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setTyping(true);
    await new Promise(r => setTimeout(r, 1200));
    setMessages(prev => [...prev, { role: 'bot', text: getBotReply(userMsg) }]);
    setTyping(false);
  };

  const quickQuestions = ['What is phishing?', 'How to report a scam?', 'UPI safety tips', 'Password best practices'];

  return (
    <>
      <AppNavbar />
      <div className="pt-16 pb-0 flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto px-6 py-6 max-w-3xl mx-auto w-full space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} fade-in-up`}>
              {msg.role === 'bot' && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-cyan-500 flex items-center justify-center shrink-0 mt-1">
                  <Bot size={16} className="text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-red-600 text-white rounded-tr-sm'
                  : 'glass-card text-slate-300 rounded-tl-sm'
              }`}>
                {msg.text.split('\n').map((line, j) => (
                  <p key={j} className={j > 0 ? 'mt-1' : ''}>
                    {line.split('**').map((part, k) =>
                      k % 2 === 1 ? <strong key={k} className="text-white font-semibold">{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-1">
                  <User size={16} className="text-slate-400" />
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="flex gap-3 fade-in-up">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-cyan-500 flex items-center justify-center shrink-0">
                <Bot size={16} className="text-white" />
              </div>
              <div className="glass-card rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2">
                <Loader2 size={16} className="text-red-400 animate-spin" />
                <span className="text-sm text-slate-500">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-6 pb-2 max-w-3xl mx-auto w-full flex flex-wrap gap-2 justify-center">
            {quickQuestions.map(q => (
              <button key={q} onClick={() => { setInput(q); }} className="text-xs px-4 py-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-red-500/30 hover:bg-red-500/5 transition-all">
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-white/5 bg-[#0a0e17]/80 backdrop-blur-xl p-4">
          <div className="max-w-3xl mx-auto flex gap-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask about cybersecurity..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all text-sm"
            />
            <button onClick={handleSend} disabled={!input.trim() || typing} className="bg-red-600 hover:bg-red-500 disabled:opacity-30 text-white p-3 rounded-xl transition-all active:scale-95">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
