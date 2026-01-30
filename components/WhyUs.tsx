import React from 'react';
import { Wind, Sprout, Scale, Network, ShieldCheck, Database, ArrowUpRight, Zap } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 scroll-mt-20 overflow-hidden bg-slate-50 text-slate-900">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Our Differentiation</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900">
            Green Value Architecture
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto font-light text-lg leading-relaxed">
            We do not view sustainability as a linear checklist. Instead, we have engineered a multi-dimensional ecosystem where Trading, Technology, and Consulting act as mutually reinforcing pillars.
          </p>
        </div>

        {/* 3 PILLARS - BENTO GRID STYLE */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
           
           {/* Pillar 1: TRADING (Climate) */}
           <div className="reveal delay-100 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/30 hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Wind size={80} className="text-primary" />
              </div>
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Energy Transition</h3>
                 <p className="text-xs font-bold text-primary uppercase tracking-wide mb-4">Via Feedstock Trading</p>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Channeling UCO and PAO directly into the global renewable fuel supply chain. We drive <strong>Climate Impact</strong> by fueling the production of HVO, SAF, and Bio-diesel.
                 </p>
                 <ul className="space-y-2 border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <ArrowUpRight size={14} className="text-accent" /> Carbon Intensity Reduction
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <ArrowUpRight size={14} className="text-accent" /> Waste-to-Energy Optimization
                    </li>
                 </ul>
              </div>
           </div>

           {/* Pillar 2: AGRITECH (Env/Social) */}
           <div className="reveal delay-200 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-accent/30 hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Sprout size={80} className="text-accent" />
              </div>
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sprout size={24} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Regenerative Resilience</h3>
                 <p className="text-xs font-bold text-accent uppercase tracking-wide mb-4">Via Agri-Tech Deployment</p>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Deploying bio-technology to restore soil health and boost yields. We create <strong>Environmental & Social Impact</strong> by securing the economic future of farming communities.
                 </p>
                 <ul className="space-y-2 border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <ArrowUpRight size={14} className="text-accent" /> Soil Microbiome Restoration
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <ArrowUpRight size={14} className="text-accent" /> Yield Security for Farmers
                    </li>
                 </ul>
              </div>
           </div>

           {/* Pillar 3: CONSULTING (Governance) */}
           <div className="reveal delay-300 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-slate-400 hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Scale size={80} className="text-slate-600" />
              </div>
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Scale size={24} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Global Governance</h3>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">Via Strategic Advisory</p>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Ensuring every project aligns with global regulations. We deliver <strong>Governance Impact</strong> by de-risking cross-border growth through ISCC & EUDR compliance.
                 </p>
                 <ul className="space-y-2 border-t border-slate-100 pt-4">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <ArrowUpRight size={14} className="text-accent" /> Regulatory Alignment
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <ArrowUpRight size={14} className="text-accent" /> Transparent Reporting
                    </li>
                 </ul>
              </div>
           </div>

        </div>

        {/* THE SYNERGY LAYER (Bottom) */}
        <div className="reveal-scale bg-white rounded-2xl border border-slate-200 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-slate-900"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">The Connected Ecosystem</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        These are not isolated services. They form a <span className="text-primary font-bold">Green Value Architecture</span> where data, contracts, and compliance frameworks reinforce one another.
                    </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-3">
                        <Network className="text-accent" size={28} />
                        <h4 className="font-bold text-slate-900 text-sm">Integration</h4>
                        <p className="text-xs text-slate-500">Farm-level tech secures supply data, which empowers trading accuracy.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Database className="text-accent" size={28} />
                        <h4 className="font-bold text-slate-900 text-sm">Data Synergy</h4>
                        <p className="text-xs text-slate-500">Real-time harvest metrics inform future contracts and price forecasting.</p>
                    </div>
                     <div className="flex flex-col gap-3">
                        <ShieldCheck className="text-accent" size={28} />
                        <h4 className="font-bold text-slate-900 text-sm">Risk Shield</h4>
                        <p className="text-xs text-slate-500">Consulting frameworks de-risk the entire physical trade flow.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};