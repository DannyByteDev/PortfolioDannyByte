'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Server, Layout } from 'lucide-react';

const services = [
  {
    icon: Layout, title: 'UI/UX Design', color: '#00eeff',
    description: "I'm passionate about designing digital experiences that not only look good, but also feel good. From wireframes to final prototypes, I take care of every detail so your app or website has an engaging, intuitive, and memorable design.",
  },
  {
    icon: Server, title: 'Backend Developer', color: '#7b2ff7',
    description: 'Development of robust, secure, and scalable backend logic. I design efficient APIs, manage databases, and ensure fluid communication between the frontend and the server to guarantee the performance and stability of your web applications.',
  },
  {
    icon: Code, title: 'Frontend Developer', color: '#ff3366',
    description: "I create modern, responsive, and optimized web interfaces to deliver intuitive and engaging user experiences. I use technologies such as HTML5, CSS3, JavaScript, and TypeScript, integrating visual design with real-world functionality. I focus on adapting each site to any type of device, ensuring performance, accessibility, and a seamless experience from the first click.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }} viewport={{ once: true, margin: '-50px' }}
      onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000" data-cursor-hover
    >
      <div className="relative preserve-3d rounded-2xl overflow-hidden">
        {isHovered && (
          <div className="absolute inset-0 z-10 pointer-events-none opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${service.color}15, transparent 60%)` }} />
        )}
        <div className="relative glass rounded-2xl p-8 h-full border border-white/5 hover:border-white/10 transition-colors duration-300">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${service.color}15`, color: service.color }}>
            <service.icon className="w-7 h-7" />
          </motion.div>
          <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.03]">0{index + 1}</div>
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
          <motion.a href="#projects" whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: service.color }}>
            See projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.a>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-24 relative">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-4">
            <span className="text-xs text-cyan-400 font-medium">WHAT I DO</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">My <span className="gradient-text">Services</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => <ServiceCard key={service.title} service={service} index={i} />)}
        </div>
      </div>
    </section>
  );
}
