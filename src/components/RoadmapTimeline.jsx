import React from 'react';
import { Calendar } from 'lucide-react';

const RoadmapTimeline = ({ roadmapData, months }) => {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center">
            <Calendar size={24} className="text-brand-purple" />
        </div>
        <div>
           <h3 className="text-xl font-bold text-slate-800">Your Action Plan</h3>
           <p className="text-sm text-slate-500">Accelerated {months}-month trajectory</p>
        </div>
      </div>
      
      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-purple before:to-brand-pink">
        {roadmapData.map((milestone, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group py-6">
            {/* Icon marker */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${idx === 0 ? 'bg-brand-purple animate-pulse' : 'bg-slate-300'} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:bg-brand-pink`}>
              <span className="font-bold text-sm">{idx + 1}</span>
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-1">
              <span className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-1 block">Phase {idx + 1}</span>
              <h4 className="font-bold text-slate-800 mb-3 text-lg">{milestone.focus}</h4>
              <ul className="space-y-2">
                {milestone.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2 items-start">
                    <span className="text-brand-pink mt-0.5">•</span> 
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
