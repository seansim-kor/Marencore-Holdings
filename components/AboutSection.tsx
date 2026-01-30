import React from 'react';
import { Globe, TrendingUp, Building2, Anchor, Zap, Ship, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-16 pb-24 bg-white scroll-mt-20 overflow-hidden relative">
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
      {/* Background Typography - Massive Watermark */}
      <div className="absolute top-10 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
        <div className="text-6xl sm:text-8xl md:text-[20rem] font-serif font-bold text-slate-900 leading-none whitespace-nowrap text-center">
          MARENCORE
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Brand Narrative Header */}
        <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 text-primary mb-8 shadow-sm animate-float">
                <Anchor size={36} />
            </div>
            {/* Optimized for mobile no-wrap */}
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-serif font-bold text-slate-900 mb-6 whitespace-nowrap overflow-x-visible">
              <span className="text-primary">Mare</span> (Sea) <span className="text-slate-300 mx-1 md:mx-2 font-light">+</span> <span className="text-accent">Core</span> (Essence)
            </h2>
            <p className="text-xl md:text-3xl text-slate-400 font-serif italic mb-10">
              "Orchestrating the Green Value Chain."
            </p>
            <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light mb-12">
               We are the <strong>Architects of the Green Value Chain</strong>. We go beyond traditional trading to connect physical supply, financial structure, and future technology. 
               From <strong>Bioenergy Trading</strong> and <strong>Agri-Tech</strong> to <strong>ESG Consulting</strong>, we design the sustainable bridge between Korea and Southeast Asia.
            </p>

            {/* CTA to Who We Are Page */}
            <div className="flex justify-center">
                <Link 
                  to="/who-we-are" 
                  className="group relative inline-flex items-center gap-5 pl-2 pr-8 py-2 bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-2xl hover:shadow-slate-200/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors relative overflow-hidden">
                        <Users size={20} className="relative z-10" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>
                    <div className="text-left flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-primary transition-colors">Leadership & Governance</span>
                        <span className="font-serif font-bold text-lg text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                          Meet the Architects <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>

        {/* INTERACTIVE MAP VISUALIZATION */}
        <div className="relative w-full max-w-7xl mx-auto aspect-[16/9] md:h-[650px] bg-[#f8fafc] rounded-3xl border border-slate-200 shadow-2xl mb-20 overflow-hidden reveal-scale group">
            
            {/* Map Background */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center bg-no-repeat opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
            
            {/* SVG Layer for Lines & Animations */}
            {/* ViewBox defined as 1000x500 for easier coordinate mapping */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <linearGradient id="grad-control" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.8}} />
                        <stop offset="100%" style={{stopColor:'#60a5fa', stopOpacity:0}} />
                    </linearGradient>
                     <linearGradient id="grad-trade" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:'#059669', stopOpacity:0.6}} />
                        <stop offset="100%" style={{stopColor:'#65a30d', stopOpacity:0.6}} />
                    </linearGradient>
                    <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L0,0" fill="#3b82f6" />
                    </marker>
                    <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L0,0" fill="#059669" />
                    </marker>
                     <marker id="arrow-export" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L0,0" fill="#f59e0b" />
                    </marker>
                </defs>

                {/* --- COORDINATES (UPDATED) ---
                    Scale 1000x500
                    KR: 820, 180 (82%, 36%) - Unchanged
                    MY: 760, 240 (76%, 48%) - Moved North 10% (was 58%)
                    SG: 815, 245 (81.5%, 49%) - Moved North 15% (was 64%), East 5% (was 76.5%)
                    EU: 490, 115 (49%, 23%) - Unchanged
                    NA: 220, 140 (22%, 28%) - Unchanged
                    SA: 290, 350 (29%, 70%) - Unchanged
                */}

                {/* 1. SINGAPORE CONTROL LINES (Blue) */}
                {/* SG -> KR (Short vertical curve) */}
                <path d="M 815 245 Q 840 210 820 180" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="opacity-40">
                   <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                </path>
                {/* SG -> MY (Horizontal-ish line to left) */}
                <path d="M 815 245 L 760 240" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" className="opacity-60" />
                
                {/* Control Particles */}
                <circle r="3" fill="#3b82f6">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 815 245 Q 840 210 820 180" />
                </circle>

                {/* 2. KOREA <-> MALAYSIA TRADE LOOP (Green) */}
                {/* KR -> MY */}
                <path d="M 820 180 Q 790 210 760 240" fill="none" stroke="url(#grad-trade)" strokeWidth="3" markerEnd="url(#arrow-green)" className="opacity-80 drop-shadow-md" />
                <circle r="4" fill="#65a30d">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 820 180 Q 790 210 760 240" />
                </circle>

                {/* MY -> KR */}
                <path d="M 760 240 Q 800 210 820 180" fill="none" stroke="url(#grad-trade)" strokeWidth="3" markerEnd="url(#arrow-green)" className="opacity-80 drop-shadow-md" />
                <circle r="4" fill="#064e3b">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M 760 240 Q 800 210 820 180" />
                </circle>

                {/* 3. GLOBAL EXPORT ROUTES (Orange/Gold) */}
                {/* MY -> EU */}
                <path d="M 760 240 Q 600 130 490 115" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-50">
                     <animate attributeName="stroke-dashoffset" from="8" to="0" dur="3s" repeatCount="indefinite" />
                </path>
                <circle r="2" fill="#f59e0b">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 760 240 Q 600 130 490 115" />
                </circle>

                {/* MY -> SA (South America) */}
                <path d="M 760 240 Q 500 350 290 350" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-30">
                     <animate attributeName="stroke-dashoffset" from="8" to="0" dur="4s" repeatCount="indefinite" />
                </path>

                 {/* KR -> NA (North America) */}
                <path d="M 820 180 Q 500 50 220 140" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-50">
                     <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2.5s" repeatCount="indefinite" />
                </path>
                 <circle r="2" fill="#f59e0b">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 820 180 Q 500 50 220 140" />
                </circle>

            </svg>

            {/* --- HTML MARKERS --- */}
            {/* Hub: Korea */}
            <div className="absolute top-[36%] left-[82%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-primary/5 rounded-full animate-ping absolute"></div>
                {/* Scaled down for mobile (w-8 h-8), up for desktop (md:w-14) */}
                <div className="w-8 h-8 md:w-14 md:h-14 bg-white/40 backdrop-blur-md rounded-full shadow-xl border-2 border-primary flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    {/* Responsive Icon Size */}
                    <TrendingUp size={16} className="text-primary md:w-6 md:h-6"/>
                </div>
                {/* Scaled down label box for mobile */}
                <div className="absolute left-full ml-2 md:ml-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md border border-slate-100 text-left min-w-[80px] md:min-w-[140px]">
                    <span className="block font-bold text-slate-900 text-[9px] md:text-sm leading-tight">Korea Hub</span>
                    <span className="text-[7px] md:text-[10px] text-slate-500 uppercase font-bold tracking-wider hidden sm:block">Strategy & R&D</span>
                    <div className="flex gap-1 justify-start mt-0.5 md:mt-1">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500"></span>
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-orange-400"></span>
                    </div>
                </div>
            </div>

            {/* Hub: Malaysia */}
            <div className="absolute top-[48%] left-[76%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-accent/5 rounded-full animate-ping absolute delay-300"></div>
                <div className="w-8 h-8 md:w-14 md:h-14 bg-white/40 backdrop-blur-md rounded-full shadow-xl border-2 border-accent flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    <Zap size={16} className="text-accent md:w-6 md:h-6"/>
                </div>
                <div className="absolute right-full mr-2 md:mr-4 top-0 bg-white/80 backdrop-blur px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-md border border-slate-100 text-right min-w-[80px] md:min-w-[140px]">
                    <span className="block font-bold text-slate-900 text-[9px] md:text-sm leading-tight">Malaysia Hub</span>
                    <span className="text-[7px] md:text-[10px] text-slate-500 uppercase font-bold tracking-wider hidden sm:block">Sourcing & Prod.</span>
                     <div className="flex gap-1 justify-end mt-0.5 md:mt-1">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500"></span>
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-orange-400"></span>
                    </div>
                </div>
            </div>

             {/* Hub: Singapore (HQ) */}
             <div className="absolute top-[49%] left-[81.5%] -translate-x-1/2 translate-y-3 md:translate-y-4 flex flex-col items-center group cursor-pointer z-20">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-500/10 rounded-full animate-ping absolute delay-500"></div>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-slate-900/40 backdrop-blur-md rounded-full shadow-2xl border-2 border-blue-500 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                    <Building2 size={14} className="text-blue-400 md:w-5 md:h-5"/>
                </div>
                <div className="mt-1 md:mt-2 bg-slate-900/80 backdrop-blur px-2 py-1 md:px-3 md:py-1.5 rounded shadow-lg border border-slate-700 text-center">
                    <span className="block font-bold text-white text-[8px] md:text-xs leading-none">Singapore HQ</span>
                    <span className="text-[7px] md:text-[9px] text-blue-200 uppercase tracking-wider hidden sm:inline">Control Tower</span>
                </div>
            </div>

            {/* Market: EU */}
            <div className="absolute top-[23%] left-[49%] -translate-x-1/2 -translate-y-1/2 group">
                <div className="flex items-center gap-1 md:gap-2 bg-white/70 backdrop-blur px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-orange-200 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    <Globe size={10} className="text-orange-500 md:w-3.5 md:h-3.5" />
                    <span className="text-[8px] md:text-xs font-bold text-slate-700">EU Market</span>
                </div>
            </div>

             {/* Market: NA */}
             <div className="absolute top-[28%] left-[22%] -translate-x-1/2 -translate-y-1/2 group">
                <div className="flex items-center gap-1 md:gap-2 bg-white/70 backdrop-blur px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-orange-200 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    <Ship size={10} className="text-orange-500 md:w-3.5 md:h-3.5" />
                    <span className="text-[8px] md:text-xs font-bold text-slate-700">North America</span>
                </div>
            </div>

            {/* Market: SA */}
             <div className="absolute top-[70%] left-[29%] -translate-x-1/2 -translate-y-1/2 group">
                <div className="flex items-center gap-1 md:gap-2 bg-white/70 backdrop-blur px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-orange-200 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    <Globe size={10} className="text-orange-500 md:w-3.5 md:h-3.5" />
                    <span className="text-[8px] md:text-xs font-bold text-slate-700">South America</span>
                </div>
            </div>


            {/* Legend - Hidden on small mobile to clear view */}
            <div className="absolute bottom-6 left-6 max-w-xs bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-slate-200 shadow-xl hidden md:block">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm"><Globe size={16} className="text-primary"/> Global Network Flow</h4>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                        <span className="w-6 h-0.5 bg-blue-500 border-b border-dashed border-blue-500"></span> 
                        <span className="font-medium">HQ Control & Finance</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                         <div className="w-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        <span className="font-medium">Sourcing & Tech Exchange</span>
                    </div>
                     <div className="flex items-center gap-3 text-xs text-slate-600">
                        <span className="w-6 h-0.5 bg-orange-400 border-b border-dotted border-orange-400"></span> 
                        <span className="font-medium">Global Export Routes</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};