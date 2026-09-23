/**
 * AtmosphereEngine — 60 FPS Canvas Weather Particle System
 * Simulates realistic meteorological atmospheres:
 * - Clear / Sunny (golden sun flare, floating light motes)
 * - Rain (angled streaks with surface splash rings)
 * - Thunderstorm (heavy rain + ambient lightning flashes)
 * - Snow (multilayer drifting flakes with gentle breeze)
 * - Clouds / Mist (drifting volumetric puffs)
 * - Night (twinkling starfield with celestial glow)
 */
export class AtmosphereEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.currentMode = 'clear-day'; // 'clear-day' | 'rain' | 'storm' | 'snow' | 'clouds' | 'night'
    this.particles = [];
    this.splashes = [];
    this.stars = [];
    this.lightningTimer = 0;
    this.isFlashing = false;
    this.animationId = null;

    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);

    window.addEventListener('resize', this.resize);
    this.resize();
    this.initStars();
    this.setMode('clear-day');
    this.start();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.initStars();
  }

  initStars() {
    this.stars = [];
    const count = Math.floor((this.width * this.height) / 8000);
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * (this.height * 0.7),
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        increasing: Math.random() > 0.5
      });
    }
  }

  setMode(mode) {
    this.currentMode = mode;
    this.particles = [];
    this.splashes = [];
    this.lightningTimer = 0;
    this.isFlashing = false;

    let particleCount = 120;
    if (mode === 'rain') particleCount = 160;
    if (mode === 'storm') particleCount = 260;
    if (mode === 'snow') particleCount = 110;
    if (mode === 'clouds') particleCount = 35;
    if (mode === 'clear-day') particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    const w = this.width;
    const h = this.height;

    switch (this.currentMode) {
      case 'rain':
      case 'storm':
        return {
          x: Math.random() * (w + 200) - 100,
          y: Math.random() * h,
          length: Math.random() * 24 + 16,
          speed: Math.random() * 12 + 18,
          thickness: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.35 + 0.35,
          angle: 0.15
        };
      case 'snow':
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 3 + 1.2,
          speed: Math.random() * 1.5 + 0.8,
          swing: Math.random() * 2 + 1,
          swingSpeed: Math.random() * 0.03 + 0.01,
          angle: Math.random() * Math.PI * 2,
          alpha: Math.random() * 0.6 + 0.3
        };
      case 'clouds':
        return {
          x: Math.random() * (w + 400) - 200,
          y: Math.random() * (h * 0.65),
          radius: Math.random() * 90 + 70,
          speed: Math.random() * 0.4 + 0.15,
          alpha: Math.random() * 0.08 + 0.04
        };
      case 'clear-day':
      default:
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 3 + 1,
          speedY: -(Math.random() * 0.6 + 0.2),
          speedX: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.4 + 0.2
        };
    }
  }

  createSplash(x, y) {
    const splashCount = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < splashCount; i++) {
      this.splashes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: -(Math.random() * 3 + 1),
        radius: Math.random() * 1.5 + 0.8,
        alpha: 0.6,
        life: 1
      });
    }
  }

  updateAndDrawRain() {
    const ctx = this.ctx;
    const isStorm = this.currentMode === 'storm';

    // Lightning pulse
    if (isStorm) {
      this.lightningTimer++;
      if (this.lightningTimer > 180 && Math.random() < 0.02) {
        this.isFlashing = true;
        this.lightningTimer = 0;
        setTimeout(() => { this.isFlashing = false; }, 80);
      }
      if (this.isFlashing) {
        ctx.fillStyle = 'rgba(199, 210, 254, 0.15)';
        ctx.fillRect(0, 0, this.width, this.height);
      }
    }

    ctx.strokeStyle = isStorm ? 'rgba(199, 210, 254, 0.55)' : 'rgba(186, 230, 253, 0.45)';
    ctx.lineCap = 'round';

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      ctx.lineWidth = p.thickness;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.length * p.angle, p.y + p.length);
      ctx.stroke();

      p.x += p.speed * p.angle;
      p.y += p.speed;

      if (p.y >= this.height - 20) {
        if (Math.random() < 0.3) {
          this.createSplash(p.x, this.height - 10);
        }
        p.y = -p.length;
        p.x = Math.random() * (this.width + 200) - 100;
      }
    }

    // Render splashes
    for (let i = this.splashes.length - 1; i >= 0; i--) {
      const s = this.splashes[i];
      ctx.fillStyle = `rgba(186, 230, 253, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();

      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.2; // gravity
      s.alpha -= 0.035;

      if (s.alpha <= 0) {
        this.splashes.splice(i, 1);
      }
    }
  }

  updateAndDrawSnow() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.angle += p.swingSpeed;
      p.x += Math.sin(p.angle) * p.swing + 0.5;
      p.y += p.speed;

      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      if (p.y > this.height) {
        p.y = -p.radius * 2;
        p.x = Math.random() * this.width;
      }
      if (p.x > this.width) p.x = 0;
      if (p.x < 0) p.x = this.width;
    }
  }

  updateAndDrawClouds() {
    const ctx = this.ctx;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.speed;
      if (p.x - p.radius > this.width) {
        p.x = -p.radius * 2;
        p.y = Math.random() * (this.height * 0.65);
      }

      const grad = ctx.createRadialGradient(p.x, p.y, p.radius * 0.1, p.x, p.y, p.radius);
      grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
      grad.addColorStop(0.7, `rgba(226, 232, 240, ${p.alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(226, 232, 240, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  updateAndDrawClearDay() {
    const ctx = this.ctx;

    // Golden sun glow top right
    const sunX = this.width * 0.85;
    const sunY = 120;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 320);
    sunGrad.addColorStop(0, 'rgba(251, 191, 36, 0.18)');
    sunGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0.08)');
    sunGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

    ctx.fillStyle = sunGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Light motes floating gently
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = this.height;
        p.x = Math.random() * this.width;
      }

      ctx.fillStyle = `rgba(253, 230, 138, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  updateAndDrawNight() {
    const ctx = this.ctx;

    // Twinkling stars
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      if (s.increasing) {
        s.alpha += s.speed;
        if (s.alpha >= 0.95) s.increasing = false;
      } else {
        s.alpha -= s.speed;
        if (s.alpha <= 0.15) s.increasing = true;
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Moon aura top right
    const moonX = this.width * 0.85;
    const moonY = 110;
    const moonGrad = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 260);
    moonGrad.addColorStop(0, 'rgba(199, 210, 254, 0.22)');
    moonGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
    moonGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');

    ctx.fillStyle = moonGrad;
    ctx.fillRect(0, 0, this.width, this.height);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    switch (this.currentMode) {
      case 'rain':
      case 'storm':
        this.updateAndDrawRain();
        break;
      case 'snow':
        this.updateAndDrawSnow();
        break;
      case 'clouds':
        this.updateAndDrawClouds();
        break;
      case 'night':
        this.updateAndDrawNight();
        break;
      case 'clear-day':
      default:
        this.updateAndDrawClearDay();
        break;
    }

    this.animationId = requestAnimationFrame(this.animate);
  }

  start() {
    if (!this.animationId) {
      this.animate();
    }
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}
