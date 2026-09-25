'use client';

import React from 'react';
import { Cpu, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-surface-dark pb-24 md:pb-12 pt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-500 to-emerald-500 p-[2px]">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                {t.nav.brand}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.meta.description}
            </p>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.product}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.nav.metrics}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#changelog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.changelog}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#docs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.docs}
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.roadmap}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.security}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.company}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.terms}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} NexusFlow, Inc. {t.footer.rights}</p>
          <p className="flex items-center gap-1.5 text-center">
            <span>{t.footer.builtFor}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
