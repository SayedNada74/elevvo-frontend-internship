/**
 * Initial Mock Data for ApexFreelance Dashboard
 * Built for Sayed Nada | Elevvo Frontend Web Development Track
 */

export const INITIAL_PROJECTS = [
  {
    id: 'PRJ-101',
    name: 'TaskFlow SaaS Landing Page & Pill Nav',
    client: 'Elevvo Tech Solutions',
    category: 'Landing Page',
    budget: 4200,
    deadline: '2026-09-18',
    status: 'completed',
    progress: 100
  },
  {
    id: 'PRJ-102',
    name: 'Fintech Mobile Wallet & Card System',
    client: 'NextGen Financials',
    category: 'Web App',
    budget: 8500,
    deadline: '2026-09-28',
    status: 'in-progress',
    progress: 72
  },
  {
    id: 'PRJ-103',
    name: 'ByteCraft Chronicle Developer Blog',
    client: 'ByteCraft Media',
    category: 'Design System',
    budget: 3600,
    deadline: '2026-09-22',
    status: 'completed',
    progress: 100
  },
  {
    id: 'PRJ-104',
    name: 'Healthcare Telemedicine Consultation Portal',
    client: 'MedCare Global',
    category: 'Web App',
    budget: 9200,
    deadline: '2026-10-05',
    status: 'in-progress',
    progress: 45
  },
  {
    id: 'PRJ-105',
    name: 'Enterprise Cloud Architecture Dashboard',
    client: 'CloudScale Inc.',
    category: 'API Integration',
    budget: 7400,
    deadline: '2026-09-30',
    status: 'under-review',
    progress: 90
  },
  {
    id: 'PRJ-106',
    name: 'E-Commerce Ultra-Fast Checkout Flow',
    client: 'Apex Retailers',
    category: 'Web App',
    budget: 5100,
    deadline: '2026-10-12',
    status: 'in-progress',
    progress: 30
  },
  {
    id: 'PRJ-107',
    name: 'Web3 Analytics & Token Staking UI',
    client: 'BlockPulse Labs',
    category: 'Web App',
    budget: 6800,
    deadline: '2026-10-18',
    status: 'in-progress',
    progress: 15
  },
  {
    id: 'PRJ-108',
    name: 'AI Agent Prompt Engineering Console',
    client: 'Cognitive Automation',
    category: 'Design System',
    budget: 5900,
    deadline: '2026-09-25',
    status: 'under-review',
    progress: 85
  }
];

export const INITIAL_CLIENTS = [
  {
    id: 'CLI-01',
    name: 'Elevvo Tech Solutions',
    country: 'Cairo, Egypt',
    activeProjects: 1,
    totalSpent: 12400,
    email: 'contact@elevvo.tech',
    phone: '+201206620678',
    initials: 'ET'
  },
  {
    id: 'CLI-02',
    name: 'NextGen Financials',
    country: 'London, UK',
    activeProjects: 1,
    totalSpent: 18500,
    email: 'partners@nextgenfin.co.uk',
    phone: '+442079460912',
    initials: 'NF'
  },
  {
    id: 'CLI-03',
    name: 'MedCare Global',
    country: 'Dubai, UAE',
    activeProjects: 1,
    totalSpent: 9200,
    email: 'ops@medcareglobal.ae',
    phone: '+97142345678',
    initials: 'MG'
  },
  {
    id: 'CLI-04',
    name: 'CloudScale Inc.',
    country: 'San Francisco, USA',
    activeProjects: 1,
    totalSpent: 14800,
    email: 'devs@cloudscale.io',
    phone: '+14155550192',
    initials: 'CS'
  },
  {
    id: 'CLI-05',
    name: 'ByteCraft Media',
    country: 'Berlin, Germany',
    activeProjects: 1,
    totalSpent: 7200,
    email: 'editorial@bytecraft.de',
    phone: '+4930123456',
    initials: 'BM'
  },
  {
    id: 'CLI-06',
    name: 'Apex Retailers',
    country: 'Toronto, Canada',
    activeProjects: 1,
    totalSpent: 8600,
    email: 'procurement@apexretail.ca',
    phone: '+14165550144',
    initials: 'AR'
  }
];

export const INITIAL_INVOICES = [
  {
    id: 'INV-2026-081',
    client: 'Elevvo Tech Solutions',
    project: 'TaskFlow SaaS Landing Page',
    amount: 4200,
    issueDate: '2026-09-02',
    dueDate: '2026-09-16',
    status: 'Paid'
  },
  {
    id: 'INV-2026-082',
    client: 'NextGen Financials',
    project: 'Fintech Wallet Milestone 1',
    amount: 4250,
    issueDate: '2026-09-05',
    dueDate: '2026-09-19',
    status: 'Paid'
  },
  {
    id: 'INV-2026-083',
    client: 'CloudScale Inc.',
    project: 'Cloud Dashboard Milestone 2',
    amount: 3700,
    issueDate: '2026-09-08',
    dueDate: '2026-09-22',
    status: 'Pending'
  },
  {
    id: 'INV-2026-084',
    client: 'ByteCraft Media',
    project: 'Developer Blog Architecture',
    amount: 3600,
    issueDate: '2026-09-01',
    dueDate: '2026-09-15',
    status: 'Paid'
  },
  {
    id: 'INV-2026-085',
    client: 'Cognitive Automation',
    project: 'Prompt Console Milestone 1',
    amount: 2700,
    issueDate: '2026-08-25',
    dueDate: '2026-09-08',
    status: 'Overdue'
  },
  {
    id: 'INV-2026-086',
    client: 'MedCare Global',
    project: 'Telemedicine Initial Sprint',
    amount: 4600,
    issueDate: '2026-09-10',
    dueDate: '2026-09-24',
    status: 'Pending'
  }
];

export const REVENUE_DATA_6M = [
  { month: 'Apr', amount: 6200 },
  { month: 'May', amount: 7800 },
  { month: 'Jun', amount: 8900 },
  { month: 'Jul', amount: 7400 },
  { month: 'Aug', amount: 9600 },
  { month: 'Sep', amount: 12450 }
];

export const REVENUE_DATA_1Y = [
  { month: 'Oct', amount: 4800 },
  { month: 'Nov', amount: 5200 },
  { month: 'Dec', amount: 6100 },
  { month: 'Jan', amount: 5800 },
  { month: 'Feb', amount: 6400 },
  { month: 'Mar', amount: 7100 },
  { month: 'Apr', amount: 6200 },
  { month: 'May', amount: 7800 },
  { month: 'Jun', amount: 8900 },
  { month: 'Jul', amount: 7400 },
  { month: 'Aug', amount: 9600 },
  { month: 'Sep', amount: 12450 }
];

// Bonus requirement: 3 most recent user activities in header notifications dropdown
export const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Milestone Approved',
    msg: 'Elevvo Tech approved TaskFlow Landing Page final sign-off.',
    time: '15m ago',
    unread: true,
    type: 'success'
  },
  {
    id: 2,
    title: 'Payment Received',
    msg: '$4,250 wire from NextGen Financials has cleared.',
    time: '2h ago',
    unread: true,
    type: 'finance'
  },
  {
    id: 3,
    title: 'Deadline Approaching',
    msg: 'Healthcare Telemedicine Sprint 2 due in 5 days.',
    time: 'Yesterday',
    unread: true,
    type: 'alert'
  }
];

export const USER_PROFILE = {
  name: 'Sayed Nada',
  role: 'Lead Frontend Engineer & Architect',
  email: 'sayedmahmouda00@gmail.com',
  phone: '+201206620678',
  hourlyRate: 65,
  currency: 'USD',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  bio: 'Passionate Frontend Engineer specializing in high-performance web applications, modern responsive UI systems, modular React architecture, and frictionless user experiences.',
  skills: [
    'React & React Router',
    'Tailwind CSS & Modern CSS',
    'Recharts & Three.js WebGL',
    'Web Performance & Core Web Vitals',
    'Component Architecture',
    'TypeScript & Modular ES6+',
    'REST & Async APIs'
  ],
  socials: {
    github: 'https://github.com/SayedNada74',
    linkedin: 'https://linkedin.com/in/sayed-nada-6852b9345',
    whatsapp: 'https://wa.me/201206620678',
    email: 'mailto:sayedmahmouda00@gmail.com'
  }
};
