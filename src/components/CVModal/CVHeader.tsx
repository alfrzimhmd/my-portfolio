import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { PersonalInfo } from '../../types';

interface CVHeaderProps {
  info: PersonalInfo;
  isDark?: boolean;
}

export const CVHeader: React.FC<CVHeaderProps> = ({ info }) => {
  return (
    <header className="border-b border-gray-200 dark:border-[#242830] pb-6 mb-6 print:border-gray-300 print:pb-2 print:mb-2">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 print:flex-row print:items-start print:gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-[#F5F7FA] print:text-black print:text-[18px]">
            {info.name}
          </h1>
          <p className="text-sm md:text-base font-medium text-teal-600 dark:text-cyan-400 mt-1 print:text-teal-700 print:text-[10px] print:mt-0.5">
            {info.role}
          </p>
          {info.subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 print:text-gray-600 print:text-[8px]">
              {info.subtitle}
            </p>
          )}
        </div>

        {/* Availability Badge */}
        {info.availability && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-cyan-300 self-start print:border-teal-600 print:bg-teal-50 print:text-teal-700 print:text-[7px] print:px-2 print:py-0.5">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse-subtle print:bg-teal-600 print:animate-none print:w-1.5 print:h-1.5" />
            <span>{info.availability}</span>
          </div>
        )}
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-gray-100 dark:border-[#1E222A] text-xs font-mono text-gray-600 dark:text-gray-400 print:border-gray-300 print:pt-2 print:mt-2 print:text-gray-700 print:text-[8px] print:gap-1">
        <a
          href={`mailto:${info.email}`}
          className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors print:text-gray-700 print:gap-1"
        >
          <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0 print:text-teal-700 print:w-2.5 print:h-2.5" />
          <span className="truncate">{info.email}</span>
        </a>

        <div className="flex items-center gap-2 print:text-gray-700 print:gap-1">
          <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0 print:text-teal-700 print:w-2.5 print:h-2.5" />
          <span className="truncate">{info.location}</span>
        </div>

        {info.github && (
          <a
            href={`https://${info.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors print:text-gray-700 print:gap-1"
          >
            <Github className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0 print:text-teal-700 print:w-2.5 print:h-2.5" />
            <span className="truncate">{info.github}</span>
          </a>
        )}

        {info.linkedin && (
          <a
            href={`https://${info.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors print:text-gray-700 print:gap-1"
          >
            <Linkedin className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0 print:text-teal-700 print:w-2.5 print:h-2.5" />
            <span className="truncate">{info.linkedin}</span>
          </a>
        )}
      </div>
    </header>
  );
};