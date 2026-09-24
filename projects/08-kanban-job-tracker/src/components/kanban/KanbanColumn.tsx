import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { Plus, Inbox } from 'lucide-react';
import { ColumnConfig, JobApplication } from '../../types/job';
import { JobCard } from './JobCard';
import { useJobs } from '../../context/JobContext';

interface KanbanColumnProps {
  column: ColumnConfig;
  jobs: JobApplication[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, jobs }) => {
  const { setIsAddModalOpen } = useJobs();

  return (
    <div className="flex flex-col rounded-2xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 p-3 sm:p-4 min-h-[560px] shadow-sm backdrop-blur-sm">
      {/* Column Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          {/* Stage colored indicator */}
          <span
            className="w-2.5 h-2.5 rounded-full ring-2 ring-offset-1 ring-offset-transparent"
            style={{ backgroundColor: column.accentHex }}
          />
          <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
            {column.title}
          </h3>
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full border ${column.badgeBg}`}
          >
            {jobs.length}
          </span>
        </div>

        {/* Quick Add To Column Button */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
          title={`Add role in ${column.title}`}
          aria-label={`Add job to ${column.title}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Droppable Area */}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 flex flex-col gap-3 rounded-xl p-1 transition-colors min-h-[420px] ${
              snapshot.isDraggingOver ? 'drop-active-column' : ''
            }`}
          >
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
            {provided.placeholder}

            {/* Empty State */}
            {jobs.length === 0 && !snapshot.isDraggingOver && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-center">
                <Inbox className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-2" />
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  No applications here
                </p>
                <p className="text-[11px] text-slate-400/80 dark:text-slate-600 mt-0.5">
                  Drag a role or add one
                </p>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};
