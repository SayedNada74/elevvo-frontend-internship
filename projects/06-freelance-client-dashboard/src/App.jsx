import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileTaskbar } from './components/layout/MobileTaskbar';
import { SocialDock } from './components/layout/SocialDock';
import { CustomCursor } from './components/layout/CustomCursor';
import { Toast } from './components/ui/Toast';
import { NewProjectModal } from './components/modals/NewProjectModal';
import { InvoiceModal } from './components/modals/InvoiceModal';

export const App = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#090a10] text-slate-900 dark:text-[#f8fafc] transition-colors duration-200">
      {/* 120 FPS Magnetic Cursor */}
      <CustomCursor />

      {/* Main Glass Sidebar */}
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        onCloseMobile={() => setIsMobileOpen(false)} 
      />

      {/* Main View Shell */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onOpenMobile={() => setIsMobileOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-24 lg:pb-8">
          <Outlet />
        </main>

        {/* Global Modals & Notifications */}
        <NewProjectModal />
        <InvoiceModal />
        <Toast />

        {/* Mobile Bottom Taskbar (Golden Playbook Section 3.1) */}
        <MobileTaskbar />

        {/* Floating Verified Social Dock */}
        <SocialDock />

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-slate-200 dark:border-white/[0.06] text-center text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto w-full mb-16 lg:mb-0">
          <div>
            &copy; 2026 ApexFreelance. Engineered with pride by <strong className="text-slate-900 dark:text-white">Sayed Nada</strong>.
          </div>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <span>Elevvo Internship Frontend Track</span>
            <span>·</span>
            <span>Task 06 (React & Tailwind Edition)</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
