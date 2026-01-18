import React from 'react';
import { Rocket } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
            <Rocket size={24} fill="currentColor" className="text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">VELOCITY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Agency</a>
          <a href="#" className="px-5 py-2.5 rounded-full border border-slate-700 text-sm font-semibold text-white hover:bg-white hover:text-brand-dark transition-all">
            Client Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
