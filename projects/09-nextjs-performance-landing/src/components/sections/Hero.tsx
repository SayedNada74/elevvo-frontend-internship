'use client';

import React from 'react';
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Zap, Activity, Globe, Server } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>{t.hero.badge}</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15] mb-6">
          <span>{t.hero.titlePart1} </span>
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
          <span> {t.hero.titlePart2}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            id="hero-cta-primary"
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base shadow-lg shadow-indigo-600/30 active:scale-98 transition transform hover:-translate-y-0.5"
          >
            <span>{t.hero.ctaPrimary}</span>
            {dir === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>

          <a
            id="hero-cta-secondary"
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 font-bold text-base shadow-sm transition"
          >
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-12">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{t.hero.trustText}</span>
        </div>

        {/* Live Interactive Edge Dashboard Preview Card */}
        <div className="relative max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-500/20 to-transparent shadow-2xl">
          <div className="rounded-[22px] bg-slate-900 border border-slate-800/90 p-4 sm:p-6 text-left overflow-hidden relative">
            {/* Top Window chrome */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  nexusflow-edge-runtime-v4.production
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">
                  {t.hero.livePreview.statusBadge}
                </span>
              </div>
            </div>

            {/* Dashboard Bento Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">{t.hero.livePreview.systemHealth}</span>
                  <Activity className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {t.hero.livePreview.latency}
                </div>
                <div className="w-full bg-slate-700/50 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[94%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">{t.hero.livePreview.chartTitle}</span>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {t.hero.livePreview.throughput}
                </div>
                <div className="w-full bg-slate-700/50 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[88%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Cold Start Overhead</span>
                  <Server className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {t.hero.livePreview.deployTime}
                </div>
                <div className="w-full bg-slate-700/50 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[99%]" />
                </div>
              </div>
            </div>

            {/* Simulated Live Traffic Visualizer */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{t.hero.livePreview.autoScale}</span>
                </div>
                <span className="text-indigo-400 font-mono">p99 = 6.2ms</span>
              </div>

              {/* Graphic Bars */}
              <div className="flex items-end gap-1.5 sm:gap-2 h-20 sm:h-24 pt-4">
                {[45, 62, 78, 54, 90, 82, 68, 95, 72, 88, 64, 80, 75, 98, 86, 70, 92, 84, 96, 78, 85].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-indigo-600 via-cyan-500 to-emerald-400 rounded-t-sm transition-all duration-500 hover:brightness-125"
                    style={{ height: `${val}%` }}
                    title={`Region Node #${idx + 1}: ${val}% load`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
