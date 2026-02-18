'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Map, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { useThemeStore } from '@/store/themeStore';
import { getAdsForPage } from '@/lib/ads';
import AdCard from './AdCard';

const Hero: React.FC = () => {
  const { isDark } = useThemeStore();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Get featured ads for hero section
  const heroAds = getAdsForPage('home', 6);

  useEffect(() => {
    // GSAP animations for hero elements
    const ctx = gsap.context(() => {
      // Animate floating elements
      gsap.to(".float-element", {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Animate glow effects
      gsap.to(".glow-pulse", {
        scale: 1.1,
        opacity: 0.8,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // Animate gradient backgrounds
      gsap.to(".gradient-animate", {
        backgroundPosition: "200% center",
        duration: 8,
        ease: "none",
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-primary-900/20 to-black' 
            : 'bg-gradient-to-br from-white via-gold-50 to-primary-50'
        }`} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-gold-400/30 to-primary-400/30 blur-xl float-element" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-primary-400/20 to-gold-400/20 blur-2xl float-element" />
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-gold-500/25 to-primary-500/25 blur-xl float-element" />
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary-300/30 to-gold-300/30 blur-lg float-element" />
        
        {/* Sacred symbols background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 text-8xl transform rotate-12">🕉</div>
          <div className="absolute top-3/4 right-1/4 text-6xl transform -rotate-12">🔱</div>
          <div className="absolute top-1/2 left-1/6 text-7xl transform rotate-45">🪷</div>
          <div className="absolute bottom-1/4 right-1/6 text-5xl transform -rotate-45">🕉</div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500/10 to-primary-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className={`text-sm font-medium ${
                isDark ? 'text-gold-400' : 'text-gold-600'
              }`}>
                Sacred Journey Begins Here
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Discover the{' '}
              <span className="bg-gradient-to-r from-primary-600 via-gold-500 to-primary-600 bg-clip-text text-transparent gradient-animate bg-[length:200%_100%]">
                Sacred 12
              </span>
              <br />
              <span className={`text-3xl md:text-5xl lg:text-6xl ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Jyotirlingas
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Embark on a divine pilgrimage to the most sacred Shiva temples across India. 
              Experience spirituality, culture, and devotion in one transformative journey.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              {[
                { icon: "🏛️", number: "12", label: "Sacred Temples" },
                { icon: "🗺️", number: "9", label: "Indian States" },
                { icon: "❤️", number: "1M+", label: "Pilgrims Annually" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r from-primary-600 to-gold-500 bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#india-map">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Map className="w-5 h-5" />
                  <span>Explore Sacred Map</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>

              <Link href="/jyotirling">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                    isDark 
                      ? 'border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black' 
                      : 'border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white'
                  } shadow-lg hover:shadow-xl group`}
                >
                  <Heart className="w-5 h-5" />
                  <span>View All Temples</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Ads Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:pl-8"
          >
            <div className="space-y-6">
              {/* Section Header */}
              <div className="text-center lg:text-left">
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Featured Services
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Discover trusted partners for your spiritual journey
                </p>
              </div>

              {/* Ads Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {heroAds.slice(0, 4).map((ad, index) => (
                  <motion.div
                    key={ad.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.6 + (index * 0.1), 
                      duration: 0.6 
                    }}
                  >
                    <AdCard 
                      ad={ad} 
                      size="small" 
                      showLocation={false}
                      className="h-full"
                    />
                  </motion.div>
                ))}
              </div>

              {/* View All Ads Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-center"
              >
                <Link 
                  href="/advertise"
                  className={`inline-flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isDark 
                      ? 'text-gold-400 hover:text-gold-300' 
                      : 'text-primary-600 hover:text-primary-700'
                  }`}
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-gray-600' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          />
        </motion.div>
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-gold-500/20 rounded-full blur-3xl glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gold-500/15 to-primary-500/15 rounded-full blur-3xl glow-pulse" />
      </div>
    </section>
  );
};

export default Hero;