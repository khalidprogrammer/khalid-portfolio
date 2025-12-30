
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-8 bg-cyan-500"></div>
        <span className="text-cyan-500 font-semibold tracking-widest text-xs uppercase">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
