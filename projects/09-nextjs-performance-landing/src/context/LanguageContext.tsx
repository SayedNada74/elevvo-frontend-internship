'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, TranslationDictionary, translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  dir: 'ltr' | 'rtl';
  t: TranslationDictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexusflow_lang') as Language | null;
      if (stored === 'en' || stored === 'ar') {
        setLanguageState(stored);
        document.documentElement.lang = stored;
        document.documentElement.dir = stored === 'ar' ? 'rtl' : 'ltr';
      } else {
        // Default to Arabic or English based on browser
        const isArabic = navigator.language.startsWith('ar');
        const defaultLang = isArabic ? 'ar' : 'en';
        setLanguageState(defaultLang);
        document.documentElement.lang = defaultLang;
        document.documentElement.dir = defaultLang === 'ar' ? 'rtl' : 'ltr';
      }
    } catch {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  }, []);

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const next: Language = prev === 'en' ? 'ar' : 'en';
      document.documentElement.lang = next;
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      try {
        localStorage.setItem('nexusflow_lang', next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('nexusflow_lang', lang);
    } catch {
      // ignore
    }
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, dir, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
