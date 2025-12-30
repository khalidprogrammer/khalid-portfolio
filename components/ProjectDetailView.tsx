
import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { 
  ArrowLeft, 
  Briefcase, 
  Calendar, 
  User, 
  Link as LinkIcon, 
  Github, 
  ExternalLink,
  Code2,
  Database,
  Wind,
  Building2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface Props {
  project: Project;
  onBack: () => void;
  onSelectProject: (id: string) => void;
}

const ProjectDetailView: React.FC<Props> = ({ project, onBack, onSelectProject }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Ensure the user starts at the top when entering details
  useEffect(() => {
    window.scrollTo(0, 0);
    checkScroll();
  }, [project.id]);

  const otherProjects = PROJECTS.filter(p => p.id !== project.id);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Helper to get matching icons for technologies
  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('tailwind')) return <Wind size={20} />;
    if (t.includes('mysql') || t.includes('sql') || t.includes('database')) return <Database size={20} />;
    return <Code2 size={20} />;
  };

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden selection:bg-cyan-500/30">
      {/* Starry Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="stars-container"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Back Navigation Breadcrumb */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors mb-12 uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
            <ArrowLeft size={16} />
          </div>
          Return to Hub
        </button>

        {/* Project Header Section */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#00e5ff] text-black text-[10px] font-black uppercase tracking-widest rounded-sm">
              {project.category.toUpperCase()}
            </span>
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 border border-white/10 text-zinc-400 text-[10px] font-bold rounded-sm">
                {tech}
              </span>
            ))}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Integrating advanced spatial intelligence into mission-critical decision making systems.
          </p>
        </header>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="glass p-8 rounded-xl border-white/5 bg-zinc-900/40">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <Briefcase size={18} />
              <span className="text-[11px] font-black uppercase tracking-widest">Organization</span>
            </div>
            <div className="text-white font-bold text-lg">{project.organization}</div>
          </div>

          <div className="glass p-8 rounded-xl border-white/5 bg-zinc-900/40">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <Calendar size={18} />
              <span className="text-[11px] font-black uppercase tracking-widest">Project Scope</span>
            </div>
            <div className="text-white font-bold text-lg">National Infrastructure</div>
          </div>

          <div className="glass p-8 rounded-xl border-white/5 bg-zinc-900/40">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <User size={18} />
              <span className="text-[11px] font-black uppercase tracking-widest">Expertise</span>
            </div>
            <div className="text-white font-bold text-lg">System Architect</div>
          </div>

          <div className="glass p-8 rounded-xl border-white/5 bg-zinc-900/40">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <LinkIcon size={18} />
              <span className="text-[11px] font-black uppercase tracking-widest">Deployment</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Large Preview Image */}
        <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl mb-12">
          <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay pointer-events-none"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover min-h-[500px]"
          />
          {/* Decorative Overlay for ASDC feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Dynamic Impact Stats (New section based on user image) */}
        {project.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-white/5">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl md:text-6xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview & Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Overview Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
              <TrendingUp className="text-cyan-500" />
              Operational Overview
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {project.description} This initiative established a centralized platform for cross-departmental data sharing. By integrating high-resolution satellite imagery with socio-economic datasets, the system empowers analysts to predict natural hazards and plan recovery efforts with unprecedented precision.
            </p>
          </div>

          {/* Technologies Used Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">System Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.techStack.map(tech => (
                <div key={tech} className="glass p-6 rounded-xl border-white/5 bg-zinc-900/40 flex flex-col items-center justify-center text-center group hover:border-cyan-500/30 transition-all">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {getTechIcon(tech)}
                  </div>
                  <span className="text-zinc-300 font-bold text-sm tracking-tight">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More Projects Section - Slider Format */}
        <div className="pt-20 border-t border-white/5 relative">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Explore More Work</h2>
            
            {/* Slider Controls */}
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${canScrollLeft ? 'text-white hover:bg-white/5 hover:border-cyan-500/50 cursor-pointer' : 'text-zinc-700 cursor-not-allowed opacity-30'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${canScrollRight ? 'text-white hover:bg-white/5 hover:border-cyan-500/50 cursor-pointer' : 'text-zinc-700 cursor-not-allowed opacity-30'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative group">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {otherProjects.map(p => (
                <div 
                  key={p.id} 
                  onClick={() => onSelectProject(p.id)}
                  className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer relative bg-zinc-900/20 rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/40 transition-all duration-500 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={p.imageUrl} 
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute bottom-4 left-6 z-20">
                      <span className="px-3 py-1 bg-[#00e5ff] text-black text-[9px] uppercase font-black tracking-widest rounded-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 bg-[#0a1120]/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {p.title}
                      </h3>
                      <ArrowRight size={16} className="text-cyan-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stars-container {
          width: 100%;
          height: 100%;
          background: #020617;
          background-image: 
            radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
            radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
          background-size: 550px 550px, 350px 350px, 250px 250px;
          background-position: 0 0, 40px 60px, 130px 270px;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailView;
