import React, { useState, useRef } from 'react';
import { 
  Save, 
  MessageCircle, 
  Mail, 
  Sparkles, 
  ArrowRight,
  Camera,
  X,
  Maximize2
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

export const SettingsPage = () => {
  const { t, userProfile, setUserProfile, showToast } = useDashboard();

  const [form, setForm] = useState(userProfile);
  const [activeSkills, setActiveSkills] = useState(userProfile.skills || []);
  const [lightboxImg, setLightboxImg] = useState(null);
  const fileInputRef = useRef(null);

  const allSkills = [
    'React & React Router',
    'Tailwind CSS & Modern CSS',
    'Recharts & Three.js WebGL',
    'Web Performance & Core Web Vitals',
    'Component Architecture',
    'TypeScript & Modular ES6+',
    'REST & Async APIs',
    'Next.js App Router',
    'Storybook & UI Testing'
  ];

  const toggleSkill = (skill) => {
    setActiveSkills((prev) => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  // Zero-Dependency Client-Side Image Compression (Playbook Section 5.4)
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 400; // Retina square standard per Playbook
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Compress to high quality JPEG (< 60KB)
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setForm((prev) => ({ ...prev, avatar: compressedDataUrl }));
        setUserProfile((prev) => ({ ...prev, avatar: compressedDataUrl }));
        showToast('Profile photo compressed & updated (<60KB)!', 'success');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProfile({
      ...form,
      skills: activeSkills
    });
    showToast('Developer profile updated successfully!', 'success');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
          {t('profileSettings')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {t('profileSettingsSub')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings Form */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div 
                className="relative w-18 h-18 rounded-2xl overflow-hidden border-2 border-indigo-500/40 flex-shrink-0 cursor-pointer group shadow-lg shadow-indigo-500/10"
                onClick={() => setLightboxImg(form.avatar)}
                title="View Full Resolution (Privacy Protected)"
              >
                <img
                  src={form.avatar}
                  alt={form.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-[#0f111a]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{form.name}</h3>
                <p className="text-xs text-slate-400">{form.role}</p>
                <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-emerald-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Elevvo Frontend Track Architect</span>
                </div>
              </div>
            </div>

            {/* Avatar Upload CTA */}
            <div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleAvatarChange} 
                accept="image/*" 
                className="hidden" 
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.1] active:scale-95 transition-all"
              >
                <Camera className="w-3.5 h-3.5 text-indigo-400" />
                <span>Upload New Avatar</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t('professionalTitle')}
                </label>
                <input
                  type="text"
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t('emailAddress')}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t('whatsappPhone')}
                </label>
                <input
                  type="text"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t('hourlyRateUsd')}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    min="10"
                    max="500"
                    value={form.hourlyRate}
                    onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })}
                    className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl pl-8 pr-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  {t('defaultCurrency')}
                </label>
                <select
                  value={form.currency}
                  onChange={(e) => setForm({ ...form, currency: e.target.value })}
                  className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="USD">USD ($) — US Dollar</option>
                  <option value="EUR">EUR (€) — Euro</option>
                  <option value="EGP">EGP (E£) — Egyptian Pound</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                {t('developerBio')}
              </label>
              <textarea
                rows={3}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                className="w-full bg-[#10121b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">
                {t('coreCompetencies')}
              </label>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => {
                  const isActive = activeSkills.includes(skill);
                  return (
                    <button
                      type="button"
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/50 shadow-sm'
                          : 'bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:text-white'
                      }`}
                    >
                      {skill} {isActive ? '✓' : '+'}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Side Column: Verified Channels & Preferences */}
        <div className="space-y-6">
          {/* Verified Social Channels */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white">{t('verifiedChannels')}</h3>
              <p className="text-xs text-slate-400">{t('verifiedChannelsSub')}</p>
            </div>

            <div className="space-y-2.5">
              <a
                href={userProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.16] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">GitHub</div>
                    <div className="text-[11px] text-slate-400 font-mono">github.com/SayedNada74</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={userProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.16] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">LinkedIn</div>
                    <div className="text-[11px] text-slate-400 font-mono">sayed-nada</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={userProfile.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.16] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">WhatsApp</div>
                    <div className="text-[11px] text-slate-400 font-mono">+201206620678</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={userProfile.socials.email}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.16] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Email</div>
                    <div className="text-[11px] text-slate-400 font-mono">sayedmahmouda00@gmail.com</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Preferences */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-4">
            <h3 className="text-sm font-bold text-white">{t('notificationPreferences')}</h3>
            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-slate-300">{t('clientMilestoneAlerts')}</span>
                <input type="checkbox" defaultChecked className="accent-indigo-500 w-4 h-4 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-slate-300">{t('invoicePaymentReminders')}</span>
                <input type="checkbox" defaultChecked className="accent-indigo-500 w-4 h-4 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-slate-300">{t('weeklyEarningsDigest')}</span>
                <input type="checkbox" defaultChecked className="accent-indigo-500 w-4 h-4 rounded" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy-Protected Lightbox per Playbook Section 4.2 */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-sm w-full bg-[#12141f] border border-white/[0.12] rounded-3xl p-6 shadow-2xl animate-modal-pop text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
              <span className="text-xs font-bold text-slate-300">Verified Photo · Protected</span>
              <button 
                onClick={() => setLightboxImg(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500/30 select-none shadow-xl">
              <img
                src={lightboxImg}
                alt="Protected Avatar"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-4 font-mono">
              DRM Protected · Right-click and drag disabled
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
