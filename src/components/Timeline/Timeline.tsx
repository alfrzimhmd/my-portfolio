import { TimelineEntry } from '../../types';
import { Sparkles, Calendar, Terminal } from 'lucide-react';

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div id="developer-journey-timeline" className="relative border-l border-[var(--border-main)] ml-4 sm:ml-6 space-y-10 py-4">
      {entries.map((entry, idx) => (
        <div key={entry.year} className="relative pl-6 sm:pl-8 group">
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-[var(--border-main)] bg-[var(--surface-main)] group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {entry.year}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                {entry.title}
              </h4>
            </div>

            <p className="font-mono text-xs text-cyan-500 font-medium">
              {entry.subtitle}
            </p>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {entry.description}
            </p>

            {entry.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--surface-secondary)] border border-[var(--border-main)] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
