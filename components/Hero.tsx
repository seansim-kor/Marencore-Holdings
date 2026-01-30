import React from 'react';
import { Sprout, Globe, Scale } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[700px] w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
        >
            <source src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/herovideo.mp4" type="video/mp4" />
        </video>
        
        {/* Tech-Green Overlay - Lightened by 50% */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/40 via-[#0f172a]/35 to-[#0f172a]/45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8 opacity-0 animate-fade-in-down">
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
             Global Business Orchestrator
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight drop-shadow-2xl opacity-0 animate-fade-in-up delay-100">
            Fueling the Future, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-400 italic">
              Regenerating the Earth
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-green-50 mb-12 font-light leading-relaxed max-w-3xl drop-shadow-md opacity-0 animate-fade-in-up delay-200">
            From sourcing feedstocks for future energy to deploying technology that revitalizes the soil. 
            Marencore combines <strong>Korean Innovation</strong> with <strong>Southeast Asian Resources</strong> to deliver the answer for sustainable growth.
          </p>

          <div className="flex gap-4 opacity-0 animate-fade-in-up delay-300 mb-12">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
            >
              Discuss Partnership
            </button>
            <button 
              onClick={() => document.getElementById('trading')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white text-white hover:text-primary border border-white/30 px-8 py-3 rounded-full font-bold transition-all backdrop-blur-md hover:-translate-y-1"
            >
              Our Solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-sm text-green-50 font-medium tracking-wide border-t border-white/10 pt-8 w-full max-w-4xl opacity-0 animate-fade-in-up delay-400">
            <div className="flex items-center justify-center gap-3">
               <Globe size={18} className="text-accent" />
               Korea-SEA Strategic Hub
            </div>
             <div className="flex items-center justify-center gap-3">
               <Sprout size={18} className="text-accent" />
               Agri-Tech & Feedstock
            </div>
             <div className="flex items-center justify-center gap-3">
               <Scale size={18} className="text-accent" />
               Compliance & Risk Control
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};