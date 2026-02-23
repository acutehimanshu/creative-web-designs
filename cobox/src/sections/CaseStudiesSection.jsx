import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    image: '/assets/case1.jpg',
    title: 'AI-Powered Analytics Platform',
    stack: 'React, Node, AWS, Python',
  },
  {
    image: '/assets/case2.jpg',
    title: 'Cloud Migration for Enterprise',
    stack: 'AWS, Docker, MongoDB',
  },
  {
    image: '/assets/case3.jpg',
    title: 'Mobile App for FinTech',
    stack: 'Flutter, Firebase, React',
  },
];

const CaseStudiesSection = () => (
  <section className="py-16 px-4 bg-darkBg">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Case Studies</h2>
    <div className="flex gap-8 overflow-x-auto pb-4">
      {caseStudies.map((cs, i) => (
        <motion.div
          key={cs.title}
          className="glass-card min-w-[320px] md:min-w-[400px] p-6 rounded-xl shadow-glow border border-accent flex flex-col items-center hover:scale-105 transition"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <img src={cs.image} alt={cs.title} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-primary">{cs.title}</h3>
          <p className="text-base text-white/80 mb-4">{cs.stack}</p>
          <button className="px-4 py-2 rounded-lg bg-accent text-white font-semibold shadow-glow hover:scale-105 transition">View Case Study</button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CaseStudiesSection;
