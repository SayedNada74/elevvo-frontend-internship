import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const Toast = () => {
  const { toast } = useDashboard();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
      default:
        return <Info className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="fixed bottom-6 left-6 rtl:right-6 rtl:left-auto z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#131622] border border-white/20 shadow-2xl backdrop-blur-xl animate-fade-in text-white text-xs sm:text-sm font-semibold">
      {getIcon()}
      <span>{toast.message}</span>
    </div>
  );
};
