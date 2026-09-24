import React from 'react';
import { Plus, SlidersHorizontal, Sun, Moon, Briefcase } from 'lucide-react';
import { useJobs } from '../../context/JobContext';
import { useTheme } from '../../context/ThemeContext';

export const MobileTaskbar: React.FC = () => {
  const { setIsAddModalOpen, activeFilterCount } = useJobs();
  const { theme, toggleTheme } = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFocusFilter = () => {
    const filterInput = document.getElementById('mobile-search-jobs');
    if (filterInput) {
      filterInput.focus();
      filterInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      id="mobile-taskbar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-panel border-t border-slate-200/80 dark:border-slate-800/80 px-4 py-2 pb-safe shadow-xl"
    >
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {/* Top/Home */}
        <button
          onClick={handleScrollToTop}
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition"
          aria-label="Scroll to top"
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] font-medium">Board</span>
        </button>

        {/* Filter Quick Trigger */}
        <button
          onClick={handleFocusFilter}
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 relative transition"
          aria-label="Focus search and filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="text-[10px] font-medium">Filter</span>
          {activeFilterCount > 0 && (
            <span className="absolute top-0 right-1 w-2 h-2 rounded-full bg-rose-500" />
          )}
        </button>

        {/* Primary Central Add Button */}
        <button
          id="mobile-add-job-btn"
          onClick={() => setIsAddModalOpen(true)}
          className="w-12 h-12 -mt-5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/35 active:scale-95 transition-transform"
          aria-label="Add new application"
        >
          <Plus className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition"
          aria-label="Toggle light/dark theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
          <span className="text-[10px] font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  );
};
