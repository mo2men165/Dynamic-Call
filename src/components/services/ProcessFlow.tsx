import { motion } from 'framer-motion';
import { SectionTitle } from '../shared/SectionTitle';
import { fadeInUp } from '../../utils/animations';
import { MessageCircle, FileText, GraduationCap, Rocket, TrendingUp, Clock } from 'lucide-react';

export const ProcessFlow = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your business needs, goals, and challenges to understand your requirements.',
      icon: MessageCircle,
      duration: '1 day',
    },
    {
      number: '02',
      title: 'Custom Solution Design',
      description: 'Our team crafts a tailored call center solution aligned with your objectives and budget.',
      icon: FileText,
      duration: '3-5 days',
    },
    {
      number: '03',
      title: 'Team Training & Setup',
      description: 'Dedicated agents are recruited, trained on your products/services, and integrated with your systems.',
      icon: GraduationCap,
      duration: '1-2 weeks',
    },
    {
      number: '04',
      title: 'Launch & Monitor',
      description: 'We go live with your campaign and continuously monitor performance with real-time analytics.',
      icon: Rocket,
      duration: '1 week',
    },
    {
      number: '05',
      title: 'Optimize & Scale',
      description: 'Regular reviews, feedback implementation, and scaling up as your business grows.',
      icon: TrendingUp,
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />
      
      {/* Subtle glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          title="How We Work"
          subtitle="A proven process to get your call center operation running smoothly"
        />

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block mt-20">
          {/* Progress Bar */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 -translate-y-1/2"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50" />
            </motion.div>
            
            {/* Step Dots */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                >
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full blur-md opacity-50 -translate-x-1 -translate-y-1"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.3, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  />
                  <div className="relative w-6 h-6 bg-blue-600 border-4 border-gray-900 rounded-full z-10 shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group"
                >
                  <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full group/card">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-xl mb-4 group-hover/card:scale-110 group-hover/card:bg-blue-500 transition-all duration-300 shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover/card:bg-gray-700 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-blue-400" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white mb-2 text-lg">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="lg:hidden mt-16 space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 w-px h-10 bg-gradient-to-b from-blue-500/50 to-gray-700" />
                )}

                <div className="flex gap-4">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 text-blue-400" strokeWidth={2} />
                      </div>
                      <h3 className="font-bold text-white text-lg">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Summary */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-gray-800">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 25% 50%, white 2px, transparent 2px), radial-gradient(circle at 75% 50%, white 2px, transparent 2px)',
              backgroundSize: '50px 50px',
            }} />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 blur-2xl"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold">Total Timeline</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                2-4 Weeks to Launch
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
                From initial consultation to full operation, we ensure a smooth transition with dedicated support at every step
              </p>

              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors duration-300 shadow-xl shadow-blue-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};