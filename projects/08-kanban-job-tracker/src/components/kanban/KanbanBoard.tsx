import React from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useJobs } from '../../context/JobContext';
import { JobStatus } from '../../types/job';
import { KanbanColumn } from './KanbanColumn';
import { SkeletonBoard } from '../ui/SkeletonBoard';

export const KanbanBoard: React.FC = () => {
  const {
    columns,
    filteredJobsByColumn,
    isLoading,
    moveJob,
    reorderJobInColumn
  } = useJobs();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Dropped outside any droppable list
    if (!destination) return;

    const sourceCol = source.droppableId as JobStatus;
    const destCol = destination.droppableId as JobStatus;

    // Dropped in the exact same spot
    if (sourceCol === destCol && source.index === destination.index) {
      return;
    }

    if (sourceCol === destCol) {
      // Reordering within the same column
      reorderJobInColumn(sourceCol, source.index, destination.index);
    } else {
      // Moving across columns
      moveJob(draggableId, destCol, destination.index);
    }
  };

  if (isLoading) {
    return <SkeletonBoard />;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-20 lg:pb-8">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            jobs={filteredJobsByColumn[column.id] || []}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
