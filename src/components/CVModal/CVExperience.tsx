import React from 'react';
import { CVExperience as CVExperienceType } from '../../types';

interface CVExperienceProps {
  experience: CVExperienceType[];
}

export const CVExperience: React.FC<CVExperienceProps> = ({ experience }) => {
  return (
    <div className="space-y-4 text-xs">
      {experience.map((exp, idx) => (
        <div
          key={idx}
          className="pb-3 border-b border-gray-100 dark:border-[#1E222A] last:border-b-0 last:pb-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 className="font-bold text-gray-900 dark:text-[#F5F7FA] text-[13px]">
              {exp.role}
            </h3>
            <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
              {exp.period}
            </span>
          </div>
          <p className="text-[11px] font-medium text-teal-600 dark:text-cyan-400 mb-1.5">
            {exp.organization}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-1.5">
            {exp.description}
          </p>
          {exp.highlights && exp.highlights.length > 0 && (
            <ul className="list-disc list-inside space-y-0.5 text-gray-600 dark:text-gray-400 pl-1">
              {exp.highlights.map((h, hIdx) => (
                <li key={hIdx}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};


















