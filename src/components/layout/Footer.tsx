import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Inbound Support',
    'Outbound Sales',
    'Technical Helpdesk',
    'Multilingual Services',
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: Facebook },
    { name: 'Twitter', url: '#', icon: Twitter },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Instagram', url: '#', icon: Instagram },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Cairo, Egypt' },
    { icon: Phone, text: '+20 123 456 7890' },
    { icon: Mail, text: 'info@dynamiccall.com' },
    { icon: Clock, text: '24/7 Available' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden w-full max-w-full" style={{ contain: 'layout style paint' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
          style={{ 
            right: '-25%',
            top: '-25%',
            transformOrigin: 'center center'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"
          style={{ 
            left: '-25%',
            bottom: '-25%',
            transformOrigin: 'center center'
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <motion.div
                className="flex items-center gap-2.5 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-10 h-10 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-lg"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div className="absolute inset-[2px] bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M3 12C3 12 6 5 12 5C18 5 21 12 21 12"
                        stroke="url(#footerGradient1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.path
                        d="M3 12C3 12 6 19 12 19C18 19 21 12 21 12"
                        stroke="url(#footerGradient2)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <defs>
                        <linearGradient id="footerGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                        <linearGradient id="footerGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                <span className="text-xl font-bold">Dynamic Call</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Egypt's premier call center solution provider, delivering
              exceptional customer experiences 24/7.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-3 text-gray-400 group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="pt-1.5 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Dynamic Call Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};