import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaMobileAlt } from 'react-icons/fa';

const techs = [
  { icon: <FaReact size={32} className="text-secondary" />, name: 'React' },
  { icon: <FaNodeJs size={32} className="text-secondary" />, name: 'Node.js' },
  { icon: <FaAws size={32} className="text-secondary" />, name: 'AWS' },
  { icon: <FaDocker size={32} className="text-secondary" />, name: 'Docker' },
  { icon: <FaDatabase size={32} className="text-secondary" />, name: 'MongoDB' },
  { icon: <FaMobileAlt size={32} className="text-secondary" />, name: 'Flutter' },
];

const TechnologiesSection = () => (
  <section className="py-16 px-4 bg-gradient-dark">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Technologies</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="glass-card p-6 rounded-xl shadow-glow border border-accent flex flex-col items-center hover:scale-110 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {tech.icon}
          <span className="text-lg font-semibold text-primary mt-2">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechnologiesSection;
