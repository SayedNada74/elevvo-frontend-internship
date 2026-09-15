# 📌 Task 2: Enterprise Responsive Contact Form with Real-time Validation
> **Elevvo Frontend Web Development Internship — Wave 15 B1**  
> Level 1 • HTML Forms, Validation & Responsive UX

---

## 📖 Overview & Purpose
A modern, accessible, two-column Contact Form component crafted with pure **HTML5, Vanilla CSS, and Modern JavaScript**.

Built in accordance with the **Enterprise Web Architecture & UI/UX Playbook**, featuring instant client-side RegEx validation, accessible ARIA live feedback, character limit tracking, async simulated submission with animated loading spinners, a custom success modal dialog, dual Deep Zinc/Slate themes, and full Arabic RTL support.

---

## ✨ Features & Engineering Highlights

- 📝 **Complete Form Schema**: Full Name, Email Address, Subject, Message, Submit Button, and Clear/Reset button.
- ⚡ **Real-Time Client-Side Validation (Bonus)**:
  - **Full Name**: Minimum 3 characters, validates against Unicode letters and spaces.
  - **Email Address**: RFC-compliant RegEx validation (`user@domain.com`).
  - **Subject**: Minimum 4 characters, required.
  - **Message**: Minimum 15 characters, live character counter indicator (`0 / 500`) with color warning states.
- 🎯 **Tactile Visual Feedback**:
  - Checkmark SVG icon and emerald border on valid inputs.
  - Exclamation alert icon, soft red background, and slide-down localized error message on invalid inputs.
- 🔄 **Async Mock API Submission**:
  - Animated button spinner with tactile `active:scale-95`.
  - Simulated 1.2-second network request.
- 💎 **React Portal Pattern Modal**:
  - Full-window backdrop-blur modal (`z-index: 99999`) displaying the submitted details summary with background scroll lock.
- 🎨 **Deep Zinc 950 Dual Themes**: Persistent dark and light mode toggle saved in `localStorage`.
- 🌐 **Bi-directional RTL / LTR i18n**: Seamlessly switches between Arabic and English with mirrored layouts and labels.
- ♿ **Accessibility (a11y)**:
  - Semantic `<form>` with associated `<label for="...">`.
  - `aria-required="true"`, `aria-invalid`, and `aria-describedby` pointing to error feedback elements.
  - Focus trapping and keyboard dismissals (`Escape` to close modal).

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Escape` | Close Success Modal |
| `T` | Toggle Dark / Light Theme |
| `L` | Toggle Language (English / Arabic) |

---

## 🛠️ Tech Stack

- **HTML5**: Semantic forms, accessibility attributes (`aria-live`, `aria-describedby`, `aria-invalid`), SVG icons.
- **CSS3**: Custom CSS Properties (Tokens), CSS Grid (Two-column layout), Flexbox, Glassmorphism (`backdrop-filter`), GPU-accelerated keyframe animations.
- **JavaScript (ES6+)**: Modular controller, RegExp validators, DOM event delegation, `localStorage` persistence, input masking & character counting.

---

## 🚀 How to Run Locally

1. Open `index.html` in any browser:
   ```bash
   # Or run a local HTTP server:
   npx serve .
   # or
   python -m http.server 4000
   ```
2. Navigate to `http://localhost:4000`.

---

## 📋 File Structure

```text
02-contact-form/
├── index.html      # Semantic HTML5 contact layout & modal structure
├── style.css       # Design tokens, two-column grid, validation states & animations
├── app.js          # Validation engine, async submission simulation & i18n
└── README.md       # Project documentation
```

---

## 🏆 Bonus Checklist

- [x] **Client-side JavaScript Validation**: RegEx validation on blur & input with instant visual cues.
- [x] **Mobile Responsiveness**: Two-column layout smoothly collapses into an ergonomic single column.
- [x] **Dark / Light Theme Toggle**: Persistent theme switcher with custom Zinc palette.
- [x] **Bi-directional RTL / LTR**: Seamless Arabic and English language support with label mirroring.
- [x] **Interactive Success Modal**: Modal dialog highlighting the submitted form data.
