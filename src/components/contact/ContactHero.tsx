import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactHero = () => {
  const contactMethods = [
    { icon: Phone, label: 'Call Us', value: '+20 123 456 7890' },
    { icon: Mail, label: 'Email Us', value: 'info@dynamiccall.com' },
    { icon: MapPin, label: 'Visit Us', value: 'Cairo, Egypt' },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div
            className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Contact Us</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-900">Let's Start a</span>
            <br />
            <span className="relative inline-block">
              <span className="text-gray-900">Conversation</span>
              <motion.div
                className="absolute bottom-2 left-0 right-0 h-3 bg-blue-600/20"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ready to transform your customer communication? Get in touch with
            our team and discover how we can help your business grow
          </motion.p>

          {/* Contact methods */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 shadow-sm group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{method.label}</div>
                    <div className="text-sm font-medium text-gray-900">{method.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};