import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../../data/projects';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Github, 
  ExternalLink, 
  AlertTriangle, 
  Layers, 
  X,
  Play,
  Maximize2
} from 'lucide-react';
import StudyMatePreview from '../../components/Preview/StudyMatePreview';
import NexusTracePreview from '../../components/Preview/NexusTracePreview';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const project = projects.find(p => p.id === id) || projects[0];
  const cs = project.caseStudy;

  if (!cs) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
        <Link to="/projects" className="text-cyan-400 font-mono text-sm underline">
          &larr; Back to Projects Laboratory
        </Link>
      </div>
    );
  }

  // Get project images for gallery
  const projectImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image];
  
  const isPortrait = project.orientation === 'portrait';
  const hasVideo = project.videoUrl && project.videoUrl !== null;
  
  // Combine video and images for slider
  const slides: { type: 'video' | 'image'; src: string; thumbnail?: string }[] = [];
  
  if (hasVideo) {
    slides.push({ 
      type: 'video', 
      src: project.videoUrl || '', 
      thumbnail: project.image 
    });
  }
  
  projectImages.forEach(img => {
    if (img) {
      slides.push({ type: 'image', src: img });
    }
  });

  // Jika tidak ada slides (untuk interactive projects), tambahkan dummy slide
  if (slides.length === 0 && project.isInteractive) {
    slides.push({ type: 'image', src: '' });
  }

  const nextSlide = () => {
    if (slides.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (slides.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openFullscreen = (imageSrc: string) => {
    if (imageSrc) {
      setFullscreenImage(imageSrc);
      setIsFullscreen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const handleImageClick = (src: string) => {
    if (src) {
      openFullscreen(src);
    }
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const currentSlide = slides[currentImageIndex] || slides[0];

  // Cek apakah ini interactive project (StudyMate atau NexusTrace)
  const isInteractiveProject = project.isInteractive && (project.id === 'studymate' || project.id === 'nexus-trace');

  return (
    <div id="project-detail-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between border-b border-[var(--border-main)] pb-4 font-mono text-xs">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>[ RETURN TO PROJECT LAB ]</span>
        </button>

        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>SYSTEM // VERIFIED SPEC</span>
        </div>
      </div>

      {/* Project Gallery Slider */}
      <div className="space-y-4">
        <div className="relative rounded-2xl overflow-hidden border border-[var(--border-main)] bg-[var(--surface-secondary)]">
          {/* Main Slide Content */}
          <div className="relative flex items-center justify-center min-h-[300px]">
            {currentSlide.type === 'video' ? (
              <div className="relative w-full">
                {!isVideoPlaying ? (
                  <div 
                    className="relative cursor-pointer group w-full"
                    onClick={handlePlayVideo}
                  >
                    <img
                      src={currentSlide.thumbnail || project.image}
                      alt={`${project.title} - Video Thumbnail`}
                      className={`w-full object-contain max-h-[600px] ${
                        isPortrait ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                      <div className="w-20 h-20 rounded-full bg-cyan-500/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white text-xs font-mono flex items-center gap-2">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                      Click to play video demo
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <iframe
                      src={`${project.videoUrl}?autoplay=1&mute=0`}
                      title="Project Demo Video"
                      className={`w-full ${
                        isPortrait ? 'aspect-[9/16] max-h-[600px]' : 'aspect-video max-h-[500px]'
                      }`}
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      frameBorder="0"
                    />
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            ) : project.id === 'studymate' && project.isInteractive ? (
              <div className="w-full min-h-[400px] p-4 bg-[#0A0C10]">
                <StudyMatePreview />
              </div>
            ) : project.id === 'nexus-trace' && project.isInteractive ? (
              <div className={`w-full ${isPortrait ? 'aspect-[9/16] max-h-[600px]' : 'min-h-[400px]'} p-4 bg-[#0A0C10]`}>
                <NexusTracePreview />
              </div>
            ) : (
              <div className="relative w-full flex items-center justify-center bg-[var(--surface-secondary)]">
                {currentSlide.src ? (
                  <img
                    src={currentSlide.src}
                    alt={`${project.title} - Slide ${currentImageIndex + 1}`}
                    className={`w-full object-contain max-h-[600px] ${
                      isPortrait ? 'aspect-[9/16]' : 'aspect-video'
                    }`}
                    onClick={() => handleImageClick(currentSlide.src)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center text-[var(--text-secondary)] font-mono text-sm">
                    No preview available
                  </div>
                )}
                {!isPortrait && currentSlide.src && (
                  <button
                    onClick={() => handleImageClick(currentSlide.src)}
                    className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Navigation Arrows - Hanya tampil jika ada lebih dari 1 slide */}
          {slides.length > 1 && !isInteractiveProject && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm z-10"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm z-10"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Indicators - Hanya tampil jika ada lebih dari 1 slide dan bukan interactive */}
          {slides.length > 1 && !isInteractiveProject && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-cyan-400 w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail Strip - Hanya tampil jika ada gambar */}
        {slides.length > 1 && !isInteractiveProject && slides.some(s => s.type === 'image' && s.src) && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[var(--border-main)]">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-cyan-400'
                    : 'border-transparent hover:border-[var(--border-main)]'
                }`}
              >
                {slide.type === 'video' ? (
                  <div className="w-24 h-16 bg-[var(--surface-secondary)] flex items-center justify-center relative">
                    <img
                      src={slide.thumbnail || project.image}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-white">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                    </div>
                  </div>
                ) : slide.src ? (
                  <img
                    src={slide.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-24 h-16 object-cover"
                  />
                ) : null}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-cyan-400">
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
            {project.category.toUpperCase()}
          </span>
          <span>&middot;</span>
          <span className="text-[var(--text-secondary)]">{project.tagline}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Quick Tech Tag Row */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map(t => (
            <span
              key={t}
              className="px-3 py-1 rounded-md bg-[var(--surface-secondary)] border border-[var(--border-main)] font-mono text-xs text-[var(--text-primary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 9-SECTION EDITORIAL CASE STUDY */}
      <div className="space-y-12">
        {/* 01: Overview */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            01 &mdash; OVERVIEW
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Executive Summary &amp; Conception
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {cs.overview}
          </p>
        </section>

        {/* 02: Problem */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            02 &mdash; PROBLEM
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            User Pain Points &amp; Technical Deficiencies
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {cs.problem}
          </p>
        </section>

        {/* 03: Approach */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            03 &mdash; APPROACH
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Strategic Architecture &amp; Methodology
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {cs.approach}
          </p>
        </section>

        {/* 04: Design */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            04 &mdash; DESIGN
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Interface Aesthetics &amp; Ergonomics
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {cs.design}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] block">PALETTE FOCUS</span>
              <span className="text-cyan-400 font-semibold">Low Cognitive Strain</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] block">LAYOUT GRID</span>
              <span className="text-purple-400 font-semibold">Thumb-Zone Ergonomics</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1">
              <span className="text-[10px] text-[var(--text-secondary)] block">ACCESSIBILITY</span>
              <span className="text-emerald-400 font-semibold">WCAG AA Contrast</span>
            </div>
          </div>
        </section>

        {/* 05: Development */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            05 &mdash; DEVELOPMENT
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Engineering Implementation
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {cs.development}
          </p>
        </section>

        {/* 06: Challenges */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            06 &mdash; CHALLENGES
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Technical Roadblocks &amp; Resolutions
          </h3>
          <div className="space-y-2.5">
            {cs.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] text-sm text-[var(--text-secondary)]"
              >
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{ch}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 07: Result */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-3">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            07 &mdash; RESULT
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Impact, Performance &amp; Validation
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {cs.result}
          </p>
        </section>

        {/* 08: Technology */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            08 &mdash; TECHNOLOGY
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Technical Stack Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cs.technologies.map(tech => (
              <div
                key={tech.name}
                className="p-3.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-main)] space-y-1 font-mono text-xs"
              >
                <span className="text-cyan-400 font-bold block">{tech.name}</span>
                <span className="text-[var(--text-secondary)] font-sans text-xs block">
                  {tech.purpose}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 09: Links */}
        <section className="rounded-2xl border border-[var(--border-main)] bg-[var(--surface-main)] p-6 sm:p-8 space-y-4">
          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider block">
            09 &mdash; LINKS
          </span>
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Project Repositories &amp; Artifacts
          </h3>
          <div className="flex flex-wrap gap-3 pt-2">
            {cs.links.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--surface-secondary)] hover:border-cyan-500/40 font-mono text-xs text-[var(--text-primary)] transition-colors"
              >
                {link.type === 'github' ? (
                  <Github className="w-4 h-4 text-cyan-400" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-6 border-t border-[var(--border-main)] flex justify-between items-center font-mono text-xs">
        <Link to="/projects" className="text-cyan-400 hover:text-cyan-300">
          &larr; [ BACK TO PROJECT LABORATORY ]
        </Link>
        <Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          [ INQUIRE ABOUT THIS PROJECT ]
        </Link>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="fixed top-20 right-6 z-[101] p-3 rounded-full bg-red-500/80 hover:bg-red-600 text-white transition-colors shadow-lg shadow-red-500/30 hover:scale-110 transform duration-200"
            aria-label="Close fullscreen"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={closeFullscreen}
            className="fixed top-20 left-6 z-[101] px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-mono transition-colors backdrop-blur-sm border border-white/20 hover:border-white/40"
          >
            ← Kembali
          </button>

          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className={`max-w-full max-h-full object-contain ${
              isPortrait ? 'max-h-[90vh]' : 'max-h-[85vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl bg-black/60 backdrop-blur-sm text-white text-sm font-mono border border-white/10">
            {projectImages.findIndex(img => img === fullscreenImage) + 1} / {projectImages.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = projectImages.findIndex(img => img === fullscreenImage);
              const prevIdx = (currentIdx - 1 + projectImages.length) % projectImages.length;
              setFullscreenImage(projectImages[prevIdx]);
            }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-[101] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/20"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = projectImages.findIndex(img => img === fullscreenImage);
              const nextIdx = (currentIdx + 1) % projectImages.length;
              setFullscreenImage(projectImages[nextIdx]);
            }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-[101] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/20"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}