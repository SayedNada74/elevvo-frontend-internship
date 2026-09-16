# 📌 Task 3: TaskFlow — Modern SaaS Landing Page for a Task Management App
> **Elevvo Frontend Web Development Internship — Wave 15 B1**  
> Level 2 • Modern Responsive Layouts, Animations & Component Architecture

---

## 📖 Overview & Purpose
A SaaS landing page built for **TaskFlow**, a task management platform designed to help teams and creators streamline their workflows and ship work faster.

Crafted with pure **HTML5, Vanilla CSS3, and Modern JavaScript** adhering to the **Enterprise Web Architecture & UI/UX Playbook**, featuring:
- A high-impact **Hero Section** with an interactive Kanban board mockup preview.
- **3 Core Feature Showcases** with standardized icon badges and benefit bullet points.
- **Testimonials Section** with 5-star ratings and customer social proof.
- **3-Tier Pricing Plans** (Free, Pro, Team) with an interactive **Monthly / Annual Billing Switcher** (20% discount).
- **Comprehensive Footer** with direct channels (GitHub, LinkedIn, Gmail, WhatsApp).
- ⭐ **Bonus Scroll Reveal Animations** powered by the high-performance `IntersectionObserver` API.
- ⭐ **Deep Zinc 950 Dark & Slate Light Themes** with local persistence.
- ⭐ **Bilingual RTL / LTR Architecture** with bidirectional mirroring for Arabic and English.

---

## ✨ Sections Breakdown

| Section | Description |
|---|---|
| **Sticky Glass Navbar** | Frosted glassmorphism navigation with brand logo, smooth scroll anchor links, theme/language toggles, and mobile drawer. |
| **Hero Section** | Bold typography with gradient clipping, live status pill, dual call-to-action buttons, key metrics strip, and an interactive Kanban dashboard preview. |
| **3 Core Features** | 1. Visual Drag & Drop Kanban<br>2. Real-Time Team Sync<br>3. Deep Productivity Analytics |
| **Testimonials Section** | 3 authentic user reviews with 5-star rating badges and user role credentials. |
| **3 Pricing Tiers** | Free Starter ($0), Pro Specialist ($19/mo or $15/yr), Team Enterprise ($49/mo or $39/yr) with dynamic discount calculation. |
| **Call-to-Action (CTA)** | High-conversion newsletter and free trial claim box with client-side email validation. |
| **Complete Footer** | Brand summary, product links, track links, copyright info, and direct contact buttons. |

---

## 🛠️ Tech Stack & Engineering Practices

- **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`, with strict ARIA roles.
- **CSS3 Design Tokens**: Deep Zinc 950 dark mode, Slate light mode, glassmorphism blur filters, Flexbox, multi-column CSS Grid layouts.
- **JavaScript (ES6+)**: Zero-dependency `IntersectionObserver` scroll reveal engine, dynamic billing state calculator, and bilingual i18n engine.
- **Accessibility (a11y)**: Fully responsive with `prefers-reduced-motion` compliance and keyboard navigation shortcuts (`T` for Theme, `L` for Language).

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `T` | Toggle Dark / Light Theme |
| `L` | Toggle Language (English / Arabic) |
| `Escape` | Close Mobile Navigation Menu |

---

## 🚀 How to Run Locally

1. Open `index.html` in your web browser:
   ```bash
   # Or run a local HTTP server:
   npx serve .
   # or
   python -m http.server 5000
   ```
2. Navigate to `http://localhost:5000`.

---

## 📋 File Structure

```text
03-taskflow-landing-page/
├── index.html      # Complete semantic landing page markup
├── style.css       # Tokens, grid layouts, glassmorphism & scroll animations
├── app.js          # Scroll reveal engine, billing switcher, i18n controller
└── README.md       # Project documentation
```

---

## 🏆 Bonus Checklist

- [x] **Scroll Reveal Animations**: Smooth GPU-accelerated fade-up entrance for each section on scroll.
- [x] **Interactive Billing Toggle**: Live price updates (Monthly vs. Annual 20% discount).
- [x] **Dark / Light Theme Engine**: Persistent theme state in `localStorage`.
- [x] **Full Arabic RTL Support**: Layout and typography mirror seamlessly for Arabic users.
- [x] **Mobile Responsiveness**: 100% responsive across phones, tablets, laptops, and 4K displays.
