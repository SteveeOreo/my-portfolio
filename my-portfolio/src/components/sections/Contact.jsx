import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { FaChessKing } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'your_service_id';
      const templateId = 'your_template_id';
      const publicKey = 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Stephen Ekwueme',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "stephen.ekwuemec@gmail.com",
      href: "mailto:stephen.ekwuemec@gmail.com",
      color: "text-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Available Remote & On-site",
      href: null,
      color: "text-earth-600",
      bgColor: "bg-earth-50"
    },
    {
      icon: Phone,
      title: "Response Time",
      content: "Within 24 hours",
      href: null,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/SteveeOreo",
      color: "hover:bg-gray-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/stephen-ekwueme/",
      color: "hover:bg-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://x.com/Steve__Oreo",
      color: "hover:bg-blue-400"
    },
    {
      icon: FaChessKing,
      name: "Chess",
      href: "https://www.chess.com/member/SteveeOreo",
      color: "hover:bg-green-400"
    }
   
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-neutral-900 to-black">
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-earth-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-enhanced-lg text-medium-contrast max-w-3xl mx-auto">
            Ready to discuss your next project? Whether it's agriculture tech, e-commerce solutions,
            or innovative web applications, I'd love to hear your ideas and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-sm sm:text-base text-neutral-300 mb-6 sm:mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities and challenges. Whether you're a
                startup looking to build from scratch, an established company seeking to innovate,
                or a fellow developer wanting to collaborate, let's start a conversation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-neutral-800 rounded-xl border border-neutral-700 hover:border-primary-500 hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className={`bg-neutral-900 p-2 sm:p-3 rounded-lg`}>
                    <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-100 text-sm sm:text-base">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-neutral-300 text-sm sm:text-base">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-neutral-100 mb-3 sm:mb-4 text-sm sm:text-base">Follow My Work</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 sm:p-3 bg-neutral-800 text-neutral-300 rounded-lg transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

           
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 shadow-sm">
              <h3 className="text-2xl font-bold text-neutral-100 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-600 bg-neutral-700 text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-600 bg-neutral-700 text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-600 bg-neutral-700 text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-600 bg-neutral-700 text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-900 text-green-300 border border-green-700'
                        : 'bg-red-900 text-red-300 border border-red-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="font-medium">
                        {submitStatus === 'success'
                          ? 'Message sent successfully! I\'ll get back to you within 24 hours.'
                          : 'Failed to send message. Please try again or contact me directly.'}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Note */}
              <p className="text-sm text-neutral-400 mt-4 text-center">
                * Required fields. Your information is safe and will never be shared.
              </p>
            </div>
          </motion.div>
        </div>


      </motion.div>
    </section>
  );
};

export default Contact;
