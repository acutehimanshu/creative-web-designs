'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Text, 
  Html, 
  useTexture,
  Sphere,
  Box
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { useThemeStore } from '@/store/themeStore';
import { jyotirlingData, JyotirlingData } from '@/lib/data';

// India map coordinates (simplified for demo - in production, use detailed SVG/GeoJSON)
const indiaMapVertices = [
  // Simplified India outline vertices - in production, use detailed geographical data
  [-2, 1], [-1.5, 2], [-0.5, 2.5], [0.5, 2.3], [1, 1.8], [1.8, 1.5],
  [2.2, 0.5], [2, -0.5], [1.5, -1.2], [0.8, -1.8], [0, -2], [-0.8, -1.9],
  [-1.5, -1.5], [-2.2, -0.8], [-2.5, 0], [-2.2, 0.8]
];

interface JyotirlingaMarkerProps {
  jyotirlinga: JyotirlingData;
  position: [number, number, number];
  onClick: () => void;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const JyotirlingaMarker: React.FC<JyotirlingaMarkerProps> = ({ 
  jyotirlinga, 
  position, 
  onClick, 
  isHovered,
  onHover 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <Sphere 
        ref={glowRef}
        args={[0.15, 16, 16]}
      >
        <meshBasicMaterial 
          color="#D4AF37" 
          transparent 
          opacity={isHovered ? 0.6 : 0.3}
        />
      </Sphere>
      
      {/* Main marker */}
      <Sphere
        ref={meshRef}
        args={[0.08, 16, 16]}
        onClick={onClick}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <meshStandardMaterial 
          color={isHovered ? "#FFD700" : "#8B0000"}
          emissive={isHovered ? "#D4AF37" : "#4B0000"}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>

      {/* Pulsing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
        <ringGeometry args={[0.1, 0.12, 32]} />
        <meshBasicMaterial 
          color="#D4AF37" 
          transparent 
          opacity={isHovered ? 0.8 : 0.4}
        />
      </mesh>

      {/* Tooltip */}
      {isHovered && (
        <Html position={[0, 0.2, 0]} center>
          <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-gold-500/30 shadow-xl">
            <div className="font-semibold text-gold-400">{jyotirlinga.name}</div>
            <div className="text-xs text-gray-300">{jyotirlinga.location.city}, {jyotirlinga.location.state}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

const IndiaMapGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create India map shape
  const shape = new THREE.Shape();
  indiaMapVertices.forEach((vertex, index) => {
    if (index === 0) {
      shape.moveTo(vertex[0], vertex[1]);
    } else {
      shape.lineTo(vertex[0], vertex[1]);
    }
  });
  shape.closePath();

  const extrudeSettings = {
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.02,
    bevelThickness: 0.02
  };

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial 
        color="#2D5016"
        roughness={0.7}
        metalness={0.1}
      />
    </mesh>
  );
};

const CameraController: React.FC = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 4, 6);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const Scene: React.FC<{
  onJyotirlingaClick: (jyotirlinga: JyotirlingData) => void;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}> = ({ onJyotirlingaClick, hoveredId, setHoveredId }) => {
  
  // Convert lat/lng to 3D positions (simplified projection)
  const getPosition = (lat: number, lng: number): [number, number, number] => {
    // Normalize to map bounds
    const x = ((lng - 68) / (97 - 68)) * 4 - 2; // 68-97 lng range to -2 to 2
    const z = -((lat - 8) / (37 - 8)) * 4 + 2; // 8-37 lat range to 2 to -2 (inverted)
    return [x, 0.2, z];
  };

  return (
    <>
      <CameraController />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#D4AF37" />
      
      {/* India Map */}
      <IndiaMapGeometry />
      
      {/* Jyotirlinga Markers */}
      {jyotirlingData.map((jyotirlinga) => (
        <JyotirlingaMarker
          key={jyotirlinga.id}
          jyotirlinga={jyotirlinga}
          position={getPosition(
            jyotirlinga.location.coordinates.lat,
            jyotirlinga.location.coordinates.lng
          )}
          onClick={() => onJyotirlingaClick(jyotirlinga)}
          isHovered={hoveredId === jyotirlinga.id}
          onHover={(hovered) => setHoveredId(hovered ? jyotirlinga.id : null)}
        />
      ))}
      
      {/* Title Text */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.3}
        color="#D4AF37"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        12 Sacred Jyotirlingas
      </Text>
      
      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={12}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center h-full">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-gold-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl">🕉</span>
      </div>
    </div>
  </div>
);

interface IndiaMap3DProps {
  className?: string;
}

const IndiaMap3D: React.FC<IndiaMap3DProps> = ({ className = '' }) => {
  const { isDark } = useThemeStore();
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedJyotirlinga, setSelectedJyotirlinga] = useState<JyotirlingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D scene
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleJyotirlingaClick = (jyotirlinga: JyotirlingData) => {
    setSelectedJyotirlinga(jyotirlinga);
  };

  const handleVisitTemple = () => {
    if (selectedJyotirlinga) {
      router.push(`/jyotirling/${selectedJyotirlinga.slug}`);
      setSelectedJyotirlinga(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedJyotirlinga(null);
  };

  return (
    <section 
      id="india-map"
      className={`relative py-20 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-gray-100 to-white'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Sacred Map of{' '}
            <span className="bg-gradient-to-r from-primary-600 to-gold-500 bg-clip-text text-transparent">
              12 Jyotirlingas
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore the interactive 3D map of India and discover the sacred locations of all 12 Jyotirlingas. 
            Click on any marker to learn more about that holy shrine.
          </p>
        </motion.div>

        {/* 3D Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 ${
            isDark 
              ? 'border-gold-500/20 bg-gray-900' 
              : 'border-gold-500/20 bg-gray-900'
          }`}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Canvas
              camera={{ position: [0, 4, 6], fov: 75 }}
              style={{ background: isDark ? '#111827' : '#1f2937' }}
            >
              <Suspense fallback={null}>
                <Scene 
                  onJyotirlingaClick={handleJyotirlingaClick}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              </Suspense>
            </Canvas>
          )}

          {/* Instructions Overlay */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
            <div className="font-medium">Interactive Controls:</div>
            <div className="text-xs space-y-1 mt-1">
              <div>🖱️ Click & drag to rotate</div>
              <div>🔍 Scroll to zoom</div>
              <div>📍 Click markers for details</div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
            <div className="font-medium text-gold-400">🕉 12 Sacred Sites</div>
            <div className="text-xs text-gray-300">Across 9 States of India</div>
          </div>
        </motion.div>

        {/* Temple List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          {jyotirlingData.map((jyotirlinga) => (
            <motion.div
              key={jyotirlinga.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleJyotirlingaClick(jyotirlinga)}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gold-500/50'
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gold-500/50'
              } shadow-lg hover:shadow-xl`}
            >
              <div className={`text-center ${hoveredId === jyotirlinga.id ? 'text-gold-500' : ''}`}>
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className={`font-semibold text-sm mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {jyotirlinga.name}
                </h3>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {jyotirlinga.location.state}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Selected Jyotirlinga */}
      <AnimatePresence>
        {selectedJyotirlinga && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`max-w-lg w-full rounded-2xl shadow-xl ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedJyotirlinga.name} Jyotirlinga
                  </h3>
                  <button
                    onClick={handleCloseModal}
                    className={`p-2 rounded-full transition-colors ${
                      isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gold-400' : 'text-gold-600'
                    }`}>
                      Location
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedJyotirlinga.location.city}, {selectedJyotirlinga.location.state}
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gold-400' : 'text-gold-600'
                    }`}>
                      Significance
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedJyotirlinga.description}
                    </p>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleVisitTemple}
                      className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Visit Temple Page
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCloseModal}
                      className={`px-4 py-3 rounded-lg font-semibold border-2 transition-all duration-300 ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IndiaMap3D;