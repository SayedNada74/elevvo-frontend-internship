'use client';

import React from 'react';
import { Sparkles, DollarSign, Globe, Sun, Moon, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const MobileTaskbar: React.FC = () => {
  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      id="mobile-taskbar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-panel border-t border-slate-200/80 dark:border-slate-800/80 px-4 py-2 pb-safe shadow-xl"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Features anchor */}
        <a
          href="#features"
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition"
          aria-label={t.nav.features}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-medium">{t.nav.features}</span>
        </a>

        {/* Pricing anchor */}
        <a
          href="#pricing"
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition"
          aria-label={t.nav.pricing}
        >
          <DollarSign className="w-4 h-4" />
          <span className="text-[10px] font-medium">{t.nav.pricing}</span>
        </a>

        {/* Primary Central Action */}
        <a
          href="#pricing"
          className="w-11 h-11 -mt-5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/35 active:scale-95 transition-transform"
          aria-label={t.nav.getStarted}
        >
          <Zap className="w-5 h-5 fill-white stroke-none" />
        </a>

        {/* Language switch */}
        <button
          onClick={toggleLanguage}
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition"
          aria-label={t.nav.toggleLang}
        >
          <Globe className="w-4 h-4 text-indigo-500" />
          <span className="text-[10px] font-medium">{t.nav.toggleLang}</span>
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-0.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition"
          aria-label={t.nav.toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
          <span className="text-[10px] font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  );
};
