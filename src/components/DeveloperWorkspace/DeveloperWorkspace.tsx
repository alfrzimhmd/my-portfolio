import { useState } from 'react';
import { 
  Code2, 
  Terminal as TerminalIcon, 
  Layers, 
  Cpu, 
  Activity, 
  Sparkles,
  Smartphone,
  Shield,
  CheckCircle2
} from 'lucide-react';
import Terminal from '../Terminal/Terminal';

export default function DeveloperWorkspace() {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'monitor' | 'inspect'>('editor');
  const [uiHovered, setUiHovered] = useState(false);
  const [techHovered, setTechHovered] = useState(false);

  return (
    <div
      id="hero-developer-workspace"
      className="relative w-full rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)]/90 backdrop-blur-md p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-cyan-500/30"
    >
      {/* Top subtle glow banner */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Workspace Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[var(--border-main)] gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)]">
            WORKSPACE // LAB-DOCK
          </span>
          <span className="px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 font-mono text-[10px] text-cyan-400">
            ACTIVE
          </span>
        </div>

        {/* View Switcher Tabs - 4 tabs */}
        <div className="flex items-center gap-1 bg-[var(--surface-secondary)] p-1 rounded-lg border border-[var(--border-main)]">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'editor'
                ? 'bg-cyan-500/15 text-cyan-400 font-medium'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Code2 className="w-3 h-3" /> Code
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-cyan-500/15 text-cyan-400 font-medium'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers className="w-3 h-3" /> UI Preview
          </button>
          <button
            onClick={() => setActiveTab('monitor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'monitor'
                ? 'bg-cyan-500/15 text-cyan-400 font-medium'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Activity className="w-3 h-3" /> Telemetry
          </button>
          <button
            onClick={() => setActiveTab('inspect')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'inspect'
                ? 'bg-cyan-500/15 text-cyan-400 font-medium'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Shield className="w-3 h-3" /> APK Inspector
          </button>
        </div>
      </div>

      {/* Main Workspace Stage */}
      <div className="space-y-5">
        {activeTab === 'editor' && (
          <div className="space-y-4">
            {/* Code editor snippet */}
            <div className="rounded-xl border border-[var(--border-main)] bg-[#0A0C10] p-4 font-mono text-xs overflow-x-auto shadow-inner group">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1E222B] text-[10px] text-gray-500">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Code2 className="w-3 h-3" /> studymate_engine.dart
                </span>
                <span>Dart 3.4 · Null Safe</span>
              </div>
              <pre className="text-gray-300 leading-relaxed group-hover:translate-x-0.5 transition-transform duration-200">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-amber-300">StudyMateEngine</span> &#123;{'\n'}
                  {'  '}<span className="text-cyan-400">final</span> SQLiteDatabase _db;{'\n'}
                  {'  '}<span className="text-cyan-400">final</span> CloudBackupService _sync;{'\n'}
                  {'\n'}
                  {'  '}<span className="text-purple-400">Future</span>&lt;<span className="text-amber-300">void</span>&gt; <span className="text-blue-400">dispatchTask</span>(Task item) <span className="text-purple-400">async</span> &#123;{'\n'}
                  {'    '}<span className="text-gray-500">// Offline-first transactional commit</span>{'\n'}
                  {'    '}<span className="text-purple-400">await</span> _db.insert(<span className="text-emerald-400">&apos;tasks&apos;</span>, item.toMap());{'\n'}
                  {'    '}_sync.queueDelta(item.id, SyncAction.push);{'\n'}
                  {'  '}&#125;{'\n'}
                  &#125;
                </code>
              </pre>
            </div>

            {/* Embedded Terminal */}
            <Terminal initialCommand="whoami" />
          </div>
        )}

        {activeTab === 'preview' && (
          <div
            onMouseEnter={() => setUiHovered(true)}
            onMouseLeave={() => setUiHovered(false)}
            className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 transition-all duration-300 relative overflow-hidden"
          >
            {/* UI/UX badge reveal on hover */}
            <div
              className={`absolute top-3 right-3 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 transition-all duration-200 ${
                uiHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-1 scale-90'
              }`}
            >
              UI/UX INSPECTION
            </div>

            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[var(--text-secondary)]">
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span>StudyMate Mobile UI Frame (390×844)</span>
            </div>

            {/* Simulated Clean Mobile Interface */}
            <div
              className={`max-w-xs mx-auto rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-4 shadow-xl space-y-3 transition-transform duration-300 ${
                uiHovered ? 'scale-[1.02] shadow-cyan-500/5' : ''
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-secondary)]">
                <span>09:41 AM</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 100%
                </span>
              </div>

              <div className="pt-1">
                <p className="text-[10px] uppercase font-mono text-cyan-500 tracking-wider">Today&apos;s Focus</p>
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">Algorithms &amp; Data Structures</h4>
              </div>

              {/* Mini task checklist */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border-main)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px]">Dynamic Programming Practice</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border-main)]">
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-400" />
                  <span className="text-[11px]">Review System Architecture Notes</span>
                </div>
              </div>

              {/* Pomodoro Timer Preview */}
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-center">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">POMODORO INTERVAL</span>
                <span className="font-mono text-lg font-bold text-cyan-300">24:48</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'monitor' && (
          <div className="space-y-3 font-mono text-xs">
            {/* System Info Panel */}
            <div
              onMouseEnter={() => setTechHovered(true)}
              onMouseLeave={() => setTechHovered(false)}
              className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 space-y-3 transition-colors hover:border-cyan-500/40"
            >
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" /> THREAD WORKER POOL
                </span>
                <span className="text-emerald-400">4 / 4 CORES ACTIVE</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-[var(--text-secondary)]">
                  <span>Heap Memory Allocation</span>
                  <span className="text-[var(--text-primary)] font-medium">42.8 MB / 128 MB</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700/30 rounded-full overflow-hidden">
                  <div className="w-[34%] h-full bg-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-[var(--text-secondary)]">
                  <span>Frame Render Time</span>
                  <span className="text-emerald-400 font-medium">8.4 ms (120 FPS Target)</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700/30 rounded-full overflow-hidden">
                  <div className="w-[18%] h-full bg-emerald-400 rounded-full" />
                </div>
              </div>

              {/* Reveal on hover: technical metadata */}
              <div
                className={`pt-2 border-t border-[var(--border-main)] text-[10px] space-y-1 transition-opacity duration-200 ${
                  techHovered ? 'opacity-100 text-cyan-400' : 'opacity-70 text-[var(--text-secondary)]'
                }`}
              >
                <div>[ENV] LINUX_X86_64 // JIT_AOT_READY</div>
                <div>[SEC] SIGNATURE_VERIFIED // ZERO_LEAKS</div>
                <div>[NET] SOCKET_OPEN: 127.0.0.1:3000</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inspect' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 space-y-3 transition-colors hover:border-purple-500/40">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-purple-400" /> APK STATIC ANALYSIS
                </span>
                <span className="text-emerald-400">AUDIT_CLEAN</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="space-y-1">
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Package Metadata</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">com.example.studymate</div>
                  <div className="text-[11px] text-[var(--text-secondary)]">Arch: Flutter v3.22 / ARM64</div>
                  <div className="text-[11px] text-[var(--text-secondary)]">Min SDK: 21 (Android 5.0)</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Permissions</div>
                  <div className="space-y-0.5 text-[11px] text-emerald-400">
                    <div>✓ NO Camera / Mic req.</div>
                    <div>✓ Local Storage only</div>
                    <div>✓ HTTPS Encrypted OAuth</div>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-lg border border-purple-500/20 bg-purple-500/5 p-2.5">
                <div className="text-[10px] text-purple-400">
                  <span className="font-semibold">libapp.so</span> // Symbol analysis: 0 unencrypted telemetry vectors detected.
                </div>
                <div className="text-[10px] text-[var(--text-secondary)] mt-1">
                  ✓ Certificate chain verified // SHA-256: 3A:7B:...
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Technical Metadata Bar */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[var(--text-secondary)] border-t border-[var(--border-main)]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            LATENCY: 14ms
          </span>
          <span>STACK: FLUTTER · REACT · TS · RE</span>
          <span className="text-cyan-500">LAB // READY</span>
        </div>
      </div>
    </div>
  );
}