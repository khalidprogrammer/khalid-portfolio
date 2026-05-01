
import React from 'react';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Let's Build Scalable Systems" subtitle="Connect" align="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-zinc-400 max-w-md">
              Whether you're looking for enterprise strategy, a lead developer for a government project, or a system architect for an NGO initiative, let's talk about the impact we can make.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-white font-medium">khalid.csit1234@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Call Me</div>
                  <div className="text-white font-medium">+93 (0) 781757321</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-white font-medium">Kabul, Afghanistan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="glass p-8 rounded-[40px] border-white/5 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about System Audit"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your project needs..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-500 transition-all transform hover:-translate-y-1">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
