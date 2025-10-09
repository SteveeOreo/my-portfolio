import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Target,
  Compass,
  Coffee,
  Code,
  Gamepad2,
  Mountain
} from 'lucide-react';

const About = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const coreValues = [
    {
      icon: Heart,
      title: "Humility",
      description: "I believe that true growth comes from acknowledging what we don't know and being open to learning from every experience and every person I meet.",
      color: "text-red-400",
      bgColor: "bg-red-950",
      borderColor: "border-red-800"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "The best solutions emerge when diverse minds work together. I thrive in team environments where ideas are shared freely and everyone's voice is heard.",
      color: "text-blue-400",
      bgColor: "bg-blue-950",
      borderColor: "border-blue-800"
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "Before writing the first line of code, I dive deep into understanding the problem, user needs, and available solutions. Research is the foundation of innovation.",
      color: "text-purple-400",
      bgColor: "bg-purple-950",
      borderColor: "border-purple-800"
    },
    {
      icon: Lightbulb,
      title: "Self-Learning",
      description: "Technology evolves rapidly, and so do I. I'm committed to continuous learning, staying curious, and adapting to new challenges with enthusiasm.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-950",
      borderColor: "border-yellow-800"
    }
  ];

  const interests = [
    {
      icon: Code,
      title: "Technology Innovation",
      description: "Exploring emerging technologies and their potential to solve real-world problems"
    },
    {
      icon: Gamepad2,
      title: "Strategic Gaming",
      description: "Chess and strategy games that sharpen analytical thinking and pattern recognition"
    },
    {
      icon: Mountain,
      title: "Agriculture Tech",
      description: "Passionate about digital solutions that empower farmers and improve food security"
    },
    {
      icon: Coffee,
      title: "Community Building",
      description: "Creating connections and knowledge-sharing platforms for developers and farmers"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-neutral-900">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-enhanced-xl text-high-contrast">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-earth-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-enhanced-lg text-medium-contrast max-w-3xl mx-auto">
            A passionate developer with a strategic mindset, dedicated to creating technology
            that makes a meaningful difference in people's lives.
          </p>
        </motion.div>

        {/* Main About Content - Optimized Layout */}
        <div className="space-y-8">
          {/* My Journey Section - Full Width */}
          <motion.div variants={itemVariants}>
            <div className="card-glass shimmer">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3 gentle-bounce">♚</div>
                <h3 className="text-2xl font-bold text-neutral-100">My Journey</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p className="text-sm">
                    My journey began with the simple satisfaction of buying and reselling consumable products as a kid,
                    which continued developing as I grew up. This led me to study and ultimately earn a Bachelor's degree in Entrepreneurship Studies & AgriBusiness. 
                    During this time, I built a solid foundation in business operations, financial principles, and strategic thinking. 
                    After graduation, I served as a Personal Assistant to the Director of Administration at the Ministry of Public Utilities & Water Resources. 
                    In this role, I enhanced my organizational, communication, and leadership skills, learning to manage priorities, streamline processes, and support high-level decision-making.
                  </p>
                  <p className="text-sm">
                    While excelling in administration, my curiosity about technology kept growing. I wanted to do more than just manage systems; I wanted to build them. 
                    This desire prompted my transition into tech through ALX Africa's Front-End Software Engineering program. Through months of hands-on training, I mastered HTML, CSS, JavaScript, React, and TailwindCSS, gaining experience working in agile development teams.
                  </p>
                   
                </div>

                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p className="text-sm">
                   Most recently, I completed the AI for Developers program, where I explored how artificial intelligence can help developers create smarter, more efficient applications. Today, I combine my business knowledge, administrative experience, and technical skills to develop impactful digital solutions.
                  </p>
                  <p className="text-sm">
                   My goal is to create platforms that enhance access, efficiency, and opportunities, especially in agriculture, e-commerce, and education for small-scale farmers.
                   For me, coding is more than just writing lines of code; it's about solving real-world problems, one project at a time.
                  </p>
                </div>
              </div>

              {/* Chess Philosophy Box */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary-900 to-earth-900 rounded-xl border border-primary-700">
                <div className="flex items-center mb-2">
                  <Target className="w-4 h-4 text-primary-600 mr-2" />
                  <span className="font-semibold text-primary-400 text-sm">Chess & Life Philosophy</span>
                </div>
                <p className="text-xs text-neutral-300 italic">
                  "The journey to success begins not just with any step, but rather one step taken towards the right direction."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values and Beyond Code - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Values Section */}
            <motion.div variants={itemVariants}>
              <div className="card-glass shimmer h-full">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-100">Core Values</h3>
                </div>
                <p className="text-neutral-300 mb-6">
                  The principles that guide my approach to development and collaboration.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex flex-col items-center text-center p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group"
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-primary-600 to-earth-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-100 group-hover:text-primary-400 transition-colors duration-300">
                        {value.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Beyond Code Section */}
            <motion.div variants={itemVariants}>
              <div className="card-glass shimmer h-full">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-100">Beyond Code</h3>
                </div>
                <p className="text-neutral-300 mb-6">
                  What drives my passion and shapes my perspective as a developer
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-primary-600 to-earth-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <interest.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-100 group-hover:text-primary-400 transition-colors duration-300">
                        {interest.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default About;
