import { useEffect, useState } from 'react';
import { X, Activity, Cpu, ShieldCheck, Clock, Terminal, Layers } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface SystemStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SystemStatusModal({ isOpen, onClose }: SystemStatusModalProps) {
  const { theme } = useTheme();
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      const seconds = String(elapsed % 60).padStart(2, '0');
      setUptime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      id="system-status-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="system-status-dialog"
        className="w-full max-w-md rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 shadow-2xl transition-all relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Subtle top indicator bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500" />

        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-main)] mb-5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <h3 className="font-mono text-sm font-semibold tracking-wider text-[var(--text-primary)]">
                SYSTEM TELEMETRY
              </h3>
              <p className="font-mono text-[11px] text-[var(--text-secondary)]">NODE: ID-JKT-01 // PRODUCTION</p>
            </div>
          </div>
          <button
            id="close-status-modal-btn"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Spec metrics */}
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
            <span className="text-[var(--text-secondary)] flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> SYSTEM
            </span>
            <span className="font-medium text-[var(--text-primary)]">Portfolio v1.0</span>
          </div>

          <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
            <span className="text-[var(--text-secondary)] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-blue-400" /> BUILD
            </span>
            <span className="font-medium text-[var(--text-primary)]">React 19 + Vite</span>
          </div>

          <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
            <span className="text-[var(--text-secondary)] flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> STATUS
            </span>
            <span className="font-medium text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              Operational
            </span>
          </div>

          <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
            <span className="text-[var(--text-secondary)] flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> THEME
            </span>
            <span className="font-medium uppercase text-[var(--text-primary)]">{theme}</span>
          </div>

          <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
            <span className="text-[var(--text-secondary)] flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> SESSION UPTIME
            </span>
            <span className="font-medium text-[var(--text-primary)]">{uptime}</span>
          </div>

          <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
            <span className="text-[var(--text-secondary)] flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" /> ENVIRONMENT
            </span>
            <span className="font-medium text-[var(--text-primary)]">Developer Workspace × Lab</span>
          </div>
        </div>

        {/* Footer command hint */}
        <div className="mt-5 pt-3 border-t border-[var(--border-main)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
          <span>SHORTCUT: ⌘K / CTRL+K</span>
          <span className="text-cyan-500">READY</span>
        </div>
      </div>
    </div>
  );
}
