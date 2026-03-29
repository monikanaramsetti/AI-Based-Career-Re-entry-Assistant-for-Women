import React from 'react';

const FormCard = ({ children, title, description }) => {
  return (
    <div className="w-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12 border border-slate-100 relative overflow-hidden group">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple to-brand-pink"></div>
      
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">{title}</h2>
        {description && <p className="text-slate-500">{description}</p>}
      </div>
      
      {children}
    </div>
  );
};

export default FormCard;
