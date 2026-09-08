import { useState } from 'react';
import { SkillCategory } from '../../types';
import { 
  Smartphone, 
  Globe, 
  Layout, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
  FileCode2,
  Radio,
  Search
} from 'lucide-react';
import { labInspectionData } from '../../data/skills';

interface SkillModuleProps {
  key?: string | number;
  category: SkillCategory;
  index: number;
}

export default function SkillModule({ category, index }: SkillModuleProps) {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'visual'>('visual');

  return (
    <div
      id={`skill-module-${category.id}`}
      className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300 space-y-6"
    >
      {/* Module Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-main)]">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            MODULE 0{index + 1}
          </span>
          <h3 className="font-mono text-sm sm:text-base font-bold text-[var(--text-primary)]">
            {category.title}
          </h3>
        </div>
        <span className="font-mono text-[11px] text-[var(--text-secondary)]">
          {category.subtitle}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {category.description}
      </p>

      {/* Visual Component for Each Discipline */}
      <div className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-4 sm:p-5">
        {category.visualType === 'smartphone' && (
          /* Smartphone interface visual */
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-main)] text-[10px] text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Smartphone className="w-3.5 h-3.5" /> MOBILE SHELL (FLUTTER RUNTIME)
              </span>
              <span>60 FPS &middot; OFFLINE CAPABLE</span>
            </div>

            <div className="max-w-xs mx-auto rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-4 shadow-md space-y-3">
              <div className="flex justify-between items-center text-[10px] text-[var(--text-secondary)]">
                <span>Flutter 3.x Engine</span>
                <span className="text-emerald-400 font-semibold">&bull; ACTIVE</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] space-y-1">
                <span className="text-[10px] text-cyan-500 block uppercase font-bold">Local SQLite DB</span>
                <span className="text-[var(--text-primary)] block">table: scheduled_tasks (14 rows)</span>
                <span className="text-[10px] text-gray-400 block">Query time: 0.8ms</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--surface-secondary)] text-[10px] text-[var(--text-secondary)] space-y-1">
                <div className="flex justify-between">
                  <span>RAM footprint:</span>
                  <span className="text-[var(--text-primary)] font-semibold">32 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Battery impact:</span>
                  <span className="text-emerald-400 font-semibold">Low (Doze Optimized)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {category.visualType === 'browser' && (
          /* Browser interface visual */
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-main)] text-[10px] text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Globe className="w-3.5 h-3.5" /> CHROMIUM BROWSER SANDBOX
              </span>
              <span>REACT 19 + VITE 6</span>
            </div>

            <div className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-main)] p-3.5 space-y-3">
              <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)] bg-[var(--surface-secondary)] px-2.5 py-1.5 rounded-md border border-[var(--border-main)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>https://developer-lab.workspace/preview</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                  <span className="text-[var(--text-secondary)] block">First Contentful Paint</span>
                  <span className="text-emerald-400 font-bold text-xs">0.32s</span>
                </div>
                <div className="p-2 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                  <span className="text-[var(--text-secondary)] block">Cumulative Layout Shift</span>
                  <span className="text-emerald-400 font-bold text-xs">0.000</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {category.visualType === 'design_board' && (
          /* Design board visual */
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-main)] text-[10px] text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 text-purple-400">
                <Layout className="w-3.5 h-3.5" /> DESIGN CANVAS &amp; TOKENS
              </span>
              <span>Figma &middot; Mathematical Scales</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
              <div className="p-3 rounded-lg border border-[var(--border-main)] bg-[var(--surface-main)] space-y-1">
                <span className="text-[var(--text-secondary)] block text-[9px]">TYPE SCALE</span>
                <span className="font-bold text-xs text-[var(--text-primary)]">1.125 Major 2nd</span>
                <span className="text-[9px] text-purple-400 block">High Density</span>
              </div>
              <div className="p-3 rounded-lg border border-[var(--border-main)] bg-[var(--surface-main)] space-y-1">
                <span className="text-[var(--text-secondary)] block text-[9px]">CONTRAST</span>
                <span className="font-bold text-xs text-emerald-400">7.2 : 1</span>
                <span className="text-[9px] text-emerald-400 block">WCAG AAA</span>
              </div>
              <div className="p-3 rounded-lg border border-[var(--border-main)] bg-[var(--surface-main)] space-y-1">
                <span className="text-[var(--text-secondary)] block text-[9px]">PADDING</span>
                <span className="font-bold text-xs text-[var(--text-primary)]">Nested Radius</span>
                <span className="text-[9px] text-cyan-400 block">Outer - Inner</span>
              </div>
            </div>
          </div>
        )}

        {category.visualType === 'debug_panel' && (
          /* Reverse engineering debug panel */
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-main)] text-[10px] text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <TerminalIcon className="w-3.5 h-3.5" /> BINARY INSPECTION // STATIC &amp; DYNAMIC
              </span>
              <span>EDUCATIONAL RESEARCH</span>
            </div>

            <div className="rounded-xl border border-[var(--border-main)] bg-[#07090D] p-3.5 text-gray-300 space-y-2 text-[11px]">
              <div className="flex justify-between text-gray-500 text-[10px] border-b border-gray-800 pb-1">
                <span>TARGET: StudyMate.apk</span>
                <span className="text-emerald-400">PARSED 100%</span>
              </div>
              <div className="space-y-1 text-[10px]">
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>AndroidManifest.xml: Verified non-exported activities</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-300">
                  <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  <span>DEX Classes: 1,420 signatures &middot; Zero plain-text credentials</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>lib/arm64-v8a: libapp.so native symbol table verified</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Technology Badges */}
      <div className="space-y-2">
        <h4 className="font-mono text-[11px] font-semibold tracking-wider text-[var(--text-secondary)] uppercase">
          TECHNOLOGIES &amp; TOOLING
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {category.technologies.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-xs text-[var(--text-primary)] hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Focus Areas */}
      <div className="space-y-2 pt-1 border-t border-[var(--border-main)]">
        <h4 className="font-mono text-[11px] font-semibold tracking-wider text-[var(--text-secondary)] uppercase">
          CORE FOCUS
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[var(--text-secondary)]">
          {category.focusAreas.map((area, aIdx) => (
            <div key={aIdx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-cyan-500 shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
