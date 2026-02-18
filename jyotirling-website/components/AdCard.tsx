'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Star, MapPin, Clock } from 'lucide-react';
import { AdData } from '@/lib/ads';
import { useThemeStore } from '@/store/themeStore';

interface AdCardProps {
  ad: AdData;
  size?: 'small' | 'medium' | 'large';
  showCategory?: boolean;
  showLocation?: boolean;
  className?: string;
}

const AdCard: React.FC<AdCardProps> = ({ 
  ad, 
  size = 'medium', 
  showCategory = true, 
  showLocation = true,
  className = '' 
}) => {
  const { isDark } = useThemeStore();

  const sizeClasses = {
    small: 'aspect-[4/3]',
    medium: 'aspect-[3/2]',
    large: 'aspect-[16/9]'
  };

  const handleClick = (e: React.MouseEvent) => {
    // Track ad click analytics here
    console.log(`Ad clicked: ${ad.title} (ID: ${ad.id})`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3, ease: 'easeOut' } 
      }}
      className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      } ${className}`}
    >
      {/* Sponsored Badge */}
      {ad.isSponsored && (
        <div className="absolute top-3 left-3 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-1 bg-gold-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg"
          >
            <Star className="w-3 h-3 fill-current" />
            <span>Sponsored</span>
          </motion.div>
        </div>
      )}

      {/* Priority Indicator */}
      {ad.priority === 'high' && (
        <div className="absolute top-3 right-3 z-10">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg" />
        </div>
      )}

      {/* Ad Image */}
      <div className={`relative overflow-hidden ${sizeClasses[size]}`}>
        <Image
          src={ad.imageUrl}
          alt={ad.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Action Button - Appears on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Link
            href={ad.link}
            onClick={handleClick}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-white transition-colors duration-200"
          >
            <span>{ad.ctaText}</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Ad Content */}
      <div className="p-4 space-y-3">
        {/* Category & Location */}
        <div className="flex items-center justify-between">
          {showCategory && (
            <span className={`text-xs font-medium px-2 py-1 rounded-lg ${
              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}>
              {ad.category.charAt(0).toUpperCase() + ad.category.slice(1)}
            </span>
          )}
          
          {showLocation && ad.location && (
            <div className={`flex items-center space-x-1 text-xs ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <MapPin className="w-3 h-3" />
              <span>{ad.location}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors duration-200 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {ad.title}
        </h3>

        {/* Description */}
        <p className={`text-sm line-clamp-2 leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {ad.description}
        </p>

        {/* Valid Until */}
        {ad.validUntil && (
          <div className={`flex items-center space-x-1 text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Clock className="w-3 h-3" />
            <span>Valid until {new Date(ad.validUntil).toLocaleDateString()}</span>
          </div>
        )}

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pt-2"
        >
          <Link
            href={ad.link}
            onClick={handleClick}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              ad.isSponsored
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg hover:shadow-gold/25'
                : isDark
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-primary-700 hover:bg-primary-800 text-white'
            } hover:shadow-lg group`}
          >
            <span>{ad.ctaText}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      {/* Glow Effect for Sponsored Ads */}
      {ad.isSponsored && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-400/10 to-primary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.div>
  );
};

export default AdCard;

// Specialized Ad Card Components for different layouts

export const AdCardHorizontal: React.FC<AdCardProps> = ({ ad, className = '' }) => {
  const { isDark } = useThemeStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`group flex rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
        isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      } ${className}`}
    >
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={ad.imageUrl}
          alt={ad.title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className={`font-semibold text-sm line-clamp-1 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {ad.title}
            </h4>
            <p className={`text-xs mt-1 line-clamp-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {ad.description}
            </p>
          </div>
          
          {ad.isSponsored && (
            <span className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded-full ml-2 flex-shrink-0">
              Sponsored
            </span>
          )}
        </div>
        
        <Link
          href={ad.link}
          className="inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700 mt-2"
        >
          {ad.ctaText}
          <ExternalLink className="w-3 h-3 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export const AdCardMinimal: React.FC<AdCardProps> = ({ ad, className = '' }) => {
  const { isDark } = useThemeStore();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`group text-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
      } ${className}`}
    >
      <div className="relative w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
        <Image
          src={ad.imageUrl}
          alt={ad.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="64px"
        />
      </div>
      
      <h5 className={`font-medium text-sm line-clamp-1 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {ad.title}
      </h5>
      
      <Link
        href={ad.link}
        className="text-xs text-primary-600 hover:text-primary-700 font-medium mt-1 inline-block"
      >
        {ad.ctaText}
      </Link>
    </motion.div>
  );
};