import React from 'react';
import {
  Briefcase,
  Plus,
  Sun,
  Moon,
  Download,
  RotateCcw,
  Search,
  X
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useJobs } from '../../context/JobContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    filters,
    setFilter,
    setIsAddModalOpen,
    setIsExportModalOpen,
    resetSeedData
  } = useJobs();

  const handleResetData = () => {
    if (window.confirm('Reset all jobs back to the original 10 sample applications? Custom changes will be replaced.')) {
      resetSeedData();
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-emerald-500 p-[2px] shadow-glow-indigo">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 dark:from-white dark:via-indigo-200 dark:to-slate-300 bg-clip-text text-transparent">
                CareerFlow
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                Kanban
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Pipeline & Application Tracker
            </p>
          </div>
        </div>

        {/* Global Live Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 relative items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
          <input
            id="search-jobs"
            type="text"
            placeholder="Search company, role, skills, notes..."
            value={filters.search}
            onChange={(e) => setFilter('search', e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
          />
          {filters.search && (
            <button
              onClick={() => setFilter('search', '')}
              className="absolute right-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded-md"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Add Job Button */}
          <button
            id="btn-add-job"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/25 active:scale-95 transition"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden xs:inline">Add Job</span>
          </button>

          {/* Export / Import Button */}
          <button
            id="btn-export"
            onClick={() => setIsExportModalOpen(true)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Import / Export Data (JSON)"
            aria-label="Export or Import Applications"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Reset Demo Seed Data */}
          <button
            id="btn-reset-data"
            onClick={handleResetData}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Reset to 10 Seed Applications"
            aria-label="Reset Demo Seed Data"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition relative"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
