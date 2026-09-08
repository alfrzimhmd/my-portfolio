import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Search } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'App Development', 'Web Development', 'UI/UX Design', 'Reverse Engineering'];

  // Filter projects dengan safe checking
  const filteredProjects = projects.filter(p => {
    if (!p) return false;
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesQuery =
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies?.some(t => t?.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  // Cari featured project
  const featuredProject = projects.find(p => p?.id === 'studymate') || projects[0];

  // Pisahkan project berdasarkan orientasi dengan fallback
  const landscapeProjects = filteredProjects.filter(p => {
    // Jika orientation tidak ada atau null, default ke landscape
    const orientation = p?.orientation || 'landscape';
    return orientation === 'landscape' && p?.id !== 'studymate';
  });
  
  const portraitProjects = filteredProjects.filter(p => {
    const orientation = p?.orientation || 'landscape';
    return orientation === 'portrait' && p?.id !== 'studymate';
  });

  // Debug: log jumlah project
  console.log('Total projects:', projects.length);
  console.log('Filtered projects:', filteredProjects.length);
  console.log('Landscape projects:', landscapeProjects.length);
  console.log('Portrait projects:', portraitProjects.length);

  // Jika tidak ada project, tampilkan pesan
  if (!projects || projects.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-[var(--text-secondary)]">No projects found.</p>
      </div>
    );
  }

  return (
    <div id="projects-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 md:space-y-20">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest block">
          PROJECT LABORATORY // 2026
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          Crafted Applications &amp; Case Studies.
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          Setiap proyek merupakan laboratorium tempat eksplorasi arsitektur perangkat lunak, optimasi performa, dan desain antarmuka diuji secara nyata.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-main)]">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-semibold'
                  : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-main)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-cyan-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech or name..."
            className="w-full pl-9 pr-3.5 py-1.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-main)] text-xs font-mono text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Primary Featured Showcase (StudyMate) */}
      {featuredProject && (selectedCategory === 'All' || selectedCategory === 'App Development') && !searchQuery && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
              FEATURED BENCHMARK
            </span>
          </div>
          <ProjectShowcase project={featuredProject} />
        </div>
      )}

      {/* Landscape Projects - Card dengan gambar di kiri */}
      {landscapeProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              WEB &amp; LANDSCAPE PROJECTS ({landscapeProjects.length})
            </span>
          </div>
          <div className="space-y-6">
            {landscapeProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={0}
                layoutType="image-left"
              />
            ))}
          </div>
        </div>
      )}

      {/* Portrait Projects - Grid 3 kolom */}
      {portraitProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              MOBILE &amp; PORTRAIT PROJECTS ({portraitProjects.length})
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portraitProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={0}
                layoutType="compact-grid"
              />
            ))}
          </div>
        </div>
      )}

      {/* Jika tidak ada project yang ditampilkan (selain featured) */}
      {landscapeProjects.length === 0 && portraitProjects.length === 0 && filteredProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              ALL PROJECTS ({filteredProjects.length})
            </span>
          </div>
          <div className="space-y-6">
            {filteredProjects
              .filter(p => p.id !== 'studymate')
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={0}
                  layoutType="image-left"
                />
              ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="p-12 text-center rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] font-mono text-xs text-[var(--text-secondary)] space-y-2">
          <p className="text-sm text-[var(--text-primary)]">No projects match the selected query.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-cyan-400 underline cursor-pointer"
          >
            Reset filter
          </button>
        </div>
      )}
    </div>
  );
}