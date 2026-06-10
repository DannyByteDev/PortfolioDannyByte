'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Project Manager at EAE Corp',
    text: 'DannyByte delivered an exceptional mobile application for our educational community. His attention to detail and ability to translate our ideas into a functional product was impressive. Always communicative and meeting deadlines.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Owner, Chichos Asados',
    text: 'Working with Danny was a game-changer for our business. The digital menu he created has streamlined our ordering process significantly. He understood our needs perfectly and delivered a modern, easy-to-use solution that our customers love.',
    rating: 5,
  },
  {
    name: 'Ana Rodríguez',
    role: 'Startup Founder',
    text: 'I hired Danny for a full-stack project and he exceeded all expectations. His clean code, problem-solving skills, and proactive communication made the entire development process smooth. Highly recommended for any web project.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-400/20 bg-pink-400/5 mb-4">
            <span className="text-xs text-pink-400 font-medium">TESTIMONIALS</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 sm:p-12 text-center relative"
            >
              <Quote className="w-10 h-10 text-cyan-400/20 mx-auto mb-6" />

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }} className="text-yellow-400 text-lg">&#9733;</motion.span>
                ))}
              </div>

              {/* Avatar placeholder + info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[current].role}</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors" data-cursor-hover>
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`} />
              ))}
            </div>

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors" data-cursor-hover>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
