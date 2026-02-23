import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  'Discovery',
  'Planning',
  'Development',
  'Testing',
  'Deployment',
];

const ProcessSection = () => (
  <section className="py-16 px-4 bg-gradient-dark">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Our Process</h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          className="glass-card p-6 rounded-xl shadow-glow border border-accent text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <span className="text-xl font-semibold text-primary mb-2 block">{step}</span>
          {i < steps.length - 1 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-accent md:w-16 md:h-1" />
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProcessSection;
