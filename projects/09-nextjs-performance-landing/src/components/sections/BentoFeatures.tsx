'use client';

import React from 'react';
import { Globe, Cpu, RefreshCw, BarChart3, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const BentoFeatures: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.features.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Anycast (Span 2 cols) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {t.features.card1.tag}
              </span>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {t.features.card1.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-6">
              {t.features.card1.description}
            </p>

            {/* Interactive Visual Element */}
            <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 text-xs text-slate-300 font-mono space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                <span>Anycast Edge Resolution</span>
                <span className="text-emerald-400">Connected • 34 PoPs</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['US-East (Virginia)', 'EU-Central (Frankfurt)', 'AP-South (Tokyo)', 'ME-Central (Dubai)', 'SA-East (São Paulo)'].map((pop) => (
                  <span key={pop} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
                    🟢 {pop}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Zero Cold-Start WASM (Span 1 col) */}
          <div className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {t.features.card2.tag}
              </span>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t.features.card2.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {t.features.card2.description}
            </p>

            {/* Gauge visual */}
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-900/50 text-center">
              <div className="text-3xl font-black text-indigo-400 font-mono mb-1">0.38 ms</div>
              <p className="text-[11px] text-indigo-300 uppercase tracking-wider font-semibold">Average Execution Startup</p>
            </div>
          </div>

          {/* Card 3: Automated Failover & Healing (Span 1 col) */}
          <div className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {t.features.card3.tag}
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <RefreshCw className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t.features.card3.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {t.features.card3.description}
            </p>

            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-900/50 flex items-center justify-between text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                Mesh Self-Healing
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">Active</span>
            </div>
          </div>

          {/* Card 4: Continuous Real-Time Telemetry (Span 2 cols) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                {t.features.card4.tag}
              </span>
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <BarChart3 className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {t.features.card4.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-6">
              {t.features.card4.description}
            </p>

            <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span>Distributed Invocations Trace (p50 / p95 / p99)</span>
                <span className="text-purple-400 font-mono">0.00% packet loss</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <div className="text-[10px] text-slate-400 uppercase">p50 Latency</div>
                  <div className="text-base font-bold text-white font-mono">4.1 ms</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <div className="text-[10px] text-slate-400 uppercase">p95 Latency</div>
                  <div className="text-base font-bold text-white font-mono">7.8 ms</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <div className="text-[10px] text-slate-400 uppercase">p99 Latency</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">9.2 ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
