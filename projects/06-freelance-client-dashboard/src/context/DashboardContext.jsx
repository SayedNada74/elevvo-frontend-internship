import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  INITIAL_PROJECTS, 
  INITIAL_CLIENTS, 
  INITIAL_INVOICES, 
  NOTIFICATIONS_DATA, 
  USER_PROFILE 
} from '../data/mockData';
import { I18N } from '../data/i18n';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('apex_react_theme') || 'dark');

  // Language state
  const [lang, setLang] = useState(() => localStorage.getItem('apex_react_lang') || 'en');

  // Projects state
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('apex_react_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_PROJECTS;
  });

  // Clients state
  const [clients] = useState(INITIAL_CLIENTS);

  // Invoices state
  const [invoices, setInvoices] = useState(() => {
    const saved = localStorage.getItem('apex_react_invoices');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_INVOICES;
  });

  // Notifications state (Bonus requirement: 3 most recent activities)
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  // User Profile
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('apex_react_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return USER_PROFILE;
  });

  // Global Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Toast state
  const [toast, setToast] = useState(null);

  // Sync Theme
  useEffect(() => {
    localStorage.setItem('apex_react_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  // Sync Language & Direction
  useEffect(() => {
    localStorage.setItem('apex_react_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  // Sync Projects to LocalStorage
  useEffect(() => {
    localStorage.setItem('apex_react_projects', JSON.stringify(projects));
  }, [projects]);

  // Sync Invoices to LocalStorage
  useEffect(() => {
    localStorage.setItem('apex_react_invoices', JSON.stringify(invoices));
  }, [invoices]);

  // Sync User Profile
  useEffect(() => {
    localStorage.setItem('apex_react_user', JSON.stringify(userProfile));
  }, [userProfile]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const t = (key) => {
    const dict = I18N[lang] || I18N.en;
    return dict[key] || key;
  };

  const addProject = (project) => {
    const newProj = {
      ...project,
      id: `PRJ-${Math.floor(100 + Math.random() * 900)}`,
    };
    setProjects(prev => [newProj, ...prev]);
    showToast(`Project "${newProj.name}" created successfully!`, 'success');
  };

  const cycleProjectStatus = (id) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== id) return p;
      let nextStatus = 'in-progress';
      let nextProgress = 35;
      if (p.status === 'in-progress') {
        nextStatus = 'under-review';
        nextProgress = 85;
      } else if (p.status === 'under-review') {
        nextStatus = 'completed';
        nextProgress = 100;
      }
      return { ...p, status: nextStatus, progress: nextProgress };
    }));
    showToast(`Updated project status!`, 'info');
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast(`Project removed`, 'warning');
  };

  const addInvoice = (invoice) => {
    const newInv = {
      ...invoice,
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
      status: 'Pending'
    };
    setInvoices(prev => [newInv, ...prev]);
    showToast(`Invoice #${newInv.id} created!`, 'success');
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    showToast('All notifications marked as read', 'success');
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  return (
    <DashboardContext.Provider value={{
      theme,
      toggleTheme,
      lang,
      toggleLang,
      t,
      projects,
      clients,
      invoices,
      notifications,
      userProfile,
      setUserProfile,
      searchQuery,
      setSearchQuery,
      isNewProjectModalOpen,
      setIsNewProjectModalOpen,
      selectedInvoice,
      setSelectedInvoice,
      toast,
      showToast,
      addProject,
      cycleProjectStatus,
      deleteProject,
      addInvoice,
      markAllNotificationsRead,
      markNotificationRead
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
