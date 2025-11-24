import React from 'react'
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const AboutHero = () => {
  return <>
  <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-24 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
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
              <span className="text-sm font-semibold text-gray-300">About Dynamic Call</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Building the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Customer Communication
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover how we're transforming businesses across Egypt with
              world-class call center solutions and cutting-edge technology
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  </>
}

export default AboutHero