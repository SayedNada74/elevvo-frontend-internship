'use client';

import React from 'react';
import { Cpu, Sun, Moon, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const { t, language, dir, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-500 to-emerald-500 p-[2px] shadow-glow-brand transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 dark:from-white dark:via-indigo-200 dark:to-slate-300 bg-clip-text text-transparent">
                {t.nav.brand}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                v4.0 Edge
              </span>
            </div>
          </div>
        </a>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {t.nav.features}
          </a>
          <a href="#metrics" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {t.nav.metrics}
          </a>
          <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {t.nav.pricing}
          </a>
          <a href="#testimonials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {t.nav.testimonials}
          </a>
          <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {t.nav.faq}
          </a>
        </nav>

        {/* Utility Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            id="lang-toggle"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label={t.nav.toggleLang}
            title={t.nav.toggleLang}
          >
            <Globe className="w-3.5 h-3.5 text-indigo-500" />
            <span>{t.nav.toggleLang}</span>
          </button>

          {/* Theme Switcher */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label={t.nav.toggleTheme}
            title={t.nav.toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Primary CTA */}
          <a
            id="nav-cta-btn"
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/25 active:scale-95 transition"
          >
            <span>{t.nav.getStarted}</span>
            {dir === 'rtl' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </a>
        </div>
      </div>
    </header>
  );
};
