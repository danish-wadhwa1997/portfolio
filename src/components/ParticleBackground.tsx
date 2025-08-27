'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(300, Math.floor((canvas.width * canvas.height) / 6000));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * (canvas.width / (window.devicePixelRatio || 1)),
          y: Math.random() * (canvas.height / (window.devicePixelRatio || 1)),
          z: Math.random() * 1000 - 500,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`, // Blue to purple range
        });
      }
      particlesRef.current = particles;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      isHoveredRef.current = true;
    };

    // Mouse enter/leave handlers
    const handleMouseEnter = () => { isHoveredRef.current = true; };
    const handleMouseLeave = () => { isHoveredRef.current = false; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      const particles = particlesRef.current;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Sort particles by Z for proper layering
      particles.sort((a, b) => b.z - a.z);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Keep Z within bounds
        if (particle.z < -500) particle.z = 500;
        if (particle.z > 500) particle.z = -500;

        // Calculate screen position based on Z
        const scale = 1000 / (1000 + particle.z);
        const screenX = (particle.x - centerX) * scale + centerX;
        const screenY = (particle.y - centerY) * scale + centerY;
        const screenSize = particle.size * scale;

        // Mouse interaction
        if (isHoveredRef.current) {
          const dx = mousePosRef.current.x - screenX;
          const dy = mousePosRef.current.y - screenY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 220;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            particle.vx += dx * force * 0.00014;
            particle.vy += dy * force * 0.00014;
            
            // Add some attraction to mouse
            particle.vx += (mousePosRef.current.x - screenX) * 0.000035;
            particle.vy += (mousePosRef.current.y - screenY) * 0.000035;
          }
        }

        // Draw particle
        if (screenSize > 0.5) {
          ctx.save();
          ctx.globalAlpha = particle.opacity * scale;
          
          // Create gradient for each particle
          const gradient = ctx.createRadialGradient(
            screenX, screenY, 0,
            screenX, screenY, screenSize
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(screenX, screenY, screenSize, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }

        // Mouse bridges: draw line from mouse to nearby particles
        if (isHoveredRef.current) {
          const mdx = screenX - mousePosRef.current.x;
          const mdy = screenY - mousePosRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mouseLinkRadius = 160;
          if (mdist < mouseLinkRadius) {
            const mOpacity = (mouseLinkRadius - mdist) / mouseLinkRadius * 0.25 * Math.min(scale, 1);
            ctx.strokeStyle = `rgba(150, 190, 255, ${mOpacity})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(mousePosRef.current.x, mousePosRef.current.y);
            ctx.lineTo(screenX, screenY);
            ctx.stroke();
          }
        }

        // Draw connections between nearby particles
        particles.forEach((otherParticle) => {
          if (particle === otherParticle) return;
          
          const otherScale = 1000 / (1000 + otherParticle.z);
          const otherScreenX = (otherParticle.x - centerX) * otherScale + centerX;
          const otherScreenY = (otherParticle.y - centerY) * otherScale + centerY;
          
          const dx = screenX - otherScreenX;
          const dy = screenY - otherScreenY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 160 && scale > 0.25 && otherScale > 0.25) {
            const opacity = (160 - distance) / 160 * 0.18 * Math.min(scale, otherScale);
            ctx.strokeStyle = `rgba(140, 180, 255, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(otherScreenX, otherScreenY);
            ctx.stroke();
          }
        });
      });

      // Add subtle floating motion
      particles.forEach((particle) => {
        particle.vx += (Math.random() - 0.5) * 0.00015;
        particle.vy += (Math.random() - 0.5) * 0.00015;
        
        // Dampen velocity
        particle.vx *= 0.998;
        particle.vy *= 0.998;
        particle.vz *= 0.998;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        background: 'transparent',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground; 