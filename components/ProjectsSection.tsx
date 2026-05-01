
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../constants';
import { Building2, ArrowRight } from 'lucide-react';

interface Props {
  onSelectProject: (id: string) => void;
}

const CATEGORIES = ['All', 'HRMIS', 'MIS', 'GIS', 'ERP'];

const ProjectsSection: React.FC<Props> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Enterprise Solutions" subtitle="System Portfolio" />
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-3 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all duration-300 uppercase tracking-[0.2em] border ${
                activeTab === cat 
                ? 'bg-cyan-500 text-black border-cyan-500 shadow-xl shadow-cyan-500/20' 
                : 'bg-zinc-950/50 text-zinc-500 border-white/5 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              onClick={() => onSelectProject(project.id)}
              className="group cursor-pointer relative bg-zinc-900/20 rounded-[2rem] overflow-hidden border border-white/5 hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[9px] uppercase font-black tracking-widest rounded-lg border border-cyan-400/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-zinc-500 text-xs leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    <Building2 size={14} className="text-cyan-500" />
                    <span>{project.organization}</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
