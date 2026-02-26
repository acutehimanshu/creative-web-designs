import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award,
  TrendingUp,
  Shield,
  MessageSquare,
  BookOpen
} from 'lucide-react'

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const leadershipAreas = [
    {
      icon: Users,
      title: 'Team Management',
      description: 'Led cross-functional teams of 15+ developers, fostering collaboration and driving results.',
      highlights: [
        'Managed teams across multiple time zones',
        '95% team retention rate',
        'Promoted 6 junior developers to senior roles'
      ]
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Developed technical roadmaps and architecture decisions for enterprise-scale projects.',
      highlights: [
        'Defined technical strategy for $10M+ projects',
        'Reduced development time by 40%',
        'Improved system scalability by 300%'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Architecture',
      description: 'Introduced modern development practices and architectural patterns.',
      highlights: [
        'Migrated monolith to microservices',
        'Implemented DevOps practices',
        'Adopted cloud-native technologies'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Client Relations',
      description: 'Direct interface with C-level executives and technical stakeholders.',
      highlights: [
        '100% client satisfaction rate',
        'Managed $5M+ client accounts',
        'Led technical presentations to 50+ stakeholders'
      ]
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Best Team Lead 2023',
      description: 'Recognized for exceptional team leadership and project delivery at Cobox Technologies.',
      year: '2023'
    },
    {
      icon: TrendingUp,
      title: 'Performance Excellence',
      description: 'Achieved 150% of delivery targets while maintaining quality standards.',
      year: '2022'
    },
    {
      icon: Shield,
      title: 'Security Champion',
      description: 'Implemented security best practices across all team projects.',
      year: '2021'
    },
    {
      icon: BookOpen,
      title: 'Technical Mentor',
      description: 'Mentored 20+ developers in career progression and technical skills.',
      year: '2020-2023'
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
              <span className="text-neon-blue font-medium tracking-wide">Leadership & Impact</span>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Teams to
              <span className="gradient-text"> Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond technical expertise, I focus on building high-performing teams, 
              fostering innovation, and delivering exceptional results through collaborative leadership.
            </p>
          </motion.div>

          {/* Leadership Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {leadershipAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="glass p-8 rounded-2xl card-hover group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-r from-neon-blue to-cyan-500 rounded-xl group-hover:shadow-neon transition-all duration-300">
                    <area.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-neon-blue transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Statistics */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Impact</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quantifiable results that demonstrate effective leadership and team management skills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15+', label: 'Team Members Led', color: 'from-blue-500 to-cyan-500' },
                { number: '50+', label: 'Projects Delivered', color: 'from-green-500 to-emerald-500' },
                { number: '95%', label: 'Team Retention', color: 'from-purple-500 to-pink-500' },
                { number: '100%', label: 'Client Satisfaction', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { delay: index * 0.1, duration: 0.6 }
                    }
                  }}
                  className="text-center glass p-6 rounded-2xl card-hover"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Recognition for leadership excellence and contributions to team and organizational success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={{
                    hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
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
                      <achievement.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900 group-hover:text-neon-blue transition-colors">
                          {achievement.title}
                        </h4>
                        <span className="text-neon-blue font-medium text-sm">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Philosophy */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="glass p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Philosophy</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
                "Great leaders don't just build great products; they build great people. 
                My approach focuses on empowering team members, fostering innovation, 
                and creating an environment where everyone can contribute their best work."
              </blockquote>
              <div className="mt-6">
                <div className="text-neon-blue font-semibold">- Himanshu Sharma</div>
                <div className="text-gray-500 text-sm">Technical Team Lead</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership