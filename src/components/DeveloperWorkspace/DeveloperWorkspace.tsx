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
  CheckCircle2,
  Command,
  Fingerprint
} from 'lucide-react';
import Terminal from '../Terminal/Terminal';

export default function DeveloperWorkspace() {
  const [activeTab, setActiveTab] = useState<'console' | 'code' | 'inspect' | 'monitor' | 'preview'>('console');
  const [uiHovered, setUiHovered] = useState(false);
  const [techHovered, setTechHovered] = useState(false);
  const [inspectHovered, setInspectHovered] = useState(false);

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

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[var(--surface-secondary)] p-1 rounded-lg border border-[var(--border-main)] overflow-x-auto">
          <button
            onClick={() => setActiveTab('console')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'console'
                ? 'bg-purple-500/15 text-purple-400 font-medium border border-purple-500/20'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Command className="w-3 h-3" /> Console
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'code'
                ? 'bg-cyan-500/15 text-cyan-400 font-medium border border-cyan-500/20'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Code2 className="w-3 h-3" /> Code
          </button>
          <button
            onClick={() => setActiveTab('inspect')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'inspect'
                ? 'bg-orange-500/15 text-orange-400 font-medium border border-orange-500/20'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Shield className="w-3 h-3" /> APK Inspector
          </button>
          <button
            onClick={() => setActiveTab('monitor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'monitor'
                ? 'bg-emerald-500/15 text-emerald-400 font-medium border border-emerald-500/20'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Activity className="w-3 h-3" /> Telemetry
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'preview'
                ? 'bg-pink-500/15 text-pink-400 font-medium border border-pink-500/20'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers className="w-3 h-3" /> UI Preview
          </button>
        </div>
      </div>

      {/* Main Workspace Stage */}
      <div className="space-y-5">
        {/* TAB 1: CONSOLE - TANPA NESTED CARD */}
        {activeTab === 'console' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-main)] pb-3">
              <Command className="w-4 h-4 text-purple-400" />
              <span>LAB CONSOLE // INTERACTIVE SHELL</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[9px] border border-purple-500/20">
                LIVE
              </span>
              <span className="ml-auto text-[9px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CONNECTED
              </span>
            </div>

            {/* Terminal Langsung tanpa nested card */}
            <Terminal initialCommand="whoami" isInteractive={true} />

            {/* Quick Command Reference */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
              <div className="p-2.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)] text-[var(--text-secondary)] text-center hover:border-purple-500/30 transition-colors group">
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">whoami</span>
                <span className="block text-[9px] text-[var(--text-secondary)] mt-0.5">Identity</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)] text-[var(--text-secondary)] text-center hover:border-purple-500/30 transition-colors group">
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">projects</span>
                <span className="block text-[9px] text-[var(--text-secondary)] mt-0.5">List all</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)] text-[var(--text-secondary)] text-center hover:border-purple-500/30 transition-colors group">
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">project airvista</span>
                <span className="block text-[9px] text-[var(--text-secondary)] mt-0.5">Show detail</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)] text-[var(--text-secondary)] text-center hover:border-purple-500/30 transition-colors group">
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">sudo</span>
                <span className="block text-[9px] text-[var(--text-secondary)] mt-0.5">Elevated mode</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CODE - DIPERPANJANG DENGAN SCROLL */}
        {activeTab === 'code' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-main)] pb-3">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>SOURCE EDITOR // STUDYMATE ENGINE</span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[9px] border border-cyan-500/20">
                DART 3.4
              </span>
            </div>

            {/* Code editor snippet - lebih panjang dengan scroll */}
            <div className="rounded-xl border border-[var(--border-main)] bg-[#0A0C10] font-mono text-xs shadow-inner overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#1E222B] text-[10px] text-gray-500 bg-[#12151B]">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Code2 className="w-3 h-3" /> studymate_engine.dart
                </span>
                <span className="text-emerald-400">● Dart 3.4</span>
              </div>
              <div className="p-4 overflow-y-auto max-h-[280px] scrollbar-thin scrollbar-thumb-[var(--border-main)]">
                <pre className="text-gray-300 leading-relaxed text-[11px]">
                  <code>
                    <span className="text-purple-400">import</span> <span className="text-emerald-400">'package:sqflite/sqflite.dart'</span>;<br />
                    <span className="text-purple-400">import</span> <span className="text-emerald-400">'package:provider/provider.dart'</span>;<br />
                    <span className="text-purple-400">import</span> <span className="text-emerald-400">'package:google_drive_api/drive.dart'</span>;<br />
                    <br />
                    <span className="text-gray-500">/// Core engine for StudyMate application</span><br />
                    <span className="text-gray-500">/// Handles offline-first data persistence and sync</span><br />
                    <span className="text-purple-400">class</span> <span className="text-yellow-400">StudyMateEngine</span> <span className="text-purple-400">implements</span> <span className="text-yellow-400">BaseSyncEngine</span> {'{'}<br />
                    {'  '}<span className="text-cyan-400">final</span> SQLiteDatabase <span className="text-blue-300">_db</span>;<br />
                    {'  '}<span className="text-cyan-400">final</span> CloudBackupService <span className="text-blue-300">_sync</span>;<br />
                    {'  '}<span className="text-cyan-400">final</span> TaskRepository <span className="text-blue-300">_taskRepo</span>;<br />
                    {'  '}<span className="text-cyan-400">final</span> ScheduleRepository <span className="text-blue-300">_scheduleRepo</span>;<br />
                    <br />
                    {'  '}<span className="text-yellow-400">StudyMateEngine</span>({'{'})<br />
                    {'    '}<span className="text-purple-400">required</span> <span className="text-blue-300">this._db</span>,<br />
                    {'    '}<span className="text-purple-400">required</span> <span className="text-blue-300">this._sync</span>,<br />
                    {'    '}<span className="text-purple-400">required</span> <span className="text-blue-300">this._taskRepo</span>,<br />
                    {'    '}<span className="text-purple-400">required</span> <span className="text-blue-300">this._scheduleRepo</span>,<br />
                    {'  '});<br />
                    <br />
                    {'  '}<span className="text-gray-500">/// Dispatch a task with offline-first strategy</span><br />
                    {'  '}<span className="text-purple-400">Future</span>&lt;<span className="text-yellow-400">void</span>&gt; <span className="text-blue-400">dispatchTask</span>(Task item) <span className="text-purple-400">async</span> {'{'}<br />
                    {'    '}<span className="text-purple-400">try</span> {'{'}<br />
                    {'      '}<span className="text-gray-500">// 1. Local persistence (offline-first)</span><br />
                    {'      '}<span className="text-purple-400">await</span> <span className="text-blue-300">_db</span>.<span className="text-cyan-400">insert</span>(<span className="text-emerald-400">'tasks'</span>, item.<span className="text-cyan-400">toMap</span>());<br />
                    {'      '}<span className="text-gray-500">// 2. Queue for background sync</span><br />
                    {'      '}<span className="text-blue-300">_sync</span>.<span className="text-cyan-400">queueDelta</span>(item.id, SyncAction.push);<br />
                    {'      '}<span className="text-gray-500">// 3. Notify listeners</span><br />
                    {'      '}<span className="text-blue-300">_taskRepo</span>.<span className="text-cyan-400">notifyTaskAdded</span>(item);<br />
                    {'    '} <span className="text-purple-400">catch</span> (e) {'{'}<br />
                    {'      '}<span className="text-gray-500">// Rollback on failure</span><br />
                    {'      '}<span className="text-purple-400">await</span> <span className="text-blue-300">_db</span>.<span className="text-cyan-400">delete</span>(<span className="text-emerald-400">'tasks'</span>, item.id);<br />
                    {'      '}<span className="text-purple-400">rethrow</span>;<br />
                    {'    '}{'}'}<br />
                    {'  '}{'}'}<br />
                    <br />
                    {'  '}<span className="text-gray-500">/// Get today's schedule</span><br />
                    {'  '}<span className="text-purple-400">Future</span>&lt;<span className="text-yellow-400">List</span>&lt;Schedule&gt;&gt; <span className="text-blue-400">getTodaySchedule</span>() <span className="text-purple-400">async</span> {'{'}<br />
                    {'    '}<span className="text-purple-400">return</span> <span className="text-blue-300">_scheduleRepo</span>.<span className="text-cyan-400">getByDate</span>(DateTime.now());<br />
                    {'  '}{'}'}<br />
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>

            {/* File Tree mini */}
            <div className="grid grid-cols-3 gap-2 text-[9px] font-mono">
              <div className="p-2 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                <span className="text-cyan-400">lib/</span>
                <div className="pl-3 mt-1 text-[var(--text-secondary)] space-y-0.5">
                  <div>├── <span className="text-emerald-400">engine.dart</span></div>
                  <div>└── <span className="text-emerald-400">models/</span></div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                <span className="text-purple-400">test/</span>
                <div className="pl-3 mt-1 text-[var(--text-secondary)] space-y-0.5">
                  <div>└── <span className="text-emerald-400">engine_test.dart</span></div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)]">
                <span className="text-amber-400">assets/</span>
                <div className="pl-3 mt-1 text-[var(--text-secondary)] space-y-0.5">
                  <div>└── <span className="text-emerald-400">images/</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: APK INSPECTOR */}
        {activeTab === 'inspect' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-main)] pb-3">
              <Shield className="w-4 h-4 text-orange-400" />
              <span>APK STATIC ANALYSIS // NEXUS TRACE ENGINE</span>
              <span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 text-[9px] border border-orange-500/20">
                RUST v1.76
              </span>
            </div>

            <div 
              onMouseEnter={() => setInspectHovered(true)}
              onMouseLeave={() => setInspectHovered(false)}
              className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 space-y-4 transition-all duration-300 hover:border-orange-500/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-bold text-[var(--text-primary)]">NexusTrace v2.1.0</h4>
                    <p className="text-[10px] font-mono text-[var(--text-secondary)]">Static Analysis Engine • Rust Core</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold transition-all ${
                  inspectHovered 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-[var(--surface-main)] text-[var(--text-secondary)] border border-[var(--border-main)]'
                }`}>
                  {inspectHovered ? 'ANALYZING' : 'READY'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-mono">Package Metadata</div>
                  <div className="p-3 rounded-lg bg-[var(--surface-main)] border border-[var(--border-main)] space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[var(--text-secondary)]">Package</span>
                      <span className="font-mono text-[var(--text-primary)]">com.example.studymate</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[var(--text-secondary)]">Architecture</span>
                      <span className="font-mono text-cyan-400">Flutter v3.22 / ARM64</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[var(--text-secondary)]">Min SDK</span>
                      <span className="font-mono text-[var(--text-primary)]">API 21 (Android 5.0)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[var(--text-secondary)]">Target SDK</span>
                      <span className="font-mono text-[var(--text-primary)]">API 34 (Android 14)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-mono">Permissions Audit</div>
                  <div className="p-3 rounded-lg bg-[var(--surface-main)] border border-[var(--border-main)] space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>INTERNET</span>
                      <span className="text-[9px] text-[var(--text-secondary)] ml-auto">Allowed</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>STORAGE</span>
                      <span className="text-[9px] text-[var(--text-secondary)] ml-auto">Allowed</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>CAMERA</span>
                      <span className="text-[9px] text-rose-400 ml-auto">Not Requested</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>MICROPHONE</span>
                      <span className="text-[9px] text-rose-400 ml-auto">Not Requested</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Native Library Analysis */}
              <div className="p-3 rounded-lg bg-[#0A0C10] border border-[var(--border-main)]">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-orange-400">libapp.so</span>
                  <span className="text-emerald-400">Symbol Analysis: PASSED</span>
                </div>
                <div className="mt-1.5 text-[9px] font-mono text-[var(--text-secondary)] space-y-0.5">
                  <div>├── Exported Symbols: <span className="text-cyan-400">87</span></div>
                  <div>├── Imports Resolved: <span className="text-emerald-400">100%</span></div>
                  <div>└── Unencrypted Telemetry Vectors: <span className="text-emerald-400">0</span></div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="flex items-center gap-2 text-[9px] font-mono text-emerald-400 border-t border-[var(--border-main)] pt-3">
                <Fingerprint className="w-3.5 h-3.5" />
                <span>Certificate chain verified // SHA-256: 3A:7B:9F:2C:4D:8E:1A:5F</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TELEMETRY */}
        {activeTab === 'monitor' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-main)] pb-3">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>SYSTEM TELEMETRY // PERFORMANCE METRICS</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] border border-emerald-500/20">
                LIVE
              </span>
            </div>

            <div
              onMouseEnter={() => setTechHovered(true)}
              onMouseLeave={() => setTechHovered(false)}
              className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 space-y-4 transition-all duration-300 hover:border-emerald-500/40"
            >
              {/* CPU */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" /> THREAD WORKER POOL
                  </span>
                  <span className="text-emerald-400 font-semibold">4 / 4 CORES ACTIVE</span>
                </div>
                <div className="w-full h-2 bg-gray-700/20 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[var(--text-secondary)]">
                  <span>Core 0: 94%</span>
                  <span>Core 1: 87%</span>
                  <span>Core 2: 76%</span>
                  <span>Core 3: 82%</span>
                </div>
              </div>

              {/* Memory */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-secondary)]">Heap Memory Allocation</span>
                  <span className="text-[var(--text-primary)] font-medium">42.8 MB / 128 MB</span>
                </div>
                <div className="w-full h-2 bg-gray-700/20 rounded-full overflow-hidden">
                  <div className="w-[34%] h-full bg-cyan-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[var(--text-secondary)]">
                  <span>Used: 42.8 MB</span>
                  <span>Free: 85.2 MB</span>
                  <span>Peak: 56.3 MB</span>
                </div>
              </div>

              {/* Frame Rate */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-secondary)]">Frame Render Time</span>
                  <span className="text-emerald-400 font-medium">8.4 ms (120 FPS)</span>
                </div>
                <div className="w-full h-2 bg-gray-700/20 rounded-full overflow-hidden">
                  <div className="w-[18%] h-full bg-emerald-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[var(--text-secondary)]">
                  <span>Target: 16.7ms (60 FPS)</span>
                  <span className="text-emerald-400">Stable</span>
                </div>
              </div>

              {/* Network */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-secondary)]">Network Latency</span>
                  <span className="text-cyan-400 font-medium">14 ms</span>
                </div>
                <div className="w-full h-2 bg-gray-700/20 rounded-full overflow-hidden">
                  <div className="w-[5%] h-full bg-cyan-400 rounded-full" />
                </div>
              </div>

              {/* Technical Metadata - Reveal on Hover */}
              <div
                className={`pt-3 border-t border-[var(--border-main)] text-[10px] font-mono space-y-1 transition-all duration-300 ${
                  techHovered ? 'opacity-100 max-h-40' : 'opacity-50 max-h-12 overflow-hidden'
                }`}
              >
                <div className="text-cyan-400">[ENV] LINUX_X86_64 // JIT_AOT_READY</div>
                <div className="text-purple-400">[SEC] SIGNATURE_VERIFIED // ZERO_LEAKS</div>
                <div className="text-emerald-400">[NET] SOCKET_OPEN: 127.0.0.1:3000</div>
                <div className="text-amber-400">[CACHE] HIT_RATIO: 92.4%</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: UI PREVIEW */}
        {activeTab === 'preview' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-main)] pb-3">
              <Layers className="w-4 h-4 text-pink-400" />
              <span>UI PREVIEW // DESIGN SYSTEM</span>
              <span className="px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-400 text-[9px] border border-pink-500/20">
                FIGMA
              </span>
            </div>

            <div
              onMouseEnter={() => setUiHovered(true)}
              onMouseLeave={() => setUiHovered(false)}
              className="rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] p-5 transition-all duration-300 relative overflow-hidden hover:border-pink-500/40"
            >
              {/* UI/UX badge reveal on hover */}
              <div
                className={`absolute top-3 right-3 px-2.5 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-[10px] font-mono text-pink-300 transition-all duration-300 ${
                  uiHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-90'
                }`}
              >
                INTERACTIVE PREVIEW
              </div>

              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[var(--text-secondary)]">
                <Smartphone className="w-3.5 h-3.5 text-pink-400" />
                <span>StudyMate Mobile UI Frame (390×844)</span>
                <span className="ml-auto text-[9px] text-pink-400">v3.2.0</span>
              </div>

              {/* Simulated Clean Mobile Interface */}
              <div
                className={`max-w-xs mx-auto rounded-3xl border-2 border-[var(--border-main)] bg-[var(--surface-main)] p-4 shadow-xl space-y-3 transition-all duration-300 ${
                  uiHovered ? 'scale-[1.02] shadow-pink-500/10 border-pink-500/30' : ''
                }`}
              >
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-secondary)]">
                  <span className="font-bold text-[var(--text-primary)]">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px]">100%</span>
                    <div className="w-4 h-2 rounded-sm border border-[var(--border-main)] bg-emerald-400/30" />
                  </div>
                </div>

                {/* Header */}
                <div className="pt-1 border-t border-[var(--border-main)]">
                  <p className="text-[10px] uppercase font-mono text-pink-500 tracking-wider">Today's Focus</p>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">Algorithms &amp; Data Structures</h4>
                </div>

                {/* Mini task checklist */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border-main)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] font-medium">Dynamic Programming Practice</span>
                    <span className="ml-auto text-[9px] text-emerald-400 font-mono">DONE</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border-main)]">
                    <div className="w-4 h-4 rounded-full border-2 border-cyan-400" />
                    <span className="text-[11px] font-medium">Review System Architecture Notes</span>
                    <span className="ml-auto text-[9px] text-cyan-400 font-mono">IN PROGRESS</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-secondary)] text-[var(--text-secondary)] border border-[var(--border-main)] opacity-60">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
                    <span className="text-[11px]">Prepare Lab Report</span>
                    <span className="ml-auto text-[9px] text-gray-400 font-mono">PENDING</span>
                  </div>
                </div>

                {/* Pomodoro Timer Preview */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 text-center">
                  <span className="text-[10px] font-mono text-pink-400 uppercase tracking-wider block">POMODORO INTERVAL</span>
                  <span className="font-mono text-2xl font-bold text-cyan-300">24:48</span>
                  <div className="w-full h-1 mt-2 bg-gray-700/20 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full" />
                  </div>
                </div>

                {/* Bottom Navigation Preview */}
                <div className="flex justify-around pt-2 border-t border-[var(--border-main)]">
                  <span className="text-[9px] font-mono text-pink-400">Home</span>
                  <span className="text-[9px] font-mono text-[var(--text-secondary)]">Schedule</span>
                  <span className="text-[9px] font-mono text-[var(--text-secondary)]">Tasks</span>
                  <span className="text-[9px] font-mono text-[var(--text-secondary)]">Profile</span>
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