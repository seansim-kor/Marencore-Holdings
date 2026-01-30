import React, { useEffect } from 'react';
import { 
  Sprout, 
  Atom, 
  Zap, 
  FlaskConical, 
  TrendingUp, 
  ShieldCheck, 
  Leaf, 
  Microscope, 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Download,
  AlertTriangle,
  Layers,
  BarChart3,
  Award,
  TestTube2,
  Users,
  Briefcase,
  CloudRain,
  Sun,
  Banknote,
  Timer,
  XCircle,
  TrendingDown,
  Lock,
  Unlock,
  Pipette,
  Scale
} from 'lucide-react';
import { ContactSection } from '../components/LeadGenForm';

export const AgriTechPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans text-slate-900 pt-20">
      
      {/* SECTION 1: HERO BANNER - Focus on ROI & Speed */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center overflow-hidden bg-[#0f172a] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Smart Agriculture Drone Spraying" 
            className="w-full h-full object-cover opacity-40 animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-green-900/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Korean Tech Badge */}
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-down">
                <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Immediate Impact Technology
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <img src="https://flagcdn.com/w20/kr.png" alt="Korea" className="w-4 h-auto rounded-sm opacity-80" />
                    Engineered in Korea
                </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1] animate-fade-in-up delay-100">
              Stop Feeding the Rain. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                Start Feeding Your Crop.
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed font-light max-w-2xl animate-fade-in-up delay-200">
              Heavy rain washes away 70% of standard fertilizers. Marencore's <strong>Nano-Colloidal Tech</strong> absorbs in minutes, not days.
              <br className="hidden md:block"/> Unlock the nutrients you paid for with <span className="text-lime-300 font-bold">Instant Neutralization</span> & <span className="text-lime-300 font-bold">95% Absorption</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button 
                onClick={() => document.getElementById('solution-comparison')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                See the Difference <ArrowRight size={18}/>
              </button>
              <button 
                onClick={() => document.getElementById('field-results')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md flex flex-col items-center justify-center leading-none"
              >
                <span className="text-sm">View Yield Data</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE EFFICIENCY GAP (Unified Visual) */}
      <section id="solution-comparison" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">The Efficiency Gap</h2>
            <p className="text-slate-500 text-lg">Where does your fertilizer budget actually go?</p>
          </div>

          {/* Unified Comparison Container */}
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 reveal">
             
             <div className="flex flex-col md:flex-row min-h-[600px]">
                
                {/* LEFT SIDE: WASTED (Standard) */}
                <div className="md:w-1/2 bg-slate-100 p-8 md:p-12 relative overflow-hidden group flex flex-col">
                    {/* Background Texture */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
                    
                    <div className="relative z-10 flex flex-col h-full items-center">
                        {/* Header: Fixed Height for Alignment */}
                        <div className="flex items-center gap-3 mb-2 h-16">
                             <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                                <CloudRain size={20} />
                             </div>
                             <h3 className="text-2xl font-serif font-bold text-slate-700">Standard Granular</h3>
                        </div>

                        {/* Content */}
                        <div className="flex-grow flex flex-col items-center text-center w-full">
                             {/* Stats Block: Fixed Height */}
                             <div className="h-28 flex flex-col justify-end mb-6">
                                <div className="text-6xl font-bold text-slate-300 mb-2 group-hover:text-red-400 transition-colors duration-500">30%</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Actual Absorption</div>
                             </div>
                             
                             {/* Graph Box: Fixed Height */}
                             <div className="w-full max-w-xs h-[300px] bg-white rounded-2xl p-6 border border-slate-200 shadow-inner relative flex flex-col justify-between">
                                 <div className="absolute -right-4 top-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-bounce z-20">
                                     70% WASTED
                                 </div>
                                 <div className="h-full w-20 mx-auto bg-slate-200 rounded-lg relative overflow-hidden">
                                     {/* 30% Fill */}
                                     <div className="absolute bottom-0 w-full h-[30%] bg-slate-400"></div>
                                     {/* 70% Empty/Wasted */}
                                     <div className="absolute top-0 w-full h-[70%] bg-red-100 flex flex-col items-center justify-center">
                                         <TrendingDown className="text-red-400 animate-pulse" />
                                     </div>
                                 </div>
                                 <div className="mt-4 text-xs text-red-500 font-medium flex items-center justify-center gap-1">
                                     <XCircle size={14}/> Leached by Rain / Soil Lock
                                 </div>
                             </div>
                        </div>

                         {/* Footer Text */}
                         <div className="mt-8 text-center px-4 h-20">
                            <p className="text-slate-700 font-bold mb-2">Why only 30%?</p>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                                Rain runoff washes away granules. Acidic soil chemically locks nutrients, preventing absorption.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CENTER DIVIDER (Absolute) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-xl border-4 border-slate-50 text-slate-900 font-black text-lg">
                    VS
                </div>

                {/* RIGHT SIDE: EFFICIENCY (Marencore) */}
                <div className="md:w-1/2 bg-slate-900 p-8 md:p-12 relative overflow-hidden text-white group flex flex-col">
                    {/* Background Texture */}
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10 flex flex-col h-full items-center">
                         {/* Header: Fixed Height for Alignment */}
                         <div className="flex items-center gap-3 mb-2 h-16">
                             <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                                <Zap size={20} />
                             </div>
                             <h3 className="text-2xl font-serif font-bold text-white">Nano-Colloid Tech</h3>
                        </div>

                        {/* Content */}
                        <div className="flex-grow flex flex-col items-center text-center w-full">
                             {/* Stats Block: Fixed Height */}
                             <div className="h-28 flex flex-col justify-end mb-6">
                                <div className="text-6xl font-bold text-accent mb-2 drop-shadow-lg">95%</div>
                                <div className="text-sm font-bold text-blue-200 uppercase tracking-widest">Actual Absorption</div>
                             </div>
                             
                             {/* Graph Box: Fixed Height */}
                             <div className="w-full max-w-xs h-[300px] bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl relative flex flex-col justify-between">
                                  <div className="absolute -right-4 top-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg z-20">
                                     MAX UPTAKE
                                 </div>
                                 <div className="h-full w-20 mx-auto bg-slate-800 rounded-lg relative overflow-hidden border border-slate-700">
                                     <div className="absolute bottom-0 w-full h-[95%] bg-gradient-to-t from-green-600 to-accent shadow-[0_0_20px_rgba(249,115,22,0.6)]">
                                        {/* Bubbles animation effect */}
                                        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
                                        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
                                     </div>
                                 </div>
                                 <div className="mt-4 text-xs text-green-400 font-medium flex items-center justify-center gap-1">
                                     <CheckCircle2 size={14}/> Instant Root Penetration
                                 </div>
                             </div>
                        </div>

                        {/* Footer Text */}
                        <div className="mt-8 text-center px-4 h-20">
                            <p className="text-white font-bold mb-2">The Nano Difference</p>
                             <p className="text-blue-100 text-sm leading-relaxed max-w-xs mx-auto">
                                Absorbs instantly on contact. Penetrates plant cell walls before rain can wash it away.
                            </p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Bottom Summary Banner */}
             <div className="bg-primary text-white p-6 text-center border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4">
                 <div className="flex items-center gap-2">
                     <Banknote className="text-accent" />
                     <span className="font-bold text-lg">The Financial Impact:</span>
                 </div>
                 <p className="text-blue-100">
                     Switching to Marencore effectively <strong className="text-white border-b border-accent">triples your fertilizer efficiency</strong> compared to standard granular options.
                 </p>
             </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE "INSTANT BALANCE" VISUALIZATION - 3 ZONES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16 reveal">
                 <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Patent No. 10-1838075</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                    Why "pH Balance" Matters
                 </h2>
                 <p className="text-slate-600 max-w-2xl mx-auto">
                    Too acidic? Nutrients are locked. Too alkaline? Minerals are fixed. <br/>
                    Marencore restores the <span className="font-bold text-slate-900">Golden Ratio (pH 6.5)</span> instantly.
                 </p>
              </div>

              {/* 3-ZONE SPECTRUM DASHBOARD */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden reveal-scale">
                  
                  {/* Header Title for Graph */}
                  <div className="flex justify-center mb-10">
                      <div className="bg-slate-100 px-6 py-2 rounded-full flex items-center gap-2">
                          <Scale size={18} className="text-slate-500" />
                          <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Soil Reaction Spectrum</span>
                      </div>
                  </div>

                  {/* THE SPECTRUM BAR */}
                  <div className="relative mb-16 px-4">
                      {/* Gradient Bar: Acid (Red) -> Neutral (Green) -> Alkaline (Purple) */}
                      <div className="h-6 md:h-8 w-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-400 to-purple-600 rounded-full shadow-inner opacity-90 relative">
                          
                          {/* Optimal Zone Highlight Box */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-12 md:h-16 border-2 border-green-500 bg-white/20 backdrop-blur-sm rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center z-10">
                              <span className="bg-green-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap">Target: pH 6.5</span>
                          </div>
                      </div>

                      {/* Spectrum Labels */}
                      <div className="flex justify-between text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider px-1">
                          <span>0.0 Acidic</span>
                          <span>7.0 Neutral</span>
                          <span>14.0 Alkaline</span>
                      </div>
                  </div>

                  {/* 3 ZONES COLUMNS */}
                  <div className="grid md:grid-cols-3 gap-8 relative">
                      
                      {/* 1. ACIDIC ZONE (Bad) */}
                      <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-100 relative group hover:-translate-y-1 transition-transform duration-300">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                              <Lock size={18} />
                          </div>
                          <h4 className="text-red-600 font-bold text-lg mt-4 mb-2">High Acidity</h4>
                          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">pH 3.0 - 4.5</div>
                          <p className="text-sm text-slate-500 leading-relaxed mb-4">
                              <strong className="block text-slate-700">"Toxicity Lock"</strong>
                              Aluminum & Iron toxicity increases. Essential nutrients (N, P, K) are chemically blocked.
                          </p>
                          {/* Arrow pointing right */}
                          <div className="flex justify-center text-red-300">
                              <ArrowRight size={24} className="animate-pulse" />
                          </div>
                      </div>

                      {/* 2. OPTIMAL ZONE (Good - Center) */}
                      <div className="bg-green-50 rounded-2xl p-6 text-center border-2 border-green-400 relative shadow-2xl scale-105 z-10">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                              <Unlock size={24} />
                          </div>
                          <h4 className="text-green-700 font-bold text-lg mt-4 mb-2">Optimal Balance</h4>
                          <div className="text-3xl font-serif font-bold text-slate-900 mb-2">pH 6.0 - 7.0</div>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                              <strong className="block text-slate-900">"Maximum Growth"</strong>
                              Nutrients are 100% bio-available. Root absorption efficiency peaks.
                          </p>
                          <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                              <CheckCircle2 size={12} /> Marencore Result
                          </div>
                      </div>

                      {/* 3. ALKALINE ZONE (Bad) */}
                      <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100 relative group hover:-translate-y-1 transition-transform duration-300">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                              <Lock size={18} />
                          </div>
                          <h4 className="text-blue-600 font-bold text-lg mt-4 mb-2">High Alkalinity</h4>
                          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">pH 8.0+</div>
                          <p className="text-sm text-slate-500 leading-relaxed mb-4">
                              <strong className="block text-slate-700">"Mineral Fixation"</strong>
                              Calcium & Magnesium saturation prevents uptake of micronutrients like Zinc & Iron.
                          </p>
                          {/* Arrow pointing left (towards center) */}
                          <div className="flex justify-center text-blue-300 rotate-180">
                              <ArrowRight size={24} className="animate-pulse" />
                          </div>
                      </div>

                  </div>
                  
                  {/* Interactive Element Description */}
                  <div className="mt-12 text-center">
                       <div className="inline-flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
                           <div className="p-2 bg-accent/10 rounded-lg text-accent">
                               <Pipette size={24} />
                           </div>
                           <div className="text-left">
                               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nano-Ionic Tech</p>
                               <p className="text-sm font-bold text-slate-800">Converges soil to Neutral (6.5) automatically.</p>
                           </div>
                       </div>
                  </div>

              </div>
          </div>
      </section>

      {/* SECTION 4: FIELD PROVEN RESULTS */}
      <section id="field-results" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
             <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Real Plantation Data</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Results That Pay Off</h2>
             <p className="text-slate-400">Higher weight, better quality, lower input costs.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Case Study 1: Oil Palm */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 reveal-left group hover:border-accent transition-colors">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-orange-900/50 rounded-2xl flex items-center justify-center text-orange-400">
                        <Leaf size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Oil Palm</h3>
                        <p className="text-slate-400 text-sm">Target: Fresh Fruit Bunch (FFB) Weight</p>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between items-end mb-4">
                        <div className="text-center w-1/2 border-r border-slate-700">
                            <span className="block text-sm text-slate-500 mb-1">Standard Yield</span>
                            <span className="text-2xl font-bold text-slate-400">20kg</span>
                            <span className="text-xs text-slate-500 block">/ Bunch</span>
                        </div>
                        <div className="text-center w-1/2">
                            <span className="block text-sm text-accent font-bold mb-1">Marencore Yield</span>
                            <span className="text-3xl font-bold text-accent">28kg</span>
                            <span className="text-xs text-accent block">/ Bunch</span>
                        </div>
                    </div>
                    
                    {/* Bar Chart Visual */}
                    <div className="relative h-48 bg-slate-900/50 rounded-xl flex items-end justify-center gap-8 p-4 border border-slate-700">
                         {/* Bar 1 */}
                         <div className="w-20 bg-slate-600 rounded-t-lg h-[65%] relative group-hover:opacity-80 transition-opacity">
                             <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-slate-500">100%</span>
                         </div>
                         {/* Bar 2 */}
                         <div className="w-20 bg-gradient-to-t from-orange-600 to-accent rounded-t-lg h-[90%] relative shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                                +40% Weight
                             </div>
                         </div>
                    </div>
                </div>

                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-accent"/> <strong>Direct Profit:</strong> Heavier bunches = Higher sale price.
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-accent"/> <strong>Resilience:</strong> Greener fronds during drought seasons.
                    </li>
                </ul>
            </div>

            {/* Case Study 2: Durian */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 reveal-right group hover:border-green-500 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-green-900/50 rounded-2xl flex items-center justify-center text-green-400">
                        <Sprout size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Durian (Musang King)</h3>
                        <p className="text-slate-400 text-sm">Target: Sweetness (Brix) & Texture</p>
                    </div>
                </div>

                 <div className="mb-8">
                    <div className="flex justify-between items-end mb-4">
                        <div className="text-center w-1/2 border-r border-slate-700">
                            <span className="block text-sm text-slate-500 mb-1">Standard Brix</span>
                            <span className="text-2xl font-bold text-slate-400">32%</span>
                        </div>
                        <div className="text-center w-1/2">
                            <span className="block text-sm text-green-400 font-bold mb-1">With Marencore</span>
                            <span className="text-3xl font-bold text-green-400">42%</span>
                        </div>
                    </div>
                    
                    {/* Visual Meter */}
                    <div className="relative h-48 bg-slate-900/50 rounded-xl flex items-center justify-center p-6 border border-slate-700">
                         <div className="w-full h-6 bg-slate-700 rounded-full overflow-hidden relative">
                             {/* Background Markers */}
                             <div className="absolute left-[30%] h-full w-0.5 bg-slate-500"></div>
                             <div className="absolute left-[60%] h-full w-0.5 bg-slate-500"></div>
                             
                             {/* Bar Fill */}
                             <div className="h-full bg-gradient-to-r from-yellow-500 to-green-500 w-[85%] rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] relative">
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-green-500 shadow-sm"></div>
                             </div>
                         </div>
                         <div className="absolute bottom-10 left-10 text-xs font-bold text-slate-500">Standard Quality</div>
                         <div className="absolute bottom-10 right-10 text-xs font-bold text-green-400">Premium Grade A</div>
                    </div>
                </div>

                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-green-400"/> <strong>Premium Pricing:</strong> Higher Brix score demands top market rates.
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-green-400"/> <strong>Fungus Defense:</strong> Calcium barrier protects against root rot.
                    </li>
                </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT LINEUP (2-STEP SYSTEM) */}
      <section id="product-lineup" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Simple 2-Step Protocol</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Total Restoration System</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
                Don't overcomplicate it. Use <strong>Step 1</strong> to unlock the soil, and <strong>Step 2</strong> to supercharge the fruit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Step 1: Soil Conditioner */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all group reveal-left flex flex-col">
               <div className="bg-blue-50 p-8 flex items-center justify-between">
                   <div>
                       <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">Step 1: The Unlock</span>
                       <h3 className="text-2xl font-bold text-slate-900 mt-2">Soil Conditioner</h3>
                   </div>
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                       <Layers size={32} />
                   </div>
               </div>
               
               <div className="p-8 flex-grow flex flex-col">
                   <p className="text-slate-600 leading-relaxed mb-6">
                       <strong>The "Emergency Room" for your soil.</strong> Instantly neutralizes pH from 3.0 to 6.0 and flushes out salinity. It breaks the "chemical lock" that prevents nutrient absorption.
                   </p>
                   <ul className="space-y-3 mb-8">
                       <li className="flex items-start gap-3">
                           <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={18}/>
                           <span className="text-slate-700 text-sm"><strong>Instant pH Correction:</strong> Works on contact.</span>
                       </li>
                       <li className="flex items-start gap-3">
                           <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={18}/>
                           <span className="text-slate-700 text-sm"><strong>Salinity Remediation:</strong> Essential for coastal lands.</span>
                       </li>
                   </ul>
                   <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-auto w-full py-3 border border-blue-200 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
                       View Spec Sheet
                   </button>
               </div>
            </div>

            {/* Step 2: Perfect Solution */}
             <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:border-accent hover:shadow-2xl transition-all group reveal-right flex flex-col">
               <div className="bg-orange-50 p-8 flex items-center justify-between">
                   <div>
                       <span className="bg-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">Step 2: The Boost</span>
                       <h3 className="text-2xl font-bold text-slate-900 mt-2">Perfect Solution</h3>
                   </div>
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm">
                       <FlaskConical size={32} />
                   </div>
               </div>
               
               <div className="p-8 flex-grow flex flex-col">
                   <p className="text-slate-600 leading-relaxed mb-6">
                       <strong>The "Superfood" for your crop.</strong> A 4-in-1 Nano Hybrid fertilizer with NPK + Trace Elements + Ionized Calcium. 95% absorption guarantee means zero waste.
                   </p>
                   <ul className="space-y-3 mb-8">
                       <li className="flex items-start gap-3">
                           <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={18}/>
                           <span className="text-slate-700 text-sm"><strong>95% Bio-Availability:</strong> Absorbs in minutes.</span>
                       </li>
                       <li className="flex items-start gap-3">
                           <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={18}/>
                           <span className="text-slate-700 text-sm"><strong>Rain-Proof:</strong> No wash-off after absorption.</span>
                       </li>
                   </ul>
                   <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-auto w-full py-3 bg-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-accent/20">
                       View Spec Sheet
                   </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: DISTRIBUTOR BENEFITS */}
      <section id="distributor-benefits" className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                <div className="md:w-1/3">
                    <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">For Distributors</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                        Sell Results, Not Just Bags
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Farmers are tired of expensive fertilizers that don't work in the rain. Give them a solution that shows visible results in days.
                    </p>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                        Become a Partner <ArrowRight size={18} />
                    </button>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0"><Briefcase size={20}/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">High Margin Product</h4>
                            <p className="text-sm text-slate-500">Premium tech commands premium pricing with protected margins.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0"><Users size={20}/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Training Support</h4>
                            <p className="text-sm text-slate-500">We train your team to demo the "Instant Reaction" to farmers.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0"><TestTube2 size={20}/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Demo Kits Provided</h4>
                            <p className="text-sm text-slate-500">Sales tools to prove the efficacy on the spot.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0"><ShieldCheck size={20}/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Exclusive Territory</h4>
                            <p className="text-sm text-slate-500">Secure your region and grow with us.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 7: CTA / CONTACT */}
      <section className="py-24 bg-primary text-white text-center">
         <div className="container mx-auto px-6 reveal">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Stop the Leaching. Start the Growth.</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Join the smart farmers and distributors in Malaysia, Vietnam, and Indonesia who are switching to Marencore Nano-Tech.
            </p>
            
            <div className="space-y-2 mb-8">
                <p className="text-lg font-bold">Tell us your crop and acreage.</p>
                <p className="text-white/80">We'll calculate your potential savings.</p>
            </div>

            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-orange-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
            >
                Get a Quote Today
            </button>
         </div>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection />

    </div>
  );
};