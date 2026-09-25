'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CtaBanner: React.FC = () => {
  const { t, dir } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-500/30 shadow-2xl text-center overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
              {t.ctaBanner.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              {t.ctaBanner.title}
            </h2>

            <p className="text-base sm:text-lg text-indigo-200/90 leading-relaxed mb-8">
              {t.ctaBanner.description}
            </p>

            {/* Form */}
            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Thank you! Your enterprise sandbox access has been granted.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-6">
                <input
                  id="cta-email-input"
                  type="email"
                  required
                  placeholder={t.ctaBanner.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm backdrop-blur-sm"
                />
                <button
                  id="cta-submit-btn"
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 shrink-0 transition flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{t.ctaBanner.button}</span>
                  {dir === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}

            <p className="text-xs text-indigo-300/70 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.ctaBanner.securityNote}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
