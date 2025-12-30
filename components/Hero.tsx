
import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Code, 
  Database, 
  Cpu, 
  Map, 
  Boxes, 
  Layout, 
  Braces, 
  Atom, 
  Terminal, 
  Palette,
  Github,
  Figma,
  Cloud,
  Zap,
  Download
} from 'lucide-react';

const Hero: React.FC = () => {
  // Skill nodes with brand colors matching the reference style
  const skillIcons = [
    // Orbit 1 (Inner)
    { Icon: Code, color: 'border-cyan-400 text-cyan-400 shadow-cyan-500/50', orbit: 'orbit-1', duration: '20s', delay: '0s', label: 'PHP' },
    { Icon: Atom, color: 'border-blue-400 text-blue-400 shadow-blue-500/50', orbit: 'orbit-1', duration: '20s', delay: '-6.6s', label: 'React' },
    { Icon: Boxes, color: 'border-red-500 text-red-500 shadow-red-500/50', orbit: 'orbit-1', duration: '20s', delay: '-13.3s', label: 'Laravel' },
    
    // Orbit 2 (Middle)
    { Icon: Braces, color: 'border-yellow-400 text-yellow-400 shadow-yellow-500/50', orbit: 'orbit-2', duration: '35s', delay: '0s', label: 'JS' },
    { Icon: Terminal, color: 'border-sky-400 text-sky-400 shadow-sky-500/50', orbit: 'orbit-2', duration: '35s', delay: '-8.75s', label: 'Python' },
    { Icon: Figma, color: 'border-purple-500 text-purple-500 shadow-purple-500/50', orbit: 'orbit-2', duration: '35s', delay: '-17.5s', label: 'Figma' },
    { Icon: Cloud, color: 'border-orange-500 text-orange-500 shadow-orange-500/50', orbit: 'orbit-2', duration: '35s', delay: '-26.25s', label: 'AWS' },

    // Orbit 3 (Outer)
    { Icon: Palette, color: 'border-cyan-300 text-cyan-300 shadow-cyan-300/50', orbit: 'orbit-3', duration: '50s', delay: '0s', label: 'Tailwind' },
    { Icon: Layout, color: 'border-blue-500 text-blue-500 shadow-blue-500/50', orbit: 'orbit-3', duration: '50s', delay: '-12.5s', label: 'WordPress' },
    { Icon: Map, color: 'border-emerald-400 text-emerald-400 shadow-emerald-400/50', orbit: 'orbit-3', duration: '50s', delay: '-25s', label: 'GIS' },
    { Icon: Github, color: 'border-zinc-400 text-zinc-400 shadow-zinc-400/50', orbit: 'orbit-3', duration: '50s', delay: '-37.5s', label: 'Git' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.1)_0%,transparent_60%)]"></div>
      
      {/* Central Visual Composition */}
      <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center mb-12">
        
        {/* Orbital Path Lines */}
        <div className="absolute w-[45%] h-[45%] border border-blue-500/20 rounded-full"></div>
        <div className="absolute w-[70%] h-[70%] border border-indigo-500/15 rounded-full"></div>
        <div className="absolute w-[95%] h-[95%] border border-purple-500/10 rounded-full"></div>

        {/* Central Profile Core (The Person) */}
        <div className="relative z-20 w-48 h-48 md:w-72 md:h-72">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-zinc-900 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
            <img 
              src="https://scontent-sea5-1.xx.fbcdn.net/v/t39.30808-1/552428104_1961501191266147_5312745472967466302_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Q2FNu1YzQdgQ7kNvwEZ4wlc&_nc_oc=AdkltefsGAPBM1XFeUHTEW9N84C_bQS5a65Fjga593XRu2VJnVjS-Lz-1aK4NFzDh5k&_nc_zt=24&_nc_ht=scontent-sea5-1.xx&_nc_gid=cvRCI7atgI0K30bfI3Y4FA&oh=00_AfldYInh3rKDDyJlkTB6dogLtamDtBO90E_lTDLIOKM-XQ&oe=69599DC6" 
              alt="Khalid Usman Quraishi" 
              className="w-full h-full object-cover object-top scale-100 brightness-110 contrast-105"
            />
          </div>
          {/* Status Indicator Bubble */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-zinc-950 border border-cyan-500/50 px-3 py-1 rounded-full shadow-2xl animate-bounce-subtle">
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-tighter flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Online
            </span>
          </div>
        </div>

        {/* Orbital Technology Nodes */}
        {skillIcons.map((skill, i) => (
          <div 
            key={i}
            className={`absolute ${skill.orbit === 'orbit-1' ? 'w-[45%] h-[45%]' : skill.orbit === 'orbit-2' ? 'w-[70%] h-[70%]' : 'w-[95%] h-[95%]'} animate-orbit`}
            style={{ 
              animationDuration: skill.duration,
              animationDelay: skill.delay,
              zIndex: 30
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
              <div className={`relative w-10 h-10 md:w-14 md:h-14 bg-black rounded-full border-2 ${skill.color} shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-zinc-900 overflow-hidden`}>
                <skill.Icon size={18} className="md:w-6 md:h-6" />
                
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 opacity-20 bg-current"></div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-[9px] font-black bg-zinc-900/90 text-white px-2 py-1 rounded border border-white/10 uppercase tracking-widest">
                  {skill.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Typography & CTA */}
      <div className="text-center space-y-4 z-40 max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Khalid Usman Quraishi</span>
        </h1>
        <p className="text-lg md:text-2xl font-bold text-yellow-500/90 uppercase tracking-[0.15em]">
          System Architect, Lead Developer & Tech Strategist
        </p>
        
        <div className="pt-8 flex flex-wrap justify-center gap-4">
          <a 
            href="#" 
            className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-cyan-400 transition-all shadow-xl shadow-white/5 flex items-center gap-2 group"
          >
            Download Resume <FileText size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-zinc-950/50 border border-white/10 text-white font-bold rounded-full hover:bg-zinc-900 transition-all backdrop-blur-xl flex items-center gap-2"
          >
            Let's Talk <Zap size={18} className="text-yellow-500" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translate(50%, -50%) translateY(0); }
          50% { transform: translate(50%, -50%) translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
