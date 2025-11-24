import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Service } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { SectionTitle } from '../shared/SectionTitle';
import { Phone, Megaphone, Wrench, Globe2, RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';

const services: Service[] = [
  {
    id: '1',
    title: 'Inbound Customer Support',
    description:
      'Professional agents handling customer inquiries, complaints, and support requests with empathy and efficiency.',
    icon: Phone,
    features: [
      '24/7 customer service availability',
      'Multi-channel support (phone, email, chat)',
      'Complaint resolution and escalation management',
      'Order tracking and status updates',
      'Product information and FAQs',
    ],
  },
  {
    id: '2',
    title: 'Outbound Sales & Telemarketing',
    description:
      'Strategic outreach campaigns to drive sales, generate leads, and engage your target audience effectively.',
    icon: Megaphone,
    features: [
      'Lead generation and qualification',
      'Product and service promotion',
      'Appointment setting',
      'Market research and surveys',
      'Customer retention campaigns',
    ],
  },
  {
    id: '3',
    title: 'Technical Support Helpdesk',
    description:
      'Skilled technical teams ready to troubleshoot issues, provide solutions, and ensure customer satisfaction.',
    icon: Wrench,
    features: [
      'Level 1 & 2 technical support',
      'Remote troubleshooting assistance',
      'Ticket management and tracking',
      'Software and hardware support',
      'Technical documentation',
    ],
  },
  {
    id: '4',
    title: 'Multilingual Services',
    description:
      'Fluent agents in Arabic, English, and other languages to serve diverse customer bases across regions.',
    icon: Globe2,
    features: [
      'Native Arabic and English speakers',
      'Cultural sensitivity training',
      'Localized customer service',
      'Translation support',
      'Regional market expertise',
    ],
  },
  {
    id: '5',
    title: 'CRM Integration Solutions',
    description:
      'Seamless integration with your existing systems for unified customer data and enhanced efficiency.',
    icon: RefreshCw,
    features: [
      'Salesforce, HubSpot, Zoho integration',
      'Custom API development',
      'Real-time data synchronization',
      'Automated workflow triggers',
      'Comprehensive reporting dashboards',
    ],
  },
];

export const ServiceCards = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />
      
      <div className="relative max-w-5xl mx-auto">
        <SectionTitle
          title="What We Offer"
          subtitle="Tailored solutions to meet your unique business needs"
        />

        <motion.div
          className="space-y-4 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;
            
            return (
              <motion.div
                key={service.id}
                className="group"
                variants={fadeInUp}
              >
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${isExpanded ? 'border-slate-900' : 'border-gray-200'} hover:border-slate-300 group`}>
                  {/* Accent line */}
                  <div className={`absolute top-0 left-0 h-1 bg-slate-900 transition-all duration-300 ${isExpanded ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Header Button */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors duration-300 relative z-10"
                  >
                    <div className="flex items-center gap-4 md:gap-6 flex-1">
                      {/* Icon */}
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 w-16 h-16 bg-blue-50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-cyan-950 group-hover:bg-blue-600 flex items-center justify-center shadow-lg transition-colors duration-300"
                          whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0 ml-4"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-slate-900' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-slate-600'}`} />
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
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-gray-200 bg-slate-50/30">
                          <div className="pl-0 md:pl-[88px]">
                            <h4 className="text-lg font-bold mb-5 text-slate-900 flex items-center gap-3">
                              <span className="w-1 h-6 bg-slate-900 rounded-full" />
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.05 }}
                                  className="flex items-start gap-3 group/feature"
                                >
                                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center mt-0.5 transition-colors duration-300">
                                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                                  </div>
                                  <span className="text-slate-700 leading-relaxed group-hover/feature:text-slate-900 transition-colors duration-300">
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
      </div>
    </section>
  );
};