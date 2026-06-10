'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work' as const,
    title: 'Full Stack Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Building responsive web applications from concept to deployment using React, Node.js, TypeScript and MongoDB. Developing RESTful APIs and implementing modern UI/UX designs for various clients.',
  },
  {
    type: 'work' as const,
    title: 'Frontend Developer',
    company: 'Independent Projects',
    period: '2022 - 2023',
    description: 'Created modern, responsive web interfaces with HTML5, CSS3, JavaScript and React. Focused on delivering intuitive user experiences and pixel-perfect designs adapted to all devices.',
  },
  {
    type: 'education' as const,
    title: 'Web Development & Software',
    company: 'Self-taught + Online Courses',
    period: '2021 - 2022',
    description: 'Intensive learning of full-stack technologies including JavaScript, Python, React, Node.js, and databases. Completed multiple certifications and built practical projects to solidify knowledge.',
  },
  {
    type: 'education' as const,
    title: 'Programming Fundamentals',
    company: 'SENA - Colombia',
    period: '2020 - 2021',
    description: 'Learned programming fundamentals, algorithms, and data structures. Gained foundational knowledge in software development methodologies and version control with Git.',
  },
];

function TimelineItem({ item, index }: { item: typeof experiences[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`relative flex items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
        <motion.div whileHover={{ scale: 1.02, y: -3 }} className="glass rounded-2xl p-6 group cursor-default">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'lg:justify-end' : ''}`}>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
              item.type === 'work' ? 'bg-cyan-400/10 text-cyan-400' : 'bg-purple-400/10 text-purple-400'
            }`}>
              {item.period}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
          <p className="text-sm text-cyan-400/80 mb-2">{item.company}</p>
          <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>

      {/* Center node */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
          viewport={{ once: true }}
          className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
            item.type === 'work'
              ? 'bg-gradient-to-br from-cyan-500 to-blue-600'
              : 'bg-gradient-to-br from-purple-500 to-pink-600'
          }`}
        >
          {item.type === 'work' ? <Briefcase className="w-5 h-5 text-white" /> : <GraduationCap className="w-5 h-5 text-white" />}
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" ref={ref} className="py-24 relative overflow-hidden">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-4">
            <span className="text-xs text-cyan-400 font-medium">MY JOURNEY</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-connector opacity-20" />

          <div className="space-y-8">
            {experiences.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
