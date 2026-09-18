/**
 * BYTECRAFT CHRONICLE — Enterprise Personal Tech Blog Engine
 * Author: Sayed Nada | Principal Frontend Architect
 * Features: Live Multi-Faceted Search, Category Filtering, Sorting, Dynamic Pagination,
 *           Reading Bookmarks Drawer, Full Modal Article Reader, Theme & i18n Systems.
 */

(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. STORAGE KEYS & INITIAL STATE
  // ---------------------------------------------------------------------------
  const STORAGE_KEYS = {
    THEME: 'bytecraft_theme',
    LANG: 'bytecraft_lang',
    BOOKMARKS: 'bytecraft_bookmarks',
    LIKES: 'bytecraft_likes',
    LAYOUT: 'bytecraft_layout'
  };

  const state = {
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'en',
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'latest',
    viewLayout: localStorage.getItem(STORAGE_KEYS.LAYOUT) || 'grid',
    currentPage: 1,
    itemsPerPage: 6,
    bookmarks: JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]'),
    likes: JSON.parse(localStorage.getItem(STORAGE_KEYS.LIKES) || '[]'),
    activeArticleId: null,
    modalFontSizeStep: 0, // -1, 0, 1, 2
    isBookmarksOpen: false,
    isModalOpen: false
  };

  // ---------------------------------------------------------------------------
  // 2. PRODUCTION ARTICLES DATASET (Authentic Technical Deep Dives)
  // ---------------------------------------------------------------------------
  const articles = [
  {
    "id": 1,
    "category": "projects",
    "readTimeMin": 7,
    "reads": "14.2k",
    "likes": 1840,
    "dateEn": "Sep 08, 2026",
    "dateAr": "٨ سبتمبر ٢٠٢٦",
    "readTimeEn": "7 min read",
    "readTimeAr": "٧ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#Projects",
      "#TaskFlow",
      "#Elevvo",
      "#CSS",
      "#JavaScript"
    ],
    "titleEn": "Inside TaskFlow: How I Built a High-Performance SaaS Landing Page with a Glass Capsule Nav & Magnetic Cursor",
    "titleAr": "كواليس بناء TaskFlow: كيف صممت صفحة هبوط SaaS سريعة بكبسولة هيدر زجاجية وماوس مغناطيسي",
    "excerptEn": "A detailed architectural walkthrough of my Task 3 submission in the Elevvo Internship. Discover how I engineered the floating glass navbar, 60 FPS scrollspy, custom cursor physics, and eliminated layout thrashing.",
    "excerptAr": "توثيق وتفاصيل معمارية لكواليس بناء التاسك الثالث في تدريب Elevvo. كيف صممت الهيدر الزجاجي العائم، شريط الـ Scrollspy الدقيق، فيزياء الماوس المغناطيسي، وحققت أقصى سرعة ممكنة.",
    "contentEn": "\n      <h2>The Challenge: Enterprise SaaS Polish from Scratch</h2>\n      <p>When tasked with building TaskFlow for Task 3 of the Elevvo Frontend Internship, the objective wasn't merely to assemble HTML and CSS. The goal was to build a product that feels like a multi-million-dollar SaaS landing page that instantly wows visitors.</p>\n\n      <h3>1. Floating Island Capsule Header & Viewport Scrollspy</h3>\n      <p>Instead of a standard rectangular sticky navbar, I engineered a detached capsule bar floating 14px from the top with <code>backdrop-filter: blur(20px)</code> and a dynamic PillNav indicator. Initially, standard <code>offsetTop</code> calculations struggled with dynamic layouts. I replaced this with an exact viewport threshold engine using <code>getBoundingClientRect().top &lt;= 180</code>, guaranteeing 100% reliable active section highlighting as the user scrolls.</p>\n\n      <div class=\"code-block-wrapper\">\n        <div class=\"code-header\"><span>JavaScript • Scrollspy Viewport Logic</span></div>\n        <pre><code>// Exact Viewport Detection Algorithm\nconst threshold = 180;\nlet activeId = 'hero';\nfor (let i = 0; i < cachedSections.length; i++) {\n  const item = cachedSections[i];\n  const rect = item.el.getBoundingClientRect();\n  if (rect.top <= threshold) {\n    activeId = item.id;\n  }\n}\nsetActiveNav(activeId);</code></pre>\n      </div>\n\n      <h3>2. GPU-Accelerated Magnetic Cursor Physics</h3>\n      <p>To provide high-end interactive tactile feedback, I designed a dual-element custom cursor (center glowing dot + fluid trailing lerp ring). To achieve buttery 120 FPS on high-refresh monitors without layout thrashing, coordinates are updated purely via <code>transform: translate3d(x, y, 0)</code> and cached bounding rectangles.</p>\n\n      <blockquote>\"Attention to micro-interactions and GPU compositing transforms a simple internship task into an enterprise-grade web experience.\"</blockquote>\n\n      <div class=\"key-takeaway-box\">\n        <div class=\"takeaway-title\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"20\" height=\"20\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n          <span>Key Lessons Learned</span>\n        </div>\n        <p>1. Decoupling scroll listeners with <code>requestAnimationFrame</code> preserves 60 FPS scrolling.<br/>\n           2. Caching element bounding rects on <code>mouseenter</code> eliminates hundreds of redundant calculations per second.<br/>\n           3. Designing bilingual RTL/LTR from day one with CSS logical properties saves massive refactoring time later.</p>\n      </div>\n    ",
    "contentAr": "\n      <h2>التحدي: بناء واجهة SaaS بمستوى احترافي مؤسسي</h2>\n      <p>عندما بدأت في تنفيذ مشروع TaskFlow للتاسك الثالث في مسار Elevvo، لم يكن الهدف مجرد كتابة كود HTML و CSS عادي، بل كان التحدي هو تقديم واجهة متكاملة تشبه منتجات الشركات العالمية وتترك انطباعاً مبهراً من اللحظة الأولى.</p>\n\n      <h3>١. كبسولة الهيدر الزجاجية العائمة ونظام الـ Scrollspy</h3>\n      <p>بدلاً من شريط التنقل التقليدي، صممت كبسولة زجاجية معلقة على مسافة 14px من أعلى الشاشة بتأثير البلور الزجاجي الفاخر. ولضمان دقة تحديد القسم النشط، قمت بتطوير خوارزمية تعتمد على <code>getBoundingClientRect().top &lt;= 180</code> لتعمل بكفاءة 100% بغض النظر عن حجم الشاشة أو اتجاه العرض.</p>\n\n      <div class=\"code-block-wrapper\">\n        <div class=\"code-header\"><span>JavaScript • خوارزمية تحديد القسم النشط بدقة</span></div>\n        <pre><code>// فحص دقيق لموقع العنصر بالنسبة لخط الرؤية\nconst threshold = 180;\nlet activeId = 'hero';\nfor (let i = 0; i < cachedSections.length; i++) {\n  const item = cachedSections[i];\n  const rect = item.el.getBoundingClientRect();\n  if (rect.top <= threshold) {\n    activeId = item.id;\n  }\n}\nsetActiveNav(activeId);</code></pre>\n      </div>\n\n      <h3>٢. فيزياء الماوس المغناطيسي المسرّع بكارت الشاشة (120 FPS)</h3>\n      <p>لإضفاء تجربة تفاعلية ناعمة، طوّرت مؤشر ماوس مخصص يتكون من نقطة نيون سريعة وحلقة تعقب انسيابية بحسابات Lerp الفيزيائية، مع جذب الأزرار مغناطيسياً نحو الماوس بدقة عالية وبدون أي تهنيج على المتصفح.</p>\n\n      <blockquote>\"الاهتمام بالتفاصيل الدقيقة والتحسين الرسومي هو الفارق الحقيقي بين موقع تدريبي عادي ومنتج برمجي احترافي.\"</blockquote>\n\n      <div class=\"key-takeaway-box\">\n        <div class=\"takeaway-title\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"20\" height=\"20\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n          <span>أهم الدروس المستفادة من المشروع</span>\n        </div>\n        <p>١. فصل أحداث التمرير عبر <code>requestAnimationFrame</code> يضمن سلاسة 60 إلى 120 فريم في الثانية.<br/>\n           ٢. تخزين إحداثيات الأزرار عند <code>mouseenter</code> يوفر مئات العمليات الحسابية في الثانية أثناء حركة الماوس.<br/>\n           ٣. التخطيط لدعم العربية والإنجليزية (RTL/LTR) من البداية يوفر وقتاً هائلاً في مرحلة التعديلات.</p>\n      </div>\n    "
  },
  {
    "id": 2,
    "category": "career",
    "readTimeMin": 8,
    "reads": "11.5k",
    "likes": 1420,
    "dateEn": "Aug 29, 2026",
    "dateAr": "٢٩ أغسطس ٢٠٢٦",
    "readTimeEn": "8 min read",
    "readTimeAr": "٨ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#Elevvo",
      "#Career",
      "#WebDev",
      "#LearningInPublic"
    ],
    "titleEn": "My Elevvo Frontend Journey: From Core Fundamentals to Production-Grade Web Applications",
    "titleAr": "رحلتي في مسار Elevvo للـ Frontend: من إتقان الأساسيات إلى بناء تطبيقات ويب احترافية",
    "excerptEn": "Reflecting on the milestones of Wave 15 B1. Key takeaways from building collapsible navigation drawers, client-side validated contact forms, and scalable UI architectures.",
    "excerptAr": "نظرة واقعية على محطات التدريب في Wave 15 B1. أهم الدروس المستفادة من بناء القوائم الجانبية المتجاوبة، ونماذج الاتصال مع التحقق الذكي، وتنظيم كود الواجهات.",
    "contentEn": "\n      <h2>Embracing the Growth Mindset in Wave 15 B1</h2>\n      <p>Joining the Elevvo Frontend Web Development Track was a turning point in how I approach software development. Moving from passive video consumption to hands-on, deadline-driven engineering transformed my practical coding speed and design confidence.</p>\n      <p>Throughout the modules, the focus was never on writing code that merely 'works'. It was about writing accessible, responsive, edge-case-resilient code that can be deployed into real production environments without breaking.</p>\n    ",
    "contentAr": "\n      <h2>الانتقال من مرحلة التعلم النظري إلى عقلية البناء الحقيقي</h2>\n      <p>كان انضمامي لمسار تطوير الواجهات الأمامية في Elevvo (Wave 15) نقطة تحول حقيقية في طريقة تعاملي مع المشاريع البرمجية. الانتقال من مشاهدة الشروحات إلى حل المشكلات العملية والالتزام بتسليمات دورية بنى ثقة هندسية عالية لدي.</p>\n      <p>التركيز في جميع المهام لم يكن مجرد كتابة كود يؤدي الغرض، بل كان دائماً عن كتابة كود نظيف، متجاوب، يراعي سرعة التحميل وراحة المستخدم، ويوفر تجربة تضاهي كبرى المنتجات الرقمية.</p>\n    "
  },
  {
    "id": 3,
    "category": "performance",
    "readTimeMin": 6,
    "reads": "9.8k",
    "likes": 1130,
    "dateEn": "Aug 15, 2026",
    "dateAr": "١٥ أغسطس ٢٠٢٦",
    "readTimeEn": "6 min read",
    "readTimeAr": "٦ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#Performance",
      "#GPU",
      "#Animation",
      "#JavaScript"
    ],
    "titleEn": "Zero-Jank Magnetic Cursor: Engineering Smooth 120 FPS Pointer Physics in Vanilla JavaScript",
    "titleAr": "مؤشر الماوس المغناطيسي فائق النعومة: هندسة حركة فيزيائية بـ 120 FPS بالجافاسكريبت النقي",
    "excerptEn": "Why updating top and left triggers forced browser reflows, and how switching to requestAnimationFrame and translate3d compositor layers created an ultra-silky interactive cursor.",
    "excerptAr": "لماذا يتسبب تغيير left و top في تقطيع الشاشة، وكيف حوّلت المؤشر ليعمل عبر translate3d و requestAnimationFrame لتحقيق سلاسة فائقة تحاكي تطبيقات سطح المكتب.",
    "contentEn": "\n      <h2>The Hidden Performance Trap of left & top Properties</h2>\n      <p>When building custom cursors, the common impulse is setting <code>cursor.style.left = e.clientX + 'px'</code> in the mousemove event. However, changing left and top forces the browser layout engine to recompute element geometry on every single mouse packet.</p>\n      <p>By moving the elements exclusively with <code>transform: translate3d(x, y, 0)</code> and rendering via <code>requestAnimationFrame</code>, all updates are executed directly on the GPU compositor thread with zero layout reflow.</p>\n    ",
    "contentAr": "\n      <h2>الفخ الخفي لخاصيتي left و top في المؤشرات المخصصة</h2>\n      <p>الكثير من المطورين يقعون في خطأ تعديل <code>left</code> و <code>top</code> داخل حدث تحريك الماوس. هذا السلوك يجبر المتصفح على إعادة حساب تخطيط الصفحة كاملاً في كل حركة صغيرة للماوس، مما يسبب تقطيعاً مزعجاً.</p>\n      <p>الحل الهندسي الأفضل هو الاعتماد حصرياً على <code>transform: translate3d(x, y, 0)</code> ومزامنة التحديث مع <code>requestAnimationFrame</code>، ليتم الريندر بالكامل على كارت الشاشة بدون أي إجهاد للمعالج.</p>\n    "
  },
  {
    "id": 4,
    "category": "frontend",
    "readTimeMin": 6,
    "reads": "8.4k",
    "likes": 920,
    "dateEn": "Jul 30, 2026",
    "dateAr": "٣٠ يوليو ٢٠٢٦",
    "readTimeEn": "6 min read",
    "readTimeAr": "٦ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#CSSGrid",
      "#Flexbox",
      "#MobileFirst",
      "#Responsive"
    ],
    "titleEn": "Modern Responsive Layouts: Conquering Grid, Flexbox, and Mobile Drawers",
    "titleAr": "إتقان الـ Responsive Design الحديث: أسرار الـ CSS Grid والـ Flexbox وقوائم الموبايل المنزلقة",
    "excerptEn": "Practical design lessons from building Task 1's Collapsible Sidebar and Task 2's Contact Form. Managing touch targets, mobile drawers, and fluid layout breakpoints.",
    "excerptAr": "دروس عملية من واقع بناء الـ Collapsible Sidebar ونموذج الاتصال المتجاوب. كيفية إدارة شاشات اللمس، القوائم المنزلقة (Drawers)، وضبط نقاط التجاوب Breakpoints.",
    "contentEn": "\n      <h2>Beyond Simple Media Queries</h2>\n      <p>True responsive engineering isn't about slapping media queries at arbitrary screen widths. It's about combining modern CSS Grid (with <code>auto-fit</code> and <code>minmax</code>) with flexbox alignment so components adapt organically to any viewport.</p>\n    ",
    "contentAr": "\n      <h2>ما بعد الـ Media Queries التقليدية</h2>\n      <p>التصميم المتجاوب الاحترافي لا يعتمد على التخمين، بل يعتمد على دمج CSS Grid الذكي مع Flexbox واستخدام <code>minmax</code> و <code>auto-fill</code> لتتكيف الكروت والقوائم تلقائياً مع أي مساحة شاشة دون الحاجة لعشرات الـ Media Queries.</p>\n    "
  },
  {
    "id": 5,
    "category": "architecture",
    "readTimeMin": 5,
    "reads": "16.1k",
    "likes": 2310,
    "dateEn": "Jul 18, 2026",
    "dateAr": "١٨ يوليو ٢٠٢٦",
    "readTimeEn": "5 min read",
    "readTimeAr": "٥ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#LocalStorage",
      "#Architecture",
      "#JavaScript",
      "#CleanCode"
    ],
    "titleEn": "State Management Without Libraries: LocalStorage Patterns for Dual Themes & Bookmarks",
    "titleAr": "إدارة الحالة بدون مكتبات خارجية: أساليب الـ LocalStorage لحفظ الثيم والمفضلة محلياً",
    "excerptEn": "How to build a reliable local persistence layer for Dark/Light mode toggles, bilingual RTL/LTR preferences, and user bookmarks using clean modular ES6 JavaScript.",
    "excerptAr": "كيف تبني طبقة تخزين محلية يعتمد عليها لحفظ الوضع الليلي والفاتح، والاتجاه العربي والإنجليزي، وقائمة المقالات المحفوظة بكود ES6 نقي ومنظم.",
    "contentEn": "\n      <h2>The Power of Pure Vanilla JavaScript Architecture</h2>\n      <p>You don't always need Redux or heavy state management libraries to build delightful, persistent user preferences. A lightweight, centralized state object backed by browser LocalStorage provides instant loading with zero dependency baggage.</p>\n    ",
    "contentAr": "\n      <h2>قوة معمارية الجافاسكريبت النقية المنظمة</h2>\n      <p>لا تحتاج دائماً لمكتبات ضخمة لإدارة تفضيلات المستخدم. كائن حالة مركزي صغير متزامن مع الـ LocalStorage يمنح الموقع سرعة فائقة ويحفظ تفضيلات المستخدم للثيم واللغة والمقالات المحفوظة للأبد.</p>\n    "
  },
  {
    "id": 6,
    "category": "frontend",
    "readTimeMin": 7,
    "reads": "12.7k",
    "likes": 1680,
    "dateEn": "Jul 04, 2026",
    "dateAr": "٤ يوليو ٢٠٢٦",
    "readTimeEn": "7 min read",
    "readTimeAr": "٧ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#i18n",
      "#RTL",
      "#ArabicTypography",
      "#CSS"
    ],
    "titleEn": "Bilingual Web Architecture: Seamless Arabic RTL & English LTR Layout Engineering",
    "titleAr": "هندسة المواقع ثنائية اللغة: التبديل السلس بين العربية (RTL) والإنجليزية (LTR)",
    "excerptEn": "Key strategies for building truly bilingual web applications. Handling CSS logical properties, bidirectional typography with Outfit & Alexandria, and dictionary mapping.",
    "excerptAr": "استراتيجيات عملية لبناء مواقع تدعم اللغتين باحتراف. استخدام الخصائص المنطقية في CSS، ضبط الخطوط الطباعية، والتعامل مع قواميس الترجمة الفورية.",
    "contentEn": "\n      <h2>Engineering for Bidirectional Interfaces</h2>\n      <p>Supporting Arabic isn't just about changing text direction. It involves typographic hierarchy, flipping icons thoughtfully, swapping layout margins using logical properties, and choosing harmonious fonts like Outfit and Alexandria.</p>\n    ",
    "contentAr": "\n      <h2>بناء واجهات ثنائية الاتجاه باحترافية حقيقية</h2>\n      <p>دعم اللغة العربية لا يقتصر على تغيير الاتجاه فقط، بل يشمل تناسق الخطوط الطباعية، وتنسيق الهوامش باستخدام الخصائص المنطقية، واختيار خطوط عصرية مثل Alexandria لتعطي مظهراً هندسياً رائعاً.</p>\n    "
  },
  {
    "id": 7,
    "category": "frontend",
    "readTimeMin": 5,
    "reads": "21.4k",
    "likes": 3120,
    "dateEn": "Jun 22, 2026",
    "dateAr": "٢٢ يونيو ٢٠٢٦",
    "readTimeEn": "5 min read",
    "readTimeAr": "٥ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#Forms",
      "#Validation",
      "#Regex",
      "#UX"
    ],
    "titleEn": "Form Validation Deep Dive: Instant Visual Feedback & Bulletproof Regex",
    "titleAr": "التحقق الاحترافي من النماذج: تغذية بصرية فورية واستخدام الـ Regex بدون أخطاء",
    "excerptEn": "Lessons from building Task 2's Responsive Contact Form. Handling real-time visual error states, accessible ARIA alerts, and ensuring positive user feedback.",
    "excerptAr": "مراجعة تفصيلية لما تعلمته أثناء برمجة نموذج الاتصال بالتاسك الثاني. كيفية توفير رسائل خطأ فورية جذابة، دعم إمكانية الوصول، وتأكيد الإرسال بنجاح.",
    "contentEn": "\n      <h2>The User Experience of Form Validation</h2>\n      <p>Forms are often the primary conversion point of any web app. Providing immediate, helpful validation messages without frustrating the user before they finish typing is an art in UX engineering.</p>\n    ",
    "contentAr": "\n      <h2>تجربة المستخدم في التحقق من صحة المدخلات</h2>\n      <p>النماذج هي جسر التواصل الأساسي بين المستخدم والموقع. تقديم رسائل مساعدة وتنبيهات بصرية فورية أنيقة دون إزعاج المستخدم أثناء الكتابة يعد من أهم معايير جودة الواجهات.</p>\n    "
  },
  {
    "id": 8,
    "category": "performance",
    "readTimeMin": 7,
    "reads": "7.9k",
    "likes": 850,
    "dateEn": "Jun 10, 2026",
    "dateAr": "١٠ يونيو ٢٠٢٦",
    "readTimeEn": "7 min read",
    "readTimeAr": "٧ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#CoreWebVitals",
      "#CLS",
      "#Performance",
      "#Optimization"
    ],
    "titleEn": "Web Performance Checklist: How I Achieved Zero Layout Shifts (CLS = 0) on Landing Pages",
    "titleAr": "دليل الأداء وسرعة التحميل: كيف تخلصت من انزياح الصفحة (CLS = 0) في صفحات الهبوط",
    "excerptEn": "Step-by-step techniques: explicit image aspect ratios, asynchronous decoding, dns-prefetch, content-visibility, and rAF scroll throttling applied to production web pages.",
    "excerptAr": "خطوات وتكنيكات حقيقية: أبعاد الصور الثابتة، التحميل الكسول lazy-loading، تسريع استجابة السيرفرات، وخاصية content-visibility لتقليل زمن العرض الأولي.",
    "contentEn": "\n      <h2>Eliminating Cumulative Layout Shift (CLS)</h2>\n      <p>Nothing annoys a user more than content jumping around as images load. By enforcing explicit image dimensions and modern CSS containment, layouts remain rock-solid from the first millisecond.</p>\n    ",
    "contentAr": "\n      <h2>القضاء على انزياح المحتوى التراكمي (CLS)</h2>\n      <p>لا شيء يزعج الزائر أكثر من اهتزاز النصوص أو قفز الأزرار أثناء تحميل الصور. تحديد أبعاد الصور مسبقاً واستخدام تقنيات التحميل الكسول يضمن ثباتاً هندسياً تاماً للصفحة من اللحظة الأولى.</p>\n    "
  },
  {
    "id": 9,
    "category": "career",
    "readTimeMin": 9,
    "reads": "10.3k",
    "likes": 1240,
    "dateEn": "May 28, 2026",
    "dateAr": "٢٨ مايو ٢٠٢٦",
    "readTimeEn": "9 min read",
    "readTimeAr": "٩ دقائق للقراءة",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=550&fit=crop&q=80&auto=format",
    "tags": [
      "#Career",
      "#Mindset",
      "#JuniorToSenior",
      "#Portfolio"
    ],
    "titleEn": "From Coding Tutorials to Real Projects: 5 Mindset Shifts for Junior Web Developers",
    "titleAr": "من مشاهدة الكورسات إلى بناء مشاريع حقيقية: 5 تحولات فكرية لمطوري الويب المبتدئين",
    "excerptEn": "Breaking free from tutorial hell. Why building portfolio projects with deep polish, edge-case handling, and interactive features accelerates your career faster than anything else.",
    "excerptAr": "كيف تخرج من فخ الكورسات اللانهائي؟ ولماذا يعتبر بناء مشاريع بورتفوليو مكتملة التفاصيل والجمالية هو أسرع طريق لإثبات مهاراتك والتميز في المقابلات.",
    "contentEn": "\n      <h2>Building with Intentionality</h2>\n      <p>The fastest route to senior-level engineering competence is building real projects from scratch, solving the edge cases that tutorials skip, and taking pride in every pixel and interaction.</p>\n    ",
    "contentAr": "\n      <h2>البناء بهدف وتركيز واحترافية</h2>\n      <p>أسرع مسار لاكتساب المهارة الحقيقية هو البدء في بناء مشاريع كاملة بمفردك، ومواجهة المشاكل الواقعية التي تتجاهلها الفيديوهات التعليمية، وتقديم أعمال تفخر بها في بورتفوليو أعمالك.</p>\n    "
  }
];

  // ---------------------------------------------------------------------------
  // 3. BILINGUAL TRANSLATIONS DICTIONARY
  // ---------------------------------------------------------------------------
  const translations = {
  "en": {
    "theme_dark": "Dark",
    "theme_light": "Light",
    "search_quick_placeholder": "Quick search articles...",
    "search_input_placeholder": "Search by title, keyword, or tag (e.g. TaskFlow, Cursor, Elevvo)...",
    "author_badge": "Frontend Web Developer & Software Engineer",
    "author_bio": "Welcome to my technical publication journal. Here I document my hands-on journey through the Elevvo Frontend Internship, sharing production-tested UI architectures, performance optimizations, and lessons from building real web applications.",
    "stat_articles": "Articles",
    "stat_reads": "Total Readers",
    "stat_rating": "Reader Rating",
    "featured_pill": "✨ Editor's Spotlight Article",
    "btn_read_story": "Read Full Deep Dive",
    "sort_label": "Sort by:",
    "sort_latest": "Latest First",
    "sort_popular": "Most Popular",
    "sort_readtime": "Shortest Read",
    "cat_all": "All Articles",
    "cat_projects": "✨ Projects & Demos",
    "cat_frontend": "⚛️ Frontend & CSS",
    "cat_performance": "⚡ Performance",
    "cat_architecture": "🏗️ Architecture",
    "cat_career": "🚀 Career & Journey",
    "showing_prefix": "Showing",
    "articles_suffix": "articles",
    "filtered_by": "Filtered by",
    "reset_filters": "Reset Filters",
    "empty_title": "No engineering articles found",
    "empty_desc": "We couldn't find any articles matching your search criteria. Try different keywords or clear the category filters.",
    "btn_clear_search": "Clear Search & View All",
    "page_prev": "Previous",
    "page_next": "Next",
    "newsletter_pill": "📫 Weekly Architectural Digest",
    "newsletter_title": "Never Miss a Production Deep Dive",
    "newsletter_sub": "Follow along with my engineering journey and frontend breakdowns. Practical insights on performance, CSS layout engines, and real-world web applications.",
    "newsletter_email_placeholder": "Enter your engineering email...",
    "btn_subscribe": "Subscribe Free",
    "email_invalid": "Please enter a valid email address.",
    "email_success": "✓ Thank you! You have been successfully subscribed to Sayed Nada's technical journal.",
    "drawer_title": "Saved Reading List",
    "btn_clear_bookmarks": "Clear All Saved",
    "drawer_empty": "No saved articles yet. Click the bookmark icon on any article to save it for offline reading!",
    "footer_brand_desc": "An authentic engineering publication documenting real frontend projects, browser performance, and practical web development lessons.",
    "footer_authored_by": "Authored & Maintained by",
    "footer_col_topics": "Engineering Topics",
    "footer_col_resources": "Journal & RSS",
    "footer_col_connect": "Direct Connect",
    "footer_latest_releases": "Latest Releases",
    "footer_archive": "Complete Archive",
    "footer_digest": "Weekly Digest",
    "footer_rss": "RSS Feed (XML)",
    "footer_badge": "100% Zero-Reflow • Core Web Vitals 100/100",
    "footer_contact_note": "Cairo, Egypt • sayedmahmouda00@gmail.com"
  },
  "ar": {
    "theme_dark": "داكن",
    "theme_light": "فاتح",
    "search_quick_placeholder": "بحث سريع في المقالات...",
    "search_input_placeholder": "ابحث بالعنوان، الكلمات المفتاحية، أو الـ Tags (مثل: TaskFlow, Cursor, Elevvo)...",
    "author_badge": "مطور واجهات أمامية ومبرمج برمجيات",
    "author_bio": "أهلاً بكم في مدونتي التقنية التوثيقية. هنا أشارككم رحلتي وتجاربي العملية في مسار Elevvo لتطوير الواجهات الأمامية، مع توثيق تفاصيل بناء المشاريع، أسرار الأداء العالي، والدروس المستفادة من بناء تطبيقات ويب حقيقية.",
    "stat_articles": "مقالات وتجارب",
    "stat_reads": "قارئ ومتابع",
    "stat_rating": "تقييم القراء",
    "featured_pill": "✨ مقال الغلاف الرئيسي الموصى به",
    "btn_read_story": "قراءة المقال بالكامل",
    "sort_label": "ترتيب حسب:",
    "sort_latest": "الأحدث أولاً",
    "sort_popular": "الأكثر قراءة",
    "sort_readtime": "الأقصر وقتاً",
    "cat_all": "كافة المقالات",
    "cat_projects": "✨ مشروعاتي في التدريب",
    "cat_frontend": "⚛️ الواجهات والـ CSS",
    "cat_performance": "⚡ الأداء والسرعة",
    "cat_architecture": "🏗️ معمارية الكود",
    "cat_career": "🚀 التطور والتعلم",
    "showing_prefix": "عرض",
    "articles_suffix": "مقالاً",
    "filtered_by": "مفلترة حسب",
    "reset_filters": "إعادة ضبط الفلترة",
    "empty_title": "لم يتم العثور على أي مقالات مطابقة",
    "empty_desc": "تعذر العثور على مقالات تطابق معايير البحث. جرب كلمات مفتاحية أخرى أو اضغط لإلغاء الفلاتر.",
    "btn_clear_search": "مسح البحث وعرض كل المقالات",
    "page_prev": "السابق",
    "page_next": "التالي",
    "newsletter_pill": "📫 النشرة التقنية الأسبوعية",
    "newsletter_title": "تابع كواليس المشروعات وتجارب البناء",
    "newsletter_sub": "انضم لمتابعة رحلتي البرمجية وكواليس المشروعات وتطبيقات الواجهات الأمامية. دروس وتجارب عملية في تسريع المواقع وتصميم النظم بدون إزعاج.",
    "newsletter_email_placeholder": "أدخل بريدك الإلكتروني المهني...",
    "btn_subscribe": "اشتراك مجاني",
    "email_invalid": "يرجى إدخال عنوان بريد إلكتروني صالح.",
    "email_success": "✓ شكراً لك! تم تسجيل اشتراكك بنجاح في نشرة المهندس سيد محمود التقنية.",
    "drawer_title": "قائمة القراءة المحفوظة",
    "btn_clear_bookmarks": "مسح كافة المحفوظات",
    "drawer_empty": "لا توجد مقالات محفوظة حالياً. اضغط على علامة الحفظ في أي مقال لقراءته لاحقاً!",
    "footer_brand_desc": "مدونة توثيقية هندسية تنقل كواليس مشروعات الواجهات الأمامية وتطبيقات الأداء العالي وممارسات التطوير الحديثة.",
    "footer_authored_by": "إعداد وكتابة المهندس",
    "footer_col_topics": "المسارات والمشروعات",
    "footer_col_resources": "الأرشيف والنشرة",
    "footer_col_connect": "قنوات التواصل المباشر",
    "footer_latest_releases": "أحدث الإصدارات",
    "footer_archive": "الأرشيف الكامل",
    "footer_digest": "النشرة الأسبوعية",
    "footer_rss": "تغذية RSS (XML)",
    "footer_badge": "صفر لاياوت شيفت • تقييم سرعة 100/100",
    "footer_contact_note": "القاهرة، مصر • sayedmahmouda00@gmail.com"
  }
};

  // ---------------------------------------------------------------------------
  // 4. DOM CACHE
  // ---------------------------------------------------------------------------
  const DOM = {
    html: document.documentElement,
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeBtnLabel: document.getElementById('theme-btn-label'),
    langToggleBtn: document.getElementById('lang-toggle-btn'),
    langBtnLabel: document.getElementById('lang-btn-label'),
    navSearchTrigger: document.getElementById('nav-search-trigger'),
    hubSearchInput: document.getElementById('hub-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    sortSelect: document.getElementById('sort-select'),
    viewGridBtn: document.getElementById('view-grid-btn'),
    viewListBtn: document.getElementById('view-list-btn'),
    catPills: document.querySelectorAll('.cat-pill'),
    articlesContainer: document.getElementById('articles-container'),
    articlesCountBadge: document.getElementById('articles-count-badge'),
    filterIndicatorText: document.getElementById('filter-indicator-text'),
    resetFiltersLink: document.getElementById('reset-filters-link'),
    emptySearchState: document.getElementById('empty-search-state'),
    emptyResetBtn: document.getElementById('empty-reset-btn'),
    paginationNav: document.getElementById('pagination-nav'),
    prevPageBtn: document.getElementById('prev-page-btn'),
    nextPageBtn: document.getElementById('next-page-btn'),
    pageNumbersGroup: document.getElementById('page-numbers-group'),
    featuredCard: document.getElementById('featured-article-card'),
    bookmarksTriggerBtn: document.getElementById('bookmarks-trigger-btn'),
    bookmarksBadge: document.getElementById('bookmarks-badge'),
    bookmarksDrawer: document.getElementById('bookmarks-drawer'),
    bookmarksDrawerBackdrop: document.getElementById('bookmarks-drawer-backdrop'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    drawerArticlesList: document.getElementById('drawer-articles-list'),
    drawerCountBadge: document.getElementById('drawer-count-badge'),
    clearAllBookmarksBtn: document.getElementById('clear-all-bookmarks-btn'),
    readingModalBackdrop: document.getElementById('reading-modal-backdrop'),
    readingModalDialog: document.getElementById('reading-modal-dialog'),
    modalReadingProgress: document.getElementById('modal-reading-progress'),
    modalScrollContent: document.getElementById('modal-scroll-content'),
    modalCategoryChip: document.getElementById('modal-category-chip'),
    modalReadTime: document.getElementById('modal-read-time'),
    modalLikesCount: document.getElementById('modal-likes-count'),
    modalLikeBtn: document.getElementById('modal-like-btn'),
    modalBookmarkBtn: document.getElementById('modal-bookmark-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalArticleTitle: document.getElementById('modal-article-title'),
    modalArticleDate: document.getElementById('modal-article-date'),
    modalCoverImg: document.getElementById('modal-cover-img'),
    modalArticleProse: document.getElementById('modal-article-prose'),
    modalTagsContainer: document.getElementById('modal-tags-container'),
    fontDecreaseBtn: document.getElementById('font-decrease-btn'),
    fontIncreaseBtn: document.getElementById('font-increase-btn'),
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    newsletterFeedback: document.getElementById('newsletter-feedback'),
    progressBar: document.getElementById('scroll-progress-bar'),
    revealElements: document.querySelectorAll('.reveal-on-scroll'),
    rssMockLink: document.getElementById('rss-mock-link')
  };

  // ---------------------------------------------------------------------------
  // 5. HELPER FUNCTIONS & ARABIC TEXT NORMALIZATION
  // ---------------------------------------------------------------------------
  function normalizeText(value) {
    if (!value) return '';
    return value
      .toLowerCase()
      .trim()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/ـ/g, '')
      .replace(/\s+/g, ' ');
  }

  // ---------------------------------------------------------------------------
  // 6. ARTICLES FILTERING, SEARCHING & SORTING LOGIC
  // ---------------------------------------------------------------------------
  function getFilteredArticles() {
    let result = articles.slice();

    // 1. Category Filter
    if (state.activeCategory !== 'all') {
      result = result.filter(a => a.category === state.activeCategory);
    }

    // 2. Search Query Filter
    if (state.searchQuery.trim()) {
      const q = normalizeText(state.searchQuery);
      result = result.filter(a => {
        const titleNormEn = normalizeText(a.titleEn);
        const titleNormAr = normalizeText(a.titleAr);
        const excerptNormEn = normalizeText(a.excerptEn);
        const excerptNormAr = normalizeText(a.excerptAr);
        const tagsJoined = normalizeText(a.tags.join(' '));
        const categoryNorm = normalizeText(a.category);

        return (
          titleNormEn.includes(q) ||
          titleNormAr.includes(q) ||
          excerptNormEn.includes(q) ||
          excerptNormAr.includes(q) ||
          tagsJoined.includes(q) ||
          categoryNorm.includes(q)
        );
      });
    }

    // 3. Sorting
    if (state.sortBy === 'popular') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (state.sortBy === 'readtime') {
      result.sort((a, b) => a.readTimeMin - b.readTimeMin);
    } else {
      // Latest: ID descending
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }

  // ---------------------------------------------------------------------------
  // 7. ARTICLES RENDERING ENGINE
  // ---------------------------------------------------------------------------
  function renderArticles() {
    const isRTL = state.lang === 'ar';
    const dict = translations[state.lang];
    const filtered = getFilteredArticles();
    const totalCount = filtered.length;

    // Update Status Header
    if (DOM.articlesCountBadge) {
      DOM.articlesCountBadge.textContent = `${dict.showing_prefix} ${totalCount} ${dict.articles_suffix}`;
    }

    // Active Filter Indicator
    let filterText = '';
    if (state.activeCategory !== 'all') {
      const catKey = `cat_${state.activeCategory}`;
      filterText = `${dict.filtered_by}: ${dict[catKey] || state.activeCategory}`;
    }
    if (state.searchQuery) {
      filterText += ` "${state.searchQuery}"`;
    }
    if (DOM.filterIndicatorText) {
      DOM.filterIndicatorText.textContent = filterText;
    }

    // Reset Link visibility
    const isFiltered = state.activeCategory !== 'all' || state.searchQuery.trim() !== '';
    if (DOM.resetFiltersLink) {
      DOM.resetFiltersLink.style.display = isFiltered ? 'inline-block' : 'none';
    }

    // Empty State Check
    if (totalCount === 0) {
      DOM.articlesContainer.innerHTML = '';
      DOM.articlesContainer.style.display = 'none';
      DOM.emptySearchState.style.display = 'block';
      DOM.paginationNav.style.display = 'none';
      return;
    }

    DOM.articlesContainer.style.display = 'grid';
    DOM.emptySearchState.style.display = 'none';

    // Pagination Calculation
    const totalPages = Math.ceil(totalCount / state.itemsPerPage);
    if (state.currentPage > totalPages) {
      state.currentPage = totalPages;
    }
    if (state.currentPage < 1) {
      state.currentPage = 1;
    }

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const paginatedArticles = filtered.slice(startIndex, startIndex + state.itemsPerPage);

    // Layout class
    DOM.articlesContainer.className = `articles-grid ${state.viewLayout === 'list' ? 'list-view' : ''}`;

    // Render Cards
    let html = '';
    paginatedArticles.forEach((article) => {
      const isBookmarked = state.bookmarks.includes(article.id);
      const isLiked = state.likes.includes(article.id);
      const title = isRTL ? article.titleAr : article.titleEn;
      const excerpt = isRTL ? article.excerptAr : article.excerptEn;
      const date = isRTL ? article.dateAr : article.dateEn;
      const readTime = isRTL ? article.readTimeAr : article.readTimeEn;
      const catKey = `cat_${article.category}`;
      const categoryLabel = dict[catKey] ? dict[catKey].replace(/^[^\w\s\u0600-\u06FF]+/, '').trim() : article.category;

      html += `
        <article class="article-card card glass reveal-on-scroll is-visible" data-id="${article.id}">
          <div class="article-card-thumb">
            <img src="${article.cover}" alt="${title}" class="card-img" width="350" height="200" loading="lazy" decoding="async" />
            <div class="card-category-overlay">
              <span class="category-chip category-${article.category}">${categoryLabel}</span>
            </div>
          </div>
          <div class="article-card-body">
            <div class="card-meta-row">
              <span>${date}</span>
              <span>•</span>
              <span>${readTime}</span>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-excerpt">${excerpt}</p>
            <div class="card-tags-row">
              ${article.tags.map(t => `<span class="tag-chip" data-tag="${t}">${t}</span>`).join('')}
            </div>
            <div class="card-footer">
              <div class="card-stats-left">
                <span>👁 ${article.reads}</span>
                <span>❤️ ${article.likes + (isLiked ? 1 : 0)}</span>
              </div>
              <div class="card-actions-right">
                <button class="btn-icon bookmark-btn ${isBookmarked ? 'active' : ''}" data-article-id="${article.id}" aria-label="Bookmark" title="Bookmark">
                  <svg viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="16" height="16">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
                <button class="btn btn-secondary open-reader-btn" data-article-id="${article.id}">
                  <span>${dict.btn_read_story}</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    });

    DOM.articlesContainer.innerHTML = html;

    // Attach Click Events to Card Elements
    attachArticleCardEvents();

    // Render Pagination Controls
    renderPagination(totalPages);
  }

  function attachArticleCardEvents() {
    // Open Reader on title or button click
    DOM.articlesContainer.querySelectorAll('.open-reader-btn, .card-title, .article-card-thumb').forEach((el) => {
      el.addEventListener('click', (e) => {
        const card = el.closest('.article-card');
        const id = parseInt(card.getAttribute('data-id'), 10);
        openArticleModal(id);
      });
    });

    // Bookmark button click
    DOM.articlesContainer.querySelectorAll('.bookmark-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-article-id'), 10);
        toggleBookmark(id);
      });
    });

    // Tag chip click -> sets search
    DOM.articlesContainer.querySelectorAll('.tag-chip').forEach((chip) => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const tag = chip.getAttribute('data-tag');
        DOM.hubSearchInput.value = tag;
        state.searchQuery = tag;
        state.currentPage = 1;
        DOM.clearSearchBtn.style.display = 'flex';
        renderArticles();
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 8. DYNAMIC PAGINATION ENGINE
  // ---------------------------------------------------------------------------
  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      DOM.paginationNav.style.display = 'none';
      return;
    }

    DOM.paginationNav.style.display = 'flex';
    DOM.prevPageBtn.disabled = state.currentPage === 1;
    DOM.nextPageBtn.disabled = state.currentPage === totalPages;

    let pageBtnsHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      pageBtnsHtml += `
        <button class="page-btn page-num-btn ${state.currentPage === i ? 'active' : ''}" data-page="${i}">
          ${i}
        </button>
      `;
    }
    DOM.pageNumbersGroup.innerHTML = pageBtnsHtml;

    DOM.pageNumbersGroup.querySelectorAll('.page-num-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.getAttribute('data-page'), 10);
        goToPage(page);
      });
    });
  }

  function goToPage(page) {
    state.currentPage = page;
    renderArticles();
    const hub = document.getElementById('articles-hub');
    if (hub) {
      const topOffset = hub.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }

  // ---------------------------------------------------------------------------
  // 9. BOOKMARKS SYSTEM (LocalStorage & Slide-Over Drawer)
  // ---------------------------------------------------------------------------
  function toggleBookmark(articleId) {
    const index = state.bookmarks.indexOf(articleId);
    if (index > -1) {
      state.bookmarks.splice(index, 1);
    } else {
      state.bookmarks.push(articleId);
    }

    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(state.bookmarks));
    updateBookmarksUI();
  }

  function updateBookmarksUI() {
    const count = state.bookmarks.length;
    if (DOM.bookmarksBadge) {
      DOM.bookmarksBadge.textContent = count;
    }
    if (DOM.drawerCountBadge) {
      DOM.drawerCountBadge.textContent = count;
    }

    // Update buttons in articles container
    document.querySelectorAll(`[data-article-id]`).forEach((btn) => {
      if (btn.classList.contains('bookmark-btn') || btn.classList.contains('bookmark-card-btn') || btn.id === 'modal-bookmark-btn') {
        const id = parseInt(btn.getAttribute('data-article-id'), 10) || state.activeArticleId;
        const isSaved = state.bookmarks.includes(id);
        btn.classList.toggle('active', isSaved);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
      }
    });

    renderBookmarksDrawer();
  }

  function renderBookmarksDrawer() {
    const isRTL = state.lang === 'ar';
    const dict = translations[state.lang];

    if (state.bookmarks.length === 0) {
      DOM.drawerArticlesList.innerHTML = `
        <div class="drawer-empty-state">
          <p>${dict.drawer_empty}</p>
        </div>
      `;
      DOM.clearAllBookmarksBtn.style.display = 'none';
      return;
    }

    DOM.clearAllBookmarksBtn.style.display = 'block';
    let html = '';

    state.bookmarks.forEach((id) => {
      const article = articles.find(a => a.id === id);
      if (!article) return;

      const title = isRTL ? article.titleAr : article.titleEn;
      const readTime = isRTL ? article.readTimeAr : article.readTimeEn;

      html += `
        <div class="drawer-item-card">
          <img src="${article.cover}" alt="${title}" class="drawer-item-thumb" />
          <div class="drawer-item-info">
            <h4 class="drawer-item-title" data-read-id="${article.id}">${title}</h4>
            <div class="drawer-item-actions">
              <span>${readTime}</span>
              <button class="remove-bookmark-btn" data-remove-id="${article.id}">✕ Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    DOM.drawerArticlesList.innerHTML = html;

    // Attach drawer clicks
    DOM.drawerArticlesList.querySelectorAll('[data-read-id]').forEach((el) => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-read-id'), 10);
        closeBookmarksDrawer();
        openArticleModal(id);
      });
    });

    DOM.drawerArticlesList.querySelectorAll('[data-remove-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-remove-id'), 10);
        toggleBookmark(id);
      });
    });
  }

  function openBookmarksDrawer() {
    state.isBookmarksOpen = true;
    DOM.bookmarksDrawer.classList.add('open');
    DOM.bookmarksDrawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookmarksDrawer() {
    state.isBookmarksOpen = false;
    DOM.bookmarksDrawer.classList.remove('open');
    DOM.bookmarksDrawerBackdrop.classList.remove('open');
    if (!state.isModalOpen) {
      document.body.style.overflow = '';
    }
  }

  // ---------------------------------------------------------------------------
  // 10. FULL ARTICLE READING MODAL ENGINE
  // ---------------------------------------------------------------------------
  function openArticleModal(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    state.activeArticleId = articleId;
    state.isModalOpen = true;
    const isRTL = state.lang === 'ar';
    const dict = translations[state.lang];

    // Populate data
    const title = isRTL ? article.titleAr : article.titleEn;
    const date = isRTL ? article.dateAr : article.dateEn;
    const readTime = isRTL ? article.readTimeAr : article.readTimeEn;
    const content = isRTL ? article.contentAr : article.contentEn;
    const catKey = `cat_${article.category}`;
    const categoryLabel = dict[catKey] ? dict[catKey].replace(/^[^\w\s\u0600-\u06FF]+/, '').trim() : article.category;
    const isLiked = state.likes.includes(articleId);
    const isBookmarked = state.bookmarks.includes(articleId);

    DOM.modalArticleTitle.textContent = title;
    DOM.modalCategoryChip.textContent = categoryLabel;
    DOM.modalCategoryChip.className = `modal-category-chip category-${article.category}`;
    DOM.modalReadTime.textContent = readTime;
    DOM.modalArticleDate.textContent = `${date} • ${article.reads} reads`;
    DOM.modalCoverImg.src = article.cover;
    DOM.modalCoverImg.alt = title;
    DOM.modalArticleProse.innerHTML = content;

    // Likes count & status
    DOM.modalLikesCount.textContent = article.likes + (isLiked ? 1 : 0);
    DOM.modalLikeBtn.classList.toggle('liked', isLiked);

    // Bookmark status
    DOM.modalBookmarkBtn.setAttribute('data-article-id', articleId);
    DOM.modalBookmarkBtn.classList.toggle('active', isBookmarked);
    const bmSvg = DOM.modalBookmarkBtn.querySelector('svg');
    if (bmSvg) bmSvg.setAttribute('fill', isBookmarked ? 'currentColor' : 'none');

    // Tags
    DOM.modalTagsContainer.innerHTML = article.tags.map(t => `<span class="tag-chip">${t}</span>`).join('');

    // Reset scroll & progress
    DOM.modalScrollContent.scrollTop = 0;
    DOM.modalReadingProgress.style.transform = 'scaleX(0)';

    // Open
    DOM.readingModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    state.isModalOpen = false;
    DOM.readingModalBackdrop.classList.remove('open');
    if (!state.isBookmarksOpen) {
      document.body.style.overflow = '';
    }
  }

  function toggleArticleLike() {
    if (!state.activeArticleId) return;
    const id = state.activeArticleId;
    const index = state.likes.indexOf(id);
    const isLiked = index > -1;

    if (isLiked) {
      state.likes.splice(index, 1);
    } else {
      state.likes.push(id);
    }

    localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify(state.likes));
    const article = articles.find(a => a.id === id);
    if (article) {
      DOM.modalLikesCount.textContent = article.likes + (!isLiked ? 1 : 0);
      DOM.modalLikeBtn.classList.toggle('liked', !isLiked);
    }
    renderArticles();
  }

  // ---------------------------------------------------------------------------
  // 11. BILINGUAL RTL/LTR ARCHITECTURE
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

    // Update text nodes with [data-i18n]
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

    // Update placeholders with [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    if (DOM.langBtnLabel) {
      DOM.langBtnLabel.textContent = isRTL ? 'English' : 'عربي';
    }

    // Re-render articles in selected language
    renderArticles();
    renderBookmarksDrawer();
    applyTheme();
  }

  // ---------------------------------------------------------------------------
  // 12. THEME CONTROLLER & PERSISTENCE
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
  // 13. EVENT LISTENERS INITIALIZATION
  // ---------------------------------------------------------------------------
  function initEventListeners() {
    // Theme & Language
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.langToggleBtn.addEventListener('click', toggleLanguage);

    // Search Box Real-Time Input with Debouncing
    let searchDebounceTimer;
    DOM.hubSearchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      const val = e.target.value;
      DOM.clearSearchBtn.style.display = val ? 'flex' : 'none';

      searchDebounceTimer = setTimeout(() => {
        state.searchQuery = val;
        state.currentPage = 1;
        renderArticles();
      }, 150);
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      DOM.hubSearchInput.value = '';
      DOM.clearSearchBtn.style.display = 'none';
      state.searchQuery = '';
      state.currentPage = 1;
      renderArticles();
      DOM.hubSearchInput.focus();
    });

    // Desktop Nav Quick Search Trigger (focuses hub search)
    DOM.navSearchTrigger.addEventListener('click', () => {
      const hub = document.getElementById('articles-hub');
      if (hub) {
        const topOffset = hub.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
        setTimeout(() => DOM.hubSearchInput.focus(), 400);
      }
    });

    // Category Filter Pills
    DOM.catPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        DOM.catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeCategory = pill.getAttribute('data-category');
        state.currentPage = 1;
        renderArticles();
      });
    });

    // Sort Dropdown
    DOM.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      state.currentPage = 1;
      renderArticles();
    });

    // View Toggle Buttons (Grid vs List)
    DOM.viewGridBtn.addEventListener('click', () => {
      DOM.viewGridBtn.classList.add('active');
      DOM.viewListBtn.classList.remove('active');
      state.viewLayout = 'grid';
      localStorage.setItem(STORAGE_KEYS.LAYOUT, 'grid');
      renderArticles();
    });

    DOM.viewListBtn.addEventListener('click', () => {
      DOM.viewListBtn.classList.add('active');
      DOM.viewGridBtn.classList.remove('active');
      state.viewLayout = 'list';
      localStorage.setItem(STORAGE_KEYS.LAYOUT, 'list');
      renderArticles();
    });

    // Reset Filters Link
    DOM.resetFiltersLink.addEventListener('click', () => {
      resetAllFilters();
    });
    DOM.emptyResetBtn.addEventListener('click', () => {
      resetAllFilters();
    });

    // Pagination Next / Prev
    DOM.prevPageBtn.addEventListener('click', () => {
      if (state.currentPage > 1) {
        goToPage(state.currentPage - 1);
      }
    });
    DOM.nextPageBtn.addEventListener('click', () => {
      const filtered = getFilteredArticles();
      const totalPages = Math.ceil(filtered.length / state.itemsPerPage);
      if (state.currentPage < totalPages) {
        goToPage(state.currentPage + 1);
      }
    });

    // Bookmarks Drawer
    DOM.bookmarksTriggerBtn.addEventListener('click', openBookmarksDrawer);
    DOM.drawerCloseBtn.addEventListener('click', closeBookmarksDrawer);
    DOM.bookmarksDrawerBackdrop.addEventListener('click', closeBookmarksDrawer);
    DOM.clearAllBookmarksBtn.addEventListener('click', () => {
      state.bookmarks = [];
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify([]));
      updateBookmarksUI();
    });

    // Reading Modal
    DOM.modalCloseBtn.addEventListener('click', closeArticleModal);
    DOM.readingModalBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.readingModalBackdrop) closeArticleModal();
    });
    DOM.modalLikeBtn.addEventListener('click', toggleArticleLike);
    DOM.modalBookmarkBtn.addEventListener('click', () => {
      if (state.activeArticleId) toggleBookmark(state.activeArticleId);
    });

    // Modal Scroll Reading Progress
    DOM.modalScrollContent.addEventListener('scroll', () => {
      const scrollTop = DOM.modalScrollContent.scrollTop;
      const scrollHeight = DOM.modalScrollContent.scrollHeight - DOM.modalScrollContent.clientHeight;
      const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
      DOM.modalReadingProgress.style.transform = `scaleX(${progress})`;
    }, { passive: true });

    // Font Sizing in Modal
    DOM.fontDecreaseBtn.addEventListener('click', () => {
      if (state.modalFontSizeStep > -2) {
        state.modalFontSizeStep--;
        applyModalFontSize();
      }
    });
    DOM.fontIncreaseBtn.addEventListener('click', () => {
      if (state.modalFontSizeStep < 2) {
        state.modalFontSizeStep++;
        applyModalFontSize();
      }
    });

    // Featured Hero Card Read button & Bookmark
    const featCard = document.getElementById('featured-article-card');
    if (featCard) {
      featCard.querySelector('.read-article-btn').addEventListener('click', () => {
        openArticleModal(1);
      });
      featCard.querySelector('.bookmark-card-btn').addEventListener('click', () => {
        toggleBookmark(1);
      });
    }

    // Newsletter Form
    DOM.newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', handleKeydown);

    // Top Glowing Scroll Progress Bar (rAF Throttled & scaleX Composited)
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
          if (DOM.progressBar) {
            DOM.progressBar.style.transform = `scaleX(${ratio})`;
          }
          scrollTicking = false;
        });
      }
    }, { passive: true });

    // Footer Category Filter Links
    document.querySelectorAll('.footer-cat-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-filter');
        const pill = document.querySelector(`.cat-pill[data-category="${cat}"]`);
        if (pill) pill.click();
        const hub = document.getElementById('articles-hub');
        if (hub) {
          hub.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // RSS Mock Link
    if (DOM.rssMockLink) {
      DOM.rssMockLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('RSS Feed endpoint: https://bytecraft.dev/feed.xml\nFormat: Valid RSS 2.0 / Atom with full content syndication.');
      });
    }
  }

  function applyModalFontSize() {
    const scales = { '-2': '0.9rem', '-1': '0.98rem', '0': '1.06rem', '1': '1.16rem', '2': '1.28rem' };
    DOM.modalScrollContent.style.fontSize = scales[state.modalFontSizeStep] || '1.06rem';
  }

  function resetAllFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.currentPage = 1;
    DOM.hubSearchInput.value = '';
    DOM.clearSearchBtn.style.display = 'none';
    DOM.catPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
    renderArticles();
  }

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = DOM.newsletterEmail.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const dict = translations[state.lang];

    if (!email || !emailRegex.test(email)) {
      DOM.newsletterFeedback.textContent = dict.email_invalid;
      DOM.newsletterFeedback.className = 'form-feedback error';
      DOM.newsletterEmail.focus();
      return;
    }

    DOM.newsletterFeedback.textContent = dict.email_success;
    DOM.newsletterFeedback.className = 'form-feedback success';
    DOM.newsletterForm.reset();

    setTimeout(() => {
      DOM.newsletterFeedback.textContent = '';
      DOM.newsletterFeedback.className = 'form-feedback';
    }, 6000);
  }

  function handleKeydown(e) {
    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

    // Ctrl+K / Cmd+K: Focus Search
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      const hub = document.getElementById('articles-hub');
      if (hub) {
        const topOffset = hub.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
        setTimeout(() => DOM.hubSearchInput.focus(), 350);
      }
      return;
    }

    if (isTyping) {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }

    // Escape: Close Modal or Drawer
    if (e.key === 'Escape') {
      if (state.isModalOpen) closeArticleModal();
      if (state.isBookmarksOpen) closeBookmarksDrawer();
    }

    // T: Toggle Theme
    if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.altKey) {
      toggleTheme();
    }

    // L: Toggle Language
    if ((e.key === 'l' || e.key === 'L') && !e.ctrlKey && !e.altKey) {
      toggleLanguage();
    }
  }

  // ---------------------------------------------------------------------------
  // 14. GPU-ACCELERATED CUSTOM CURSOR & MAGNETIC BUTTON ENGINE
  // ---------------------------------------------------------------------------
  function initCustomCursorAndMagneticButtons() {
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

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Magnetic Button Engine
    const magneticSelector = '.btn, .social-btn, .control-btn, .dock-link, .cat-pill, .view-toggle-btn, .page-btn, .btn-icon';
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
            target.style.willChange = 'auto';
          }
        }, 450);
      });
    });

    // Clickable General
    document.querySelectorAll('a, button, input, select, [role="button"]').forEach((el) => {
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
  // 15. SCROLL REVEAL (IntersectionObserver)
  // ---------------------------------------------------------------------------
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      DOM.revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      DOM.revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    DOM.revealElements.forEach(el => observer.observe(el));
  }

  // ---------------------------------------------------------------------------
  // 16. BOOTSTRAP INITIALIZATION
  // ---------------------------------------------------------------------------
  function init() {
    applyTheme();
    applyLanguage();
    updateBookmarksUI();
    initEventListeners();
    initScrollReveal();
    initCustomCursorAndMagneticButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
