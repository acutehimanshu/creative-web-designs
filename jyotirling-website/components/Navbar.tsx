'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; }[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: '12 Jyotirlinga', 
    href: '/jyotirling',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Somnath', href: '/jyotirling/somnath' },
      { name: 'Mallikarjuna', href: '/jyotirling/mallikarjuna' },
      { name: 'Mahakaleshwar', href: '/jyotirling/mahakaleshwar' },
      { name: 'Omkareshwar', href: '/jyotirling/omkareshwar' },
      { name: 'Kedarnath', href: '/jyotirling/kedarnath' },
      { name: 'Bhimashankar', href: '/jyotirling/bhimashankar' },
      { name: 'Kashi Vishwanath', href: '/jyotirling/kashi-vishwanath' },
      { name: 'Trimbakeshwar', href: '/jyotirling/trimbakeshwar' },
      { name: 'Vaidyanath', href: '/jyotirling/vaidyanath' },
      { name: 'Nageshwar', href: '/jyotirling/nageshwar' },
      { name: 'Rameshwaram', href: '/jyotirling/rameshwaram' },
      { name: 'Grishneshwar', href: '/jyotirling/grishneshwar' },
    ]
  },
  { name: 'Advertise With Us', href: '/advertise' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleTheme } = useThemeStore();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'h-16 shadow-lg backdrop-blur-md'
          : 'h-20'
      } ${
        isDark
          ? 'bg-gray-900/95 border-gray-800'
          : 'bg-white/95 border-gray-200'
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-gold-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🕉</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 rounded-full animate-pulse" />
            </motion.div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl ${
                isDark ? 'text-white' : 'text-gray-900'
              } group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-gold-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                Jyotirling.com
              </span>
              <span className={`text-xs ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              } font-medium`}>
                Sacred Journey Guide
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                  } group relative overflow-hidden`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10" />
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl border ${
                          isDark
                            ? 'bg-gray-800 border-gray-700'
                            : 'bg-white border-gray-200'
                        } overflow-hidden backdrop-blur-sm`}
                      >
                        <div className="py-2 max-h-80 overflow-y-auto">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                isDark
                                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                              } border-l-4 border-transparent hover:border-gold-500`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark
                  ? 'bg-gray-800 text-gold-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-primary-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t ${
              isDark
                ? 'bg-gray-900 border-gray-800'
                : 'bg-white border-gray-200'
            } backdrop-blur-md`}
          >
            <div className="px-4 py-6 space-y-4 max-h-screen overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                      isDark
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                    } border-l-4 border-transparent hover:border-gold-500`}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-300 ${
                            isDark
                              ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                              : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;