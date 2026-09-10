import React from 'react';
import { CVSkillCategory } from '../../types';

interface CVSkillsProps {
  skills: CVSkillCategory[];
}

export const CVSkills: React.FC<CVSkillsProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs print:grid-cols-2 print:gap-1.5">
      {skills.map((cat, idx) => (
        <div
          key={idx}
          className="p-3 rounded-lg border border-gray-200 dark:border-[#242830] bg-gray-50/50 dark:bg-[#15181D]/40 print:border-gray-300 print:bg-gray-50 print:p-1.5 print:rounded-md print:break-inside-avoid"
        >
          <h3 className="font-mono font-semibold text-teal-700 dark:text-cyan-400 mb-1.5 uppercase tracking-wide print:text-teal-700 print:text-[8px] print:mb-1">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-1.5 print:gap-1">
            {cat.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#1E222A] text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-[#2E3440] print-pill print:text-[7px] print:px-1 print:py-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};