import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';

export const StatusDonutChart = () => {
  const { t, projects } = useDashboard();

  const total = projects.length;
  const inProgress = projects.filter(p => p.status === 'in-progress').length;
  const underReview = projects.filter(p => p.status === 'under-review').length;
  const completed = projects.filter(p => p.status === 'completed').length;

  const data = [
    { name: t('inProgress'), value: inProgress, color: '#6366f1' },
    { name: t('underReview'), value: underReview, color: '#f59e0b' },
    { name: t('completed'), value: completed, color: '#10b981' }
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Donut Stage */}
      <div className="relative w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={54}
              outerRadius={75}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="p-2.5 rounded-xl bg-[#131622] border border-white/20 shadow-xl text-xs">
                      <div className="font-bold text-white">{payload[0].name}</div>
                      <div className="text-slate-300">
                        {payload[0].value} projects ({Math.round((payload[0].value / total) * 100)}%)
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Total Count */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-black text-white">{total}</span>
          <span className="text-[11px] font-semibold text-slate-400">{t('projects')}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2 mt-2 pt-3 border-t border-white/[0.06]">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span className="font-bold text-white font-mono">
              {item.value} ({total > 0 ? Math.round((item.value / total) * 100) : 0}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
