'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Calendar,
  Star,
  ArrowRight,
  ArrowLeft,
  Plane,
  Train,
  Car,
  Camera,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { JyotirlingData, getRelatedJyotirlingas } from '@/lib/data';
import { getAdsForPage } from '@/lib/ads';
import AdCard from '@/components/AdCard';

interface JyotirlingaDetailPageProps {
  jyotirlinga: JyotirlingData;
}

const JyotirlingaDetailPage: React.FC<JyotirlingaDetailPageProps> = ({ jyotirlinga }) => {
  const { isDark } = useThemeStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  const relatedJyotirlingas = getRelatedJyotirlingas(jyotirlinga.slug, 3);
  const templeAds = getAdsForPage('temple', 6);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏛️' },
    { id: 'legend', label: 'Legend', icon: '📜' },
    { id: 'travel', label: 'How to Reach', icon: '🗺️' },
    { id: 'rituals', label: 'Rituals', icon: '🕯️' },
    { id: 'festivals', label: 'Festivals', icon: '🎉' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === jyotirlinga.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? jyotirlinga.galleryImages.length - 1 : prev - 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: jyotirlinga.title,
        text: jyotirlinga.description,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Auto-advance gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image Gallery */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={jyotirlinga.galleryImages[currentImageIndex] || jyotirlinga.imageUrl}
              alt={`${jyotirlinga.name} Temple`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />

        {/* Navigation Buttons */}
        {jyotirlinga.galleryImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {jyotirlinga.galleryImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {jyotirlinga.galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <nav className="mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Link href="/" className="hover:text-gold-400 transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/jyotirling" className="hover:text-gold-400 transition-colors">
                    12 Jyotirlinga
                  </Link>
                  <span>/</span>
                  <span className="text-gold-400">{jyotirlinga.name}</span>
                </div>
              </nav>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    {jyotirlinga.name}
                    <span className="block text-2xl md:text-3xl lg:text-4xl text-gold-400 font-medium">
                      Jyotirlinga
                    </span>
                  </h1>
                  
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-gold-400" />
                      <span className="text-lg">
                        {jyotirlinga.location.city}, {jyotirlinga.location.state}
                      </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gold-400" />
                      <span>{jyotirlinga.templeTiming}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isLiked 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    } backdrop-blur-sm`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleShare}
                    className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                  >
                    <Camera className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Temple Timing', value: jyotirlinga.templeTiming, icon: Clock },
                { label: 'Entry Fee', value: jyotirlinga.entryFee, icon: Star },
                { label: 'Best Time', value: jyotirlinga.bestTimeToVisit, icon: Calendar },
                { label: 'State', value: jyotirlinga.location.state, icon: MapPin },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-xl text-center ${
                      isDark 
                        ? 'bg-gray-800 border border-gray-700' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                      isDark ? 'text-gold-400' : 'text-gold-600'
                    }`} />
                    <div className={`text-xs font-medium mb-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-sm font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTab === tab.id
                        ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-gold-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-gold-400'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="hidden md:block">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {selectedTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      About {jyotirlinga.name}
                    </h3>
                    <p className={`text-lg leading-relaxed mb-6 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {jyotirlinga.description}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-xl font-semibold mb-3 ${
                      isDark ? 'text-gold-400' : 'text-gold-600'
                    }`}>
                      Spiritual Significance
                    </h4>
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {jyotirlinga.significance}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-xl font-semibold mb-3 ${
                      isDark ? 'text-gold-400' : 'text-gold-600'
                    }`}>
                      Special Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {jyotirlinga.specialFeatures.map((feature, index) => (
                        <div key={index} className={`flex items-center space-x-2 p-3 rounded-lg ${
                          isDark ? 'bg-gray-700' : 'bg-gray-50'
                        }`}>
                          <Star className={`w-4 h-4 ${
                            isDark ? 'text-gold-400' : 'text-gold-600'
                          }`} />
                          <span className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'legend' && (
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Sacred Legend
                  </h3>
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {jyotirlinga.legend}
                  </p>
                </div>
              )}

              {selectedTab === 'travel' && (
                <div className="space-y-6">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    How to Reach
                  </h3>
                  
                  {[
                    { 
                      title: 'By Air', 
                      content: jyotirlinga.howToReach.byAir, 
                      icon: Plane,
                      color: 'text-blue-500' 
                    },
                    { 
                      title: 'By Train', 
                      content: jyotirlinga.howToReach.byTrain, 
                      icon: Train,
                      color: 'text-green-500' 
                    },
                    { 
                      title: 'By Road', 
                      content: jyotirlinga.howToReach.byRoad, 
                      icon: Car,
                      color: 'text-orange-500' 
                    },
                  ].map((transport, index) => {
                    const IconComponent = transport.icon;
                    return (
                      <div key={index} className={`p-4 rounded-lg border-l-4 ${
                        isDark ? 'bg-gray-700 border-l-gold-400' : 'bg-gray-50 border-l-gold-500'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <IconComponent className={`w-5 h-5 ${transport.color}`} />
                          <h4 className={`text-lg font-semibold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {transport.title}
                          </h4>
                        </div>
                        <p className={`${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {transport.content}
                        </p>
                      </div>
                    );
                  })}

                  {/* Nearby Attractions */}
                  <div>
                    <h4 className={`text-xl font-semibold mb-3 ${
                      isDark ? 'text-gold-400' : 'text-gold-600'
                    }`}>
                      Nearby Attractions
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {jyotirlinga.nearbyAttractions.map((attraction, index) => (
                        <div key={index} className={`p-2 rounded text-sm ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {attraction}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'rituals' && (
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Temple Rituals & Prayers
                  </h3>
                  <div className="grid gap-4">
                    {jyotirlinga.rituals.map((ritual, index) => (
                      <div key={index} className={`flex items-center space-x-3 p-4 rounded-lg ${
                        isDark ? 'bg-gray-700' : 'bg-gray-50'
                      }`}>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-gold-500 to-primary-500 flex items-center justify-center text-white text-sm font-bold`}>
                          {index + 1}
                        </div>
                        <span className={`${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {ritual}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'festivals' && (
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Major Festivals
                  </h3>
                  <div className="grid gap-4">
                    {jyotirlinga.festivals.map((festival, index) => (
                      <div key={index} className={`flex items-center space-x-3 p-4 rounded-lg border-l-4 ${
                        isDark 
                          ? 'bg-gray-700 border-l-gold-400' 
                          : 'bg-gray-50 border-l-gold-500'
                      }`}>
                        <span className="text-2xl">🎉</span>
                        <span className={`font-medium ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {festival}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Featured Ads */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Services for Pilgrims
              </h3>
              <div className="space-y-4">
                {templeAds.slice(0, 3).map((ad) => (
                  <AdCard 
                    key={ad.id} 
                    ad={ad} 
                    size="small" 
                    showLocation={false}
                  />
                ))}
              </div>
            </div>

            {/* Related Jyotirlingas */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Other Sacred Temples
              </h3>
              <div className="space-y-4">
                {relatedJyotirlingas.map((related) => (
                  <Link 
                    key={related.id} 
                    href={`/jyotirling/${related.slug}`}
                    className={`block p-4 rounded-lg transition-all duration-200 ${
                      isDark 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gold-500/50' 
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gold-500/50'
                    } group`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={related.imageUrl}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold truncate ${
                          isDark ? 'text-white' : 'text-gray-900'
                        } group-hover:text-gold-500 transition-colors`}>
                          {related.name}
                        </h4>
                        <p className={`text-sm truncate ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {related.location.city}, {related.location.state}
                        </p>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      } group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-200`} />
                    </div>
                  </Link>
                ))}
              </div>

              <Link href="/jyotirling">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-4 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isDark 
                      ? 'bg-gold-600 hover:bg-gold-700 text-black' 
                      : 'bg-gold-500 hover:bg-gold-600 text-white'
                  } flex items-center justify-center space-x-2 group`}
                >
                  <span>View All 12 Temples</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Place", "TouristAttraction", "ReligiousSite"],
            "name": `${jyotirlinga.name} Jyotirlinga Temple`,
            "description": jyotirlinga.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": jyotirlinga.location.city,
              "addressRegion": jyotirlinga.location.state,
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": jyotirlinga.location.coordinates.lat,
              "longitude": jyotirlinga.location.coordinates.lng
            },
            "image": jyotirlinga.imageUrl,
            "url": `https://jyotirling.com/jyotirling/${jyotirlinga.slug}`,
            "openingHours": jyotirlinga.templeTiming,
            "priceRange": jyotirlinga.entryFee,
            "touristType": ["ReligiousTourist", "CulturalTourist"],
            "religion": "Hinduism",
          })
        }}
      />
    </div>
  );
};

export default JyotirlingaDetailPage;