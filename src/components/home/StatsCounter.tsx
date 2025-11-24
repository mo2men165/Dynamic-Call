import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { SectionTitle } from '../shared/SectionTitle';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  gradient: string;
}

const StatCounter = ({ value, suffix, label, icon, gradient }: StatProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isVisible, count, value]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card with glass morphism */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
        {/* Animated gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 rounded-bl-full`} />
        
        {/* Icon */}
        <div className="relative mb-4 flex justify-center">
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
              <div className={`text-white`}>
                {icon}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Counter */}
        <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
          <motion.span>{rounded}</motion.span>
          <span>{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </p>

        {/* Bottom line accent */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export const StatsCounter = () => {
  const stats = [
    {
      value: 50,
      suffix: 'K+',
      label: 'Calls Handled',
      gradient: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      gradient: 'from-indigo-500 to-purple-500',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
    {
      value: 5,
      suffix: '+',
      label: 'Years of Excellence',
      gradient: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      value: 150,
      suffix: '+',
      label: 'Active Agents',
      gradient: 'from-pink-500 to-rose-500',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 -z-10" />
      
      {/* Decorative animated blobs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <SectionTitle
          title="Trusted by Industry Leaders"
          subtitle="Our commitment to excellence is reflected in every interaction"
        />

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              gradient={stat.gradient}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};