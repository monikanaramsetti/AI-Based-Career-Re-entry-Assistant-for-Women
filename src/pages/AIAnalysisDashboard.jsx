import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Target, Copy, Check, ChevronDown, ChevronUp, Bot, Sparkles } from 'lucide-react';
import ProgressCircle from '../components/ProgressCircle';
import SkillGapCard from '../components/SkillGapCard';
import RoadmapTimeline from '../components/RoadmapTimeline';
import MotivationCard from '../components/MotivationCard';

const AIAnalysisDashboard = () => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  
  if (!location.state || !location.state.data) {
    return <Navigate to="/story" />;
  }

  const { analysis } = location.state.data;
  const userContext = location.state.userContext || { returnTimeframe: '3', name: 'User' };

  const handleCopy = () => {
    navigator.clipboard.writeText(analysis.careerGapExplanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const interviewQuestions = [
    {
      q: `How do you explain your ${userContext.breakDuration} year gap?`,
      a: analysis.careerGapExplanation
    },
    {
       q: `Why do you want to return to ${userContext.desiredRole || 'this industry'} now?`,
       a: "I've taken the necessary time to address my priorities and am now ready to fully commit to my career. I’ve been following industry trends, upskilling in key areas, and am excited to bring a fresh, dedicated perspective to this role."
    },
    {
       q: "How have you kept your skills current?",
       a: `I've recently engaged with projects involving ${analysis.strengths[0] || 'core skills'} and have committed to learning ${analysis.missingSkills[0] || 'new tools'} as part of my career reentry roadmap.`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-5 pb-20">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-black uppercase tracking-widest mb-4">
             <Bot size={14} /> AI Analysis Complete
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">{userContext.name || 'Trailblazer'}</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">Here is your tailored comeback plan designed to help you transition into <strong className="text-brand-purple">{userContext.desiredRole || 'your next role'}</strong> over the next {userContext.returnTimeframe} months.</p>
        </div>
        
        <div className="relative z-10 shrink-0 bg-white p-4 rounded-3xl shadow-sm border border-slate-50">
          <ProgressCircle value={analysis.confidenceScore} />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Skill Gap & Motivation */}
        <div className="lg:col-span-1 space-y-8">
            <SkillGapCard 
                currentScore={65} // Mock dynamic calculation 
                missingSkills={analysis.missingSkills}
                detectedSkills={analysis.detectedSoftSkills}
            />
            <div className="h-64">
                <MotivationCard />
            </div>
        </div>

        {/* Right Column: Roadmap & Interview Prep */}
        <div className="lg:col-span-2 space-y-8">
            <RoadmapTimeline roadmapData={analysis.roadmap} months={userContext.returnTimeframe} />
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Career Gap Generator */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple opacity-30 rounded-full blur-2xl"></div>
                    <Target size={32} className="text-brand-pink mb-4" />
                    <h3 className="text-xl font-bold mb-2 relative z-10">AI Gap Explanation</h3>
                    <p className="text-slate-400 text-sm mb-6 relative z-10 line-clamp-2">Use this professional framing in cover letters or messages.</p>
                    
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl mb-6 relative z-10 h-32 overflow-y-auto custom-scrollbar">
                        <p className="text-slate-200 leading-relaxed text-sm italic">"{analysis.careerGapExplanation}"</p>
                    </div>
                    
                    <button 
                        onClick={handleCopy}
                        className="w-full relative z-10 flex items-center justify-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-100 hover:shadow transition-all group"
                    >
                        {copied ? <Check size={18} className="text-green-500"/> : <Copy size={18} className="text-brand-purple group-hover:scale-110 transition-transform"/>}
                        {copied ? 'Copied to Clipboard!' : 'Copy Explanation'}
                    </button>
                </div>

                {/* Interview Prep Accordion */}
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">AI Interview Coach</h3>
                    <div className="space-y-3 flex-1">
                        {interviewQuestions.map((item, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                                <button 
                                    className="w-full px-5 py-4 flex justify-between items-center bg-slate-50 hover:bg-purple-50 transition-colors text-left"
                                    onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                                >
                                    <span className="font-semibold text-slate-800 text-sm pr-4">{item.q}</span>
                                    {openAccordion === idx ? <ChevronUp size={16} className="text-brand-purple shrink-0"/> : <ChevronDown size={16} className="text-slate-400 shrink-0"/>}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-5 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                                        <div className="flex gap-2 items-start">
                                            <Sparkles size={16} className="text-brand-pink shrink-0 mt-0.5" />
                                            <span>{item.a}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisDashboard;
