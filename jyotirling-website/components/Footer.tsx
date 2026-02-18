'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { jyotirlingData } from '@/lib/data';

const Footer: React.FC = () => {
  const { isDark } = useThemeStore();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Advertise With Us', href: '/advertise' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const jyotirlingLinks = jyotirlingData.slice(0, 6); // Show first 6 in footer

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/jyotirling', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/jyotirling', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/jyotirling', color: 'hover:text-pink-500' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com/jyotirling', color: 'hover:text-red-500' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
    }`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">🕉</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-gold-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Jyotirling.com
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  Sacred Journey Guide
                </span>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your comprehensive guide to the 12 sacred Jyotirlingas of Lord Shiva. 
              Discover spiritual destinations, plan your pilgrimage, and connect with divine energy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-gold-400" />
                <a href="mailto:info@jyotirling.com" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                  info@jyotirling.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-gold-400" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-gray-300">
                  New Delhi, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Jyotirlingas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Sacred Temples
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {jyotirlingLinks.map((jyotirlinga) => (
                <li key={jyotirlinga.slug}>
                  <Link 
                    href={`/jyotirling/${jyotirlinga.slug}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {jyotirlinga.name}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      {jyotirlinga.location.state}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/jyotirling"
                  className="text-gold-400 hover:text-gold-300 transition-colors duration-200 text-sm font-medium flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    View All 12 Temples →
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Stay Connected
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-gold-400 to-primary-400"></div>
            </h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Get updates about festivals, pilgrimage tips, and spiritual insights.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Jyotirling.com. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for spiritual seekers</span>
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-gold-500/5 to-transparent rounded-full blur-3xl" />
        
        {/* Sacred symbols */}
        <div className="absolute top-16 right-16 text-6xl opacity-5 transform rotate-12">🕉</div>
        <div className="absolute bottom-16 left-16 text-4xl opacity-5 transform -rotate-12">🔱</div>
      </div>
    </footer>
  );
};

export default Footer;