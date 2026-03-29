import React, { useEffect, useState } from 'react';

const ProgressCircle = ({ value }) => {
  const [progress, setProgress] = useState(0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Animate progress on load
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-xl scale-75"></div>
      
      <svg className="relative w-40 h-40 transform -rotate-90">
        {/* Background track */}
        <circle 
          cx="80" cy="80" r="60" 
          stroke="currentColor" 
          strokeWidth="12" 
          fill="transparent" 
          className="text-slate-100" 
        />
        {/* Progress track */}
        <circle 
          cx="80" cy="80" r="60" 
          stroke="url(#gradient)" 
          strokeWidth="12" 
          strokeLinecap="round"
          fill="transparent" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1500 ease-out" 
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#F9A8D4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-extrabold text-slate-800 tracking-tighter">{progress}%</span>
        <span className="text-xs text-brand-purple font-bold tracking-widest uppercase mt-1">Readiness</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
