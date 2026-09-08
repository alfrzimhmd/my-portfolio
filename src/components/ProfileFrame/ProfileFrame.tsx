import { ReactNode } from 'react';

interface ProfileFrameProps {
  children: ReactNode;
  isHovered?: boolean;
  role?: string;
  year?: string;
}

export default function ProfileFrame({
  children,
  isHovered = false,
  role = 'DEVELOPER',
  year = '2026'
}: ProfileFrameProps) {
  return (
    <div
      id="digital-lab-profile-frame"
      className={`relative rounded-2xl md:rounded-[22px] border p-2 sm:p-2.5 transition-all duration-300 ${
        isHovered
          ? 'border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.18)] bg-[var(--surface-main)]'
          : 'border-[var(--border-main)] bg-[var(--surface-main)] shadow-xl'
      }`}
    >
      {/* Top Left Corner Marker: '+' and bracket line */}
      <div className="absolute top-2 left-2 pointer-events-none flex items-center gap-1">
        <span
          className={`font-mono text-xs font-bold transition-colors ${
            isHovered ? 'text-cyan-400' : 'text-[var(--text-secondary)] opacity-60'
          }`}
        >
          +
        </span>
        <span
          className={`font-mono text-[9px] uppercase tracking-wider transition-colors ${
            isHovered ? 'text-cyan-400 opacity-90' : 'text-[var(--text-secondary)] opacity-50'
          }`}
        >
          PROFILE_01
        </span>
      </div>

      {/* Top Right Corner Marker: '01' */}
      <div className="absolute top-2 right-2 pointer-events-none">
        <span
          className={`font-mono text-[10px] font-semibold tracking-wider transition-colors ${
            isHovered ? 'text-cyan-400' : 'text-[var(--text-secondary)] opacity-60'
          }`}
        >
          01
        </span>
      </div>

      {/* Bottom Left Corner Marker: 'PROFILE' */}
      <div className="absolute bottom-2 left-2 pointer-events-none flex items-center gap-1.5">
        <span
          className={`font-mono text-[9px] font-semibold tracking-widest transition-colors uppercase ${
            isHovered ? 'text-cyan-400' : 'text-[var(--text-secondary)] opacity-60'
          }`}
        >
          {role}
        </span>
        <span className="font-mono text-[8px] text-[var(--text-secondary)] opacity-40">
          // DIGITAL LAB
        </span>
      </div>

      {/* Bottom Right Corner Marker: '2026' */}
      <div className="absolute bottom-2 right-2 pointer-events-none">
        <span
          className={`font-mono text-[10px] font-semibold tracking-wider transition-colors ${
            isHovered ? 'text-cyan-400' : 'text-[var(--text-secondary)] opacity-60'
          }`}
        >
          {year}
        </span>
      </div>

      {/* Subtle coordinate ticks on borders */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-3 border-l border-cyan-500/40 opacity-50" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-3 border-r border-cyan-500/40 opacity-50" />

      {/* Internal Content Area with 16-20px rounded corners */}
      <div className="relative rounded-xl md:rounded-[18px] overflow-hidden my-5 mx-0 sm:mx-0.5">
        {children}
      </div>
    </div>
  );
}
