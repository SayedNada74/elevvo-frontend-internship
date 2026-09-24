import React, { useState, useEffect } from 'react';
import {
  X,
  Building,
  DollarSign,
  MapPin,
  Calendar,
  ExternalLink,
  Edit2,
  Trash2,
  Clock,
  PlusCircle,
  Tag
} from 'lucide-react';
import { useJobs } from '../../context/JobContext';
import { JobStatus } from '../../types/job';

export const JobDetailModal: React.FC = () => {
  const { selectedJob, setSelectedJob, setEditingJob, deleteJob, editJob } = useJobs();
  const [newTimelineNote, setNewTimelineNote] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedJob(null);
      }
    };
    if (selectedJob) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedJob, setSelectedJob]);

  if (!selectedJob) return null;

  const stageBadgeStyle: Record<JobStatus, string> = {
    applied: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
    interviewing: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    offer: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    rejected: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-300 dark:border-rose-800'
  };

  const handleAddTimelineNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTimelineNote.trim()) return;

    const today = new Date().toISOString().split('T')[0];
    const updatedTimeline = [
      ...(selectedJob.timeline || []),
      {
        id: `tl-${Date.now()}`,
        date: today,
        action: 'Note Logged',
        note: newTimelineNote.trim()
      }
    ];

    editJob(selectedJob.id, { timeline: updatedTimeline });
    setNewTimelineNote('');
  };

  const handleDelete = () => {
    if (window.confirm(`Delete application for ${selectedJob.role} at ${selectedJob.company}?`)) {
      deleteJob(selectedJob.id);
      setSelectedJob(null);
    }
  };

  const handleEdit = () => {
    const jobToEdit = { ...selectedJob };
    setSelectedJob(null);
    setEditingJob(jobToEdit);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-fade-in">
      <div
        className="glass-panel w-full max-w-2xl rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-md">
              {selectedJob.company.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedJob.role}
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  {selectedJob.company}
                </span>
                {selectedJob.url && (
                  <a
                    href={selectedJob.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Job Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border capitalize ${
                stageBadgeStyle[selectedJob.status]
              }`}
            >
              {selectedJob.status === 'offer' ? 'Offer Received' : selectedJob.status}
            </span>
            <button
              onClick={() => setSelectedJob(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 py-4 space-y-5 pr-1 text-sm">
          {/* Properties Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Compensation
              </span>
              <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">{selectedJob.salary || 'Undisclosed'}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Workplace
              </span>
              <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm capitalize">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="truncate">{selectedJob.locationType}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Priority
              </span>
              <div className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm capitalize">
                {selectedJob.priority}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Applied Date
              </span>
              <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{selectedJob.appliedDate}</span>
              </div>
            </div>
          </div>

          {/* Location city if present */}
          {selectedJob.locationCity && (
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Location: {selectedJob.locationCity}</span>
            </div>
          )}

          {/* Tags */}
          {selectedJob.tags && selectedJob.tags.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" /> Skills & Tags
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedJob.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {selectedJob.notes && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Application Notes
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                {selectedJob.notes}
              </p>
            </div>
          )}

          {/* Interactive Timeline */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" /> Application Timeline History
            </h4>

            <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
              {selectedJob.timeline?.map((event) => (
                <div key={event.id} className="relative">
                  <span className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                        {event.action}
                      </span>
                      <span className="text-[11px] text-slate-400">{event.date}</span>
                    </div>
                    {event.note && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        {event.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Log Note Form */}
            <form onSubmit={handleAddTimelineNote} className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Log interview note or stage event..."
                value={newTimelineNote}
                onChange={(e) => setNewTimelineNote(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1 transition"
              >
                <PlusCircle className="w-3.5 h-3.5" /> Log
              </button>
            </form>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-xs font-semibold transition"
          >
            <Trash2 className="w-4 h-4" /> Delete Application
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEdit}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition"
            >
              <Edit2 className="w-3.5 h-3.5" /> Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
