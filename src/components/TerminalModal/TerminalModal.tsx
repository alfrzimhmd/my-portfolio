// src/components/TerminalModal/TerminalModal.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from '../Terminal/Terminal';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV?: () => void;
}

export default function TerminalModal({ isOpen, onClose, onOpenCV }: TerminalModalProps) {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="terminal-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 no-print"
          role="dialog"
          aria-modal="true"
          aria-label="Interactive Terminal Console"
        >
          {/* Modal Container - Lebih Besar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl relative"
          >
            {/* Header Label */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <TerminalIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Lab Console
                  </h3>
                  <span className="text-[10px] font-mono text-gray-500">
                    Interactive Shell
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close terminal"
                className="p-2 rounded-lg border border-[#242830] bg-[#0A0C10]/80 hover:bg-red-500/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal */}
            <Terminal
              initialCommand="whoami"
              isInteractive={true}
              onOpenCV={onOpenCV}
              onClose={onClose}
            />

            {/* Hint */}
            <div className="mt-3 text-center text-[10px] font-mono text-gray-500">
              Press{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-[#1E222B] border border-[#2E3440] text-gray-400">
                ESC
              </kbd>{' '}
              to close • Type <span className="text-cyan-400">help</span> for commands
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}