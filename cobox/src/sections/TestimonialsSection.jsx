import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    company: 'Acme Corp',
    rating: 5,
    text: 'Cobox Technologies delivered our project on time with exceptional quality! Highly recommended.'
  },
  {
    name: 'John Smith',
    company: 'FinTech Solutions',
    rating: 4,
    text: 'Professional team, great communication, and premium results.'
  },
  {
    name: 'Emily Chen',
    company: 'CloudX',
    rating: 5,
    text: 'Their expertise in cloud and AI is unmatched. Will work again!'
  },
];

const TestimonialsSection = () => (
  <section className="py-16 px-4 bg-darkBg">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Testimonials</h2>
    <div className="flex gap-8 overflow-x-auto pb-4">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          className="glass-card min-w-[320px] md:min-w-[400px] p-6 rounded-xl shadow-glow border border-accent flex flex-col items-center hover:scale-105 transition"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="flex mb-2">
            {[...Array(t.rating)].map((_, idx) => (
              <span key={idx} className="text-accent text-xl">★</span>
            ))}
          </div>
          <p className="text-base text-white/80 mb-4">{t.text}</p>
          <span className="text-lg font-semibold text-primary">{t.name}</span>
          <span className="text-sm text-secondary">{t.company}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
