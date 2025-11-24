import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Phone, Calendar, Building2, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

export const PricingCTA = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const pricingModels = [
    {
      id: '1',
      icon: Phone,
      title: 'Pay-per-Call',
      description: 'Flexible pricing based on actual usage with no minimum commitment',
      features: [
        'No monthly minimums',
        'Volume-based discounts',
        'Pay only for completed calls',
        'Scalable for seasonal demands',
        'Transparent per-call pricing',
      ],
    },
    {
      id: '2',
      icon: Calendar,
      title: 'Monthly Plans',
      description: 'Predictable costs with fixed monthly rates and dedicated resources',
      features: [
        'Dedicated agent teams',
        'Priority support access',
        'Fixed monthly budget',
        'Included training hours',
        'Custom call scripts',
      ],
    },
    {
      id: '3',
      icon: Building2,
      title: 'Enterprise',
      description: 'Tailored solutions for large-scale operations with custom requirements',
      features: [
        'Custom SLA agreements',
        'Dedicated account manager',
        'Multi-location support',
        'Advanced analytics dashboard',
        'White-label options',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 -z-10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flexible Pricing for Every Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the model that fits your needs and budget
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="space-y-4 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingModels.map((model, index) => {
            const Icon = model.icon;
            const isExpanded = expandedId === model.id;
            
            return (
              <motion.div
                key={model.id}
                className="group"
                variants={fadeInUp}
              >
                <div className={`relative bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border ${isExpanded ? 'border-gray-700' : 'border-gray-800'} hover:border-gray-700 group`}>
                  {/* Accent line */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-blue-600 transition-all duration-300 ${isExpanded ? 'w-2' : ''}`} />
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Header Button */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : model.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300 relative z-10"
                  >
                    <div className="flex items-center gap-4 md:gap-6 flex-1">
                      {/* Icon */}
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center shadow-lg transition-colors duration-300"
                          whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                          {model.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {model.description}
                        </p>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0 ml-4"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-blue-600' : 'bg-gray-800 group-hover:bg-gray-700'}`}>
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-gray-300'}`} />
                      </div>
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-gray-800 bg-gray-800/30">
                          <div className="pl-0 md:pl-[88px]">
                            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                              <span className="w-1 h-6 bg-blue-600 rounded-full" />
                              What's Included
                            </h4>
                            <ul className="space-y-3">
                              {model.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.05 }}
                                  className="flex items-start gap-3 group/feature"
                                >
                                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                                  </div>
                                  <span className="text-gray-300 leading-relaxed group-hover/feature:text-white transition-colors">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-10 md:p-12 text-center overflow-hidden border border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -20, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a pricing plan that works for your business
            </p>

            <motion.button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-blue-500/50 transition-all duration-300 shadow-lg group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <p className="text-gray-400 text-sm mt-6">
              Free consultation • No commitment required • Response within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};