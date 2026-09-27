# 💎 Aura UI — Enterprise Component Library & Design System
**Task 10 • Elevvo Frontend Web Development Track (Wave 15 B1)**

[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20(Zero%20any)-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Storybook 8](https://img.shields.io/badge/Storybook-8.6%20%2B%20a11y-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Vitest](https://img.shields.io/badge/Tests-31%2F31%20Passing-FCC72B?style=for-the-badge&logo=vitest&logoColor=black)](https://vitest.dev/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-00C7B7?style=for-the-badge&logo=accessibility&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 🌟 Overview & Architecture

**Aura UI** is a production-grade, accessible, and themeable React 19 component library engineered with strict TypeScript (`noImplicitAny`, zero `any`), automated testing via Vitest + React Testing Library, interactive documentation via Storybook 8 with the `@storybook/addon-a11y` accessibility audit engine, and dual-format local NPM packaging (ESM + UMD) with Rollup.

Built for the **Elevvo Frontend Web Development Track (Wave 15 B1)** as the capstone Component Library task.

---

## 🚀 Key Features & Highlights

1. **Production-Ready Components**:
   - `Button`: 6 visual variants (`primary`, `secondary`, `outline`, `ghost`, `danger`, `accent`), 3 sizes, loading spinners with `aria-busy`, disabled states, left/right icon slots, full-width options.
   - `Input`: Integrated floating label, helper text, real-time error states (`role="alert"`, `aria-invalid`), success indicator, left/right icons, `aria-describedby` links.
   - `Modal / Dialog`: Accessible dialog window mounted via React Portal with background blur, ESC key dismiss, backdrop click dismissal, focus trap management, body scroll locking, and compound subcomponents (`ModalHeader`, `ModalFooter`).
   - `Card`: Compound container with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`. Supports 4 variants (`elevated`, `outlined`, `glass`, `gradient`), hover lift and glow effects (`isHoverable`), and interactive button roles (`isClickable`).
   - `Badge & Tags`: Pulse status indicator dot, removable tag action with close button, 7 semantic variants (`default`, `primary`, `success`, `warning`, `danger`, `accent`, `outline`).
   - `Switch`: Accessible toggle control with `role="switch"`, `aria-checked`, keyboard Space/Enter interactions, and helper label descriptions.

2. **Design Tokens System**:
   - Centralized tokens in `src/tokens/`: HSL color palettes (Primary Indigo, Accent Cyan, Neutral Slate, Semantic Statuses), Typography hierarchy, Spacing scale, and Elevation/Glow shadows.

3. **Accessibility (a11y) First**:
   - Storybook `@storybook/addon-a11y` with `axe-core` compliance checks.
   - Keyboard navigable, full ARIA attributes (`aria-modal`, `aria-invalid`, `aria-describedby`, `aria-disabled`), focus-visible rings with contrast offset.

4. **100% Automated Test Coverage**:
   - **31 Unit Tests** passing across 6 test suites using Vitest and React Testing Library in a `jsdom` environment.

5. **Local NPM Package Export (Bonus Requirement)**:
   - Configured with Vite Library Mode (`vite.package.config.ts`) and Rollup.
   - Generates `dist/aura-ui.es.js` (ES Module for modern bundlers), `dist/aura-ui.umd.js` (Universal Module Definition), and `dist/index.d.ts` (complete TypeScript declarations via `vite-plugin-dts`).

---

## 📦 Installation & Usage

### Installing the Local Package
```bash
npm install @elevvo/aura-ui
```

### Quick Start in React / Next.js
```tsx
import React, { useState } from 'react';
import { Button, Input, Modal, Card, CardTitle, Badge, Switch } from '@elevvo/aura-ui';
import '@elevvo/aura-ui/style.css';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <Card variant="glass" isHoverable>
      <Badge variant="primary" withDot>Enterprise System</Badge>
      <CardTitle>Welcome to Aura UI</CardTitle>
      
      <Input label="Workspace Domain" placeholder="company.design" />

      <Switch
        checked={isEnabled}
        onChange={setIsEnabled}
        label="Automated Backups"
      />

      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Configure Settings
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="System Preferences">
        <p>Your cloud instances are healthy and synced.</p>
      </Modal>
    </Card>
  );
}
```

---

## 🛠️ Development Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches the interactive Component Showcase App & Playground on `http://localhost:5174` |
| `npm run test` | Runs the full Vitest automated test suite (31 tests, 6 suites) |
| `npm run test:watch` | Runs Vitest in interactive watch mode |
| `npm run storybook` | Starts Storybook 8 with interactive docs and `@storybook/addon-a11y` |
| `npm run build-storybook` | Compiles Storybook into a static production documentation site |
| `npm run build:lib` | Builds the NPM distribution package (`dist/` with `.es.js`, `.umd.js`, and `.d.ts`) |
| `npm run build` | Compiles the Showcase web application |

---

## 🧪 Test Results Summary

```bash
 RUN  v5.0.2 D:/Elevvo Internship Frontend Web Development Track/projects/10-component-library

 ✓ src/components/Card/Card.test.tsx (4 tests)
 ✓ src/components/Switch/Switch.test.tsx (4 tests)
 ✓ src/components/Button/Button.test.tsx (7 tests)
 ✓ src/components/Badge/Badge.test.tsx (3 tests)
 ✓ src/components/Modal/Modal.test.tsx (6 tests)
 ✓ src/components/Input/Input.test.tsx (7 tests)

 Test Files  6 passed (6)
      Tests  31 passed (31)
```

---

## 📐 Project Directory Structure

```
10-component-library/
├── .storybook/
│   ├── main.ts              # Storybook 8 configuration (Vite, a11y, essentials)
│   └── preview.ts           # Global decorators, dark theme default, a11y config
├── dist/                    # Compiled NPM package (ESM, UMD, and .d.ts)
├── src/
│   ├── components/
│   │   ├── Button/          # Button.tsx, Button.test.tsx, Button.stories.tsx
│   │   ├── Input/           # Input.tsx, Input.test.tsx, Input.stories.tsx
│   │   ├── Modal/           # Modal.tsx, Modal.test.tsx, Modal.stories.tsx
│   │   ├── Card/            # Card.tsx, Card.test.tsx, Card.stories.tsx
│   │   ├── Badge/           # Badge.tsx, Badge.test.tsx, Badge.stories.tsx
│   │   └── Switch/          # Switch.tsx, Switch.test.tsx, Switch.stories.tsx
│   ├── tokens/              # colors.ts, typography.ts, spacing.ts, shadows.ts
│   ├── utils/               # cn.ts (tailwind-merge + clsx)
│   ├── test/                # setup.ts (jest-dom matchers)
│   ├── App.tsx              # Interactive Showcase App with live Prop Controls & Code Gen
│   ├── index.ts             # Main NPM package entry point
│   ├── index.css            # Tailwind v4 stylesheet & theme tokens
│   └── main.tsx
├── vite.config.ts           # App Vite configuration
├── vite.package.config.ts   # NPM Package Library Mode build config (Rollup + DTS)
├── vitest.config.ts         # Vitest testing configuration
└── package.json             # NPM package manifest with exports & types
```

---

## 👨‍💻 Author & Submission

- **Intern**: Sayed Mahmoud
- **Track**: Elevvo Frontend Web Development Track (Wave 15 B1)
- **Task**: Task 10 — Component Library & Design System (Industry-Level Engineering)
