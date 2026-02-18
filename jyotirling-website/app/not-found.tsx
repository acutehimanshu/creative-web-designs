'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Map } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

const NotFound: React.FC = () => {
  const { isDark } = useThemeStore();

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-lg w-full text-center">
        
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className={`text-8xl md:text-9xl font-bold mb-4 ${
            isDark ? 'text-gray-700' : 'text-gray-300'
          }`}>
            404
          </div>
          
          {/* Sacred Symbol */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🕉
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sacred Path Not Found
          </h1>
          
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            It seems you've wandered off the spiritual path. The page you're looking for doesn't exist 
            or may have been moved to a more sacred location.
          </p>

          <div className={`p-4 rounded-lg border ${
            isDark 
              ? 'bg-gray-800 border-gray-700 text-gray-300' 
              : 'bg-gray-50 border-gray-200 text-gray-600'
          }`}>
            <p className="text-sm">
              "Even when lost, the divine light always guides us back to the right path." - Ancient Wisdom
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Go Home Button */}
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </motion.button>
            </Link>

            {/* Go Back Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto ${
                isDark 
                  ? 'border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black' 
                  : 'border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className={`text-lg font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Find Your Way to Sacred Sites
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: '12 Jyotirlingas',
                description: 'Explore all sacred temples',
                href: '/jyotirling',
                icon: '🏛️'
              },
              {
                title: 'Interactive Map',
                description: 'Navigate with 3D map',
                href: '/#india-map',
                icon: '🗺️'
              },
              {
                title: 'Pilgrimage Services',
                description: 'Find trusted partners',
                href: '/advertise',
                icon: '🎒'
              },
              {
                title: 'Contact Us',
                description: 'Get help & support',
                href: '/contact',
                icon: '📞'
              }
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 hover:border-gold-500/50 text-white' 
                      : 'bg-white border-gray-200 hover:border-gold-500/50 text-gray-900'
                  } hover:shadow-lg group`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <h4 className={`font-semibold group-hover:text-gold-500 transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {link.title}
                      </h4>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 text-4xl opacity-20"
          >
            🔱
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, -8, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-40 right-16 text-3xl opacity-20"
          >
            🪷
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-32 left-20 text-2xl opacity-20"
          >
            📿
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;