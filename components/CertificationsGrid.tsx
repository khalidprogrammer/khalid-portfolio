
import React from 'react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../constants';
import * as Icons from 'lucide-react';

const CertificationsGrid: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Professional Credentials" subtitle="Qualifications" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = (Icons as any)[cert.icon];
            return (
              <div key={cert.id} className="glass p-8 rounded-3xl border-white/5 hover:bg-zinc-900/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform border border-zinc-800 group-hover:border-cyan-500/50">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                  <span className="text-zinc-600 text-xs font-mono">{cert.date}</span>
                  <span className="text-[10px] text-cyan-500/50 uppercase font-bold tracking-widest">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsGrid;
