import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Download, X, FileText, Info } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import { CVDocument } from './CVDocument';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: 'Muhammad_Alfarizi_CV',
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 0;
      }
      @media print {
        html, body {
          width: 210mm;
          height: 297mm;
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .no-print {
          display: none !important;
        }
      }
    `,
  });

  // Body scroll lock saat modal terbuka
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

  // Handle ESC key untuk close modal
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
          id="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 md:p-10 no-print"
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae Document Preview"
        >
          {/* Main Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl relative flex flex-col my-auto sm:my-4"
          >
            {/* Top Sticky Toolbar */}
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="sticky top-0 z-20 mb-4 p-3 rounded-xl border border-gray-200/80 dark:border-[#242830] bg-white/90 dark:bg-[#101216]/90 backdrop-blur-md shadow-lg flex flex-wrap items-center justify-between gap-3 no-print"
            >
              {/* Left Label */}
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900 dark:text-[#F5F7FA] uppercase tracking-wider">
                    Curriculum Vitae
                  </h3>
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    A4 Printable • ATS-Compatible
                  </span>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2">
                {/* Save as PDF / Print Button */}
                <button
                  id="cv-save-pdf-btn"
                  type="button"
                  onClick={handlePrint}
                  title="Use 'Save as PDF' destination in the browser print dialog"
                  className="group relative px-3 py-1.5 rounded-lg text-xs font-medium font-mono border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 text-teal-700 dark:text-cyan-300 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Save as PDF</span>
                  <span className="hidden lg:inline text-[10px] text-gray-400 dark:text-gray-500">
                    (via print)
                  </span>
                </button>

                {/* Print CV */}
                <button
                  id="cv-print-btn"
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono border border-gray-200 dark:border-[#242830] bg-gray-50 dark:bg-[#15181D] hover:bg-gray-100 dark:hover:bg-[#1E222A] text-gray-700 dark:text-gray-300 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Printer className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400" />
                  <span>Print</span>
                </button>

                {/* Close Button */}
                <button
                  id="cv-close-btn"
                  type="button"
                  onClick={onClose}
                  aria-label="Close CV Modal"
                  className="p-1.5 rounded-lg border border-gray-200 dark:border-[#242830] bg-gray-50 dark:bg-[#15181D] hover:bg-red-500/10 hover:border-red-500/30 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Notification hint for PDF save */}
            <div className="hidden sm:flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg bg-teal-500/5 dark:bg-cyan-500/5 border border-teal-500/20 text-[11px] font-mono text-teal-700 dark:text-cyan-300 no-print">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Tip: Select <strong>"Save as PDF"</strong> as destination in the browser print dialog for an A4 vector document.</span>
            </div>

            {/* CV Document with scale animation */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center pb-8"
            >
              <div ref={cvRef}>
                <CVDocument />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};