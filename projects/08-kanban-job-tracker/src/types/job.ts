export type JobStatus = 'applied' | 'interviewing' | 'offer' | 'rejected';

export type LocationType = 'remote' | 'hybrid' | 'onsite';

export type Priority = 'low' | 'medium' | 'high';

export interface TimelineEvent {
  id: string;
  date: string;
  action: string;
  note?: string;
}

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  locationType: LocationType;
  locationCity?: string;
  salary: string;
  priority: Priority;
  appliedDate: string;
  url?: string;
  notes?: string;
  tags: string[];
  timeline: TimelineEvent[];
}

export interface ColumnConfig {
  id: JobStatus;
  title: string;
  colorKey: JobStatus;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  accentHex: string;
}

export interface FilterState {
  search: string;
  locationType: LocationType | 'all';
  priority: Priority | 'all';
  tag: string | 'all';
}

export interface JobMetrics {
  total: number;
  applied: number;
  interviewing: number;
  offer: number;
  rejected: number;
  interviewRate: number; // % that reached interview or beyond
  offerRate: number; // % that reached offer
}
