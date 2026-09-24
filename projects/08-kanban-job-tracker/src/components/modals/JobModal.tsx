import React, { useState, useEffect } from 'react';
import { X, Briefcase, Building, DollarSign, MapPin, Tag, Globe, FileText, AlertCircle } from 'lucide-react';
import { useJobs } from '../../context/JobContext';
import { JobStatus, LocationType, Priority } from '../../types/job';

export const JobModal: React.FC = () => {
  const {
    isAddModalOpen,
    setIsAddModalOpen,
    editingJob,
    setEditingJob,
    addJob,
    editJob
  } = useJobs();

  const isEditing = Boolean(editingJob);
  const isOpen = isAddModalOpen || isEditing;

  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState<JobStatus>('applied');
  const [locationType, setLocationType] = useState<LocationType>('remote');
  const [locationCity, setLocationCity] = useState('');
  const [salary, setSalary] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [url, setUrl] = useState('');
  const [appliedDate, setAppliedDate] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ company?: string; role?: string }>({});

  useEffect(() => {
    if (editingJob) {
      setCompany(editingJob.company);
      setRole(editingJob.role);
      setStatus(editingJob.status);
      setLocationType(editingJob.locationType);
      setLocationCity(editingJob.locationCity || '');
      setSalary(editingJob.salary);
      setPriority(editingJob.priority);
      setUrl(editingJob.url || '');
      setAppliedDate(editingJob.appliedDate);
      setTagsInput(editingJob.tags ? editingJob.tags.join(', ') : '');
      setNotes(editingJob.notes || '');
    } else {
      setCompany('');
      setRole('');
      setStatus('applied');
      setLocationType('remote');
      setLocationCity('');
      setSalary('');
      setPriority('medium');
      setUrl('');
      setAppliedDate(new Date().toISOString().split('T')[0]);
      setTagsInput('');
      setNotes('');
    }
    setErrors({});
  }, [editingJob, isAddModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsAddModalOpen(false);
    setEditingJob(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { company?: string; role?: string } = {};
    if (!company.trim()) newErrors.company = 'Company name is required';
    if (!role.trim()) newErrors.role = 'Role title is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (isEditing && editingJob) {
      editJob(editingJob.id, {
        company: company.trim(),
        role: role.trim(),
        status,
        locationType,
        locationCity: locationCity.trim() || undefined,
        salary: salary.trim() || 'Undisclosed',
        priority,
        url: url.trim() || undefined,
        appliedDate,
        tags,
        notes: notes.trim() || undefined
      });
    } else {
      addJob({
        company: company.trim(),
        role: role.trim(),
        status,
        locationType,
        locationCity: locationCity.trim() || undefined,
        salary: salary.trim() || 'Undisclosed',
        priority,
        url: url.trim() || undefined,
        appliedDate,
        tags,
        notes: notes.trim() || undefined
      });
    }

    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div
        className="glass-panel w-full max-w-lg rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                {isEditing ? 'Edit Application' : 'Add Application'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEditing ? 'Update role credentials and stage' : 'Track a new opportunity in your pipeline'}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-sm">
          {/* Company & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Company <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  id="modal-company"
                  type="text"
                  placeholder="e.g. Stripe, Vercel"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                    errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
              </div>
              {errors.company && (
                <p className="text-rose-500 text-[11px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.company}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Role Title <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  id="modal-role"
                  type="text"
                  placeholder="e.g. Frontend Engineer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                    errors.role ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
              </div>
              {errors.role && (
                <p className="text-rose-500 text-[11px] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.role}
                </p>
              )}
            </div>
          </div>

          {/* Status & Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Pipeline Stage
              </label>
              <select
                id="modal-status"
                value={status}
                onChange={(e) => setStatus(e.target.value as JobStatus)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-medium"
              >
                <option value="applied">Applied</option>
                <option value="interviewing">Interviewing</option>
                <option value="offer">Offer Received</option>
                <option value="rejected">Archived / Rejected</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Priority
              </label>
              <select
                id="modal-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-medium"
              >
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>
          </div>

          {/* Location Type & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Work Arrangement
              </label>
              <select
                id="modal-location-type"
                value={locationType}
                onChange={(e) => setLocationType(e.target.value as LocationType)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-medium"
              >
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Location / City
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  id="modal-location-city"
                  type="text"
                  placeholder="e.g. San Francisco, CA"
                  value={locationCity}
                  onChange={(e) => setLocationCity(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
            </div>
          </div>

          {/* Salary & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Salary Compensation
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  id="modal-salary"
                  type="text"
                  placeholder="e.g. $140,000 - $170,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Date Applied
              </label>
              <input
                id="modal-applied-date"
                type="date"
                value={appliedDate}
                onChange={(e) => setAppliedDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

          {/* Job URL */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Job / Listing URL
            </label>
            <div className="relative">
              <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                id="modal-url"
                type="url"
                placeholder="https://company.com/careers/role"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

          {/* Skills & Tags */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Skills / Tags (comma separated)
            </label>
            <div className="relative">
              <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                id="modal-tags"
                type="text"
                placeholder="React, TypeScript, Next.js, GraphQL"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Notes & Application Context
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              <textarea
                id="modal-notes"
                rows={3}
                placeholder="Interviewer names, interview topics, questions to prepare, feedback..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition"
            >
              Cancel
            </button>
            <button
              id="modal-submit-btn"
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md shadow-indigo-600/30 transition"
            >
              {isEditing ? 'Save Changes' : 'Create Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
