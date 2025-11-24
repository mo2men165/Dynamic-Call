import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { Phone, Headphones, BarChart3 } from 'lucide-react';

export const ServicesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/15 to-blue-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[20%] w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-full backdrop-blur-sm"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-300">Professional Services</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Comprehensive</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Call Center Solutions
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From inbound customer support to outbound sales campaigns, we offer
            end-to-end call center services designed to elevate your business
            and delight your customers
          </motion.p>

          {/* Service highlights */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: Phone, label: 'Inbound Support' },
              { icon: Headphones, label: 'Outbound Sales' },
              { icon: BarChart3, label: 'Analytics & Reporting' },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-300">{service.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};