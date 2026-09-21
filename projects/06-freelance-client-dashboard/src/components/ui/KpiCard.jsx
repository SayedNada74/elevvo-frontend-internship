import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const KpiCard = ({ title, value, subtext, icon: Icon, trend, variant = 'indigo' }) => {
  const variantStyles = {
    emerald: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      trend: 'text-emerald-400',
    },
    indigo: {
      badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      trend: 'text-slate-400',
    },
    amber: {
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      trend: 'text-amber-400',
    },
    violet: {
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      trend: 'text-purple-400',
    }
  };

  const style = variantStyles[variant] || variantStyles.indigo;

  return (
    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-white/[0.16] hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-400">{title}</span>
        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${style.badge}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
        {value}
      </div>
      <div className={`flex items-center gap-1.5 text-xs font-semibold mt-2.5 ${style.trend}`}>
        {trend && <ArrowUpRight className="w-3.5 h-3.5" />}
        <span>{subtext}</span>
      </div>
    </div>
  );
};
