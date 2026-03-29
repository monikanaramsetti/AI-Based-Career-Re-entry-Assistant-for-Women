import React from 'react';
import { Quote } from 'lucide-react';

const MotivationCard = () => {
  const quotes = [
    "Your break is a chapter in your story, not the end of your book.",
    "The skills you gained outside the office are just as valuable as those inside.",
    "Re-entering the workforce is a pivot, not a start from scratch."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-gradient-to-br from-brand-purple to-brand-pink p-8 rounded-[2rem] shadow-lg text-white relative overflow-hidden h-full flex flex-col justify-center">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      
      <Quote size={40} className="text-white/20 absolute top-6 left-6" />
      
      <div className="relative z-10 text-center px-4 py-8">
        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">"{randomQuote}"</p>
        <span className="text-purple-100 text-sm uppercase tracking-widest font-semibold">— Daily Motivation</span>
      </div>
    </div>
  );
};

export default MotivationCard;
