import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  JobApplication,
  JobStatus,
  ColumnConfig,
  FilterState,
  JobMetrics
} from '../types/job';
import { SEED_JOBS, INITIAL_COLUMNS } from '../data/seedJobs';

const STORAGE_KEY = 'careerflow_kanban_jobs_v1';

interface JobContextType {
  jobs: JobApplication[];
  isLoading: boolean;
  columns: ColumnConfig[];
  filters: FilterState;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  activeFilterCount: number;
  allTags: string[];
  filteredJobsByColumn: Record<JobStatus, JobApplication[]>;
  metrics: JobMetrics;
  selectedJob: JobApplication | null;
  setSelectedJob: (job: JobApplication | null) => void;
  editingJob: JobApplication | null;
  setEditingJob: (job: JobApplication | null) => void;
  isAddModalOpen: boolean;
  setIsAddModalOpen: (open: boolean) => void;
  isExportModalOpen: boolean;
  setIsExportModalOpen: (open: boolean) => void;
  addJob: (jobData: {
    company: string;
    role: string;
    status: JobStatus;
    locationType: JobApplication['locationType'];
    locationCity?: string;
    salary: string;
    priority: JobApplication['priority'];
    url?: string;
    notes?: string;
    tags: string[];
    appliedDate?: string;
  }) => void;
  editJob: (id: string, updates: Partial<JobApplication>) => void;
  deleteJob: (id: string) => void;
  moveJob: (jobId: string, destinationStatus: JobStatus, destinationIndex: number) => void;
  reorderJobInColumn: (status: JobStatus, sourceIndex: number, destinationIndex: number) => void;
  resetSeedData: () => void;
  importJobs: (importedJobs: JobApplication[]) => boolean;
}

const initialFilters: FilterState = {
  search: '',
  locationType: 'all',
  priority: 'all',
  tag: 'all'
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [columns] = useState<ColumnConfig[]>(INITIAL_COLUMNS);
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  // Modals state
  const [selectedJob, setSelectedJob] = useState<JobApplication | null>(null);
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Load jobs from localStorage or fallback to SEED_JOBS with realistic latency simulation (~350ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setJobs(parsed);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Failed to parse stored jobs, using default seed data:', err);
      }
      setJobs(SEED_JOBS);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_JOBS));
      } catch {
        // ignore
      }
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  // Sync jobs to localStorage whenever changed
  const persistJobs = useCallback((updatedJobs: JobApplication[]) => {
    setJobs(updatedJobs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
    } catch (e) {
      console.error('Failed to persist jobs to localStorage', e);
    }
  }, []);

  // Filter handlers
  const setFilter = useCallback(<K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search.trim()) count++;
    if (filters.locationType !== 'all') count++;
    if (filters.priority !== 'all') count++;
    if (filters.tag !== 'all') count++;
    return count;
  }, [filters]);

  // Unique tags across all jobs
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    jobs.forEach((j) => {
      j.tags?.forEach((t) => tagSet.add(t));
    });
    return Array.from(tagSet).sort();
  }, [jobs]);

  // Filtered jobs grouped by column
  const filteredJobsByColumn = useMemo(() => {
    const groups: Record<JobStatus, JobApplication[]> = {
      applied: [],
      interviewing: [],
      offer: [],
      rejected: []
    };

    const query = filters.search.toLowerCase().trim();

    jobs.forEach((job) => {
      // Search matching (company, role, notes, tags)
      if (query) {
        const matchCompany = job.company.toLowerCase().includes(query);
        const matchRole = job.role.toLowerCase().includes(query);
        const matchNotes = job.notes ? job.notes.toLowerCase().includes(query) : false;
        const matchTags = job.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchCompany && !matchRole && !matchNotes && !matchTags) {
          return;
        }
      }

      // Location filter
      if (filters.locationType !== 'all' && job.locationType !== filters.locationType) {
        return;
      }

      // Priority filter
      if (filters.priority !== 'all' && job.priority !== filters.priority) {
        return;
      }

      // Tag filter
      if (filters.tag !== 'all' && !job.tags.includes(filters.tag)) {
        return;
      }

      if (groups[job.status]) {
        groups[job.status].push(job);
      }
    });

    return groups;
  }, [jobs, filters]);

  // Live Metrics
  const metrics = useMemo<JobMetrics>(() => {
    const total = jobs.length;
    const applied = jobs.filter((j) => j.status === 'applied').length;
    const interviewing = jobs.filter((j) => j.status === 'interviewing').length;
    const offer = jobs.filter((j) => j.status === 'offer').length;
    const rejected = jobs.filter((j) => j.status === 'rejected').length;

    const interviewRate = total > 0 ? Math.round(((interviewing + offer) / total) * 100) : 0;
    const offerRate = total > 0 ? Math.round((offer / total) * 100) : 0;

    return {
      total,
      applied,
      interviewing,
      offer,
      rejected,
      interviewRate,
      offerRate
    };
  }, [jobs]);

  // Trigger celebration confetti when moving to Offer
  const triggerConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#10b981', '#06b6d4', '#6366f1', '#f59e0b', '#ec4899']
      });
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.7 }
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.7 }
        });
      }, 200);
    } catch (e) {
      console.log('Confetti failed to trigger', e);
    }
  }, []);

  // CRUD Operations
  const addJob = useCallback(
    (jobData: {
      company: string;
      role: string;
      status: JobStatus;
      locationType: JobApplication['locationType'];
      locationCity?: string;
      salary: string;
      priority: JobApplication['priority'];
      url?: string;
      notes?: string;
      tags: string[];
      appliedDate?: string;
    }) => {
      const today = new Date().toISOString().split('T')[0];
      const newJob: JobApplication = {
        id: `job-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        company: jobData.company.trim(),
        role: jobData.role.trim(),
        status: jobData.status,
        locationType: jobData.locationType,
        locationCity: jobData.locationCity?.trim() || undefined,
        salary: jobData.salary.trim() || 'Undisclosed',
        priority: jobData.priority,
        appliedDate: jobData.appliedDate || today,
        url: jobData.url?.trim() || undefined,
        notes: jobData.notes?.trim() || undefined,
        tags: jobData.tags,
        timeline: [
          {
            id: `tl-${Date.now()}`,
            date: today,
            action: 'Application Added',
            note: `Status set to ${jobData.status}`
          }
        ]
      };

      if (jobData.status === 'offer') {
        triggerConfetti();
      }

      persistJobs([newJob, ...jobs]);
    },
    [jobs, persistJobs, triggerConfetti]
  );

  const editJob = useCallback(
    (id: string, updates: Partial<JobApplication>) => {
      const updated = jobs.map((job) => {
        if (job.id === id) {
          const oldStatus = job.status;
          const statusChanged = updates.status && updates.status !== oldStatus;
          const today = new Date().toISOString().split('T')[0];

          let newTimeline = [...job.timeline];
          if (statusChanged) {
            newTimeline.push({
              id: `tl-${Date.now()}`,
              date: today,
              action: `Status Changed`,
              note: `Moved from ${oldStatus} to ${updates.status}`
            });
            if (updates.status === 'offer') {
              triggerConfetti();
            }
          } else {
            newTimeline.push({
              id: `tl-${Date.now()}`,
              date: today,
              action: `Application Details Updated`
            });
          }

          const merged: JobApplication = {
            ...job,
            ...updates,
            timeline: newTimeline
          };

          // Also update selectedJob if it's currently open
          if (selectedJob?.id === id) {
            setSelectedJob(merged);
          }

          return merged;
        }
        return job;
      });

      persistJobs(updated);
    },
    [jobs, persistJobs, selectedJob, triggerConfetti]
  );

  const deleteJob = useCallback(
    (id: string) => {
      const filtered = jobs.filter((j) => j.id !== id);
      persistJobs(filtered);
      if (selectedJob?.id === id) {
        setSelectedJob(null);
      }
      if (editingJob?.id === id) {
        setEditingJob(null);
      }
    },
    [jobs, persistJobs, selectedJob, editingJob]
  );

  const moveJob = useCallback(
    (jobId: string, destinationStatus: JobStatus, destinationIndex: number) => {
      const targetJob = jobs.find((j) => j.id === jobId);
      if (!targetJob) return;

      const oldStatus = targetJob.status;
      const statusChanged = oldStatus !== destinationStatus;
      const today = new Date().toISOString().split('T')[0];

      let updatedTimeline = [...targetJob.timeline];
      if (statusChanged) {
        updatedTimeline.push({
          id: `tl-${Date.now()}`,
          date: today,
          action: `Moved to ${destinationStatus.charAt(0).toUpperCase() + destinationStatus.slice(1)}`,
          note: `Transitioned from ${oldStatus} to ${destinationStatus}`
        });

        if (destinationStatus === 'offer') {
          triggerConfetti();
        }
      }

      const updatedTargetJob: JobApplication = {
        ...targetJob,
        status: destinationStatus,
        timeline: updatedTimeline
      };

      // Create new list without targetJob
      const remainingJobs = jobs.filter((j) => j.id !== jobId);

      // Reconstruct column order
      // Find jobs belonging to destinationStatus
      const destJobs = remainingJobs.filter((j) => j.status === destinationStatus);
      const otherJobs = remainingJobs.filter((j) => j.status !== destinationStatus);

      // Insert at destinationIndex
      destJobs.splice(destinationIndex, 0, updatedTargetJob);

      const finalJobs = [...destJobs, ...otherJobs];
      persistJobs(finalJobs);

      if (selectedJob?.id === jobId) {
        setSelectedJob(updatedTargetJob);
      }
    },
    [jobs, persistJobs, selectedJob, triggerConfetti]
  );

  const reorderJobInColumn = useCallback(
    (status: JobStatus, sourceIndex: number, destinationIndex: number) => {
      const colJobs = jobs.filter((j) => j.status === status);
      const otherJobs = jobs.filter((j) => j.status !== status);

      const [moved] = colJobs.splice(sourceIndex, 1);
      colJobs.splice(destinationIndex, 0, moved);

      persistJobs([...colJobs, ...otherJobs]);
    },
    [jobs, persistJobs]
  );

  const resetSeedData = useCallback(() => {
    persistJobs(SEED_JOBS);
  }, [persistJobs]);

  const importJobs = useCallback(
    (importedJobs: JobApplication[]): boolean => {
      if (!Array.isArray(importedJobs) || importedJobs.length === 0) {
        return false;
      }
      // Validate schema
      const isValid = importedJobs.every(
        (j) =>
          typeof j.id === 'string' &&
          typeof j.company === 'string' &&
          typeof j.role === 'string' &&
          ['applied', 'interviewing', 'offer', 'rejected'].includes(j.status)
      );

      if (!isValid) return false;

      persistJobs(importedJobs);
      return true;
    },
    [persistJobs]
  );

  return (
    <JobContext.Provider
      value={{
        jobs,
        isLoading,
        columns,
        filters,
        setFilter,
        resetFilters,
        activeFilterCount,
        allTags,
        filteredJobsByColumn,
        metrics,
        selectedJob,
        setSelectedJob,
        editingJob,
        setEditingJob,
        isAddModalOpen,
        setIsAddModalOpen,
        isExportModalOpen,
        setIsExportModalOpen,
        addJob,
        editJob,
        deleteJob,
        moveJob,
        reorderJobInColumn,
        resetSeedData,
        importJobs
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
