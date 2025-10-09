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
      title: "Phone",
      content: "+2348131160033",
      href: "tel:+2348131160033",
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information - Centralized */}
          <motion.div className="text-center space-y-8" variants={itemVariants}>
            

            {/* Contact Cards - Centered Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-6 bg-neutral-800 rounded-xl border border-neutral-700 hover:border-primary-500 hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className={`bg-neutral-900 p-3 rounded-lg`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-100 text-base">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-neutral-300 text-sm">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links - Centered */}
            <div className="text-center">
              <h4 className="font-semibold text-neutral-100 mb-6 text-lg">Follow My Work</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-neutral-800 text-neutral-300 rounded-xl transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg border border-neutral-700 hover:border-primary-500`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

           
          </motion.div>

          
        </div>


      </motion.div>
    </section>
  );
};

export default Contact;
