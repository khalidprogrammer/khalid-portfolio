
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-zinc-900 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <a href="#" className="text-2xl font-bold text-white tracking-tighter mb-2 flex items-center gap-2 uppercase">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-black font-black">K</div>
                KHALID USMAN <span className="text-cyan-500">QURAISHI</span>
             </a>
             <p className="text-zinc-500 text-sm">Enterprise System Architect & Lead Developer</p>
          </div>

          <div className="flex gap-8">
            {SOCIAL_LINKS.map(link => (
              <a key={link.name} href={link.url} className="text-zinc-500 hover:text-white transition-colors">
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-zinc-600 text-sm font-medium">
            &copy; {year} Khalid Usman Quraishi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
