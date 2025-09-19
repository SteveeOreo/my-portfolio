import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Users, TrendingUp, Newspaper, Palette, ChevronRight } from 'lucide-react';

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
      title: "Agrosphere",
      description: "A comprehensive digital platform empowering farmers with real-time market data, weather insights, and agricultural resources. Built with modern React architecture and intuitive UI/UX design.",
      image: "🌾",
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "API Integration"],
      category: "Agriculture Tech",
      github: "https://github.com/yourusername/agrosphere",
      live: "https://agrosphere-demo.vercel.app",
      highlights: [
        "Real-time market pricing",
        "Weather forecasting integration",
        "Farmer community features",
        "Mobile-responsive design"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with advanced product catalog, secure payment processing, and comprehensive admin dashboard. Focused on user experience and conversion optimization.",
      image: "🛒",
      tags: ["React", "Zustand", "Stripe API", "Tailwind CSS", "Node.js"],
      category: "E-Commerce",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      highlights: [
        "Secure payment processing",
        "Advanced search & filtering",
        "Inventory management",
        "Analytics dashboard"
      ]
    },
    {
      id: 3,
      title: "News Reader App",
      description: "Modern news aggregation platform with personalized feeds, real-time updates, and clean reading experience. Implements advanced filtering and categorization features.",
      image: "📰",
      tags: ["React", "News API", "PWA", "LocalStorage", "Responsive Design"],
      category: "Media Tech",
      github: "https://github.com/yourusername/news-reader",
      live: "https://news-reader-demo.vercel.app",
      highlights: [
        "Real-time news updates",
        "Category-based filtering",
        "Offline reading support",
        "Bookmark functionality"
      ]
    },
    {
      id: 4,
      title: "Portfolio Showcase",
      description: "A collection of interactive web applications and design experiments. Showcasing creative solutions, animations, and modern development practices.",
      image: "🎨",
      tags: ["React", "Framer Motion", "Three.js", "GSAP", "Creative Coding"],
      category: "Portfolio",
      github: "https://github.com/yourusername/portfolio-collection",
      live: "https://portfolio-showcase.vercel.app",
      highlights: [
        "Interactive animations",
        "3D visualizations",
        "Performance optimized",
        "Experimental features"
      ]
    },
    {
      id: 5,
      title: "Farmer Connect Network",
      description: "Social platform connecting farmers globally to share knowledge, resources, and market opportunities. Features real-time messaging and community-driven content.",
      image: "🤝",
      tags: ["React", "Socket.io", "MongoDB", "Express", "Real-time"],
      category: "Social Platform",
      github: "https://github.com/yourusername/farmer-connect",
      live: "https://farmer-connect-demo.vercel.app",
      highlights: [
        "Real-time messaging",
        "Knowledge sharing hub",
        "Market opportunity alerts",
        "Community moderation"
      ]
    },
    {
      id: 6,
      title: "Agricultural Dashboard",
      description: "Comprehensive analytics dashboard for agricultural data visualization. Provides insights into crop yields, market trends, and resource optimization.",
      image: "📊",
      tags: ["React", "D3.js", "Chart.js", "Data Visualization", "Analytics"],
      category: "Data Visualization",
      github: "https://github.com/yourusername/ag-dashboard",
      live: "https://ag-dashboard-demo.vercel.app",
      highlights: [
        "Interactive data visualization",
        "Trend analysis",
        "Export capabilities",
        "Multi-device support"
      ]
    }
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
    <section id="projects" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-earth-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            A showcase of digital solutions focused on agriculture, e-commerce, and user empowerment.
            Each project reflects strategic thinking and innovative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div variants={cardHoverVariants}>
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-50 to-earth-50 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl filter drop-shadow-lg">
                    {project.image}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-neutral-700">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
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
                        className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-md"
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
                      className="flex items-center space-x-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors duration-300 text-sm font-medium"
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
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
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
          className="text-center mt-12"
          variants={itemVariants}
        >
          <p className="text-neutral-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
