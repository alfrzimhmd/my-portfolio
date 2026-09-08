import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowRight, CheckCircle2, Github, ExternalLink, Sparkles, Smartphone, ShieldCheck, Database } from 'lucide-react';

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div
      id="featured-project-laboratory"
      className="relative rounded-2xl md:rounded-3xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40 group"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Technical Metadata Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--border-main)] mb-8">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-500/10 font-mono text-xs font-semibold text-cyan-400">
            FEATURED CASE STUDY // 01
          </span>
          <span className="font-mono text-xs text-[var(--text-secondary)]">
            ID: {project.id.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>PRODUCTION READY</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Editorial Information */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold text-cyan-500 tracking-wider uppercase block">
              {project.category} &middot; {project.tagline}
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* Core Features List */}
          {project.features && (
            <div className="space-y-2.5 pt-1">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)] uppercase">
                KEY CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-secondary)] py-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-2 pt-1">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)] uppercase">
              TECHNICAL STACK
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-xs text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Link
              id="view-studymate-case-study-btn"
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-cyan-500/20 group"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] hover:border-cyan-500/40 text-[var(--text-primary)] text-sm font-mono transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Case Study Laboratory Preview */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-4 sm:p-6 shadow-inner overflow-hidden group-hover:border-cyan-500/30 transition-colors">
            {/* Terminal header inside preview */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-main)] mb-4 text-xs font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Smartphone className="w-3.5 h-3.5" /> ARCHITECTURE // PREVIEW
              </span>
              <span className="text-[11px]">OFFLINE-FIRST ENGINE</span>
            </div>

            {/* Visual Phone Mockup / System Preview */}
            <div className="w-full max-w-sm mx-auto rounded-3xl border-2 border-[var(--border-main)] bg-[#090B0E] p-4 shadow-2xl text-white space-y-4">
              {/* Phone Speaker & Notch */}
              <div className="flex justify-center">
                <div className="w-20 h-3.5 rounded-full bg-[#181B22]" />
              </div>

              {/* StudyMate App Header */}
              <div className="flex justify-between items-center border-b border-[#1E232D] pb-3">
                <div>
                  <h5 className="font-bold text-base text-white">StudyMate</h5>
                  <p className="text-[10px] font-mono text-cyan-400">Semester 4 &middot; Computer Science</p>
                </div>
                <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  SYNCED
                </div>
              </div>

              {/* Feature 1: Pomodoro Active Display */}
              <div className="p-3.5 rounded-xl bg-[#12161E] border border-[#222834] space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>POMODORO FOCUS</span>
                  <span className="text-cyan-400">INTERVAL 3/4</span>
                </div>
                <div className="text-center py-2">
                  <span className="text-3xl font-mono font-bold text-white tracking-wider">
                    21:15
                  </span>
                  <p className="text-[11px] text-gray-400 mt-0.5">Focus: Software Reverse Engineering</p>
                </div>
                <div className="w-full h-1.5 bg-[#1C222E] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-cyan-400" />
                </div>
              </div>

              {/* Feature 2: Upcoming Class & Schedule */}
              <div className="p-3 rounded-xl bg-[#12161E] border border-[#222834] flex items-center justify-between text-xs">
                <div>
                  <span className="font-medium text-white block">Operating Systems Lab</span>
                  <span className="text-[11px] font-mono text-gray-400">10:30 AM &middot; Lab Building 3</span>
                </div>
                <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">
                  IN 45M
                </span>
              </div>

              {/* Storage details badge */}
              <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Database className="w-3 h-3 text-cyan-400" /> SQLite v3.45 Local
                </span>
                <span>Google Drive Encrypted</span>
              </div>
            </div>

            {/* Floating corner indicator */}
            <div className="absolute bottom-2 right-3 font-mono text-[10px] text-[var(--text-secondary)] opacity-60">
              [INTERACTIVE_UI]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
