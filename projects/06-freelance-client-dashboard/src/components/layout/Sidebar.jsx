import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  X, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const Sidebar = ({ isMobileOpen, onCloseMobile }) => {
  const { t, projects, userProfile } = useDashboard();
  const activeCount = projects.filter(p => p.status !== 'completed').length;

  const navItems = [
    { to: '/overview', label: t('overview'), icon: LayoutDashboard },
    { to: '/projects', label: t('projects'), icon: Briefcase, badge: activeCount },
    { to: '/clients', label: t('clients'), icon: Users },
    { to: '/settings', label: t('settings'), icon: Settings },
  ];

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] lg:hidden animate-fade-in"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Capsule */}
      <aside className={`
        fixed lg:sticky top-0 h-screen w-64 lg:w-72 bg-white dark:bg-[#0f111a] border-r border-slate-200 dark:border-white/[0.08] 
        flex flex-col p-5 z-[60] lg:z-30 transition-all duration-300 ease-out backdrop-blur-xl
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 rtl:translate-x-full rtl:lg:translate-x-0'}
      `}>
        {/* Brand Logo Header */}
        <div className="flex items-center justify-between pb-6 pt-1 px-2 border-b border-slate-200 dark:border-white/[0.06]">
          <NavLink to="/overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 group-hover:rotate-6 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Apex<span className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Freelance</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
                {t('proConsole')}
              </span>
            </div>
          </NavLink>

          <button 
            onClick={onCloseMobile} 
            className="lg:hidden p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] active:scale-95 transition-all"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 flex flex-col gap-1.5 overflow-y-auto">
          <div className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 px-3 py-1">
            {t('workspace')}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onCloseMobile}
                className={({ isActive }) => `
                  relative flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/20 font-semibold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className="bg-indigo-100 dark:bg-white/20 text-indigo-700 dark:text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}

          {/* Monthly Hours Goal Mini Widget */}
          <div className="mt-auto pt-4 px-1">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] backdrop-blur-md">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-slate-500 dark:text-slate-400 font-medium">{t('monthlyGoal')}</span>
                <span className="font-bold text-slate-900 dark:text-white">138 / 160 <small className="text-slate-500 dark:text-slate-400">hrs</small></span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full w-[86%]" />
              </div>
              <div className="text-[11px] font-semibold text-emerald-500 dark:text-emerald-400">
                {t('onTrack')}
              </div>
            </div>
          </div>
        </nav>

        {/* User Profile Card (Sayed Nada) */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06]">
          <NavLink 
            to="/settings" 
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300 dark:border-white/20 flex-shrink-0">
              <img 
                src={userProfile.avatar} 
                alt={userProfile.name} 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0f111a]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-slate-900 dark:text-white truncate">{userProfile.name}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{userProfile.role}</div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </NavLink>
        </div>
      </aside>
    </>
  );
};
