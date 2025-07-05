'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Phone } from 'lucide-react';
import { getContact } from '@/lib/portfolio';

const Contact = () => {
  const contact = getContact();

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in working together or have a project in mind? Feel free to reach out via email or connect on social platforms below.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg card-hover text-lg font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Mail size={24} />
            {contact.email}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${contact.phone}`}
            className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg card-hover text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Phone size={24} />
            {contact.phone}
          </motion.a>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 transition-colors duration-300"
          >
            <Twitter size={28} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 