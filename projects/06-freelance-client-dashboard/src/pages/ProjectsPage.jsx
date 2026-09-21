import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Table, 
  Kanban, 
  Trash2, 
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

export const ProjectsPage = () => {
  const { 
    t, 
    projects, 
    searchQuery, 
    cycleProjectStatus, 
    deleteProject,
    setIsNewProjectModalOpen 
  } = useDashboard();

  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'kanban'
  const [localSearch, setLocalSearch] = useState('');

  const effectiveSearch = localSearch || searchQuery;

  // Filter projects by tab and search
  const filteredProjects = projects.filter((p) => {
    const matchesTab = activeTab === 'all' || p.status === activeTab;
    const matchesSearch = !effectiveSearch || 
      p.name.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
      p.client.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(effectiveSearch.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const allCount = projects.length;
  const progressCount = projects.filter(p => p.status === 'in-progress').length;
  const reviewCount = projects.filter(p => p.status === 'under-review').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;

  const tabs = [
    { id: 'all', label: t('allProjects'), count: allCount },
    { id: 'in-progress', label: t('inProgress'), count: progressCount },
    { id: 'under-review', label: t('underReview'), count: reviewCount },
    { id: 'completed', label: t('completed'), count: completedCount },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            {t('inProgress')}
          </span>
        );
      case 'under-review':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            {t('underReview')}
          </span>
        );
      case 'completed':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t('completed')}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            {t('projectManagement')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t('projectManagementSub')}
          </p>
        </div>

        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>{t('addNewProject')}</span>
        </button>
      </div>

      {/* Toolbar & Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {tab.label} <span className="opacity-75 font-mono">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Right Tools: Search & Layout Toggle */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder={t('filterPlaceholder')}
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex p-0.5 rounded-xl bg-[#10121b] border border-white/[0.08]">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'table' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Table View"
            >
              <Table className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'kanban' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Kanban View"
            >
              <Kanban className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display: Table View */}
      {viewMode === 'table' ? (
        <div className="overflow-x-auto rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-white/[0.01]">
                <th className="p-4">Project</th>
                <th className="p-4">Client</th>
                <th className="p-4">Category</th>
                <th className="p-4">Budget</th>
                <th className="p-4">Deadline</th>
                <th className="p-4">Progress</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filteredProjects.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-white">{p.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{p.id}</div>
                  </td>
                  <td className="p-4 font-medium text-slate-300">{p.client}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/[0.05] border border-white/[0.08] text-slate-300">
                      {p.category}
                    </span>
                  </td>
                  <td className="p-4 font-mono font-bold text-white">
                    ${p.budget.toLocaleString()}
                  </td>
                  <td className="p-4 font-mono text-slate-300 text-xs">
                    {p.deadline}
                  </td>
                  <td className="p-4 min-w-[130px]">
                    <div className="flex items-center gap-2.5">
                      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                          style={{ width: `${p.progress}%` }} 
                        />
                      </div>
                      <span className="font-mono text-xs text-slate-400">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {getStatusBadge(p.status)}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => cycleProjectStatus(p.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
                        title="Cycle Status (In Progress -> Review -> Done)"
                        aria-label="Advance project status"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteProject(p.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 active:scale-95 transition-all"
                        title="Delete Project"
                        aria-label="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Projects Display: Kanban View */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {['in-progress', 'under-review', 'completed'].map((statusKey) => {
            const columnProjects = filteredProjects.filter((p) => p.status === statusKey);
            const titles = {
              'in-progress': t('inProgress'),
              'under-review': t('underReview'),
              'completed': t('completed')
            };

            return (
              <div 
                key={statusKey}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col gap-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {titles[statusKey]}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400 font-mono">
                    {columnProjects.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {columnProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.16] transition-all space-y-2.5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white line-clamp-2">{p.name}</h4>
                        <button
                          onClick={() => cycleProjectStatus(p.id)}
                          className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/[0.05]"
                          title="Advance status"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{p.client}</span>
                        <span className="text-white font-mono font-bold">${p.budget.toLocaleString()}</span>
                      </div>

                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full" 
                          style={{ width: `${p.progress}%` }} 
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                        <span className="font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {p.deadline}
                        </span>
                        <span>{p.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
