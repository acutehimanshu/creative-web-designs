import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaMobileAlt, FaRobot, FaCubes, FaLightbulb, FaTools, FaRocket, FaEthereum } from 'react-icons/fa';

const services = [
  {
    icon: <FaCloud size={32} className="text-accent" />,
    title: 'Cloud Solutions',
    desc: 'Scalable, secure cloud infrastructure for modern businesses.'
  },
  {
    icon: <FaMobileAlt size={32} className="text-accent" />,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps with seamless UX.'
  },
  {
    icon: <FaRobot size={32} className="text-accent" />,
    title: 'AI & Automation',
    desc: 'Intelligent automation and AI-driven solutions.'
  },
  {
    icon: <FaCubes size={32} className="text-accent" />,
    title: 'Product Strategy',
    desc: 'Strategic planning for digital product success.'
  },
  {
    icon: <FaLightbulb size={32} className="text-accent" />,
    title: 'Web Development',
    desc: 'Enterprise-grade web applications and platforms.'
  },
  {
    icon: <FaTools size={32} className="text-accent" />,
    title: 'Maintenance & Support',
    desc: 'Reliable ongoing support and maintenance.'
  },
  {
    icon: <FaRocket size={32} className="text-accent" />,
    title: 'MVP Development',
    desc: 'Rapid MVP prototyping and launch.'
  },
  {
    icon: <FaEthereum size={32} className="text-accent" />,
    title: 'Blockchain & Web3',
    desc: 'Next-gen blockchain and Web3 solutions.'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
};

const ServicesSection = () => (
  <section className="py-16 px-4 bg-darkBg">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          className="glass-card p-6 rounded-xl shadow-glow border border-accent hover:-translate-y-2 hover:shadow-glow transition relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
          <p className="text-base text-white/80">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
