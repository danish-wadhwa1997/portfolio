'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen relative">
      {/* Particle background - lowest layer */}
      <div className="relative z-0">
        <ParticleBackground />
      </div>
      
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </main>
  );
}
