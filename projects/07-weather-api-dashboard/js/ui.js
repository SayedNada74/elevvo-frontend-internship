/**
 * UIManager — DOM Manipulation & Dynamic Component Rendering
 * Renders Hero card, Bento metrics, 24h hourly timeline, 7-day forecast,
 * SVG weather icons, and manages loading skeleton states.
 */
import { I18N } from './i18n.js';

export class UIManager {
  constructor(lang = 'en', unit = 'C') {
    this.lang = lang;
    this.unit = unit; // 'C' | 'F'
  }

  setLang(lang) {
    this.lang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  setUnit(unit) {
    this.unit = unit;
  }

  t(key, replacements = {}) {
    const dict = I18N[this.lang] || I18N.en;
    let str = dict[key] || key;
    for (const placeholder in replacements) {
      str = str.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return str;
  }

  formatTemp(celsius) {
    if (celsius === undefined || celsius === null) return '--°';
    if (this.unit === 'F') {
      const f = Math.round((celsius * 9) / 5 + 32);
      return `${f}°`;
    }
    return `${Math.round(celsius)}°`;
  }

  formatSpeed(kmh) {
    if (this.unit === 'F') {
      const mph = Math.round(kmh * 0.621371);
      return `${mph} mph`;
    }
    return `${kmh} km/h`;
  }

  getWeatherIconSvg(iconName, className = 'w-6 h-6') {
    switch (iconName) {
      case 'sun':
        return `<svg class="${className} text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
      case 'moon':
        return `<svg class="${className} text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
      case 'sun-dim':
        return `<svg class="${className} text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/></svg>`;
      case 'cloud-sun':
        return `<svg class="${className} text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/></svg>`;
      case 'cloud':
        return `<svg class="${className} text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`;
      case 'cloud-rain':
      case 'cloud-drizzle':
        return `<svg class="${className} text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>`;
      case 'cloud-rain-wind':
        return `<svg class="${className} text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9.2 22 3-7"/><path d="m9 13-3 7"/><path d="m17 13-3 7"/></svg>`;
      case 'cloud-lightning':
        return `<svg class="${className} text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></svg>`;
      case 'cloud-snow':
      case 'snowflake':
        return `<svg class="${className} text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4l-3 6"/><path d="m17 3-3 6h-4L7 3"/><path d="M2 12h20"/><path d="m20 10-2.5 1.25L18 14"/><path d="m4 10 2.5 1.25L6 14"/><path d="m20 14-2.5-1.25L18 10"/><path d="m4 14 2.5-1.25L6 10"/></svg>`;
      case 'cloud-fog':
        return `<svg class="${className} text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/></svg>`;
      case 'sunset':
        return `<svg class="${className} text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>`;
      default:
        return `<svg class="${className} text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>`;
    }
  }

  showSkeleton() {
    const el = document.getElementById('weather-content-wrapper');
    if (!el) return;
    el.classList.add('opacity-50', 'pointer-events-none');
    document.getElementById('loading-indicator')?.classList.remove('hidden');
  }

  hideSkeleton() {
    const el = document.getElementById('weather-content-wrapper');
    if (!el) return;
    el.classList.remove('opacity-50', 'pointer-events-none');
    document.getElementById('loading-indicator')?.classList.add('hidden');
  }

  renderHeroCard(data) {
    const heroEl = document.getElementById('hero-weather-card');
    if (!heroEl) return;

    const conditionText = this.t(data.conditionKey) || data.condition;
    const highLowText = this.t('highLow', {
      high: this.formatTemp(data.high).replace('°', ''),
      low: this.formatTemp(data.low).replace('°', '')
    });

    heroEl.innerHTML = `
      <div class="glass-panel relative overflow-hidden p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
        <!-- Top Row: Location & Live Tag -->
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold mb-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>${this.t('appSubtitle')}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>${data.city}</span>
              ${data.country ? `<span class="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400">· ${data.country}</span>` : ''}
            </h1>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 flex items-center gap-2">
              <span>${highLowText}</span>
              <span>·</span>
              <span>${this.t('feelsLike')} ${this.formatTemp(data.feelsLike)}</span>
            </p>
          </div>

          <!-- Weather Icon Badge -->
          <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.12] shadow-md dark:shadow-xl flex items-center justify-center animate-float">
            ${this.getWeatherIconSvg(data.icon, 'w-12 h-12 sm:w-16 sm:h-16')}
          </div>
        </div>

        <!-- Middle Row: Giant Temperature & Condition -->
        <div class="my-6 sm:my-8 flex items-baseline gap-4">
          <span class="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white font-mono tracking-tighter drop-shadow-sm dark:drop-shadow-md">
            ${this.formatTemp(data.temp)}
          </span>
          <div class="flex flex-col">
            <span class="text-lg sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-300">
              ${conditionText}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ${data.isNight ? '🌙 Night Observation' : '☀️ Daylight Observation'}
            </span>
          </div>
        </div>

        <!-- Bottom Row: Quick Diagnostics Ribbon -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] text-xs">
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('windStatus')}</span>
            <span class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">${this.formatSpeed(data.windSpeed)}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('humidity')}</span>
            <span class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">${data.humidity}%</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('uvIndex')}</span>
            <span class="font-bold text-amber-500 dark:text-amber-400 font-mono mt-0.5 block">${data.uvIndex} (${data.uvIndex > 6 ? 'High' : 'Mod'})</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
            <span class="text-slate-500 dark:text-slate-400 block text-[11px]">${this.t('pressure')}</span>
            <span class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">${data.pressure} hPa</span>
          </div>
        </div>
      </div>
    `;
  }

  renderHourlyTimeline(hourlyList) {
    const container = document.getElementById('hourly-timeline-track');
    if (!container || !hourlyList) return;

    container.innerHTML = hourlyList.map((item, idx) => `
      <div class="flex-shrink-0 flex flex-col items-center justify-between p-3.5 w-20 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all duration-200 group cursor-default">
        <span class="text-[11px] font-mono font-medium ${idx === 0 ? 'text-indigo-400 font-bold' : 'text-slate-400'}">
          ${idx === 0 ? 'Now' : item.time}
        </span>
        <div class="my-3 group-hover:scale-110 transition-transform">
          ${this.getWeatherIconSvg(item.icon, 'w-6 h-6')}
        </div>
        <span class="text-sm font-bold text-white font-mono">
          ${this.formatTemp(item.temp)}
        </span>
        ${item.pop > 0 ? `
          <span class="text-[10px] font-bold text-sky-400 mt-1 font-mono">
            💧 ${item.pop}%
          </span>
        ` : `
          <span class="text-[10px] text-slate-500 mt-1 font-mono">0%</span>
        `}
      </div>
    `).join('');
  }

  renderSevenDayForecast(dailyList) {
    const container = document.getElementById('seven-day-forecast-list');
    if (!container || !dailyList) return;

    // Determine absolute min and max to scale progress bars
    const allHighs = dailyList.map(d => d.high);
    const allLows = dailyList.map(d => d.low);
    const minTemp = Math.min(...allLows);
    const maxTemp = Math.max(...allHighs);
    const tempRange = Math.max(maxTemp - minTemp, 1);

    container.innerHTML = dailyList.map((item, idx) => {
      const leftPercent = Math.max(0, Math.round(((item.low - minTemp) / tempRange) * 100));
      const widthPercent = Math.max(15, Math.round(((item.high - item.low) / tempRange) * 100));

      const dayTitle = idx === 0 ? this.t('today') : (idx === 1 ? this.t('tomorrow') : item.day);
      const condText = this.t(item.conditionKey) || item.condition;

      return `
        <div class="flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors border-b border-white/[0.04] last:border-0">
          <div class="w-24 sm:w-28 flex-shrink-0">
            <span class="text-xs font-bold ${idx === 0 ? 'text-indigo-400' : 'text-white'} block">${dayTitle}</span>
            <span class="text-[10px] text-slate-400 font-mono block">${item.date}</span>
          </div>

          <div class="flex items-center gap-2 flex-shrink-0 w-28 sm:w-32">
            ${this.getWeatherIconSvg(item.icon, 'w-5 h-5')}
            <span class="text-xs text-slate-300 truncate">${condText}</span>
          </div>

          <!-- Graphical Temperature Range Bar -->
          <div class="flex-1 flex items-center gap-2 max-w-xs">
            <span class="text-xs font-mono text-slate-400 w-8 text-right">${this.formatTemp(item.low)}</span>
            <div class="flex-1 h-2 rounded-full bg-white/[0.06] relative overflow-hidden">
              <div 
                class="absolute h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400"
                style="left: ${leftPercent}%; width: ${widthPercent}%;"
              ></div>
            </div>
            <span class="text-xs font-mono font-bold text-white w-8 text-left">${this.formatTemp(item.high)}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderBentoMetrics(data) {
    // 1. Wind & Vector
    const windEl = document.getElementById('bento-wind');
    if (windEl) {
      windEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('windStatus')}</span>
          <div class="h-8 w-8 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <div>
            <span class="text-3xl font-black text-white font-mono">${this.formatSpeed(data.windSpeed)}</span>
            <p class="text-xs text-slate-400 mt-1">${this.t('windGusts', { speed: this.formatSpeed(Math.round(data.windSpeed * 1.3)) })}</p>
          </div>
          <!-- Rotating Compass Icon -->
          <div class="relative w-14 h-14 rounded-full border border-white/[0.12] flex items-center justify-center bg-white/[0.02]">
            <span class="text-[9px] font-bold text-slate-500 absolute top-1">N</span>
            <svg 
              class="w-6 h-6 text-sky-400 transition-transform duration-700" 
              style="transform: rotate(${data.windDirection || 0}deg)"
              viewBox="0 0 24 24" fill="currentColor"
            >
              <polygon points="12,2 15,10 12,8 9,10" fill="#38bdf8"/>
              <polygon points="12,22 15,14 12,16 9,14" fill="#64748b"/>
            </svg>
          </div>
        </div>
      `;
    }

    // 2. Humidity & Comfort
    const humEl = document.getElementById('bento-humidity');
    if (humEl) {
      let comfortText = this.t('comfortOptimal');
      let comfortColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      if (data.humidity > 65) {
        comfortText = this.t('comfortHumid');
        comfortColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      } else if (data.humidity < 30) {
        comfortText = this.t('comfortDry');
        comfortColor = 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      }

      humEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('humidity')}</span>
          <div class="h-8 w-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-black text-white font-mono">${data.humidity}%</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full border ${comfortColor}">${comfortText}</span>
          </div>
          <!-- Progress meter -->
          <div class="w-full h-2 rounded-full bg-white/[0.06] mt-3 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600" style="width: ${data.humidity}%"></div>
          </div>
        </div>
      `;
    }

    // 3. UV Index Meter
    const uvEl = document.getElementById('bento-uv');
    if (uvEl) {
      let uvLabel = this.t('uvLow');
      let uvColor = 'text-emerald-400';
      if (data.uvIndex >= 3 && data.uvIndex < 6) {
        uvLabel = this.t('uvModerate');
        uvColor = 'text-amber-400';
      } else if (data.uvIndex >= 6 && data.uvIndex < 8) {
        uvLabel = this.t('uvHigh');
        uvColor = 'text-orange-400';
      } else if (data.uvIndex >= 8) {
        uvLabel = this.t('uvVeryHigh');
        uvColor = 'text-rose-500';
      }

      uvEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('uvIndex')}</span>
          <div class="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-baseline justify-between">
            <span class="text-3xl font-black text-white font-mono">${data.uvIndex}</span>
            <span class="text-xs font-bold ${uvColor}">Rating: ${Math.round(data.uvIndex)}/11+</span>
          </div>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">${uvLabel}</p>
        </div>
      `;
    }

    // 4. Sun Cycle Arc
    const sunEl = document.getElementById('bento-sun');
    if (sunEl) {
      sunEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('sunCycle')}</span>
          <div class="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="M22 12h-4"/></svg>
          </div>
        </div>
        <div class="mt-3 flex flex-col justify-between h-24">
          <!-- Solar Curve SVG -->
          <div class="relative w-full h-12 flex items-center justify-center">
            <svg class="w-full h-full" viewBox="0 0 160 50">
              <path d="M 10,45 Q 80,5 150,45" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="4,4"/>
              <!-- Sun Marker -->
              <circle cx="95" cy="18" r="5" fill="#f59e0b" filter="drop-shadow(0 0 4px #f59e0b)"/>
            </svg>
          </div>
          <div class="flex items-center justify-between text-xs pt-1">
            <div class="flex items-center gap-1.5 text-amber-300">
              <span>🌅</span>
              <span class="font-mono">${data.sunrise}</span>
            </div>
            <div class="flex items-center gap-1.5 text-rose-400">
              <span>🌇</span>
              <span class="font-mono">${data.sunset}</span>
            </div>
          </div>
        </div>
      `;
    }

    // 5. Barometric Pressure
    const pressEl = document.getElementById('bento-pressure');
    if (pressEl) {
      pressEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('pressure')}</span>
          <div class="h-8 w-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-3xl font-black text-white font-mono">${data.pressure} <span class="text-sm font-normal text-slate-400">hPa</span></span>
          <p class="text-xs text-slate-400 mt-2">${this.t('pressureNormal')}</p>
        </div>
      `;
    }

    // 6. Atmospheric Visibility
    const visEl = document.getElementById('bento-visibility');
    if (visEl) {
      visEl.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span class="text-xs font-semibold text-slate-400">${this.t('visibility')}</span>
          <div class="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-3xl font-black text-white font-mono">${data.visibility} <span class="text-sm font-normal text-slate-400">km</span></span>
          <p class="text-xs text-emerald-400 mt-2">${this.t('visibilityClear')}</p>
        </div>
      `;
    }
  }

  renderPinnedCities(cities, currentCityName, onSelectCity, onRemoveCity) {
    const container = document.getElementById('pinned-cities-container');
    if (!container) return;

    container.innerHTML = cities.map((c) => {
      const isCurrent = c.name.toLowerCase() === currentCityName.toLowerCase();
      return `
        <button
          data-city="${c.name}"
          data-lat="${c.lat}"
          data-lon="${c.lon}"
          class="city-chip flex-shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
            isCurrent 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/50' 
              : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
          }"
        >
          <span>📍</span>
          <span>${c.name}</span>
        </button>
      `;
    }).join('');

    // Attach click handlers
    container.querySelectorAll('.city-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const city = btn.dataset.city;
        const lat = parseFloat(btn.dataset.lat);
        const lon = parseFloat(btn.dataset.lon);
        onSelectCity(city, lat, lon);
      });
    });
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-[99999] px-4 py-3 rounded-2xl border text-xs sm:text-sm font-bold shadow-2xl backdrop-blur-xl animate-fade-in flex items-center gap-2.5 ${
      type === 'success' 
        ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-300'
        : (type === 'error' ? 'bg-rose-950/90 border-rose-500/40 text-rose-300' : 'bg-[#131622]/95 border-white/[0.12] text-white')
    }`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : (type === 'error' ? '⚠' : 'ℹ')}</span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'transition-opacity');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}
