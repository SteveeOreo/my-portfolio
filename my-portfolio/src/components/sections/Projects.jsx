import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Users, TrendingUp, Newspaper, Palette, ChevronRight, Search, X, Filter } from 'lucide-react';

// Import project images
import agrosphereImage from '../../images/Agrosphere.png';
import redFoxImage from '../../images/RedFoxNewsApp.png';
import googleSitePortfolioImage from '../../images/GooglesitePortforlio.png';
import spOriginalsImage from '../../images/SpOriginals.png';
import steveDynamicSketchesImage from '../../images/SteveDynamic.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
      title: "Google Site Portfolio",
      description: "My first website built with Google Sites, showcasing my bio, projects, skills, and contact information. A zero-code solution demonstrating early web development exploration.",
      image: googleSitePortfolioImage,
      tags: ["Google Sites", "Zero Code", "Web Design"],
      category: "Portfolio",
      github: "https://sites.google.com/view/ekwueme-stephen-chiazam/home",
      live: "https://sites.google.com/view/ekwueme-stephen-chiazam/home",
      highlights: [
        "Fully responsive design",
        "Zero-code implementation",
        "Clean and professional layout"
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
      description: "A modern e-commerce platform for a clothing brand, featuring an innovative virtual closet where users can try on clothes before purchasing. Built with React and Tailwind CSS for a seamless shopping experience.",
      image: spOriginalsImage,
      tags: ["React", "Tailwind CSS", "Vite", "E-Commerce"],
      category: "Fashion Tech",
      github: "https://github.com/SteveeOreo/Sp_Originals",
      live: "https://sp-originals.vercel.app/",
      highlights: [
        "Virtual try-on feature",
        "Fully responsive design",
        "Modern e-commerce interface"
      ]
    },
    ,
    {
      id: 5,
      title: "Steve Dynamic Sketches and frameworks",
      description: "A collection of dynamic sketches and frameworks built with React, Tailwind CSS, and Framer Motion. Each sketch is a unique and interactive experience that showcases my skills and creativity.",
      image: steveDynamicSketchesImage,
      tags: ["React", "Tailwind CSS", "Dynamic Sketches", "Frameworks"],
      category: "Architecture",
      github: "https://github.com/SteveeOreo/Stevesketchbuildings",
      live: "https://stevesketchbuildings.vercel.app/",
      highlights: [
        "Architecture and design",
        "Interactive and engaging",
        "Showcases my skills and creativity"
      ]
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Agriculture Tech": return <TrendingUp className="w-5 h-5" />;
      case "E-Commerce": return <Zap className="w-5 h-5" />;
      case "Media Tech": return <Newspaper className="w-5 h-5" />;
      case "Portfolio": return <Palette className="w-5 h-5" />;
      case "Fashion Tech": return <Palette className="w-5 h-5" />;
      case "Social Platform": return <Users className="w-5 h-5" />;
      case "Data Visualization": return <TrendingUp className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
        <motion.div className="text-center mb-12" variants={itemVariants}>
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

        {/* Search and Filter Section */}
        <motion.div className="mb-12 space-y-6" variants={itemVariants}>
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-neutral-700 transition-colors duration-300"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 text-neutral-400" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700 border border-neutral-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter by ${category}`}
                aria-pressed={selectedCategory === category}
              >
                {category !== 'All' && getCategoryIcon(category)}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          {filteredProjects.length !== projects.length && (
            <motion.p
              className="text-center text-neutral-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Showing {filteredProjects.length} of {projects.length} projects
            </motion.p>
          )}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects-grid"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              {filteredProjects.map((project) => (
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
                      aria-label={`View ${project.title} source code on GitHub`}
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
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="inline-block p-6 bg-neutral-800/50 rounded-full mb-4">
                <Search className="w-12 h-12 text-neutral-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-300 mb-2">No projects found</h3>
              <p className="text-neutral-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

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
