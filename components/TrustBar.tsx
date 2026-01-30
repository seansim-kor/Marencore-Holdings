import React, { useEffect, useState } from 'react';
import { Leaf, FileCheck, TrendingUp, Shield, Award, CheckCircle } from 'lucide-react';

const StatCounter = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</div>
    </div>
  );
};

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white relative z-20 -mt-10 mb-10">
      <div className="container mx-auto px-6">
        
        {/* Main Trust Box */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* Top: Certifications Strip */}
          <div className="bg-slate-50 py-6 border-b border-gray-100 overflow-hidden">
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Logo Placeholders - In production, replace with actual SVGs */}
                <div className="flex items-center gap-2 font-bold text-slate-600 text-lg">
                    <Award size={24} className="text-primary"/> ISCC <span className="text-xs font-normal bg-primary/10 px-2 py-0.5 rounded text-primary">Certified</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-600 text-lg">
                    <Leaf size={24} className="text-accent"/> RSPO <span className="text-xs font-normal bg-accent/10 px-2 py-0.5 rounded text-accent">Member</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-600 text-lg">
                    <Shield size={24} className="text-blue-600"/> MSPO <span className="text-xs font-normal bg-blue-100 px-2 py-0.5 rounded text-blue-600">Verified</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-600 text-lg">
                    <CheckCircle size={24} className="text-green-600"/> EUDR <span className="text-xs font-normal bg-green-100 px-2 py-0.5 rounded text-green-600">Compliant</span>
                </div>
             </div>
          </div>

          {/* Middle: Key Metrics Dashboard */}
          <div className="py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 bg-white">
             <StatCounter end={50} suffix="M+" label="Annual Trade Vol (USD)" />
             <StatCounter end={15} suffix="+" label="Years Experience" />
             <StatCounter end={100} suffix="%" label="Traceability Score" />
             <StatCounter end={20} suffix="+" label="Global Destinations" />
          </div>

        </div>
      </div>
    </section>
  );
};