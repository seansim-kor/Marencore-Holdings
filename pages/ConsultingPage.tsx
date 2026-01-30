import React, { useEffect } from 'react';
import { 
  Zap, 
  Globe, 
  Scale, 
  AlertTriangle, 
  BarChart, 
  ShieldAlert, 
  FileCheck, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  TrendingUp,
  Search,
  PenTool,
  Activity
} from 'lucide-react';
import { ContactSection } from '../components/LeadGenForm';

export const ConsultingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans text-slate-900 pt-20">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/seansim-kor/public/main/holdings/ESG%20report.png" 
            alt="ESG Strategy Report" 
            className="w-full h-full object-cover opacity-30 animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
          {/* Data Grid Overlay Effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-down">
                <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Strategic Advisory
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100">
              Turn Climate Risk into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Strategic Competitive Advantage
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl animate-fade-in-up delay-200">
              We don't just write reports. We execute. Marencore bridges the gap between <strong>Global Regulation</strong> (CBAM, EUDR) and <strong>Southeast Asian Supply Chain</strong> reality, delivering bankable Net-Zero strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Request ESG Strategy Session <ArrowRight size={18}/>
              </button>
              <button 
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md"
              >
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CHALLENGE */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Text */}
            <div className="lg:w-1/2 reveal-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                The Cost of Inaction is Rising
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                In today's global market, sustainability is no longer just "nice to have"—it's a license to operate. Manufacturing and export companies face unprecedented pressure from regulators and buyers.
              </p>
              
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                       <AlertTriangle size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg">EU CBAM & Trade Barriers</h4>
                       <p className="text-sm text-slate-500">Carbon taxes on borders are becoming a reality. High emission intensity means lost price competitiveness.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">
                       <TrendingUp size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg">RE100 Supply Chain Pressure</h4>
                       <p className="text-sm text-slate-500">Global clients (Apple, BMW, Samsung) are demanding 100% renewable energy use from their Tier-1 & Tier-2 suppliers.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 flex-shrink-0">
                       <ShieldAlert size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg">Greenwashing & Disclosure Risk</h4>
                       <p className="text-sm text-slate-500">Investors demand data-backed transparency. Vague claims lead to reputational damage and legal penalties.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:w-1/2 reveal-right">
               <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                   
                   <div className="grid grid-cols-2 gap-6 relative z-10">
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                           <BarChart className="text-accent mb-4" size={32} />
                           <h3 className="text-white font-bold text-xl mb-2">Carbon Tax</h3>
                           <p className="text-slate-400 text-sm">Escalating costs for non-compliant exporters.</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                           <Globe className="text-blue-400 mb-4" size={32} />
                           <h3 className="text-white font-bold text-xl mb-2">Market Access</h3>
                           <p className="text-slate-400 text-sm">Risk of exclusion from EU & US supply chains.</p>
                       </div>
                       <div className="col-span-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md p-6 rounded-2xl border border-red-500/30 flex items-center gap-4">
                           <AlertTriangle className="text-red-400 flex-shrink-0" size={32} />
                           <div>
                               <h3 className="text-white font-bold text-lg">Compliance Deadline</h3>
                               <p className="text-slate-300 text-sm">CBAM Transitional Period is Active. Reporting is mandatory.</p>
                           </div>
                       </div>
                   </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTIONS */}
      <section id="solutions" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Marencore Solutions</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Execution-Focused Advisory
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                We move beyond theory. We provide the instruments, contracts, and data infrastructure to achieve your targets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
             
             {/* Card 1 */}
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-accent/50 transition-all hover:-translate-y-2 group reveal-left">
                 <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                     <Zap size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">Renewable Energy Strategy</h3>
                 <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">RE100 Roadmap</p>
                 <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                     Corporate-specific roadmaps to achieve 100% renewable energy. We structure portfolio solutions tailored to your location and consumption profile.
                 </p>
                 <ul className="space-y-3 border-t border-slate-50 pt-6">
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-accent mt-0.5" /> Direct & Virtual PPAs
                     </li>
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-accent mt-0.5" /> REC Sourcing & Retirement
                     </li>
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-accent mt-0.5" /> Green Tariff Negotiation
                     </li>
                 </ul>
             </div>

             {/* Card 2 */}
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-500/50 transition-all hover:-translate-y-2 group reveal-scale">
                 <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                     <Leaf size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">Carbon Credit Advisory</h3>
                 <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">Net-Zero Offsetting</p>
                 <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                     Sourcing high-integrity credits from Voluntary Carbon Markets (VCM) and nature-based solutions to offset hard-to-abate residual emissions.
                 </p>
                 <ul className="space-y-3 border-t border-slate-50 pt-6">
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-green-600 mt-0.5" /> Verified Carbon Standard (VCS)
                     </li>
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-green-600 mt-0.5" /> High-Quality Removal Credits
                     </li>
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-green-600 mt-0.5" /> Portfolio Diversification
                     </li>
                 </ul>
             </div>

             {/* Card 3 */}
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-blue-500/50 transition-all hover:-translate-y-2 group reveal-right">
                 <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     <Scale size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">Regulatory Compliance</h3>
                 <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">CBAM & ESG Reporting</p>
                 <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                     End-to-end support for global regulations. From calculating product-embedded emissions to structuring supply chain due diligence frameworks.
                 </p>
                 <ul className="space-y-3 border-t border-slate-50 pt-6">
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-blue-600 mt-0.5" /> CBAM Emission Calculation
                     </li>
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-blue-600 mt-0.5" /> Supply Chain Due Diligence
                     </li>
                     <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-blue-600 mt-0.5" /> Sustainability Reporting
                     </li>
                 </ul>
             </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20 reveal">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                From Diagnosis to Deal Execution
             </h2>
             <p className="text-slate-600 max-w-2xl mx-auto">
                Our methodology ensures that strategy translates into tangible results.
             </p>
           </div>

           <div className="relative max-w-5xl mx-auto">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   
                   {/* Step 1 */}
                   <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center reveal delay-100 group hover:-translate-y-2 transition-transform">
                       <div className="w-14 h-14 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-md z-10 relative group-hover:bg-accent transition-colors">
                           <Search size={24} />
                       </div>
                       <h4 className="font-bold text-lg text-slate-900 mb-2">1. Diagnosis</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">
                           Baseline measurement. Scope 1, 2, & 3 calculation. LCA (Life Cycle Assessment) to identify hotspots.
                       </p>
                   </div>

                   {/* Step 2 */}
                   <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center reveal delay-200 group hover:-translate-y-2 transition-transform">
                       <div className="w-14 h-14 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-md z-10 relative group-hover:bg-accent transition-colors">
                           <PenTool size={24} />
                       </div>
                       <h4 className="font-bold text-lg text-slate-900 mb-2">2. Strategy</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">
                           Designing the roadmap. Identifying least-cost abatement options and portfolio mix (PPA vs Credits).
                       </p>
                   </div>

                   {/* Step 3 */}
                   <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center reveal delay-300 group hover:-translate-y-2 transition-transform">
                       <div className="w-14 h-14 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-md z-10 relative group-hover:bg-accent transition-colors">
                           <Briefcase size={24} />
                       </div>
                       <h4 className="font-bold text-lg text-slate-900 mb-2">3. Execution</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">
                           Deal making. Sourcing renewable assets, negotiating PPA contracts, and procuring carbon credits.
                       </p>
                   </div>

                   {/* Step 4 */}
                   <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center reveal delay-400 group hover:-translate-y-2 transition-transform">
                       <div className="w-14 h-14 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-md z-10 relative group-hover:bg-accent transition-colors">
                           <Activity size={24} />
                       </div>
                       <h4 className="font-bold text-lg text-slate-900 mb-2">4. MRV</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">
                           Monitoring, Reporting, Verification. Continuous tracking via dashboards for transparent ESG reporting.
                       </p>
                   </div>

               </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-slate-900 text-white text-center">
         <div className="container mx-auto px-6 reveal">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Partner for Sustainable, Competitive Growth</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Navigating the net-zero transition is complex. Doing it alone is risky. Schedule a confidential consultation with our directors today.
            </p>
            
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-orange-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
            >
                Schedule a Strategy Call
            </button>
         </div>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection />

    </div>
  );
};