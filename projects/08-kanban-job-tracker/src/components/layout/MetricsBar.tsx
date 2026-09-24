import React from 'react';
import { Briefcase, CalendarCheck, Trophy, TrendingUp } from 'lucide-react';
import { useJobs } from '../../context/JobContext';

export const MetricsBar: React.FC = () => {
  const { metrics } = useJobs();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
      {/* Metric 1: Total Tracked */}
      <div className="glass-card rounded-2xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Total Pipeline
          </span>
          <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <Briefcase className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {metrics.total}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">active roles</span>
        </div>
      </div>

      {/* Metric 2: Interviewing */}
      <div className="glass-card rounded-2xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Interviewing
          </span>
          <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <CalendarCheck className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {metrics.interviewing}
          </span>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
            {metrics.interviewRate}% rate
          </span>
        </div>
      </div>

      {/* Metric 3: Offers Received */}
      <div className="glass-card rounded-2xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Offers Secured
          </span>
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Trophy className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {metrics.offer}
          </span>
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            🎉 In hand
          </span>
        </div>
      </div>

      {/* Metric 4: Conversion Rate */}
      <div className="glass-card rounded-2xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Offer Rate
          </span>
          <div className="w-8 h-8 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {metrics.offerRate}%
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">of applications</span>
        </div>
      </div>
    </div>
  );
};
