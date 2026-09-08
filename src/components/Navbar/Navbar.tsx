import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Command, FileText } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { personalInfo } from '../../data/socials';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenCV: () => void; // Tambahkan props untuk CV
}

export default function Navbar({ onOpenCommandPalette, onOpenCV }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        id="main-header"
        className="sticky top-0 z-40 w-full border-b border-[var(--border-main)] bg-[var(--surface-main)]/80 backdrop-blur-md transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Initials */}
          <Link
            id="brand-logo"
            to="/"
            className="group flex items-center gap-2.5 text-decoration-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)] flex items-center justify-center font-mono font-bold text-xs text-cyan-400 group-hover:border-cyan-500/60 transition-colors">
              DEV
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-widest uppercase">
                LAB // 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              id="cmd-palette-trigger-btn"
              onClick={onOpenCommandPalette}
              title="Quick Command Palette (⌘K / Ctrl+K)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-cyan-500/40 transition-all font-mono text-[11px] cursor-pointer"
            >
              <Command className="w-3.5 h-3.5" />
              <span>K</span>
            </button>

            {/* CV Button - Menggantikan System Status */}
            <button
              id="nav-cv-cta-btn"
              type="button"
              onClick={onOpenCV}
              className="group relative px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono border border-teal-500/40 dark:border-cyan-500/40 bg-teal-500/10 dark:bg-cyan-500/10 hover:bg-teal-500/20 dark:hover:bg-cyan-500/20 text-teal-700 dark:text-cyan-300 transition-all flex items-center gap-2 active:scale-95 shadow-sm hover:shadow-cyan-500/10"
            >
              <FileText className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-teal-600 dark:text-cyan-400" />
              <span>Curriculum Vitae</span>
              <span className="text-[10px] opacity-70">↓</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick CV button on mobile */}
            <button
              type="button"
              onClick={onOpenCV}
              className="p-2 rounded-lg border border-teal-500/40 bg-teal-500/10 text-teal-600 dark:text-cyan-400 text-xs font-mono font-medium flex items-center gap-1"
              title="Curriculum Vitae"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </button>

            <ThemeToggle />
            
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-primary)]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden border-b border-[var(--border-main)] bg-[var(--surface-main)] px-4 py-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-mono tracking-wide ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 font-semibold border border-cyan-500/20'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[var(--border-main)] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-semibold border border-teal-500/40 bg-teal-500/10 text-teal-700 dark:text-cyan-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Curriculum Vitae</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full py-2 px-3 rounded-lg text-xs font-mono border border-[var(--border-main)] bg-[var(--surface-secondary)] text-[var(--text-secondary)] flex items-center justify-center gap-2"
              >
                <Command className="w-3.5 h-3.5" />
                <span>Open Command Palette</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}