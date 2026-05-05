import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className = '', ...props }) => {
  return (
    <div className="w-full space-y-2">
      {label && <label className="block text-sm font-semibold text-slate-700 ml-1">{label}</label>}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-4 py-3.5 
            ${icon ? 'pl-12' : ''}
            text-slate-900 placeholder:text-slate-400
            focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 
            transition-all outline-none
            ${error ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/10' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-medium text-rose-500 ml-1">{error}</p>}
    </div>
  );
};
