import { motion } from 'framer-motion';
import { AnimatedCard } from '../shared/AnimatedCard';
import { SectionTitle } from '../shared/SectionTitle';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Target, Handshake, Lightbulb, Trophy, TrendingUp, Globe } from 'lucide-react';

export const TeamValues = () => {
  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description:
        'Every decision we make prioritizes exceptional customer experiences and satisfaction.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description:
        'We operate with transparency, honesty, and ethical practices in all interactions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Constantly evolving with the latest technology to deliver cutting-edge solutions.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description:
        'Setting the highest standards and consistently exceeding expectations.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description:
        'Investing in our team\'s development and fostering continuous improvement.',
    },
    {
      icon: Globe,
      title: 'Community Impact',
      description:
        'Creating opportunities and contributing positively to Egypt\'s economy.',
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide every interaction and drive our success"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div 
                key={value.title} 
                variants={fadeInUp}
                className="group"
              >
                <AnimatedCard className="h-full p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white relative overflow-hidden">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Subtle hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold text-slate-600">{index + 1}</span>
                  </div>

                  {/* Icon container with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="absolute -left-2 -top-2 w-16 h-16 bg-blue-50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="relative inline-flex p-4 rounded-xl bg-cyan-950 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-900 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {value.description}
                    </p>
                  
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};