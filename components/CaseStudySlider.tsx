import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    client: 'TechNova SaaS',
    metric: 'Organic Traffic',
    value: '+450%',
    image: 'https://picsum.photos/600/400?random=1',
    category: 'SEO'
  },
  {
    id: 'cs2',
    client: 'Luxe Apparel',
    metric: 'ROAS',
    value: '8.5x',
    image: 'https://picsum.photos/600/400?random=2',
    category: 'PPC'
  },
  {
    id: 'cs3',
    client: 'FitLife Gyms',
    metric: 'Lead Volume',
    value: '+210%',
    image: 'https://picsum.photos/600/400?random=3',
    category: 'Social Ads'
  },
  {
    id: 'cs4',
    client: 'GreenEnergy',
    metric: 'Conversion Rate',
    value: '+85%',
    image: 'https://picsum.photos/600/400?random=4',
    category: 'CRO'
  },
  {
    id: 'cs5',
    client: 'Urban Eat App',
    metric: 'App Installs',
    value: '150k+',
    image: 'https://picsum.photos/600/400?random=5',
    category: 'Growth'
  }
];

const CaseStudySlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // width of card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Recent <span className="text-brand-hot">Wins</span>
          </h2>
          <p className="text-slate-400">
            Real results for real brands. We let the numbers do the talking.
          </p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-4 rounded-full border border-slate-700 text-white hover:bg-white hover:text-brand-dark transition-all"
            aria-label="Scroll left"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-4 rounded-full bg-brand-primary text-white hover:bg-brand-primary/80 transition-all shadow-[0_0_20px_-5px_#6366f1]"
            aria-label="Scroll right"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="case-study-track flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {caseStudies.map((study) => (
          <div 
            key={study.id} 
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700"
          >
            {/* Image Overlay */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
              <img 
                src={study.image} 
                alt={study.client} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                {study.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{study.client}</h3>
                  <p className="text-sm text-slate-400">Case Study</p>
                </div>
                <div className="p-2 bg-brand-accent/10 rounded-lg">
                  <TrendingUp className="text-brand-accent" size={24} />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700 flex items-end justify-between">
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">{study.metric}</p>
                  <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-accent">
                    {study.value}
                  </p>
                </div>
                <button className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">
                  Read Story &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="w-6 flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default CaseStudySlider;