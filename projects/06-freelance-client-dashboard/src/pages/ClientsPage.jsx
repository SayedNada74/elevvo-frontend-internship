import React, { useState } from 'react';
import { 
  Plus, 
  Mail, 
  MessageCircle, 
  Eye, 
  Filter, 
  Building2,
  DollarSign
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

export const ClientsPage = () => {
  const { 
    t, 
    clients, 
    invoices, 
    addInvoice, 
    setSelectedInvoice 
  } = useDashboard();

  const [invoiceFilter, setInvoiceFilter] = useState('all');

  const filteredInvoices = invoices.filter((inv) => {
    if (invoiceFilter === 'all') return true;
    return inv.status.toLowerCase() === invoiceFilter.toLowerCase();
  });

  const handleCreateMockInvoice = () => {
    addInvoice({
      client: 'NextGen Financials',
      project: 'Security Audit & Performance Optimization',
      amount: 3800
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Paid':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            ● {t('paid')}
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
            ● {t('pending')}
          </span>
        );
      case 'Overdue':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 border border-rose-500/20 text-rose-400">
            ● {t('overdue')}
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            {t('clients')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t('clientDirectorySub')}
          </p>
        </div>

        <button
          onClick={handleCreateMockInvoice}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>{t('createInvoice')}</span>
        </button>
      </div>

      {/* Client Accounts Directory */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-indigo-400" />
          <span>{t('clientDirectory')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((cli) => (
            <div
              key={cli.id}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-white/[0.16] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-extrabold text-base flex-shrink-0">
                  {cli.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white truncate">{cli.name}</div>
                  <div className="text-xs text-slate-400 truncate">📍 {cli.country}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">{t('activeProjects')}</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{cli.activeProjects}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Total Billed</div>
                  <div className="text-sm font-extrabold text-indigo-400 font-mono mt-0.5">
                    ${cli.totalSpent.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${cli.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://wa.me/201206620678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invoices Ledger Table */}
      <div className="p-5 lg:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>{t('invoicesLedger')}</span>
            </h2>
            <p className="text-xs text-slate-400">{t('invoicesLedgerSub')}</p>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={invoiceFilter}
              onChange={(e) => setInvoiceFilter(e.target.value)}
              className="bg-[#10121b] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="all">{t('allStatuses')}</option>
              <option value="paid">{t('paid')}</option>
              <option value="pending">{t('pending')}</option>
              <option value="overdue">{t('overdue')}</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-white/[0.01]">
                <th className="p-3.5">{t('invoiceId')}</th>
                <th className="p-3.5">{t('clientCompany')}</th>
                <th className="p-3.5">{t('issueDate')}</th>
                <th className="p-3.5">{t('dueDate')}</th>
                <th className="p-3.5">{t('amount')}</th>
                <th className="p-3.5">{t('status')}</th>
                <th className="p-3.5 text-center">{t('actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3.5 font-mono font-bold text-indigo-400">{inv.id}</td>
                  <td className="p-3.5 font-semibold text-white">{inv.client}</td>
                  <td className="p-3.5 font-mono text-slate-400">{inv.issueDate}</td>
                  <td className="p-3.5 font-mono text-slate-400">{inv.dueDate}</td>
                  <td className="p-3.5 font-mono font-bold text-white">${inv.amount.toLocaleString()}</td>
                  <td className="p-3.5">{getStatusBadge(inv.status)}</td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => setSelectedInvoice(inv)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] text-xs font-semibold active:scale-95 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{t('view')}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
