import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

const SkillGapCard = ({ currentScore, missingSkills, detectedSkills }) => {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
          <MapPin size={24} className="text-blue-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Skill Gap Analysis</h3>
      </div>
      
      <div className="space-y-8 flex-1">
        {/* Progress Bars */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-slate-700">Your Current Skills Match</span>
              <span className="text-brand-purple">{currentScore}%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div 
                 className="bg-brand-purple h-full rounded-full transition-all duration-1000 ease-out" 
                 style={{ width: `${currentScore}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-slate-700">Target Industry Standard</span>
              <span className="text-slate-500">100%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div className="bg-slate-300 h-full rounded-full w-full"></div>
            </div>
          </div>
        </div>

        {/* Missing Skills */}
        <div className="bg-pink-50/50 p-5 rounded-2xl border border-pink-100">
          <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-pink"></span> Priority Skills to Learn
          </h4>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-pink-200 text-brand-purple rounded-lg text-sm font-semibold shadow-sm hover:-translate-y-0.5 transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hidden Skills (Detected Soft Skills) */}
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Sparkles size={16} className="text-amber-500" /> Hidden Strengths Detected
          </h4>
          <p className="text-xs text-slate-500 mb-3 leading-relaxed">Based on your career break profile, our AI suggests you have developed these valuable soft skills:</p>
          <div className="flex flex-wrap gap-2">
             {detectedSkills.map((skill, i) => (
              <span key={i} className="px-3 py-1.5 bg-amber-50 border border-amber-100 text-amber-700 rounded-lg text-xs font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGapCard;
