
import React from 'react';
import SectionHeader from './SectionHeader';
import { Target, Users, Shield, Zap } from 'lucide-react';

const stats = [
  { value: '8+', label: 'Years Experience', icon: <Zap className="text-cyan-500" /> },
  { value: '50+', label: 'Enterprise Systems', icon: <Target className="text-cyan-500" /> },
  { value: '15+', label: 'NGO/Gov Partners', icon: <Users className="text-cyan-500" /> },
  { value: '100%', label: 'Security Focus', icon: <Shield className="text-cyan-500" /> },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader title="System Specialist & Architect" subtitle="The Narrative" />
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                With over <span className="text-white font-semibold">8 years of professional experience</span>, I specialize in the architecture, development, and deployment of complex information systems for high-stakes environments.
              </p>
              <p>
                My work spans <span className="text-cyan-400">Enterprise Resource Planning (ERP)</span>, Human Resource Management (HRMIS), Management Information Systems (MIS), and robust Geographic Information Systems (GIS). I have collaborated extensively with international NGOs, UN-supported agencies (UN-OCHA, UNHCR, UNDP), and various government ministries.
              </p>
              <p>
                I am not just a developer; I am a technical lead committed to system optimization, leadership, and full-lifecycle software excellence. My goal is always to build systems that are as scalable as they are secure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center group hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
