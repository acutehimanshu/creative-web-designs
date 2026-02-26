import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Award, Users } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      id: 1,
      company: 'Cobox Technologies',
      position: 'Technical Team Lead',
      duration: '2020 - Present',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Leading a cross-functional team of 15+ developers in delivering enterprise-scale applications for Fortune 500 clients.',
      achievements: [
        'Architected microservices solutions serving 10M+ users',
        'Reduced deployment time by 70% through CI/CD implementation',
        'Led Hero MotoCorp CRM project with 50M+ customer records',
        'Mentored 8 junior developers, 6 achieved promotions'
      ],
      technologies: ['Laravel', 'Node.js', 'React', 'AWS', 'Docker', 'Redis']
    },
    {
      id: 2,
      company: 'Neosoft Technologies',
      position: 'Senior Software Engineer',
      duration: '2017 - 2020',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Developed and maintained high-performance web applications for banking and e-commerce clients.',
      achievements: [
        'Built Axis Bank digital platform handling $1B+ transactions',
        'Optimized database queries reducing load time by 60%',
        'Implemented security protocols for banking applications',
        'Collaborated with international teams across 3 time zones'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Azure', 'REST APIs']
    },
    {
      id: 3,
      company: 'Provab Technosoft',
      position: 'Software Engineer',
      duration: '2015 - 2017',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Developed travel and tourism web applications with integrated booking systems and payment gateways.',
      achievements: [
        'Created booking engine processing 1000+ daily reservations',
        'Integrated multiple payment gateways with 99.9% uptime',
        'Developed mobile-responsive interfaces for travel portals',
        'Reduced customer support tickets by 40% through UX improvements'
      ],
      technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'PayPal API']
    },
    {
      id: 4,
      company: 'PS Research & Consultations',
      position: 'Junior Developer',
      duration: '2014 - 2015',
      location: 'Pune, India',
      type: 'Full-time',
      description: 'Started my career building custom web solutions for small to medium businesses.',
      achievements: [
        'Delivered 20+ websites with custom CMS solutions',
        'Learned best practices in code quality and documentation',
        'Collaborated with design teams for pixel-perfect implementations',
        'Maintained 100% client satisfaction rate'
      ],
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="section-padding bg-white relative">
      <div className="container-wrapper">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-neon-blue to-cyan-500"></div>
              <span className="text-neon-blue font-medium tracking-wide">Career Journey</span>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional
              <span className="gradient-text"> Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A decade-long journey of growth, learning, and delivering impactful solutions 
              across diverse industries and technologies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-neon-blue to-cyan-500 rounded-full">
              <div className="h-full w-full bg-gradient-to-b from-neon-blue to-cyan-500 rounded-full"></div>
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={{
                    hidden: { 
                      x: index % 2 === 0 ? -100 : 100, 
                      opacity: 0 
                    },
                    visible: { 
                      x: 0, 
                      opacity: 1,
                      transition: { 
                        duration: 0.8,
                        delay: index * 0.2 
                      }
                    }
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-neon-blue rounded-full z-10 shadow-neon">
                    <div className="w-full h-full bg-neon-blue rounded-full animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="glass p-8 rounded-2xl card-hover"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Company & Position */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-neon-blue font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <div className="bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-full text-sm font-medium mb-1">
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Award size={18} className="mr-2 text-neon-blue" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-neon-blue/10 hover:text-neon-blue transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience