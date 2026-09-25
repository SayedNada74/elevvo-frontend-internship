'use client';

import React from 'react';
import { ShieldCheck, Zap, Activity, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const MetricsBar: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      value: t.metrics.stat1Value,
      label: t.metrics.stat1Label,
      desc: t.metrics.stat1Desc,
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      value: t.metrics.stat2Value,
      label: t.metrics.stat2Label,
      desc: t.metrics.stat2Desc,
      icon: Zap,
      color: 'text-cyan-500 bg-cyan-500/10'
    },
    {
      value: t.metrics.stat3Value,
      label: t.metrics.stat3Label,
      desc: t.metrics.stat3Desc,
      icon: Activity,
      color: 'text-indigo-500 bg-indigo-500/10'
    },
    {
      value: t.metrics.stat4Value,
      label: t.metrics.stat4Label,
      desc: t.metrics.stat4Desc,
      icon: Users,
      color: 'text-purple-500 bg-purple-500/10'
    }
  ];

  return (
    <section id="metrics" className="py-16 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${m.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {m.value}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {m.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
