import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Crown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const chessPieceVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    floating: {
      y: [0, -8, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 chess-board-bg opacity-30"></div>

      {/* Floating Chess Pieces */}
      <motion.div
        className="absolute top-20 left-10 text-primary-200"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ fontSize: '3rem' }}
      >
        ♚
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 text-earth-300"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ fontSize: '2.5rem', animationDelay: '1s' }}
      >
        ♛
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-primary-300"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ fontSize: '2rem', animationDelay: '2s' }}
      >
        ♝
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-16 text-earth-400"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ fontSize: '2.2rem', animationDelay: '0.5s' }}
      >
        ♞
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="section-container text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Strategic Crown Icon */}
        <motion.div
          className="flex justify-center mb-6"
          variants={itemVariants}
        >
          <Crown className="w-12 h-12 text-primary-600" />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">Stephen Ekwueme</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl text-neutral-600 mb-8 font-medium"
          variants={itemVariants}
        >
          Frontend Software Engineer
        </motion.h2>

        {/* Mission Statement */}
        <motion.p
          className="text-lg sm:text-xl text-neutral-700 max-w-4xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Passionate about solving problems through technology and creating{' '}
          <span className="text-primary-600 font-semibold">digital platforms</span>{' '}
          that improve lives. Specializing in agriculture, e-commerce, and{' '}
          <span className="text-earth-600 font-semibold">farmer empowerment</span>{' '}
          solutions with strategic thinking and innovative approaches.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          variants={itemVariants}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md border border-neutral-200 text-neutral-600 hover:text-primary-600 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-neutral-400" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50/80 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
