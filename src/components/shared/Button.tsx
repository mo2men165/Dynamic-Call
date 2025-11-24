import { motion } from 'framer-motion';
import { buttonHover } from '../../utils/animations';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:shadow-blue-500/50 hover:shadow-2xl',
    secondary:
      'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-xl',
    outline:
      'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};