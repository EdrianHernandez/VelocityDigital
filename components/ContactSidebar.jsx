import React, { useState } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';

const ContactSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goal: 'seo'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thanks! Your free audit request has been sent to our team.');
    setIsOpen(false);
    setFormData({ name: '', email: '', website: '', goal: 'seo' });
  };

  return (
    <>
      {/* Toggle Button (Sticky) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 bg-brand-primary p-3 rounded-l-2xl shadow-2xl hover:bg-brand-primary/90 transition-all duration-300 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
        aria-label="Open Contact Form"
      >
        <span className="writing-vertical-rl text-white font-bold tracking-widest text-sm uppercase py-2 rotate-180">
          Get Free Audit
        </span>
        <div className="bg-white/20 p-2 rounded-full">
            <MessageSquare size={20} className="text-white" />
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-slate-900 border-l border-slate-800 z-50 transform transition-transform duration-500 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-white">Let's Grow</h3>
                    <p className="text-slate-400 text-sm">Claim your free 30-min strategy audit.</p>
                </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder-slate-500"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder-slate-500"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Website URL</label>
                    <input 
                        type="url" 
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all placeholder-slate-500"
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Primary Goal</label>
                    <div className="grid grid-cols-2 gap-3">
                        {['SEO', 'PPC', 'Social', 'Leads'].map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => setFormData({...formData, goal: opt.toLowerCase()})}
                                className={`px-4 py-3 rounded-xl text-sm font-semibold border transition-all ${
                                    formData.goal === opt.toLowerCase() 
                                    ? 'bg-brand-primary border-brand-primary text-white' 
                                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-brand-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        Get My Audit <Send size={18} />
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        No credit card required. 100% free analysis.
                    </p>
                </div>
            </form>
        </div>
      </aside>
    </>
  );
};

export default ContactSidebar;
