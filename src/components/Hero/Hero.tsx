import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FolderKanban, Terminal } from 'lucide-react';
import DeveloperWorkspace from '../DeveloperWorkspace/DeveloperWorkspace';
import { personalInfo } from '../../data/socials';

export default function Hero() {
  return (
    <section
      id="hero-digital-lab-entrance"
      className="relative w-full py-8 md:py-12 lg:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 light:bg-teal-50 light:text-teal-700 light:border-teal-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse light:bg-teal-600"></span>
              <span className="tracking-wide uppercase text-[11px] font-medium">
                {personalInfo.status || 'Available for Projects'}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FA] light:text-[#111318] leading-[1.1]">
              Building Digital Experiences Through{' '}
              <span className="text-cyan-400 light:text-teal-600">Code</span>,{' '}
              <span className="text-teal-400 light:text-teal-500">Design</span> &amp;{' '}
              <span className="text-blue-400 light:text-blue-600">Curiosity</span>.
            </h1>

            {/* Technical Subtitle - Roles */}
            <div className="text-sm sm:text-base font-mono text-cyan-400/90 font-medium light:text-teal-700">
              {personalInfo.subtitle || 'Information Technology Student'}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed light:text-gray-600 font-sans max-w-xl">
              {personalInfo.description || 'Building digital solutions with code and creativity. Passionate about software engineering, UI/UX design, and exploring new technologies.'}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                id="hero-explore-projects-btn"
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] light:bg-teal-600 light:text-white light:hover:bg-teal-700"
              >
                <FolderKanban className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                id="hero-connect-btn"
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#242830] bg-[#101216] text-[#F5F7FA] font-medium text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all light:bg-white light:border-gray-300 light:text-gray-800 light:hover:text-teal-700"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Specs footer */}
            <div className="pt-6 border-t border-[#242830]/80 grid grid-cols-3 gap-4 font-mono text-xs text-gray-500 light:border-gray-200">
              <div>
                <span className="block text-[10px] uppercase text-gray-400">STACK</span>
                <span className="text-gray-300 light:text-gray-700">Flutter · React</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gray-400">ANALYSIS</span>
                <span className="text-gray-300 light:text-gray-700">Bytecode & APK</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gray-400">LOCATION</span>
                <span className="text-gray-300 light:text-gray-700">{personalInfo.location || 'Indonesia'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Workspace & Laboratory Dock */}
          <div className="lg:col-span-6">
            <DeveloperWorkspace />
          </div>
        </div>
      </div>
    </section>
  );
}