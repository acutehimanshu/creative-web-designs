import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Linkedin, Github, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/himanshu-sharma',
      color: '#0A66C2',
      name: 'LinkedIn'
    },
    { 
      icon: Github, 
      href: 'https://github.com/mrhimanshu',
      color: '#333333',
      name: 'GitHub'
    },
    { 
      icon: Mail, 
      href: 'mailto:himanshu.sharma@example.com',
      color: '#EA4335',
      name: 'Email'
    },
    { 
      icon: Phone, 
      href: 'tel:+919876543210',
      color: '#25D366',
      name: 'Phone'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-wrapper py-16 px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold gradient-text mb-6">Himanshu.</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Senior Software Engineer & Technical Team Lead passionate about 
                  building scalable digital systems and leading high-performing teams.
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for new opportunities</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }}
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>Backend Architecture</li>
                  <li>Team Leadership</li>
                  <li>Technical Consulting</li>
                  <li>Code Reviews</li>
                  <li>Performance Optimization</li>
                  <li>Cloud Deployments</li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
                <div className="space-y-4 mb-8">
                  <div className="text-gray-400">
                    <p>📍 Bangalore, India</p>
                  </div>
                  <div className="text-gray-400">
                    <p>📧 himanshu.sharma@example.com</p>
                  </div>
                  <div className="text-gray-400">
                    <p>📱 +91 98765 43210</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name !== 'Phone' ? '_blank' : undefined}
                      rel={social.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                      className="p-3 glass rounded-lg hover:shadow-neon transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 0 20px ${social.color}40`
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="container-wrapper py-8 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <span>© {currentYear} Himanshu Sharma. Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>in India</span>
              </motion.div>

              {/* Tech Credits */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                <span>Built with React, Tailwind CSS & Three.js</span>
              </motion.div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className="p-3 glass rounded-lg hover:shadow-neon transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ArrowUp size={20} className="text-neon-blue group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer