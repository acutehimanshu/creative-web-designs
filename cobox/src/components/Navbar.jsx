import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-darkBg bg-opacity-80 backdrop-blur-xs flex items-center justify-between px-6 py-4 shadow-glow">
      <div className="text-2xl font-bold text-primary">COBOX TECHNOLOGIES</div>
      <div className="hidden md:flex gap-6">
        <a href="#services" className="text-white hover:text-accent transition">Services</a>
        <a href="#impact" className="text-white hover:text-accent transition">Impact</a>
        <a href="#case-studies" className="text-white hover:text-accent transition">Case Studies</a>
        <a href="#process" className="text-white hover:text-accent transition">Process</a>
        <a href="#testimonials" className="text-white hover:text-accent transition">Testimonials</a>
        <a href="#technologies" className="text-white hover:text-accent transition">Technologies</a>
        <a href="#contact" className="text-white hover:text-accent transition">Contact</a>
      </div>
      <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Open menu">
        <FaBars size={24} />
      </button>
      {open && (
        <div className="absolute top-16 right-6 bg-darkBg rounded-lg shadow-glow p-4 flex flex-col gap-4 md:hidden">
          <a href="#services" className="text-white hover:text-accent transition">Services</a>
          <a href="#impact" className="text-white hover:text-accent transition">Impact</a>
          <a href="#case-studies" className="text-white hover:text-accent transition">Case Studies</a>
          <a href="#process" className="text-white hover:text-accent transition">Process</a>
          <a href="#testimonials" className="text-white hover:text-accent transition">Testimonials</a>
          <a href="#technologies" className="text-white hover:text-accent transition">Technologies</a>
          <a href="#contact" className="text-white hover:text-accent transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
