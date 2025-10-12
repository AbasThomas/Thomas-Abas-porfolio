import React, { useEffect, useRef, useCallback, useMemo } from "react";

const ScrollGridBackground = () => {
  const scrollRef = useRef({ y: 0, velocity: 0, lastTime: 0 });
  const rafRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const timeRef = useRef(0);
  const resizeObserverRef = useRef(null);
  const contextRef = useRef(null);

  // Enhanced particle system with multiple types
  const particleTypes = useMemo(() => ({
    DUST: { color: [200, 220, 255], size: [0.3, 1.2], alpha: [0.1, 0.3], speed: [0.1, 0.3] },
    SPARKLE: { color: [255, 255, 255], size: [0.1, 0.5], alpha: [0.3, 0.8], speed: [0.05, 0.15] },
    ENERGY: { color: [100, 150, 255], size: [0.5, 1.5], alpha: [0.2, 0.4], speed: [0.2, 0.4] }
  }), []);

  class Particle {
    constructor(width, height, type = 'DUST') {
      const config = particleTypes[type];
      this.type = type;
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * config.speed[1];
      this.vy = (Math.random() - 0.5) * config.speed[1];
      this.r = config.size[0] + Math.random() * (config.size[1] - config.size[0]);
      this.alpha = config.alpha[0] + Math.random() * (config.alpha[1] - config.alpha[0]);
      this.originalAlpha = this.alpha;
      this.oscillation = Math.random() * Math.PI * 2;
      this.oscillationSpeed = 0.001 + Math.random() * 0.004;
      this.color = config.color;
      this.life = 1;
      this.decay = 0.0002 + Math.random() * 0.0003;
      this.attraction = Math.random() * 0.02;
      this.spin = (Math.random() - 0.5) * 0.02;
      this.angle = Math.random() * Math.PI * 2;
    }

    update(dt, scrollY, scrollVelocity, width, height, mouse) {
      this.life -= this.decay * dt;
      if (this.life <= 0) return false;

      this.oscillation += this.oscillationSpeed * dt;
      this.angle += this.spin * dt;
      
      // Dynamic alpha based on multiple factors
      this.alpha = this.originalAlpha * this.life * 
        (0.8 + 0.2 * Math.sin(this.oscillation));

      // Enhanced scroll parallax with velocity
      const scrollFactor = 0.00015 * (this.r * 0.6 + 0.4);
      const velocityFactor = scrollVelocity * 0.0001;
      
      // Mouse interaction
      let mouseInfluence = 0;
      if (mouse.active) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          mouseInfluence = (1 - distance / 150) * this.attraction;
          this.vx += (dx / distance) * mouseInfluence;
          this.vy += (dy / distance) * mouseInfluence;
        }
      }

      this.vx *= 0.998;
      this.vy *= 0.998;

      this.x += this.vx * dt * 0.04 + scrollVelocity * 0.02;
      this.y += this.vy * dt * 0.04 + (scrollY * scrollFactor) + velocityFactor;

      // Elastic bounds with momentum preservation
      const boundsBuffer = 25;
      if (this.x < -boundsBuffer) {
        this.x = width + boundsBuffer;
        this.vx *= 0.8;
      }
      if (this.x > width + boundsBuffer) {
        this.x = -boundsBuffer;
        this.vx *= 0.8;
      }
      if (this.y < -boundsBuffer) {
        this.y = height + boundsBuffer;
        this.vy *= 0.8;
      }
      if (this.y > height + boundsBuffer) {
        this.y = -boundsBuffer;
        this.vy *= 0.8;
      }

      return true;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      
      if (this.type === 'SPARKLE') {
        // Sparkle effect with star shape
        ctx.fillStyle = `rgba(${this.color.join(',')}, ${this.alpha})`;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          const radius = i % 2 === 0 ? this.r : this.r * 0.5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        // Regular particle with glow effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.r);
        gradient.addColorStop(0, `rgba(${this.color.join(',')}, ${this.alpha})`);
        gradient.addColorStop(1, `rgba(${this.color.join(',')}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    }
  }

  const initParticles = useCallback((count, width, height) => {
    const particles = [];
    const ratios = { DUST: 0.7, SPARKLE: 0.2, ENERGY: 0.1 };
    
    Object.entries(ratios).forEach(([type, ratio]) => {
      const typeCount = Math.floor(count * ratio);
      for (let i = 0; i < typeCount; i++) {
        particles.push(new Particle(width, height, type));
      }
    });
    
    particlesRef.current = particles;
  }, [particleTypes]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const dpr = Math.max(1.5, window.devicePixelRatio || 1);
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      const ctx = canvas.getContext("2d", { alpha: true });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      contextRef.current = ctx;
      
      const particleCount = Math.min(400, Math.max(60, Math.round((width * height) / 4000)));
      initParticles(particleCount, width, height);
    }
  }, [initParticles]);

  const drawBackground = useCallback((ctx, width, height, time) => {
    // Clear with darker fade effect for richer night look
    ctx.fillStyle = 'rgba(6, 10, 20, 0.2)';
    ctx.fillRect(0, 0, width, height);

    // Dynamic gradient overlay
    const gradient = ctx.createLinearGradient(
      0, 0, 
      width * Math.sin(time * 0.0001), 
      height * Math.cos(time * 0.0001)
    );
  gradient.addColorStop(0, 'rgba(40, 54, 120, 0.12)');
  gradient.addColorStop(0.5, 'rgba(25, 60, 120, 0.08)');
  gradient.addColorStop(1, 'rgba(20, 10, 30, 0.06)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Pulsing orbs in background
    const orbCount = 3;
    for (let i = 0; i < orbCount; i++) {
      const pulse = Math.sin(time * 0.001 + i * 2) * 0.5 + 0.5;
      const x = width * (0.2 + i * 0.3);
      const y = height * (0.3 + Math.sin(time * 0.0005 + i) * 0.1);
      const radius = 80 + pulse * 40;
      
      const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  orbGradient.addColorStop(0, `rgba(120, 180, 255, ${0.06 * pulse})`);
  orbGradient.addColorStop(1, 'rgba(120, 180, 255, 0)');
      
      ctx.fillStyle = orbGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  // Starfield (twinkling) precomputed for performance
  const starsRef = useRef([]);
  const streaksRef = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    const count = Math.round((width * height) / 20000);
    const stars = new Array(count).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2,
      alpha: 0.2 + Math.random() * 0.8,
      twinkle: Math.random() * Math.PI * 2,
    }));
    starsRef.current = stars;
  }, []);


  const updateScroll = useCallback(() => {
    const now = performance.now();
    const currentScroll = window.scrollY || window.pageYOffset || 0;
    const deltaTime = now - scrollRef.current.lastTime;
    
    if (deltaTime > 0) {
      scrollRef.current.velocity = (currentScroll - scrollRef.current.y) / deltaTime;
      scrollRef.current.y = currentScroll;
      scrollRef.current.lastTime = now;
    }
  }, []);

  const updateParticles = useCallback((dt, width, height) => {
    const aliveParticles = [];
    
    for (const particle of particlesRef.current) {
      if (particle.update(dt, scrollRef.current.y, scrollRef.current.velocity, width, height, mouseRef.current)) {
        aliveParticles.push(particle);
      }
    }
    
    // Replenish particles
    const targetCount = Math.min(400, Math.max(60, Math.round((width * height) / 4000)));
    while (aliveParticles.length < targetCount) {
      aliveParticles.push(new Particle(width, height, 
        Math.random() < 0.7 ? 'DUST' : Math.random() < 0.5 ? 'SPARKLE' : 'ENERGY'));
    }
    
    particlesRef.current = aliveParticles;
  }, []);

  const animationLoop = useCallback((time) => {
    timeRef.current = time;
    const dt = Math.min(40, time - (timeRef.current || time));
    
    updateScroll();
    
    const canvas = canvasRef.current;
    if (canvas && contextRef.current) {
      const ctx = contextRef.current;
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;
      
  drawBackground(ctx, width, height, time);
      // draw stars (twinkling)
      if (starsRef.current && starsRef.current.length) {
        ctx.save();
        for (const s of starsRef.current) {
          const tw = 0.6 + 0.4 * Math.sin(time * 0.002 + s.twinkle);
          ctx.fillStyle = `rgba(255,255,255,${Math.min(1, s.alpha * tw) * 0.9})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * tw, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      updateParticles(dt, width, height);
      
      // Draw particles
      ctx.save();
      for (const particle of particlesRef.current) {
        particle.draw(ctx);
      }
      ctx.restore();

      // Occasionally spawn streaks
      if (Math.random() < 0.004) {
        streaksRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.6,
          vx: -6 - Math.random() * 6,
          vy: 1 + Math.random() * 2,
          life: 1,
          len: 60 + Math.random() * 120,
        });
      }

      // Draw and update streaks
      if (streaksRef.current.length) {
        ctx.save();
        for (let i = streaksRef.current.length - 1; i >= 0; i--) {
          const s = streaksRef.current[i];
          s.life -= 0.02;
          s.x += s.vx;
          s.y += s.vy;
          const alpha = Math.max(0, s.life);
          const grd = ctx.createLinearGradient(s.x, s.y, s.x + s.vx * s.len, s.y + s.vy * s.len);
          grd.addColorStop(0, `rgba(255,255,255,${0.9 * alpha})`);
          grd.addColorStop(1, `rgba(120,180,255,${0.0 * alpha})`);
          ctx.strokeStyle = grd;
          ctx.lineWidth = 1.2 + (1 - s.life) * 2;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.vx * s.len, s.y + s.vy * s.len);
          ctx.stroke();

          if (s.life <= 0) streaksRef.current.splice(i, 1);
        }
        ctx.restore();
      }
    }
    
    rafRef.current = requestAnimationFrame(animationLoop);
  }, [updateScroll, updateParticles, drawBackground]);

  // Mouse interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Passive scroll handling - updateScroll is called in animation loop
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize
    const init = () => {
      try {
        resizeCanvas();
        scrollRef.current.lastTime = performance.now();
        rafRef.current = requestAnimationFrame(animationLoop);
      } catch (error) {
        console.warn('Background animation initialization failed:', error);
      }
    };

    resizeObserverRef.current = new ResizeObserver(resizeCanvas);
    if (canvasRef.current) {
      resizeObserverRef.current.observe(canvasRef.current);
    }

    init();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, [resizeCanvas, animationLoop]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none">
      {/* Multi-layered gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-orb"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-mesh opacity-50"
      />

      {/* Animated grid layers */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-dynamic"
        style={{
          transform: `translateY(${-(scrollRef.current.y || 0) * 0.03}px) rotate(${scrollRef.current.velocity * 0.0001}deg)`,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-perspective opacity-40"
        style={{
          transform: `translateY(${-(scrollRef.current.y || 0) * 0.06}px) perspective(500px) rotateX(${scrollRef.current.velocity * 0.001}deg)`,
        }}
      />

      {/* Floating elements layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-floating-shapes opacity-20"
      />

      {/* Main canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          display: 'block',
          opacity: 0.9,
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      />

      {/* Noise/vignette overlay for filmic grain and darker edges */}
      <div aria-hidden="true" className="absolute inset-0 bg-noise-vignette" />

      {/* Enhanced styles */}
      <style jsx>{`
        .bg-gradient-orb {
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%);
          background-size: 200% 200%;
          animation: gradientPulse 20s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .bg-gradient-mesh {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(120, 180, 255, 0.08) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.06) 2px, transparent 2px);
          background-size: 80px 80px, 60px 60px;
          animation: meshMove 30s linear infinite;
        }

        .bg-grid-dynamic {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
          transform-style: preserve-3d;
        }

        .bg-grid-perspective {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100px 100px;
          transform-style: preserve-3d;
        }

        .bg-floating-shapes {
          background-image: 
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23ffffff' fill-opacity='0.02' cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E");
          animation: float 25s ease-in-out infinite;
        }

        @keyframes gradientPulse {
          0%, 100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
          25% { background-position: 100% 0%, 0% 100%, 50% 50%; }
          50% { background-position: 100% 100%, 0% 0%, 50% 50%; }
          75% { background-position: 0% 100%, 100% 0%, 50% 50%; }
        }

        @keyframes meshMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 80px 80px, 60px 60px; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        .bg-noise-vignette {
          pointer-events: none;
          background-image: radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%);
          mix-blend-mode: multiply;
          opacity: 0.95;
        }

        /* subtle film grain using a tiny SVG data URI */
        .bg-noise-vignette::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'><rect width='4' height='4' fill='rgba(255,255,255,0.012)' /></svg>");
          opacity: 0.8;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        /* Performance and accessibility */
        canvas { 
          pointer-events: none;
          image-rendering: crisp-edges;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
          
          canvas {
            display: none;
          }
        }

        /* Enhanced visual effects */
        @supports (backdrop-filter: blur(10px)) {
          .bg-grid-dynamic {
            backdrop-filter: blur(1px);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollGridBackground;