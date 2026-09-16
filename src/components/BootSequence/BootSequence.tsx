// src/components/BootSequence/BootSequence.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Zap, CheckCircle2, Loader2, Power, Database, Shield, Radio, HardDrive, Network, Microchip } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

interface BootModule {
  label: string;
  status: 'loading' | 'ok' | 'warn' | 'ready';
  icon: React.ReactNode;
  delay: number;
}

// ============================================================
// ⚙️ KONFIGURASI DURASI
// ============================================================
const BOOT_MODULES: BootModule[] = [
  { label: 'BIOS', status: 'loading', icon: <Microchip className="w-4 h-4" />, delay: 400 },
  { label: 'CPU', status: 'ok', icon: <Cpu className="w-4 h-4" />, delay: 350 },
  { label: 'MEMORY', status: 'ok', icon: <HardDrive className="w-4 h-4" />, delay: 300 },
  { label: 'STORAGE', status: 'ok', icon: <Database className="w-4 h-4" />, delay: 350 },
  { label: 'NETWORK', status: 'ok', icon: <Network className="w-4 h-4" />, delay: 300 },
  { label: 'SECURITY', status: 'ok', icon: <Shield className="w-4 h-4" />, delay: 400 },
  { label: 'SENSORS', status: 'ok', icon: <Radio className="w-4 h-4" />, delay: 350 },
  { label: 'POWER', status: 'warn', icon: <Zap className="w-4 h-4" />, delay: 300 },
  { label: 'READY', status: 'ready', icon: <Power className="w-4 h-4" />, delay: 500 },
];

const COMPLETION_DELAY = 1000;
const EXIT_DURATION = 1.2;
const INITIAL_DELAY = 600;

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('Initializing...');
  const hasCompletedRef = useRef(false);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const messages = [
    'Initializing Digital Lab System...',
    'Checking CPU cores and architecture...',
    'Allocating memory blocks...',
    'Mounting storage volumes...',
    'Establishing network connection...',
    'Verifying security protocols...',
    'Calibrating sensor array...',
    'Power level low - refill recommended',
    'All systems operational',
    'Welcome to Muhammad Alfarizi\'s Lab',
  ];

  const completeBoot = () => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setIsComplete(true);

    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
    }

    exitTimeoutRef.current = setTimeout(() => {
      onComplete();
    }, EXIT_DURATION * 1000 + 100);
  };

  const handleSkip = () => {
    completeBoot();
  };

  // Show skip button
  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animasi modules
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const next = () => {
      if (currentIndex >= BOOT_MODULES.length) {
        timeoutId = setTimeout(() => {
          completeBoot();
        }, COMPLETION_DELAY);
        return;
      }

      const module = BOOT_MODULES[currentIndex];
      setActiveIndex(currentIndex);
      setCurrentMessage(messages[Math.min(currentIndex, messages.length - 1)]);
      setProgress(Math.round(((currentIndex + 1) / BOOT_MODULES.length) * 100));
      currentIndex++;

      timeoutId = setTimeout(next, module.delay);
    };

    timeoutId = setTimeout(next, INITIAL_DELAY);

    return () => {
      clearTimeout(timeoutId);
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  // Helper untuk warna status
  const getStatusColor = (status: BootModule['status']) => {
    switch (status) {
      case 'ok':
        return {
          text: 'text-emerald-400',
          border: 'border-emerald-500/40',
          bg: 'bg-emerald-500/10',
        };
      case 'warn':
        return {
          text: 'text-amber-400',
          border: 'border-amber-500/40',
          bg: 'bg-amber-500/10',
        };
      case 'ready':
        return {
          text: 'text-cyan-400',
          border: 'border-cyan-500/40',
          bg: 'bg-cyan-500/10',
        };
      case 'loading':
      default:
        return {
          text: 'text-gray-400',
          border: 'border-gray-500/40',
          bg: 'bg-gray-500/10',
        };
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="boot-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: EXIT_DURATION,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050608]"
        >
          {/* ============================================
              BACKGROUND LAYER
              ============================================ */}

          {/* Base Background */}
          <div className="absolute inset-0 bg-[#050608]" />

          {/* Grid Pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_DURATION * 0.6 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #06B6D4 1px, transparent 1px),
                linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, transparent 0%, rgba(5, 6, 8, 0.8) 60%, #050608 100%)',
            }}
          />

          {/* Subtle Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_DURATION * 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 60%)',
            }}
          />

          {/* Horizontal Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #06B6D4 0px, #06B6D4 1px, transparent 1px, transparent 3px)',
            }}
          />

          {/* ============================================
              DECORATIVE ELEMENTS
              ============================================ */}

          {/* Corner Accents - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-500/40 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 -translate-x-1 -translate-y-1" />
          </motion.div>

          {/* Corner Accents - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-cyan-500/40 pointer-events-none"
          >
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400 translate-x-1 -translate-y-1" />
          </motion.div>

          {/* Corner Accents - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-purple-500/40 pointer-events-none"
          >
            <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-purple-400 -translate-x-1 translate-y-1" />
          </motion.div>

          {/* Corner Accents - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-purple-500/40 pointer-events-none"
          >
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-purple-400 translate-x-1 translate-y-1" />
          </motion.div>

          {/* Side Labels - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 font-mono text-[10px] text-gray-600 pointer-events-none"
            style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
          >
            <span className="tracking-widest">DIGITAL LAB // SYSTEM BOOT v2.0.4</span>
            <span className="tracking-widest text-cyan-500/50">
              SECURE CONNECTION ESTABLISHED
            </span>
          </motion.div>

          {/* Side Labels - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 font-mono text-[10px] text-gray-600 pointer-events-none"
            style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
          >
            <span className="tracking-widest">SYSTEM INITIALIZATION IN PROGRESS</span>
            <span className="tracking-widest text-purple-500/50">
              KERNEL: REACT-19 · VITE-6
            </span>
          </motion.div>

          {/* Top Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 font-mono text-[10px] text-gray-500 pointer-events-none"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400/80">ONLINE</span>
            </span>
            <span className="text-gray-700">|</span>
            <span>BIOS v2.0.4</span>
            <span className="text-gray-700">|</span>
            <span>UTF-8</span>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                y: [0, -100, -200],
                x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: 'easeOut',
              }}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/40 pointer-events-none"
              style={{
                left: `${15 + i * 14}%`,
                bottom: '10%',
              }}
            />
          ))}

          {/* ============================================
              MAIN CONTENT
              ============================================ */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.95,
              filter: 'blur(8px)',
              transition: {
                duration: EXIT_DURATION,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="relative w-full max-w-4xl px-6 z-10"
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* ============================================
                CENTRAL CORE
                ============================================ */}
            <div className="flex justify-center mb-8">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Outer Ring 1 - Rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/15"
                >
                  {[0, 90, 180, 270].map((angle) => (
                    <div
                      key={angle}
                      className="absolute w-1 h-3 rounded-full bg-cyan-500/30"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateY(-128px) translateX(-50%)`,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Outer Ring 2 - Counter Rotating */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-6 rounded-full border border-purple-500/15"
                >
                  {[45, 135, 225, 315].map((angle) => (
                    <div
                      key={angle}
                      className="absolute w-1 h-2 rounded-full bg-purple-500/30"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateY(-104px) translateX(-50%)`,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 224 224">
                  <circle
                    cx="112"
                    cy="112"
                    r="98"
                    fill="none"
                    stroke="#1A1D24"
                    strokeWidth="2"
                  />
                  {[...Array(36)].map((_, i) => {
                    const angle = (i * 10) * (Math.PI / 180);
                    const x1 = 112 + 94 * Math.cos(angle);
                    const y1 = 112 + 94 * Math.sin(angle);
                    const x2 = 112 + 90 * Math.cos(angle);
                    const y2 = 112 + 90 * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#242830"
                        strokeWidth="1"
                      />
                    );
                  })}
                  <motion.circle
                    cx="112"
                    cy="112"
                    r="98"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={616}
                    animate={{ strokeDashoffset: 616 - (616 * progress) / 100 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))',
                    }}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Inner Core */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-cyan-500/30 flex items-center justify-center"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(6, 182, 212, 0.12) 0%, rgba(5, 6, 8, 0.95) 70%)',
                  }}
                >
                  <div className="absolute inset-0 rounded-full blur-lg bg-cyan-500/5" />

                  <div className="relative text-center">
                    <div className="text-4xl sm:text-5xl font-bold font-mono tabular-nums leading-none text-cyan-400">
                      {progress}
                      <span className="text-xl sm:text-2xl text-cyan-400/60">%</span>
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest mt-2 text-cyan-500/60">
                      BOOTING
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting Dots */}
                {[0, 90, 180, 270].map((startAngle, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div
                      className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${startAngle}deg) translateY(-100px)`,
                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Message */}
            <div className="text-center mb-6">
              <motion.div
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xs sm:text-sm text-cyan-400"
              >
                <span className="text-gray-600">$</span>{' '}
                <span className="text-cyan-300">{currentMessage}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1.5 h-3.5 ml-1 align-middle bg-cyan-400"
                />
              </motion.div>
            </div>

            {/* ============================================
                MODULE INDICATOR - ENHANCED
                ============================================ */}
            <div className="relative py-2">
              {/* Base Track - Full Width */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#1A1D24] rounded-full" />

              {/* Tick Marks - Background */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 flex justify-between pointer-events-none">
                {BOOT_MODULES.map((_, idx) => (
                  <div
                    key={`tick-${idx}`}
                    className="w-[2px] h-3 bg-[#242830] rounded-full -translate-y-1/2"
                  />
                ))}
              </div>

              {/* Progress Track - Animated Fill */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 overflow-hidden rounded-full">
                <motion.div
                  className="h-full rounded-full relative"
                  animate={{
                    width: `${(Math.max(0, activeIndex) / (BOOT_MODULES.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: 'linear-gradient(90deg, #06B6D4 0%, #14B8A6 50%, #10B981 100%)',
                    boxShadow: '0 0 12px rgba(6, 182, 212, 0.8), 0 0 24px rgba(6, 182, 212, 0.4)',
                  }}
                >
                  {/* Animated Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Pulsing Glow at the Tip */}
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(6, 182, 212, 0.9) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </div>

              {/* Glowing Dot Particles on Track - Behind active */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 flex justify-between pointer-events-none">
                {BOOT_MODULES.map((_, idx) => {
                  const isDone = idx < activeIndex;
                  const isActive = idx === activeIndex;
                  const progressPercent = (idx / (BOOT_MODULES.length - 1)) * 100;
                  const fillPercent = (Math.max(0, activeIndex) / (BOOT_MODULES.length - 1)) * 100;
                  const isCovered = progressPercent <= fillPercent;

                  return (
                    <motion.div
                      key={`dot-${idx}`}
                      className="w-2 h-2 rounded-full -translate-y-1/2 relative z-10"
                      animate={{
                        backgroundColor: isCovered || isDone
                          ? '#06B6D4'
                          : isActive
                          ? '#06B6D4'
                          : '#242830',
                        boxShadow: isCovered || isActive
                          ? '0 0 8px rgba(6, 182, 212, 0.8)'
                          : '0 0 0 rgba(6, 182, 212, 0)',
                        scale: isActive ? 1.5 : 1,
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  );
                })}
              </div>

              {/* Modules Row */}
              <div className="relative flex items-center justify-between gap-1 sm:gap-2 mt-6">
                {BOOT_MODULES.map((module, idx) => {
                  const isActive = idx === activeIndex;
                  const isDone = idx < activeIndex;
                  const isPending = idx > activeIndex;
                  const statusColors = getStatusColor(module.status);

                  return (
                    <motion.div
                      key={module.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isPending ? 0.3 : 1,
                        y: 0,
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center gap-2 flex-1 min-w-0"
                    >
                      <div className="relative">
                        {isActive && (
                          <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-cyan-400"
                          />
                        )}

                        <div
                          className={`
                            relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                            border-2 transition-all duration-300
                            ${
                              isActive
                                ? `${statusColors.border} ${statusColors.bg} ${statusColors.text} shadow-lg`
                                : isDone
                                ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-400'
                                : 'border-gray-700 bg-[#0A0C10] text-gray-600'
                            }
                          `}
                        >
                          {isActive ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            <span className="text-[9px] font-mono">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                          )}
                        </div>
                      </div>

                      <span
                        className={`
                          font-mono text-[8px] sm:text-[9px] uppercase tracking-wider
                          transition-colors duration-300 truncate
                          ${
                            isActive
                              ? statusColors.text
                              : isDone
                              ? 'text-emerald-400/70'
                              : 'text-gray-600'
                          }
                        `}
                      >
                        {module.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ============================================
                PROGRESS BAR
                ============================================ */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-2 text-[10px] font-mono">
                <span className="uppercase tracking-wider text-gray-500">
                  System Initialization
                </span>
                <span className="font-semibold tabular-nums text-cyan-400">
                  {progress}%
                </span>
              </div>
              <div className="w-full h-1 rounded-full overflow-hidden bg-[#1A1D24]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-full"
                  style={{
                    boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)',
                  }}
                />
              </div>
            </div>

            {/* ============================================
                BOTTOM INFO BAR
                ============================================ */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] font-mono text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400/80">SYSTEM ACTIVE</span>
              </span>
              <span className="hidden sm:inline text-gray-800">|</span>
              <span className="hidden sm:inline">DIGITAL LAB v2.0.4</span>
              <span className="hidden sm:inline text-gray-800">|</span>
              <span className="hidden sm:inline">SYSTEM HARDWARE</span>
              <span className="text-gray-800">|</span>
              <span>UTF-8</span>
            </div>

            {/* Skip Button */}
            {showSkip && !isComplete && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleSkip}
                className="mt-6 mx-auto flex items-center gap-2 px-5 py-2 rounded-lg border border-[#242830] bg-[#0A0C10]/80 backdrop-blur-md text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 font-mono text-xs group"
              >
                <span>Skip Boot Sequence</span>
                <span className="text-[10px] text-gray-500 group-hover:text-cyan-400/70">
                  (ESC)
                </span>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}