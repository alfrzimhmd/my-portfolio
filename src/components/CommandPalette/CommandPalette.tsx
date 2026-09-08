import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Compass, Sun, Moon, ArrowRight, Terminal, Github, Mail, ShieldAlert, Sparkles, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { socials } from '../../data/socials';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [easterEggActive, setEasterEggActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setEasterEggActive(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val.trim().toLowerCase() === 'sudo') {
      setEasterEggActive(true);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleThemeChange = (mode: 'dark' | 'light') => {
    setTheme(mode);
    onClose();
  };

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="command-palette-dialog"
        className="w-full max-w-xl rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-main)] gap-3">
          <Search className="w-4 h-4 text-cyan-500" />
          <input
            ref={inputRef}
            id="command-palette-input"
            type="text"
            value={query}
            onChange={e => handleQueryChange(e.target.value)}
            placeholder="Type a command, page, action, or 'sudo'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
          />
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-[var(--border-main)] text-[var(--text-secondary)]">
            ESC
          </span>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Easter egg display */}
        {easterEggActive && (
          <div className="p-4 bg-[#050608] border-b border-cyan-500/30 font-mono text-xs text-cyan-400 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldAlert className="w-4 h-4" />
              <span className="font-semibold">&gt; Access granted.</span>
            </div>
            <p className="text-cyan-300">&gt; Welcome to the lab. Elevated terminal view initialized.</p>
            <p className="text-[var(--text-secondary)] text-[11px]">
              &gt; Note: Visual easter egg active. System integrity 100%. Type &lsquo;clear&rsquo; or pick an action.
            </p>
          </div>
        )}

        {/* Suggestions & Actions List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-4 font-mono text-xs">
          {/* Navigation section */}
          <div>
            <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider flex items-center gap-1.5">
              <Compass className="w-3 h-3" /> Navigation
            </div>
            <div className="space-y-1">
              {[
                { name: 'Home', path: '/', label: 'Return to digital workspace entrance' },
                { name: 'About', path: '/about', label: 'Personal profile & journey timeline' },
                { name: 'Projects', path: '/projects', label: 'Project laboratory & case studies' },
                { name: 'Skills', path: '/skills', label: 'Technical lab & reverse engineering modules' },
                { name: 'Contact', path: '/contact', label: 'Let&apos;s build something together' }
              ]
                .filter(
                  item =>
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.label.toLowerCase().includes(query.toLowerCase())
                )
                .map(item => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] hover:text-cyan-400 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[var(--text-secondary)] group-hover:text-cyan-400">→</span>
                      <span>{item.name}</span>
                      <span className="text-[11px] text-[var(--text-secondary)] hidden sm:inline">
                        — {item.label}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
            </div>
          </div>

          {/* Theme Section */}
          <div>
            <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Theme
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleThemeChange('dark')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] hover:text-cyan-400 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Moon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Switch to Dark Theme</span>
                </div>
                <span className="text-[10px] text-[var(--text-secondary)]">#08090B</span>
              </button>
              <button
                onClick={() => handleThemeChange('light')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] hover:text-cyan-600 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Switch to Light Theme</span>
                </div>
                <span className="text-[10px] text-[var(--text-secondary)]">#F7F8FA</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[var(--text-secondary)] tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3 h-3" /> External Actions
            </div>
            <div className="space-y-1">
              <button
                onClick={() => openExternal('https://github.com/alfrzimhmd')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] hover:text-cyan-400 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-cyan-400" />
                  <span>Open GitHub Repository</span>
                </div>
                <span className="text-[10px] text-[var(--text-secondary)]">github.com/alfrzimhmd</span>
              </button>
              <button
                onClick={() => openExternal('mailto:mhmdalfrzi.03@gmail.com')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] hover:text-cyan-400 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-cyan-400" />
                  <span>Compose Direct Email</span>
                </div>
                <span className="text-[10px] text-[var(--text-secondary)]">mhmdalfrzi.03@gmail.com</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="p-2.5 bg-[var(--surface-secondary)] border-t border-[var(--border-main)] flex items-center justify-between text-[10px] font-mono text-[var(--text-secondary)]">
          <span>Navigate with mouse or tap ESC to exit</span>
          <span className="text-cyan-500 font-semibold">PALETTE v1.0</span>
        </div>
      </div>
    </div>
  );
}
