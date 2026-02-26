import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'

// Sections
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Leadership from './sections/Leadership'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// Background Components
import FloatingShapes from './components/FloatingShapes'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-neon-blue/20 border-t-neon-blue rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Himanshu Sharma</h2>
          <p className="text-gray-600 mt-2">Loading Portfolio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="App">
      <Helmet>
        <title>Himanshu Sharma - Senior Software Engineer & Technical Team Lead</title>
        <meta 
          name="description" 
          content="Senior Software Engineer & Technical Team Lead with 10+ years of experience in scalable web applications, backend architecture, microservices, and cloud deployments."
        />
      </Helmet>

      {/* Background Elements */}
      <FloatingShapes />
      <div className="grid-background fixed inset-0 z-0"></div>
      
      {/* UI Components */}
      <ScrollProgress />
      <CursorGlow />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Hero Section */}
              <section id="home">
                <Hero />
              </section>

              {/* About Section */}
              <section id="about">
                <About />
              </section>

              {/* Skills Section */}
              <section id="skills">
                <Skills />
              </section>

              {/* Projects Section */}
              <section id="projects">
                <Projects />
              </section>

              {/* Experience Section */}
              <section id="experience">
                <Experience />
              </section>

              {/* Leadership Section */}
              <section id="leadership">
                <Leadership />
              </section>

              {/* Contact Section */}
              <section id="contact">
                <Contact />
              </section>

              {/* Footer */}
              <Footer />
            </motion.main>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App