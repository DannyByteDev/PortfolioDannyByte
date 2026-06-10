'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'EAE News',
    description: 'EAE News is a mobile application designed to connect students with the EAE Corporation\'s educational community.',
    longDescription: 'A comprehensive mobile application built for the EAE educational community. Features include real-time news feed, event notifications, student directory, and interactive educational resources. Built with a focus on user experience and accessibility for students of all technical levels.',
    tags: ['React Native', 'Mobile', 'Education', 'Notifications'],
    link: 'https://github.com/DannyByteDev/eae',
    demoLink: 'https://github.com/DannyByteDev/eae',
    color: '#00eeff',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    image: '/project-eae.png',
  },
  {
    title: 'Chichos Asados',
    description: 'Digital project for fast, simple ordering through WhatsApp with a modern, accessible experience from any device.',
    longDescription: 'Chichos Asados y Comidas Rápidas is a complete digital ordering system integrated with WhatsApp. Customers can browse the menu, customize orders, and send them directly through WhatsApp. The responsive design ensures a seamless experience on mobile, tablet, and desktop. Features include real-time menu updates and order tracking.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Responsive'],
    link: 'https://github.com/DannyByteDev',
    demoLink: 'https://www.chichosasadosycomidasrapidas.com/',
    color: '#7b2ff7',
    gradient: 'from-purple-500/20 to-pink-500/20',
    image: '/project-chichos.png',
  },
  {
    title: 'API REST de Productos',
    description: 'API RESTful construida con Express y MongoDB para gestionar productos con autenticación y rutas protegidas.',
    longDescription: 'A production-ready RESTful API built with Express.js and MongoDB for product management. Features include JWT authentication, role-based access control, CRUD operations with validation, rate limiting, error handling middleware, and comprehensive API documentation. Deployed with environment-based configuration for scalability.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST', 'JWT', 'API'],
    link: 'https://github.com/DannyByteDev',
    demoLink: 'https://github.com/DannyByteDev',
    color: '#ff3366',
    gradient: 'from-pink-500/20 to-red-500/20',
    image: '/project-api.png',
  },
  {
    title: 'Landing Page Moderna',
    description: 'Landing page responsiva creada con HTML, CSS y JavaScript, enfocada en diseño atractivo y experiencia de usuario.',
    longDescription: 'A modern, responsive landing page designed to convert visitors into customers. Built with semantic HTML5, CSS3 animations, and vanilla JavaScript for interactivity. Features include smooth scroll navigation, animated sections on scroll, optimized performance with lazy loading, and a mobile-first approach ensuring perfect display on all devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Animations'],
    link: 'https://github.com/DannyByteDev',
    demoLink: 'https://github.com/DannyByteDev',
    color: '#00ff88',
    gradient: 'from-green-500/20 to-emerald-500/20',
    image: '/project-landing.png',
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto glass rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden rounded-t-2xl`}>
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">{project.longDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium border border-white/10 text-gray-400">{tag}</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm hover:from-cyan-400 hover:to-purple-500 transition-all">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 font-bold text-sm hover:border-white/20 hover:text-white transition-all">
              <Github className="w-4 h-4" /> Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: typeof projects[0]; index: number; onOpen: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }} viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      className="group relative perspective-1000" data-cursor-hover data-cursor-text="View"
    >
      <motion.div whileHover={{ rotateY: 5, rotateX: -5 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="preserve-3d relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-white/10 transition-colors duration-500">
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
          <AnimatePresence>
            {isHovered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4">
                <motion.button onClick={onOpen} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }}
                  className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 transition-colors">
                  View Details
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-bold text-white/80">0{index + 1}</div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-md text-xs font-medium border border-white/5 text-gray-400">{tag}</span>
            ))}
            {project.tags.length > 3 && <span className="px-2 py-1 rounded-md text-xs font-medium border border-white/5 text-gray-400">+{project.tags.length - 3}</span>}
          </div>
          <motion.button onClick={onOpen} whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: project.color }}>
            View Project <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-400/20 bg-pink-400/5 mb-4">
            <span className="text-xs text-pink-400 font-medium">MY WORK</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">My <span className="gradient-text">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onOpen={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
