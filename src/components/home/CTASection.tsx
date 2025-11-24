import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared/Button';
import { fadeInUp, scaleIn } from '../../utils/animations';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-700/50"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
              animate={{
                x: [0, -40, 0],
                y: [0, -40, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-[15%] left-[10%] w-20 h-20 border-2 border-white/10 rounded-2xl backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[15%] w-16 h-16 border-2 border-white/10 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, 25, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-[60%] left-[8%] w-12 h-12 bg-white/5 rounded-lg backdrop-blur-sm"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Available 24/7</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Ready to Elevate Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Customer Experience?
                </span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Join Egypt's leading businesses who trust Dynamic Call for their
                communication needs. Get started today with a free consultation.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => navigate('/contact')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Your Free Consultation
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>

                <motion.button
                  onClick={() => navigate('/services')}
                  className="group px-8 py-4 bg-white/5 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: '✓', text: 'No Setup Fees' },
                  { icon: '✓', text: 'Cancel Anytime' },
                  { icon: '✓', text: 'Dedicated Support' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400 font-bold">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};