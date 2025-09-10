'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { getPersonalInfo } from '@/lib/portfolio';

const Hero = () => {
  const personal = getPersonalInfo();
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
  
      <div className="container-max section-padding relative z-20">
        {/* 3D Particles Background using tsParticles (react-tsparticles) */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="relative inline-block px-4 sm:px-6 py-4">
              {/* Localized overlay behind text only */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-white/35 via-white/15 to-transparent dark:from-gray-900/45 dark:via-gray-900/25 dark:to-transparent supports-[backdrop-filter]:backdrop-blur-sm"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                Hi, I&apos;m{' '}
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                {personal.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                {personal.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="gradient-bg text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow duration-300"
            >
              Learn More
              <ArrowDown size={20} />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.email}`}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1eR14SeIz6LHU1Om0BzfZ50D_wK9Sr6Pm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Download size={22} />
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400 z-20"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero; 