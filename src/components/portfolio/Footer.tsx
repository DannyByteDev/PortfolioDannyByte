'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 mt-auto">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-sm text-gray-500 flex items-center gap-1">
            &copy; 2025 DannyByte. Made with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> All rights reserved.
          </motion.p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/daniel-ceballos-188593254/" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-cyan-400 transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/DannyByteDev" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-cyan-400 transition-colors duration-300">GitHub</a>
            <a href="https://www.instagram.com/cpd.55/" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-cyan-400 transition-colors duration-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
