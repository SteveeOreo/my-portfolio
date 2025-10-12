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
  ExternalLink,
  Download,
  Play
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand & Mission */}
          <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl gentle-bounce">♚</div>
              <span className="text-xl font-bold">Stephen.dev</span>
            </div>
            <p className="text-neutral-300 leading-relaxed max-w-md">
              Building digital solutions that empower communities and drive innovation
              in agriculture and technology.
            </p>

           
          </motion.div>

         
        </div>

        {/* Divider with Chess Pieces */}
        <motion.div
          className="border-t border-neutral-800 pt-6 mb-6"
          variants={itemVariants}
        >
          <div className="flex justify-center space-x-4 mb-6">
            {chessPieces.map((piece, index) => (
              <motion.div
                key={index}
                className="text-xl text-neutral-600 hover:text-primary-400 transition-colors duration-300 cursor-default"
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
          className="mt-6 pt-4 border-t border-neutral-800 text-center"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center space-x-2 text-xs text-neutral-500">
            <span>© {currentYear} Stephen Ekwueme. All rights reserved.</span>
          </div> 
        </motion.div>

        {/* Tech Stack Credits */}
        <motion.div
          className="mt-6 pt-4 border-t border-neutral-800 text-center"
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
