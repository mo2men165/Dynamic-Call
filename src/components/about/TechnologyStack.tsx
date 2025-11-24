import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Cloud, BrainCircuit, Shield, Globe2, Zap, CheckCircle2 } from 'lucide-react';

export const TechnologyStack = () => {
  const technologies = [
    {
      icon: Cloud,
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud-based systems ensuring 99.9% uptime and reliability.',
      features: ['Auto-scaling', 'Global CDN', 'Load Balancing'],
    },
    {
      icon: BrainCircuit,
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics and insights for continuous improvement and optimization.',
      features: ['Predictive Analysis', 'Sentiment Detection', 'Smart Routing'],
    },
    {
      icon: Shield,
      name: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols protecting sensitive data.',
      features: ['256-bit Encryption', 'GDPR Compliant', '2FA Authentication'],
    },
    {
      icon: Globe2,
      name: 'Omnichannel Platform',
      description: 'Voice, email, chat, and social media support from a unified interface.',
      features: ['Unified Inbox', 'Cross-channel', 'Message History'],
    },
  ];


  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

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
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Powered by Innovation</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technology & Infrastructure
          </motion.h2>
          
          <motion.p
            className="text-base text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Powered by cutting-edge tools and platforms for superior performance
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-slate-800 group-hover:bg-slate-700 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {tech.description}
                      </p>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-300 border border-gray-700"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};