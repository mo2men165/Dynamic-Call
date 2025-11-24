import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] '
            : 'bg-white/60 backdrop-blur-md'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="relative z-10">
              <motion.div
                className="flex items-center gap-2.5 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-10 h-10 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-lg"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-[2px] bg-white rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M3 12C3 12 6 5 12 5C18 5 21 12 21 12"
                        stroke="url(#gradient1)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M3 12C3 12 6 19 12 19C18 19 21 12 21 12"
                        stroke="url(#gradient2)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[22px] font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent tracking-tight">
                    Dynamic Call
                  </span>
                  <span className="text-[9px] font-semibold text-gray-400 tracking-[0.15em] uppercase mt-0.5">
                    Communication Solutions
                  </span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link key={link.path} to={link.path}>
                    <motion.div
                      className="relative px-5 py-2.5 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className={`text-[16px] font-medium transition-colors duration-300 relative z-10 ${
                          isActive
                            ? 'text-blue-600'
                            : 'text-gray-700 group-hover:text-blue-600'
                        }`}
                      >
                        {link.label}
                      </span>
                      
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"
                          layoutId="activeIndicator"
                          initial={false}
                          style={{ x: '-50%' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <Link to="/contact">
              <motion.button
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 relative overflow-hidden group rounded-lg border border-blue-600 bg-white  "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 font-medium text-blue-700  transition-colors duration-300">
                  Contact Us
                </span>
                <motion.svg
                  className="relative z-10 w-4 h-4 text-blue-700  transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </Link>

            <motion.button
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-gray-900 rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-900 rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scale: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-900 rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              className="fixed top-20 right-4 w-[calc(100%-2rem)] max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl z-50 lg:hidden overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-4">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`relative px-6 py-4 rounded-2xl mb-2 transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="text-base font-medium">{link.label}</span>
                      </motion.div>
                    </Link>
                  );
                })}
                
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                      <span>Contact Us</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};