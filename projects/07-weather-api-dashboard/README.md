# 🌦️ ApexWeather — Real-Time Meteorological Intelligence Dashboard
**Elevvo Frontend Web Development Track — Task 7 (Level 3)**
**Engineered by Sayed Nada (`SayedNada74`)**

---

## 📌 1. Project Overview & Requirements Mapping

This project is built to fulfill and significantly exceed the official requirements of **Elevvo Internship Task 7**:
- **Fetch and display real-time weather data for multiple cities:** Direct integration with global meteorological satellites (Open-Meteo & WMO standard) + optional OpenWeatherMap key input.
- **Display details:** Current temperature, weather condition icons, "feels like", high/low range, and **7-day daily forecast** (exceeding the 3-day requirement).
- **Search functionality:** Global live geocoding search with debounced autocomplete and quick-access pinned capital chips.
- **Loading states:** Shimmer loading skeletons and graceful offline fallback snapshots.
- **Clean and minimal UI:** High-end glassmorphism following the **Golden Playbook (`PRODUCTION_STANDARDS_PLAYBOOK.md`)**.
- **Bonus Requirement:** Full **Geolocation API** support with reverse geocoding to auto-fetch the user's local city weather with one click.
- **Extra Mile Visuals ("هنزود جماليه واحترافيه"):** 60 FPS HTML5 Canvas Atmospheric Particle Engine that simulates realistic rain, snow, thunderstorms, sunny sunbursts, drifting clouds, and starry nights in real-time.

---

## ✨ 2. Key Architectural Features

### 🌪️ 1. Dynamic 60 FPS Canvas Weather Engine (`AtmosphereEngine`)
- Renders GPU-accelerated atmospheric weather effects directly on a full-screen HTML5 Canvas:
  - ☀️ **Sunny / Clear Day**: Atmospheric golden bloom and drifting light motes.
  - 🌧️ **Rain**: High-velocity angled streaks with ripple splashes on the cards.
  - ⛈️ **Thunderstorm**: Heavy rainfall with intermittent lightning strobe pulses.
  - ❄️ **Snow**: Multi-layered drifting snowflakes with gentle lateral flutter.
  - ☁️ **Clouds / Fog**: Drifting volumetric cloud puffs.
  - 🌙 **Starry Night**: Twinkling starfield with celestial moon glow.
- **Manual Simulation Pills**: Users can manually test and preview any atmosphere with a single click.

### 🛰️ 2. Resilient Hybrid Meteorological Service (`WeatherService`)
1. **Primary Feed (Open-Meteo & WMO Engine)**:
   - 100% free, real-time worldwide telemetry with zero API key requirement, eliminating key expiration or CORS issues for reviewers.
2. **Secondary Feed (OpenWeatherMap API Key Integration)**:
   - Settings modal allowing users to save their custom OpenWeatherMap API key to `localStorage`.
3. **Resilient Offline Cache**:
   - Pre-cached authentic meteorological snapshots for Cairo, London, Tokyo, New York, Dubai, Paris, and Riyadh.

### 📈 3. Interactive SVG Temperature Spline Wave Chart
- Renders a continuous, smooth **Cubic Bézier Curve** (`d="M x0 y0 C ..."`) across the 24-hour hourly forecast.
- **Dynamic Scrubber & Live Tooltip**: Hovering or dragging across the spline displays a vertical dashed tracer line, glowing indicator dot, exact time, weather icon, temperature, and precipitation chance.
- Automatic **High & Low peak/trough badges** right on the chart.
- Responsive scaling across mobile, tablet, and widescreen viewports with momentum touch tracking.

### 🎧 4. Procedural Web Audio Ambient Soundscapes (`WeatherSoundEngine`)
- Synthesizes realistic 3D ambient weather sounds directly via the **Web Audio API (`AudioContext`)** with zero external audio assets:
  - 🌧️ **Rain**: Biquad-filtered pink noise with smooth droplet modulation.
  - ⛈️ **Storm**: Sub-bass rumble with periodic synthesized distant thunder rolls.
  - 🌬️ **Wind & Clouds**: Resonant bandpass filter modulated by a slow breathing LFO.
  - ☀️ **Clear Sky**: Warm meditative harmonic pads with gentle frequency shimmer.
- Animated 3-bar equalizer icon in the header showing active playback.

### 🍃 5. Air Quality Index (AQI) Radial Diagnostics Panel
- Semi-circular radial gauge compliant with the **European Air Quality Index (EAQI)** standard.
- Live telemetry for **$\text{PM}_{2.5}$**, **$\text{PM}_{10}$**, **$\text{O}_3$**, and **$\text{NO}_2$** concentrations ($\mu\text{g/m}^3$).
- Color-coded safety classifications with personalized health advice.

### 💡 6. Smart AI Lifestyle & Outfit Advisor
- **What to Wear**: Suggests outfits based on real-time temperature, wind chill, and precipitation (e.g. heavy winter coat vs. light breathable cotton + UV protection + umbrella alerts).
- **Outdoor Activity Score**: 1–10 rated fitness index evaluating optimal jogging and cycling conditions.
- **Commute & Road Safety**: Wet pavement and fog warnings with braking distance recommendations.

### 🧭 7. Bento Diagnostics Grid
- **Wind Speed & Direction**: Dual unit display with dynamic rotating compass needle.
- **Humidity & Comfort**: Percentage gauge with comfort classification (Optimal, Humid, Dry).
- **UV Radiation Index**: 0–11+ index with color-coded safety level.
- **Sun Path & Twilight Arc**: SVG arc displaying sunrise, sunset, and solar position.
- **Barometric Pressure**: in hPa with atmospheric trend.
- **Visibility**: Distance in kilometers with atmospheric clarity rating.

### 🌐 8. Bilingual Support (RTL / LTR) & Unit Toggle
- Instant toggle between **Celsius (°C)** and **Fahrenheit (°F)** with reactive recalculation across all 24-hour and 7-day metrics.
- Complete **English (LTR)** and **Arabic (RTL)** dictionaries with font auto-switching (`Plus Jakarta Sans` / `Tajawal`).

---

## 🛠️ 3. Technologies & Standards

- **Core**: HTML5 Semantic Markup, Vanilla CSS3, Modern ES6+ Modular JavaScript.
- **Styling**: Tailwind CSS & Golden Playbook Glassmorphism Design Tokens.
- **Canvas**: 60 FPS HTML5 Canvas 2D context particle engine.
- **APIs**: Open-Meteo Forecast & Geocoding API, OpenWeatherMap API, Browser Geolocation API, OpenStreetMap Reverse Geocoding.
- **Standards Compliance**: [PRODUCTION_STANDARDS_PLAYBOOK.md](file:///d:/Elevvo%20Internship%20Frontend%20Web%20Development%20Track/%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D9%84%D9%88%D8%AC%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%20%D9%88%D8%AA%D8%B8%D8%A8%D9%8A%D8%B7%20%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%AF%D9%8A%D8%B2%D8%A7%D9%8A%D9%86%20%D9%88%D8%A7%D9%84%D9%83%D9%84%D8%A7%D9%85%20%D8%AF%D9%87/PRODUCTION_STANDARDS_PLAYBOOK.md).

---

## 🚀 4. How to Run Locally

### Option 1: Using Vite / Dev Server
```bash
cd "projects/07-weather-api-dashboard"
npx -y serve . -l 5174
```
Or open in any local web server.

### Option 2: Direct Browser Launch
Simply open `index.html` in Chrome, Edge, Firefox, or Safari with Live Server.

---

## 👨‍💻 5. Verified Author & Developer Channels

- **Engineer**: **Sayed Nada**
- **GitHub**: [github.com/SayedNada74](https://github.com/SayedNada74)
- **LinkedIn**: [linkedin.com/in/sayed-nada-6852b9345](https://linkedin.com/in/sayed-nada-6852b9345)
- **WhatsApp**: [+201206620678](https://wa.me/201206620678)
- **Email**: [sayedmahmouda00@gmail.com](mailto:sayedmahmouda00@gmail.com)
