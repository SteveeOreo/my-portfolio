import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Users, TrendingUp, Newspaper, Palette, ChevronRight } from 'lucide-react';

// Import project images
import agrosphereImage from '../../../src/images/Agrosphere.png';
import redFoxImage from '../../../src/images/RedFoxNewsApp.png';
import googleSitePortfolioImage from '../../../src/images/GooglesitePortforlio.png';
import spOriginalsImage from '../../../src/images/SpOriginals.png';

const Projects = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Google site Portfolio",
      description: "My first website built with google site ,showcasing my Bio, project, skills and contact information.",
      image: googleSitePortfolioImage,
      tags: ["Google sites"],
      category: "Portfolio",
      github: "https://sites.google.com/view/ekwueme-stephen-chiazam/home",
      live: "https://sites.google.com/view/ekwueme-stephen-chiazam/home",
      highlights: [
        "Responsiveness",
        "Zero Code site",
        "Experimental features"
      ]
    },
    {
      id: 2,
      title: "Agrosphere",
      description: "A comprehensive digital platform empowering small-scale farmers with bulk purchases and community forum where farmers can communicate and improve their agricultural resources. Built with modern React architecture and intuitive UI/UX design.",
      image: agrosphereImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "API Integration"],
      category: "Agriculture Tech",
      github: "https://github.com/SteveeOreo/Agrosphere",
      live: "https://agrosphere-weld.vercel.app/",
      highlights: [
        "Real-time market pricing",
        "Weather forecasting integration",
        "Farmer community features",
        "Mobile-responsive design"
      ]
    },
    {
      id: 3,
      title: "RedFox News App",
      description: "Modern news aggregation platform with personalized feeds, real-time updates, and clean reading experience. Implements advanced filtering and categorization features.",
      image: redFoxImage,
      tags: ["React", "News API", "PWA", "LocalStorage", "Responsive Design"],
      category: "Media Tech",
      github: "https://github.com/SteveeOreo/News-reader-app",
      live: "https://news-reader-app-xi.vercel.app/",
      highlights: [
        "Real-time news updates",
        "Category-based filtering",
        "Offline reading support",
        "Bookmark functionality"
      ]
    },
    {
      id: 4,
      title: "Sp Originals",
      description: "Clothing brand website built with react and tailwind css, showcasing the brand's products and has a closet where users can try on clothes before purchasing.",
      image: spOriginalsImage,
      tags: ["TailwindCSS", "React", "Vite"],
      category: "Fashion Tech",
      github: "https://github.com/SteveeOreo/Sp_Originals",
      live: "https://my-portfolio-eight-omega-42.vercel.app//",
      highlights: [
        "Innovative functionality",
        "Responsiveness",
      ]
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Agriculture Tech": return <TrendingUp className="w-5 h-5" />;
      case "E-Commerce": return <Zap className="w-5 h-5" />;
      case "Media Tech": return <Newspaper className="w-5 h-5" />;
      case "Portfolio": return <Palette className="w-5 h-5" />;
      case "Social Platform": return <Users className="w-5 h-5" />;
      case "Data Visualization": return <TrendingUp className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-neutral-900 to-black">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block px-6 py-2 bg-primary-900/30 rounded-full text-primary-400 font-medium text-sm mb-4">
            My Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-earth-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
            A showcase of digital solutions focused on agriculture, e-commerce, and user empowerment.
            Each project reflects strategic thinking and innovative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group bg-neutral-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-700/50 hover:border-primary-500/50 shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div variants={cardHoverVariants}>
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-900 to-earth-900 flex items-center justify-center overflow-hidden">
                  {typeof project.image === 'string' ? (
                    project.image.length > 2 ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-6xl filter drop-shadow-lg">
                        {project.image}
                      </div>
                    )
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-primary-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-300 border border-primary-700/50 shadow-lg">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 bg-gradient-to-b from-neutral-800/50 to-neutral-900/80">
                  <h3 className="text-xl font-bold text-neutral-100 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-neutral-300 space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <ChevronRight className="w-3 h-3 text-primary-500 mr-1 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-primary-900/60 text-primary-300 rounded-md border border-primary-700/30 hover:bg-primary-800 hover:text-primary-200 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-all duration-300 text-sm font-medium border border-neutral-700 hover:border-neutral-600 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white rounded-lg transition-all duration-300 text-sm font-medium border border-primary-500 hover:border-primary-400 shadow-md hover:shadow-primary-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="p-8 bg-neutral-800/30 backdrop-blur-sm rounded-2xl border border-neutral-700/50 max-w-3xl mx-auto">
            <p className="text-neutral-300 mb-6 text-lg">
              Interested in seeing more of my work?
            </p>
            <motion.a
              href="https://github.com/SteveeOreo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-6 py-3 rounded-lg transition-all duration-300 text-base font-medium inline-flex items-center space-x-2 shadow-lg hover:shadow-primary-500/30 border border-primary-500 hover:border-primary-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
