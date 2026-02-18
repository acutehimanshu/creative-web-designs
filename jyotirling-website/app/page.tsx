'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import IndiaMap3D from '@/components/IndiaMap3D';
import AdCard from '@/components/AdCard';
import { useThemeStore } from '@/store/themeStore';
import { getAdsForPage } from '@/lib/ads';
import { jyotirlingData } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, MapPin, Clock, Quote } from 'lucide-react';

const HomePage: React.FC = () => {
  const { initializeTheme, isDark } = useThemeStore();
  
  // Initialize theme on component mount
  useEffect(() => {
    const cleanup = initializeTheme();
    return cleanup;
  }, [initializeTheme]);

  const featuredAds = getAdsForPage('home', 8);
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "The interactive map helped me plan my Jyotirlinga yatra perfectly. Visited 6 temples so far!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "Excellent resource for spiritual travelers. The temple information is very detailed and accurate.",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      text: "Found great accommodation options through the advertisers. Made my pilgrimage comfortable.",
      rating: 4
    }
  ];

  const spiritualQuotes = [
    "The eternal Shiva resides in the hearts of all devoted souls",
    "Each Jyotirlinga is a divine light illuminating the path to moksha",
    "In the sacred presence of Lord Shiva, all fears dissolve into devotion",
    "The journey to Jyotirlingas is not just physical, but a spiritual awakening"
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % spiritualQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* India Map Section */}
      <IndiaMap3D />

      {/* Why Visit Jyotirlingas Section */}
      <section className={`py-20 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Why Visit the Sacred{' '}
              <span className="bg-gradient-to-r from-primary-600 to-gold-500 bg-clip-text text-transparent">
                Jyotirlingas?
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Each Jyotirlinga represents the infinite nature of Lord Shiva and offers unique spiritual benefits to devotees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🕉",
                title: "Spiritual Purification",
                description: "Cleanse your soul and achieve inner peace through divine darshan at these sacred sites.",
                benefit: "Soul Cleansing"
              },
              {
                icon: "🙏",
                title: "Divine Blessings",
                description: "Receive the blessings of Lord Shiva for prosperity, health, and spiritual growth.",
                benefit: "Divine Grace"
              },
              {
                icon: "🔥",
                title: "Karma Liberation",
                description: "Free yourself from the cycle of karma and progress on the path to moksha.",
                benefit: "Karma Cleansing"
              },
              {
                icon: "💫",
                title: "Cosmic Energy",
                description: "Experience the powerful cosmic vibrations that emanate from these sacred locations.",
                benefit: "Energy Healing"
              },
              {
                icon: "🧘",
                title: "Inner Awakening",
                description: "Discover your true self through meditation and spiritual practices at holy sites.",
                benefit: "Self Realization"
              },
              {
                icon: "🌟",
                title: "Life Transformation",
                description: "Transform your life through the profound spiritual experiences at Jyotirlingas.",
                benefit: "Life Change"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border border-gray-700 hover:border-gold-500/50' 
                    : 'bg-white border border-gray-100 hover:border-gold-500/50'
                } group`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    isDark ? 'bg-gold-900/30 text-gold-400' : 'bg-gold-100 text-gold-600'
                  }`}>
                    {item.benefit}
                  </span>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Quotes Carousel */}
      <section className={`py-16 ${
        isDark ? 'bg-gray-900' : 'bg-primary-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className={`w-12 h-12 mx-auto mb-8 ${
              isDark ? 'text-gold-400' : 'text-gold-600'
            }`} />
            
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[120px] flex items-center justify-center"
            >
              <blockquote className={`text-2xl md:text-3xl font-serif italic leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                "{spiritualQuotes[currentQuote]}"
              </blockquote>
            </motion.div>

            <div className="flex justify-center space-x-2 mt-8">
              {spiritualQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentQuote
                      ? 'bg-gold-500'
                      : isDark ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services/Ads Section */}
      <section className={`py-20 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Trusted{' '}
              <span className="bg-gradient-to-r from-primary-600 to-gold-500 bg-clip-text text-transparent">
                Pilgrimage Partners
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover vetted services and partners to make your spiritual journey comfortable and memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredAds.map((ad, index) => (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AdCard ad={ad} size="small" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/advertise">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'bg-gold-600 hover:bg-gold-700 text-black' 
                    : 'bg-gold-500 hover:bg-gold-600 text-white'
                } shadow-lg hover:shadow-xl group`}
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Pilgrim{' '}
              <span className="bg-gradient-to-r from-primary-600 to-gold-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Hear from fellow devotees who have completed their sacred journey to the Jyotirlingas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl shadow-lg ${
                  isDark 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-gold-500 fill-current' 
                          : isDark ? 'text-gray-600' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className={`text-lg leading-relaxed mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.text}"
                </blockquote>
                
                <div>
                  <div className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;