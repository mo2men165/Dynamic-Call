import { motion } from 'framer-motion';
import { AnimatedCard } from '../shared/AnimatedCard';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const ContactInfo = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Cairo, Egypt', 'New Cairo District'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+20 123 456 7890', '+20 098 765 4321'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@dynamiccall.com', 'support@dynamiccall.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['24/7 Available', 'Every day of the week'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      {contactMethods.map((method) => {
        const Icon = method.icon;
        return (
          <motion.div key={method.title} variants={fadeInUp} className="group">
            <AnimatedCard className="border border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -left-2 -top-2 w-12 h-12 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {method.title}
                  </h3>
                  {method.details.map((detail, index) => (
                    <p key={index} className="text-gray-400 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        );
      })}

      <motion.div variants={fadeInUp}>
        <AnimatedCard className="bg-slate-900 border border-blue-300  text-white relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 " />
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">Response Guarantee</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              We're committed to responding to all inquiries within 24 hours
              during business days. For urgent matters, please call us directly.
            </p>
          </div>
        </AnimatedCard>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <AnimatedCard className="bg-slate-900 border border-blue-300 ">
          <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300 border border-slate-700 hover:border-blue-500"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </motion.a>
              );
            })}
          </div>
        </AnimatedCard>
      </motion.div>
    </motion.div>
  );
};