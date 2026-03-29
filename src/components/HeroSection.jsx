import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-blue/10 rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 rounded-[3rem]">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 text-brand-purple text-sm font-bold mb-8 shadow-sm">
        <Sparkles size={16} className="text-brand-pink" /> 
        AI-Powered Career Comeback for Women
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight max-w-4xl">
        Restart Your Career with <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">
          Confidence
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Your personal AI mentor designed exclusively for women returning to work. Map your skills, bridge the gap, and land the job you deserve.
      </p>

      <Link 
        to="/story" 
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-purple rounded-full overflow-hidden shadow-xl shadow-brand-purple/30 hover:shadow-brand-purple/50 transition-all hover:-translate-y-1"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
        <span className="relative z-10">Start My Comeback Plan</span>
      </Link>
    </section>
  );
};

export default HeroSection;
