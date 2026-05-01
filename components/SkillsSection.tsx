
import React, { useState, useEffect, useRef } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from 'recharts';
import SectionHeader from './SectionHeader';
import { SKILLS_DATA } from '../constants';

const radarData = [
  { subject: 'Backend', A: 95, fullMark: 100 },
  { subject: 'Frontend', A: 85, fullMark: 100 },
  { subject: 'Database', A: 90, fullMark: 100 },
  { subject: 'DevOps', A: 75, fullMark: 100 },
  { subject: 'GIS', A: 80, fullMark: 100 },
  { subject: 'Leadership', A: 88, fullMark: 100 },
];

const getProficiencyLabel = (level: number) => {
  if (level >= 95) return 'Lead';
  if (level >= 85) return 'Expert';
  if (level >= 75) return 'Advanced';
  return 'Intermediate';
};

const getCategoryTheme = (category: string) => {
  switch (category) {
    case 'Programming Languages':
      return {
        bar: 'bg-gradient-to-r from-cyan-500 to-blue-500',
        glow: 'shadow-[0_0_15px_rgba(6,182,212,0.4)]',
        text: 'text-cyan-400',
        border: 'border-cyan-500/20'
      };
    case 'Frameworks & UI':
      return {
        bar: 'bg-gradient-to-r from-blue-400 to-cyan-300',
        glow: 'shadow-[0_0_15px_rgba(56,189,248,0.4)]',
        text: 'text-sky-400',
        border: 'border-sky-500/20'
      };
    case 'Data & DevOps':
      return {
        bar: 'bg-gradient-to-r from-blue-600 to-indigo-500',
        glow: 'shadow-[0_0_15px_rgba(79,70,229,0.4)]',
        text: 'text-indigo-400',
        border: 'border-indigo-500/20'
      };
    default:
      return {
        bar: 'bg-zinc-600',
        glow: 'shadow-none',
        text: 'text-zinc-400',
        border: 'border-white/5'
      };
  }
};

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full -z-10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Expertise Matrix" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Chart View */}
          <div className="glass p-8 rounded-[2.5rem] border-white/5 shadow-2xl h-[500px] flex flex-col">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
              Strategic Distribution
            </h3>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#222" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 12, fontWeight: 700 }} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.15}
                    animationBegin={300}
                    animationDuration={2000}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* List View */}
          <div className="space-y-14">
            {SKILLS_DATA.map((group, idx) => {
              const theme = getCategoryTheme(group.category);
              return (
                <div 
                  key={idx} 
                  className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`} 
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 flex items-center gap-4">
                    <span className={theme.text}>
                      {group.category}
                    </span>
                    <div className={`h-px flex-1 bg-gradient-to-r from-zinc-800 via-zinc-800 to-transparent`}></div>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group relative">
                        <div className="flex justify-between items-end mb-3">
                          <div className="flex flex-col">
                            <span className="text-zinc-300 font-bold text-sm tracking-wide group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                            <span className={`text-[10px] font-black uppercase tracking-widest mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity ${theme.text}`}>
                              {getProficiencyLabel(skill.level)}
                            </span>
                          </div>
                          <span className={`text-[10px] font-black font-mono px-2 py-0.5 rounded border ${theme.border} bg-zinc-900/50 ${theme.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* High-End Modular Progress Bar */}
                        <div className="h-5 w-full bg-black/60 rounded-lg overflow-hidden border border-white/5 relative flex items-center p-1 group/bar">
                          {/* Segmented Grid Mask (Visual decoration) */}
                          <div className="absolute inset-0 flex justify-between gap-[2px] px-[2px] pointer-events-none z-10">
                            {[...Array(12)].map((_, i) => (
                              <div key={i} className="flex-1 h-full bg-black/30 backdrop-blur-[1px]"></div>
                            ))}
                          </div>

                          {/* Progress Indicator */}
                          <div 
                            className={`h-full rounded-[4px] transition-all duration-[2500ms] ease-out-expo relative z-0
                              ${theme.bar} ${theme.glow} group-hover/bar:brightness-125`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(idx * 150) + (sIdx * 100)}ms`
                            }}
                          >
                            {/* Scanning Light Effect */}
                            {isVisible && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-shimmer"></div>
                            )}
                            
                            {/* Leading Edge Sparkle */}
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/40 shadow-[0_0_10px_white]"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
