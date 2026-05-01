
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Cpu, Layers, Briefcase, Mail } from 'lucide-react';

interface Props {
  isDetailView?: boolean;
  onHomeClick?: () => void;
  onExternalNavigate?: (id: string) => void;
}

const Navigation: React.FC<Props> = ({ isDetailView, onHomeClick, onExternalNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about', id: 'about', icon: <User size={16} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <Cpu size={16} /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <Layers size={16} /> },
    { name: 'Experience', href: '#experience', id: 'experience', icon: <Briefcase size={16} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={16} /> },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isDetailView && onExternalNavigate) {
      onExternalNavigate(id);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const delay = isMenuOpen ? 300 : 0;
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, delay);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDetailView && onHomeClick) {
      onHomeClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isDetailView ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group" onClick={handleLogoClick}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-xl font-black">{'>_'}</span>
          </div>
          <span className="text-lg md:text-xl font-bold text-white tracking-tight whitespace-nowrap">
            Khalid Usman <span className="text-cyan-500">Quraishi</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href, link.id)}
              className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-all"
            >
              <span className="text-zinc-600 group-hover:text-cyan-500 transition-colors">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-[#050505]/fb backdrop-blur-3xl flex flex-col items-center justify-center gap-10 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {links.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleLinkClick(e, link.href, link.id)}
            className={`flex items-center gap-4 text-3xl font-bold text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <span className="text-cyan-500">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
