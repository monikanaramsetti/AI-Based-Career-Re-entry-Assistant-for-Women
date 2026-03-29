import React from 'react';
import { Compass, MapPin, HeartHandshake } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center animate-in fade-in duration-700">
      
      {/* Include the new stunning Hero Section */}
      <HeroSection />

      <section className="grid md:grid-cols-3 gap-8 w-full mt-24 pb-20 px-4 md:px-0 max-w-6xl mx-auto relative z-10">
        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group">
          <div className="w-20 h-20 bg-brand-blue/20 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-slate-800 transition-colors duration-300 group-hover:-translate-y-2">
            <Compass size={40} className="text-slate-800" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-4 tracking-tight">AI Skill Gap Analysis</h3>
          <p className="text-slate-600 leading-relaxed font-medium">Discover exactly which skills you need to update based on current industry demands.</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group md:-translate-y-8">
          <div className="w-20 h-20 bg-brand-pink/20 text-brand-pink rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-pink group-hover:text-slate-800 transition-colors duration-300 group-hover:-translate-y-2">
            <MapPin size={40} className="text-slate-800"/>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-4 tracking-tight">Personalized Roadmap</h3>
          <p className="text-slate-600 leading-relaxed font-medium">Get a clear, month-by-month actionable plan to guide your learning and job applications.</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-brand-purple/20 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group">
          <div className="w-20 h-20 bg-brand-purple/20 text-brand-purple rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300 group-hover:-translate-y-2">
            <HeartHandshake size={40} className="text-brand-purple group-hover:text-white"/>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-4 tracking-tight">Confidence Building</h3>
          <p className="text-slate-600 leading-relaxed font-medium">Reframe your career break powerfully with AI-generated explanations for interviews.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
