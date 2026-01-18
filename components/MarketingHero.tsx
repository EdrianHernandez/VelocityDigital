import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const WORDS = ["REVENUE", "TRAFFIC", "GROWTH", "SALES"];

const MarketingHero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-hot rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-8 animate-fade-in-up">
          <Zap size={14} className="fill-current" />
          <span>Voted #1 ROI Agency 2024</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6">
          WE SCALE <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-white to-brand-hot animate-gradient-x">
             DIGITAL {WORDS[currentWordIndex]}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          Stop guessing. Start growing. Velocity Digital fuses data-driven SEO strategies with high-octane creative performance to dominate your market share.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="agency-hero-btn group relative px-8 py-4 bg-white text-brand-dark font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Get Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-100/50"></div>
          </button>
          
          <button className="px-8 py-4 text-white font-semibold rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
            View Case Studies
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-10">
          <div>
            <p className="text-4xl font-bold text-white mb-1">$500M+</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Client Revenue</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white mb-1">2.5M+</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Leads Generated</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white mb-1">98%</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Retention Rate</p>
          </div>
           <div>
            <p className="text-4xl font-bold text-white mb-1">10x</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Avg ROI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingHero;