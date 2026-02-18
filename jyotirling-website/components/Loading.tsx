'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/themeStore';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const { isDark } = useThemeStore();

  const sizes = {
    small: { spinner: 'w-8 h-8', container: 'p-4' },
    medium: { spinner: 'w-12 h-12', container: 'p-8' },
    large: { spinner: 'w-16 h-16', container: 'p-12' }
  };

  const spinnerSize = sizes[size];

  const containerClass = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center z-50' 
    : 'flex items-center justify-center';

  const backgroundClass = fullScreen 
    ? isDark ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
    : '';

  return (
    <div className={`${containerClass} ${backgroundClass} ${spinnerSize.container}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Sacred Symbol Spinner */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={`${spinnerSize.spinner} border-4 rounded-full ${
              isDark 
                ? 'border-gray-700 border-t-gold-500' 
                : 'border-gray-300 border-t-primary-600'
            }`}
          />
          
          {/* Om symbol in center */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className={`text-2xl ${size === 'small' ? 'text-lg' : size === 'large' ? 'text-3xl' : 'text-2xl'}`}>
              🕉
            </span>
          </motion.div>
        </div>

        {/* Loading Text */}
        {text && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-center ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <div className={`font-medium ${
              size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'
            }`}>
              {text}
            </div>
            
            {/* Animated dots */}
            <motion.div
              className="flex justify-center space-x-1 mt-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: index * 0.2 
                  }}
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDark ? 'bg-gold-500' : 'bg-primary-500'
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Skeleton Loading Components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDark } = useThemeStore();
  
  return (
    <div className={`animate-pulse ${className}`}>
      <div className={`rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div className="aspect-[3/2] rounded-t-lg" />
        <div className="p-4 space-y-3">
          <div className={`h-4 rounded ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
          <div className={`h-3 rounded w-2/3 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
          <div className={`h-10 rounded ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
}> = ({ lines = 3, className = '' }) => {
  const { isDark } = useThemeStore();
  
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 rounded ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          } ${
            index === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

export const SkeletonImage: React.FC<{ 
  className?: string;
  aspectRatio?: string;
}> = ({ className = '', aspectRatio = 'aspect-video' }) => {
  const { isDark } = useThemeStore();
  
  return (
    <div className={`animate-pulse ${aspectRatio} ${className}`}>
      <div className={`w-full h-full rounded-lg ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      } flex items-center justify-center`}>
        <svg
          className={`w-12 h-12 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

// Loading Overlay for buttons
export const LoadingSpinner: React.FC<{ 
  size?: 'small' | 'medium' | 'large';
  color?: string;
}> = ({ size = 'medium', color = 'currentColor' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-2 border-transparent border-t-current rounded-full`}
      style={{ color }}
    />
  );
};

// Page Loading Transition
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Loading;