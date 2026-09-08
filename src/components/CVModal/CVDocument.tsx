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
      className={`relative w-full max-w-[210mm] min-h-[297mm] mx-auto p-6 sm:p-10 md:p-12 transition-colors duration-300 rounded-xl sm:rounded-2xl border shadow-2xl bg-white dark:bg-[#101216] text-gray-900 dark:text-[#F5F7FA] border-gray-200 dark:border-[#242830] font-sans ${className}`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Visual Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 no-print" />

      {/* Header */}
      <CVHeader info={personalInfo} />

      {/* 01 — Professional Summary */}
      <CVSection number="01" title="Professional Summary">
        <p className="text-xs sm:text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
          {summary}
        </p>
      </CVSection>

      {/* 02 — Education */}
      <CVSection number="02" title="Education">
        <div className="space-y-3 text-xs">
          {education.map((edu, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-teal-600 dark:text-cyan-400 shrink-0" />
                  <span className="font-bold text-gray-900 dark:text-[#F5F7FA] text-[13px]">
                    {edu.institution}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400">
                  {edu.period}
                </span>
              </div>
              <p className="text-teal-600 dark:text-cyan-400 font-medium pl-5 text-[12px]">
                {edu.degree}
              </p>

              {/* Coursework 2-column clean grid */}
              <div className="pl-5 pt-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span>Key Coursework:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-gray-600 dark:text-gray-400 pl-1">
                  {edu.coursework.map((course, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-teal-500/60 shrink-0" />
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

      {/* 04 — Featured Projects */}
      <CVSection number="04" title="Featured Projects">
        <CVProjects projects={projects} />
      </CVSection>

      {/* 05 — Experience & Leadership */}
      <CVSection number="05" title="Experience & Leadership">
        <CVExperience experience={experience} />
      </CVSection>

      {/* Document Footer Metadata */}
      <div className="mt-8 pt-4 border-t border-gray-100 dark:border-[#1E222A] flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-gray-500">
        <span>LAB_DOC // CURRICULUM_VITAE</span>
        <span>VERIFIED_ACADEMIC_RECORD • 2026</span>
      </div>
    </article>
  );
};
