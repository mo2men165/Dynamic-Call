import { motion } from 'framer-motion';
import { AnimatedCard } from '../shared/AnimatedCard';
import { SectionTitle } from '../shared/SectionTitle';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Availability',
      description:
        'Round-the-clock service ensuring your customers always have support when they need it.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Multilingual Support',
      description:
        'Fluent teams in Arabic, English, and more to serve diverse customer bases.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Advanced Technology',
      description:
        'State-of-the-art CRM systems, AI-powered analytics, and seamless integrations.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Egyptian Market Expertise',
      description:
        'Deep understanding of local business culture and customer expectations.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Quality Assurance',
      description:
        'Rigorous monitoring and training programs ensuring consistent excellence.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Scalable Solutions',
      description:
        'Flexible packages that grow with your business from startup to enterprise.',
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle professional background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Why Choose Dynamic Call?"
          subtitle="We combine technology, talent, and dedication to deliver exceptional results"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              variants={fadeInUp}
              className="group"
            >
              <AnimatedCard className="h-full p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 bg-white relative overflow-hidden">
                {/* Subtle hover background */}
                <motion.div
                  className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon container */}
                <div className="relative mb-6">
                  <motion.div
                    className="inline-flex p-4 rounded-xl bg-cyan-950 group-hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10 group-hover:text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your customer communication?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};