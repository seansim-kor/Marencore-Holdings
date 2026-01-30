import React from 'react';
import { Sprout, TestTube2, HandCoins, Microscope, ArrowRight, TrendingUp, AlertCircle } from 'lucide-react';

export const AgriTech: React.FC = () => {
  return (
    <section id="agritech" className="py-24 bg-surface scroll-mt-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">High-Efficiency Agri-Tech</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Revitalizing Soil, Maximizing Yield
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We bring advanced Korean bio-technology to Southeast Asian plantations. Our nano-colloid based "Perfect Solution" neutralizes acidic soil and unlocks nutrient potential.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT: VISUAL PROOF (Before/After) */}
            <div className="lg:w-1/2 reveal-left space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <TestTube2 className="text-accent" /> Field Trial Results
                    </h3>
                    
                    {/* Comparison Chart */}
                    <div className="space-y-8">
                        {/* Metric 1: Soil pH */}
                        <div>
                            <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
                                <span>Soil Acidity (pH)</span>
                                <span className="text-primary">Optimized (Neutral)</span>
                            </div>
                            <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
                                {/* Before Marker */}
                                <div className="absolute top-0 left-[30%] w-1 h-full bg-red-400 z-10"></div>
                                {/* After Bar */}
                                <div className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 w-[70%] rounded-full opacity-80"></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>pH 4.0 (Acidic)</span>
                                <span>pH 6.5 (Ideal)</span>
                            </div>
                        </div>

                        {/* Metric 2: Yield */}
                        <div>
                             <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
                                <span>Harvest Yield</span>
                                <span className="text-accent flex items-center gap-1"><TrendingUp size={14}/> +40% Increase</span>
                            </div>
                            <div className="flex gap-4 items-end h-32 border-b border-slate-200 pb-2">
                                <div className="w-1/2 bg-slate-300 rounded-t-lg h-[60%] relative group">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">Standard</span>
                                </div>
                                <div className="w-1/2 bg-primary rounded-t-lg h-[100%] relative group shadow-lg shadow-primary/30">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">With Solution</span>
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex gap-3">
                        <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
                        <p className="text-xs text-yellow-800 leading-tight">
                            <strong>Note:</strong> Results based on 2024 Durian & Palm Oil plantation trials in Johor, Malaysia.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT: FEATURES & CTA */}
            <div className="lg:w-1/2 reveal-right">
                <div className="space-y-6">
                    <div className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                            <Microscope size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Advanced Nano-Colloid Tech</h4>
                            <p className="text-sm text-slate-600 mt-1">Not just fertilizer. A molecular-level soil structure optimizer that improves water retention and nutrient uptake speed.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                            <HandCoins size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Performance-Sharing Model</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                We partner with farmers via a subscription model. <span className="font-bold text-primary">No huge upfront cost.</span> We share in the profit of the increased yield.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                            <TestTube2 size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Data-Driven Precision</h4>
                            <p className="text-sm text-slate-600 mt-1">Field sensors generate real-time data on soil health, which we use to forecast supply volumes for our trading desk.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primaryLight transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        Request Field Trial Data <ArrowRight size={18} />
                    </button>
                    <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                    >
                        View Case Studies
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};