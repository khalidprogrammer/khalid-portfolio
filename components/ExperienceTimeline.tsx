
import React from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE_HISTORY } from '../constants';
import { Briefcase, Calendar, ChevronRight, Award, Zap, Terminal, Activity } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader title="System Career Roadmap" subtitle="Professional Evolution" align="center" />
        
        <div className="relative mt-24">
          {/* Central Power Conduit */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 transform -translate-x-1/2 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-500 animate-conduit-flow"></div>
          </div>
          
          <div className="space-y-24 relative">
            {EXPERIENCE_HISTORY.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isPresent = exp.period.includes('Present');

              return (
                <div key={exp.id} className="relative">
                  {/* High-Tech Milestone Marker */}
                  <div className={`absolute left-4 md:left-1/2 top-0 transform -translate-x-1/2 z-20`}>
                    <div className="relative">
                       {/* Pulsing Rings */}
                       {isPresent && (
                         <>
                           <div className="absolute inset-0 rounded-full bg-cyan-500/40 animate-ping"></div>
                           <div className="absolute -inset-2 rounded-full border border-cyan-500/20 animate-pulse"></div>
                         </>
                       )}
                       <div className={`w-10 h-10 rounded-xl border-2 rotate-45 flex items-center justify-center transition-all duration-500 shadow-2xl
                         ${isPresent ? 'bg-cyan-500 border-white shadow-cyan-500/40' : 'bg-zinc-950 border-zinc-700 group-hover:border-cyan-500'}`}>
                         <div className="-rotate-45">
                           {isPresent ? <Activity size={16} className="text-black" /> : <Terminal size={16} className="text-zinc-500" />}
                         </div>
                       </div>
                    </div>
                  </div>

                  {/* Content Card Area */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                    <div className="group relative">
                      {/* Terminal Bracket Header */}
                      <div className={`flex items-center gap-3 mb-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500
                        ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="opacity-40">[{exp.id}]</span>
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                        <span className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-cyan-500/50 transition-all"></span>
                      </div>

                      {/* Main Card */}
                      <div className="glass p-8 rounded-3xl border-white/5 group-hover:border-cyan-500/20 transition-all duration-500 relative bg-zinc-900/40 backdrop-blur-md">
                        <h3 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-zinc-500 font-bold mb-6 text-sm uppercase tracking-wider">
                          {exp.company}
                        </p>

                        {/* Impact Quote Block */}
                        <div className={`p-5 rounded-2xl bg-black/40 border-l-4 border-cyan-500 mb-6 shadow-inner`}>
                          <div className="flex items-center gap-2 mb-2">
                             <Zap size={12} className="text-yellow-500" />
                             <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">System Impact</span>
                          </div>
                          <p className="text-zinc-300 text-sm leading-relaxed italic">
                            "{exp.impact}"
                          </p>
                        </div>

                        {/* Achievement Log */}
                        <div className="space-y-3 mb-8">
                          {exp.achievements.map((item, i) => (
                            <div key={i} className={`flex items-start gap-3 group/item ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <ChevronRight size={14} className="text-cyan-500 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                              <span className="text-zinc-400 text-sm leading-relaxed group-hover/item:text-zinc-200 transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology Matrix */}
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-zinc-950 border border-white/5 text-zinc-500 text-[9px] uppercase font-black tracking-tighter rounded-lg group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Visual connection dots for desktop */}
                      <div className={`hidden md:block absolute top-5 w-4 h-4 rounded-full border border-zinc-800 bg-zinc-950 z-10
                        ${isEven ? '-right-2 translate-x-1/2' : '-left-2 -translate-x-1/2'}`}>
                        <div className="absolute inset-1 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500 transition-colors"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Journey Infrastructure End */}
          <div className="absolute left-4 md:left-1/2 bottom-[-80px] transform -translate-x-1/2 flex flex-col items-center">
             <div className="w-1 h-12 bg-gradient-to-b from-zinc-800 to-transparent"></div>
             <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5 shadow-2xl">
                <p className="text-[9px] uppercase tracking-[0.5em] font-black text-zinc-500 text-center">Infrastructure Ready</p>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes conduit-flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-conduit-flow {
          animation: conduit-flow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;
