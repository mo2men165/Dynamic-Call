import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedCard } from '../shared/AnimatedCard';
import { SectionTitle } from '../shared/SectionTitle';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-600',
      title: 'Inbound Support',
      description:
        'Professional customer service handling inquiries, complaints, and support requests with care and efficiency.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-600',
      title: 'Outbound Sales',
      description:
        'Proactive outreach campaigns to drive sales, conduct surveys, and engage your target audience effectively.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-600',
      title: 'Technical Helpdesk',
      description:
        'Expert technical support teams ready to resolve complex issues and provide step-by-step guidance.',
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Core Services"
          subtitle="Comprehensive call center solutions tailored to your business needs"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              onClick={() => navigate('/services')}
              className="cursor-pointer group"
            >
              <AnimatedCard className="h-full p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon container with animated gradient border */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] group-hover:scale-110 transition-transform duration-500`}
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <div className={`bg-gradient-to-br ${service.gradient} bg-clip-text`}>
                        {service.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Animated arrow */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate('/services')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Services</span>
            <motion.svg
              className="relative z-10 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};