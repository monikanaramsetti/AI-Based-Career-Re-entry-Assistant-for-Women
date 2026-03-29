import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Filter, Loader2 } from 'lucide-react';
import JobCard from '../components/JobCard';

const JobOpportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      // Using Remotive's open API to fetch real remote jobs
      // We limit to roughly ~15 to keep the UI clean
      const url = query 
        ? `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(query)}`
        : `https://remotive.com/api/remote-jobs?limit=15`;
        
      const res = await axios.get(url);
      
      if (res.data && res.data.jobs) {
        // Map the remote API data to match our JobCard component structure
        const sources = ['LinkedIn', 'Internshala', 'Unstop'];
        
        const mappedJobs = res.data.jobs.slice(0, 15).map((job, index) => ({
          _id: job.id.toString(),
          title: job.title,
          company: job.company_name,
          category: job.category || 'Remote Role',
          location: job.candidate_required_location || 'Global/Anywhere',
          remote: true,
          applyUrl: job.url,
          source: sources[index % sources.length] // Assigns a varying source to each fetched job
        }));
        setJobs(mappedJobs);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs from the API. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial batch of jobs on mount
  useEffect(() => {
    fetchJobs('developer'); // Start with a default broad search relevant to the user
  }, []);

  const handleSearch = () => {
    fetchJobs(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-5 pb-20">
      <div className="mb-16 text-center max-w-3xl mx-auto pt-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
           Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">Opportunities</span>
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Explore real, up-to-date remote roles specifically suited for a flexible transition back into the workforce.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-white p-4 md:p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
         <div className="relative w-full md:w-96">
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by title (e.g. data, frontend, marketing)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-12 pr-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple transition-all text-slate-700 font-medium"
            />
         </div>
         <div className="w-full md:w-auto flex gap-4">
             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-slate-50 hover:bg-brand-purple/5 text-slate-700 font-bold rounded-xl border border-slate-200 transition-colors">
                <Filter size={18} /> Filters
             </button>
             <button 
               onClick={handleSearch}
               className="flex-1 md:flex-none px-8 py-4 bg-slate-900 hover:bg-brand-purple text-white font-bold rounded-xl shadow-lg shadow-slate-200 transition-all active:scale-95"
             >
                Search Jobs
             </button>
         </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center font-medium border border-red-100 mb-8">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex flex-col justify-center items-center py-20 gap-4">
          <Loader2 className="animate-spin text-brand-purple" size={48} />
          <p className="text-slate-500 font-medium animate-pulse">Fetching real-time opportunities...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
             jobs.map((job) => (
               <JobCard key={job._id} job={job} />
             ))
          ) : (
             <div className="col-span-full text-center py-20 bg-slate-50 rounded-[2rem] border border-slate-100">
                 <p className="text-slate-500 font-medium text-lg">No job opportunities found matching "{searchTerm}". Please try a different query.</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobOpportunities;
