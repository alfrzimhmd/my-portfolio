import React from 'react';
import { cvData } from '../../data/cv';
import { CVHeader } from './CVHeader';
import { CVSection } from './CVSection';
import { CVSkills } from './CVSkills';
import { CVProjects } from './CVProjects';
import { CVExperience } from './CVExperience';
import { GraduationCap, BookOpen } from 'lucide-react';

interface CVDocumentProps {
  className?: string;
}

export const CVDocument: React.FC<CVDocumentProps> = ({ className = '' }) => {
  const { personalInfo, summary, education, skills, projects, experience } = cvData;

  return (
    <article
      id="cv-printable-document"
      className={`relative w-full max-w-[210mm] min-h-[297mm] mx-auto p-6 sm:p-10 md:p-12 transition-colors duration-300 rounded-xl sm:rounded-2xl border shadow-2xl bg-white dark:bg-[#101216] text-gray-900 dark:text-[#F5F7FA] border-gray-200 dark:border-[#242830] font-sans print:shadow-none print:rounded-none print:border-0 print:min-h-0 print:p-[8mm] print:bg-white print:text-black print:max-w-full ${className}`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Visual Accent Top Bar - Hidden on Print */}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 print:hidden" />

      {/* Header */}
      <CVHeader info={personalInfo} />

      {/* 01 — Professional Summary */}
      <CVSection number="01" title="Professional Summary">
        <p className="text-xs sm:text-[13px] leading-relaxed text-gray-700 dark:text-gray-300 print:text-black print:text-[9px] print:leading-snug">
          {summary}
        </p>
      </CVSection>

      {/* 02 — Education */}
      <CVSection number="02" title="Education">
        <div className="space-y-3 text-xs print:space-y-1.5">
          {education.map((edu, idx) => (
            <div key={idx} className="space-y-2 print:space-y-1 print:break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 print:flex-row print:items-baseline">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-teal-600 dark:text-cyan-400 shrink-0 print:text-teal-700 print:w-3 print:h-3" />
                  <span className="font-bold text-gray-900 dark:text-[#F5F7FA] text-[13px] print:text-black print:text-[10px]">
                    {edu.institution}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400 print:text-gray-600 print:text-[8px]">
                  {edu.period}
                </span>
              </div>
              <p className="text-teal-600 dark:text-cyan-400 font-medium pl-5 text-[12px] print:text-teal-700 print:text-[9px] print:pl-4">
                {edu.degree}
              </p>

              {/* Coursework 2-column clean grid */}
              <div className="pl-5 pt-1 print:pl-4 print:pt-0.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1.5 print:text-gray-600 print:text-[8px] print:mb-0.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-500 shrink-0 print:text-teal-700 print:w-2.5 print:h-2.5" />
                  <span>Key Coursework:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-gray-600 dark:text-gray-400 pl-1 print:grid-cols-2 print:gap-x-3 print:gap-y-0 print:text-gray-700 print:text-[8px] print:pl-0">
                  {edu.coursework.map((course, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-teal-500/60 shrink-0 print:bg-teal-700" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CVSection>

      {/* 03 — Technical Skills */}
      <CVSection number="03" title="Technical Skills">
        <CVSkills skills={skills} />
      </CVSection>

      {/* 04 — Featured Projects - Compact untuk print */}
      <CVSection number="04" title="Featured Projects">
        <CVProjects projects={projects} />
      </CVSection>

      {/* 05 — Experience & Leadership - Compact untuk print */}
      <CVSection number="05" title="Experience & Leadership">
        <CVExperience experience={experience} />
      </CVSection>

      {/* Document Footer Metadata */}
      <div className="mt-8 pt-4 border-t border-gray-100 dark:border-[#1E222A] flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-gray-500 print:mt-3 print:pt-2 print:border-gray-300 print:text-gray-500 print:text-[7px]">
        <span>LAB_DOC // CURRICULUM_VITAE</span>
        <span>VERIFIED_ACADEMIC_RECORD • 2026</span>
      </div>
    </article>
  );
};