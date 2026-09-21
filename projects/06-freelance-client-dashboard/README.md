# ApexFreelance — Multi-Page Freelance Client Dashboard (React Edition)

An enterprise-grade, high-performance freelance operations dashboard engineered with **ReactJS, React Router, Tailwind CSS, Recharts, and Three.js** by **Sayed Nada** for the **Elevvo Internship Frontend Web Development Track (Level 3 - Task 6)**.

---

## 🛠️ Tools & Libraries Used

- **Framework**: React 19 + Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS + Custom Glassmorphism Utilities
- **2D Data Visualization**: Recharts (AreaChart, Pie/Donut Chart)
- **3D WebGL Visualization**: Three.js (Interactive 3D Cylinder Mesh Chart with Gyroscopic Tilt & Raycasting)
- **Icons**: Lucide React + Inline SVGs

---

## 📚 Covered Topics

1. **React**: Functional components, React Hooks (`useState`, `useEffect`, `useRef`, `useContext`), custom state management, and lifecycle controls.
2. **React Router**: Multi-page routing (`/overview`, `/projects`, `/clients`, `/settings`) with `<Routes>`, `<Route>`, `<NavLink>`, active pill indicators, and clean nested outlets.
3. **Multi-Page Layout**: Persistent Glass Capsule Sidebar, Top Sticky Header, fluid responsive container, global modals, and toast alerts.
4. **Reusable Components**: `KpiCard`, `RevenueChart3D`, `RevenueChart2D`, `StatusDonutChart`, `NotificationDropdown`, `NewProjectModal`, `InvoiceModal`, `SocialDock`, `CustomCursor`, `Toast`.
5. **Charts**:
   - **Interactive 3D Three.js WebGL Chart**: 3D cylinder bars, neon caps, tech grid floor, mouse-following dynamic point light, gyroscopic tilt, and raycasting tooltips.
   - **Recharts Area & Donut Charts**: Responsive SVG charts with custom tooltips, gradients, and operational stage breakdowns.
6. **Responsive Design**: Mobile drawer menu, fluid grids, and adaptive layouts for mobile, tablet, and desktop viewports.
7. **Conditional Rendering**: View mode switcher (Table vs Kanban), 3D vs 2D chart toggles, timeframe switcher (6M vs 1Y), invoice status filtering, and modal dialogs.
8. **🎁 Bonus Feature Implemented**:
   - Notification dropdown in the top header displaying the **3 most recent user activities** using structured mock data, with live unread badge, category indicators, and mark-as-read action.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

---

## 📁 Project Structure

```text
projects/06-freelance-client-dashboard/
├── index.html                    # Root HTML with Google Fonts & dark class
├── package.json                  # React 19, React Router, Tailwind, Recharts, Three.js
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind theme tokens
├── postcss.config.js             # PostCSS with tailwindcss and autoprefixer
├── src/
│   ├── main.jsx                  # React DOM root with BrowserRouter & Routes
│   ├── App.jsx                   # Layout shell (Sidebar + Header + Outlet + Toast)
│   ├── index.css                 # Tailwind directives + glassmorphic styles
│   ├── data/
│   │   ├── mockData.js           # Initial projects, clients, invoices, notifications, profile
│   │   └── i18n.js               # English / Arabic localization
│   ├── context/
│   │   └── DashboardContext.jsx  # Centralized state (Projects CRUD, LocalStorage sync, Theme, Lang)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx       # Fixed glass capsule sidebar with NavLinks & user card
│   │   │   ├── Header.jsx        # Mobile menu, search, + New Project button, Theme & Lang toggles
│   │   │   ├── NotificationDropdown.jsx # [BONUS] Top header dropdown with 3 recent activities
│   │   │   ├── SocialDock.jsx    # Floating verified social channels for Sayed Nada
│   │   │   └── CustomCursor.jsx  # 120 FPS GPU magnetic cursor
│   │   ├── charts/
│   │   │   ├── RevenueChart3D.jsx # Three.js 3D WebGL interactive cylinder mesh chart
│   │   │   ├── RevenueChart2D.jsx # Recharts AreaChart
│   │   │   └── StatusDonutChart.jsx # Recharts Pie/Donut chart
│   │   ├── modals/
│   │   │   ├── NewProjectModal.jsx # Add new project modal dialog
│   │   │   └── InvoiceModal.jsx    # Printable invoice breakdown dialog
│   │   └── ui/
│   │       ├── KpiCard.jsx       # Reusable KPI metric card
│   │       └── Toast.jsx         # Toast alert feedback
│   └── pages/
│       ├── OverviewPage.jsx      # /overview — KPIs, 3D/2D Charts, Activity feed
│       ├── ProjectsPage.jsx      # /projects — Table vs Kanban, Filter tabs, Project CRUD
│       ├── ClientsPage.jsx       # /clients — Client accounts & Invoices ledger table
│       └── SettingsPage.jsx      # /settings — Developer profile (male photo), skills, preferences
```

---

## 👤 Author & Verified Channels

- **Developer**: [Sayed Nada](https://github.com/SayedNada74)
- **GitHub**: [github.com/SayedNada74](https://github.com/SayedNada74)
- **LinkedIn**: [linkedin.com/in/sayed-nada-6852b9345](https://linkedin.com/in/sayed-nada-6852b9345)
- **WhatsApp**: [+201206620678](https://wa.me/201206620678)
- **Gmail**: [sayedmahmouda00@gmail.com](mailto:sayedmahmouda00@gmail.com)
