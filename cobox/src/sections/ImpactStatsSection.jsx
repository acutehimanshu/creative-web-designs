import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: 250 },
  { label: 'Clients', value: 100 },
  { label: 'Countries', value: 15 },
  { label: 'Experts', value: 30 },
];

const ImpactStatsSection = () => (
  <section className="py-16 px-4 bg-gradient-dark flex flex-col items-center">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Our Impact</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="glass-card p-8 rounded-xl shadow-glow border border-accent text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <motion.span
            className="text-4xl md:text-6xl font-bold text-accent mb-2 block"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {stat.value}+
          </motion.span>
          <span className="text-lg md:text-2xl text-primary font-semibold">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ImpactStatsSection;
