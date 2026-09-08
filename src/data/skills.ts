import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'app-dev',
    title: 'APP DEVELOPMENT',
    subtitle: 'Mobile Architecture & Offline Systems',
    description: 'Building functional, responsive and reliable mobile applications with cross-platform frameworks, robust local persistence, and background task resilience.',
    technologies: [
      'Flutter',
      'Dart',
      'Android SDK',
      'SQLite',
      'REST API',
      'Local Storage',
      'State Management (Provider/Riverpod)',
      'Background Services',
      'Offline Sync'
    ],
    focusAreas: [
      'Offline-First Architecture',
      'Battery & Memory Optimization',
      'Smooth 60 FPS UI Rendering',
      'Native Hardware & Sensor Access',
      'Local Cache & Relational Schemas'
    ],
    visualType: 'smartphone'
  },
  {
    id: 'web-dev',
    title: 'WEB DEVELOPMENT',
    subtitle: 'Modern Frontend & Component Systems',
    description: 'Creating responsive web experiences with modern frontend technologies, type-safe architectures, and performance-oriented design patterns.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript (ESNext)',
      'HTML5 & Semantic Web',
      'Tailwind CSS',
      'Vite & Tooling',
      'REST & GraphQL APIs',
      'Git & GitHub Workflows',
      'State Architecture'
    ],
    focusAreas: [
      'Predictable Component Lifecycles',
      'Web Performance & Core Web Vitals',
      'Responsive & Mobile-First Layouts',
      'High-Accessibility (WCAG AA Standards)',
      'Bundle Size & Asset Optimization'
    ],
    visualType: 'browser'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX DESIGN',
    subtitle: 'Interface Engineering & Human Interaction',
    description: 'Designing interfaces that balance usability, clarity and visual consistency across varying viewport scales and user mental models.',
    technologies: [
      'Figma',
      'Design Tokens',
      'Wireframing & Prototyping',
      'Typography Hierarchy',
      'Color Theory & Contrast',
      'Responsive Grids',
      'Micro-interactions',
      'Usability Heuristics'
    ],
    focusAreas: [
      'User Flow & Navigation Ergonomics',
      'Mathematical Spacing & Scaling Rules',
      'Cognitive Load Reduction',
      'Design System Documentation',
      'Rapid High-Fidelity Prototyping'
    ],
    visualType: 'design_board'
  },
  {
    id: 'reverse-eng',
    title: 'REVERSE ENGINEERING',
    subtitle: 'Software Analysis & Systems Exploration',
    description: 'Exploring how software works internally through structured analysis, auditing architectures, binary inspection, and educational debugging.',
    technologies: [
      'Static Analysis',
      'Dynamic Analysis',
      'APK Structure & Manifest Audit',
      'DEX Bytecode & Smali',
      'Binary Inspection (Radare2/Ghidra basics)',
      'Network Traffic Analysis (Wireshark/Mitmproxy)',
      'Android Runtime (ART) Internals',
      'Code Understanding'
    ],
    focusAreas: [
      'Application Security Fundamentals',
      'Decompilation & Disassembly Interpretation',
      'Permission Surface Audit',
      'Encrypted Storage & Cryptographic Verification',
      'Educational System Vulnerability Research'
    ],
    visualType: 'debug_panel'
  }
];

export const labInspectionData = {
  application: 'StudyMate.apk',
  package: 'com.example.app',
  architecture: 'Flutter / Native ARM64',
  version: 'v1.2.0-release',
  checksum: 'sha256: 4f9b8c7e1a2d3e4f5a6b7c8d9e0f1a2b',
  components: [
    { name: 'Android Container', status: 'Verified', details: 'Target SDK 34, Min SDK 24' },
    { name: 'Dart VM Runtime', status: 'Compiled', details: 'AOT Snapshot (libapp.so)' },
    { name: 'SQLite Storage', status: 'Encrypted', details: 'AES-256 local database layer' },
    { name: 'Asset Archive', status: 'Optimized', details: '3.4 MB compressed resources' }
  ],
  staticAnalysis: [
    { label: 'Resources', status: 'passed', note: 'Standard layout and drawable structure without leaked credentials' },
    { label: 'Manifest', status: 'passed', note: 'Minimum required permissions: SCHEDULE_EXACT_ALARM, INTERNET' },
    { label: 'Assets', status: 'passed', note: 'Font files and SVG assets stripped of unused metadata' },
    { label: 'Exported Components', status: 'passed', note: 'MainActivity not exported; no exposed internal BroadcastReceivers' }
  ],
  dynamicAnalysis: [
    { label: 'Runtime Lifecycle', status: 'passed', note: 'Graceful suspend/resume transitions under Android doze mode' },
    { label: 'Network Activity', status: 'passed', note: 'TLS 1.3 enforced for Google Drive OAuth token exchange' },
    { label: 'Behavioral Sandbox', status: 'passed', note: 'Zero unauthorized background file access outside app-specific storage' }
  ]
};
