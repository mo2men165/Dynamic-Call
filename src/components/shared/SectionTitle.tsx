import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) => {
  return (
    <motion.div
      className={`${centered ? 'text-center' : ''} ${className} mb-16`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-5xl font-bold mb-4 gradient-text leading-relaxed">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};