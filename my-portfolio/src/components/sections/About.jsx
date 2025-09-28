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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-earth-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
            A passionate developer with a strategic mindset, dedicated to creating technology
            that makes a meaningful difference in people's lives.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Personal Story */}
          <motion.div variants={itemVariants}>
            <div className="prose prose-lg max-w-none">
              <div className="card-glass shimmer">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 gentle-bounce">♚</div>
                  <h3 className="text-2xl font-bold text-neutral-100">My Journey</h3>
                </div>

                <div className="space-y-6 text-neutral-300 leading-relaxed fade-in-up">
                  <p>
                    My passion for technology began with a simple question: <em>"How can we use
                    code to improve lives?"</em> This curiosity led me to specialize in frontend
                    development, where I discovered the power of creating intuitive digital
                    experiences that connect users with solutions they need.
                  </p>

                  <p>
                    Working on projects in agriculture and e-commerce has taught me that the
                    best technology is invisible to the user but transformative in its impact.
                    I've had the privilege of building platforms that help farmers access market
                    data, connect with buyers, and make informed decisions about their crops.
                  </p>

                  <p>
                    Like chess, programming requires patience, strategic thinking, and the
                    ability to see patterns others might miss. Each project is a new game
                    where I analyze the board, anticipate user needs, and execute solutions
                    that create lasting value.
                  </p>
                </div>

                {/* Chess Philosophy Box */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary-900 to-earth-900 rounded-xl border border-primary-700">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-primary-400">Chess & Code Philosophy</span>
                  </div>
                  <p className="text-sm text-neutral-300 italic">
                    "In chess, every piece has a purpose, and every move should advance your
                    position. In development, every line of code should serve a purpose and
                    every feature should advance the user's goals."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 shadow-sm">
                <h3 className="text-2xl font-bold text-neutral-100 mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">2+</div>
                    <div className="text-sm text-neutral-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-earth-600 mb-1">4+</div>
                    <div className="text-sm text-neutral-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
                    <div className="text-sm text-neutral-300">Tech Stacks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">∞</div>
                    <div className="text-sm text-neutral-300">Learning Mode</div>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="card-glass">
                <h3 className="text-2xl font-bold text-neutral-100 mb-6">Current Focus</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 gentle-bounce">
                    <Compass className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-100">Agricultural Technology</p>
                      <p className="text-sm text-neutral-300">Building digital solutions for farmer empowerment and food security</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 gentle-bounce">
                    <Code className="w-5 h-5 text-earth-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-100">Frontend Excellence</p>
                      <p className="text-sm text-neutral-300">Mastering React, TypeScript, and modern development patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 gentle-bounce">
                    <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-100">Community Impact</p>
                      <p className="text-sm text-neutral-300">Creating platforms that connect and empower communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Core <span className="gradient-text">Values</span>
            </h3>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              The principles that shape my approach to development and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className={`card-glass border-2 ${value.borderColor} hover:shadow-lg hover:shadow-${value.color.split('-')[1]}-500/20 transition-all duration-300 group`}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className={`${value.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 gentle-bounce`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h4 className="text-lg font-bold text-neutral-100 mb-3">{value.title}</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests & Hobbies */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Beyond <span className="gradient-text">Code</span>
            </h3>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              What drives my passion and shapes my perspective as a developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="card-glass hover:border-primary-400 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-900 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 gentle-bounce">
                    <interest.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-100 mb-2">{interest.title}</h4>
                    <p className="text-neutral-300 leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
