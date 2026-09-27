/**
 * Developer Credit Floating Widget
 * Adapts to ByteCraft Chronicle's design system & light/dark theme via CSS custom properties.
 * Engineered by Sayed Nada (@SayedNada74)
 */
(function() {
  if (document.getElementById('sayed-developer-credit-root')) return;

  const style = document.createElement('style');
  style.textContent = `
    /* ── Root Container ── */
    #sayed-developer-credit-root {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif);
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      #sayed-developer-credit-root {
        bottom: 80px;
        right: 16px;
      }
    }

    /* ── Trigger Pill ── */
    .sayed-dev-trigger {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: var(--bg-surface, #ffffff);
      border: 1.5px solid var(--accent-cyan, #0891b2);
      border-radius: 9999px;
      color: var(--text-primary, #0f172a);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: var(--shadow-card, 0 4px 20px -2px rgba(15, 23, 42, 0.06));
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
      outline: none;
    }
    .sayed-dev-trigger:hover {
      box-shadow: var(--shadow-floating, 0 20px 40px -10px rgba(15, 23, 42, 0.12));
      transform: translateY(-2px);
      border-color: var(--accent-cyan, #0891b2);
      filter: brightness(1.05);
    }
    .sayed-dev-trigger:active {
      transform: scale(0.96);
    }
    .sayed-dev-code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      color: var(--accent-cyan, #0891b2);
      font-weight: 700;
      font-size: 13px;
    }
    .sayed-dev-label {
      color: var(--text-secondary, #475569);
      font-weight: 500;
      font-size: 12px;
    }
    .sayed-dev-name {
      color: var(--text-primary, #0f172a);
      font-weight: 700;
      letter-spacing: 0.2px;
      font-size: 13px;
    }

    /* ── Popup Card ── */
    .sayed-dev-popup {
      position: absolute;
      bottom: calc(100% + 12px);
      right: 0;
      width: 260px;
      background: var(--bg-surface, #ffffff);
      border: 1px solid var(--border-subtle, #e2e8f0);
      border-radius: 18px;
      padding: 14px;
      box-shadow: var(--shadow-floating, 0 20px 40px -10px rgba(15, 23, 42, 0.12));
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px) scale(0.96);
      transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .sayed-dev-popup.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    /* ── Header ── */
    .sayed-dev-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-subtle, #e2e8f0);
      margin-bottom: 8px;
    }
    .sayed-dev-title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.2px;
      color: var(--accent-cyan, #0891b2);
      font-family: ui-monospace, monospace;
      text-transform: uppercase;
    }
    .sayed-dev-close {
      background: transparent;
      border: none;
      color: var(--text-muted, #94a3b8);
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.15s, background 0.15s;
    }
    .sayed-dev-close:hover {
      color: var(--text-primary, #0f172a);
      background: var(--accent-cyan-subtle, rgba(8, 145, 178, 0.08));
    }

    /* ── Link Rows ── */
    .sayed-dev-links {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .sayed-dev-link-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      border-radius: 12px;
      color: var(--text-primary, #0f172a);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.15s ease;
    }
    .sayed-dev-link-item:hover {
      background: var(--accent-cyan-subtle, rgba(8, 145, 178, 0.08));
      color: var(--accent-cyan, #0891b2);
    }
    .sayed-dev-link-item svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('aside');
  container.id = 'sayed-developer-credit-root';
  container.setAttribute('aria-label', 'Developer Credits');
  container.innerHTML = `
    <div class="sayed-dev-popup" id="sayed-dev-popup">
      <div class="sayed-dev-header">
        <span class="sayed-dev-title">FOUNDER / DEVELOPER</span>
        <button class="sayed-dev-close" id="sayed-dev-close" aria-label="Close">&times;</button>
      </div>
      <div class="sayed-dev-links">
        <a href="https://github.com/SayedNada74" target="_blank" rel="noopener noreferrer" class="sayed-dev-link-item">
          <span>GitHub</span>
          <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="https://sayed-nada-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" class="sayed-dev-link-item">
          <span>Portfolio</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </a>
        <a href="https://linkedin.com/in/sayed-nada-6852b9345" target="_blank" rel="noopener noreferrer" class="sayed-dev-link-item">
          <span>LinkedIn</span>
          <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </div>
    <button class="sayed-dev-trigger" id="sayed-dev-trigger" aria-label="Toggle Developer Credits">
      <span class="sayed-dev-code">&lt;/&gt;</span>
      <span class="sayed-dev-label">Developed by</span>
      <span class="sayed-dev-name">Sayed Nada</span>
    </button>
  `;

  document.body.appendChild(container);

  const trigger = document.getElementById('sayed-dev-trigger');
  const popup = document.getElementById('sayed-dev-popup');
  const closeBtn = document.getElementById('sayed-dev-close');

  trigger.addEventListener('click', function(e) {
    e.stopPropagation();
    popup.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    popup.classList.remove('active');
  });

  document.addEventListener('click', function(e) {
    if (!container.contains(e.target)) {
      popup.classList.remove('active');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      popup.classList.remove('active');
    }
  });
})();
