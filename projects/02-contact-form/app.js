/**
 * ELEVVO FRONTEND INTERNSHIP — TASK 2: RESPONSIVE CONTACT FORM
 * Enterprise Form Validation & UX Architecture
 * Features: Real-time RegEx Validation, Accessible ARIA Feedback, Async Mock Dispatch,
 *           Success Portal Modal, Dual Themes & Bilingual RTL/LTR Support.
 */

(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. STORAGE KEYS & INITIAL STATE
  // ---------------------------------------------------------------------------
  const STORAGE_KEYS = {
    THEME: 'elevvo_contact_theme',
    LANG: 'elevvo_contact_lang'
  };

  const state = {
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'en',
    isSubmitting: false
  };

  // ---------------------------------------------------------------------------
  // 2. DOM ELEMENTS CACHE
  // ---------------------------------------------------------------------------
  const DOM = {
    html: document.documentElement,
    body: document.body,
    form: document.getElementById('contact-form'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeBtnLabel: document.getElementById('theme-btn-label'),
    langToggleBtn: document.getElementById('lang-toggle-btn'),
    langBtnLabel: document.getElementById('lang-btn-label'),
    formAlert: document.getElementById('form-alert'),
    alertText: document.getElementById('alert-text'),
    charCounter: document.getElementById('char-counter'),
    submitBtn: document.getElementById('submit-btn'),
    submitBtnText: document.getElementById('submit-btn-text'),
    resetBtn: document.getElementById('reset-btn'),
    successModal: document.getElementById('success-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    summaryName: document.getElementById('summary-name'),
    summaryEmail: document.getElementById('summary-email'),
    summarySubject: document.getElementById('summary-subject'),
    fields: {
      fullname: {
        input: document.getElementById('fullname'),
        group: document.getElementById('group-fullname'),
        feedback: document.getElementById('fullname-feedback')
      },
      email: {
        input: document.getElementById('email'),
        group: document.getElementById('group-email'),
        feedback: document.getElementById('email-feedback')
      },
      subject: {
        input: document.getElementById('subject'),
        group: document.getElementById('group-subject'),
        feedback: document.getElementById('subject-feedback')
      },
      message: {
        input: document.getElementById('message'),
        group: document.getElementById('group-message'),
        feedback: document.getElementById('message-feedback')
      }
    }
  };

  // ---------------------------------------------------------------------------
  // 3. I18N BILINGUAL TRANSLATIONS
  // ---------------------------------------------------------------------------
  const translations = {
    en: {
      tag_level: 'Level 1 • Task 2',
      theme_dark: 'Dark',
      theme_light: 'Light',
      badge_status: 'Live Support & Inquiry',
      info_title: "Let's build something extraordinary together.",
      info_desc: 'Have a project in mind, feedback on our work, or looking to collaborate? Fill out the form and our engineering team will get back to you within 24 hours.',
      channel_email_title: 'Direct Email',
      channel_location_title: 'Headquarters',
      channel_location_val: 'Cairo, Egypt (GMT+2)',
      channel_hours_title: 'Response Guarantee',
      channel_hours_val: '< 24 Hours Turnaround',
      channel_phone: 'Phone',
      specs_title: '⭐ Engineering Features Built-in:',
      spec_1: 'Real-time RegEx validation on keystroke and blur',
      spec_2: 'Accessible error announcement via ARIA attributes',
      spec_3: 'Interactive character counter & state retention',
      spec_4: 'Animated loading button with simulated async API',
      form_heading: 'Send Us a Message',
      form_subheading: 'Please provide your details below. All fields marked with * are required.',
      label_fullname: 'Full Name',
      ph_fullname: 'e.g. Sayed Nada',
      label_email: 'Email Address',
      ph_email: 'name@example.com',
      label_subject: 'Subject',
      ph_subject: 'e.g. Collaboration on Frontend Project',
      label_message: 'Your Message',
      ph_message: 'Write your message here (min. 15 characters)...',
      btn_send: 'Send Message',
      btn_sending: 'Sending...',
      btn_clear: 'Clear',
      btn_done: 'Awesome, Done!',
      modal_success_title: 'Message Sent Successfully!',
      modal_success_desc: 'Thank you for reaching out. We have received your inquiry and our team has dispatched a confirmation email.',
      summary_from: 'From:',
      summary_email: 'Email:',
      summary_subject: 'Subject:',
      alert_fix_errors: 'Please correct the highlighted errors before submitting.',
      // Validation Errors
      err_name_required: 'Full name is required.',
      err_name_short: 'Name must be at least 3 characters long.',
      err_name_invalid: 'Please enter a valid name (letters and spaces only).',
      err_email_required: 'Email address is required.',
      err_email_invalid: 'Please provide a valid email format (e.g. user@domain.com).',
      err_subject_required: 'Subject is required.',
      err_subject_short: 'Subject must be at least 4 characters long.',
      err_message_required: 'Message cannot be empty.',
      err_message_short: 'Message must be at least 15 characters long.'
    },
    ar: {
      tag_level: 'المستوى 1 • المهمة 2',
      theme_dark: 'داكن',
      theme_light: 'فاتح',
      badge_status: 'الدعم والاستفسارات المباشرة',
      info_title: 'دعنا نبني معاً شيئاً استثنائياً يفوق التوقعات.',
      info_desc: 'هل لديك فكرة مشروع، أو استفسار حول أعمالنا، أو ترغب في التعاون التقني؟ املأ النموذج وسيقوم فريقنا الهندسي بالتواصل معك خلال 24 ساعة.',
      channel_phone: 'الهاتف',
      specs_title: '⭐ الميزات الهندسية المدمجة بالنموذج:',
      spec_1: 'تحقق فوري من المدخلات عبر الـ RegEx عند الكتابة والتركيز',
      spec_2: 'إمكانية وصول كاملة مع إشعارات ARIA للمكفوفين',
      spec_3: 'عداد حروف ذكي ومؤشرات لونية تدريجية',
      spec_4: 'زر إرسال تفاعلي بمحاكاة الإرسال السحابي والـ Spinner',
      form_heading: 'أرسل لنا رسالتك',
      form_subheading: 'يرجى إدخال بياناتك بدقة أدناه. جميع الحقول بعلامة * إلزامية.',
      label_fullname: 'الاسم بالكامل',
      ph_fullname: 'مثال: سيد ندا',
      label_email: 'البريد الإلكتروني',
      ph_email: 'name@example.com',
      label_subject: 'موضوع الرسالة',
      ph_subject: 'مثال: تعاون في مشروع فرونت إند',
      label_message: 'نص الرسالة',
      ph_message: 'اكتب تفاصيل رسالتك هنا (15 حرفاً على الأقل)...',
      btn_send: 'إرسال الرسالة',
      btn_sending: 'جاري الإرسال...',
      btn_clear: 'مسح البيانات',
      btn_done: 'رائع، تم بنجاح!',
      modal_success_title: 'تم إرسال رسالتك بنجاح!',
      modal_success_desc: 'شكراً لتواصلك معنا. لقد استلمنا رسالتك بنجاح وأرسلنا رسالة تأكيد آلية إلى بريدك الإلكتروني.',
      summary_from: 'المرسل:',
      summary_email: 'البريد:',
      summary_subject: 'الموضوع:',
      alert_fix_errors: 'يرجى تصحيح الأخطاء المحددة قبل إرسال النموذج.',
      // Validation Errors in Arabic
      err_name_required: 'حقل الاسم بالكامل مطلوب.',
      err_name_short: 'يجب ألا يقل الاسم عن 3 أحرف.',
      err_name_invalid: 'يرجى إدخال اسم صحيح (حروف ومسافات فقط).',
      err_email_required: 'البريد الإلكتروني مطلوب.',
      err_email_invalid: 'صيغة البريد الإلكتروني غير صحيحة (مثال: user@domain.com).',
      err_subject_required: 'موضوع الرسالة مطلوب.',
      err_subject_short: 'يجب ألا يقل الموضوع عن 4 أحرف.',
      err_message_required: 'نص الرسالة لا يمكن أن يكون فارغاً.',
      err_message_short: 'يجب ألا تقل الرسالة عن 15 حرفاً.'
    }
  };

  // SVG Icons for Valid / Invalid state
  const ICONS = {
    valid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    invalid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
  };

  // ---------------------------------------------------------------------------
  // 4. VALIDATION RULES & ENGINE
  // ---------------------------------------------------------------------------
  const validators = {
    fullname: (val) => {
      const trimmed = val.trim();
      const t = translations[state.lang];
      if (!trimmed) return { valid: false, message: t.err_name_required };
      if (trimmed.length < 3) return { valid: false, message: t.err_name_short };
      // Allow Unicode letters (Latin + Arabic) and spaces
      const nameRegex = /^[\p{L}\s.'-]+$/u;
      if (!nameRegex.test(trimmed)) return { valid: false, message: t.err_name_invalid };
      return { valid: true };
    },

    email: (val) => {
      const trimmed = val.trim();
      const t = translations[state.lang];
      if (!trimmed) return { valid: false, message: t.err_email_required };
      // Standard robust Email Regex
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(trimmed)) return { valid: false, message: t.err_email_invalid };
      return { valid: true };
    },

    subject: (val) => {
      const trimmed = val.trim();
      const t = translations[state.lang];
      if (!trimmed) return { valid: false, message: t.err_subject_required };
      if (trimmed.length < 4) return { valid: false, message: t.err_subject_short };
      return { valid: true };
    },

    message: (val) => {
      const trimmed = val.trim();
      const t = translations[state.lang];
      if (!trimmed) return { valid: false, message: t.err_message_required };
      if (trimmed.length < 15) return { valid: false, message: t.err_message_short };
      return { valid: true };
    }
  };

  function validateField(fieldName, isSilent = false) {
    const field = DOM.fields[fieldName];
    if (!field) return true;

    const result = validators[fieldName](field.input.value);
    const iconContainer = field.group.querySelector('.validation-status-icon');

    if (result.valid) {
      field.group.classList.remove('is-invalid');
      field.group.classList.add('is-valid');
      field.input.setAttribute('aria-invalid', 'false');
      field.feedback.textContent = '';
      if (iconContainer) iconContainer.innerHTML = ICONS.valid;
      return true;
    } else {
      if (!isSilent) {
        field.group.classList.remove('is-valid');
        field.group.classList.add('is-invalid');
        field.input.setAttribute('aria-invalid', 'true');
        field.feedback.textContent = result.message;
        if (iconContainer) iconContainer.innerHTML = ICONS.invalid;
      }
      return false;
    }
  }

  function validateAllFields() {
    let allValid = true;
    let firstInvalidField = null;

    Object.keys(DOM.fields).forEach((fieldName) => {
      const isValid = validateField(fieldName, false);
      if (!isValid && allValid) {
        allValid = false;
        firstInvalidField = DOM.fields[fieldName].input;
      }
    });

    if (!allValid && firstInvalidField) {
      firstInvalidField.focus();
      showFormAlert(translations[state.lang].alert_fix_errors, 'error');
    } else {
      hideFormAlert();
    }

    return allValid;
  }

  function resetValidation(fieldName) {
    const field = DOM.fields[fieldName];
    if (!field) return;
    field.group.classList.remove('is-valid', 'is-invalid');
    field.input.removeAttribute('aria-invalid');
    field.feedback.textContent = '';
    const iconContainer = field.group.querySelector('.validation-status-icon');
    if (iconContainer) iconContainer.innerHTML = '';
  }

  // ---------------------------------------------------------------------------
  // 5. CHARACTER COUNTER FOR TEXTAREA
  // ---------------------------------------------------------------------------
  function updateCharCounter() {
    const length = DOM.fields.message.input.value.length;
    DOM.charCounter.textContent = `${length} / 500`;

    DOM.charCounter.classList.remove('warning', 'danger');
    if (length > 450) {
      DOM.charCounter.classList.add('danger');
    } else if (length > 350) {
      DOM.charCounter.classList.add('warning');
    }
  }

  // ---------------------------------------------------------------------------
  // 6. ALERT BANNER CONTROLLER
  // ---------------------------------------------------------------------------
  function showFormAlert(message, type = 'error') {
    DOM.alertText.textContent = message;
    DOM.formAlert.className = `alert-banner ${type}`;
    DOM.formAlert.style.display = 'flex';
  }

  function hideFormAlert() {
    DOM.formAlert.style.display = 'none';
  }

  // ---------------------------------------------------------------------------
  // 7. ASYNC FORM SUBMISSION & SUCCESS MODAL
  // ---------------------------------------------------------------------------
  function handleFormSubmit(e) {
    e.preventDefault();

    if (state.isSubmitting) return;

    const isValid = validateAllFields();
    if (!isValid) return;

    // Enter Loading State
    state.isSubmitting = true;
    DOM.submitBtn.classList.add('is-loading');
    DOM.submitBtnText.textContent = translations[state.lang].btn_sending;

    // Simulate async API turnaround (1.2s delay)
    setTimeout(() => {
      state.isSubmitting = false;
      DOM.submitBtn.classList.remove('is-loading');
      DOM.submitBtnText.textContent = translations[state.lang].btn_send;

      // Populate summary modal
      DOM.summaryName.textContent = DOM.fields.fullname.input.value.trim();
      DOM.summaryEmail.textContent = DOM.fields.email.input.value.trim();
      DOM.summarySubject.textContent = DOM.fields.subject.input.value.trim();

      // Open Success Modal
      openSuccessModal();

      // Reset form
      DOM.form.reset();
      Object.keys(DOM.fields).forEach(resetValidation);
      updateCharCounter();
    }, 1200);
  }

  function openSuccessModal() {
    DOM.successModal.style.display = 'flex';
    DOM.body.style.overflow = 'hidden'; // Stacking context & background scroll lock
    DOM.modalCloseBtn.focus();
  }

  function closeSuccessModal() {
    DOM.successModal.style.display = 'none';
    DOM.body.style.overflow = '';
  }

  function handleFormReset() {
    DOM.form.reset();
    Object.keys(DOM.fields).forEach(resetValidation);
    updateCharCounter();
    hideFormAlert();
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
  // 9. BILINGUAL RTL/LTR LOGIC
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

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
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

    applyTheme(); // Refresh theme text translation

    // If any field currently has an error message, re-translate it live
    Object.keys(DOM.fields).forEach((fieldName) => {
      const field = DOM.fields[fieldName];
      if (field.group.classList.contains('is-invalid')) {
        validateField(fieldName, false);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 10. KEYBOARD SHORTCUTS
  // ---------------------------------------------------------------------------
  function handleKeydown(e) {
    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

    // Escape closes success modal
    if (e.key === 'Escape') {
      if (DOM.successModal.style.display === 'flex') {
        closeSuccessModal();
      }
    }

    if (isTyping) return;

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
  // 11. EVENT LISTENERS INITIALIZATION
  // ---------------------------------------------------------------------------
  function initEventListeners() {
    // Form submission & reset
    DOM.form.addEventListener('submit', handleFormSubmit);
    DOM.resetBtn.addEventListener('click', handleFormReset);

    // Inputs real-time and blur validation
    Object.keys(DOM.fields).forEach((fieldName) => {
      const field = DOM.fields[fieldName];

      // Validate on blur
      field.input.addEventListener('blur', () => {
        if (field.input.value.trim() !== '') {
          validateField(fieldName, false);
        }
      });

      // Live validation on keystroke if user already triggered validation or typing
      field.input.addEventListener('input', () => {
        if (field.group.classList.contains('is-invalid') || field.group.classList.contains('is-valid')) {
          validateField(fieldName, false);
        }
      });
    });

    // Character counter for textarea
    DOM.fields.message.input.addEventListener('input', updateCharCounter);

    // Modal close events
    DOM.modalCloseBtn.addEventListener('click', closeSuccessModal);
    DOM.successModal.addEventListener('click', (e) => {
      if (e.target === DOM.successModal) closeSuccessModal();
    });

    // Theme & Language
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.langToggleBtn.addEventListener('click', toggleLanguage);

    // Keyboard shortcuts
    window.addEventListener('keydown', handleKeydown);
  }

  // ---------------------------------------------------------------------------
  // 12. APPLICATION BOOTSTRAP
  // ---------------------------------------------------------------------------
  function init() {
    applyTheme();
    applyLanguage();
    updateCharCounter();
    initEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
