import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const LoadingSpinner = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const crownVariants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    animate: (i) => ({
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  const chessPieces = ["♚", "♛", "♝", "♞"];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 chess-board-bg opacity-20"></div>

      {/* Floating Chess Pieces */}
      {chessPieces.map((piece, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl text-primary-300"
          style={{
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index * 20)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
        >
          {piece}
        </motion.div>
      ))}

      {/* Main Loading Content */}
      <div className="text-center z-10">
        {/* Crown Icon */}
        <motion.div
          className="flex justify-center mb-6"
          variants={crownVariants}
          animate="animate"
        >
          <Crown className="w-16 h-16 text-primary-600" />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-3xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stephen Ekwueme
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg text-neutral-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Frontend Software Engineer
        </motion.p>

        {/* Spinning Loader */}
        <motion.div
          className="relative w-16 h-16 mx-auto mb-6"
          variants={spinnerVariants}
          animate="animate"
        >
          <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full"></div>
        </motion.div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-600 rounded-full"
              variants={dotVariants}
              animate="animate"
              custom={i}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-sm text-neutral-500 mt-6"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Initializing strategic thinking...
        </motion.p>
      </div>

      {/* Chess Quote */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-2xl mb-2">♚</div>
        <p className="text-sm text-neutral-600 italic">
          "Every great project begins with a strategic first move."
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-neutral-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-earth-600 rounded-full"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
