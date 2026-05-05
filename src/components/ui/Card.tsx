import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false }) => {
  return (
    <div className={`
      bg-white rounded-3xl border border-slate-100 p-6 
      shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
      backdrop-blur-sm bg-white/80
      ${hoverable ? 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="flex items-center gap-4 mb-6">
    {icon && (
      <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>
    )}
    <div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
  </div>
);
