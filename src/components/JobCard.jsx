import React from 'react';
import { Briefcase, Building2, MapPin, ExternalLink } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-slate-100 flex flex-col h-full group hover:-translate-y-1 cursor-default">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex gap-2 items-center mb-3">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-extrabold rounded-md border border-blue-100 uppercase tracking-wide">
              {job.category}
            </span>
            {job.source && (
               <span className="inline-block px-3 py-1 bg-purple-50 text-brand-purple text-[10px] font-extrabold rounded-md border border-purple-100 uppercase tracking-wide">
                 Via {job.source}
               </span>
            )}
          </div>
          <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-brand-purple transition-colors leading-tight">{job.title}</h3>
        </div>
        <div className="bg-slate-50 p-3 rounded-xl text-slate-400 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
          <Briefcase size={20} />
        </div>
      </div>

      <div className="space-y-3 mb-8 flex-1 mt-2">
        <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
          <Building2 size={16} className="text-slate-400" />
          <span>{job.company}</span>
        </div>
        {job.category.includes('Remote') || job.remote ? (
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <MapPin size={16} className="text-slate-400" />
            <span>Anywhere / Remote Option</span>
          </div>
        ) : (
             <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <MapPin size={16} className="text-slate-400" />
            <span>{job.location || 'Hybrid'}</span>
          </div>
        )}
      </div>

      <a 
        href={job.applyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-50 hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-pink text-brand-purple hover:text-white font-bold rounded-xl text-sm transition-all shadow-sm border border-slate-100 hover:border-transparent group-hover:shadow-md"
      >
        View & Apply <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default JobCard;
