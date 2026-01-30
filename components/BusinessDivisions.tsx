import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Sprout, Briefcase } from 'lucide-react';

export const BusinessDivisions: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Integrated Solutions</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Core Business
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Marencore operates at the intersection of Energy, Agriculture, and Governance. 
            Select a division to explore how we create value across the supply chain.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Pillar 1: Bioenergy */}
          <Link to="/bioenergy" className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer reveal-left">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/palm-trees.png" 
                alt="Bioenergy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
               <div className="w-16 h-16 bg-accent/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Droplets size={32} />
               </div>
               
               <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-accent transition-colors">
                 Bioenergy Trading
               </h3>
               
               <p className="text-slate-300 leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                 Bridging Southeast Asian feedstock (UCO, PAO) with Global Energy Refiners. We de-risk the supply chain for HVO & SAF production.
               </p>

               <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  Explore Solutions <ArrowRight size={16} />
               </div>
            </div>
          </Link>

          {/* Pillar 2: AgriTech */}
          <Link to="/agritech" className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer reveal-scale">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="AgriTech" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
               <div className="w-16 h-16 bg-green-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-green-400 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Sprout size={32} />
               </div>
               
               <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                 Agri-Tech
               </h3>
               
               <p className="text-slate-300 leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                 Deploying Korean Nano-Colloid technology to restore soil health. We boost yields and secure long-term feedstock stability.
               </p>

               <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  View Technology <ArrowRight size={16} />
               </div>
            </div>
          </Link>

          {/* Pillar 3: Consulting */}
          <Link to="/consulting" className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer reveal-right">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/ESG%20report.png" 
                alt="Consulting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
               <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Briefcase size={32} />
               </div>
               
               <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                 ESG Consulting
               </h3>
               
               <p className="text-slate-300 leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                 B2G2B Advisory. From Carbon Credit strategies to RE100 roadmaps, we guide companies through global compliance complexities.
               </p>

               <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  See Services <ArrowRight size={16} />
               </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};