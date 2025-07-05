'use client';

import { motion } from 'framer-motion';
import { getPersonalInfo } from '@/lib/portfolio';

const About = () => {
  const personal = getPersonalInfo();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {personal.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {personal.description}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating exceptional user experiences and building scalable, 
              maintainable applications. With years of experience in modern web technologies, 
              I specialize in React, Next.js, and TypeScript, always staying up-to-date with 
              the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">{personal.location}</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
                <p className="text-gray-600 dark:text-gray-300">20+ Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300">Open to Work</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">React</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="gradient-bg h-2 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Next.js</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="gradient-bg h-2 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">TypeScript</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="gradient-bg h-2 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Node.js</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="gradient-bg h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 