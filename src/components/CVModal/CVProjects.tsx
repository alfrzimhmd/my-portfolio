import React from 'react';
import { CVProject } from '../../types';

interface CVProjectsProps {
  projects: CVProject[];
}

export const CVProjects: React.FC<CVProjectsProps> = ({ projects }) => {
  return (
    <div className="space-y-4 text-xs">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="pb-3 border-b border-gray-100 dark:border-[#1E222A] last:border-b-0 last:pb-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 className="font-bold text-gray-900 dark:text-[#F5F7FA] text-[13px]">
              {proj.title}
            </h3>
            <span className="text-[11px] font-mono text-teal-600 dark:text-cyan-400">
              {proj.role}
            </span>
          </div>
          <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1.5">
            {proj.tech}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-1.5">
            {proj.description}
          </p>
          {proj.highlights && proj.highlights.length > 0 && (
            <ul className="list-disc list-inside space-y-0.5 text-gray-600 dark:text-gray-400 pl-1">
              {proj.highlights.map((h, hIdx) => (
                <li key={hIdx}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
