import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapEmbed } from '../components/contact/MapEmbed';
import { fadeInUp } from '../utils/animations';
import {ContactHero} from '../components/contact/ContactHero';

export const Contact = () => {
  return (
    <>
    <ContactHero />
      {/* Contact Form & Info */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
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
        
        <div className="relative container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info - Takes 1 column */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <MapEmbed />
    </>
  );
};