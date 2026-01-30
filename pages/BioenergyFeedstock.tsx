import React, { useEffect } from 'react';
import { Droplets, Factory, Globe, ShieldCheck, TrendingUp, Recycle, Zap, ArrowRight, Anchor, Scale, FileCheck, Plane, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '../components/LeadGenForm';

export const BioenergyFeedstock: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans text-slate-900 selection:bg-accent selection:text-white pt-20">
      
      {/* 1. HERO: From Waste to Low-Carbon Fuel */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/palm-trees.png" 
            alt="Bioenergy Feedstock Source" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Future Energy Feedstock
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up delay-100">
              From Waste to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200">
                Low-Carbon Fuel
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl animate-fade-in-up delay-200">
              We turn UCO and PAO into bankable, scalable assets for your net-zero strategy. 
              Marencore orchestrates the flow from Southeast Asian collection points to Global Refineries with compliance built-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start a Supply Discussion <ArrowRight size={18}/>
              </button>
              <button 
                onClick={() => document.getElementById('industry-101')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md"
              >
                Learn the Value Chain
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY 101: UCO & PAO */}
      <section id="industry-101" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The Raw Material of Decarbonization</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Why regulators and energy majors are shifting focus from food-based crops to waste-based residues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* UCO Card */}
            <div className="reveal-left group bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:border-accent/30 hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <Droplets size={32} />
                </div>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase">HVO & SAF Feedstock</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">UCO <span className="text-lg font-sans font-normal text-slate-500">(Used Cooking Oil)</span></h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Liquid waste collected from restaurants and food factories. It is the "Gold Standard" for Hydrotreated Vegetable Oil (HVO) and Sustainable Aviation Fuel (SAF) due to its high energy density and carbon reduction potential.
              </p>
              <ul className="space-y-3 border-t border-slate-200 pt-6">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <TrendingUp size={16} className="text-accent" /> Double Counting (EU RED II) Eligible
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <TrendingUp size={16} className="text-accent" /> High Iodine Value (IV)
                </li>
              </ul>
            </div>

            {/* PAO Card */}
            <div className="reveal-right group bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:border-orange-500/30 hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                  <Factory size={32} />
                </div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Biodiesel & Energy</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">PAO <span className="text-lg font-sans font-normal text-slate-500">(Palm Acid Oil)</span></h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A byproduct of palm oil refining. While distinct from crude palm oil, it offers a cost-effective, high-calorific solution for biodiesel production and direct biomass energy generation.
              </p>
              <ul className="space-y-3 border-t border-slate-200 pt-6">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <Zap size={16} className="text-orange-500" /> High Calorific Value
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <Zap size={16} className="text-orange-500" /> Cost-Effective Bulk Volume
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE CHAIN: From Waste to Energy (UPDATED) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-20 reveal">
             <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">End-to-End Ownership</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
               Orchestrating the Integrated Supply Chain
             </h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
               We don't just move cargo. Marencore controls the critical path—from the first mile of collection to the final export document—ensuring our partners receive refinery-ready feedstock.
             </p>
           </div>

           {/* Value Chain Visualization */}
           <div className="relative max-w-7xl mx-auto">
              
              {/* Desktop Layout: Grouped 1-3 */}
              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                  
                  {/* MARENCORE SCOPE (1-3) */}
                  <div className="lg:w-3/4 relative bg-slate-800/50 rounded-3xl border border-slate-700 p-8 pt-12 hover:border-accent/50 transition-colors duration-500">
                      {/* Badge */}
                      <div className="absolute -top-5 left-8 lg:left-12 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-accent/20 flex items-center gap-2">
                        <ShieldCheck size={16} /> Marencore Integrated Operations
                      </div>

                      <div className="grid md:grid-cols-3 gap-8 h-full">
                          {/* Step 1 */}
                          <div className="reveal delay-100 text-center group">
                              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 mb-6 group-hover:bg-accent group-hover:text-white transition-all shadow-lg relative z-10">
                                  <Recycle size={28} />
                              </div>
                              <h4 className="font-bold text-xl mb-3 text-white">1. Strategic Aggregation</h4>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                 Securing the "First Mile". We consolidate volume from thousands of micro-points (restaurants, mills) across SEA via our exclusive collector network.
                              </p>
                          </div>

                          {/* Arrow */}
                          <div className="hidden md:flex items-center justify-center">
                              <ArrowRight size={24} className="text-slate-600" />
                          </div>

                          {/* Step 2 */}
                          <div className="reveal delay-200 text-center group md:-ml-8">
                              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 mb-6 group-hover:bg-accent group-hover:text-white transition-all shadow-lg relative z-10">
                                  <Factory size={28} />
                              </div>
                              <h4 className="font-bold text-xl mb-3 text-white">2. Pre-Treatment & QC</h4>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                 Converting heterogeneity to homogeneity. Filtration, moisture removal, and strict lab testing at Marencore partner facilities to meet ISCC specs.
                              </p>
                          </div>

                           {/* Arrow */}
                           <div className="hidden md:flex items-center justify-center">
                              <ArrowRight size={24} className="text-slate-600" />
                          </div>

                          {/* Step 3 */}
                          <div className="reveal delay-300 text-center group md:-ml-8">
                              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 mb-6 group-hover:bg-accent group-hover:text-white transition-all shadow-lg relative z-10">
                                  <Anchor size={28} />
                              </div>
                              <h4 className="font-bold text-xl mb-3 text-white">3. Structured Logistics</h4>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                 De-risking the border. We handle export permits, regulatory clearance, and bulk chartering/flexibags for safe global transit.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* CONNECTOR (Desktop) */}
                  <div className="hidden lg:flex items-center justify-center text-accent animate-pulse">
                      <ArrowRight size={48} strokeWidth={3} />
                  </div>
                  {/* CONNECTOR (Mobile) */}
                   <div className="lg:hidden flex justify-center text-accent animate-pulse -my-2">
                      <ArrowRight size={32} strokeWidth={3} className="rotate-90" />
                  </div>


                  {/* CLIENT SUCCESS (4) */}
                  <div className="lg:w-1/4 bg-gradient-to-br from-blue-900/40 to-slate-800 rounded-3xl border border-blue-500/30 p-8 flex flex-col items-center justify-center text-center hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all">
                      <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6 shadow-inner">
                          <Plane size={36} />
                      </div>
                      <h4 className="font-bold text-xl mb-3 text-white">4. Partner Success</h4>
                      <p className="text-sm text-blue-100/70 leading-relaxed mb-4">
                         <strong>Bio-Refining Ready.</strong><br/>
                         Delivery to HVO/SAF producers in Europe, Korea, and USA.
                      </p>
                      <div className="flex gap-2 justify-center mt-2">
                          <span className="px-2 py-1 bg-blue-500/20 rounded text-[10px] font-bold text-blue-300 border border-blue-500/30">HVO</span>
                          <span className="px-2 py-1 bg-blue-500/20 rounded text-[10px] font-bold text-blue-300 border border-blue-500/30">SAF</span>
                      </div>
                  </div>

              </div>
           </div>
        </div>
      </section>

      {/* 4. MARENCORE'S ROLE: The De-Risking Partner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 reveal-left">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                        Going Beyond Trading.<br/>
                        We <span className="text-primary underline decoration-accent decoration-4 underline-offset-4">De-Risk</span> the Supply.
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        The feedstock market is volatile, fragmented, and fraught with compliance pitfalls. Marencore acts as your <strong>Value Chain Architect</strong>, smoothing out the friction between Southeast Asian suppliers and Global buyers.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Scale size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Structured Trading Solutions</h4>
                                <p className="text-sm text-slate-500">We offer fixed-price forward contracts, neutral COAs, and hedging mechanisms to protect your P&L from market swings.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <FileCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Compliance as a Service</h4>
                                <p className="text-sm text-slate-500">ISCC traceability, EUDR due diligence, and authentic export permits are standard, not optional.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Cost-Optimized Logistics</h4>
                                <p className="text-sm text-slate-500">Leveraging our volume and direct refinery relationships to minimize freight costs and maximize Netback.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 reveal-right relative">
                    <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        
                        <h3 className="text-white font-serif font-bold text-2xl mb-8 relative z-10">Marencore Strategic Advantage</h3>
                        
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                <span className="text-3xl font-bold text-accent block mb-1">50k+</span>
                                <span className="text-xs text-slate-300 uppercase tracking-wide">MT Annual Capacity</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                <span className="text-3xl font-bold text-accent block mb-1">100%</span>
                                <span className="text-xs text-slate-300 uppercase tracking-wide">Traceability Score</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                <span className="text-3xl font-bold text-accent block mb-1">T-1</span>
                                <span className="text-xs text-slate-300 uppercase tracking-wide">Legal Governance</span>
                            </div>
                             <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                                <span className="text-3xl font-bold text-accent block mb-1">24/7</span>
                                <span className="text-xs text-slate-300 uppercase tracking-wide">Ops Monitoring</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <p className="text-white/80 italic text-sm mb-4">"We de-risk the first mile so you can dominate the last mile."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. WHY MARENCORE: The Sexy/Strategic Pitch */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl reveal">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">
                Why Partner with Marencore?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-xl mb-4 text-primary">Strategic Brain</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We turn scattered waste opportunities into a coherent, scalable supply program. We speak the language of Refiners (Quality/Volume) and the language of Collectors (Cash flow/Logistics).
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-xl mb-4 text-accent">Emotional Security</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Make your feedstock sourcing something you are proud to show your Board and ESG committee. Clean paperwork, ethical sourcing, and zero greenwashing.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 6. CTA: Let's Build Your Story */}
      <section className="py-24 bg-gradient-to-br from-primary to-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse-slow"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Build Your Next Supply Story</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Whether you are a SAF producer needing pilot volumes or a global trader seeking a strategic regional partner, we are ready to execute.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
                >
                    Schedule a Strategy Call
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:-translate-y-1"
                >
                   Share Your Demand Forecast
                </button>
            </div>
         </div>
      </section>

      <ContactSection />
    </div>
  );
};