import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Users, Award, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const highlights = [
    {
      icon: Code,
      title: 'Backend Architecture',
      description: 'Expert in designing scalable backend systems with microservices architecture and cloud-native solutions.'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led cross-functional teams of 15+ developers, managing project delivery and mentoring junior engineers.'
    },
    {
      icon: Award,
      title: 'Enterprise Solutions',
      description: 'Delivered enterprise-grade applications for Fortune 500 companies with high availability requirements.'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Specialized in optimizing application performance, reducing load times by up to 70% through strategic improvements.'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container-wrapper">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-neon-blue to-cyan-500"></div>
              <span className="text-neon-blue font-medium tracking-wide">About Me</span>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Turning Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate technology leader who thrives on building robust, scalable systems 
              that power modern businesses and delight users worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With over <span className="font-semibold text-neon-blue">10 years</span> in 
                    software engineering, I've evolved from a curious developer to a technical leader 
                    who shapes product strategy and mentors the next generation of engineers.
                  </p>
                  <p>
                    Throughout my career at companies like <span className="font-semibold">Cobox Technologies</span> and 
                    <span className="font-semibold"> Neosoft Technologies</span>, I've architected solutions 
                    for major clients including Hero MotoCorp, BCCI, and Axis Bank, handling millions of users 
                    and transactions.
                  </p>
                  <p>
                    I believe in the power of clean code, collaborative teamwork, and continuous learning. 
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing insights with the developer community.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={{
                    hidden: { x: 50, opacity: 0 },
                    visible: { 
                      x: 0, 
                      opacity: 1,
                      transition: { delay: index * 0.1, duration: 0.6 }
                    }
                  }}
                  className="glass p-6 rounded-xl card-hover group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-neon-blue to-cyan-500 rounded-lg group-hover:shadow-neon transition-all duration-300">
                      <highlight.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-neon-blue transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About