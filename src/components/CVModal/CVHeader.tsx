import React from 'react';
import { Mail, MapPin, Github, Globe, Linkedin } from 'lucide-react';
import { PersonalInfo } from '../../types';

interface CVHeaderProps {
  info: PersonalInfo;
  isDark?: boolean;
}

export const CVHeader: React.FC<CVHeaderProps> = ({ info }) => {
  return (
    <header className="border-b border-gray-200 dark:border-[#242830] pb-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-[#F5F7FA]">
            {info.name}
          </h1>
          <p className="text-sm md:text-base font-medium text-teal-600 dark:text-cyan-400 mt-1">
            {info.role}
          </p>
        </div>
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-cyan-300 self-start">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse-subtle" />
          <span>{info.availability}</span>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-gray-100 dark:border-[#1E222A] text-xs font-mono text-gray-600 dark:text-gray-400">
        <a
          href={`mailto:${info.email}`}
          className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0" />
          <span className="truncate">{info.email}</span>
        </a>

        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0" />
          <span className="truncate">{info.location}</span>
        </div>

        <a
          href={`https://${info.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors"
        >
          <Github className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0" />
          <span className="truncate">{info.github}</span>
        </a>

        <a
          href={`https://${info.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400 transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400 shrink-0" />
          <span className="truncate">{info.linkedin}</span>
        </a>
      </div>
    </header>
  );
};
