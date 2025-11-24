import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={` rounded-2xl p-8 shadow-xl ${className}`}
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};