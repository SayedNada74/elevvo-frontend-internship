/**
 * TASKFLOW PRODUCTION LANDING PAGE — Enterprise Web Architecture
 * High-Velocity Task Management & Team Productivity Platform
 * Features: Scroll Reveal Animations (IntersectionObserver), Dynamic Billing Toggle,
 *           Mobile Hamburger Navigation, Dual Themes & Bilingual RTL/LTR Support.
 */

(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. STORAGE KEYS & INITIAL STATE
  // ---------------------------------------------------------------------------
  const STORAGE_KEYS = {
    THEME: 'elevvo_taskflow_theme',
    LANG: 'elevvo_taskflow_lang'
  };

  const state = {
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'en',
    isAnnualBilling: false,
    isMobileMenuOpen: false
  };

  // ---------------------------------------------------------------------------
  // 2. DOM CACHE
  // ---------------------------------------------------------------------------
  const DOM = {
    html: document.documentElement,
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeBtnLabel: document.getElementById('theme-btn-label'),
    langToggleBtn: document.getElementById('lang-toggle-btn'),
    langBtnLabel: document.getElementById('lang-btn-label'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenuDrawer: document.getElementById('mobile-menu-drawer'),
    navPillLinks: document.querySelectorAll('.nav-pill-link'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link, .mobile-cta'),
    billingToggleBtn: document.getElementById('billing-toggle-btn'),
    labelMonthly: document.getElementById('label-monthly'),
    labelAnnual: document.getElementById('label-annual'),
    pricePro: document.getElementById('price-pro'),
    periodPro: document.getElementById('period-pro'),
    priceTeam: document.getElementById('price-team'),
    periodTeam: document.getElementById('period-team'),
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    subscribeFeedback: document.getElementById('subscribe-feedback'),
    progressBar: document.getElementById('scroll-progress-bar'),
    revealElements: document.querySelectorAll('.reveal-on-scroll')
  };

  // ---------------------------------------------------------------------------
  // 3. BILINGUAL TRANSLATION DICTIONARY
  // ---------------------------------------------------------------------------
  const translations = {
    en: {
      theme_dark: 'Dark',
      theme_light: 'Light',
      nav_home: 'Home',
      nav_features: 'Features',
      nav_testimonials: 'Reviews',
      nav_pricing: 'Pricing',
      nav_get_started: 'Get Started',
      nav_cta: 'Start Free Trial',
      hero_pill: 'TaskFlow 2.4 is Live • Next-Gen Work OS',
      hero_title_1: 'Organize your tasks,',
      hero_title_gradient: 'streamline your flow,',
      hero_title_2: 'achieve 3x more.',
      hero_subtitle: 'TaskFlow empowers fast-moving teams and individuals to plan, track, and ship high-impact work with intuitive visual boards, real-time sync, and smart productivity analytics.',
      btn_hero_primary: 'Get Started Free',
      btn_hero_secondary: 'Explore Features',
      proof_tasks: 'Tasks Completed',
      proof_uptime: 'Uptime Reliability',
      proof_rating: 'User Satisfaction',
      tag_synced: '● Synced',
      col_in_progress: 'In Progress',
      col_review: 'Under Review',
      col_done: 'Completed',
      feat_section_badge: 'Why Choose TaskFlow',
      feat_section_title: 'Engineered for Maximum Clarity & Velocity',
      feat_section_sub: 'Built from the ground up to replace fragmented spreadsheets, chaotic email threads, and bloated legacy project management tools.',
      feat_1_title: 'Visual Drag & Drop Kanban',
      feat_1_desc: 'Move work forward effortlessly. Structure complex workflows into customizable columns, color-coded priorities, and due-date milestones with fluid 60 FPS interactions.',
      feat_1_b1: 'Customizable workflow stages',
      feat_1_b2: 'Color-coded labels & tags',
      feat_1_b3: 'Smooth tactile drag feedback',
      feat_2_title: 'Real-Time Team Sync',
      feat_2_desc: 'Collaborate without friction. See teammate edits instantly, leave rich markdown comments, tag coworkers with @mentions, and receive instant push notifications.',
      feat_2_b1: 'Instant live cursor updates',
      feat_2_b2: 'Rich Markdown task descriptions',
      feat_2_b3: 'Granular role-based permissions',
      feat_3_title: 'Deep Productivity Analytics',
      feat_3_desc: 'Uncover bottlenecks before they derail deadlines. Track team velocity, completion ratios, burndown metrics, and generate executive summaries with single-click exports.',
      feat_3_b1: 'Automated burndown charts',
      feat_3_b2: 'Weekly velocity breakdowns',
      feat_3_b3: 'Exportable CSV & PDF reports',
      test_badge: 'Loved by Product Builders',
      test_title: 'Trusted by Fast-Growing Engineering Teams',
      test_sub: 'See how developers, designers, and project managers supercharge their weekly output using TaskFlow.',
      review_1_text: '"TaskFlow cut our daily sync meeting time in half. The visual Kanban board is so snappy and clean that our entire engineering team adopted it within 48 hours without any training."',
      review_1_role: 'VP of Engineering @ CloudScale',
      review_2_text: '"As a solo tech consultant managing 6 freelance clients simultaneously, TaskFlow has been an absolute lifesaver. The dark mode is gorgeous, and the keyboard shortcuts make planning a breeze."',
      review_2_role: 'Senior Frontend Architect',
      review_3_text: '"The depth of analytics without the overwhelming complexity of Jira is unmatched. We shipped our major quarterly release 2 weeks ahead of our projected timeline thanks to TaskFlow!"',
      review_3_role: 'Product Lead @ NextGen Labs',
      pricing_badge: 'Transparent Investment',
      pricing_title: 'Simple, Predictable Plans for Every Stage',
      pricing_sub: 'Start completely free. Upgrade only when your team expands. No hidden fees or lock-in contracts.',
      bill_monthly: 'Monthly',
      bill_annual: 'Yearly',
      discount_tag: 'Save 20%',
      tier_free_name: 'Free Starter',
      tier_free_desc: 'Essential visual task tracking for individuals and solo developers.',
      price_forever: '/ forever',
      free_feat_1: 'Up to 3 Active Task Boards',
      free_feat_2: 'Unlimited Task Cards',
      free_feat_3: 'Basic Filter & Search',
      free_feat_4: '7-day Activity History',
      free_feat_5: 'Team Collaboration',
      btn_tier_free: 'Get Started Free',
      tag_popular: '⭐ Most Popular',
      tier_pro_name: 'Pro Specialist',
      tier_pro_desc: 'For ambitious professionals and small agile squads needing velocity.',
      price_per_month: '/ user / mo',
      price_per_year: '/ user / mo (billed yearly)',
      pro_feat_1: 'Unlimited Active Boards',
      pro_feat_2: 'Real-Time Team Live Sync',
      pro_feat_3: 'Advanced Velocity Analytics',
      pro_feat_4: 'Automated Task Reminders',
      pro_feat_5: 'Priority 24/7 Email Support',
      btn_tier_pro: 'Start 14-Day Free Trial',
      tier_team_name: 'Team Enterprise',
      tier_team_desc: 'Custom security, advanced governance, and dedicated account management.',
      team_feat_1: 'Everything in Pro',
      team_feat_2: 'SSO & SAML Authentication',
      team_feat_3: 'Custom Roles & Permissions',
      team_feat_4: 'Audit Logs & Compliance',
      team_feat_5: 'Dedicated Customer Success Manager',
      btn_tier_team: 'Contact Sales',
      cta_pill: 'Instant Setup • No Credit Card Required',
      cta_title: 'Ready to streamline your workflow and ship faster?',
      cta_desc: 'Join over 45,000+ engineers, product managers, and remote teams who run their daily productivity on TaskFlow.',
      ph_work_email: 'Enter your work email...',
      btn_claim_trial: 'Claim Free Trial',
      footer_brand_desc: 'The high-velocity task management platform designed for ambitious creators and engineering squads.',
      footer_built_by: 'Crafted with precision by',
      footer_col_product: 'Product',
      footer_releases: 'Releases & Changelog',
      footer_col_resources: 'Resources',
      footer_docs: 'Documentation',
      footer_api: 'API Reference',
      footer_guides: 'Guides & Tutorials',
      footer_community: 'Community Forum',
      footer_col_connect: 'Direct Connect',
      footer_contact_note: 'Cairo, Egypt • sayedmahmouda00@gmail.com',
      footer_badge: 'SOC2 Type II • 99.99% Uptime SLA',
      email_success: '🎉 Awesome! We have sent a confirmation link to your email.',
      email_invalid: 'Please enter a valid work email address.'
    },
    ar: {
      theme_dark: 'داكن',
      theme_light: 'فاتح',
      nav_home: 'الرئيسية',
      nav_features: 'المميزات',
      nav_testimonials: 'الآراء والتقييمات',
      nav_pricing: 'خطط الأسعار',
      nav_get_started: 'ابدأ الآن',
      nav_cta: 'ابدأ تجربتك المجانية',
      hero_pill: 'إصدار TaskFlow 2.4 انطلق الآن • نظام إنتاجية الجيل القادم',
      hero_title_1: 'نظّم مهامك بدقة،',
      hero_title_gradient: 'وسرّع وتيرة إنجازك،',
      hero_title_2: 'وحقق 3 أضعاف إنتاجيتك.',
      hero_subtitle: 'يمكّن TaskFlow الفرق الطموحة والمطورين من تخطيط وتتبع وشحن المشاريع بكفاءة عالية عبر لوحات بصرية بديهية، ومزامنة فورية، وتحليلات أداء ذكية.',
      btn_hero_primary: 'ابدأ مجاناً الآن',
      btn_hero_secondary: 'استكشف المميزات',
      proof_tasks: 'مهمة منجزة',
      proof_uptime: 'جاهزية واستقرار',
      proof_rating: 'تقييم المستخدمين',
      tag_synced: '● متزامن',
      col_in_progress: 'قيد التنفيذ',
      col_review: 'تحت المراجعة',
      col_done: 'مكتملة بنجاح',
      feat_section_badge: 'لماذا تختار TaskFlow؟',
      feat_section_title: 'هندسة فائقة مصممة لأقصى درجات الوضوح والسرعة',
      feat_section_sub: 'تم بناؤه من الصفر ليستبدل الجداول المشتتة، ورسائل البريد الفوضوية، وأدوات إدارة المشاريع القديمة والمعقدة.',
      feat_1_title: 'لوحات كانبان بصرية بالسحب والإفلات',
      feat_1_desc: 'حرّك مهامك للأمام بسلاسة متناهية. قسّم تدفق العمل إلى أعمدة مخصصة، وأولويات ملونة، ومواعيد نهائية بدقة وحركة ناعمة 60 إطار/ثانية.',
      feat_1_b1: 'مراحل عمل قابلة للتخصيص الكامل',
      feat_1_b2: 'تصنيفات وعلامات ملونة',
      feat_1_b3: 'سحب وإفلات سلس عالي الاستجابة',
      feat_2_title: 'مزامنة حية ولحظية بين الفريق',
      feat_2_desc: 'تعاون مع فريقك دون أي عوائق. شاهد تعديلات زملائك فور حدوثها، وشارك التعليقات بتنسيق Markdown، وتلقى تنبيهات فورية.',
      feat_2_b1: 'مؤشرات حركة المؤشر اللحظية',
      feat_2_b2: 'وصف غني للمهام وتنسيق متقدم',
      feat_2_b3: 'صلاحيات دقيقة بحسب دور كل عضو',
      feat_3_title: 'تحليلات إنتاجية معمقة ورسوم بيانية',
      feat_3_desc: 'اكتشف معوقات العمل قبل أن تؤثر على المواعيد النهائية. تتبع سرعة الفريق، ونسب الإنجاز، وأنشئ تقارير جاهزة بنقرة واحدة.',
      feat_3_b1: 'مخططات Burndown آلية',
      feat_3_b2: 'تحليلات تفصيلية للسرعة الأسبوعية',
      feat_3_b3: 'تصدير التقارير بصيغتي CSV و PDF',
      test_badge: 'موثوق من رواد ومطوري المنتجات',
      test_title: 'تعتمد عليه أسرع الفرق الهندسية نمواً',
      test_sub: 'اكتشف كيف يضاعف المطورون والمصممون ومدراء المشاريع إنتاجيتهم الأسبوعية باستخدام TaskFlow.',
      review_1_text: '"لقد قلص TaskFlow وقت اجتماعاتنا اليومية إلى النصف. اللوحة البصرية فائقة السرعة لدرجة أن فريقنا البرمجي اعتمدها خلال 48 ساعة دون أي حاجة لتدريب."',
      review_1_role: 'مدير قطاع الهندسة البرمجية @ CloudScale',
      review_2_text: '"بصفتي مستشاراً تقنياً مستقلاً أدير 6 عملاء في وقت واحد، كان TaskFlow منقذاً حقيقياً لي. المظهر الداكن مبهر واختصارات الكيبورد مريحة للغاية."',
      review_2_role: 'كبير مهندسي الفرونت إند',
      review_3_text: '"عمق التحليلات مع البساطة المتقنة دون تعقيدات Jira جعلنا نشحن إصدارنا البرمجي الرئيسي قبل موعدنا بأسبوعين كاملين بفضل TaskFlow!"',
      review_3_role: 'قائدة المنتجات التقنية @ NextGen Labs',
      pricing_badge: 'استثمار شفاف وعادل',
      pricing_title: 'خطط بسيطة ومدروسة تناسب كافة المراحل',
      pricing_sub: 'ابدأ مجاناً بالكامل، وقم بالترقية فقط عندما يتوسع فريقك. بدون أي رسوم خفية أو عقود معقدة.',
      bill_monthly: 'شهرياً',
      bill_annual: 'سنوياً',
      discount_tag: 'وفّر 20%',
      tier_free_name: 'البداية المجانية',
      tier_free_desc: 'تتبع أساسي للمهام موجه للمطورين المستقلين والأفراد.',
      price_forever: '/ دائماً مجاناً',
      free_feat_1: 'حتى 3 لوحات مهام نشطة',
      free_feat_2: 'عدد غير محدود من بطاقات المهام',
      free_feat_3: 'فلترة وبحث سريع',
      free_feat_4: 'سجل نشاط لمدة 7 أيام',
      free_feat_5: 'التعاون الجماعي المتقدم',
      btn_tier_free: 'ابدأ مجاناً الآن',
      tag_popular: '⭐ الخطة الأكثر طلباً',
      tier_pro_name: 'المحترف للمتخصصين',
      tier_pro_desc: 'للفرق السريعة والمحترفين الذين يتطلب عملهم سرعة ودقة متناهية.',
      price_per_month: '/ مستخدم / شهرياً',
      price_per_year: '/ مستخدم / شهرياً (تدفع سنوياً)',
      pro_feat_1: 'عدد غير محدود من اللوحات النشطة',
      pro_feat_2: 'مزامنة حية ولحظية لكافة أعضاء الفريق',
      pro_feat_3: 'تحليلات متقدمة لسرعة الإنجاز',
      pro_feat_4: 'تذكيرات آلية للمواعيد والمهام',
      pro_feat_5: 'دعم فني وأولوية بريدية على مدار 24/7',
      btn_tier_pro: 'ابدأ تجربة مجانية 14 يوماً',
      tier_team_name: 'المؤسسات والشركات',
      tier_team_desc: 'حماية وأمان مخصص، صلاحيات إدارية متقدمة، وإدارة حساب مخصصة.',
      team_feat_1: 'يشمل كافة مزايا خطة المحترفين',
      team_feat_2: 'تسجيل دخول موحد SSO & SAML',
      team_feat_3: 'أدوار وصلاحيات مخصصة بدقة',
      team_feat_4: 'سجلات تدقيق وامتثال أمني',
      team_feat_5: 'مدير نجاح حساب مخصص لشركتك',
      btn_tier_team: 'تواصل مع فريق المبيعات',
      cta_pill: 'إعداد فوري • لا حاجة لبطاقة ائتمان',
      cta_title: 'جاهز لتبسيط وتيرة عملك وشحن مشاريعك أسرع؟',
      cta_desc: 'انضم إلى أكثر من 45,000 مهندس، ومدير منتج، وفريق عمل عن بُعد يديرون إنتاجيتهم اليومية عبر TaskFlow.',
      ph_work_email: 'أدخل بريدك الإلكتروني للعمل...',
      btn_claim_trial: 'احصل على نسختك التجريبية',
      footer_brand_desc: 'منصة إدارة وتتبع المهام عالية السرعة المصممة للمبدعين والفرق البرمجية الطموحة.',
      footer_built_by: 'تم البناء والإتقان بواسطة',
      footer_col_product: 'المنتج',
      footer_releases: 'الإصدارات وسجل التحديثات',
      footer_col_resources: 'المصادر',
      footer_docs: 'دليل الاستخدام والتوثيق',
      footer_api: 'مرجع الـ API',
      footer_guides: 'شروحات وأدلة إرشادية',
      footer_community: 'منتدى المطورين',
      footer_col_connect: 'تواصل مباشر',
      footer_contact_note: 'القاهرة، مصر • sayedmahmouda00@gmail.com',
      footer_badge: 'حماية SOC2 • توفر مستمر 99.99%',
      email_success: '🎉 رائع جداً! تم إرسال رابط التفعيل إلى بريدك الإلكتروني بنجاح.',
      email_invalid: 'يرجى إدخال بريد إلكتروني صالح للعمل.'
    }
  };

  // ---------------------------------------------------------------------------
  // 4. SCROLL REVEAL ANIMATION ENGINE (BONUS FEATURE)
  // ---------------------------------------------------------------------------
  function initScrollReveal() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      DOM.revealElements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      DOM.revealElements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Unobserve once animated for best performance
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    DOM.revealElements.forEach((el) => observer.observe(el));
  }

  // ---------------------------------------------------------------------------
  // 5. BILLING TOGGLE CONTROLLER
  // ---------------------------------------------------------------------------
  function toggleBilling() {
    state.isAnnualBilling = !state.isAnnualBilling;
    applyBilling();
  }

  function applyBilling() {
    if (state.isAnnualBilling) {
      DOM.billingToggleBtn.classList.add('annual');
      DOM.labelMonthly.classList.remove('active');
      DOM.labelAnnual.classList.add('active');

      // Update prices to annual discounted rate
      DOM.pricePro.textContent = DOM.pricePro.getAttribute('data-annual');
      DOM.periodPro.textContent = translations[state.lang].price_per_year;

      DOM.priceTeam.textContent = DOM.priceTeam.getAttribute('data-annual');
      DOM.periodTeam.textContent = translations[state.lang].price_per_year;
    } else {
      DOM.billingToggleBtn.classList.remove('annual');
      DOM.labelMonthly.classList.add('active');
      DOM.labelAnnual.classList.remove('active');

      // Update prices to standard monthly rate
      DOM.pricePro.textContent = DOM.pricePro.getAttribute('data-monthly');
      DOM.periodPro.textContent = translations[state.lang].price_per_month;

      DOM.priceTeam.textContent = DOM.priceTeam.getAttribute('data-monthly');
      DOM.periodTeam.textContent = translations[state.lang].price_per_month;
    }
  }

  // ---------------------------------------------------------------------------
  // 6. MOBILE HAMBURGER NAVIGATION
  // ---------------------------------------------------------------------------
  function toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    if (DOM.mobileMenuDrawer) {
      DOM.mobileMenuDrawer.classList.toggle('open', state.isMobileMenuOpen);
    }
    if (DOM.mobileMenuBtn) {
      DOM.mobileMenuBtn.setAttribute('aria-expanded', state.isMobileMenuOpen);
    }
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    if (DOM.mobileMenuDrawer) {
      DOM.mobileMenuDrawer.classList.remove('open');
    }
    if (DOM.mobileMenuBtn) {
      DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // ---------------------------------------------------------------------------
  // 6.1 PILL NAVIGATION & ACTIVE SECTION SCROLLSPY (High-Performance Cached)
  // ---------------------------------------------------------------------------
  const navSections = ['hero', 'features', 'testimonials', 'pricing', 'cta'];
  let isProgrammaticScroll = false;
  let programmaticScrollTimer = null;
  let cachedSections = [];
  let cachedPillLinks = [];
  let cachedMobileLinks = [];

  function initNavCache() {
    cachedSections = navSections.map((id) => ({
      id,
      el: document.getElementById(id)
    })).filter((item) => Boolean(item.el));
    cachedPillLinks = Array.from(document.querySelectorAll('.nav-pill-link'));
    cachedMobileLinks = Array.from(document.querySelectorAll('.mobile-nav-link'));
  }

  function setActiveNav(targetId) {
    if (!targetId) return;
    for (let i = 0; i < cachedPillLinks.length; i++) {
      const link = cachedPillLinks[i];
      link.classList.toggle('active', link.getAttribute('data-nav') === targetId);
    }
    for (let i = 0; i < cachedMobileLinks.length; i++) {
      const link = cachedMobileLinks[i];
      link.classList.toggle('active', link.getAttribute('data-nav') === targetId);
    }
  }

  function updateActiveNavOnScroll() {
    if (isProgrammaticScroll) return;

    const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    // 1. If at the bottom of the page (within 80px), activate CTA
    if ((winHeight + scrollY) >= (docHeight - 80)) {
      setActiveNav('cta');
      return;
    }

    // 2. Viewport-based threshold (180px from top of viewport)
    // Works 100% reliably regardless of offsetParent or CSS layout
    const threshold = 180;
    let activeId = 'hero';

    for (let i = 0; i < cachedSections.length; i++) {
      const item = cachedSections[i];
      const rect = item.el.getBoundingClientRect();
      if (rect.top <= threshold) {
        activeId = item.id;
      }
    }

    setActiveNav(activeId);
  }

  // ---------------------------------------------------------------------------
  // 7. NEWSLETTER / TRIAL FORM VALIDATION
  // ---------------------------------------------------------------------------
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = DOM.newsletterEmail.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const dict = translations[state.lang];

    if (!email || !emailRegex.test(email)) {
      DOM.subscribeFeedback.textContent = dict.email_invalid;
      DOM.subscribeFeedback.className = 'subscribe-feedback error';
      DOM.newsletterEmail.focus();
      return;
    }

    // Success
    DOM.subscribeFeedback.textContent = dict.email_success;
    DOM.subscribeFeedback.className = 'subscribe-feedback success';
    DOM.newsletterForm.reset();

    setTimeout(() => {
      DOM.subscribeFeedback.textContent = '';
      DOM.subscribeFeedback.className = 'subscribe-feedback';
    }, 5000);
  }

  // ---------------------------------------------------------------------------
  // 8. THEME TOGGLE & PERSISTENCE
  // ---------------------------------------------------------------------------
  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  }

  function applyTheme() {
    DOM.html.setAttribute('data-theme', state.theme);
    const key = state.theme === 'dark' ? 'theme_dark' : 'theme_light';
    if (DOM.themeBtnLabel) {
      DOM.themeBtnLabel.textContent = translations[state.lang][key];
    }
  }

  // ---------------------------------------------------------------------------
  // 9. BILINGUAL RTL/LTR ARCHITECTURE
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

    // Update text nodes
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

    if (DOM.langBtnLabel) {
      DOM.langBtnLabel.textContent = isRTL ? 'عربي' : 'EN';
    }

    applyTheme();
    applyBilling(); // update billing price period suffix in selected language
  }

  // ---------------------------------------------------------------------------
  // 10. KEYBOARD SHORTCUTS
  // ---------------------------------------------------------------------------
  function handleKeydown(e) {
    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
    if (isTyping) {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }

    // T: Toggle Theme
    if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.altKey) {
      toggleTheme();
    }

    // L: Toggle Language
    if ((e.key === 'l' || e.key === 'L') && !e.ctrlKey && !e.altKey) {
      toggleLanguage();
    }

    // Escape: Close mobile menu
    if (e.key === 'Escape' && state.isMobileMenuOpen) {
      closeMobileMenu();
    }
  }

  // ---------------------------------------------------------------------------
  // 11. EVENT LISTENERS INITIALIZATION
  // ---------------------------------------------------------------------------
  function initEventListeners() {
    // Billing Switcher
    DOM.billingToggleBtn.addEventListener('click', toggleBilling);
    DOM.labelMonthly.addEventListener('click', () => {
      if (state.isAnnualBilling) toggleBilling();
    });
    DOM.labelAnnual.addEventListener('click', () => {
      if (!state.isAnnualBilling) toggleBilling();
    });

    // Mobile Menu
    DOM.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    DOM.mobileNavLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Theme & Language
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.langToggleBtn.addEventListener('click', toggleLanguage);

    // Newsletter Form
    DOM.newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Keyboard Shortcuts
    window.addEventListener('keydown', handleKeydown);

    // Pill Navigation Smooth Scrolling on Click
    document.querySelectorAll('.nav-pill-link, .mobile-nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-nav');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          e.preventDefault();
          isProgrammaticScroll = true;
          setActiveNav(targetId);
          closeMobileMenu();

          const headerOffset = 85;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + (window.pageYOffset || window.scrollY || 0) - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          clearTimeout(programmaticScrollTimer);
          programmaticScrollTimer = setTimeout(() => {
            isProgrammaticScroll = false;
            updateActiveNavOnScroll();
          }, 850);
        }
      });
    });

    // Unified High-Performance Scroll Listener (rAF Throttled & Composited scaleX)
    let scrollTicking = false;
    function handleScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(updateScrollVisuals);
      }
    }

    function updateScrollVisuals() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      if (DOM.progressBar) {
        DOM.progressBar.style.transform = `scaleX(${scrollRatio})`;
      }
      updateActiveNavOnScroll();
      scrollTicking = false;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // 11.5 CUSTOM INTERACTIVE CURSOR & MAGNETIC BUTTON SYSTEM (GPU Accelerated)
  // ---------------------------------------------------------------------------
  function initCustomCursorAndMagneticButtons() {
    // Disable on touch / mobile devices or if user prefers reduced motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isMoving = false;
    let isHovered = false;
    let isPressed = false;
    let dotScale = 1;
    let ringScale = 1;

    function updateScales() {
      if (isPressed) {
        dotScale = 0.6;
        ringScale = 0.9;
      } else if (isHovered) {
        dotScale = 1.5;
        ringScale = 1;
      } else {
        dotScale = 1;
        ringScale = 1;
      }
    }

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isMoving) {
        isMoving = true;
        ringX = mouseX;
        ringY = mouseY;
        document.body.classList.add('cursor-active');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-active', 'cursor-hover', 'cursor-down');
      isHovered = false;
      isPressed = false;
      updateScales();
    });

    document.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-active');
    });

    window.addEventListener('mousedown', () => {
      document.body.classList.add('cursor-down');
      isPressed = true;
      updateScales();
    });

    window.addEventListener('mouseup', () => {
      document.body.classList.remove('cursor-down');
      isPressed = false;
      updateScales();
    });

    // Fluid 60-120fps linear interpolation trailing ring on GPU compositor
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Magnetic Button Engine with cached center geometry and dynamic will-change
    const magneticSelector = '.btn, .social-btn, .nav-pill-link, .control-btn, .dock-link, .billing-toggle-btn, .mobile-menu-btn';
    const magneticTargets = document.querySelectorAll(magneticSelector);

    magneticTargets.forEach((target) => {
      target.classList.add('magnetic-item');
      let centerX = 0;
      let centerY = 0;

      target.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        isHovered = true;
        updateScales();
        target.style.transition = 'none';
        target.style.willChange = 'transform';
        const rect = target.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      });

      target.addEventListener('mousemove', (e) => {
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Elastic magnetic pull factor
        const pullFactor = 0.35;
        const pullX = deltaX * pullFactor;
        const pullY = deltaY * pullFactor;

        target.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
      }, { passive: true });

      target.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
        isHovered = false;
        updateScales();
        target.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        target.style.transform = 'translate3d(0, 0, 0)';

        setTimeout(() => {
          if (!target.matches(':hover')) {
            target.style.transition = '';
            target.style.willChange = 'auto'; // Free up GPU layer memory
          }
        }, 450);
      });
    });

    // General clickable elements hover expansion
    const clickableGeneral = document.querySelectorAll('a, button, input, textarea, label, [role="button"]');
    clickableGeneral.forEach((el) => {
      if (!el.matches(magneticSelector)) {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover');
          isHovered = true;
          updateScales();
        });
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover');
          isHovered = false;
          updateScales();
        });
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 12. BOOTSTRAP
  // ---------------------------------------------------------------------------
  function init() {
    initNavCache();
    applyTheme();
    applyLanguage();
    applyBilling();
    initEventListeners();
    initScrollReveal();
    updateActiveNavOnScroll();
    initCustomCursorAndMagneticButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
