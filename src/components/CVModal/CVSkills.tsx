import React from 'react';
import { CVSkillCategory } from '../../types';

interface CVSkillsProps {
  skills: CVSkillCategory[];
}

export const CVSkills: React.FC<CVSkillsProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
      {skills.map((cat, idx) => (
        <div
          key={idx}
          className="p-3 rounded-lg border border-gray-200 dark:border-[#242830] bg-gray-50/50 dark:bg-[#15181D]/40"
        >
          <h3 className="font-mono font-semibold text-teal-700 dark:text-cyan-400 mb-1.5 uppercase tracking-wide">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-[#1E222A] text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-[#2E3440] print-pill"
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
