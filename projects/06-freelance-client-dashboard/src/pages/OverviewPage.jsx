import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  DollarSign, 
  Briefcase, 
  CreditCard, 
  Star, 
  Printer, 
  Box, 
  BarChart3,
  CheckCircle2,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import { KpiCard } from '../components/ui/KpiCard';
import { RevenueChart3D } from '../components/charts/RevenueChart3D';
import { RevenueChart2D } from '../components/charts/RevenueChart2D';
import { StatusDonutChart } from '../components/charts/StatusDonutChart';
import { REVENUE_DATA_6M, REVENUE_DATA_1Y } from '../data/mockData';

export const OverviewPage = () => {
  const { t, projects, invoices } = useDashboard();
  const [chartMode, setChartMode] = useState('3d'); // '3d' | '2d'
  const [timeframe, setTimeframe] = useState('6m'); // '6m' | '1y'

  const totalRevenue = projects.reduce((acc, p) => acc + p.budget, 0);
  const activeProjects = projects.filter((p) => p.status !== 'completed').length;
  const pendingInvoices = invoices.filter((i) => i.status !== 'Paid');
  const dueAmount = pendingInvoices.reduce((acc, i) => acc + i.amount, 0);

  const chartData = timeframe === '1y' ? REVENUE_DATA_1Y : REVENUE_DATA_6M;

  const activities = [
    {
      title: 'TaskFlow Landing Page Milestone Finalized',
      desc: 'Merged responsive pill navigation & scroll-spy throttling with 0 CLS.',
      time: '35m ago',
      icon: Rocket,
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: 'Invoice Settled ($4,250)',
      desc: 'ACH wire transfer confirmed by NextGen Financials for Mobile Wallet Milestone.',
      time: '2h ago',
      icon: DollarSign,
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'Design Review & Dark Tokens Approved',
      desc: 'CloudScale Inc. product architect approved Dark Mode design tokens.',
      time: '5h ago',
      icon: CheckCircle2,
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    },
    {
      title: 'Security & Integrity Verified',
      desc: 'Elevvo Web Development Track audit verified 0 syntax issues, CLS = 0.',
      time: '1d ago',
      icon: ShieldCheck,
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-2">
            {t('liveOperations')}
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            {t('executiveOverview')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {t('overviewSubtitle')}
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>{t('exportPdf')}</span>
        </button>
      </div>

      {/* 4 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        <KpiCard
          title={t('ytdGrossRevenue')}
          value={`$${totalRevenue.toLocaleString()}`}
          subtext={`+18.4% ${t('vsLastMonth')}`}
          icon={DollarSign}
          trend={true}
          variant="emerald"
        />
        <KpiCard
          title={t('activeProjects')}
          value={activeProjects}
          subtext={t('highPriorityDeadlines')}
          icon={Briefcase}
          variant="indigo"
        />
        <KpiCard
          title={t('invoicesDue')}
          value={`$${dueAmount.toLocaleString()}`}
          subtext={t('pendingPaymentClients')}
          icon={CreditCard}
          variant="amber"
        />
        <KpiCard
          title={t('clientRating')}
          value="4.96"
          subtext={t('fiveStarReviews')}
          icon={Star}
          variant="violet"
        />
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Chart (3D Three.js + 2D Recharts Switchable) */}
        <div className="lg:col-span-2 p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
          {/* Chart Header & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base font-bold text-white">{t('monthlyRevenueTrajectory')}</h3>
              <p className="text-xs text-slate-400">{t('billedContractsUsd')}</p>
            </div>

            <div className="flex items-center gap-2">
              {/* 3D / 2D Mode Switcher */}
              <div className="flex p-0.5 rounded-lg bg-[#10121b] border border-white/[0.08]">
                <button
                  onClick={() => setChartMode('3d')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                    chartMode === '3d'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="3D Three.js WebGL View"
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D WebGL</span>
                </button>
                <button
                  onClick={() => setChartMode('2d')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                    chartMode === '2d'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="2D Flat SVG View"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>2D Area</span>
                </button>
              </div>

              {/* Timeframe Toggle */}
              <div className="flex p-0.5 rounded-lg bg-[#10121b] border border-white/[0.08]">
                <button
                  onClick={() => setTimeframe('6m')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    timeframe === '6m' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  6M
                </button>
                <button
                  onClick={() => setTimeframe('1y')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    timeframe === '1y' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1Y
                </button>
              </div>
            </div>
          </div>

          {/* Chart Display Area */}
          <div className="relative">
            {chartMode === '3d' ? (
              <RevenueChart3D data={chartData} />
            ) : (
              <RevenueChart2D data={chartData} />
            )}

            {chartMode === '3d' && (
              <div className="mt-2 text-[11px] font-medium text-slate-400 px-2 py-1 rounded-full bg-white/[0.02] inline-block">
                {t('threeChartHint')}
              </div>
            )}
          </div>
        </div>

        {/* Projects by Stage Donut Chart */}
        <div className="p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
          <div className="mb-2">
            <h3 className="text-base font-bold text-white">{t('projectsByStage')}</h3>
            <p className="text-xs text-slate-400">{t('currentWorkflow')}</p>
          </div>
          <StatusDonutChart />
        </div>
      </div>

      {/* Recent Deliverables & Client Activity Feed */}
      <div className="p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
          <div>
            <h3 className="text-base font-bold text-white">{t('recentMilestones')}</h3>
            <p className="text-xs text-slate-400">{t('recentMilestonesSub')}</p>
          </div>
          <NavLink
            to="/projects"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
          >
            {t('viewAllProjects')}
          </NavLink>
        </div>

        <div className="space-y-3">
          {activities.map((act, index) => {
            const Icon = act.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className={`p-2 rounded-xl border flex-shrink-0 ${act.badgeColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white mb-0.5 truncate">{act.title}</div>
                  <div className="text-xs text-slate-400">{act.desc}</div>
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex-shrink-0">{act.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
