# 📌 Task 1: Enterprise Collapsible Sidebar Component
> **Elevvo Frontend Web Development Internship — Wave 15 B1**  
> Level 1 • Fundamentals & Responsive Design

---

## 📖 Overview & Purpose
A responsive, highly accessible, enterprise-grade Collapsible Sidebar component built from scratch using pure **HTML5, Vanilla CSS, and Modern JavaScript**. 

Designed strictly following the **Enterprise Web Architecture & UI/UX Playbook**, featuring smooth cubic-bezier transitions, glassmorphism aesthetics, dual-theme tokens (Deep Zinc 950 / Slate Light), bi-directional RTL/LTR support for Arabic, and an off-canvas mobile drawer with backdrop blur.

---

## ✨ Features & Engineering Highlights

- 🔄 **Two Desktop States**: Full expanded view (`268px`) with labels, counters, and badges, and a mini collapsed view (`82px`).
- 📱 **Mobile Trio Architecture (Bonus 1)**: Automatically transforms into an off-canvas drawer (`z-index: 60`) on screens `< 768px` with a frosted blur backdrop overlay (`z-index: 55`).
- 🎨 **Deep Zinc 950 Dual Themes (Bonus 2)**: Sleek dark mode and clean light mode toggle with state persistence in `localStorage`.
- 🌐 **Bidirectional RTL / LTR i18n (Bonus 3)**: Instant live toggle between Arabic and English, automatically flipping text alignment, directional arrows, and margins.
- 💡 **Smart Floating Tooltips**: Tooltips with directional pointers pop out on hover when in mini-sidebar mode.
- 🏷️ **Icon Badge Standard**: Standardized icon badges (`h-9 w-9`) with active gradient highlights and hover elevation.
- ♿ **Accessibility & Keyboard Shortcuts**: Fully navigable via keyboard, `aria-expanded` attributes, and `prefers-reduced-motion` compliance.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `[` or `Ctrl + B` | Toggle Sidebar (Collapse / Expand on Desktop, Open / Close on Mobile) |
| `Escape` | Close Mobile Drawer |
| `T` | Toggle Dark / Light Theme |
| `L` | Toggle Language (English / Arabic) |
| `Ctrl + K` | Focus Quick Search Input |

---

## 🛠️ Tech Stack & Covered Topics

- **HTML5**: Semantic tags (`<aside>`, `<nav>`, `<header>`, `<main>`, `<article>`), ARIA accessibility roles.
- **CSS3**: Custom properties (Design Tokens), Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`), `cubic-bezier(0.4, 0, 0.2, 1)` GPU animations.
- **JavaScript (ES6+)**: Clean modular controller, DOM event delegation, `localStorage` state hydration, keyboard event listener.

---

## 🚀 How to Run Locally

1. Simply open `index.html` in any modern web browser:
   ```bash
   # Or run a local HTTP server:
   npx serve .
   # or
   python -m http.server 3000
   ```
2. Navigate to `http://localhost:3000`.

---

## 📋 File Structure

```text
01-collapsible-sidebar/
├── index.html      # Accessible HTML5 structure with sample dashboard
├── style.css       # Design tokens, glassmorphism, responsive queries & animations
├── app.js          # State management, keyboard shortcuts, i18n dictionary
└── README.md       # Project documentation
```

---

## 🏆 Bonus Checklist

- [x] **Mobile Responsiveness**: Off-canvas drawer with smooth slide and backdrop blur on screens `< 768px`.
- [x] **Dark / Light Theme Toggle**: Persistent theme switcher with custom Zinc palette.
- [x] **Bi-directional RTL / LTR**: Seamless Arabic and English language support.
- [x] **Accessibility (a11y)**: Focus management, ARIA states, and reduced motion query.
- [x] **Interactive Demo Showcase**: Complete sample dashboard demonstrating dynamic sidebar resizing.
