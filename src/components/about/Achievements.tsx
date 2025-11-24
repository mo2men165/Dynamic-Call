import { motion } from 'framer-motion';
import { SectionTitle } from '../shared/SectionTitle';
import { fadeInUp } from '../../utils/animations';
import { ArrowUpRight } from 'lucide-react';

export const Achievements = () => {
  const milestones = [
    {
      year: '2019',
      quarter: 'Q3',
      title: 'Company Founded',
      description:
        'Dynamic Call was established with a vision to revolutionize customer communication in Egypt.',
      impact: 'Entered the market with innovative solutions',
      stat: 'Year 1',
    },
    {
      year: '2020',
      quarter: 'Q2',
      title: 'First Major Client',
      description:
        'Secured partnership with leading Egyptian e-commerce platform, handling 10,000+ calls monthly.',
      impact: 'Established credibility in e-commerce sector',
      stat: '10K+ Monthly',
    },
    {
      year: '2021',
      quarter: 'Q1',
      title: 'Team Expansion',
      description:
        'Grew to 50+ agents and opened our second facility to meet increasing demand.',
      impact: 'Doubled operational capacity',
      stat: '50+ Team',
    },
    {
      year: '2022',
      quarter: 'Q4',
      title: 'Technology Upgrade',
      description:
        'Implemented AI-powered analytics and omnichannel support platform.',
      impact: 'Enhanced service quality through AI',
      stat: 'AI-Powered',
    },
    {
      year: '2023',
      quarter: 'Q3',
      title: 'Industry Recognition',
      description:
        'Awarded "Best Emerging Call Center" by Egyptian Business Excellence Awards.',
      impact: 'National recognition for excellence',
      stat: 'Award Winner',
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Continued Growth',
      description:
        'Reached 150+ agents, 500,000+ calls handled, and 98% client satisfaction rate.',
      impact: 'Market leader in customer satisfaction',
      stat: '500K+ Calls',
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />
      
      {/* Subtle glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
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
          title="Our Journey"
          subtitle="Key milestones that shaped Dynamic Call into what it is today"
        />

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Central line with glow */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block">
            <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50" />
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                    {/* Year Section */}
                    <div className={`${isLeft ? 'md:text-right md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                      <motion.div
                        className="inline-block group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative">
                          <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-none tracking-tighter">
                            {milestone.year}
                          </div>
                          <motion.div 
                            className="absolute -top-2 -right-2 text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-full shadow-lg"
                            whileHover={{ scale: 1.1 }}
                          >
                            {milestone.quarter}
                          </motion.div>
                        </div>
                        <div className="mt-3 text-sm font-semibold text-blue-400 uppercase tracking-widest">
                          {milestone.stat}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isLeft ? '' : 'md:col-start-1 md:row-start-1'}`}>
                      <motion.div
                        className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-800 group overflow-hidden"
                        whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                      >
                        {/* Gradient accent line */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 rounded-l-2xl" />
                        
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl" />
                        
                        {/* Arrow indicator */}
                        <motion.div 
                          className="absolute top-8 -right-3 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg"
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1, rotate: 45 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </motion.div>

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-5 relative z-10">
                          {milestone.description}
                        </p>

                        {/* Impact badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm relative z-10 group-hover:border-blue-500/50 transition-colors duration-300">
                          <motion.div 
                            className="w-2 h-2 bg-blue-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          />
                          <span className="text-sm font-medium text-gray-300">
                            {milestone.impact}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot with glow */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        {/* Outer glow */}
                        <motion.div
                          className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full blur-md opacity-50"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.3, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                        />
                        {/* Inner dot */}
                        <div className="relative w-5 h-5 bg-blue-600 rounded-full border-4 border-gray-900 shadow-xl" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative inline-block group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-12 py-8 rounded-2xl border border-gray-800 group-hover:border-blue-500/50 transition-colors duration-500">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Our story is still being written
              </p>
              <motion.div
                className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};