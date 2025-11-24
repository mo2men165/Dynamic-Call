import { motion } from 'framer-motion';
import { SectionTitle } from '../shared/SectionTitle';
import { scaleIn } from '../../utils/animations';

export const MapEmbed = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto">
        <SectionTitle
          title="Find Us"
          subtitle="Located in the heart of Cairo, Egypt"
        />

        <motion.div
          className="max-w-6xl mx-auto"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27653.563434705284!2d31.26165035!3d29.959438099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583809b8f551e3%3A0x6265c5febb8ab4a3!2sMaadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1763968444553!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};