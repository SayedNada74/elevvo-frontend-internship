import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCircle2, DollarSign, AlertCircle, Check } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

export const NotificationDropdown = () => {
  const { t, notifications, markAllNotificationsRead, markNotificationRead } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Bonus requirement: Show the 3 most recent user activities
  const recentActivities = notifications.slice(0, 3);
  const unreadCount = recentActivities.filter(n => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'finance':
        return <DollarSign className="w-4 h-4 text-indigo-400" />;
      case 'alert':
      default:
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all cursor-pointer"
        aria-label={t('notifications')}
        aria-expanded={isOpen}
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#090a10]">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Popover Menu */}
      {isOpen && (
        <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-80 sm:w-96 rounded-2xl bg-[#131622] border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl z-50 animate-modal-pop">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">{t('recentActivities')}</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400">
                Bonus · Top 3
              </span>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllNotificationsRead}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
              >
                <Check className="w-3 h-3" />
                <span>{t('markAllRead')}</span>
              </button>
            )}
          </div>

          {/* List of 3 most recent activities */}
          <div className="divide-y divide-white/[0.05]">
            {recentActivities.map((item) => (
              <div
                key={item.id}
                onClick={() => markNotificationRead(item.id)}
                className={`flex items-start gap-3 p-3.5 hover:bg-white/[0.03] transition-colors cursor-pointer ${
                  item.unread ? 'bg-indigo-500/[0.04]' : ''
                }`}
              >
                <div className="mt-0.5 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] flex-shrink-0">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white truncate">{item.title}</span>
                    <span className="text-[11px] text-slate-400 font-mono flex-shrink-0">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{item.msg}</p>
                </div>
                {item.unread && (
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-2.5 text-center text-[11px] text-slate-400 border-t border-white/[0.06] bg-black/20">
            Real-time activity audit stream · Sayed Nada
          </div>
        </div>
      )}
    </div>
  );
};
