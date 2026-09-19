/**
 * ==========================================================================
 * NovaScale AI — Master SaaS Application Logic
 * Elevvo Frontend Web Development Track — Task 05: Tech SaaS Landing Page
 * Engineered by Sayed Nada | Golden Playbook Compliant
 * Self-contained for zero-friction execution on both http:// and file:///
 * ==========================================================================
 */

// --- 1. COMPREHENSIVE BILINGUAL DICTIONARY (i18n) ---
const I18N = {
  en: {
    topBarText: 'NovaScale 4.0 is live: Autonomous Multi-Agent AI Pipelines & Edge Telemetry!',
    learnMore: 'Explore',
    navFeatures: 'Features',
    navPreview: 'Live Demo',
    navCalculator: 'ROI Calculator',
    navPricing: 'Pricing',
    navTestimonials: 'Stories',
    navFaq: 'FAQ',
    startFreeTrial: 'Start Free Trial',
    heroBadge: 'Next-Gen Autonomous Cloud 4.0',
    heroBadgeSub: 'Multi-Agent AI Telemetry',
    heroTitlePart1: 'Orchestrate Enterprise Cloud &',
    heroTitlePart2: 'Autonomous AI at Global Scale',
    heroSubtitle: 'Eliminate infrastructure downtime with self-healing Kubernetes clusters, sub-12ms global edge routing, and automated zero-trust security in a single pane of glass.',
    heroPrimaryCta: 'Start 14-Day Free Trial',
    heroSecondaryCta: 'Interactive 2-Min Demo',
    noCreditCard: 'No Credit Card Required',
    socCompliance: 'SOC-2 & GDPR Certified',
    metricUptime: 'Guaranteed SLA Uptime',
    metricLatency: 'Global Edge Latency',
    metricSavings: 'Cloud Waste Reclaimed',
    metricOps: 'Telemetry Operations',
    trustedBy: 'Trusted by Engineering Leaders at Scaled Enterprises',
    featuresPill: 'Core Architecture',
    featuresHeading: 'Engineered for Extreme Velocity & Zero Downtime',
    featuresSub: 'Every layer of NovaScale AI is hardened for mission-critical cloud operations, from raw packet routing to autonomous self-healing microservices.',
    feat1Title: 'Autonomous Multi-Agent Orchestration',
    feat1Desc: 'Deploy cooperating AI agents that autonomously monitor memory leaks, re-balance database connections, and patch vulnerabilities before outages occur.',
    feat2Title: 'Sub-12ms Anycast Global Edge',
    feat2Desc: 'Traffic automatically hops to the closest geographical node across 142 worldwide edge data centers using Anycast routing with zero DNS lag.',
    feat3Title: 'Zero-Trust Cryptographic Mesh',
    feat3Desc: 'Every inter-service communication undergoes automatic mutual TLS (mTLS) with rotating 256-bit ephemeral keys and instantaneous hardware token verification.',
    shieldMode: 'Shield Lock:',
    feat4Title: 'Sub-Millisecond Log Streamer',
    feat4Desc: 'Ingest petabytes of distributed traces and metrics in real-time with instant search indexing and zero storage tax.',
    feat5Title: 'Visual CI/CD Cloud Pipeline',
    feat5Desc: 'Design complex multi-cloud deployments with an intuitive drag-and-drop workflow canvas that compiles directly to production Terraform & Helm charts.',
    feat6Title: 'Predictive FinOps Cost Reducer',
    feat6Desc: 'Automatically identify idle VM instances, unattached EBS volumes, and oversized compute, pruning your monthly AWS/GCP bills by up to 45%.',
    roiPill: 'ROI Calculator',
    roiTitle: 'Calculate Your Cloud & Engineering Savings',
    roiSubtitle: 'Drag the sliders below to see your immediate cost reduction and engineering hours saved per month.',
    teamSizeLabel: 'Engineering Team Size',
    cloudSpendLabel: 'Monthly Cloud Infrastructure Spend',
    calcEstSavings: 'Estimated Monthly Cost Savings',
    calcDevHours: 'Dev Hours Reclaimed',
    calcPayback: 'Full ROI Payback',
    claimSavingsBtn: 'Claim These Savings →',
    pricingPill: 'Transparent Plans',
    pricingHeading: 'Predictable Pricing for High-Velocity Teams',
    pricingSub: 'Zero hidden egress fees. Zero per-seat overcharges. Upgrade or downgrade at any time.',
    billingMonthly: 'Monthly Billing',
    billingAnnual: 'Annual Billing',
    plan1Name: 'Starter',
    plan1Desc: 'Ideal for solo founders and agile MVP projects scaling out.',
    plan2Name: 'Pro Cloud',
    plan2Desc: 'For scaling engineering teams demanding high reliability.',
    plan3Name: 'Enterprise Elite',
    plan3Desc: 'Custom governance, HIPAA/SOC-2, and dedicated cloud nodes.',
    testPill: 'Social Proof',
    testHeading: 'Trusted by 45,000+ Engineers Worldwide',
    testSub: 'See how tech teams transformed their deployment speed and slashed cloud infrastructure waste.',
    faqPill: 'Knowledge Base',
    faqHeading: 'Frequently Asked Questions',
    faqSub: 'Everything you need to know about telemetry orchestration, security, and onboarding.',
    ctaHeading: 'Ready to Accelerate Your Enterprise Cloud?',
    ctaSub: 'Join over 45,000 engineering teams deploying autonomous AI infrastructure with zero downtime. Get started in under 3 minutes.',
    startFreeNow: 'Start Free Now →',
    toastSuccessTitle: 'Welcome to NovaScale AI!',
    toastSuccessMsg: 'Check your inbox for your 14-day Pro Cloud activation link.'
  },
  ar: {
    topBarText: 'إطلاق إصدار NovaScale 4.0: خطوط أنابيب الذكاء الاصطناعي الذاتية والشبكة الطرفية السحابية!',
    learnMore: 'استكشف',
    navFeatures: 'المميزات',
    navPreview: 'ديمو حي',
    navCalculator: 'حاسبة التوفير',
    navPricing: 'الأسعار',
    navTestimonials: 'تجارب العملاء',
    navFaq: 'الأسئلة الشائعة',
    startFreeTrial: 'ابدأ التجربة المجانية',
    heroBadge: 'الجيل الرابع من السحابة الذاتية',
    heroBadgeSub: 'مراقبة بالذكاء الاصطناعي',
    heroTitlePart1: 'إدارة السحابة المؤسسية وأنظمة',
    heroTitlePart2: 'الذكاء الاصطناعي على نطاق عالمي',
    heroSubtitle: 'تخلص نهائياً من انقطاعات الخوادم مع حاويات كوبرنيتس ذاتية الشفاء، وتوجيه بيانات طرفي أقل من 12ms، وأمان صفري فائق من شاشة تحكم واحدة.',
    heroPrimaryCta: 'ابدأ تجربة مجانية 14 يوماً',
    heroSecondaryCta: 'شاهد فيديو توضيحي (دقيقتين)',
    noCreditCard: 'بدون بطاقة بنكية',
    socCompliance: 'شهادات SOC-2 و GDPR المعتمدة',
    metricUptime: 'ضمان استمرارية التشغيل SLA',
    metricLatency: 'زمن الاستجابة الطرفية العالمي',
    metricSavings: 'توفير مهدر السحابة',
    metricOps: 'عمليات القياس اللحظية',
    trustedBy: 'معتمد وموثوق من قادة الهندسة في أكبر الشركات التقنية',
    featuresPill: 'المعمارية الهندسية',
    featuresHeading: 'مصمم لتحقيق أقصى سرعة واستمرارية 100%',
    featuresSub: 'كل طبقة في NovaScale AI مجهزة للعمليات السحابية الحساسة، بدءاً من حزم الشبكة حتى الخدمات المصغرة ذاتية التعافي.',
    feat1Title: 'تنسيق وكلاء الذكاء الاصطناعي الذاتية',
    feat1Desc: 'نشر وكلاء ذكاء اصطناعي متعاونين يراقبون تسريبات الذاكرة تلقائياً، ويعيدون موازنة قواعد البيانات ويصلحون الثغرات قبل حدوث أي توقف.',
    feat2Title: 'شبكة طرفية سريعة أقل من 12ms',
    feat2Desc: 'يتم توجيه حركة المرور تلقائياً لأقرب عقدة جغرافية عبر 142 مركز بيانات عالمي بتقنية Anycast بدون أي بطء في الـ DNS.',
    feat3Title: 'شبكة أمان مشفرة قائمة على الثقة الصفرية',
    feat3Desc: 'كل اتصال بين الخدمات يتم تشفيره تلقائياً بـ mTLS مع مفاتيح دوارة 256-bit والتحقق اللحظي عبر العتاد الأمني الصلب.',
    shieldMode: 'وضع التشفير:',
    feat4Title: 'بث ومطالعة السجلات في أجزاء من الثانية',
    feat4Desc: 'معالجة بيتابايت من التتبعات الموزعة والمؤشرات في الوقت الفعلي مع فهرسة فورية وبدون أي تكلفة تخزين مبالغ فيها.',
    feat5Title: 'خط أنابيب CI/CD مرئي وسلس',
    feat5Desc: 'صمم عمليات النشر السحابي المعقدة عبر لوحة مرئية بالسحب والإفلات تترجم مباشرة لأكواد Terraform و Helm جاهزة للإنتاج.',
    feat6Title: 'مخفض تكاليف السحابة الذكي (FinOps)',
    feat6Desc: 'اكتشاف الأجهزة الافتراضية الخاملة والموارد غير المستغلة تلقائياً، وتقليص فواتير AWS و GCP الشهرية بنسبة تصل إلى 45%.',
    roiPill: 'حاسبة العائد السحابي',
    roiTitle: 'احسب حجم التوفير المالي وساعات مهندسيك',
    roiSubtitle: 'حرّك أشرطة التمرير بالأسفل لترى التخفيض الفوري في الفاتورة وساعات العمل الموفرة شهرياً.',
    teamSizeLabel: 'حجم فريق الهندسة والبرمجة',
    cloudSpendLabel: 'الإنفاق الشهري على البنية التحتية',
    calcEstSavings: 'التوفير المالي الشهري المقدر',
    calcDevHours: 'ساعات هندسية مسترجعة',
    calcPayback: 'استرداد الاستثمار بالكامل',
    claimSavingsBtn: 'احصل على هذا التوفير الآن ←',
    pricingPill: 'باقات شفافة',
    pricingHeading: 'أسعار واضحة وبسيطة لفرق العمل السريعة',
    pricingSub: 'بدون أي رسوم خفية لنقل البيانات. بدون تكاليف إضافية على كل مستخدم. ترقية أو إلغاء بأي وقت.',
    billingMonthly: 'دفع شهري',
    billingAnnual: 'دفع سنوي',
    plan1Name: 'البداية (Starter)',
    plan1Desc: 'مثالية للشركات الناشئة والمشاريع الأولية سريعة التوسع.',
    plan2Name: 'السحابة الاحترافية (Pro)',
    plan2Desc: 'لفرق الهندسة المتنامية التي تتطلب موثوقية عالية جداً.',
    plan3Name: 'المؤسسات الكبرى (Elite)',
    plan3Desc: 'حوكمة مخصصة، عقود HIPAA/SOC-2 وخوادم سحابية معزولة.',
    testPill: 'آراء ومصداقية',
    testHeading: 'موثوق من أكثر من 45,000 مهندس حول العالم',
    testSub: 'تعرف كيف ساعد NovaScale الفرق في مضاعفة سرعة النشر وتوفير ميزانيات السحابة.',
    faqPill: 'قاعدة المعرفة',
    faqHeading: 'الأسئلة الأكثر شيوعاً',
    faqSub: 'كل ما تحتاج لمعرفته حول نقل البنية التحتية، الأمان، وسرعة البدء.',
    ctaHeading: 'جاهز لتسريع وإطلاق سحابتك بكفاءة فائقة؟',
    ctaSub: 'انضم لأكثر من 45,000 فريق هندسي ينشرون بنيتهم الذاتية بدون أي توقف. ابدأ خلال أقل من 3 دقائق.',
    startFreeNow: 'ابدأ تجربتك المجانية فوراً ←',
    toastSuccessTitle: 'أهلاً بك في NovaScale AI!',
    toastSuccessMsg: 'تم إرسال رابط تفعيل باقة الـ Pro السحابية لبريدك الإلكتروني.'
  }
};

// --- 2. MASTER APPLICATION CONTROLLER ---
class NovaScaleApp {
  constructor() {
    this.lang = localStorage.getItem('novascale_lang') || 'en';
    this.theme = localStorage.getItem('novascale_theme') || 'dark';
    this.billingCycle = 'monthly';
    this.isShieldActive = true;
    this.logInterval = null;

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.applyLang(this.lang);
    this.setupNavigation();
    this.initCustomCursorAndMagnetics();
    this.initLivingBackgroundCanvas();
    this.setupScrollReveal();
    this.setupScrollProgressAndHeader();
    this.setupDashboardPreviewTabs();
    this.setupInteractiveFeatureSliders();
    this.setupRoiCalculator();
    this.setupPricingToggle();
    this.setupTestimonialsFilter();
    this.setupFaqAccordionAndSearch();
    this.setupDemoModal();
    this.setupLeadCapture();
    this.setupLiveLogStreamer();
  }

  // --- Theme Management (Dark / Light Mode) ---
  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('novascale_theme', theme);

    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
    }

    const iconSlot = document.getElementById('theme-icon-slot');
    const mobileIconSlot = document.getElementById('mobile-theme-icon-slot');

    const sunSvg = `<svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>`;
    const moonSvg = `<svg class="w-4 h-4 text-indigo-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    if (theme === 'light') {
      if (iconSlot) iconSlot.innerHTML = moonSvg;
      if (mobileIconSlot) mobileIconSlot.innerHTML = moonSvg;
    } else {
      if (iconSlot) iconSlot.innerHTML = sunSvg;
      if (mobileIconSlot) mobileIconSlot.innerHTML = sunSvg;
    }
  }

  toggleTheme() {
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  // --- Language Management (Bilingual RTL/LTR) ---
  applyLang(lang) {
    this.lang = lang;
    localStorage.setItem('novascale_lang', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
      langBtnText.textContent = lang === 'en' ? 'عربي' : 'English';
    }

    const emailInput = document.getElementById('lead-email-input');
    if (emailInput) {
      emailInput.placeholder = lang === 'ar' 
        ? 'أدخل بريدك الإلكتروني للعمل (مثال: sayed@company.com)' 
        : 'Enter your work email (e.g. alex@company.com)';
    }

    const faqInput = document.getElementById('faq-search-input');
    if (faqInput) {
      faqInput.placeholder = lang === 'ar'
        ? 'ابحث في الأسئلة (مثل: النقل، الأمان، التجربة، التسعير)...'
        : 'Search questions (e.g. migration, security, pricing)...';
    }

    // Recalculate ROI texts
    this.calculateRoi();
  }

  toggleLang() {
    const nextLang = this.lang === 'en' ? 'ar' : 'en';
    this.applyLang(nextLang);
  }

  // --- Navigation & Mobile Drawer ---
  setupNavigation() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    themeBtn?.addEventListener('click', () => this.toggleTheme());

    const mobileThemeBtn = document.getElementById('mobile-taskbar-theme-btn');
    mobileThemeBtn?.addEventListener('click', () => this.toggleTheme());

    const langBtn = document.getElementById('lang-toggle-btn');
    langBtn?.addEventListener('click', () => this.toggleLang());

    const mobileMenuBtn = document.getElementById('btn-mobile-menu');
    const drawerOverlay = document.getElementById('mobile-drawer-overlay');
    const closeDrawerBtn = document.getElementById('btn-close-drawer');

    const openDrawer = () => {
      drawerOverlay?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawerOverlay?.classList.add('hidden');
      document.body.style.overflow = '';
    };

    mobileMenuBtn?.addEventListener('click', openDrawer);
    closeDrawerBtn?.addEventListener('click', closeDrawer);
    drawerOverlay?.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // --- Interactive Dashboard Preview Tabs ---
  setupDashboardPreviewTabs() {
    const tabs = document.querySelectorAll('.dash-tab');
    const panels = {
      mesh: document.getElementById('tab-content-mesh'),
      pipelines: document.getElementById('tab-content-pipelines'),
      security: document.getElementById('tab-content-security'),
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('bg-indigo-600', 'text-white');
          t.classList.add('text-slate-400');
        });
        tab.classList.add('bg-indigo-600', 'text-white');
        tab.classList.remove('text-slate-400');

        const selected = tab.dataset.tab;
        Object.keys(panels).forEach((key) => {
          if (panels[key]) {
            if (key === selected) {
              panels[key].classList.remove('hidden');
            } else {
              panels[key].classList.add('hidden');
            }
          }
        });
      });
    });
  }

  // --- Interactive Bento Grid Micro-Widgets ---
  setupInteractiveFeatureSliders() {
    // 1. Latency slider
    const latSlider = document.getElementById('slider-latency');
    const latVal = document.getElementById('feat-latency-val');
    if (latSlider && latVal) {
      latSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        const simulatedMs = (val * 0.7 + 3.2).toFixed(1);
        latVal.textContent = `${simulatedMs} ms`;
      });
    }

    // 2. Shield Lock toggle
    const shieldBtn = document.getElementById('btn-toggle-shield');
    if (shieldBtn) {
      shieldBtn.addEventListener('click', () => {
        this.isShieldActive = !this.isShieldActive;
        if (this.isShieldActive) {
          shieldBtn.className = 'px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 active:scale-95 transition-all';
          shieldBtn.textContent = 'ENCRYPTED (256-BIT)';
        } else {
          shieldBtn.className = 'px-3 py-1 rounded-full text-xs font-bold font-mono bg-purple-500/20 border border-purple-500/30 text-purple-300 active:scale-95 transition-all';
          shieldBtn.textContent = 'QUANTUM-LOCKED (mTLS)';
        }
      });
    }
  }

  // --- Live Terminal Log Streamer ---
  setupLiveLogStreamer() {
    const box = document.getElementById('live-terminal-box');
    if (!box) return;

    const mockMessages = [
      { tag: '[MESH]', color: 'text-indigo-400', text: 'Health check passed across 142 Edge PoPs.' },
      { tag: '[AUTONOMOUS]', color: 'text-emerald-400', text: 'Database query cache warmed up (99.1% hit rate).' },
      { tag: '[K8S]', color: 'text-sky-300', text: 'Replica scaled in EU-Frankfurt cluster (+2 pods).' },
      { tag: '[FINOPS]', color: 'text-amber-400', text: 'Reclaimed unattached volume snapshot ($120/mo savings).' },
      { tag: '[SEC]', color: 'text-purple-400', text: 'Rotating ephemeral token key: 0x8f...42c1.' },
    ];

    let idx = 0;
    this.logInterval = setInterval(() => {
      const msg = mockMessages[idx % mockMessages.length];
      idx++;
      const row = document.createElement('div');
      row.className = 'animate-fade-in flex items-center gap-1.5';
      row.innerHTML = `<span class="${msg.color} font-bold">${msg.tag}</span> <span class="text-slate-300">${msg.text}</span>`;
      box.appendChild(row);
      if (box.children.length > 8) {
        box.removeChild(box.firstChild);
      }
      box.scrollTop = box.scrollHeight;
    }, 3200);
  }

  // --- Interactive ROI Calculator ---
  setupRoiCalculator() {
    const teamSlider = document.getElementById('input-team-size');
    const cloudSlider = document.getElementById('input-cloud-spend');

    const updateCalc = () => this.calculateRoi();

    teamSlider?.addEventListener('input', updateCalc);
    cloudSlider?.addEventListener('input', updateCalc);

    this.calculateRoi();
  }

  calculateRoi() {
    const teamSlider = document.getElementById('input-team-size');
    const cloudSlider = document.getElementById('input-cloud-spend');
    const teamLabel = document.getElementById('label-team-size');
    const cloudLabel = document.getElementById('label-cloud-spend');
    const dollarOutput = document.getElementById('result-dollar-savings');
    const hoursOutput = document.getElementById('result-hours-saved');
    const paybackOutput = document.getElementById('result-payback-time');

    if (!teamSlider || !cloudSlider) return;

    const teamSize = parseInt(teamSlider.value, 10);
    const cloudSpend = parseInt(cloudSlider.value, 10);

    // Labels update
    const devUnit = this.lang === 'ar' ? 'مهندس' : 'Devs';
    const monthUnit = this.lang === 'ar' ? 'شهرياً' : '/ mo';
    if (teamLabel) teamLabel.textContent = `${teamSize} ${devUnit}`;
    if (cloudLabel) cloudLabel.textContent = `$${cloudSpend.toLocaleString()} ${monthUnit}`;

    // Financial formulas
    const estimatedSavings = Math.round(cloudSpend * 0.385);
    const reclaimedHours = Math.round(teamSize * 5.8);
    const paybackWeeks = teamSize > 50 ? '< 2 Weeks' : '< 3 Weeks';

    if (dollarOutput) dollarOutput.textContent = `$${estimatedSavings.toLocaleString()}`;
    if (hoursOutput) {
      hoursOutput.textContent = this.lang === 'ar' ? `${reclaimedHours} ساعة` : `${reclaimedHours} hrs`;
    }
    if (paybackOutput) {
      paybackOutput.textContent = this.lang === 'ar' 
        ? (teamSize > 50 ? '< أسبوعين' : '< 3 أسابيع') 
        : paybackWeeks;
    }
  }

  // --- Pricing Monthly / Annual Toggle ---
  setupPricingToggle() {
    const monthlyBtn = document.getElementById('billing-monthly-btn');
    const annualBtn = document.getElementById('billing-annual-btn');
    const priceEls = document.querySelectorAll('.plan-price');
    const cycleEls = document.querySelectorAll('.plan-cycle');

    const setCycle = (cycle) => {
      this.billingCycle = cycle;

      if (cycle === 'annual') {
        monthlyBtn?.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        monthlyBtn?.classList.add('text-slate-600', 'dark:text-slate-300');

        annualBtn?.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
        annualBtn?.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        annualBtn?.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        annualBtn?.classList.add('text-slate-600', 'dark:text-slate-300');

        monthlyBtn?.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
        monthlyBtn?.classList.remove('text-slate-600', 'dark:text-slate-300');
      }

      priceEls.forEach((el) => {
        const p = cycle === 'annual' ? el.dataset.annual : el.dataset.monthly;
        el.textContent = `$${p}`;
      });

      cycleEls.forEach((el) => {
        el.textContent = cycle === 'annual' 
          ? (this.lang === 'ar' ? '/ شهر (فاتورة سنوية)' : '/ month (billed yearly)') 
          : (this.lang === 'ar' ? '/ شهر' : '/ month');
      });
    };

    monthlyBtn?.addEventListener('click', () => setCycle('monthly'));
    annualBtn?.addEventListener('click', () => setCycle('annual'));
  }

  // --- Testimonials Filter ---
  setupTestimonialsFilter() {
    const filterBtns = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.testimonial-card');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('bg-indigo-600', 'text-white');
          b.classList.add('text-slate-600', 'dark:text-slate-300', 'bg-slate-100', 'dark:bg-white/[0.04]');
        });

        btn.classList.add('bg-indigo-600', 'text-white');
        btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'bg-slate-100', 'dark:bg-white/[0.04]');

        const filter = btn.dataset.filter;

        cards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
            card.classList.add('animate-pop-in');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // --- FAQ Accordion & Instant Search Filter ---
  setupFaqAccordionAndSearch() {
    const items = document.querySelectorAll('.faq-item');
    const searchInput = document.getElementById('faq-search-input');

    // Accordion expand/collapse
    items.forEach((item) => {
      const btn = item.querySelector('.faq-question');
      const ans = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');

      btn?.addEventListener('click', () => {
        const isOpen = !ans.classList.contains('hidden');

        // Close other items
        items.forEach((other) => {
          other.querySelector('.faq-answer')?.classList.add('hidden');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '＋';
        });

        if (!isOpen) {
          ans.classList.remove('hidden');
          ans.classList.add('animate-fade-in');
          btn.setAttribute('aria-expanded', 'true');
          if (icon) icon.textContent = '－';
        } else {
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Instant Search
    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();

      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        const kw = (item.dataset.keywords || '').toLowerCase();

        if (!q || text.includes(q) || kw.includes(q)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  }

  // --- Interactive Demo Video Modal ---
  setupDemoModal() {
    const demoBtn = document.getElementById('btn-watch-demo');
    const modal = document.getElementById('demo-modal');
    const closeBtn = document.getElementById('btn-close-demo-modal');
    const actionTrialBtn = document.getElementById('btn-modal-action-trial');

    const openModal = () => {
      modal?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal?.classList.add('hidden');
      document.body.style.overflow = '';
    };

    demoBtn?.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);
    actionTrialBtn?.addEventListener('click', () => {
      closeModal();
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal?.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // --- Lead Capture & Toast Feedback ---
  setupLeadCapture() {
    const form = document.getElementById('lead-capture-form');
    const emailInput = document.getElementById('lead-email-input');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput?.value.trim();

      if (!email || !email.includes('@')) {
        this.showToast('Please enter a valid work email.', 'error');
        return;
      }

      // Success
      const dict = I18N[this.lang] || I18N.en;
      this.showToast(dict.toastSuccessTitle, 'success', dict.toastSuccessMsg);
      if (emailInput) emailInput.value = '';
    });
  }

  showToast(title, type = 'info', message = '') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-[99999] px-4 py-3 rounded-2xl border text-xs sm:text-sm font-bold shadow-2xl backdrop-blur-xl animate-fade-in flex items-center gap-3 ${
      type === 'success'
        ? 'bg-emerald-950/95 border-emerald-500/40 text-emerald-300'
        : type === 'error'
        ? 'bg-rose-950/95 border-rose-500/40 text-rose-300'
        : 'bg-[#131622]/95 border-white/[0.12] text-white'
    }`;

    toast.innerHTML = `
      <span class="text-base">${type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ'}</span>
      <div>
        <div class="font-bold text-white">${title}</div>
        ${message ? `<div class="text-[11px] font-normal text-slate-300 mt-0.5">${message}</div>` : ''}
      </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'transition-opacity');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- Scroll Progress, Navbar Elevation & ScrollSpy ---
  setupScrollProgressAndHeader() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const headerNav = document.querySelector('header .floating-nav');
    const backBtn = document.getElementById('btn-back-to-top');
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('main > section, #interactive-preview');

    const handleScroll = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      // 1. Top Scroll Progress Bar (0-100%)
      if (progressBar) {
        progressBar.style.width = `${Math.min(Math.max(scrolled, 0), 100)}%`;
      }

      // 2. Floating Navbar dynamic elevation & glow
      if (headerNav) {
        if (winScroll > 20) {
          headerNav.classList.add('is-scrolled');
        } else {
          headerNav.classList.remove('is-scrolled');
        }
      }

      // 3. Back to Top Button
      if (backBtn) {
        if (winScroll > 400) {
          backBtn.classList.remove('hidden');
          backBtn.classList.add('flex');
        } else {
          backBtn.classList.add('hidden');
          backBtn.classList.remove('flex');
        }
      }

      // 4. ScrollSpy Active Link Indicator
      let currentSectionId = '';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 150;
        const secHeight = sec.offsetHeight;
        if (winScroll >= top && winScroll < top + secHeight) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('text-cyan-500', 'dark:text-white', 'bg-black/5', 'dark:bg-white/[0.08]');
            link.classList.remove('text-slate-600', 'dark:text-slate-300');
          } else {
            link.classList.remove('text-cyan-500', 'dark:text-white', 'bg-black/5', 'dark:bg-white/[0.08]');
            link.classList.add('text-slate-600', 'dark:text-slate-300');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    backBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll Reveal Animations Observer ---
  setupScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (!revealEls.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealEls.forEach((el) => observer.observe(el));
  }

  // --- Custom Magnetic Cursor System (GPU Accelerated) ---
  initCustomCursorAndMagnetics() {
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

    const updateScales = () => {
      if (isPressed) {
        dotScale = 0.6;
        ringScale = 0.85;
      } else if (isHovered) {
        dotScale = 1.4;
        ringScale = 1;
      } else {
        dotScale = 1;
        ringScale = 1;
      }
    };

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

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Magnetic physics on key action buttons
    const magneticSelector = '.btn-primary, .btn-secondary, #btn-watch-demo, #theme-toggle-btn, #lang-toggle-btn, #btn-nav-trial, #btn-modal-action-trial, #billing-monthly-btn, #billing-annual-btn, .filter-tab, .dash-tab, #btn-toggle-shield';
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
        const pullFactor = 0.32;
        target.style.transform = `translate3d(${deltaX * pullFactor}px, ${deltaY * pullFactor}px, 0)`;
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
            target.style.willChange = 'auto';
          }
        }, 450);
      });
    });

    const clickables = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    clickables.forEach((el) => {
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

  // --- 60 FPS Living Quantum Background Canvas with Scroll Parallax ---
  initLivingBackgroundCanvas() {
    const canvas = document.getElementById('quantum-bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let mouse = { x: -1000, y: -1000, active: false };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Particle pool with layer depth
    const count = Math.min(Math.floor((width * height) / 20000), 52);
    const particles = [];
    const colorPalettes = {
      dark: [
        'rgba(6, 182, 212, ',   // Cyan
        'rgba(99, 102, 241, ',  // Indigo
        'rgba(168, 85, 247, ',  // Purple
        'rgba(56, 189, 248, '   // Sky
      ],
      light: [
        'rgba(2, 132, 199, ',   // Sky
        'rgba(79, 70, 229, ',   // Indigo
        'rgba(147, 51, 234, ',  // Purple
        'rgba(14, 165, 233, '   // Cyan
      ]
    };

    for (let i = 0; i < count; i++) {
      const layer = 0.4 + Math.random() * 0.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32 * layer,
        vy: (Math.random() - 0.5) * 0.32 * layer,
        radius: (1.2 + Math.random() * 1.8) * layer,
        baseAlpha: 0.25 + Math.random() * 0.45,
        colorIndex: Math.floor(Math.random() * 4),
        layer: layer
      });
    }

    // Deep scroll parallax shift
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      particles.forEach((p) => {
        p.y -= scrollDelta * p.layer * 0.14;
        if (p.y < -25) p.y = height + 25;
        if (p.y > height + 25) p.y = -25;
      });
    }, { passive: true });

    let isRunning = true;
    document.addEventListener('visibilitychange', () => {
      isRunning = !document.hidden;
      if (isRunning) requestAnimationFrame(draw);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark') || !document.documentElement.classList.contains('light');
      const activePalette = isDark ? colorPalettes.dark : colorPalettes.light;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130 && dist > 0) {
              const force = (130 - dist) / 130;
              p.x += (dx / dist) * force * 1.4;
              p.y += (dy / dist) * force * 1.4;
            }
          }
        }

        const colorPrefix = activePalette[p.colorIndex];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorPrefix + (isDark ? p.baseAlpha : p.baseAlpha * 0.65) + ')';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * (isDark ? 0.16 : 0.1);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colorPrefix + lineAlpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * (isDark ? 0.32 : 0.2);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  }
}

// Resilient Bootloader: starts immediately regardless of when script is loaded
function bootNovaScale() {
  if (!window.novaScaleApp) {
    window.novaScaleApp = new NovaScaleApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootNovaScale);
} else {
  bootNovaScale();
}
