import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Server, 
  Code, 
  Cloud, 
  Database, 
  Layers, 
  Globe,
  Shield,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'PHP & Laravel', level: 95 },
        { name: 'Node.js & Express', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'JWT & Authentication', level: 90 },
        { name: 'Microservices', level: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-emerald-500 to-green-500',
      skills: [
        { name: 'React & JSX', level: 88 },
        { name: 'JavaScript ES6+', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive Design', level: 93 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', level: 95 },
        { name: 'Redis', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Query Optimization', level: 88 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS (EC2, S3, RDS)', level: 88 },
        { name: 'Azure', level: 82 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Docker', level: 78 },
        { name: 'Linux Administration', level: 90 }
      ]
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
              <span className="text-neon-blue font-medium tracking-wide">Technical Skills</span>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technologies I
              <span className="gradient-text"> Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of experience in enterprise-scale 
              applications and continuous learning.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass p-8 rounded-2xl card-hover group"
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl group-hover:shadow-neon transition-all duration-300`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-neon-blue transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Expertise</h3>
              <p className="text-gray-600">Tools and methodologies I work with regularly</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Agile Development',
                'Code Reviews',
                'API Design',
                'Performance Tuning',
                'Security Best Practices',
                'Team Mentoring',
                'Project Management',
                'Technical Documentation',
                'System Architecture',
                'Quality Assurance'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { delay: index * 0.1, duration: 0.5 }
                    }
                  }}
                  className="glass px-6 py-3 rounded-full text-sm font-medium text-gray-700 border border-neon-blue/20 hover:border-neon-blue/40 hover:shadow-neon transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills