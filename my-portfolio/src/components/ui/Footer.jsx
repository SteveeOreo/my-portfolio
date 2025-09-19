import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:stephen.ekwueme@example.com",
      label: "Email",
      color: "hover:text-primary-600"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const chessPieces = ["♚", "♛", "♝", "♞", "♜", "♟"];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
      <motion.div
        className="section-container section-padding"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold">Stephen Ekwueme</span>
            </div>
            <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
              Frontend Software Engineer passionate about creating digital solutions
              that empower farmers and improve lives through strategic technology approaches.
            </p>

            {/* Chess Strategy Quote */}
            <div className="bg-gradient-to-r from-primary-900/20 to-earth-900/20 rounded-lg p-4 border border-primary-800/30">
              <div className="flex items-start space-x-3">
                <div className="text-2xl text-primary-400">♚</div>
                <div>
                  <blockquote className="text-neutral-200 italic text-sm">
                    "In chess and in code, every move should advance your position toward victory."
                  </blockquote>
                  <cite className="text-primary-400 text-xs font-medium block mt-2">
                    — Development Philosophy
                  </cite>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-earth-400" />
                <span className="text-sm">Remote & On-site Available</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href="mailto:stephen.ekwueme@example.com"
                  className="text-sm hover:text-primary-400 transition-colors duration-300"
                >
                  stephen.ekwueme@example.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-neutral-800 rounded-lg text-neutral-400 transition-all duration-300 hover:bg-neutral-700 ${social.color} hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider with Chess Pieces */}
        <motion.div
          className="border-t border-neutral-800 pt-8 mb-8"
          variants={itemVariants}
        >
          <div className="flex justify-center space-x-6 mb-8">
            {chessPieces.map((piece, index) => (
              <motion.div
                key={index}
                className="text-2xl text-neutral-600 hover:text-primary-400 transition-colors duration-300 cursor-default"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {piece}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2 text-sm text-neutral-400">
            <span>© {currentYear} Stephen Ekwueme. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-neutral-400">
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and ☕</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Powered by React & Passion</span>
            </span>
          </div>
        </motion.div>

        {/* Tech Stack Credits */}
        <motion.div
          className="mt-8 pt-6 border-t border-neutral-800 text-center"
          variants={itemVariants}
        >
          <p className="text-xs text-neutral-500">
            Built with React, Tailwind CSS, Framer Motion, and strategic thinking
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Chess Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="chess-board-bg h-full w-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
