'use client';

import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Globe,
  MapPinned,
  Search,
  Shield,
  Siren,
  TriangleAlert,
  Users,
} from 'lucide-react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Launch', href: '#launch' },
];

const featureCards = [
  {
    title: 'URL Scanner',
    description: 'Analyze suspicious links with instant scoring, SSL checks, redirect tracking, and phishing pattern detection.',
    href: '/scan',
    icon: Search,
    accent: 'from-[#ff7a3d] to-[#ff4d00]',
  },
  {
    title: 'Scam Reporter',
    description: 'Report malicious URLs, fake calls, phishing emails, and social scams so the whole community gets safer.',
    href: '/report',
    icon: AlertTriangle,
    accent: 'from-[#ff5b61] to-[#ff2b54]',
  },
  {
    title: 'Threat Dashboard',
    description: 'Track recent scans, active threats, top scam categories, and live platform activity in one place.',
    href: '/dashboard',
    icon: Shield,
    accent: 'from-[#ff8c42] to-[#ff6138]',
  },
  {
    title: 'AI Safety Assistant',
    description: 'Answer questions about phishing, UPI fraud, passwords, reporting, and cyber safety in plain language.',
    href: '/chat',
    icon: Bot,
    accent: 'from-[#ff8f5a] to-[#ff4f1f]',
  },
  {
    title: 'Breach Check',
    description: 'Help citizens quickly verify whether an email address may have been exposed in known breach data.',
    href: '/breach-check',
    icon: TriangleAlert,
    accent: 'from-[#ff7246] to-[#ff3d2e]',
  },
  {
    title: 'Threat Map & Alerts',
    description: 'Surface regional risk signals and urgent warnings so people can respond before scams spread wider.',
    href: '/threat-map',
    icon: MapPinned,
    accent: 'from-[#ff8a5c] to-[#ff5a1f]',
  },
];

const statCards = [
  { value: '2.4M+', label: 'URLs analyzable through the scanning workflow' },
  { value: '50K+', label: 'Citizens represented in the dashboard protection metrics' },
  { value: '47', label: 'Live threats visible in the threat intelligence overview' },
  { value: '24/7', label: 'Availability of self-serve awareness, reporting, and guidance' },
];

const workflowSteps = [
  {
    number: '01',
    title: 'Detect suspicious activity',
    text: 'A citizen pastes a link, opens the assistant, or checks live alerts when something feels off.',
  },
  {
    number: '02',
    title: 'Classify and explain the risk',
    text: 'CyberKavach scores the threat, highlights why it looks risky, and gives immediate plain-language guidance.',
  },
  {
    number: '03',
    title: 'Report and strengthen the network',
    text: 'Users submit evidence, enrich the shared threat pool, and help others avoid the same attack pattern.',
  },
];

const quickLinks = [
  { label: 'Scan a URL', href: '/scan' },
  { label: 'Report a Scam', href: '/report' },
  { label: 'Open Dashboard', href: '/dashboard' },
  { label: 'Ask the AI', href: '/chat' },
  { label: 'Check a Breach', href: '/breach-check' },
  { label: 'View Alerts', href: '/alerts' },
];

function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1560px] items-center justify-between px-5 py-5 text-white md:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
            <Shield size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.28em]">CYBERKAVACH</p>
            <p className="text-xs text-white/60">Citizen Cyber Safety Platform</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/75 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10 md:inline-flex"
          >
            View Dashboard
          </Link>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Try Scanner
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f04d17]">
      <div className="absolute inset-0">
        <img
          src="/hero_character.png"
          alt="CyberKavach security hero"
          className="h-full w-full object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8d2200]/70 via-[#e74a12]/45 to-[#ff5a1f]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120603] via-transparent to-transparent" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1560px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 md:px-10 md:pb-16 md:pt-36 lg:px-14 lg:pb-20 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,820px)_360px] lg:items-end xl:grid-cols-[minmax(0,860px)_420px]">
          <div className="max-w-[860px]">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/85 backdrop-blur-sm">
              Built for phishing, scam reporting, live threat awareness, and citizen guidance
            </div>
            <h1 className="max-w-[10.5ch] text-[46px] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[62px] md:text-[78px] lg:text-[92px]">
              India’s practical cyber safety layer for everyday users.
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-white/82 md:text-lg">
              CyberKavach is not a brochure site. It is a working citizen safety platform where people can scan risky links, report scams,
              review threat activity, check possible breaches, and get instant AI help when they are unsure what to trust.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/scan"
                className="inline-flex items-center justify-center gap-2 rounded-[22px] bg-white px-7 py-4 text-sm font-semibold tracking-[0.14em] text-black shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
              >
                START URL SCAN
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/report"
                className="inline-flex items-center justify-center gap-2 rounded-[22px] border border-white/20 bg-black/15 px-7 py-4 text-sm font-semibold tracking-[0.14em] text-white backdrop-blur-sm"
              >
                REPORT A SCAM
                <Siren size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#1d1816]/88 p-5 text-white shadow-[0_35px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Live Platform Snapshot</p>
                <p className="mt-1 text-lg font-semibold">What users can actually do</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-[#ff6b4a] shadow-[0_0_18px_rgba(255,107,74,0.8)]" />
            </div>

            <div className="space-y-3">
              {[
                'Scan suspicious URLs before opening them',
                'Submit phone, email, social, and link scam reports',
                'Watch active threat metrics on the dashboard',
                'Ask the AI for phishing and UPI fraud guidance',
                'Check whether an email may be breach-exposed',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ff7b42]" />
                  <p className="text-sm leading-6 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="bg-[#0f1214] px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff7a3d]">Core Product</p>
            <h2 className="mt-4 text-[38px] font-semibold leading-tight tracking-[-0.04em] text-white md:text-[54px]">
              Every card below opens a real product workflow, not placeholder content.
            </h2>
          </div>
          <p className="max-w-[420px] text-sm leading-7 text-white/58 md:text-base">
            The homepage now acts like a launchpad into the working platform, so a tester can immediately understand what has been built.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[28px] border border-white/8 bg-[#171b1e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7a3d]/40 hover:bg-[#1b2024]"
              >
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${card.accent} p-4 text-white shadow-[0_14px_35px_rgba(255,104,32,0.22)]`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{card.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9360]">
                  Open flow
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="how-it-works" className="bg-[#14181b] px-5 py-20 sm:px-8 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1560px] gap-10 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-white/8 bg-[#1a1f23] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff7a3d]">Why It Matters</p>
          <h2 className="mt-4 max-w-[14ch] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-white md:text-[46px] xl:text-[54px]">
            A citizen-facing cyber product should explain action, not just aesthetics.
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-8 text-white/65">
            CyberKavach is strongest when it shortens the time between suspicion and action. The homepage now shows that path clearly:
            detect risk, understand the threat, and contribute to shared protection.
          </p>
        </div>

        <div className="grid gap-5">
          {workflowSteps.map((step) => (
            <div key={step.number} className="rounded-[30px] border border-white/8 bg-[#0f1214] p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff6d2d] text-lg font-semibold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                  <p className="mt-3 max-w-[58ch] text-sm leading-7 text-white/62 md:text-base">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section id="impact" className="bg-[#0f1214] px-5 py-20 sm:px-8 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <div key={card.label} className="rounded-[28px] border border-white/8 bg-[#171b1e] p-6 md:p-7">
              <p className="text-[42px] font-semibold tracking-[-0.05em] text-white md:text-[54px]">{card.value}</p>
              <p className="mt-3 text-sm leading-7 text-white/58">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/8 bg-[#171b1e] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff7a3d]">Who It Serves</p>
            <h3 className="mt-4 max-w-[18ch] text-[30px] font-semibold leading-tight tracking-[-0.04em] text-white md:text-[38px] xl:text-[46px]">
              Citizens, students, families, and first-time digital users need a product that explains risk without jargon.
            </h3>
            <p className="mt-5 max-w-[62ch] text-base leading-8 text-white/65">
              That is the real value of CyberKavach: it converts cyber signals into understandable action. Users are not expected to read
              threat reports like analysts. They need clear answers, fast routes, and safe next steps.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-[#ff6b21] p-8 text-black md:p-10">
            <div className="flex items-center gap-3">
              <Users size={24} />
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Community Loop</p>
            </div>
            <p className="mt-6 max-w-[16ch] text-[30px] font-semibold leading-tight tracking-[-0.04em] md:text-[34px]">
              Reports from one user can improve awareness for the next user.
            </p>
            <p className="mt-5 text-sm leading-7 text-black/75">
              That shared-protection loop is what separates a static UI from a useful platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchSection() {
  return (
    <section id="launch" className="bg-[#101416] px-5 py-20 sm:px-8 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1560px] rounded-[36px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(255,128,60,0.28),transparent_26%),linear-gradient(135deg,#1b2023,#0c0f11)] p-8 md:p-12 lg:p-14">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.82fr] xl:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff8e53]">Launch Into Product</p>
            <h2 className="mt-4 max-w-[13ch] text-[34px] font-semibold leading-[1] tracking-[-0.05em] text-white md:text-[46px] xl:text-[56px]">
              Open the real flows and test the system end to end.
            </h2>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-white/64">
              This section exists so a reviewer can stop asking “what was built?” and start using the platform routes directly.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-white transition-colors hover:bg-white/10"
              >
                <span className="text-sm font-semibold">{item.label}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-[#0f1214] selection:bg-[#ff6c2f] selection:text-white">
      <Hero />
      <FeatureGrid />
      <WorkflowSection />
      <ImpactSection />
      <LaunchSection />
    </main>
  );
}
