import React, { useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Plus, 
  Sun, 
  Moon, 
  Globe 
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { NotificationDropdown } from './NotificationDropdown';

export const Header = ({ onOpenMobile }) => {
  const { 
    t, 
    theme, 
    toggleTheme, 
    lang, 
    toggleLang, 
    searchQuery, 
    setSearchQuery,
    setIsNewProjectModalOpen 
  } = useDashboard();

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.getElementById('header-search-input')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 lg:h-18 px-4 lg:px-8 flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.08] bg-white/85 dark:bg-[#090a10]/85 backdrop-blur-xl transition-colors">
      {/* Left: Mobile Toggle & Universal Search */}
      <div className="flex items-center gap-3 lg:gap-4 flex-1 max-w-lg">
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.05] active:scale-95 transition-all"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full">
          <Search className="absolute left-3.5 rtl:right-3.5 rtl:left-auto top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            id="header-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full bg-slate-100 dark:bg-[#10121b] border border-slate-200 dark:border-white/[0.08] rounded-full pl-10 pr-12 rtl:pr-10 rtl:pl-12 py-2 text-xs lg:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          <kbd className="hidden sm:inline-block absolute right-3 rtl:left-3 rtl:right-auto top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-white/[0.06] border border-slate-300/80 dark:border-white/[0.08] px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* + New Project Button */}
        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs lg:text-sm font-semibold shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">{t('newProject')}</span>
        </button>

        {/* Bonus: Notifications Dropdown */}
        <NotificationDropdown />

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-slate-200/70 dark:bg-white/[0.04] border border-slate-300/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-white/[0.08] active:scale-95 transition-all cursor-pointer"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Language Switcher */}
        <button
          onClick={toggleLang}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-white/[0.04] border border-slate-300/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500/40 text-xs font-bold active:scale-95 transition-all cursor-pointer"
          title="Toggle Language"
        >
          <Globe className="w-3.5 h-3.5 text-indigo-400" />
          <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
};
