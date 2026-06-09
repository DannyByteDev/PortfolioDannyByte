'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image with parallax */}
          <motion.div
            style={{ y: imgY }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent z-10" />

              {/* Placeholder image */}
              <div className="w-full h-full bg-gradient-to-br from-[#111118] to-[#1a1a2e] flex items-center justify-center">
                <span className="text-6xl font-black gradient-text opacity-30">DB</span>
              </div>

              {/* Floating card overlay */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-4 bottom-8 glass rounded-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">3+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Years</p>
                    <p className="text-xs text-gray-400">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 -z-10 translate-x-4 translate-y-4" />
          </motion.div>

          {/* Text content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/20 bg-purple-400/5 mb-4"
            >
              <span className="text-xs text-purple-400 font-medium">WHO AM I</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black mb-2"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-cyan-400 font-semibold mb-6"
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 leading-relaxed mb-8"
            >
              As a Full Stack Developer, I have hands-on experience building
              responsive web applications from concept to deployment. I specialize
              in both front-end and back-end development using modern technologies
              such as TypeScript, React, Node.js, Express, MongoDB and Python. I&apos;m
              passionate about writing clean, maintainable code and delivering
              scalable solutions that enhance user experience and meet business
              goals. My background includes working with RESTful APIs, version
              control systems like Git, and agile development methodologies.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { number: '10+', label: 'Projects' },
                { number: '3+', label: 'Years Exp.' },
                { number: '5+', label: 'Technologies' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-4 text-center group cursor-default"
                >
                  <span className="text-2xl font-black gradient-text group-hover:scale-110 transition-transform">
                    {stat.number}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
