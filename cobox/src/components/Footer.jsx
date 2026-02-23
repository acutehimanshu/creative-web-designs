import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-darkBg bg-opacity-90 backdrop-blur-xs py-8 px-4 mt-auto">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-primary font-bold text-lg">COBOX TECHNOLOGIES © {new Date().getFullYear()}</div>
      <div className="flex gap-4">
        <a href="#" aria-label="Facebook"><FaFacebook className="text-accent hover:text-secondary transition" /></a>
        <a href="#" aria-label="Twitter"><FaTwitter className="text-accent hover:text-secondary transition" /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-accent hover:text-secondary transition" /></a>
        <a href="#" aria-label="GitHub"><FaGithub className="text-accent hover:text-secondary transition" /></a>
      </div>
      <div className="text-white/70 text-sm">All rights reserved. | Quick Links: Services, Impact, Case Studies, Process, Testimonials, Technologies, Contact</div>
    </div>
  </footer>
);

export default Footer;
