import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, FolderPlus } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const NewProjectModal = () => {
  const { 
    t, 
    isNewProjectModalOpen, 
    setIsNewProjectModalOpen, 
    addProject 
  } = useDashboard();

  const [mounted] = useState(() => typeof document !== 'undefined');

  const [formData, setFormData] = useState({
    name: '',
    client: '',
    category: 'Web App',
    budget: '',
    deadline: '',
    status: 'in-progress',
    progress: 20
  });

  // Background scroll lock per Playbook Section 3.2
  useEffect(() => {
    if (isNewProjectModalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isNewProjectModalOpen]);

  if (!mounted || !isNewProjectModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.client || !formData.budget) return;

    addProject({
      ...formData,
      budget: parseFloat(formData.budget) || 0,
      progress: parseInt(formData.progress, 10) || 0,
      deadline: formData.deadline || new Date(Date.now() + 20 * 86400000).toISOString().split('T')[0]
    });

    setIsNewProjectModalOpen(false);
    setFormData({
      name: '',
      client: '',
      category: 'Web App',
      budget: '',
      deadline: '',
      status: 'in-progress',
      progress: 20
    });
  };

  const modalJSX = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={() => setIsNewProjectModalOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-lg bg-[#12141f] border border-white/[0.12] rounded-3xl shadow-2xl p-6 animate-modal-pop text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <FolderPlus className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{t('modalNewProjectTitle')}</h3>
          </div>
          <button 
            onClick={() => setIsNewProjectModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              {t('projectNameScope')}
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Fintech Mobile Dashboard & UI"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('clientNameCompany')}
              </label>
              <input
                type="text"
                required
                placeholder="e.g. NovaLabs Inc."
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('category')}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Web App">Web Application</option>
                <option value="Design System">Design System</option>
                <option value="Landing Page">Landing Page</option>
                <option value="API Integration">API Integration</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('contractValue')}
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  required
                  min="100"
                  placeholder="4500"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl pl-8 pr-3.5 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('targetDeadline')}
              </label>
              <input
                type="date"
                required
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('initialStatus')}
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="in-progress">{t('inProgress')}</option>
                <option value="under-review">{t('underReview')}</option>
                <option value="completed">{t('completed')}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('initialProgress')} ({formData.progress}%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                className="w-full accent-indigo-500 mt-2"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => setIsNewProjectModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all"
            >
              {t('createProjectBtn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalJSX, document.body);
};
