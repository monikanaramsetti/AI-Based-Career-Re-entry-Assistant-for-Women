import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import FormCard from '../components/FormCard';

const CareerStoryForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    previousRole: '',
    yearsExperience: '',
    breakDuration: '',
    breakReason: '',
    currentSkills: '',
    desiredRole: '',
    returnTimeframe: '3', // new field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMockRoadmap = (months, desiredRole) => {
    const defaultSteps = [
      { focus: "Foundation & Refresh", tasks: ["Review industry updates", "Set up professional profiles"] },
      { focus: "Skill Acquisition", tasks: ["Complete recommended courses", "Build a small portfolio project"] },
      { focus: "Networking", tasks: ["Connect with 5 professionals on LinkedIn", "Attend 1 virtual meetup"] },
      { focus: "Interview Prep", tasks: ["Update resume with new skills", "Practice behavioral interviews"] },
      { focus: "Aggressive Application", tasks: ["Apply to 10 target companies", "Follow up with referrals"] },
      { focus: "Negotiation & Start", tasks: ["Evaluate offers", "Prepare for day 1"] }
    ];
    
    // Simple logic to distribute steps over requested months
    const numMonths = parseInt(months);
    const result = [];
    const stepSize = Math.max(1, Math.floor(defaultSteps.length / numMonths));
    
    for(let i=0; i < numMonths; i++) {
        const stepIdx = Math.min(i * stepSize, defaultSteps.length - 1);
        result.push(defaultSteps[stepIdx]);
    }

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI Processing Time
    setTimeout(() => {
        // Construct detailed mock data
        const currentSkillsArray = formData.currentSkills.split(',').map(s => s.trim()).filter(Boolean);
        
        const mockData = {
           analysis: {
               confidenceScore: 78,
               strengths: currentSkillsArray.length > 0 ? currentSkillsArray : ['Adaptability', 'Previous Domain Knowledge'],
               improvementAreas: ["Modern Tech Stack", "Recent Trends in " + (formData.desiredRole || "Industry")],
               missingSkills: ["Product Analytics", "Agile Methodologies", "Cross-functional Leadership"],
               detectedSoftSkills: ["Resilience", "Time Management", "Empathy", "Problem Solving"],
               careerGapExplanation: `During my ${formData.breakDuration} year career break, I focused on ${formData.breakReason || 'personal development'} which strengthened my time-management and resilience. I proactively kept myself updated with the latest trends in ${formData.desiredRole || 'my field'} and I am fully energized to bring my renewed perspective to a fresh challenge.`,
               roadmap: generateMockRoadmap(formData.returnTimeframe, formData.desiredRole)
           }
        };

        navigate('/dashboard', { state: { data: mockData, userContext: formData } });
    }, 2500);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-5">
      <FormCard 
         title="Tell Us About Your Journey" 
         description="Let our AI understand your unique path so we can build the perfect comeback plan."
      >
        <form onSubmit={handleSubmit} className="space-y-8 mt-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Your Name</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-slate-50 focus:bg-white text-slate-800 font-medium" 
                placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Previous Job Role</label>
              <input type="text" name="previousRole" required value={formData.previousRole} onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-slate-50 focus:bg-white text-slate-800 font-medium" 
                placeholder="E.g., Senior Data Analyst" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Years of Experience</label>
              <input type="number" name="yearsExperience" required min="1" value={formData.yearsExperience} onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-slate-50 focus:bg-white text-slate-800 font-medium" 
                placeholder="5" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Career Break Duration (Years)</label>
              <input type="number" step="0.5" name="breakDuration" required min="0.5" value={formData.breakDuration} onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-slate-50 focus:bg-white text-slate-800 font-medium" 
                placeholder="e.g., 2.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex justify-between">
               Reason for Career Break <span className="text-slate-400 font-normal">Optional</span>
            </label>
            <input type="text" name="breakReason" value={formData.breakReason} onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-slate-50 focus:bg-white text-slate-800 font-medium" 
              placeholder="e.g., Childcare, Health, Caregiving, Relocation" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Current Skills (Comma separated)</label>
            <input type="text" name="currentSkills" required value={formData.currentSkills} onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-slate-50 focus:bg-white text-slate-800 font-medium" 
              placeholder="SQL, Python, Excel, Team Leadership" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-brand-purple/5 p-6 rounded-2xl border border-brand-purple/10">
             <div className="space-y-2">
                <label className="text-sm font-bold text-brand-purple">Desired Career Role</label>
                <input type="text" name="desiredRole" required value={formData.desiredRole} onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-white focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-white text-slate-800 font-medium shadow-sm" 
                placeholder="Product Manager" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-brand-purple">Time to Return</label>
                <select name="returnTimeframe" value={formData.returnTimeframe} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-white focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-white text-slate-800 font-medium shadow-sm cursor-pointer appearance-none"
                >
                  <option value="1">1 Month (Fast Track)</option>
                  <option value="3">3 Months (Recommended)</option>
                  <option value="6">6 Months (Steady Pace)</option>
                  <option value="12">12 Months (Gradual)</option>
                </select>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="group relative w-full overflow-hidden rounded-2xl p-[2px] transition-all hover:shadow-xl hover:shadow-brand-purple/30 disabled:opacity-70 disabled:cursor-not-allowed"
          >
             <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink"></span>
             <div className="relative flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-brand-purple to-brand-pink px-8 py-5 text-lg font-bold text-white transition-all hover:bg-opacity-90">
                {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      <span className="ml-2 animate-pulse">Running AI Analysis...</span>
                    </>
                ) : (
                    <>
                      <Sparkles size={24} />
                      <span>Generate My Comeback Plan</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                )}
             </div>
          </button>
        </form>
      </FormCard>
    </div>
  );
};

export default CareerStoryForm;
