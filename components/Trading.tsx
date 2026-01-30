import React from 'react';
import { Droplets, TrendingDown, PackageCheck, ShieldCheck, Lock, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Trading: React.FC = () => {
  return (
    <section id="trading" className="py-24 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header emphasizing Core Business */}
        <div className="text-center mb-20 reveal">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
             Our Core Business Pillar
           </div>
           <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
             Bioenergy Feedstock Trading
           </h2>
           <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed font-light">
             We act as the strategic bridge between SEA producers and Global energy refiners. 
             Leveraging Malaysia's structural advantages, we deliver high-spec feedstock for the biofuel industry.
           </p>
        </div>

        {/* MAIN PRODUCT CARDS: UCO & PAO */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
           {/* UCO Card */}
           <div className="reveal-left group relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary"></div>
              
              <div className="p-10 flex flex-col h-full text-slate-900">
                  <div className="flex justify-between items-start mb-8">
                      <div>
                          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-1">UCO</h3>
                          <p className="text-primary font-bold text-sm tracking-widest uppercase">Used Cooking Oil</p>
                      </div>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                         <Droplets size={32} />
                      </div>
                  </div>

                  <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                     Premium waste-based feedstock collected from verified points of origin (Restaurants, Food Factories). 
                     Crucial for <strong>HVO</strong> and <strong>SAF</strong> (Sustainable Aviation Fuel) production.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide border-b border-slate-200 pb-2">Key Specifications</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-accent rounded-full"></span> High Iodine Value (IV)
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-accent rounded-full"></span> Low Free Fatty Acid (FFA) &lt; 5%
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-accent rounded-full"></span> ISCC Verified Traceability
                        </li>
                     </ul>
                  </div>

                  <Link to="/bioenergy" className="w-full py-4 border-2 border-slate-200 hover:border-primary text-slate-900 hover:text-primary font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-primary/5">
                      Explore UCO Supply <ArrowRight size={18} />
                  </Link>
              </div>
           </div>

           {/* PAO Card */}
           <div className="reveal-right group relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              
              <div className="p-10 flex flex-col h-full text-slate-900">
                  <div className="flex justify-between items-start mb-8">
                      <div>
                          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-1">PAO</h3>
                          <p className="text-orange-600 font-bold text-sm tracking-widest uppercase">Palm Acid Oil</p>
                      </div>
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                         <Factory size={32} />
                      </div>
                  </div>

                  <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                     A high-energy byproduct of palm oil refining. A cost-effective, high-calorific feedstock widely used for 
                     <strong> biodiesel</strong> and <strong>biomass energy</strong> generation across Asia and Europe.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide border-b border-slate-200 pb-2">Key Advantages</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Direct from SEA Mills
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Consistent Bulk Supply
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Cost-Effective Energy Source
                        </li>
                     </ul>
                  </div>

                   <Link to="/bioenergy" className="w-full py-4 border-2 border-slate-200 hover:border-orange-600 text-slate-900 hover:text-orange-600 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-orange-50">
                      Explore PAO Supply <ArrowRight size={18} />
                  </Link>
              </div>
           </div>
        </div>

        {/* Structural Advantages (Dark Mode) */}
        <div className="reveal-scale bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold text-white mb-10 text-center">Gain a Competitive Edge</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Benefit 1: Cost */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        <TrendingDown size={28} />
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Better Profit Margins</h4>
                    <p className="text-sm text-slate-400">We leverage our direct refinery relationships and volume aggregation to offer landed costs significantly below market indices.</p>
                </div>

                {/* Benefit 2: Supply */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        <PackageCheck size={28} />
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Guaranteed Volume</h4>
                    <p className="text-sm text-slate-400">Never halt production. Our direct farm integration ensures priority allocation for your factory, even during shortages.</p>
                </div>

                {/* Benefit 3: Security */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        <ShieldCheck size={28} />
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Zero Counterparty Risk</h4>
                    <p className="text-sm text-slate-400">Sleep easy. We provide neutral quality certification (SGS) and transparent contracting to protect your capital.</p>
                </div>

                {/* Benefit 4: Hedging */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Lock size={28} />
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Price Volatility Shield</h4>
                    <p className="text-sm text-slate-400">Protect your P&L. Utilize our fixed-price forward contracts to lock in costs and hedge against market swings.</p>
                </div>
            </div>

            <div className="mt-12 text-center border-t border-white/10 pt-10">
                <Link
                  to="/bioenergy"
                  className="bg-accent hover:bg-lime-500 text-white px-12 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-lime-500/30 hover:-translate-y-1 text-lg"
                >
                    Start a Trade Discussion
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};