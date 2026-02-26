import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import Hero3DBackground from '../components/Hero3DBackground'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Building Scalable Digital Systems'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full opacity-60">
        <Hero3DBackground />
      </div>

      {/* Content Container */}
      <div className="container-wrapper section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 z-10 relative"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-px bg-gradient-to-r from-neon-blue to-cyan-500"></div>
              <span className="text-neon-blue font-medium tracking-wide">
                Hello, I'm Himanshu Sharma
              </span>
            </motion.div>

            {/* Main Headline with Typing Effect */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              <span className="gradient-text">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Senior Software Engineer & Technical Team Lead with{' '}
              <span className="font-semibold text-neon-blue">10+ years</span>{' '}
              of experience in enterprise applications and scalable architectures.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {[
                'Backend Architecture',
                'Cloud Deployments',
                'Team Leadership',
                'Microservices'
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-neon-blue/20"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <ExternalLink 
                  size={18} 
                  className="transition-transform group-hover:translate-x-1" 
                />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download 
                  size={18} 
                  className="transition-transform group-hover:translate-y-1" 
                />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 pt-8"
            >
              <span className="text-gray-500 font-medium">Connect:</span>
              {[
                { icon: Linkedin, href: 'https://linkedin.com/in/himanshu-sharma', color: '#0A66C2' },
                { icon: Github, href: 'https://github.com/mrhimanshu', color: '#333' },
                { icon: Mail, href: 'mailto:himanshu@example.com', color: '#EA4335' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:shadow-neon transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 20px ${social.color}30`
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} style={{ color: social.color }} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:pl-12 space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '10+', label: 'Years Experience', color: 'neon-blue' },
                { number: '50+', label: 'Projects Delivered', color: 'cyan-500' },
                { number: '15+', label: 'Team Members Led', color: 'neon-blue' },
                { number: '99%', label: 'Client Satisfaction', color: 'cyan-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        delay: index * 0.1,
                        duration: 0.6 
                      }
                    }
                  }}
                  className="glass p-6 rounded-2xl text-center card-hover"
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-3xl font-bold gradient-text mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-2xl card-hover"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Currently in</h3>
                  <p className="text-gray-600">Bangalore, India</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero