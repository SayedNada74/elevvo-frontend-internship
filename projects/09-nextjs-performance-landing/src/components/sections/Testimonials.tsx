'use client';

import React from 'react';
import { Star, MessageSquareQuote, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const avatarGradients = [
    'from-indigo-600 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-purple-600 to-pink-500'
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between transition hover:-translate-y-1 relative"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${avatarGradients[idx]} flex items-center justify-center font-bold text-white text-sm shadow-md shrink-0`}
                >
                  {rev.author.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.role} • <span className="font-semibold text-indigo-500">{rev.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
