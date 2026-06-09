'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'EAE News',
    description: 'EAE News is a mobile application designed to connect students with the EAE Corporation\'s educational community.',
    tags: ['React Native', 'Mobile', 'Education'],
    link: 'https://github.com/DannyByteDev/eae',
    color: '#00eeff',
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    title: 'Chichos Asados',
    description: 'Chichos Asados y Comidas Rápidas is a digital project created to make ordering fast, simple, and direct through WhatsApp. Our goal is to provide a practical, modern, and accessible experience from any device.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    link: 'https://www.chichosasadosycomidasrapidas.com/',
    color: '#7b2ff7',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'API REST de Productos',
    description: 'API RESTful construida con Express y MongoDB para gestionar productos con autenticación y rutas protegidas.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST'],
    link: '#',
    color: '#ff3366',
    gradient: 'from-pink-500/20 to-red-500/20',
  },
  {
    title: 'Landing Page Moderna',
    description: 'Landing page responsiva creada con HTML, CSS y JavaScript, enfocada en diseño atractivo y experiencia de usuario.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: '#',
    color: '#00ff88',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative perspective-1000"
      data-cursor-hover
      data-cursor-text="View"
    >
      <motion.div
        whileHover={{ rotateY: 5, rotateX: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="preserve-3d relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-white/10 transition-colors duration-500"
      >
        {/* Project image / placeholder */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-black opacity-20" style={{ color: project.color }}>
              {project.title.charAt(0)}
            </span>
          </div>

          {/* Hover overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Number badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-bold text-white/80">
            0{index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md text-xs font-medium border border-white/5 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: project.color }}
          >
            View Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-400/20 bg-pink-400/5 mb-4">
            <span className="text-xs text-pink-400 font-medium">MY WORK</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
