import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, FileText } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const InvoiceModal = () => {
  const { t, selectedInvoice, setSelectedInvoice } = useDashboard();
  const [mounted] = useState(() => typeof document !== 'undefined');

  // Background scroll lock per Playbook Section 3.2
  useEffect(() => {
    if (selectedInvoice) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selectedInvoice]);

  if (!mounted || !selectedInvoice) return null;

  const modalJSX = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={() => setSelectedInvoice(null)}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-lg bg-[#12141f] border border-white/[0.12] rounded-3xl shadow-2xl p-6 animate-modal-pop text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{t('invoiceDetails')}</h3>
              <span className="text-xs text-indigo-400 font-mono font-bold">#{selectedInvoice.id}</span>
            </div>
          </div>
          <button 
            onClick={() => setSelectedInvoice(null)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Invoice Body */}
        <div className="space-y-4 pt-4 text-xs sm:text-sm">
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div>
              <div className="text-[11px] text-slate-400">Client / Company:</div>
              <div className="font-bold text-white mt-0.5">{selectedInvoice.client}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Contractor:</div>
              <div className="font-bold text-white mt-0.5">Sayed Nada (Frontend Engineer)</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Issue Date:</div>
              <div className="font-mono text-slate-300 mt-0.5">{selectedInvoice.issueDate}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Due Date:</div>
              <div className="font-mono text-slate-300 mt-0.5">{selectedInvoice.dueDate}</div>
            </div>
          </div>

          <table className="w-full text-left rtl:text-right border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-2">Deliverable</th>
                <th className="pb-2 text-right rtl:text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              <tr>
                <td className="py-3">
                  <div className="font-semibold text-white">{selectedInvoice.project || 'Frontend Engineering Sprint'}</div>
                  <div className="text-[11px] text-slate-400">Milestone acceptance and verified deployment</div>
                </td>
                <td className="py-3 text-right rtl:text-left font-mono font-bold text-white">
                  ${selectedInvoice.amount?.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/20">
            <span className="font-semibold text-slate-300">Total Due:</span>
            <span className="text-base font-extrabold text-indigo-400 font-mono">
              ${selectedInvoice.amount?.toLocaleString()} USD
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-5 mt-4 border-t border-white/[0.08]">
          <button
            onClick={() => setSelectedInvoice(null)}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
          >
            {t('close')}
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 active:scale-95 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>{t('printPdf')}</span>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalJSX, document.body);
};
