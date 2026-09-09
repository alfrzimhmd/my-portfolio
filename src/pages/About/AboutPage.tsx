import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import Timeline from '../../components/Timeline/Timeline';
import { timeline } from '../../data/timeline';
import { personalInfo } from '../../data/socials';
import { Hammer, Palette, SearchCode, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';

export default function AboutPage() {
  const typingText = useTypingAnimation({
    texts: [
      'More Than Just Writing Code.',
      'Muhammad Alfarizi',
      'Software Engineer & Explorer',
      'Building Digital Solutions'
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  return (
    <div id="about-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 md:space-y-28">
      {/* 01: Profile Workspace (Left: 40-45% Photo, Right: Editorial Profile) */}
      <section id="about-profile-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal Photo Workspace (approx 42% width on desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <div className="sticky top-24">
              <ProfilePhoto
                image="/assets/profile.jpg"
                name={personalInfo.name}
                role="DEVELOPER"
                year="2026"
              />
              <div className="pt-4 text-center">
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  FIG // 01 &mdash; DIGITAL WORKSPACE PROFILE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Introduction */}
          <div className="lg:col-span-7 order-2 lg:order-2 space-y-6">
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
              02 — PROFILE
            </span>

            {/* Headline dengan Animasi Mengetik */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight min-h-[4rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                {typingText}
              </span>
              <span className="inline-block w-1 h-10 sm:h-12 lg:h-14 bg-cyan-400 animate-pulse ml-1 align-middle"></span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              <p className="text-[var(--text-primary)] font-medium">
                Saya adalah seorang developer yang memiliki ketertarikan pada pengembangan aplikasi, website, desain antarmuka, dan bagaimana sebuah sistem bekerja di balik layar.
              </p>

              <p>
                Bagi saya, software development bukan sekadar menyatukan baris kode hingga sebuah fitur dapat berjalan. Ini adalah proses sistematis dalam merumuskan pemecahan masalah (problem solving), mengelola kompleksitas data, dan memastikan performa runtime tetap stabil di berbagai kondisi.
              </p>

              <p>
                Melalui UI/UX design, saya menaruh perhatian besar pada hierarki tipografi, ritme spasial, dan keterbacaan antarmuka. Antarmuka yang baik harus memudahkan interaksi pengguna tanpa membebani kognitif mereka.
              </p>

              <p>
                Di sisi lain, eksplorasi reverse engineering dan analisis sistem memberikan sudut pandang mendalam mengenai bagaimana software sebenarnya dieksekusi di level biner dan memori. Rasa ingin tahu inilah yang terus mendorong pembelajaran berkelanjutan (continuous learning) dalam setiap proyek yang saya bangun.
              </p>
            </div>

            {/* Micro Coordinate Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
              <span className="px-2.5 py-1 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                DOMAIN: SOFTWARE &middot; SYSTEMS &middot; UI
              </span>
              <span className="px-2.5 py-1 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                LOC: INDONESIA
              </span>
              <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ACTIVE LAB
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Build / Design / Analyze (Section 17) */}
      <section id="about-pillars-section" className="space-y-6">
        <div className="border-b border-[var(--border-main)] pb-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
            03 — TRIAD DISCIPLINES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            How I Approach Software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BUILD */}
          <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3 shadow-lg hover:border-cyan-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-[var(--text-primary)] tracking-wide">
              BUILD
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Building applications and digital products. Fokus pada arsitektur yang modular, maintainable, dan performa tinggi baik di platform mobile maupun web.
            </p>
          </div>

          {/* DESIGN */}
          <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3 shadow-lg hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-[var(--text-primary)] tracking-wide">
              DESIGN
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Creating intuitive interfaces and user experiences. Mengutamakan presisi tipografi, kejelasan visual, dan ergonomi navigasi untuk kemudahan pengguna.
            </p>
          </div>

          {/* ANALYZE */}
          <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3 shadow-lg hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <SearchCode className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-[var(--text-primary)] tracking-wide">
              ANALYZE
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Understanding systems, behavior and software architecture. Membedah bagaimana aplikasi beroperasi di balik layar, mengaudit integritas, dan mengoptimalkan resource.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Personal Philosophy (Section 18) - DIPERBAIKI */}
      <section id="about-philosophy-section">
        <div className="rounded-2xl md:rounded-3xl border border-[var(--border-main)] bg-gradient-to-br from-[var(--surface-main)] via-[var(--surface-main)] to-[var(--surface-secondary)] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-5xl mx-auto space-y-5 text-center">
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
              04 — ENGINEERING PHILOSOPHY
            </span>

            {/* Giant Editorial Typography */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.05]">
                <span className="text-cyan-400">Build.</span>{' '}
                <span className="text-purple-400">Analyze.</span>{' '}
                <span className="text-emerald-400">Improve.</span>
              </h2>
            </div>

            {/* Editorial Statement - RATA TENGAH */}
            <blockquote className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto font-normal text-center">
              &ldquo;Development is not only about making something work, but also understanding why it works and how it can be improved.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Prinsip ini menjadi kompas dalam setiap pengerjaan proyek software. Dari tahap inisiasi rancangan, penulisan kode, inspeksi performa memori, hingga pemolesan interaksi visual terkecil.
            </p>
          </div>
        </div>
      </section>

      {/* 04: Developer Journey Timeline (Section 19) */}
      <section id="about-timeline-section" className="space-y-8">
        <div className="border-b border-[var(--border-main)] pb-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
            05 — TIMELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Developer Journey
          </h2>
          <p className="text-sm text-[var(--text-secondary)] pt-1">
            Evolusi eksplorasi teknologi dan pengembangan sistem dari waktu ke waktu.
          </p>
        </div>

        <Timeline entries={timeline} />
      </section>

      {/* 05: Next Step Links */}
      <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-main)] font-mono text-xs">
        <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold">
          <span>[ PROCEED TO PROJECT LABORATORY ]</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          [ INITIATE CONTACT ]
        </Link>
      </div>
    </div>
  );
}