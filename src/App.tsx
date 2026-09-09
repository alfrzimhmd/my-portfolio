import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CommandPalette from './components/CommandPalette/CommandPalette';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { CVModal } from './components/CVModal/CVModal'; // Import CV Modal
import { useCommandPalette } from './hooks/useCommandPalette';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectDetailPage from './pages/Projects/ProjectDetailPage';
import SkillsPage from './pages/Skills/SkillsPage';
import ContactPage from './pages/Contact/ContactPage';

// Scroll to top helper on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const { isOpen, open, close } = useCommandPalette();
  const [isCVOpen, setIsCVOpen] = useState(false); // State untuk CV Modal

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Main layout container with background grid */}
      <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 relative selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Subtle background technical grid */}
        <div className="fixed inset-0 bg-tech-grid pointer-events-none opacity-40 z-0" />

        {/* Ambient background glows */}
        <div className="fixed top-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

        {/* Sticky floating navigation dengan props CV */}
        <Navbar 
          onOpenCommandPalette={open}
          onOpenCV={() => setIsCVOpen(true)} // Passing function untuk buka CV
        />

        {/* Dynamic page routes */}
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

        {/* Editorial Minimalist Footer */}
        <Footer onOpenCV={() => setIsCVOpen(true)} />

        {/* Interactive Command Palette (Cmd+K / Ctrl+K) */}
        <CommandPalette isOpen={isOpen} onClose={close} />

        {/* CV Modal - Tambahkan ini */}
        <CVModal 
          isOpen={isCVOpen}
          onClose={() => setIsCVOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}