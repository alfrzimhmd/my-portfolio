import React from 'react';

interface CVSectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CVSection: React.FC<CVSectionProps> = ({ number, title, children, className = '' }) => {
  return (
    <section className={`mb-6 last:mb-0 ${className}`}>
      <div className="flex items-center gap-2 mb-3 pb-1 border-b border-gray-200 dark:border-[#242830]">
        {number && (
          <span className="text-[11px] font-mono font-semibold text-teal-600 dark:text-cyan-400">
            {number}
          </span>
        )}
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-[#F5F7FA]">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
