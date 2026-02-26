import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'himanshu.sharma@example.com',
      link: 'mailto:himanshu.sharma@example.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      link: 'https://maps.google.com/?q=Bangalore,India',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/himanshu-sharma',
      link: 'https://linkedin.com/in/himanshu-sharma',
      color: 'from-indigo-500 to-purple-500'
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
              <span className="text-neon-blue font-medium tracking-wide">Get In Touch</span>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-neon-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="gradient-text"> Amazing Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project? Whether it's a technical consultation, 
              collaboration opportunity, or just a friendly chat about technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 outline-none"
                      placeholder="Project Discussion / Collaboration / Others"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 outline-none resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>

                  {/* Form Status */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl"
                    >
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl"
                    >
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again.</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.title === 'LinkedIn' ? '_blank' : undefined}
                    rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    variants={{
                      hidden: { x: 50, opacity: 0 },
                      visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: { delay: index * 0.1, duration: 0.6 }
                      }
                    }}
                    className="glass p-6 rounded-xl card-hover group block"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl group-hover:shadow-neon transition-all duration-300`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-neon-blue transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Connect */}
              <div className="glass p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Connect</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  For immediate discussions or quick questions, feel free to reach out 
                  through any of these platforms. I typically respond within 24 hours.
                </p>
                
                <div className="flex space-x-4">
                  <motion.a
                    href="https://linkedin.com/in/himanshu-sharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0A66C2] text-white rounded-xl hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(10, 102, 194, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/mrhimanshu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-xl hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(51, 51, 51, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  
                  <motion.a
                    href="mailto:himanshu.sharma@example.com"
                    className="p-3 bg-red-500 text-white rounded-xl hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Availability */}
              <div className="glass p-6 rounded-xl border-l-4 border-green-500">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-gray-900">Currently Available</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Open to new opportunities, consulting projects, and technical collaborations. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact