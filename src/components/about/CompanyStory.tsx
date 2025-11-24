import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';
import { Target, Gem, Phone, Users, TrendingUp, Award } from 'lucide-react';

export const CompanyStory = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>Our Story</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Pioneering Excellence in Egyptian Call Centers
              </span>
            </h2>

            {/* Content */}
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded with a vision to revolutionize customer communication in
                Egypt, Dynamic Call has grown from a passionate startup to a
                trusted partner for businesses across the nation.
              </p>
              <p>
                We recognized the gap in professional, technology-driven call
                center solutions in the Egyptian market and set out to build
                something exceptional. Today, we handle hundreds of thousands of
                customer interactions monthly, powered by cutting-edge
                technology and our dedicated team of professionals.
              </p>
              <p className="font-medium text-gray-900">
                Our mission is simple yet powerful: to deliver world-class
                customer experiences that drive business growth while creating
                meaningful employment opportunities in Egypt.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: Users, value: '150+', label: 'Team Members' },
                { icon: TrendingUp, value: '500K+', label: 'Calls/Month' },
                { icon: Award, value: '98%', label: 'Satisfaction' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 mb-2">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative z-10"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-full" />
              
              {/* Image placeholder with gradient overlay */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl overflow-hidden mb-6 group">
                <img src="/src/assets/call-center.avif" alt="Dynamic Call Team" className="w-full h-full object-cover" />
              </div>

              {/* Vision & Values cards */}
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 group hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-800 transition-colors duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5">Our Vision</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Leading Egypt's customer communication revolution
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-5 p-5 rounded-xl bg-slate-50 border border-slate-200 group hover:bg-slate-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-800 transition-colors duration-300">
                    <Gem className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5">Our Values</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Excellence, integrity, and innovation in every call
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating decorations */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};