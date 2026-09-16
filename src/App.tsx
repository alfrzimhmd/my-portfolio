import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CommandPalette from './components/CommandPalette/CommandPalette';
import CustomCursor from './components/CustomCursor/CustomCursor';
import BootSequence from './components/BootSequence/BootSequence';
import { CVModal } from './components/CVModal/CVModal';
import TerminalModal from './components/TerminalModal/TerminalModal';
import { useCommandPalette } from './hooks/useCommandPalette';
import { useTerminal } from './hooks/useTerminal';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectDetailPage from './pages/Projects/ProjectDetailPage';
import SkillsPage from './pages/Skills/SkillsPage';
import ContactPage from './pages/Contact/ContactPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Helper: cek sudah booted atau belum
function checkHasBooted(): boolean {
  try {
    return sessionStorage.getItem('lab-booted') === 'true';
  } catch {
    return false;
  }
}

export default function App() {
  const { isOpen: isCmdOpen, open: openCmd, close: closeCmd } = useCommandPalette();
  const { isOpen: isTerminalOpen, open: openTerminal, close: closeTerminal } = useTerminal();
  const [isCVOpen, setIsCVOpen] = useState(false);

  const [isBooted, setIsBooted] = useState<boolean>(() => checkHasBooted());
  const [showContent, setShowContent] = useState<boolean>(() => checkHasBooted());

  const handleBootComplete = () => {
    try {
      sessionStorage.setItem('lab-booted', 'true');
    } catch {
      // Ignore
    }
    setIsBooted(true);
    setShowContent(true);
  };

  return (
    <BrowserRouter>
      {!isBooted && <BootSequence onComplete={handleBootComplete} />}

      {showContent && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          style={{ willChange: 'opacity' }}
        >
          <ScrollToTop />
          <CustomCursor />

          <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 relative selection:bg-cyan-500/20 selection:text-cyan-300">
            <div className="fixed inset-0 bg-tech-grid pointer-events-none opacity-40 z-0" />
            <div className="fixed top-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

            <Navbar
              onOpenCommandPalette={openCmd}
              onOpenCV={() => setIsCVOpen(true)}
              onOpenTerminal={openTerminal}
            />

            <main className="flex-1 relative z-10">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            <Footer onOpenCV={() => setIsCVOpen(true)} />

            {/* Command Palette */}
            <CommandPalette isOpen={isCmdOpen} onClose={closeCmd} />

            {/* Terminal Modal - Bisa dibuka dari mana saja */}
            <TerminalModal 
              isOpen={isTerminalOpen} 
              onClose={closeTerminal}
              onOpenCV={() => setIsCVOpen(true)}
            />

            {/* CV Modal */}
            <CVModal
              isOpen={isCVOpen}
              onClose={() => setIsCVOpen(false)}
            />
          </div>
        </motion.div>
      )}
    </BrowserRouter>
  );
}