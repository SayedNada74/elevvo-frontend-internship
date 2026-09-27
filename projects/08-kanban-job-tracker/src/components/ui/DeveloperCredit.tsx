import React, { useState, useEffect, useRef } from 'react';

export const DeveloperCredit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <aside
      ref={containerRef}
      aria-label="Developer Credits"
      className="fixed bottom-20 lg:bottom-6 right-6 z-[99999] font-sans antialiased"
    >
      {/* Popup Card */}
      <div
        className={`mb-3 w-64 rounded-2xl backdrop-blur-xl border p-4 shadow-2xl transition-all duration-200 origin-bottom-right
          bg-white/95 dark:bg-[#0f1117]/95
          border-slate-200 dark:border-white/10
          text-slate-900 dark:text-white
          ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.08]">
          <span className="text-[10px] font-bold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono uppercase">
            FOUNDER / DEVELOPER
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.08]"
            aria-label="Close developer credits"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="mt-3 space-y-1">
          <a
            href="https://github.com/SayedNada74"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors group
              hover:bg-indigo-50 dark:hover:bg-white/[0.08]"
          >
            <span className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">GitHub</span>
            <svg className="w-5 h-5 text-slate-600 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://sayed-nada-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors group
              hover:bg-indigo-50 dark:hover:bg-white/[0.08]"
          >
            <span className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">Portfolio</span>
            <svg className="w-5 h-5 text-slate-600 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/sayed-nada-6852b9345"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors group
              hover:bg-indigo-50 dark:hover:bg-white/[0.08]"
          >
            <span className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">LinkedIn</span>
            <svg className="w-5 h-5 text-slate-600 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Trigger Pill */}
      <button
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs shadow-xl active:scale-95 transition-all duration-200 backdrop-blur-md
          bg-white/95 dark:bg-[#0d1117]/95
          border border-indigo-300 dark:border-indigo-500/50
          hover:border-indigo-500 dark:hover:border-indigo-400
          hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/20"
        aria-label="Toggle Developer Credits"
      >
        <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">&lt;/&gt;</span>
        <span className="text-slate-500 dark:text-indigo-300/80 font-medium">Developed by</span>
        <span className="text-slate-900 dark:text-white font-bold tracking-wide">Sayed Nada</span>
      </button>
    </aside>
  );
};
