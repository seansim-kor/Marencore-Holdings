import React from 'react';
import { Phone, MessageCircle, Building2, ArrowRight, MapPin } from 'lucide-react';
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
  
  const handleWhatsApp = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanNumber = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  const handleCall = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`tel:${phone.replace(/\s/g, '')}`, '_self');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Direct Access</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Connect with Leadership
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We believe in direct communication. Select your region to connect immediately with our executive directors or view their profiles to understand our governance.
            </p>
        </div>

        {/* Directors Grid - Replaced Form */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      </div>
    </section>
  );
};