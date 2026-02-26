import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes = () => {
  const shapes = [
    { id: 1, size: 200, x: '10%', y: '10%', delay: 0 },
    { id: 2, size: 300, x: '80%', y: '60%', delay: 2 },
    { id: 3, size: 150, x: '60%', y: '80%', delay: 4 },
    { id: 4, size: 100, x: '20%', y: '70%', delay: 1 },
    { id: 5, size: 250, x: '90%', y: '20%', delay: 3 }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            background: `linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(14, 165, 233, 0.05))`,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes