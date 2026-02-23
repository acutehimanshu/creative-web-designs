import React from 'react';
import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import Globe from '../components/Globe';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Animated Globe (Three.js) */}
      {/* <Canvas className="w-full h-[400px] md:h-[600px]"> <Globe /> </Canvas> */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-lg"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        We Create Intelligent Digital Products
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-secondary mb-8"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Web • Mobile • Cloud • AI • DevOps
      </motion.p>
      <div className="flex gap-4 mb-12">
        <button className="px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-glow hover:scale-105 transition">Explore Services</button>
        <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-glow hover:scale-105 transition border border-accent">Get Free Consultation</button>
      </div>
      {/* Particle background, scroll indicator, custom cursor, etc. to be added */}
    </section>
  );
};

export default HeroSection;
