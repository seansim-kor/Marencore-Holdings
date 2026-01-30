import React from 'react';
import { Gavel, Lightbulb, BookOpenCheck, ArrowUpRight, Scale, Globe, Briefcase } from 'lucide-react';

export const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
             <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">B2G2B Strategic Advisory</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                ESG Legal & Business Consulting
             </h2>
             <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We bridge the gap between strategy and execution. From navigating complex ESG regulations to structuring cross-border deals between Korea and Southeast Asia.
             </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
            
            {/* LEFT COLUMN: Image & Key Value Prop */}
            <div className="lg:w-1/2 reveal-left relative">
               <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Strategic Boardroom Meeting" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                      <div className="inline-block bg-accent px-3 py-1 text-xs font-bold text-white rounded mb-4">
                        Korea - Singapore - Malaysia
                      </div>
                      <h3 className="text-3xl font-serif font-bold mb-4">More Than Just Advice.<br/>We Execute.</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        Our "B2G2B" model connects Government projects (Export Vouchers), Business expansion, and Legal compliance into one seamless service.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                          <div>
                            <span className="block text-2xl font-bold text-accent">100%</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wide">Audit Readiness</span>
                          </div>
                          <div>
                            <span className="block text-2xl font-bold text-accent">Tier-1</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wide">Legal Network</span>
                          </div>
                      </div>
                  </div>
               </div>
            </div>

            {/* RIGHT COLUMN: Detailed Service Pillars */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6 reveal-right">
                
                {/* Block 1: Compliance */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                            <BookOpenCheck size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Global Compliance & Certification</h3>
                            <p className="text-slate-600 text-sm mb-3">
                                We prepare your business for the strictest sustainability standards.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> ISCC & EUDR Ready</li>
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Carbon Credit Strategy</li>
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Supply Chain Traceability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 2: Legal & Risk */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                            <Scale size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Legal & Risk Orchestration</h3>
                            <p className="text-slate-600 text-sm mb-3">
                                Navigating the legal complexities between Korean technology and SEA production.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Cross-border Dispute Resolution</li>
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Tax & Labor Regs (Malaysia/SG)</li>
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Contract Risk Mgmt</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 3: Future Tech */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                            <Lightbulb size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Future Tech & Roadmap</h3>
                            <p className="text-slate-600 text-sm mb-3">
                                Preparing partners for the next wave of green energy transitions.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Hydrogen & SAF Transition</li>
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Glycerol Steam Reforming (GSR)</li>
                                <li className="text-xs font-bold text-slate-500 flex items-center gap-1"><ArrowUpRight size={14} className="text-accent" /> Export Voucher Projects</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-16 text-center reveal-scale">
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
            >
                <Briefcase size={18} /> Schedule a Strategic Consultation
            </button>
        </div>
      </div>
    </section>
  );
};