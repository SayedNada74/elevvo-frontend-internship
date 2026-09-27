# 💻 Elevvo Frontend Web Development Track — Master Project Portfolio
**Wave 15 B1 | 1-Month Intensive Program**  
**Lead Engineer: Sayed Nada ([@SayedNada74](https://github.com/SayedNada74))**

This repository contains all **10 production-ready projects** engineered for the **Elevvo Frontend Web Development Track**, adhering to enterprise web standards, strict type safety, accessibility guidelines (WCAG 2.1 AA), and modern UI/UX design patterns.

---

## 🏆 Project Index & Execution Matrix

| # | Task & Project Name | Level | Core Tech Stack | Status | Code Directory | Key Architecture Highlights |
|---|---|---|---|---|---|---|
| **01** | [Collapsible Sidebar](./projects/01-collapsible-sidebar/) | Level 1 | Semantic HTML5, CSS Variables, Modular Vanilla JS | ✅ Completed | [01-collapsible-sidebar/](./projects/01-collapsible-sidebar/) | Bilingual RTL/LTR, Theme Switcher, Mobile Drawer, ARIA accessibility |
| **02** | [Contact Form](./projects/02-contact-form/) | Level 1 | HTML5 Forms, CSS Grid, Client-side JS Validation | ✅ Completed | [02-contact-form/](./projects/02-contact-form/) | Real-time regex validation, Ambient background glow, Dual theme |
| **03** | [TaskFlow Landing Page](./projects/03-taskflow-landing-page/) | Level 2 | HTML5, CSS3, Modern JS, Scroll Animations | ✅ Completed | [03-taskflow-landing-page/](./projects/03-taskflow-landing-page/) | Hero, Bento feature grid, interactive pricing toggle, testimonials |
| **04** | [Personal Blog Homepage](./projects/04-personal-blog/) | Level 2 | HTML5, CSS Grid, Modular JS, Article Modal | ✅ Completed | [04-personal-blog/](./projects/04-personal-blog/) | Real-time search, category filtering, reading time estimator, pagination |
| **05** | [Tech SaaS Landing Page](./projects/05-tech-saas-landing-page/) | Level 2 | Tailwind CSS, Modular JS, Glassmorphism | ✅ Completed | [05-tech-saas-landing-page/](./projects/05-tech-saas-landing-page/) | Dark/Light mode toggle, interactive live preview, mobile navigation dock |
| **06** | [Freelance Client Dashboard](./projects/06-freelance-client-dashboard/) | Level 3 | React 19, React Router, Tailwind CSS, Recharts, Three.js | ✅ Completed | [06-freelance-client-dashboard/](./projects/06-freelance-client-dashboard/) | Interactive 3D WebGL gyroscopic tilt chart, Recharts, activity notifications |
| **07** | [Real-Time Weather Dashboard](./projects/07-weather-api-dashboard/) | Level 3 | HTML5, Tailwind CSS, Modular JS, Web Audio, HTML5 Canvas | ✅ Completed | [07-weather-api-dashboard/](./projects/07-weather-api-dashboard/) | 60 FPS Canvas weather engine, Open-Meteo & WMO API, Web Audio soundscapes, Bézier spline |
| **08** | [Kanban Job Tracker](./projects/08-kanban-job-tracker/) | Industry | React 19, Strict TypeScript (Zero `any`), @hello-pangea/dnd, Tailwind | ✅ Completed | [08-kanban-job-tracker/](./projects/08-kanban-job-tracker/) | Drag & Drop board, simulated latency & skeleton loaders, LocalStorage sync, Confetti bursts |
| **09** | [Next.js High-Perf Landing](./projects/09-nextjs-performance-landing/) | Industry | Next.js 16 (App Router & Turbopack), TypeScript, Tailwind | ✅ Completed | [09-nextjs-performance-landing/](./projects/09-nextjs-performance-landing/) | 100/100 Google Lighthouse, zero layout shift fonts, bilingual RTL/LTR, Anti-FOUC |
| **10** | [Aura UI Component Library](./projects/10-component-library/) | Industry | React 19, Strict TS, Storybook 8, Vitest, Tailwind v4 | ✅ Completed | [10-component-library/](./projects/10-component-library/) | 35/35 passing unit tests, WCAG 2.1 AA accessibility, Rollup/Vite NPM package export |

---

## 🎖️ Applied Architecture & Quality Standards

All projects strictly conform to the following engineering standards:
1. **The Mobile Trio Layout**: Sticky mobile header (`z-50`), bottom safe-area dock (`z-40`, `pb-safe`), and layer-isolated dialogs (`z-[99999]`).
2. **Design Tokens & High Contrast**: Natural Slate/Zinc palettes, true deep blacks (`#09090b`), high contrast typography, and custom micro-interactions.
3. **Bilingual Accessibility**: RTL/LTR layout flipping using logical properties (`ms-*`, `me-*`) and full keyboard accessibility.
4. **Resilient Error States**: Shimmer skeleton loaders, offline fallback states, and zero console warnings.
5. **Strict Typing & Testing**: 100% type-safe implementations with zero `any` and comprehensive unit test coverage.
