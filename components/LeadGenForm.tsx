import React, { useState } from 'react';
import { Phone, MessageCircle, Building2, ArrowRight, MapPin, Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Director } from '../types';

const directors: Director[] = [
  {
    region: 'Singapore HQ',
    name: 'Mr. Winston Jeong',
    phone: '+65 8787 6668',
    email: 'info@marencore.com'
  },
  {
    region: 'Malaysia Office',
    name: 'Mr. Sean Sim',
    phone: '+60 17 201 8149'
  },
  {
    region: 'South Korea Office',
    name: 'Mr. HB Kwon',
    phone: '+82 10 4183 1753'
  }
];

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleWhatsApp = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanNumber = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  const handleCall = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`tel:${phone.replace(/\s/g, '')}`, '_self');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/xwvnkyqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Leadership Contact Section */}
        <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Direct Access</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Connect with Leadership
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We believe in direct communication. Select your region to connect immediately with our executive directors or view their profiles to understand our governance.
            </p>
        </div>

        {/* Directors Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {directors.map((director, idx) => (
                <Link 
                    to={`/who-we-are#${director.name.replace(/\s+/g, '-').toLowerCase()}`}
                    key={idx} 
                    className={`reveal delay-${idx * 100} group relative bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col`}
                >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-slate-700 p-2 rounded-full">
                            <ArrowRight size={20} className="text-accent" />
                        </div>
                    </div>

                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center text-slate-300 mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Building2 size={28} />
                    </div>

                    <h3 className="text-xs font-bold text-accent uppercase tracking-wide mb-2 flex items-center gap-2">
                        <MapPin size={12} /> {director.region}
                    </h3>
                    <h4 className="text-2xl font-serif font-bold text-white mb-8">{director.name}</h4>

                    <div className="mt-auto space-y-3 pt-6 border-t border-slate-700/50">
                         <button 
                            onClick={(e) => handleCall(director.phone, e)}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 rounded-xl text-sm font-bold text-slate-300 hover:bg-white hover:text-slate-900 transition-colors"
                         >
                            <Phone size={16} /> Call Direct
                         </button>
                         <button 
                            onClick={(e) => handleWhatsApp(director.phone, e)}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366]/10 text-[#25D366] rounded-xl text-sm font-bold hover:bg-[#25D366] hover:text-white transition-colors"
                         >
                            <MessageCircle size={16} /> WhatsApp
                         </button>
                    </div>

                    <div className="mt-4 text-center">
                        <span className="text-xs text-slate-500 underline decoration-slate-600 group-hover:text-accent group-hover:decoration-accent transition-colors">View Executive Profile</span>
                    </div>
                </Link>
            ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16 max-w-4xl mx-auto reveal">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <span className="text-slate-500 font-serif italic text-lg">or send a message</span>
            <div className="h-px bg-slate-800 flex-grow"></div>
        </div>

        {/* Business Inquiry Form */}
        <div className="max-w-3xl mx-auto reveal">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Business Inquiry</h3>
                <p className="text-slate-400">
                    Looking for a specific feedstock specification or Agri-Tech solution? Drop us a detailed note.
                </p>
            </div>

            {status === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                        <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully</h4>
                    <p className="text-slate-300">Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-accent hover:text-white underline font-medium">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wide ml-1">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-wide ml-1">Company</label>
                            <input 
                                type="text" 
                                id="company" 
                                name="company" 
                                value={formState.company}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                                placeholder="Company Name"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wide ml-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wide ml-1">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={4}
                            required
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-600"
                            placeholder="Tell us about your requirements..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
                    >
                        {status === 'submitting' ? (
                            <><Loader2 className="animate-spin" size={20} /> Sending...</>
                        ) : (
                            <><Send size={20} /> Send Inquiry</>
                        )}
                    </button>
                    
                    {status === 'error' && (
                         <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                            <p className="text-red-400 text-sm">Something went wrong. Please try again or contact us via WhatsApp.</p>
                         </div>
                    )}
                </form>
            )}
        </div>

      </div>
    </section>
  );
};