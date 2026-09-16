import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TerminalProps {
  initialCommand?: string;
  isInteractive?: boolean;
  onOpenCV?: () => void;
  onClose?: () => void;
}

export default function Terminal({
  initialCommand = 'whoami',
  isInteractive = true,
  onOpenCV,
  onClose,
}: TerminalProps) {
  const navigate = useNavigate();
  const [history, setHistory] = useState<Array<{ cmd: string; output: string[] }>>([
    {
      cmd: 'whoami',
      output: ['developer & software explorer']
    },
    {
      cmd: 'current_focus',
      output: ['app-development', 'web-development', 'uiux', 'reverse-engineering']
    },
    {
      cmd: 'status',
      output: ['building...', 'systems: online', 'curiosity: active']
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [history]);

  // Auto focus
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Normalisasi command
  const normalizeCommand = (cmd: string): string => {
    return cmd
      .toLowerCase()
      .replace(/project\s*[<[(]([^>\])]+)[>\])]/g, 'project $1')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    const rawInput = inputVal.trim();
    if (!rawInput) return;

    const trimmed = normalizeCommand(rawInput);

    let response: string[] = [];
    let shouldNavigate = false;
    let navigateTo = '';

    switch (trimmed) {
      case 'whoami':
        response = [
          'DEVELOPER IDENTITY',
          '─────────────────────────────────',
          'Name     : Muhammad Alfarizi',
          'Role     : Software & Web Developer',
          'Focus    : Flutter · React · UI/UX · RE',
          'Status   : Available for Projects',
        ];
        break;

      case 'current_focus':
      case 'focus':
        response = [
          'ACTIVE TECHNOLOGY DOMAINS',
          '─────────────────────────────────',
          '',
          'App Development',
          '  Flutter · Dart · SQLite',
          '',
          'Web Development',
          '  React · TypeScript · Laravel',
          '',
          'UI/UX Design',
          '  Figma · Design System · Prototype',
          '',
          'Reverse Engineering',
          '  Python · Rust · APK Analysis',
        ];
        break;

      case 'status':
        response = [
          'SYSTEM STATUS',
          '─────────────────────────────────',
          '● System      : Online',
          '● Projects    : 8 active repositories',
          '● Focus       : Building portfolio',
          '● Curiosity   : High',
          '● Uptime      : 99.9%',
        ];
        break;

      case 'help':
        response = [
          'AVAILABLE COMMANDS',
          '─────────────────────────────────',
          '',
          'NAVIGATION',
          '  home            Go to home page',
          '  about           Go to about page',
          '  contact         Go to contact page',
          '  skills          List technical skills',
          '',
          'PROJECTS',
          '  projects        List all projects',
          '  project <name>  Show project details',
          '  open <name>     Open project page',
          '',
          'ACTIONS',
          '  cv              Open Curriculum Vitae',
          '  clear           Clear terminal screen',
          '  close           Close terminal',
          '',
          'INFO',
          '  whoami          Developer identity',
          '  current_focus   Active tech domains',
          '  status          System status',
          '  sudo            Elevated mode',
          '  info            Info this terminal',
        ];
        break;

      case 'home':
        response = ['> Navigating to home page...'];
        shouldNavigate = true;
        navigateTo = '/';
        break;

      case 'about':
        response = ['> Opening about page...'];
        shouldNavigate = true;
        navigateTo = '/about';
        break;

      case 'contact':
        response = ['> Opening contact page...'];
        shouldNavigate = true;
        navigateTo = '/contact';
        break;

      case 'cv':
        response = ['> Opening Curriculum Vitae...'];
        setTimeout(() => {
          onOpenCV?.();
        }, 300);
        break;

      case 'close':
      case 'exit':
        response = ['> Closing terminal session...'];
        setTimeout(() => {
          onClose?.();
        }, 300);
        break;

      case 'projects':
        response = [
          'PROJECT LABORATORY (8)',
          '─────────────────────────────────',
          '',
          '#01  StudyMate',
          '     Student Productivity · Flutter',
          '',
          '#02  AirVista',
          '     Air Quality Monitoring · React',
          '',
          '#03  Sistem KRS',
          '     Course Planning · Laravel',
          '',
          '#04  SmartInventory',
          '     Inventory Management · Flutter',
          '',
          '#05  NutriScan',
          '     Food Nutrition Detection · Flutter',
          '',
          '#06  Simawa UI/UX',
          '     Student Info System · Figma',
          '',
          '#07  Apotek Online',
          '     Pharmacy Management · PHP',
          '',
          '#08  NexusTrace',
          '     APK Binary Inspection · Rust',
          '',
          'Use "project <name>" for details',
          'Use "open <name>" to view project',
        ];
        break;

      case 'project':
      case 'project studymate':
        response = [
          'PROJECT: StudyMate',
          '─────────────────────────────────',
          'Category  : App Development',
          'Tagline   : Student Productivity',
          'Role      : Mobile Developer',
          'Status    : Production Ready',
          '',
          'TECH STACK',
          '  Flutter · Dart · SQLite',
          '  Google Drive API · Provider',
          '',
          'KEY FEATURES',
          '  - Interactive Academic Schedule',
          '  - Task & Assignment Management',
          '  - Markdown-powered Notes System',
          '  - Pomodoro Focus Timer',
          '',
          '> open studymate  (full case study)',
        ];
        break;

      case 'project airvista':
        response = [
          'PROJECT: AirVista',
          '─────────────────────────────────',
          'Category  : Web Development',
          'Tagline   : Air Quality Monitoring',
          'Role      : Web Developer',
          'Status    : Live Demo Available',
          '',
          'TECH STACK',
          '  React · Vite · Express.js',
          '  Leaflet · Google Gemini AI',
          '',
          'KEY FEATURES',
          '  - Realtime AQI Monitoring',
          '  - Interactive Geospatial Map',
          '  - AI-powered Consultation',
          '  - Satellite Data Integration',
          '',
          '> open airvista  (full case study)',
        ];
        break;

      case 'project nexus-trace':
      case 'project nexustrace':
      case 'project nexus':
        response = [
          'PROJECT: NexusTrace',
          '─────────────────────────────────',
          'Category  : Reverse Engineering',
          'Tagline   : APK Binary Inspection',
          'Role      : Researcher',
          'Status    : Research & Development',
          '',
          'TECH STACK',
          '  Rust · Python · Radare2',
          '  Jadx Engine · Tauri',
          '',
          'KEY FEATURES',
          '  - AndroidManifest Permission Audit',
          '  - DEX String Table Extraction',
          '  - Native Library Inspection',
          '  - Entropy Analysis',
          '',
          '> open nexus-trace  (full case study)',
        ];
        break;

      case 'project sistem-krs':
      case 'project skrs':
      case 'project krs':
        response = [
          'PROJECT: Sistem KRS',
          '─────────────────────────────────',
          'Category  : Web Development',
          'Tagline   : Academic Course Planning',
          'Role      : Web Developer',
          'Status    : Production Ready',
          '',
          'TECH STACK',
          '  Laravel · PHP · MySQL',
          '  Bootstrap · JavaScript',
          '',
          'KEY FEATURES',
          '  - Multi-role Login (Student/Lecturer)',
          '  - KRS Submission by Semester',
          '  - Academic Statistics Dashboard',
          '  - Approval Workflow',
          '',
          '> open sistem-krs  (full case study)',
        ];
        break;

      case 'project smart-inventory':
      case 'project smartinventory':
      case 'project inventory':
      case 'project umkm':
        response = [
          'PROJECT: SmartInventory',
          '─────────────────────────────────',
          'Category  : App Development',
          'Tagline   : Inventory & Transaction',
          'Role      : Mobile Developer',
          'Status    : Production Ready',
          '',
          'TECH STACK',
          '  Flutter · Dart · SQLite · Provider',
          '',
          'KEY FEATURES',
          '  - Daily Statistics Dashboard',
          '  - Product Management (CRUD)',
          '  - Buy & Sell Transaction System',
          '  - Supplier Management',
          '',
          '> open smart-inventory  (full case study)',
        ];
        break;

      case 'project nutriscan':
      case 'project nutri':
        response = [
          'PROJECT: NutriScan',
          '─────────────────────────────────',
          'Category  : App Development',
          'Tagline   : Food Nutrition Detection',
          'Role      : Mobile Developer',
          'Status    : Production Ready',
          '',
          'TECH STACK',
          '  Flutter · Dart · TensorFlow Lite',
          '  SQLite · BLoC',
          '',
          'KEY FEATURES',
          '  - Nutrition Stats Dashboard',
          '  - AI Food Scan (TFLite)',
          '  - Daily Nutrition Targets',
          '  - Nutrition Education Content',
          '',
          '> open nutriscan  (full case study)',
        ];
        break;

      case 'project Simawa-uiux':
      case 'project Simawa':
      case 'project simawa':
        response = [
          'PROJECT: Simawa UI/UX',
          '─────────────────────────────────',
          'Category  : UI/UX Design',
          'Tagline   : Student Information System',
          'Role      : UI/UX Designer',
          'Status    : Design Complete',
          '',
          'TECH STACK',
          '  Figma · UI/UX Design · Prototyping',
          '',
          'KEY FEATURES',
          '  - Multi-role Login Design',
          '  - Scholarship Information',
          '  - Seminar & Event Calendar',
          '  - Design System Components',
          '',
          '> open Simawa-uiux  (full case study)',
        ];
        break;

      case 'project apotek-online':
      case 'project apotek':
        response = [
          'PROJECT: Apotek Online',
          '─────────────────────────────────',
          'Category  : Web Development',
          'Tagline   : Pharmacy Management',
          'Role      : Web Developer',
          'Status    : Production Ready',
          '',
          'TECH STACK',
          '  PHP Native · MySQL · HTML/CSS/JS',
          '',
          'KEY FEATURES',
          '  - Multi-role (Staff/Customer)',
          '  - Medicine Management (CRUD)',
          '  - Online Purchase & Consultation',
          '  - Monthly Reports & Analytics',
          '',
          '> open apotek-online  (full case study)',
        ];
        break;

      case 'open studymate':
        response = ['> Opening StudyMate case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/studymate';
        break;

      case 'open airvista':
        response = ['> Opening AirVista case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/airvista';
        break;

      case 'open nexus-trace':
      case 'open nexustrace':
      case 'open nexus':
        response = ['> Opening NexusTrace case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/nexus-trace';
        break;

      case 'open sistem-krs':
      case 'open skrs':
      case 'open krs':
        response = ['> Opening Sistem KRS case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/sistem-krs';
        break;

      case 'open smart-inventory':
      case 'open smartinventory':
      case 'open umkm':
        response = ['> Opening SmartInventory case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/smart-inventory';
        break;

      case 'open nutriscan':
        response = ['> Opening NutriScan case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/nutriscan';
        break;

      case 'open Simawa-uiux':
      case 'open Simawa':
      case 'open simawa':
        response = ['> Opening Simawa UI/UX case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/Simawa-uiux';
        break;

      case 'open apotek-online':
      case 'open apotek':
        response = ['> Opening Apotek Online case study...'];
        shouldNavigate = true;
        navigateTo = '/projects/apotek-online';
        break;

      case 'open projects':
        response = ['> Opening Projects Laboratory...'];
        shouldNavigate = true;
        navigateTo = '/projects';
        break;

      case 'open skills':
        response = ['> Opening Technical Laboratory...'];
        shouldNavigate = true;
        navigateTo = '/skills';
        break;

      case 'open':
        response = [
          'OPEN COMMAND USAGE',
          '─────────────────────────────────',
          'Usage: open <target>',
          '',
          'PAGES',
          '  open projects     Projects Laboratory',
          '  open skills       Technical Laboratory',
          '',
          'PROJECTS',
          '  open studymate',
          '  open airvista',
          '  open nexus-trace',
          '  open sistem-krs',
          '  open smart-inventory',
          '  open nutriscan',
          '  open Simawa-uiux',
          '  open apotek-online',
        ];
        break;

      case 'skills':
        response = [
          'TECHNICAL SKILLS',
          '─────────────────────────────────',
          '',
          'FRONTEND',
          '  React · Flutter · HTML5 · CSS3',
          '  Tailwind CSS',
          '',
          'BACKEND',
          '  Laravel · PHP · MySQL',
          '  RESTful API · Sanctum',
          '',
          'MOBILE',
          '  Flutter · Dart · SQLite',
          '  TensorFlow Lite',
          '',
          'TOOLS',
          '  Git · Figma · VS Code · Postman',
          '',
          'RESEARCH',
          '  Reverse Engineering',
          '  APK Analysis · Binary Inspection',
          '',
          '> open skills  (full technical lab)',
        ];
        break;

      case 'sudo':
        response = [
          'ELEVATED MODE',
          '─────────────────────────────────',
          '',
          '> Access granted.',
          '> Welcome to the elevated lab.',
          '> System unlocked.',
          '> Proceed with curiosity.',
        ];
        break;
      
      case 'info':
      case 'terminal':
        response = [
          'DIGITAL LAB TERMINAL',
          '─────────────────────────────────',
          'Version  : 2.0.4',
          'Built    : React 19 & TypeScript',
          '',
          'Interactive workspace for portfolio.',
          'Type "help" for available commands.',
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        if (trimmed.startsWith('project ')) {
          const projectName = trimmed.replace('project ', '');
          response = [
            'PROJECT NOT FOUND',
            '─────────────────────────────────',
            `"${projectName}" was not found.`,
            '',
            'Available projects:',
            '  studymate         ·  airvista',
            '  nexus-trace       ·  sistem-krs',
            '  smart-inventory   ·  nutriscan',
            '  Simawa-uiux       ·  apotek-online',
            '',
            'Type "projects" to see all projects.',
          ];
        } else if (trimmed.startsWith('open ')) {
          const target = trimmed.replace('open ', '');
          response = [
            'CANNOT OPEN',
            '─────────────────────────────────',
            `Target "${target}" is not valid.`,
            '',
            'Type "open" to see available targets.',
          ];
        } else {
          response = [
            'COMMAND NOT FOUND',
            '─────────────────────────────────',
            `"${trimmed}" is not a valid command.`,
            '',
            'Type "help" to see all commands.',
          ];
        }
    }

    setHistory(prev => [...prev, { cmd: rawInput, output: response }]);
    setInputVal('');

    if (shouldNavigate) {
      setTimeout(() => {
        navigate(navigateTo);
        onClose?.();
      }, 400);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full rounded-xl border border-[var(--border-main)] bg-[#0A0C10] shadow-xl overflow-hidden font-mono text-xs transition-all duration-300 hover:border-cyan-500/40"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#12151B] border-b border-[var(--border-main)] select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-[11px] text-gray-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3 h-3 text-cyan-400" /> lab@console — ~/workspace
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>bash 5.2</span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div
        ref={terminalContainerRef}
        className="p-4 space-y-3 max-h-[400px] overflow-y-auto text-gray-300 select-text scrollbar-thin scrollbar-thumb-[#242830]"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {/* Command Line */}
            <div className="flex items-center gap-1.5 text-cyan-400 flex-wrap">
              <span className="text-emerald-400 font-semibold">lab@console</span>
              <span className="text-gray-500">:</span>
              <span className="text-purple-400">~/workspace</span>
              <span className="text-gray-500">$</span>
              <span className="font-semibold text-cyan-300">{item.cmd}</span>
            </div>

            {/* Output Lines */}
            {item.output.map((line, lIdx) => {
              const trimmedLine = line.trim();
              const isEmpty = trimmedLine === '';
              const isSeparator = /^─+$/.test(trimmedLine);
              const isSectionHeader =
                trimmedLine.length > 0 &&
                trimmedLine === trimmedLine.toUpperCase() &&
                /^[A-Z][A-Z0-9\s/&·()#\-]+$/.test(trimmedLine) &&
                !trimmedLine.startsWith('#') &&
                !isSeparator;
              const isNumbered = /^#\d{2}/.test(trimmedLine);
              const isActionHint = trimmedLine.startsWith('>');
              const isInfoRow = /^[A-Z][a-z]+\s+:/.test(trimmedLine);
              const isBullet = /^\s*-\s/.test(line);

              // Empty line - render as small spacer
              if (isEmpty) {
                return <div key={lIdx} className="h-2" />;
              }

              // Separator line
              if (isSeparator) {
                return (
                  <p
                    key={lIdx}
                    className="text-cyan-500/40 leading-relaxed whitespace-pre overflow-hidden text-ellipsis"
                  >
                    {line}
                  </p>
                );
              }

              // Section header
              if (isSectionHeader) {
                return (
                  <p
                    key={lIdx}
                    className="text-cyan-400 font-bold leading-relaxed whitespace-pre-wrap break-words"
                  >
                    {line}
                  </p>
                );
              }

              // Numbered item
              if (isNumbered) {
                return (
                  <p
                    key={lIdx}
                    className="text-cyan-400 font-semibold leading-relaxed whitespace-pre-wrap break-words"
                  >
                    {line}
                  </p>
                );
              }

              // Action hint
              if (isActionHint) {
                return (
                  <p
                    key={lIdx}
                    className="text-emerald-400 leading-relaxed whitespace-pre-wrap break-words pl-1"
                  >
                    {line}
                  </p>
                );
              }

              // Info row (Key : Value)
              if (isInfoRow) {
                return (
                  <p
                    key={lIdx}
                    className="text-gray-300 leading-relaxed whitespace-pre-wrap break-words"
                  >
                    {line}
                  </p>
                );
              }

              // Bullet item
              if (isBullet) {
                return (
                  <p
                    key={lIdx}
                    className="text-gray-400 leading-relaxed whitespace-pre-wrap break-words pl-2"
                  >
                    {line}
                  </p>
                );
              }

              // Default line (indented sub-info, etc.)
              return (
                <p
                  key={lIdx}
                  className="text-gray-400 leading-relaxed whitespace-pre-wrap break-words"
                >
                  {line}
                </p>
              );
            })}
          </div>
        ))}

        {/* Active Input Line */}
        {isInteractive && (
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-1.5 pt-1 flex-wrap">
            <span className="text-emerald-400 font-semibold select-none">lab@console</span>
            <span className="text-gray-500 select-none">:</span>
            <span className="text-purple-400 select-none">~/workspace</span>
            <span className="text-gray-500 select-none">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="type 'help' for commands..."
              className="flex-1 min-w-[150px] bg-transparent text-cyan-300 placeholder:text-gray-600 outline-none border-none font-mono text-xs"
              autoFocus
            />
            <span
              className={`w-1.5 h-3.5 bg-cyan-400 ${
                isHovered ? 'animate-pulse' : 'opacity-80'
              }`}
            />
          </form>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Bottom status hint */}
      <div className="px-3.5 py-1.5 bg-[#0e1014] border-t border-[#1e222a] flex items-center justify-between text-[10px] text-gray-500 select-none">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-500" /> Interactive Session
        </span>
        <span>UTF-8 // ACTIVE</span>
      </div>
    </div>
  );
}