import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Database,
  Settings
} from 'lucide-react';

const Skills = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      description: "Crafting modern, responsive user interfaces",
      skills: [
        { name: "React", level: 95, color: "text-blue-600" },
        { name: "TypeScript", level: 88, color: "text-blue-500" },
        { name: "Tailwind CSS", level: 92, color: "text-cyan-600" },
        { name: "JavaScript (ES6+)", level: 90, color: "text-yellow-600" },
      ]
    },
    {
      title: "State Management & APIs",
      icon: Database,
      description: "Efficient data flow and API integration",
      skills: [
        { name: "Zustand", level: 85, color: "text-purple-600" },
        { name: "REST APIs", level: 88, color: "text-green-600" },
        { name: "Firebase", level: 82, color: "text-orange-600" },
        { name: "GraphQL", level: 75, color: "text-pink-600" },
      ]
    },
    {
      title: "UI/UX & Design",
      icon: Palette,
      description: "Creating intuitive and beautiful experiences",
      skills: [
        { name: "Responsive Design", level: 93, color: "text-indigo-600" },
        { name: "Framer Motion", level: 87, color: "text-purple-500" },
        { name: "CSS Animations", level: 85, color: "text-blue-500" },
        { name: "Design Systems", level: 80, color: "text-green-500" },
      ]
    },
    {
      title: "Development Tools",
      icon: Settings,
      description: "Modern development workflow and tools",
      skills: [
        { name: "Git & GitHub", level: 90, color: "text-gray-300" },
        { name: "Vite", level: 85, color: "text-yellow-500" },
        { name: "npm/yarn", level: 88, color: "text-red-600" },
        { name: "VS Code", level: 92, color: "text-blue-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-black">
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
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-earth-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-enhanced-lg text-medium-contrast max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications with focus on
            user experience and agricultural technology solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-card group"
              variants={skillCardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-900 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">{category.title}</h3>
                  <p className="text-sm text-neutral-300">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${skill.color}`}>{skill.name}</span>
                      <span className="text-sm text-neutral-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${
                          skill.color.includes('blue') ? 'from-blue-500 to-blue-600' :
                          skill.color.includes('purple') ? 'from-purple-500 to-purple-600' :
                          skill.color.includes('green') ? 'from-green-500 to-green-600' :
                          skill.color.includes('yellow') ? 'from-yellow-500 to-yellow-600' :
                          skill.color.includes('cyan') ? 'from-cyan-500 to-cyan-600' :
                          skill.color.includes('orange') ? 'from-orange-500 to-orange-600' :
                          skill.color.includes('pink') ? 'from-pink-500 to-pink-600' :
                          skill.color.includes('indigo') ? 'from-indigo-500 to-indigo-600' :
                          skill.color.includes('red') ? 'from-red-500 to-red-600' :
                          'from-gray-500 to-gray-600'
                        } rounded-full`}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chess Strategy Quote */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-primary-900 to-earth-900 rounded-2xl p-8 border border-primary-700">
            <div className="text-4xl mb-4">♚</div>
            <blockquote className="text-lg sm:text-xl text-neutral-300 italic mb-4 max-w-3xl mx-auto">
              "In chess, as in coding, every move should have a purpose. I approach development
              with the same strategic mindset - analyzing the board, anticipating challenges,
              and executing solutions that create lasting impact."
            </blockquote>
            <cite className="text-primary-400 font-semibold">— My Development Philosophy</cite>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
