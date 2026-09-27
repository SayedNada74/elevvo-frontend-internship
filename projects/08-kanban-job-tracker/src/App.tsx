import React from 'react';
import { Header } from './components/layout/Header';
import { MetricsBar } from './components/layout/MetricsBar';
import { FilterBar } from './components/layout/FilterBar';
import { KanbanBoard } from './components/kanban/KanbanBoard';
import { JobModal } from './components/modals/JobModal';
import { JobDetailModal } from './components/modals/JobDetailModal';
import { ExportModal } from './components/modals/ExportModal';
import { MobileTaskbar } from './components/layout/MobileTaskbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { DeveloperCredit } from './components/ui/DeveloperCredit';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      {/* Dynamic Cursor & Scroll Progress & Developer Credit */}
      <CustomCursor />
      <ScrollProgress />
      <DeveloperCredit />

      {/* Header */}
      <Header />

      {/* Main Board Space */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Metrics Banner */}
        <MetricsBar />

        {/* Filters & Search Controls */}
        <FilterBar />

        {/* Drag and Drop Kanban Board */}
        <KanbanBoard />
      </main>

      {/* Modals */}
      <JobModal />
      <JobDetailModal />
      <ExportModal />

      {/* Mobile Bottom Taskbar */}
      <MobileTaskbar />

      {/* Footer */}
      <footer className="hidden lg:block border-t border-slate-200/80 dark:border-slate-800/80 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>
          CareerFlow Kanban Job Application Tracker • Elevvo Frontend Web Development Internship • Task 08
        </p>
      </footer>
    </div>
  );
};
