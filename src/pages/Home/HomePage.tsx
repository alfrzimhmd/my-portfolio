import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';
import { projects } from '../../data/projects';
import { skillCategories } from '../../data/skills';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredProject = projects.find(p => p.id === 'studymate') || projects[0];

  return (
    <div id="home-page-container" className="space-y-24 md:space-y-32">
      {/* 00: Digital Lab Entrance / Hero - Full height with center alignment */}
      <section className="min-h-[100vh] flex items-center justify-center -mt-8">
        <Hero />
      </section>

      {/* 01: HOME — QUICK INTRO (Section 8) */}
      <section id="home-quick-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="rounded-2xl md:rounded-3xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Editorial Manifesto */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
                01 — ABOUT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                I build, analyze, and improve digital systems.
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Menggabungkan pendekatan engineering terstruktur dengan ketelitian desain visual. Fokus saya bukan sekadar menghasilkan kode yang berjalan, melainkan memahami arsitektur di baliknya, memastikan efisiensi runtime, dan memberikan pengalaman antarmuka yang intuitif.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan-400 hover:text-cyan-300 group"
                >
                  <span>[ READ FULL PROFILE &amp; JOURNEY ]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Editorial Metadata Board */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-6 font-mono text-xs space-y-4">
                <div className="flex justify-between items-start border-b border-[var(--border-main)] pb-3">
                  <span className="text-[var(--text-secondary)] uppercase">LOCATION</span>
                  <span className="font-semibold text-[var(--text-primary)] text-right">
                    Indonesia
                  </span>
                </div>

                <div className="flex justify-between items-start border-b border-[var(--border-main)] pb-3">
                  <span className="text-[var(--text-secondary)] uppercase">FOCUS</span>
                  <span className="font-semibold text-cyan-400 text-right">
                    Software Development
                  </span>
                </div>

                <div className="flex justify-between items-start border-b border-[var(--border-main)] pb-3">
                  <span className="text-[var(--text-secondary)] uppercase">INTEREST</span>
                  <span className="font-semibold text-[var(--text-primary)] text-right">
                    Technology &middot; Design &middot; Research
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[var(--text-secondary)] uppercase">CURRENTLY</span>
                  <span className="font-semibold text-emerald-400 text-right">
                    Building &amp; Exploring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Featured Project Laboratory Showcase */}
      <section id="home-featured-project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
              02 — PROJECT LABORATORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Featured Case Study
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>VIEW ALL PROJECTS ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProjectShowcase project={featuredProject} />
      </section>

      {/* 03: Four Core Disciplines Preview */}
      <section id="home-disciplines" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
              03 — TECHNICAL DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Cross-Functional Capabilities
            </h2>
          </div>
          <Link
            to="/skills"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>ENTER TECHNICAL LAB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-5 shadow-lg space-y-3 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-main)] text-xs font-mono">
                <span className="text-cyan-400 font-bold">0{idx + 1}</span>
                <span className="text-[10px] text-[var(--text-secondary)]">ACTIVE</span>
              </div>
              <h3 className="font-mono text-sm font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-2">
                {cat.technologies.slice(0, 3).map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--surface-secondary)] border border-[var(--border-main)] text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04: Connect CTA */}
      <section id="home-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl md:rounded-3xl border border-[var(--border-main)] bg-gradient-to-b from-[var(--surface-main)] to-[var(--surface-secondary)] p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
              READY TO COLLABORATE?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Let&apos;s Build Something Interesting.
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Tertarik mendiskusikan arsitektur aplikasi, eksplorasi antarmuka digital, atau proyek software baru? Ruang komunikasi selalu terbuka.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm font-sans transition-all shadow-md hover:shadow-cyan-500/20"
            >
              <span>Initiate Transmission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--surface-main)] text-[var(--text-primary)] font-mono text-xs hover:border-cyan-500/40 transition-all"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}