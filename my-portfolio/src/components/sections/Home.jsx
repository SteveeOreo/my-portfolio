import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MessageSquare, ArrowDown } from 'lucide-react';
import profileImage from '../../images/Me.JPG';

const Home = () => {
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
    { icon: Github, href: "https://github.com/SteveeOreo", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/stephen-ekwueme/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:stephen.ekwuemec@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 chess-board-bg opacity-30"></div>

      {/* Floating Chess Pieces - Now visible on all screen sizes */}
      <motion.div
        className="absolute top-28 left-4 sm:left-10 text-primary-200 text-xl sm:text-2xl lg:text-5xl"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
      >
        ♚
      </motion.div>

      <motion.div
        className="absolute top-40 right-4 sm:right-20 text-earth-300 text-lg sm:text-xl lg:text-4xl"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ animationDelay: '1s' }}
      >
        ♛
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-4 sm:left-20 text-primary-300 text-base sm:text-lg lg:text-3xl"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ animationDelay: '2s' }}
      >
        ♝
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-4 sm:right-16 text-earth-400 text-base sm:text-lg lg:text-3xl"
        variants={chessPieceVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        style={{ animationDelay: '0.5s' }}
      >
        ♞
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 via-earth-600 to-green-600 rounded-full blur-sm opacity-90 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-earth-400 to-green-400 rounded-full blur-xs opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <img
              src={profileImage}
              alt="Stephen Ekwueme"
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover object-center border-6 border-white shadow-2xl shadow-primary-500/60 transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl group-hover:shadow-primary-500/80"
              style={{ objectPosition: 'center top' }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600/15 to-earth-600/15 group-hover:from-primary-600/20 group-hover:to-earth-600/20 transition-all duration-300"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 text-enhanced-xl text-high-contrast">
            <span className="text-neutral-100 font-extrabold tracking-tight leading-tight drop-shadow-lg">
              <span className="text-primary-500"></span>
              Stephen Ekwueme
              <span className="text-primary-500"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 font-semibold tracking-wide">
            Front-End Developer || Entrepreneur || Chess Enthusiast
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Crafting digital experiences that bridge technology and human needs,
            with a focus on agricultural innovation and community empowerment.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <motion.a
            href="#contact"
            className="group relative overflow-hidden bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center min-w-[200px] border-2 border-transparent hover:border-primary-400"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MessageSquare className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">Let's Connect</span>
          </motion.a>
          <motion.a
            href="#projects"
            className="group relative overflow-hidden bg-transparent border-2 border-neutral-700 hover:border-primary-500 text-neutral-300 hover:text-white px-10 py-5 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center min-w-[200px] hover:bg-neutral-800"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <ArrowDown className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">View My Work</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-16 px-4"
          variants={itemVariants}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-neutral-800 shadow-lg border border-neutral-700 text-neutral-300 hover:text-primary-500 hover:border-primary-500 hover:shadow-xl transition-all duration-300 touch-manipulation"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-7 h-7" />
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
          <ChevronDown className="w-8 h-8 text-neutral-300" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50/80 pointer-events-none"></div>
    </section>
  );
};

export default Home;
