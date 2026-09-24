import React from 'react';

export const SkeletonBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full animate-pulse">
      {[1, 2, 3, 4].map((col) => (
        <div
          key={col}
          className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-4 min-h-[500px] flex flex-col gap-4"
        >
          {/* Column Header Skeleton */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-24 h-5 rounded-md bg-slate-300 dark:bg-slate-700" />
            </div>
            <div className="w-6 h-5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>

          {/* Cards Skeleton */}
          <div className="space-y-3.5 flex-1">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="rounded-xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 p-4 space-y-3 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-700" />
                    <div className="space-y-1.5">
                      <div className="w-24 h-4 rounded bg-slate-300 dark:bg-slate-700" />
                      <div className="w-32 h-3.5 rounded bg-slate-200 dark:bg-slate-800" />
                    </div>
                  </div>
                </div>
                <div className="w-20 h-4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="flex gap-1.5 pt-1">
                  <div className="w-14 h-5 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="w-16 h-5 rounded-full bg-slate-200 dark:bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
