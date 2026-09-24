import { JobApplication, ColumnConfig } from '../types/job';

export const INITIAL_COLUMNS: ColumnConfig[] = [
  {
    id: 'applied',
    title: 'Applied',
    colorKey: 'applied',
    badgeBg: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
    badgeText: 'text-cyan-600 dark:text-cyan-400',
    borderColor: 'border-t-cyan-500',
    accentHex: '#06b6d4'
  },
  {
    id: 'interviewing',
    title: 'Interviewing',
    colorKey: 'interviewing',
    badgeBg: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    badgeText: 'text-indigo-600 dark:text-indigo-400',
    borderColor: 'border-t-indigo-500',
    accentHex: '#6366f1'
  },
  {
    id: 'offer',
    title: 'Offer Received',
    colorKey: 'offer',
    badgeBg: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    badgeText: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-t-emerald-500',
    accentHex: '#10b981'
  },
  {
    id: 'rejected',
    title: 'Archived / Rejected',
    colorKey: 'rejected',
    badgeBg: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    badgeText: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-t-rose-500',
    accentHex: '#f43f5e'
  }
];

export const SEED_JOBS: JobApplication[] = [
  {
    id: 'job-1',
    company: 'Linear',
    role: 'Product Engineer (Web)',
    status: 'offer',
    locationType: 'remote',
    locationCity: 'San Francisco, CA (Remote)',
    salary: '$180,000 - $210,000 + 0.15% Equity',
    priority: 'high',
    appliedDate: '2026-08-10',
    url: 'https://linear.app/careers',
    notes: 'Outstanding interview experience. Final offer packet received with signing bonus and comprehensive health coverage.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Realtime Sync'],
    timeline: [
      { id: 't1-1', date: '2026-08-10', action: 'Applied', note: 'Submitted resume and portfolio via referral.' },
      { id: 't1-2', date: '2026-08-18', action: 'Moved to Interviewing', note: 'Screening call with Head of Engineering went great.' },
      { id: 't1-3', date: '2026-08-27', action: 'Technical Deep Dive', note: 'Pair programming on virtualized keyboard-driven lists.' },
      { id: 't1-4', date: '2026-09-08', action: 'Moved to Offer', note: 'Official formal offer presented by VP of Talent.' }
    ]
  },
  {
    id: 'job-2',
    company: 'Stripe',
    role: 'Staff Frontend Infrastructure Engineer',
    status: 'interviewing',
    locationType: 'hybrid',
    locationCity: 'Seattle, WA',
    salary: '$220,000 - $260,000',
    priority: 'high',
    appliedDate: '2026-08-22',
    url: 'https://stripe.com/jobs',
    notes: 'Designing micro-frontends and design tokens tooling. Completed coding round, architecture interview scheduled next week.',
    tags: ['Architecture', 'TypeScript', 'Web Workers', 'Performance'],
    timeline: [
      { id: 't2-1', date: '2026-08-22', action: 'Applied', note: 'Direct application through Stripe Career portal.' },
      { id: 't2-2', date: '2026-09-02', action: 'Recruiter Screen', note: 'Discussed salary range, current tech stack, and visa sponsorship.' },
      { id: 't2-3', date: '2026-09-12', action: 'Moved to Interviewing', note: 'Completed live coding round on distributed state synchronizer.' }
    ]
  },
  {
    id: 'job-3',
    company: 'Vercel',
    role: 'UI Platform Engineer',
    status: 'interviewing',
    locationType: 'remote',
    locationCity: 'Remote (Worldwide)',
    salary: '$190,000 - $230,000',
    priority: 'high',
    appliedDate: '2026-08-15',
    url: 'https://vercel.com/careers',
    notes: 'Working closely with Next.js Turbopack team on streaming dashboard components.',
    tags: ['Next.js', 'React Server Components', 'Rust', 'Edge'],
    timeline: [
      { id: 't3-1', date: '2026-08-15', action: 'Applied', note: 'Submitted via Vercel GitHub repo job board.' },
      { id: 't3-2', date: '2026-08-28', action: 'Moved to Interviewing', note: 'Technical screen with staff engineer on Turbopack integration.' },
      { id: 't3-3', date: '2026-09-10', action: 'System Design Interview', note: 'System design session on global edge rendering.' }
    ]
  },
  {
    id: 'job-4',
    company: 'Airbnb',
    role: 'Senior Design Systems Engineer',
    status: 'offer',
    locationType: 'hybrid',
    locationCity: 'San Francisco, CA',
    salary: '$195,000 - $225,000 + RSU',
    priority: 'high',
    appliedDate: '2026-08-05',
    url: 'https://careers.airbnb.com',
    notes: 'Offer letter in hand with flexible 401k match and remote stipend. Decision deadline is Friday.',
    tags: ['Design Systems', 'Figma API', 'Accessibility', 'Tailwind'],
    timeline: [
      { id: 't4-1', date: '2026-08-05', action: 'Applied', note: 'Applied through LinkedIn Easy Apply with custom cover letter.' },
      { id: 't4-2', date: '2026-08-16', action: 'Moved to Interviewing', note: 'Design systems portfolio review with Lead Designer.' },
      { id: 't4-3', date: '2026-08-29', action: 'Onsite Virtual Loop', note: '4 rounds including accessibility auditing & cross-team leadership.' },
      { id: 't4-4', date: '2026-09-14', action: 'Moved to Offer', note: 'Received formal written offer.' }
    ]
  },
  {
    id: 'job-5',
    company: 'Supabase',
    role: 'Frontend Cloud Console Engineer',
    status: 'applied',
    locationType: 'remote',
    locationCity: 'Remote (Americas/EMEA)',
    salary: '$150,000 - $185,000',
    priority: 'medium',
    appliedDate: '2026-09-01',
    url: 'https://supabase.com/careers',
    notes: 'Building dashboard features for database backups, AI embeddings visualizer, and Postgres logs.',
    tags: ['React', 'PostgreSQL', 'Tailwind', 'Go'],
    timeline: [
      { id: 't5-1', date: '2026-09-01', action: 'Applied', note: 'Application submitted with link to open-source contributions.' }
    ]
  },
  {
    id: 'job-6',
    company: 'GitHub',
    role: 'Senior Web Application Engineer',
    status: 'interviewing',
    locationType: 'remote',
    locationCity: 'Remote (US/Canada)',
    salary: '$175,000 - $205,000',
    priority: 'medium',
    appliedDate: '2026-08-25',
    url: 'https://github.com/about/careers',
    notes: 'Focus on GitHub Actions UI, live log viewer, and real-time step streaming.',
    tags: ['TypeScript', 'WebSocket', 'Primer CSS', 'React'],
    timeline: [
      { id: 't6-1', date: '2026-08-25', action: 'Applied', note: 'Submitted via Microsoft/GitHub internal referral portal.' },
      { id: 't6-2', date: '2026-09-06', action: 'Moved to Interviewing', note: 'Screening with Engineering Manager went exceptionally well.' }
    ]
  },
  {
    id: 'job-7',
    company: 'Netflix',
    role: 'UI Architect - Studio Workflows',
    status: 'applied',
    locationType: 'onsite',
    locationCity: 'Los Gatos, CA',
    salary: '$240,000 - $300,000 (All Cash)',
    priority: 'high',
    appliedDate: '2026-09-05',
    url: 'https://jobs.netflix.com',
    notes: 'High top-of-market compensation model. Waiting for recruiter review.',
    tags: ['Architecture', 'GraphQL', 'Micro-frontends', 'React'],
    timeline: [
      { id: 't7-1', date: '2026-09-05', action: 'Applied', note: 'Submitted application and architectural design writing samples.' }
    ]
  },
  {
    id: 'job-8',
    company: 'Datadog',
    role: 'Senior Frontend Engineer - Dashboards',
    status: 'applied',
    locationType: 'hybrid',
    locationCity: 'New York, NY',
    salary: '$165,000 - $195,000',
    priority: 'medium',
    appliedDate: '2026-09-08',
    url: 'https://www.datadoghq.com/careers',
    notes: 'High-scale chart rendering with Canvas and WebGL for time-series infrastructure metrics.',
    tags: ['Canvas', 'WebGL', 'TypeScript', 'Performance'],
    timeline: [
      { id: 't8-1', date: '2026-09-08', action: 'Applied', note: 'Applied directly via Datadog hiring website.' }
    ]
  },
  {
    id: 'job-9',
    company: 'Figma',
    role: 'Web Platform Engineer',
    status: 'rejected',
    locationType: 'hybrid',
    locationCity: 'San Francisco, CA',
    salary: '$185,000 - $220,000',
    priority: 'high',
    appliedDate: '2026-07-20',
    url: 'https://www.figma.com/careers',
    notes: 'Role was closed internally due to team re-organization. Encouraged to re-apply in Q1.',
    tags: ['WebAssembly', 'C++', 'WebGL', 'TypeScript'],
    timeline: [
      { id: 't9-1', date: '2026-07-20', action: 'Applied', note: 'Submitted resume and portfolio.' },
      { id: 't9-2', date: '2026-08-01', action: 'Interviewing', note: 'Completed technical screen on WebAssembly memory bounds.' },
      { id: 't9-3', date: '2026-08-20', action: 'Moved to Rejected', note: 'Headcount freeze on the Web Platform team for current fiscal year.' }
    ]
  },
  {
    id: 'job-10',
    company: 'Shopify',
    role: 'Senior React Developer - Merchant Checkout',
    status: 'rejected',
    locationType: 'remote',
    locationCity: 'Toronto, Canada (Remote)',
    salary: '$160,000 - $185,000 CAD',
    priority: 'low',
    appliedDate: '2026-07-15',
    url: 'https://www.shopify.com/careers',
    notes: 'Rejected after technical round due to requirement for Ruby on Rails backend expertise.',
    tags: ['React', 'GraphQL', 'Ruby', 'Shopify UI'],
    timeline: [
      { id: 't10-1', date: '2026-07-15', action: 'Applied', note: 'Applied online via career board.' },
      { id: 't10-2', date: '2026-07-29', action: 'Moved to Rejected', note: 'Looking for candidate with stronger full-stack Ruby background.' }
    ]
  }
];
