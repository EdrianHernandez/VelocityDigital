import React from 'react';
import Navigation from './components/Navigation';
import MarketingHero from './components/MarketingHero';
import ServiceBubbles from './components/ServiceBubbles';
import CaseStudySlider from './components/CaseStudySlider';
import ContactSidebar from './components/ContactSidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-hot selection:text-white">
      <Navigation />
      
      <main>
        <MarketingHero />
        <ServiceBubbles />
        <CaseStudySlider />
        
        {/* Footer Teaser */}
        <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-dark text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to dominate?</h2>
            <p className="max-w-2xl mx-auto text-white/80 text-xl mb-10">
                Join 500+ ambitious brands scaling with Velocity today.
            </p>
            <button className="px-10 py-5 bg-white text-brand-primary font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-2xl">
                Start Your Project
            </button>
        </section>
      </main>

      <ContactSidebar />
      
      <footer className="bg-black py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Velocity Digital Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;