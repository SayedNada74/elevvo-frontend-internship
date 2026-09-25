export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    tagline: string;
    features: string;
    metrics: string;
    pricing: string;
    testimonials: string;
    faq: string;
    getStarted: string;
    toggleTheme: string;
    toggleLang: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
    livePreview: {
      statusBadge: string;
      systemHealth: string;
      latency: string;
      throughput: string;
      deployTime: string;
      chartTitle: string;
      autoScale: string;
    };
  };
  metrics: {
    stat1Value: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Value: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Value: string;
    stat3Label: string;
    stat3Desc: string;
    stat4Value: string;
    stat4Label: string;
    stat4Desc: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1: {
      tag: string;
      title: string;
      description: string;
    };
    card2: {
      tag: string;
      title: string;
      description: string;
    };
    card3: {
      tag: string;
      title: string;
      description: string;
    };
    card4: {
      tag: string;
      title: string;
      description: string;
    };
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    monthly: string;
    annual: string;
    annualDiscount: string;
    perMonth: string;
    starter: {
      name: string;
      desc: string;
      priceMonthly: number;
      priceAnnual: number;
      cta: string;
      features: string[];
    };
    pro: {
      name: string;
      popularBadge: string;
      desc: string;
      priceMonthly: number;
      priceAnnual: number;
      cta: string;
      features: string[];
    };
    enterprise: {
      name: string;
      desc: string;
      priceMonthly: number;
      priceAnnual: number;
      cta: string;
      features: string[];
    };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    reviews: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
      rating: number;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    description: string;
    placeholder: string;
    button: string;
    securityNote: string;
  };
  footer: {
    rights: string;
    builtFor: string;
    product: string;
    resources: string;
    company: string;
    links: {
      docs: string;
      changelog: string;
      roadmap: string;
      security: string;
      privacy: string;
      terms: string;
      contact: string;
    };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    meta: {
      title: 'NexusFlow — High-Performance Cloud Edge Architecture',
      description: 'Deploy, orchestrate, and scale mission-critical cloud applications with sub-10ms global edge latency and 100/100 Core Web Vitals.'
    },
    nav: {
      brand: 'NexusFlow',
      tagline: 'Edge Orchestration',
      features: 'Features',
      metrics: 'Architecture',
      pricing: 'Pricing',
      testimonials: 'Customers',
      faq: 'FAQ',
      getStarted: 'Deploy Now',
      toggleTheme: 'Toggle theme mode',
      toggleLang: 'عربي'
    },
    hero: {
      badge: 'NexusFlow Engine 4.0 Released',
      titlePart1: 'Orchestrate Cloud Workloads with',
      titleHighlight: 'Zero Latency',
      titlePart2: 'at Global Scale',
      subtitle: 'The autonomous edge runtime engineered for high-throughput microservices, realtime AI inference, and ultra-reliable cloud infrastructures.',
      ctaPrimary: 'Start Free Deployment',
      ctaSecondary: 'Read Architecture Specs',
      trustText: 'Trusted by engineering teams across 80+ countries',
      livePreview: {
        statusBadge: 'All 34 Edge Nodes Operational',
        systemHealth: 'Global Edge Health',
        latency: '8.4 ms Avg Latency',
        throughput: '1.2M Req / Sec',
        deployTime: '0.4s Instant Cold Start',
        chartTitle: 'Realtime Distributed Traffic',
        autoScale: 'Auto-balanced across 12 regions'
      }
    },
    metrics: {
      stat1Value: '99.999%',
      stat1Label: 'Guaranteed Uptime',
      stat1Desc: 'Zero downtime rolling edge deployments worldwide',
      stat2Value: '< 9ms',
      stat2Label: 'Global Latency',
      stat2Desc: 'Direct fiber routing to 320+ tier-1 PoPs',
      stat3Value: '10x',
      stat3Label: 'Throughput Density',
      stat3Desc: 'Optimized Rust & WebAssembly runtime stack',
      stat4Value: '500k+',
      stat4Label: 'Active Workloads',
      stat4Desc: 'Powering fintech, healthtech, and AI leaders'
    },
    features: {
      eyebrow: 'Architectural Capabilities',
      title: 'Engineered for Performance Without Compromise',
      subtitle: 'Experience an intelligent edge fabric that autonomously compiles, optimizes, and routes user requests at lightspeed.',
      card1: {
        tag: 'Distributed Edge',
        title: 'Instant Global Anycast Routing',
        description: 'Every request is terminated at the closest edge server in under 10 milliseconds, slashing network hops and database roundtrips.'
      },
      card2: {
        tag: 'Next-Gen AI',
        title: 'Zero Cold-Start WASM Compute',
        description: 'Sub-millisecond cold starts powered by lightweight WebAssembly sandboxes, allowing micro-functions to spin up instantaneously on demand.'
      },
      card3: {
        tag: 'Resilience',
        title: 'Automated Failover & Healing',
        description: 'Multi-region mesh redundancy automatically re-routes traffic in real-time if a cloud provider or datacenter suffers an outage.'
      },
      card4: {
        tag: 'Observability',
        title: 'Continuous Real-Time Telemetry',
        description: 'Live distributed tracing, memory inspection, and granular p99 response telemetry directly in your dashboard with zero overhead.'
      }
    },
    pricing: {
      eyebrow: 'Transparent Pricing',
      title: 'Simple, Predictable Cloud Economics',
      subtitle: 'Choose the tier that matches your deployment scale. Switch plans anytime or start with our generous developer sandbox.',
      monthly: 'Monthly Billing',
      annual: 'Annual Billing',
      annualDiscount: 'Save 20%',
      perMonth: '/ month',
      starter: {
        name: 'Developer Sandbox',
        desc: 'Perfect for prototyping, side projects, and indie founders.',
        priceMonthly: 0,
        priceAnnual: 0,
        cta: 'Deploy for Free',
        features: [
          'Up to 100,000 edge invocations / mo',
          '5 global edge regions',
          'Automated SSL & DDoS mitigation',
          'Community Discord & Forum support'
        ]
      },
      pro: {
        name: 'Growth Scale',
        popularBadge: 'Most Popular',
        desc: 'For high-velocity startups and scaling production products.',
        priceMonthly: 49,
        priceAnnual: 39,
        cta: 'Start 14-Day Pro Trial',
        features: [
          '5,000,000 edge invocations included',
          '34 global edge regions with Anycast',
          'Instant custom domain routing & WAF',
          'Dedicated Redis edge cache & kv store',
          'Priority email & Slack support (2hr SLA)'
        ]
      },
      enterprise: {
        name: 'Enterprise Dedicated',
        desc: 'For mission-critical enterprises requiring dedicated VPCs and compliance.',
        priceMonthly: 199,
        priceAnnual: 159,
        cta: 'Contact Enterprise Architect',
        features: [
          'Unlimited edge invocations & bandwidth',
          'Custom edge PoP hardware provisioning',
          'SOC2 Type II, HIPAA, & ISO27001 compliant',
          'Dedicated Solutions Architect & 15m SLA',
          'Custom billing, invoicing, and contract'
        ]
      }
    },
    testimonials: {
      eyebrow: 'Customer Stories',
      title: 'Loved by Architects & Developers Worldwide',
      subtitle: 'See how engineering teams achieve 100/100 Lighthouse performance and slash cloud infrastructure bills with NexusFlow.',
      reviews: [
        {
          quote: 'NexusFlow reduced our global API latency from 240ms to under 12ms. Our Google Lighthouse score jumped straight to 100 on every production deployment.',
          author: 'Sarah Jenkins',
          role: 'VP of Platform Engineering',
          company: 'HyperScale AI',
          rating: 5
        },
        {
          quote: 'The instant failover and WebAssembly cold starts allowed our team to handle 10x traffic spikes during Black Friday without touching a single server setting.',
          author: 'Marcus Vance',
          role: 'Principal Cloud Architect',
          company: 'FinPulse Systems',
          rating: 5
        },
        {
          quote: 'Migrating to NexusFlow cut our AWS bills by 45% while delivering the fastest dashboard response times our enterprise clients have ever experienced.',
          author: 'Elena Rostova',
          role: 'Head of Infrastructure',
          company: 'Krypton Labs',
          rating: 5
        }
      ]
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Everything You Need to Know',
      subtitle: 'Have questions about edge compute, migration, or pricing? Find clear answers below.',
      items: [
        {
          q: 'How does NexusFlow achieve sub-10ms global edge latency?',
          a: 'We operate 34 tier-1 Anycast points of presence globally. Requests are automatically terminated at the nearest geographic data center, where our pre-compiled Rust and WASM runtime executes your logic without container cold-start penalties.'
        },
        {
          q: 'Can I integrate NexusFlow with my existing Next.js and React stack?',
          a: 'Yes! NexusFlow seamlessly deploys Next.js App Router applications, static sites, serverless functions, and microservices with zero config changes via our CLI or GitHub integration.'
        },
        {
          q: 'What happens if our traffic spikes unexpectedly?',
          a: 'NexusFlow utilizes elastic autonomous autoscaling. New micro-sandboxes spin up in less than 400 microseconds to absorb unlimited concurrent spikes without throttling or 504 gateway timeouts.'
        },
        {
          q: 'Is there a free tier available for personal projects?',
          a: 'Absolutely. The Developer Sandbox is completely free forever and includes 100,000 monthly edge requests, free SSL, and continuous deployment from Git.'
        }
      ]
    },
    ctaBanner: {
      eyebrow: 'Ready for Next-Gen Speed?',
      title: 'Elevate Your Cloud Performance Today',
      description: 'Join over 50,000 developers building lightning-fast, resilient applications on the NexusFlow Edge Network.',
      placeholder: 'Enter your work email address...',
      button: 'Claim Free Access',
      securityNote: 'No credit card required • Instant 60-second setup • SOC2 Certified'
    },
    footer: {
      rights: 'All rights reserved.',
      builtFor: 'Elevvo Frontend Internship • Task 09: Next.js Performance Landing',
      product: 'Product & Engine',
      resources: 'Developers',
      company: 'Company',
      links: {
        docs: 'Documentation',
        changelog: 'Changelog',
        roadmap: 'Roadmap',
        security: 'Security & Trust',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Engineering'
      }
    }
  },
  ar: {
    meta: {
      title: 'NexusFlow — بنية السحابة الطرفية فائقة الأداء والسرعة',
      description: 'انشر وادر تطبيقاتك السحابية الحساسة بزمن استجابة أقل من 10 مللي ثانية وأداء 100/100 في مؤشرات الويب الأساسية.'
    },
    nav: {
      brand: 'NexusFlow',
      tagline: 'الأداء الطرفي السحابي',
      features: 'الميزات',
      metrics: 'المعمارية',
      pricing: 'الأسعار',
      testimonials: 'العملاء',
      faq: 'الأسئلة الشائعة',
      getStarted: 'ابدأ النشر الآن',
      toggleTheme: 'تبديل وضع المظهر',
      toggleLang: 'English'
    },
    hero: {
      badge: 'إطلاق محرك NexusFlow 4.0 رسمياً',
      titlePart1: 'أدِر أعباء السحابة باحترافية مع',
      titleHighlight: 'انعدام التأخير',
      titlePart2: 'على مستوى العالم',
      subtitle: 'بيئة التشغيل الطرفية الذكية المصممة للخدمات المصغرة فائقة السرعة، استدلال الذكاء الاصطناعي الفوري، والبنى التحتية السحابية الموثوقة.',
      ctaPrimary: 'ابدأ النشر المجاني',
      ctaSecondary: 'استكشف مواصفات المعمارية',
      trustText: 'موثوق به من قِبل فِرق هندسية في أكثر من 80 دولة',
      livePreview: {
        statusBadge: 'جميع العقد الطرفية الـ 34 تعمل بكفاءة 100%',
        systemHealth: 'صحة الشبكة الطرفية العالمية',
        latency: '8.4 مللي ثانية متوسط التأخير',
        throughput: '1.2 مليون طلب / ثانية',
        deployTime: '0.4 ثانية تشغيل فوري بدون انتظار',
        chartTitle: 'حركة البيانات الموزعة الحية',
        autoScale: 'موزعة ذاتياً عبر 12 منطقة عالمية'
      }
    },
    metrics: {
      stat1Value: '99.999%',
      stat1Label: 'جاهزية مضمونة SLA',
      stat1Desc: 'تحديثات طرفية متواصلة بدون أي توقف عن العمل',
      stat2Value: '< 9ms',
      stat2Label: 'زمن استجابة فائق',
      stat2Desc: 'توجيه مباشر عبر شبكات الألياف إلى 320+ نقطة اتصال',
      stat3Value: '10x',
      stat3Label: 'كثافة وسرعة المعالجة',
      stat3Desc: 'مبني بأحدث تقنيات Rust و WebAssembly',
      stat4Value: '+500k',
      stat4Label: 'خدمة نشطة وسريعة',
      stat4Desc: 'يدعم رواد التقنية المالية والرعاية الصحية والذكاء الاصطناعي'
    },
    features: {
      eyebrow: 'القدرات المعمارية',
      title: 'أداء هندسي فائق السرعة بدون أي تنازلات',
      subtitle: 'اختبر نسيجاً سحابياً ذكياً يقوم بترجمة وتحسين وتوجيه طلبات مستخدميك بسرعة الضوء وأعلى معايير الأمان.',
      card1: {
        tag: 'سحابة طرفية موزعة',
        title: 'توجيه Anycast الجغرافي الفوري',
        description: 'يتم الرد على كل طلب من أقرب خادم طرفي للمستخدم في أقل من 10 مللي ثانية، مما يلغي تماماً قفزات الشبكة والتأخير.'
      },
      card2: {
        tag: 'ذكاء اصطناعي حديث',
        title: 'معالجة فورية بدون تأخير البدء',
        description: 'بدء تشغيل في أجزاء من المللي ثانية بفضل حاويات WebAssembly الخفيفة، مما يسمح بتشغيل الوظائف البرمجية فوراً.'
      },
      card3: {
        tag: 'موثوقية فائقة',
        title: 'استرداد تلقائي وحماية من الأعطال',
        description: 'شبكة أمان موزعة متعددة المناطق تقوم بإعادة توجيه حركة المرور تلقائياً في حال واجه أي مركز بيانات انقطاعاً.'
      },
      card4: {
        tag: 'رصد فوري',
        title: 'قياسات وتحليلات دقيقة بلحظتها',
        description: 'تتبع شامل لتوزيع الطلبات واستهلاك الذاكرة واستجابة p99 مباشرة على لوحة التحكم بأقل استهلاك ممكن للموارد.'
      }
    },
    pricing: {
      eyebrow: 'أسعار واضحة وشفافة',
      title: 'خطط اقتصادية وبسيطة تناسب طموحك',
      subtitle: 'اختر الباقة المناسبة لحجم ونمو مشروعك. يمكنك تغيير خطتك في أي وقت أو البدء مجاناً في باقة المطورين.',
      monthly: 'دفع شهري',
      annual: 'دفع سنوي',
      annualDiscount: 'وفر 20%',
      perMonth: '/ شهرياً',
      starter: {
        name: 'مساحة المطورين',
        desc: 'مثالية للنماذج الأولية، المشاريع الفردية، ومشاريع البورتفوليو.',
        priceMonthly: 0,
        priceAnnual: 0,
        cta: 'ابدأ مجاناً الآن',
        features: [
          'حتى 100,000 استدعاء سحابي شهرياً',
          '5 مناطق طرفية عالمية',
          'شهادات SSL وحماية DDoS مجاناً',
          'دعم مجتمعي عبر Discord والمنتدى'
        ]
      },
      pro: {
        name: 'النمو والإنتاج (Pro)',
        popularBadge: 'الأكثر اختياراً',
        desc: 'للشركات الناشئة سريعة النمو والمنتجات التقنية المتقدمة.',
        priceMonthly: 49,
        priceAnnual: 39,
        cta: 'ابدأ تجربة Pro مجاناً 14 يوماً',
        features: [
          '5,000,000 استدعاء سحابي متضمن',
          '34 منطقة طرفية عالمية مع Anycast',
          'ربط دومينات مخصصة وجدار ناري WAF',
          'ذاكرة تخزين Redis طرفية سريعة',
          'دعم ذو أولوية عبر البريد و Slack (رد خلال ساعتين)'
        ]
      },
      enterprise: {
        name: 'المؤسسات الكبرى (Enterprise)',
        desc: 'للشركات والمؤسسات الحساسة التي تتطلب حماية مخصصة وشبكات VPC خاصة.',
        priceMonthly: 199,
        priceAnnual: 159,
        cta: 'تواصل مع مهندس الحلول',
        features: [
          'استدعاءات وحزم بيانات غير محدودة',
          'أجهزة وبنية طرفية مخصصة بالكامل',
          'متوافق مع معايير SOC2 Type II و HIPAA و ISO',
          'مهندس حلول مخصص واتفاقية SLA (15 دقيقة)',
          'عقود مخصصة وفواتير مؤسسية مرنة'
        ]
      }
    },
    testimonials: {
      eyebrow: 'قصص نجاح العملاء',
      title: 'يحبه المهندسون والمطورون حول العالم',
      subtitle: 'تعرف على كيفية تحقيق فِرق العمل لأداء 100/100 على Lighthouse وخفض تكاليف الخوادم مع NexusFlow.',
      reviews: [
        {
          quote: 'قللت NexusFlow زمن استجابة الـ API لدينا من 240ms إلى أقل من 12ms. ووصلت نتائجنا على Google Lighthouse إلى 100/100 مباشرة.',
          author: 'سارة جنكينز',
          role: 'نائب رئيس هندسة المنصات',
          company: 'HyperScale AI',
          rating: 5
        },
        {
          quote: 'سمحت لنا معمارية WebAssembly بالتعامل مع قفزات مرورية بمقدار 10 أضعاف خلال موسم التسوق دون الحاجة لتعديل أي إعداد خادم.',
          author: 'ماركوس فانس',
          role: 'كبير مهندسي السحابة',
          company: 'FinPulse Systems',
          rating: 5
        },
        {
          quote: 'الانتقال إلى NexusFlow وفّر 45% من تكاليف السحابة مع تقديم أسرع تجربة تصفح لعملائنا في القطاع المالي.',
          author: 'إيلينا روستوفا',
          role: 'رئيسة البنية التحتية',
          company: 'Krypton Labs',
          rating: 5
        }
      ]
    },
    faq: {
      eyebrow: 'الأسئلة الأكثر شيوعاً',
      title: 'كل ما تحتاج معرفته عن المنصة',
      subtitle: 'هل لديك استفسار حول المعمارية أو خطط الأسعار أو نقل مشاريعك؟ إليك الإجابات المباشرة.',
      items: [
        {
          q: 'كيف تحقق NexusFlow زمناً للاستجابة أقل من 10 مللي ثانية؟',
          a: 'ندير 34 نقطة وصول Anycast عالمية من الفئة الأولى. يتم إنهاء الطلبات في أقرب مركز بيانات جغرافياً للمستخدم، حيث يقوم محركنا المبني بـ Rust و WebAssembly بتنفيذ الشيفرة فوراً دون أي تأخير تشغيل للحاويات.'
        },
        {
          q: 'هل يمكنني ربط المنصة بمشاريع Next.js و React الحالية؟',
          a: 'نعم بالتأكيد! تدعم المنصة تطبيقات Next.js App Router والمواقع الثابتة والـ Microservices بسهولة تامة عبر الـ CLI أو الربط التلقائي مع GitHub.'
        },
        {
          q: 'ماذا يحدث إذا تضاعفت زيارات موقعنا فجأة؟',
          a: 'تعتمد NexusFlow على التوسع الذاتي المرن (Autoscaling). يتم تشغيل حاويات مصغرة جديدة في أقل من 400 ميكروثانية لامتصاص الضغط العالي دون أي بطء أو أخطاء 504.'
        },
        {
          q: 'هل يتوفر حساب مجاني لتجربة المشاريع الشخصية؟',
          a: 'نعم، مساحة المطورين (Developer Sandbox) مجانية تماماً وبشكل دائم، وتشمل 100,000 استدعاء شهرياً وشهادة SSL ونشر تلقائي من Git.'
        }
      ]
    },
    ctaBanner: {
      eyebrow: 'مستعد للأداء الأقصى؟',
      title: 'ارتقِ بأداء وسرعة تطبيقاتك السحابية اليوم',
      description: 'انضم إلى أكثر من 50,000 مطور ومهندس يبنون تطبيقات فائقة السرعة والموثوقية على شبكة NexusFlow.',
      placeholder: 'أدخل بريدك الإلكتروني للعمل...',
      button: 'احصل على وصول فوري',
      securityNote: 'لا يتطلب بطاقة ائتمان • إعداد فوري خلال 60 ثانية • معتمد أمنياً بـ SOC2'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      builtFor: 'تدريب Elevvo لتطوير الويب • تاسك 09: صفحة هبوط Next.js فائقة الأداء',
      product: 'المنتج والمحرك',
      resources: 'المطورون',
      company: 'الشركة',
      links: {
        docs: 'التوثيق البرمجي',
        changelog: 'سجل التحديثات',
        roadmap: 'خارطة الطريق',
        security: 'الأمان والامتثال',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        contact: 'فريق الهندسة'
      }
    }
  }
};
