import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import NexusTracePreview from '../Preview/NexusTracePreview';

interface ProjectCardProps {
  project: Project;
  index: number;
  layoutType: 'image-left' | 'image-right' | 'full-width' | 'compact-grid';
}

export default function ProjectCard({ project, index, layoutType }: ProjectCardProps) {
  // Jika project tidak ada, return null
  if (!project) return null;

  const isCompact = layoutType === 'compact-grid';

  // Compact Grid Layout (untuk portrait projects)
  if (isCompact) {
    return (
      <Link
        to={`/projects/${project.id}`}
        className="group block rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] overflow-hidden shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300 h-full"
      >
        <div className="relative overflow-hidden bg-[var(--surface-secondary)]">
          {project.isInteractive ? (
            // Interactive UI untuk NexusTrace
            <div className="w-full aspect-[9/16]">
              <NexusTracePreview />
            </div>
          ) : (
            <img
              src={project.image || '/placeholder-image.png'}
              alt={project.title || 'Project'}
              className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder-image.png';
              }}
            />
          )}
          {project.videoUrl && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              Video
            </div>
          )}
          {project.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-amber-500/90 text-black text-[11px] font-mono font-semibold">
              ★ Featured
            </div>
          )}
        </div>
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-[11px] font-medium">
              {project.category || 'Project'}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[var(--text-primary)] line-clamp-1">
            {project.title || 'Untitled'}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {project.description || 'No description available'}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies && project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-[10px] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies && project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-[10px] text-[var(--text-secondary)]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border-main)] mt-2">
            <span className="text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
              Read Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Image Left Layout (untuk landscape projects)
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] overflow-hidden shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* Image Section - Left (2/5) */}
        <div className="md:col-span-2 relative overflow-hidden bg-[var(--surface-secondary)]">
          {project.isInteractive ? (
            // Interactive UI untuk NexusTrace
            <div className="w-full h-full min-h-[280px]">
              <NexusTracePreview />
            </div>
          ) : (
            <img
              src={project.image || '/placeholder-image.png'}
              alt={project.title || 'Project'}
              className="w-full h-full min-h-[200px] md:min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder-image.png';
              }}
            />
          )}
          {project.videoUrl && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              Video Demo
            </div>
          )}
          {project.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-amber-500/90 text-black text-[11px] font-mono font-semibold">
              ★ Featured
            </div>
          )}
        </div>

        {/* Content Section - Right (3/5) */}
        <div className="md:col-span-3 p-6 md:p-8 space-y-4 flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-[11px] font-medium">
              {project.category || 'Project'}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            {project.title || 'Untitled'}
          </h3>
          <p className="text-base text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {project.description || 'No description available'}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies && project.technologies.slice(0, 6).map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-[11px] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies && project.technologies.length > 6 && (
              <span className="px-2.5 py-1 rounded bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-[11px] text-[var(--text-secondary)]">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-[var(--border-main)] mt-2">
            <span className="text-base font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
              Read Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}