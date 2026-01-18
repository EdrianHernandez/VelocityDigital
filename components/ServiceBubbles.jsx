import React from 'react';
import { Search, MousePointer2, Share2, Mail, BarChart2, Globe } from 'lucide-react';

const services = [
  {
    id: 'seo',
    title: 'Organic SEO',
    description: 'Dominate search rankings with technical precision and authority-building content.',
    icon: Search,
    color: 'bg-blue-500'
  },
  {
    id: 'ppc',
    title: 'PPC & Paid Media',
    description: 'High-intent traffic acquisition with maximize ROAS on Google & Meta Ads.',
    icon: MousePointer2,
    color: 'bg-brand-hot'
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Community growth and viral creative strategies that convert followers to buyers.',
    icon: Share2,
    color: 'bg-purple-500'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Automated lifecycle flows that nurture leads and maximize LTV.',
    icon: Mail,
    color: 'bg-orange-500'
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Advanced tracking setups to measure every touchpoint of the user journey.',
    icon: BarChart2,
    color: 'bg-green-500'
  },
  {
    id: 'web',
    title: 'Web Dev & CRO',
    description: 'High-performance websites optimized for maximum conversion rates.',
    icon: Globe,
    color: 'bg-brand-accent'
  }
];

const ServiceBubbles = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative line */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent transform -translate-x-1/2 opacity-30"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Growth <span className="text-brand-accent">Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We don't just run ads. We build comprehensive digital ecosystems designed to capture, nurture, and convert your ideal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-bubble-card group relative p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${service.color}/10`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-10 rounded-bl-[4rem] rounded-tr-[2rem] transition-all group-hover:scale-110 duration-500 blur-2xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <span className="border-b border-brand-accent pb-0.5">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBubbles;
