import React from 'react';
import { Filter, Search, X, SlidersHorizontal, MapPin, AlertCircle, Tag } from 'lucide-react';
import { useJobs } from '../../context/JobContext';
import { LocationType, Priority } from '../../types/job';

export const FilterBar: React.FC = () => {
  const {
    filters,
    setFilter,
    resetFilters,
    activeFilterCount,
    allTags
  } = useJobs();

  return (
    <div className="mb-6 space-y-3">
      {/* Mobile Search Input */}
      <div className="relative md:hidden">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          id="mobile-search-jobs"
          type="text"
          placeholder="Search jobs, companies, skills..."
          value={filters.search}
          onChange={(e) => setFilter('search', e.target.value)}
          className="w-full pl-9 pr-9 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        {filters.search && (
          <button
            onClick={() => setFilter('search', '')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 pl-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
            <span>Filters:</span>
          </div>

          {/* Location Type Selector */}
          <div className="relative inline-flex items-center">
            <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            <select
              id="filter-location"
              value={filters.locationType}
              onChange={(e) => setFilter('locationType', e.target.value as LocationType | 'all')}
              className="text-xs pl-7 pr-7 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer appearance-none"
            >
              <option value="all">Location: All</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">On-site</option>
            </select>
          </div>

          {/* Priority Selector */}
          <div className="relative inline-flex items-center">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            <select
              id="filter-priority"
              value={filters.priority}
              onChange={(e) => setFilter('priority', e.target.value as Priority | 'all')}
              className="text-xs pl-7 pr-7 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer appearance-none"
            >
              <option value="all">Priority: All</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>

          {/* Tag Selector */}
          {allTags.length > 0 && (
            <div className="relative inline-flex items-center">
              <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
              <select
                id="filter-tag"
                value={filters.tag}
                onChange={(e) => setFilter('tag', e.target.value)}
                className="text-xs pl-7 pr-7 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer appearance-none max-w-[160px] truncate"
              >
                <option value="all">Skill / Tag: All</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Clear Filters Button */}
        {activeFilterCount > 0 && (
          <button
            id="btn-clear-filters"
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 px-2.5 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 transition"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Reset ({activeFilterCount})</span>
          </button>
        )}
      </div>
    </div>
  );
};
