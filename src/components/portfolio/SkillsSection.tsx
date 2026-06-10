'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const technicalSkills = [
  { name: 'HTML', level: 90, color: '#e34c26' },
  { name: 'CSS', level: 85, color: '#264de4' },
  { name: 'JavaScript', level: 80, color: '#f7df1e' },
  { name: 'Python', level: 70, color: '#3776ab' },
  { name: 'React', level: 75, color: '#61dafb' },
  { name: 'TypeScript', level: 75, color: '#3178c6' },
  { name: 'Node.js', level: 70, color: '#339933' },
  { name: 'MongoDB', level: 65, color: '#47a248' },
];

const professionalSkills = [
  { name: 'Creativity', level: 90, color: '#00eeff' },
  { name: 'Communication', level: 65, color: '#7b2ff7' },
  { name: 'Problem Solving', level: 75, color: '#ff3366' },
  { name: 'Teamwork', level: 85, color: '#00ff88' },
];

const techTags = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
  'Python', 'Git', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript',
  'REST APIs', 'Figma', 'Responsive Design', 'Agile',
];

function CircularProgress({ skill, index }: { skill: typeof professionalSkills[0]; index: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }} viewport={{ once: true }}
      className="flex flex-col items-center gap-3 group cursor-default" data-cursor-hover>
      <div className="relative w-40 h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
          <motion.circle cx="80" cy="80" r={radius} stroke={skill.color} strokeWidth="8" fill="none" strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }} whileInView={{ strokeDashoffset: offset }}
            transition={{ delay: 0.5 + index * 0.15, duration: 1.5, ease: 'easeOut' }} viewport={{ once: true }}
            style={{ filter: `drop-shadow(0 0 6px ${skill.color}50)` }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 + index * 0.15 }} viewport={{ once: true }}
            className="text-2xl font-black" style={{ color: skill.color }}>{skill.level}%</motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
    </motion.div>
  );
}

function TechGlobe() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
      {techTags.map((tag, i) => (
        <motion.span key={tag}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15, y: -3 }}
          className="px-3 py-1.5 rounded-lg glass text-xs font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 cursor-default transition-colors"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/20 bg-purple-400/5 mb-4">
            <span className="text-xs text-purple-400 font-medium">MY ABILITIES</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">My <span className="gradient-text">Skills</span></h2>
        </motion.div>

        {/* Tech tags cloud */}
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xl font-bold text-center mb-6">Technology <span className="text-cyan-400">Stack</span></motion.h3>
        <div className="mb-16">
          <TechGlobe />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white">Technical <span className="text-cyan-400">Skills</span></motion.h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }} viewport={{ once: true }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 1, ease: 'easeOut' }} viewport={{ once: true }}
                      className="h-full rounded-full relative"
                      style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`, boxShadow: `0 0 10px ${skill.color}40` }}>
                      <div className="absolute inset-0 animate-shimmer rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <motion.h3 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white">Professional <span className="text-purple-400">Skills</span></motion.h3>
            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill, i) => <CircularProgress key={skill.name} skill={skill} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
