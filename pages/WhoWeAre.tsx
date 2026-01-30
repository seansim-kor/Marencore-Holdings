import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Globe, Award, Quote, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '../components/LeadGenForm';

export const WhoWeAre: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Initial scroll to top is fine, but we want to let the hash scroll handle the position if present
    if (!hash) {
        window.scrollTo(0, 0);
    }
    
    if (hash) {
      // Slightly increased delay to ensure layout stability (images loading etc)
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          // Changed to 'start' to avoid cutting off top of tall elements on mobile
          // CSS scroll-margin-top will handle the header offset
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [hash]);

  return (
    <div className="bg-white font-sans text-slate-900 pt-20">
      
      {/* HERO SECTION */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-accent"></span> Governance & Leadership
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 animate-fade-in-up delay-100">
            The Minds Behind <br/><span className="text-accent">Marencore</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            We are a coalition of experts in Finance, Supply Chain, and Technology. 
            Our leadership team combines over 50 years of cross-border experience to deliver security, compliance, and growth to our partners.
          </p>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">50+ Years</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Combined Experience</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">$50M+</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Trade Volume Managed</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">3 Key Hubs</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Singapore, Malaysia, Korea</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Compliance Record</div>
                </div>
            </div>
        </div>
      </section>

      {/* PROFILES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 space-y-24">
            
            {/* PROFILE 1: HB Kwon (Now Strategic Architect) */}
            <div id="mr.-hb-kwon" className="flex flex-col lg:flex-row gap-12 items-center reveal scroll-mt-28">
                <div className="w-full max-w-md lg:max-w-none lg:w-1/3 relative group">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 relative">
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                             <img src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/HBKWON.png" alt="HB Kwon" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"/>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                            <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-1">South Korea Office</span>
                            <h3 className="text-2xl font-serif font-bold text-white">Mr. HB Kwon</h3>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Strategic Architect</h2>
                        <p className="text-primary font-bold uppercase tracking-wide text-sm">Director of Global Strategy & Finance</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Award size={18} className="text-accent"/> Why Trust Him</h4>
                             <p className="text-sm text-slate-600 leading-relaxed">
                                With a background in high-level corporate finance and strategic planning, Mr. Kwon ensures that every deal is legally sound and financially optimized. He acts as the "Control Tower" for Marencore's global operations.
                             </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Globe size={18} className="text-accent"/> Core Competencies</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Cross-border Trade Finance Structuring</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Global Risk Management & Compliance</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Strategic Partnerships & M&A</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                        <Quote className="absolute top-8 right-8 text-slate-100" size={48} />
                        <p className="text-slate-600 italic text-lg leading-relaxed relative z-10">
                            "In international trade, stability is the ultimate currency. My focus is engineering financial and operational structures that remove volatility for our clients, ensuring that Marencore is not just a supplier, but a fortress for their supply chain."
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-slate-200"></div>

            {/* PROFILE 2: Winston Jeong (Now Operations Commander) */}
            <div id="mr.-winston-jeong" className="flex flex-col lg:flex-row-reverse gap-12 items-center reveal scroll-mt-28">
                <div className="w-full max-w-md lg:max-w-none lg:w-1/3 relative group">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 relative">
                        {/* Placeholder for Photo */}
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                             <img src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/Winston.png" alt="Winston Jeong" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"/>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                            <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-1">Singapore HQ</span>
                            <h3 className="text-2xl font-serif font-bold text-white">Mr. Winston Jeong</h3>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 lg:text-right">
                    <div className="mb-8 flex flex-col lg:items-end">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Operations Commander</h2>
                        <p className="text-primary font-bold uppercase tracking-wide text-sm">Director of Sourcing & Operations</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                         <div>
                             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 lg:justify-end"><Award size={18} className="text-accent"/> Why Trust Him</h4>
                             <p className="text-sm text-slate-600 leading-relaxed lg:text-right">
                                Mr. Jeong brings decades of oversight experience in global supply chains. His rigorous management of vendor quality and local regulatory networks allows Marencore to secure supply even when the market is tight.
                             </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 lg:justify-end"><TrendingUp size={18} className="text-accent"/> Core Competencies</h4>
                            <ul className="space-y-2 text-sm text-slate-600 lg:flex lg:flex-col lg:items-end">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Supply Chain Security & Logistics</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Local Regulatory Liaison (MPOB/Customs)</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Vendor Quality Auditing</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative text-left">
                        <Quote className="absolute top-8 left-8 text-slate-100 transform scale-x-[-1]" size={48} />
                        <p className="text-slate-600 italic text-lg leading-relaxed relative z-10 pl-4">
                            "Quality isn't checked at the port; it's secured at the source. I spend more time auditing mills and farms than in the office because knowing the ground reality is the only way to guarantee the spec sheet matches the shipment."
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-slate-200"></div>

            {/* PROFILE 3: Sean Sim (Now Technology Bridge) */}
            <div id="mr.-sean-sim" className="flex flex-col lg:flex-row gap-12 items-center reveal scroll-mt-28">
                <div className="w-full max-w-md lg:max-w-none lg:w-1/3 relative group">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 relative">
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                             <img src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/SeanSim.png" alt="Sean Sim" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"/>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                            <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-1">Malaysia Office</span>
                            <h3 className="text-2xl font-serif font-bold text-white">Mr. Sean Sim</h3>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Technology Bridge</h2>
                        <p className="text-primary font-bold uppercase tracking-wide text-sm">Director of Tech & Market Expansion</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                         <div>
                             <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><ShieldCheck size={18} className="text-accent"/> Why Trust Him</h4>
                             <p className="text-sm text-slate-600 leading-relaxed">
                                Mr. Sim serves as the vital link between innovation and ASEAN markets. His expertise ensures that our Agri-Tech solutions are successfully localized and that our trading partners have access to the latest green technologies.
                             </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Globe size={18} className="text-accent"/> Core Competencies</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Agri-Tech Transfer & Implementation</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Korea-SEA Business Development</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5"/> Future Energy Projects (Hydrogen/Ammonia)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative text-left">
                        <Quote className="absolute top-8 right-8 text-slate-100" size={48} />
                        <p className="text-slate-600 italic text-lg leading-relaxed relative z-10">
                            "Innovation is the only way to future-proof this industry. By bridging Korea's advanced bio-technology with Southeast Asia's vast resources, we are creating a value chain that is not just profitable, but regenerative."
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="container mx-auto px-6 reveal">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to work with us?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Reach out to the director in your region directly. We don't use call centers; you talk to the decision-makers.
            </p>
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-lime-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
            >
                Contact Leadership
            </button>
         </div>
      </section>

      {/* Embedded Contact Section Reuse */}
      <ContactSection />

    </div>
  );
};