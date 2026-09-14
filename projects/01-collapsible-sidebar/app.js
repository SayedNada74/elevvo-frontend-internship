/**
 * ELEVVO FRONTEND INTERNSHIP — TASK 1: COLLAPSIBLE SIDEBAR
 * Enterprise JavaScript Controller & State Architecture
 * Features: Desktop Collapsing, Mobile Off-canvas Drawer, Dual Theme, Bi-directional RTL/LTR i18n
 */

(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. STATE & STORAGE KEYS
  // ---------------------------------------------------------------------------
  const STORAGE_KEYS = {
    COLLAPSED: 'elevvo_sidebar_collapsed',
    THEME: 'elevvo_theme',
    LANG: 'elevvo_lang'
  };

  const state = {
    isCollapsed: localStorage.getItem(STORAGE_KEYS.COLLAPSED) === 'true',
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'en',
    isMobileOpen: false
  };

  // ---------------------------------------------------------------------------
  // 2. DOM ELEMENTS CACHE
  // ---------------------------------------------------------------------------
  const DOM = {
    html: document.documentElement,
    body: document.body,
    sidebar: document.getElementById('app-sidebar'),
    sidebarToggleBtn: document.getElementById('sidebar-toggle-btn'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileOverlay: document.getElementById('sidebar-overlay'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    mobileThemeBtn: document.getElementById('mobile-theme-btn'),
    themePillText: document.getElementById('theme-pill-text'),
    langToggleBtn: document.getElementById('lang-toggle-btn'),
    langPillText: document.getElementById('lang-pill-text'),
    demoToggleTrigger: document.getElementById('demo-toggle-trigger'),
    demoLangTrigger: document.getElementById('demo-lang-trigger'),
    navLinks: document.querySelectorAll('.sidebar-link'),
    searchInput: document.querySelector('.search-box input')
  };

  // ---------------------------------------------------------------------------
  // 3. I18N BILINGUAL TRANSLATION DICTIONARY
  // ---------------------------------------------------------------------------
  const translations = {
    en: {
      menu_label: 'MAIN MENU',
      nav_dashboard: 'Dashboard',
      nav_projects: 'Projects',
      nav_analytics: 'Analytics',
      nav_messages: 'Messages',
      nav_settings: 'Settings',
      theme_label: 'Theme',
      theme_dark: 'Dark',
      theme_light: 'Light',
      lang_label: 'Language',
      lang_code: 'EN',
      user_role: 'Frontend Intern',
      breadcrumb_root: 'Elevvo Track',
      breadcrumb_page: 'Task 1: Collapsible Sidebar',
      search_placeholder: 'Quick search...',
      view_repo: 'Repo',
      badge_status: 'Level 1 • Task 1 Complete',
      hero_title: 'Responsive Collapsible Sidebar Component',
      hero_desc: 'Built strictly adhering to the <strong>Enterprise Web Architecture & UI/UX Playbook</strong>. Features smooth animations, dual-theme tokens, bidirectional RTL/LTR layout, and a full-height mobile drawer.',
      btn_toggle_sidebar: 'Toggle Sidebar (Click / [ )',
      btn_switch_language: 'Switch to Arabic (عربي)',
      metric_responsive: 'Responsive',
      stat_1_title: 'Collapsible States',
      stat_1_sub: 'Full (268px) & Mini (82px)',
      stat_2_title: 'Mobile Trio Rule',
      stat_2_sub: 'z-[60] Off-canvas Drawer',
      stat_3_title: 'RTL Direction',
      stat_3_sub: 'Auto mirror margin & arrows',
      stat_4_title: 'Frame Rate',
      stat_4_sub: '60 FPS GPU Transitions',
      feat_1_title: '✨ Core Engineering Standards Applied',
      feat_1_item_1_h: 'Semantic HTML5 & Accessibility:',
      feat_1_item_1_d: 'Uses <aside>, <nav>, role="list", aria-expanded and full keyboard control (Esc to close, [ to toggle).',
      feat_1_item_2_h: 'Glassmorphism & Zinc Tokens:',
      feat_1_item_2_d: 'Accurate adherence to Golden Catalog color tokens: Deep Zinc 950, frosted glass headers, and sky-blue glowing accents.',
      feat_1_item_3_h: 'Smart Tooltip System:',
      feat_1_item_3_d: 'When collapsed into mini-sidebar mode, dynamic tooltips seamlessly pop out on hover to maintain context.',
      feat_1_item_4_h: 'State Persistence:',
      feat_1_item_4_d: 'Saves user theme, sidebar state, and language preference in localStorage automatically.',
      feat_2_title: '⌨️ Interactive Shortcuts & Controls',
      sc_toggle: 'Toggle Sidebar (Desktop)',
      sc_close: 'Close Mobile Drawer',
      sc_theme: 'Toggle Dark / Light Theme',
      sc_lang: 'Toggle English / Arabic',
      bonus_badge: '⭐ Bonus Objectives 100% Met',
      bonus_sub: 'Exceeds standard requirements by introducing multi-language RTL support, dual themes, and keyboard shortcuts.'
    },
    ar: {
      menu_label: 'القائمة الرئيسية',
      nav_dashboard: 'لوحة التحكم',
      nav_projects: 'المشاريع',
      nav_analytics: 'التحليلات',
      nav_messages: 'الرسائل',
      nav_settings: 'الإعدادات',
      theme_label: 'المظهر',
      theme_dark: 'داكن',
      theme_light: 'فاتح',
      lang_label: 'اللغة',
      lang_code: 'عربي',
      user_role: 'متدرب فرونت إند',
      breadcrumb_root: 'مسار إيليفو',
      breadcrumb_page: 'المهمة 1: الشريط الجانبي القابل للطي',
      search_placeholder: 'بحث سريع...',
      view_repo: 'المستودع',
      badge_status: 'المستوى 1 • تم إنجاز التاسك بنجاح',
      hero_title: 'شريط جانبي متجاوب وقابل للطي باحترافية',
      hero_desc: 'تم بناؤه وفقاً لأعلى معايير <strong>الكتالوج الذهبي وهندسة واجهات الويب</strong>. يتميز بأنيميشن سلس، ثيم مزدوج، دعم اتجاه اليمين واليسار (RTL/LTR)، ودرج منزلق للموبايل.',
      btn_toggle_sidebar: 'طي أو فتح السايدبار (انقر / [ )',
      btn_switch_language: 'التبديل إلى الإنجليزية (English)',
      metric_responsive: 'تجاوب فائق',
      stat_1_title: 'حالات السايدبار',
      stat_1_sub: 'كامل (268px) ومصغر (82px)',
      stat_2_title: 'قاعدة ثلاثي الموبايل',
      stat_2_sub: 'درج عائم z-[60] مع تعتيم بلوري',
      stat_3_title: 'دعم الاتجاه العربي',
      stat_3_sub: 'انعكاس ذكي للهوامش والأسهم',
      stat_4_title: 'معدل الإطارات',
      stat_4_sub: 'حركة ناعمة 60 FPS عبر الـ GPU',
      feat_1_title: '✨ المعايير الهندسية المطبقة في المشروع',
      feat_1_item_1_h: 'بنية دلالية وإمكانية وصول فائقة:',
      feat_1_item_1_d: 'استخدام وسوم HTML5 الدلالية، وأزرار مدعومة بـ aria-expanded وتحكم كامل بلوحة المفاتيح.',
      feat_1_item_2_h: 'تأثير الزجاج وتوكينز الألوان:',
      feat_1_item_2_d: 'تطبيق درجات Zinc 950 العميقة مع الزجاج البلوري ولمسات زرقاء مضيئة وأيقونات موحدة.',
      feat_1_item_3_h: 'نظام تلميحات ذكي (Smart Tooltips):',
      feat_1_item_3_d: 'تظهر التلميحات تلقائياً عند تحويم الفأرة في وضع الانكماش للحفاظ على تجربة استخدام واضحة.',
      feat_1_item_4_h: 'حفظ الحالة في المتصفح:',
      feat_1_item_4_d: 'يتم حفظ تفضيلات المستخدم (المظهر، اللغة، وضعية السايدبار) في localStorage تلقائياً.',
      feat_2_title: '⌨️ اختصارات لوحة المفاتيح والتحكم',
      sc_toggle: 'طي / توسيع السايدبار (ديسكتوب)',
      sc_close: 'إغلاق درج الموبايل',
      sc_theme: 'تبديل المظهر الداكن / الفاتح',
      sc_lang: 'تبديل لغة الواجهة عربي / إنجليزي',
      bonus_badge: '⭐ استيفاء كل ميزات البونص 100%',
      bonus_sub: 'تجاوز المتطلبات القياسية بإضافة التجاوب الكامل مع الموبايل، واللغة العربية، والثيم المزدوج.'
    }
  };

  // ---------------------------------------------------------------------------
  // 4. SIDEBAR COLLAPSE LOGIC (DESKTOP)
  // ---------------------------------------------------------------------------
  function toggleSidebarCollapse() {
    state.isCollapsed = !state.isCollapsed;
    applySidebarState();
    localStorage.setItem(STORAGE_KEYS.COLLAPSED, state.isCollapsed);
  }

  function applySidebarState() {
    if (state.isCollapsed) {
      DOM.sidebar.classList.add('collapsed');
      if (DOM.sidebarToggleBtn) {
        DOM.sidebarToggleBtn.setAttribute('aria-expanded', 'false');
      }
    } else {
      DOM.sidebar.classList.remove('collapsed');
      if (DOM.sidebarToggleBtn) {
        DOM.sidebarToggleBtn.setAttribute('aria-expanded', 'true');
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 5. MOBILE DRAWER LOGIC
  // ---------------------------------------------------------------------------
  function openMobileSidebar() {
    state.isMobileOpen = true;
    DOM.sidebar.classList.add('mobile-open');
    DOM.mobileOverlay.classList.add('active');
    DOM.body.style.overflow = 'hidden'; // Stacking context & scroll lock
    DOM.mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileSidebar() {
    state.isMobileOpen = false;
    DOM.sidebar.classList.remove('mobile-open');
    DOM.mobileOverlay.classList.remove('active');
    DOM.body.style.overflow = '';
    DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileSidebar() {
    if (state.isMobileOpen) {
      closeMobileSidebar();
    } else {
      openMobileSidebar();
    }
  }

  // ---------------------------------------------------------------------------
  // 6. THEME TOGGLE LOGIC
  // ---------------------------------------------------------------------------
  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  }

  function applyTheme() {
    DOM.html.setAttribute('data-theme', state.theme);
    const labelKey = state.theme === 'dark' ? 'theme_dark' : 'theme_light';
    const localizedText = translations[state.lang][labelKey];
    if (DOM.themePillText) {
      DOM.themePillText.textContent = localizedText;
    }
  }

  // ---------------------------------------------------------------------------
  // 7. BILINGUAL RTL/LTR LOGIC
  // ---------------------------------------------------------------------------
  function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'ar' : 'en';
    applyLanguage();
    localStorage.setItem(STORAGE_KEYS.LANG, state.lang);
  }

  function applyLanguage() {
    const isRTL = state.lang === 'ar';
    DOM.html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    DOM.html.setAttribute('lang', state.lang);

    const dict = translations[state.lang];

    // Update all text nodes marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<') && dict[key].includes('>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update pills
    if (DOM.langPillText) {
      DOM.langPillText.textContent = dict.lang_code;
    }
    applyTheme(); // refresh theme pill text translation
  }

  // ---------------------------------------------------------------------------
  // 8. KEYBOARD SHORTCUTS
  // ---------------------------------------------------------------------------
  function handleKeydown(e) {
    // Ignore keyboard shortcuts if user is actively typing in an input
    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
    if (isTyping) {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
      return;
    }

    // [ or Ctrl+B : Toggle Sidebar
    if (e.key === '[' || (e.ctrlKey && (e.key === 'b' || e.key === 'B'))) {
      e.preventDefault();
      if (window.innerWidth < 768) {
        toggleMobileSidebar();
      } else {
        toggleSidebarCollapse();
      }
    }

    // Escape : Close mobile drawer
    if (e.key === 'Escape' && state.isMobileOpen) {
      closeMobileSidebar();
    }

    // T / t : Toggle Theme
    if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.altKey && !e.metaKey) {
      toggleTheme();
    }

    // L / l : Toggle Language
    if ((e.key === 'l' || e.key === 'L') && !e.ctrlKey && !e.altKey && !e.metaKey) {
      toggleLanguage();
    }

    // Ctrl+K : Focus Search
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (DOM.searchInput) {
        DOM.searchInput.focus();
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 9. ACTIVE NAV LINK SWITCHER
  // ---------------------------------------------------------------------------
  function initNavLinks() {
    DOM.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        DOM.navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        // On mobile, auto close drawer on item selection
        if (window.innerWidth < 768 && state.isMobileOpen) {
          closeMobileSidebar();
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 10. EVENT LISTENERS INITIALIZATION
  // ---------------------------------------------------------------------------
  function initEventListeners() {
    // Desktop Collapse
    if (DOM.sidebarToggleBtn) {
      DOM.sidebarToggleBtn.addEventListener('click', toggleSidebarCollapse);
    }
    if (DOM.demoToggleTrigger) {
      DOM.demoToggleTrigger.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          toggleMobileSidebar();
        } else {
          toggleSidebarCollapse();
        }
      });
    }

    // Mobile Drawer
    if (DOM.mobileMenuBtn) {
      DOM.mobileMenuBtn.addEventListener('click', toggleMobileSidebar);
    }
    if (DOM.mobileOverlay) {
      DOM.mobileOverlay.addEventListener('click', closeMobileSidebar);
    }

    // Themes
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (DOM.mobileThemeBtn) {
      DOM.mobileThemeBtn.addEventListener('click', toggleTheme);
    }

    // Languages
    if (DOM.langToggleBtn) {
      DOM.langToggleBtn.addEventListener('click', toggleLanguage);
    }
    if (DOM.demoLangTrigger) {
      DOM.demoLangTrigger.addEventListener('click', toggleLanguage);
    }

    // Keyboard
    window.addEventListener('keydown', handleKeydown);

    // Window Resize Auto Close Mobile Drawer
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && state.isMobileOpen) {
        closeMobileSidebar();
      }
    });

    // Navigation Links
    initNavLinks();
  }

  // ---------------------------------------------------------------------------
  // 11. BOOTSTRAP APPLICATION
  // ---------------------------------------------------------------------------
  function init() {
    applySidebarState();
    applyTheme();
    applyLanguage();
    initEventListeners();
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
