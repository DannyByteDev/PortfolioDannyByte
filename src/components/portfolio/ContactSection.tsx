'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ceballosdaniel505@gmail.com', href: 'mailto:ceballosdaniel505@gmail.com', color: '#00eeff' },
    { icon: Phone, label: 'WhatsApp', value: 'Send a message', href: 'https://wa.link/hjan7f', color: '#00ff88' },
    { icon: MapPin, label: 'Location', value: 'Colombia', href: null, color: '#7b2ff7' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-ceballos-188593254/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'WhatsApp', href: 'https://wa.link/hjan7f', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
    { name: 'Instagram', href: 'https://www.instagram.com/cpd.55/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 mb-4">
            <span className="text-xs text-green-400 font-medium">GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">Contact <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-gray-400 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </motion.p>

            {contactInfo.map((info, i) => (
              <motion.div key={info.label} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }} whileHover={{ x: 10 }} className="flex items-center gap-4 group">
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center glass group-hover:border-opacity-30 transition-colors"
                      style={{ borderColor: info.color }}>
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center glass"
                      style={{ borderColor: info.color }}>
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
              className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
                  data-cursor-hover data-cursor-text={social.name}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Form - direct FormSubmit submission (works on static hosting) */}
          <motion.form
            action="https://formsubmit.co/ceballosdaniel505@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-3 space-y-6"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_next" value="" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Portfolio Contact - New Message" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {[
              { name: 'name', type: 'text', label: 'Your Name', placeholder: 'John Doe' },
              { name: 'email', type: 'email', label: 'Your Email', placeholder: 'john@example.com' },
            ].map((field, i) => (
              <motion.div key={field.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }} viewport={{ once: true }}>
                <label className="block text-sm font-medium text-gray-400 mb-2">{field.label}</label>
                <div className="relative">
                  <input type={field.type} name={field.name}
                    onFocus={() => setFocusedField(field.name)} onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder} required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300" />
                  <AnimatePresence>
                    {focusedField === field.name && (
                      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 origin-left" />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
              <div className="relative">
                <textarea name="message"
                  onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..." rows={5} required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 resize-none" />
                <AnimatePresence>
                  {focusedField === 'message' && (
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 origin-left" />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.button type="submit"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm overflow-hidden group"
              data-cursor-hover>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
