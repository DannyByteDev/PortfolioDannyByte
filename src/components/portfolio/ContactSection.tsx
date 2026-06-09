'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ceballosdaniel505@gmail.com', color: '#00eeff' },
    { icon: Phone, label: 'WhatsApp', value: 'Available', color: '#00ff88' },
    { icon: MapPin, label: 'Location', value: 'Colombia', color: '#7b2ff7' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 mb-4">
            <span className="text-xs text-green-400 font-medium">GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed"
            >
              Have a project in mind or want to collaborate? Feel free to reach out.
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </motion.p>

            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center glass group-hover:border-opacity-30 transition-colors"
                  style={{ borderColor: info.color }}
                >
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{info.label}</p>
                  <p className="text-sm font-medium text-white">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-3 pt-4"
            >
              {['LinkedIn', 'WhatsApp', 'Instagram', 'TikTok'].map((social, i) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-xs font-bold text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 cursor-pointer transition-colors"
                >
                  {social.charAt(0)}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            {[
              { name: 'name', type: 'text', label: 'Your Name', placeholder: 'John Doe' },
              { name: 'email', type: 'email', label: 'Your Email', placeholder: 'john@example.com' },
            ].map((field, i) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">{field.label}</label>
                <div className="relative">
                  <input
                    type={field.type}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={(e) => setFormState(prev => ({ ...prev, [field.name]: e.target.value }))}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  {/* Focus glow */}
                  <AnimatePresence>
                    {focusedField === field.name && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 origin-left"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
              <div className="relative">
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                />
                <AnimatePresence>
                  {focusedField === 'message' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 origin-left"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm overflow-hidden group disabled:opacity-50"
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
