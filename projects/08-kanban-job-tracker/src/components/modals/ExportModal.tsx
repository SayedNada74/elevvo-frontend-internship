import React, { useState } from 'react';
import { X, Download, Upload, Copy, Check, AlertCircle } from 'lucide-react';
import { useJobs } from '../../context/JobContext';
import { JobApplication } from '../../types/job';

export const ExportModal: React.FC = () => {
  const { isExportModalOpen, setIsExportModalOpen, jobs, importJobs } = useJobs();
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const [importStatus, setImportStatus] = useState<{ success?: boolean; message?: string }>({});

  if (!isExportModalOpen) return null;

  const jsonString = JSON.stringify(jobs, null, 2);

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `careerflow_jobs_backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importText.trim()) {
      setImportStatus({ success: false, message: 'Please paste valid JSON data to import.' });
      return;
    }

    try {
      const parsed = JSON.parse(importText);
      const ok = importJobs(parsed as JobApplication[]);
      if (ok) {
        setImportStatus({ success: true, message: `Successfully loaded ${parsed.length} applications!` });
        setTimeout(() => {
          setIsExportModalOpen(false);
          setImportText('');
          setImportStatus({});
        }, 1200);
      } else {
        setImportStatus({ success: false, message: 'Invalid format. Array of JobApplication objects required.' });
      }
    } catch (err) {
      setImportStatus({ success: false, message: `JSON Parse error: ${(err as Error).message}` });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        setImportText(text);
      } catch (err) {
        setImportStatus({ success: false, message: `Failed to read file: ${(err as Error).message}` });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div
        className="glass-panel w-full max-w-xl rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Data Backup & Migration
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Export your active pipeline or import an existing JSON record
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsExportModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 py-4 space-y-5 text-sm">
          {/* Section 1: Export */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Download className="w-4 h-4 text-indigo-500" /> Export Applications ({jobs.length} roles)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy JSON'}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition"
                >
                  <Download className="w-3.5 h-3.5" /> Download .json
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Import */}
          <form onSubmit={handleImportSubmit} className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-cyan-500" /> Import JSON Data
              </span>
              <label className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
                <span>Select file from computer</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <textarea
              rows={5}
              placeholder="Paste JSON array here..."
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              className="w-full p-3 font-mono text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            {importStatus.message && (
              <div
                className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  importStatus.success
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800'
                }`}
              >
                {importStatus.success ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{importStatus.message}</span>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shadow-sm transition"
              >
                Validate & Import Pipeline
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
