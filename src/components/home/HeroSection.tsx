import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared/Button';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-100">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-violet-100/30 to-blue-100/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating particles - subtle and elegant */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[10%] w-16 h-16 bg-gradient-to-br from-blue-400/30 to-blue-500/30 rounded-2xl backdrop-blur-sm border border-blue-300/20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-[60%] left-[15%] w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-indigo-500/30 rounded-full backdrop-blur-sm border border-indigo-300/20"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-14 h-14 bg-gradient-to-br from-violet-400/30 to-violet-500/30 rounded-3xl backdrop-blur-sm border border-violet-300/20"
          animate={{
            y: [0, -40, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[10%] w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl backdrop-blur-sm border border-blue-400/20"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-[70%] left-[40%] w-10 h-10 bg-gradient-to-br from-sky-400/30 to-sky-500/30 rounded-full backdrop-blur-sm border border-sky-300/20"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-[15%] right-[30%] w-8 h-8 bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 rounded-lg backdrop-blur-sm border border-indigo-400/20"
          animate={{
            y: [0, 35, 0],
            x: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-[45%] left-[25%] w-8 h-8 bg-gradient-to-br from-purple-400/30 to-purple-500/30 rounded-2xl backdrop-blur-sm border border-purple-300/20"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[50%] w-10 h-10 bg-gradient-to-br from-cyan-400/30 to-cyan-500/30 rounded-full backdrop-blur-sm border border-cyan-300/20"
          animate={{
            y: [0, 45, 0],
            x: [0, 25, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Serving Egypt with Excellence</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Customer Experience
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Egypt's premier cloud contact center solution delivering exceptional customer engagement with cutting-edge technology and multilingual support.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button onClick={() => navigate('/contact')}>
                Get Started Today
              </Button>
              <Button variant="outline" onClick={() => navigate('/services')}>
                Explore Solutions
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: '24/7', label: 'Support' },
                { value: '99.9%', label: 'Uptime' },
                { value: '500+', label: 'Clients' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative lg:h-[600px] h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main image container */}
            <div className="relative h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/src/assets/hero.avif"
                  alt="Dynamic Call Center Solutions"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />

              {/* Floating cards */}
              <motion.div
                className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Live Calls</div>
                    <div className="text-2xl font-bold text-gray-900">1,247</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Satisfaction</div>
                    <div className="text-2xl font-bold text-gray-900">98.5%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};