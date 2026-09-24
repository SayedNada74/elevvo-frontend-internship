# 💼 CareerFlow — Enterprise Kanban Job Application Tracker

An industry-grade, accessible, and high-performance job application tracking platform engineered with **React 19, Strict TypeScript (Zero `any`), @hello-pangea/dnd, Tailwind CSS, and Canvas Confetti** by **Sayed Nada** for the **Elevvo Frontend Web Development Track (Industry Level - Task 08)**.

---

## 📌 1. Project Overview & Requirements Mapping

This application is built in strict adherence to and exceeds the official requirements of **Elevvo Internship Task 8 (Module 8, 9, 10)**:
- **Interactive Kanban Board**: 4-column drag-and-drop workflow (`Applied`, `Interviewing`, `Offer`, `Rejected`) powered by `@hello-pangea/dnd` with natural physics, drop indicators, and keyboard accessibility.
- **Strict TypeScript Architecture**: 100% type-safe codebase with **Zero `any` usage**, strict compile options (`tsc -b`), and custom data contracts (`JobApplication`, `ColumnConfig`, `TimelineEvent`, `JobMetrics`).
- **State Management & Persistence**: Synchronized with browser `localStorage` and enriched with a custom **Network Latency Simulation Hook** (`useSimulatedNetwork`) to render realistic shimmer skeleton loaders.
- **Complete Job Lifecycle Management (CRUD)**: Create, view, edit, move, and delete job cards with timeline activity tracking, salary ranges, location types, priority badges, and tags.
- **Dynamic Analytics & Metrics Bar**: Instant computation of application volume, active interviews, conversion rate (`Interview Rate %`), and offer rate (`Offer Rate %`).
- **Interactive Celebrations**: Triggers GPU-accelerated confetti bursts via `canvas-confetti` whenever a card is moved to the **Offer** column.
- **Data Portability**: Full JSON export and import capabilities for backup, migration, and demo resets.
- **Mobile-First Responsive Trio**: Complies with the **Enterprise Web Architecture Playbook** featuring a sticky top header, mobile floating dock (`MobileTaskbar`) with `pb-safe`, and modal dialog portals.

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Core Framework** | React | `^19.2.8` | High-performance component-driven architecture |
| **Language** | TypeScript | `^5.8.2` | Strict enterprise typing with zero `any` |
| **Drag & Drop** | `@hello-pangea/dnd` | `^18.0.1` | Accessible, flicker-free drag and drop physics |
| **Styling** | Tailwind CSS | `^3.4.19` | Modern utility-first responsive design tokens |
| **Icons** | Lucide React | `^1.45.0` | Crisp, accessible SVG icons |
| **Effects** | Canvas Confetti | `^1.9.4` | Particle celebration engine for offers |
| **Build Tool** | Vite | `^8.3.0` | Ultra-fast HMR and optimized production bundling |
| **Linter** | Oxlint | `^1.81.0` | Next-generation high-speed static analysis |

---

## 🏗️ Architectural Architecture

```text
src/
├── types/
│   └── job.ts               # Core domain models (JobApplication, FilterState, Metrics)
├── context/
│   └── JobContext.tsx       # Global state with reducer, localStorage sync & mock seeding
├── hooks/
│   ├── useJobs.ts           # Context consumer hook with safety validation
│   └── useSimulatedNetwork.ts # Hook simulating real-world network latency & skeletons
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Glassmorphism header with stats, theme switch & export
│   │   ├── MetricsBar.tsx   # Visual conversion metric cards with progress bars
│   │   ├── FilterBar.tsx    # Multi-dimensional search, priority, tag & location filters
│   │   └── MobileTaskbar.tsx# Bottom docking bar for mobile screens with safe-area
│   ├── kanban/
│   │   ├── KanbanBoard.tsx  # DragDropContext container with horizontal auto-scroll
│   │   ├── KanbanColumn.tsx # Droppable column with counter badges & quick-add
│   │   └── JobCard.tsx      # Draggable card with priority tags, salary, and actions
│   ├── modals/
│   │   ├── JobModal.tsx     # Add / Edit application form with validation
│   │   ├── JobDetailModal.tsx # Full-screen detail view with timeline event history
│   │   └── ExportModal.tsx  # JSON export / import backup dialog
│   └── ui/
│       ├── CustomCursor.tsx # Magnetic smooth cursor with hover scaling
│       ├── ScrollProgress.tsx # Top gradient reading indicator
│       └── SkeletonCard.tsx # Animated shimmer skeleton placeholder
├── data/
│   └── initialJobs.ts       # Realistic mock dataset with top tech companies
├── App.tsx                  # Root layout orchestration
└── main.tsx                 # DOM mounting with JobProvider
```

---

## 🌟 Key Engineering Highlights

### 1. Strict Type Safety (`Zero any`)
All job objects, column states, and filtering predicates are strictly typed. The compiler runs with `tsc -b` and flags zero warnings:
```typescript
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
```

### 2. Network Latency & Shimmer Skeletons
Simulates production asynchronous behavior when switching filters or booting the app to test UI responsiveness and eliminate layout shifts:
```typescript
const { data: jobs, isLoading } = useSimulatedNetwork(filteredJobs, 350);
```

### 3. Dual Theme & High Contrast
Adheres to `PRODUCTION_STANDARDS_PLAYBOOK.md` by supporting:
- **Light Theme**: Soft `#f8fafc` background with crisp white elevated cards and Slate-900 typography.
- **Deep Dark Theme**: Immersive `#09090b` (Zinc-950) with glass borders and radiant accent glows.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+` or `v20+`
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Run Static Code Linting
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

---

## 👨‍💻 Author

**Sayed Nada**  
Frontend Engineer Intern @ Elevvo (Wave 15)  
- GitHub: [@SayedNada74](https://github.com/SayedNada74)
