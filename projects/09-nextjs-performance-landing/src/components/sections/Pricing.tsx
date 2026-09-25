'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Pricing: React.FC = () => {
  const { t, dir } = useLanguage();
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  const plans = [
    {
      name: t.pricing.starter.name,
      desc: t.pricing.starter.desc,
      features: t.pricing.starter.features,
      cta: t.pricing.starter.cta,
      popular: false,
      popularBadge: '',
      price: isAnnual ? t.pricing.starter.priceAnnual : t.pricing.starter.priceMonthly
    },
    {
      name: t.pricing.pro.name,
      desc: t.pricing.pro.desc,
      features: t.pricing.pro.features,
      cta: t.pricing.pro.cta,
      popular: true,
      popularBadge: t.pricing.pro.popularBadge,
      price: isAnnual ? t.pricing.pro.priceAnnual : t.pricing.pro.priceMonthly
    },
    {
      name: t.pricing.enterprise.name,
      desc: t.pricing.enterprise.desc,
      features: t.pricing.enterprise.features,
      cta: t.pricing.enterprise.cta,
      popular: false,
      popularBadge: '',
      price: isAnnual ? t.pricing.enterprise.priceAnnual : t.pricing.enterprise.priceMonthly
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.pricing.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {t.pricing.subtitle}
          </p>

          {/* Billing Switcher Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                !isAnnual
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                isAnnual
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{t.pricing.annual}</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {t.pricing.annualDiscount}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                p.popular
                  ? 'border-2 border-indigo-500 shadow-glow-brand ring-4 ring-indigo-500/10 lg:-translate-y-2'
                  : 'border border-slate-200 dark:border-slate-800'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  {p.popularBadge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 min-h-[36px]">
                  {p.desc}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    ${p.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.pricing.perMonth}
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2 ${
                  p.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                <span>{p.cta}</span>
                {dir === 'rtl' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
