import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  X, 
  Calendar,
  Users,
  Trophy,
  TrendingUp
} from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Hero MotoCorp CRM',
      subtitle: 'Enterprise Customer Management System',
      description: 'Comprehensive CRM solution for India\'s largest motorcycle manufacturer, handling dealer networks and customer data.',
      shortDesc: 'Large-scale CRM system serving 5000+ dealers across India with real-time analytics and customer management.',
      image: '/api/placeholder/600/400',
      category: 'Enterprise',
      year: '2023',
      client: 'Hero MotoCorp',
      team: '12 developers',
      duration: '8 months',
      technologies: ['Laravel', 'React', 'MySQL', 'Redis', 'AWS'],
      highlights: [
        'Managed 50M+ customer records',
        '99.9% uptime achievement',
        '70% faster query performance',
        'Real-time analytics dashboard'
      ],
      results: '40% improvement in dealer efficiency and 60% reduction in data processing time.',
      challenges: 'Handling massive data volumes while maintaining real-time performance across multiple regions.',
      solution: 'Implemented microservices architecture with Redis caching and optimized database indexing.'
    },
    {
      id: 2,
      title: 'BCCI.tv Streaming Platform',
      subtitle: 'Live Cricket Streaming Solution',
      description: 'High-performance video streaming platform for the Board of Control for Cricket in India.',
      shortDesc: 'Live streaming platform handling millions of concurrent viewers during cricket matches.',
      image: '/api/placeholder/600/400',
      category: 'Media',
      year: '2022',
      client: 'BCCI',
      team: '15 developers',
      duration: '10 months',
      technologies: ['Node.js', 'React', 'AWS', 'CDN', 'WebRTC'],
      highlights: [
        '10M+ concurrent viewers',
        'Sub-second latency',
        'Multi-device compatibility',
        'Adaptive bitrate streaming'
      ],
      results: 'Successfully streamed IPL matches to global audience with 99.8% uptime.',
      challenges: 'Managing massive concurrent load spikes during popular matches.',
      solution: 'Implemented auto-scaling infrastructure and CDN optimization for global content delivery.'
    },
    {
      id: 3,
      title: 'Axis Bank Saksham 360',
      subtitle: 'Digital Banking Platform',
      description: 'Comprehensive digital banking solution for Axis Bank\'s corporate clients.',
      shortDesc: 'Full-featured digital banking platform for corporate clients with advanced security features.',
      image: '/api/placeholder/600/400',
      category: 'FinTech',
      year: '2021',
      client: 'Axis Bank',
      team: '20 developers',
      duration: '12 months',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'Azure'],
      highlights: [
        'Bank-grade security',
        'Multi-currency support',
        'Real-time transactions',
        'Compliance automation'
      ],
      results: '300% increase in digital transaction volume and 50% reduction in processing time.',
      challenges: 'Meeting stringent banking security and compliance requirements.',
      solution: 'Implemented advanced encryption, audit trails, and automated compliance checks.'
    },
    {
      id: 4,
      title: 'Jyotirling.com',
      subtitle: 'Spiritual Tourism Platform',
      description: 'Complete e-commerce and booking platform for spiritual tourism and religious services.',
      shortDesc: 'Tourism and booking platform connecting devotees with spiritual destinations and services.',
      image: '/api/placeholder/600/400',
      category: 'Tourism',
      year: '2020',
      client: 'Jyotirling Foundation',
      team: '8 developers',
      duration: '6 months',
      technologies: ['PHP', 'MySQL', 'PayU', 'Google Maps', 'Bootstrap'],
      highlights: [
        'Multi-language support',
        'Integrated payment gateway',
        'Location-based services',
        'Mobile-responsive design'
      ],
      results: '500% increase in online bookings and improved user engagement by 80%.',
      challenges: 'Creating an intuitive platform for diverse user demographics.',
      solution: 'Developed multilingual interface with simplified booking flow and mobile optimization.'
    }
  ]

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

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-xl text-gray-600">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Project Image */}
            <div className="w-full h-64 bg-gradient-to-r from-neon-blue/20 to-cyan-500/20 rounded-xl mb-8 flex items-center justify-center">
              <span className="text-gray-500 font-medium">{project.title} Interface</span>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="mx-auto mb-2 text-neon-blue" size={24} />
                <div className="font-semibold">{project.year}</div>
                <div className="text-sm text-gray-600">Year</div>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-neon-blue" size={24} />
                <div className="font-semibold">{project.team}</div>
                <div className="text-sm text-gray-600">Team Size</div>
              </div>
              <div className="text-center">
                <Trophy className="mx-auto mb-2 text-neon-blue" size={24} />
                <div className="font-semibold">{project.client}</div>
                <div className="text-sm text-gray-600">Client</div>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 text-neon-blue" size={24} />
                <div className="font-semibold">{project.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Description */}
              <div>
                <h4 className="text-xl font-bold mb-4">Project Overview</h4>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xl font-bold mb-4">Key Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xl font-bold mb-4">Results & Impact</h4>
                <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  {project.results}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-red-600">Challenge</h4>
                  <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3 text-green-600">Solution</h4>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
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
              <span className="text-neon-blue font-medium tracking-wide">Featured Projects</span>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies &
              <span className="gradient-text"> Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore some of the enterprise-scale projects I've architected and delivered, 
              showcasing technical excellence and business impact.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-r from-neon-blue/20 to-cyan-500/20 flex items-center justify-center border-b border-white/20">
                  <span className="text-gray-600 font-medium">{project.title}</span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category & Year */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-neon-blue font-medium text-sm group-hover:underline">
                      View Case Study
                    </span>
                    <ExternalLink size={16} className="text-neon-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

export default Projects