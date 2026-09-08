import { Link } from 'react-router-dom';
import { Cpu, Terminal, ArrowUp, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo, socials } from '../../data/socials';

interface FooterProps {
  onOpenCV?: () => void;
}

export default function Footer({ onOpenCV }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="mt-24 border-t border-gray-200 dark:border-[#242830] bg-white/70 dark:bg-[#08090B]/90 backdrop-blur-md text-xs font-sans no-print"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Status & System Panel */}
        <div className="mb-10 p-4 rounded-2xl border border-gray-200 dark:border-[#242830] bg-gray-50 dark:bg-[#101216] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM ONLINE
            </span>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <span className="text-gray-600 dark:text-gray-300 hidden sm:inline">
              Portfolio v1.0.4
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] text-gray-500 dark:text-gray-400">
            <div>
              <span className="text-gray-400 block text-[9px] uppercase">SYSTEM</span>
              <span className="font-bold text-gray-800 dark:text-gray-200">React + Vite</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[9px] uppercase">STACK</span>
              <span className="font-bold text-gray-800 dark:text-gray-200">Tailwind 4</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[9px] uppercase">THEME</span>
              <span className="font-bold text-teal-600 dark:text-cyan-400">
                Dark / Light Lab
              </span>
            </div>
            <div>
              <span className="text-gray-400 block text-[9px] uppercase">STATUS</span>
              <span className="font-bold text-emerald-500">Operational</span>
            </div>
          </div>
        </div>

        {/* Links & Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200 dark:border-[#1E222A]">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-gray-900 dark:text-[#F5F7FA]">
              <div className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-600 dark:text-cyan-400 flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              &ldquo;{personalInfo.description || 'Building digital experiences through code, design and curiosity.'}&rdquo;
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 dark:text-gray-500">
              <Terminal className="w-3.5 h-3.5 text-cyan-500" />
              <span>system: react-19 · vite · tailwind-v4</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span className="text-[10px] text-gray-400">01</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span className="text-[10px] text-gray-400">02</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span className="text-[10px] text-gray-400">03</span>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span className="text-[10px] text-gray-400">04</span>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  <span className="text-[10px] text-gray-400">05</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Laboratory Actions */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              LAB ACTIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="text-teal-600 dark:text-cyan-400 hover:underline font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>Curriculum Vitae</span>
                  <span className="text-[10px]">↓</span>
                </button>
              </li>
              <li>
                <Link to="/projects/studymate" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors">
                  Featured: StudyMate
                </Link>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {personalInfo.location || 'Indonesia'}
                </span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-500">
                  Year: {personalInfo.year || '2026'}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect / Network */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              CONNECT
            </h4>
            <div className="space-y-2 text-xs">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                >
                  {s.platform === 'github' && <Github className="w-3.5 h-3.5" />}
                  {s.platform === 'linkedin' && <Linkedin className="w-3.5 h-3.5" />}
                  {s.platform === 'email' && <Mail className="w-3.5 h-3.5" />}
                  {s.platform === 'website' && <Terminal className="w-3.5 h-3.5" />}
                  <span className="truncate">{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-400 dark:text-gray-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>&copy; {personalInfo.year || '2026'} {personalInfo.name}.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built with 80% Professional, 15% Technical, 5% Curiosity.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}