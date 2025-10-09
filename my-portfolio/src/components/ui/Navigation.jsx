import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp, Crown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 400);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id.replace('#', '')));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const navItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center text-xl font-bold text-neutral-100 hover:text-primary-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary-500">&lt;</span>
              <span>Stephen.dev</span>
              <span className="text-primary-500">/&gt;</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative font-semibold text-base lg:text-lg transition-colors duration-300 hover:text-primary-500 ${
                    activeSection === item.id
                      ? 'text-primary-500'
                      : scrolled
                      ? 'text-neutral-300'
                      : 'text-neutral-200'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-300 touch-target"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-neutral-200" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-200" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-neutral-900/95 backdrop-blur-md border-l border-neutral-800 shadow-2xl md:hidden overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6 min-h-full flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-6 h-6 text-primary-600" />
                    <span className="text-xl font-bold text-neutral-100">Stephen</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-300 touch-target"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-neutral-200" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="space-y-2 flex-grow">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block text-lg sm:text-xl font-medium transition-colors duration-300 hover:text-primary-500 py-4 px-2 rounded-lg hover:bg-neutral-800/50 touch-target ${
                        activeSection === item.id
                          ? 'text-primary-500 bg-neutral-800/30'
                          : 'text-neutral-300'
                      }`}
                      variants={navItemVariants}
                      custom={index}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-6 pt-6 border-t border-neutral-800 flex-shrink-0"
                  variants={navItemVariants}
                  custom={navItems.length}
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    className="block w-full text-center px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg rounded-lg transition-colors duration-300 touch-target"
                  >
                    Let's Talk
                  </a>
                </motion.div>

                {/* Chess Quote - Mobile */}
                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl border border-neutral-700 flex-shrink-0"
                  variants={navItemVariants}
                  custom={navItems.length + 1}
                >
                  <div className="text-2xl mb-2 text-center">♚</div>
                  <p className="text-sm text-neutral-400 italic text-center leading-relaxed">
                    "Every move should have a purpose."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-40 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
