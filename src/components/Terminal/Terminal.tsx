import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface TerminalProps {
  initialCommand?: string;
  isInteractive?: boolean;
}

export default function Terminal({
  initialCommand = 'whoami',
  isInteractive = true
}: TerminalProps) {
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

  // Auto scroll ke bawah hanya di dalam terminal
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [history]);

  // Normalisasi command: project<name> -> project name
  const normalizeCommand = (cmd: string): string => {
    return cmd
      .toLowerCase()
      .replace(/project\s*[<[(]([^>\])]+)[>\])]/g, 'project $1') // project<name> -> project name
      .replace(/\s+/g, ' ')
      .trim();
  };

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    const rawInput = inputVal.trim();
    if (!rawInput) return;

    const trimmed = normalizeCommand(rawInput);

    let response: string[] = [];

    switch (trimmed) {
      case 'whoami':
        response = ['developer & software explorer', 'Focus: Flutter, React, UI/UX, Reverse Engineering'];
        break;

      case 'current_focus':
      case 'focus':
        response = [
          'App Development    - Flutter, Dart, SQLite',
          'Web Development    - React, TypeScript, Laravel',
          'UI/UX Design       - Figma, Design System, Prototyping',
          'Reverse Engineering - Python, Rust, APK Analysis'
        ];
        break;

      case 'status':
        response = [
          '> System: Online',
          '> Projects: 8 active repositories',
          '> Focus: Building portfolio & learning',
          '> Curiosity: High'
        ];
        break;

      case 'help':
        response = [
          'Available commands:',
          '  whoami          - Display developer identity',
          '  current_focus   - List active technology domains',
          '  status          - Check system & project status',
          '  projects        - List all featured projects',
          '  project <name>  - Show details of specific project',
          '  skills          - List technical skills',
          '  sudo            - Laboratory elevated mode',
          '  clear           - Clear terminal screen',
          '  about           - About this terminal'
        ];
        break;

      case 'projects':
        response = [
          'StudyMate            - Student Productivity Platform (Flutter)',
          'AirVista             - Air Quality Monitoring Platform (React)',
          'Sistem KRS           - Academic Course Planning System (Laravel)',
          'SmartInventory       - Inventory Management App (Flutter)',
          'NutriScan            - Food Nutrition Detection App (Flutter)',
          'SIMAHO UI/UX         - Student Information System Design (Figma)',
          'Apotek Online        - Online Pharmacy Management (PHP Native)',
          'NexusTrace           - APK & Binary Inspection (Rust/Python)'
        ];
        break;

      case 'project':
      case 'project studymate':
        response = [
          'StudyMate',
          '  +-- Student Productivity Platform',
          '  +-- Tech: Flutter, Dart, SQLite, Google Drive API',
          '  +-- Features: Schedule, Tasks, Pomodoro, Notes',
          '  +-- Status: Production Ready'
        ];
        break;

      case 'project airvista':
        response = [
          'AirVista',
          '  +-- Air Quality Monitoring Platform',
          '  +-- Tech: React, Vite, Express.js, Leaflet, Google Gemini AI',
          '  +-- Features: Realtime AQI, Interactive Map, AI Consultation',
          '  +-- Status: Live Demo Available'
        ];
        break;

      case 'project nexus-trace':
      case 'project nexustrace':
      case 'project nexus':
        response = [
          'NexusTrace',
          '  +-- APK & Binary Inspection Workbench',
          '  +-- Tech: Rust, Python, Radare2, Jadx Engine, Tauri',
          '  +-- Features: Manifest Audit, DEX Analysis, Native Lib Inspection',
          '  +-- Status: Research & Development'
        ];
        break;

      case 'project sistem-krs':
      case 'project skrs':
      case 'project krs':
        response = [
          'Sistem KRS',
          '  +-- Academic Course Planning System',
          '  +-- Tech: Laravel, PHP, MySQL, Bootstrap',
          '  +-- Features: Multi-role Login, KRS Submission, Academic Stats',
          '  +-- Status: Production Ready'
        ];
        break;

      case 'project smart-inventory':
      case 'project smartinventory':
      case 'project inventory':
      case 'project umkm':
        response = [
          'SmartInventory',
          '  +-- Inventory & Transaction Management App',
          '  +-- Tech: Flutter, Dart, SQLite, Provider',
          '  +-- Features: Daily Stats, Product Management, Transaction System',
          '  +-- Status: Production Ready'
        ];
        break;

      case 'project nutriscan':
      case 'project nutri':
        response = [
          'NutriScan',
          '  +-- Food Nutrition Detection App',
          '  +-- Tech: Flutter, Dart, TensorFlow Lite, SQLite, BLoC',
          '  +-- Features: Nutrition Stats, Food Scan, Daily Targets',
          '  +-- Status: Production Ready'
        ];
        break;

      case 'project simaho-uiux':
      case 'project simaho':
      case 'project simawa':
        response = [
          'SIMAHO UI/UX',
          '  +-- Student Information System Design',
          '  +-- Tech: Figma, UI/UX Design, Prototyping',
          '  +-- Features: Multi-role Login, Scholarship Info, Seminar Info',
          '  +-- Status: Design Complete'
        ];
        break;

      case 'project apotek-online':
      case 'project apotek':
        response = [
          'Apotek Online',
          '  +-- Online Pharmacy Management System',
          '  +-- Tech: PHP Native, MySQL, HTML, CSS, JavaScript',
          '  +-- Features: Multi-role Login, Medicine Management, Transactions',
          '  +-- Status: Production Ready'
        ];
        break;

      case 'skills':
        response = [
          'Frontend:    React, Flutter, HTML5, CSS3, Tailwind CSS',
          'Backend:     Laravel, PHP, MySQL, RESTful API',
          'Mobile:      Flutter, Dart, SQLite, TensorFlow Lite',
          'Tools:       Git, Figma, VS Code, Postman',
          'Research:    Reverse Engineering, APK Analysis, Binary Inspection'
        ];
        break;

      case 'sudo':
        response = [
          '> Access granted.',
          '> Welcome to the elevated lab.',
          '> System unlocked. Proceed with curiosity.'
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'about':
        response = [
          '+-------------------------------------------+',
          '|  DIGITAL LAB TERMINAL v2.0                 |',
          '|  Interactive workspace for portfolio       |',
          '|  Type "help" for available commands        |',
          '|  Built with React & TypeScript             |',
          '+-------------------------------------------+'
        ];
        break;

      default:
        // Cek apakah perintah dimulai dengan "project "
        if (trimmed.startsWith('project ')) {
          const projectName = trimmed.replace('project ', '');
          response = [
            'Project "' + projectName + '" not found.',
            'Available projects: studymate, airvista, nexus-trace, sistem-krs, smart-inventory, nutriscan, simaho-uiux, apotek-online',
            'Type "projects" to see all projects.'
          ];
        } else {
          response = ['Command not found: ' + trimmed + '. Type "help" for available commands.'];
        }
    }

    setHistory(prev => [...prev, { cmd: rawInput, output: response }]);
    setInputVal('');
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
            <TerminalIcon className="w-3 h-3 text-cyan-400" /> ~/workspace
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
        className="p-4 space-y-3 max-h-[400px] overflow-y-auto text-gray-300 select-text"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-gray-500">$</span>
              <span className="font-semibold text-cyan-300">{item.cmd}</span>
            </div>
            {item.output.map((line, lIdx) => (
              <p
                key={lIdx}
                className={`pl-4 leading-relaxed ${
                  line.startsWith('>')
                    ? 'text-emerald-400 font-semibold'
                    : line.includes('not found')
                    ? 'text-rose-400'
                    : line.includes('+--') || line.includes('|') || line.includes('+--')
                    ? 'text-cyan-400'
                    : 'text-gray-300'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        ))}

        {/* Active Input Line */}
        {isInteractive && (
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-gray-500 select-none">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="type 'help' for available commands..."
              className="flex-1 bg-transparent text-cyan-300 placeholder:text-gray-600 outline-none border-none font-mono text-xs"
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