import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import {
  MapPin,
  DollarSign,
  Calendar,
  ExternalLink,
  Edit2,
  Trash2,
  GripVertical
} from 'lucide-react';
import { JobApplication } from '../../types/job';
import { useJobs } from '../../context/JobContext';

interface JobCardProps {
  job: JobApplication;
  index: number;
}

// Generate consistent avatar background based on company name
const getCompanyAvatarColor = (name: string) => {
  const colors = [
    'from-blue-600 to-indigo-600 text-white',
    'from-emerald-500 to-teal-600 text-white',
    'from-purple-600 to-pink-600 text-white',
    'from-amber-500 to-orange-600 text-white',
    'from-cyan-500 to-blue-600 text-white',
    'from-rose-500 to-red-600 text-white'
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

export const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const { setSelectedJob, setEditingJob, deleteJob } = useJobs();

  const priorityColors = {
    high: 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900/60',
    medium: 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/60',
    low: 'bg-slate-500/15 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800'
  };

  const locationColors = {
    remote: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60',
    hybrid: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/60',
    onsite: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/60'
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Delete application for ${job.role} at ${job.company}?`)) {
      deleteJob(job.id);
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingJob(job);
  };

  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`glass-card rounded-xl p-4 cursor-pointer select-none group relative border border-slate-200 dark:border-slate-800/90 transition-all ${
            snapshot.isDragging ? 'dragging-card' : ''
          }`}
          onClick={() => setSelectedJob(job)}
          data-testid={`job-card-${job.id}`}
        >
          {/* Top Row: Avatar, Info, Actions */}
          <div className="flex items-start justify-between gap-2.5 mb-2.5">
            <div className="flex items-center gap-3 min-w-0">
              {/* Drag Handle */}
              <div
                {...provided.dragHandleProps}
                className="text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 cursor-grab active:cursor-grabbing p-0.5 rounded touch-none shrink-0"
                title="Drag card"
              >
                <GripVertical className="w-4 h-4" />
              </div>

              {/* Company Avatar Monogram */}
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${getCompanyAvatarColor(
                  job.company
                )} flex items-center justify-center font-bold text-sm shadow-sm shrink-0`}
              >
                {job.company.substring(0, 2).toUpperCase()}
              </div>

              {/* Title & Company */}
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {job.role}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 truncate">
                    {job.company}
                  </span>
                  {job.url && (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-indigo-500 transition-colors shrink-0"
                      title="Visit careers link"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions (Show on hover / focus) */}
            <div className="flex items-center gap-1 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleEdit}
                className="p-1 rounded-md text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Edit Application"
                aria-label="Edit Application"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-1 rounded-md text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Delete Application"
                aria-label="Delete Application"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Details Row: Salary & Location */}
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            {job.salary && (
              <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                <DollarSign className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>{job.salary}</span>
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border capitalize ${
                locationColors[job.locationType]
              }`}
            >
              <MapPin className="w-2.5 h-2.5" />
              {job.locationType}
            </span>
            <span
              className={`inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                priorityColors[job.priority]
              }`}
            >
              {job.priority}
            </span>
          </div>

          {/* Tags */}
          {job.tags && job.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {job.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
              {job.tags.length > 3 && (
                <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  +{job.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Footer: Date Applied and Timeline events count */}
          <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {job.appliedDate}
            </span>
            <span>
              {job.timeline?.length || 1} update{job.timeline?.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};
