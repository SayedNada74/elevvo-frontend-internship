import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  PlusCircle 
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const MobileTaskbar = () => {
  const { t, setIsNewProjectModalOpen } = useDashboard();

  return (
    <nav
      id="mobile-taskbar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#090a10]/95 border-t border-slate-200/80 dark:border-white/[0.08] backdrop-blur-2xl px-2 py-2 pb-safe flex items-center justify-around text-[10px] font-semibold text-slate-500 dark:text-slate-400 shadow-2xl transition-colors"
      aria-label="Mobile Bottom Navigation"
    >
      <NavLink
        to="/overview"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all active:scale-95 ${
            isActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`
        }
      >
        <LayoutDashboard className="w-5 h-5" />
        <span>{t('overview')}</span>
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all active:scale-95 ${
            isActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`
        }
      >
        <Briefcase className="w-5 h-5" />
        <span>{t('projects')}</span>
      </NavLink>

      {/* Quick Action: New Project Modal Trigger */}
      <button
        onClick={() => setIsNewProjectModalOpen(true)}
        className="flex flex-col items-center gap-1 p-1.5 text-indigo-600 dark:text-indigo-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Create New Project"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <PlusCircle className="w-5 h-5" />
        </div>
        <span className="font-bold">{t('newProject') || 'New'}</span>
      </button>

      <NavLink
        to="/clients"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all active:scale-95 ${
            isActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`
        }
      >
        <Users className="w-5 h-5" />
        <span>{t('clients')}</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all active:scale-95 ${
            isActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`
        }
      >
        <Settings className="w-5 h-5" />
        <span>{t('settings')}</span>
      </NavLink>
    </nav>
  );
};

export default MobileTaskbar;
