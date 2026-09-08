import { useState } from 'react';
import { skillCategories, labInspectionData } from '../../data/skills';
import SkillModule from '../../components/SkillModule/SkillModule';
import { 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Search, 
  Radio, 
  Activity, 
  Sparkles,
  FileCode,
  Lock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SkillsPage() {
  const [analyzingActive, setAnalyzingActive] = useState(false);
  const [simulatedLog, setSimulatedLog] = useState<string[]>([
    'SHA256: 4f9b8c7e1a2d3e4f5a6b7c8d9e0f1a2b verified',
    'Manifest permission count: 2 (SCHEDULE_EXACT_ALARM, INTERNET)',
    'AOT snapshot arm64-v8a: intact & stripped',
    'SQLite cipher engine: SQLite v3.45 / AES-256 enabled'
  ]);

  const triggerReanalyze = () => {
    setAnalyzingActive(true);
    setTimeout(() => {
      setSimulatedLog(prev => [
        `Re-scan completed at ${new Date().toLocaleTimeString()} WIB`,
        'Sandbox integrity: 100% stable',
        ...prev.slice(0, 3)
      ]);
      setAnalyzingActive(false);
    }, 1200);
  };

  return (
    <div id="skills-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 md:space-y-24">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
          TECHNICAL LABORATORY // DOMAINS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          My Technical Laboratory
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          Eksplorasi mendalam lintas disiplin: dari rekayasa aplikasi bergerak, arsitektur web modern, presisi desain antarmuka, hingga dekonstruksi biner dan analisis sistem.
        </p>
      </div>

      {/* 4 Core Discipline Modules (Section 23 - 27) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <SkillModule key={category.id} category={category} index={idx} />
        ))}
      </div>

      {/* SPECIAL SECTION: "Inside the Lab" — Reverse Engineering Lab (Section 28) */}
      <section id="inside-the-lab-section" className="space-y-6">
        <div className="border-b border-[var(--border-main)] pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
              RESEARCH WORKBENCH // 04
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Inside the Lab &mdash; Software Inspection
            </h2>
            <p className="text-sm text-[var(--text-secondary)] pt-1">
              Visualisasi analisis arsitektur dan audit keamanan edukatif terhadap paket aplikasi Android.
            </p>
          </div>

          <button
            onClick={triggerReanalyze}
            disabled={analyzingActive}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-mono text-xs cursor-pointer transition-all disabled:opacity-50"
          >
            <Radio className={`w-3.5 h-3.5 ${analyzingActive ? 'animate-spin' : ''}`} />
            <span>{analyzingActive ? 'ANALYZING...' : 'RUN BENCHMARK AUDIT'}</span>
          </button>
        </div>

        <div className="rounded-2xl md:rounded-3xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          {/* Lab Telemetry Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase block">TARGET APPLICATION</span>
              <span className="text-sm font-bold text-[var(--text-primary)] block">
                {labInspectionData.application}
              </span>
              <span className="text-[10px] text-cyan-500">{labInspectionData.version}</span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase block">PACKAGE IDENTIFIER</span>
              <span className="text-sm font-bold text-[var(--text-primary)] block">
                {labInspectionData.package}
              </span>
              <span className="text-[10px] text-gray-500">Android Target SDK 34</span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase block">RUNTIME ARCHITECTURE</span>
              <span className="text-sm font-bold text-[var(--text-primary)] block">
                {labInspectionData.architecture}
              </span>
              <span className="text-[10px] text-purple-400">AOT Compiled Engine</span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] uppercase block">AUDIT STATUS</span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-bold text-emerald-400">
                  {analyzingActive ? 'Analyzing...' : 'Passed All Rules'}
                </span>
              </div>
              <span className="text-[10px] text-gray-500">Zero Critical Flaws</span>
            </div>
          </div>

          {/* Static vs Dynamic Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* STATIC ANALYSIS */}
            <div className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-[var(--border-main)]">
                <span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <FileCode className="w-4 h-4" /> STATIC ANALYSIS
                </span>
                <span className="font-mono text-[10px] text-emerald-400">4 / 4 CHECKS PASSED</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {labInspectionData.staticAnalysis.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[var(--surface-main)] border border-[var(--border-main)] flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[var(--text-primary)] font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        {item.label}
                      </span>
                      <p className="text-[11px] text-[var(--text-secondary)] font-sans pt-0.5">
                        {item.note}
                      </p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                      &check; VERIFIED
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DYNAMIC ANALYSIS */}
            <div className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-[var(--border-main)]">
                <span className="font-mono text-xs font-bold text-purple-400 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" /> DYNAMIC ANALYSIS
                </span>
                <span className="font-mono text-[10px] text-emerald-400">3 / 3 RUNTIMES PASSED</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {labInspectionData.dynamicAnalysis.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[var(--surface-main)] border border-[var(--border-main)] flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-[var(--text-primary)] font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        {item.label}
                      </span>
                      <p className="text-[11px] text-[var(--text-secondary)] font-sans pt-0.5">
                        {item.note}
                      </p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                      &check; SECURED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Analysis Terminal Log */}
          <div className="rounded-xl border border-[var(--border-main)] bg-[#07090C] p-4 font-mono text-xs text-gray-300 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-gray-800 text-[10px] text-gray-500">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <TerminalIcon className="w-3.5 h-3.5" /> telemetry_stdout.log
              </span>
              <span>SHA-256 HASH VERIFICATION</span>
            </div>
            <div className="space-y-1 text-[11px] pt-1">
              {simulatedLog.map((log, idx) => (
                <p key={idx} className="flex items-center gap-2">
                  <span className="text-gray-600">&gt;</span>
                  <span className={idx === 0 ? 'text-emerald-400' : 'text-gray-300'}>{log}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-[var(--border-main)] flex justify-between items-center font-mono text-xs">
        <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5">
          <span>[ EXPLORE LAB CASE STUDIES ]</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          [ CONTACT DEVELOPER ]
        </Link>
      </div>
    </div>
  );
}
