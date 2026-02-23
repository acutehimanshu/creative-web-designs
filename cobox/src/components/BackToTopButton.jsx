import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return visible ? (
    <button
      className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-glow hover:scale-110 transition z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FaArrowUp size={20} />
    </button>
  ) : null;
};

export default BackToTopButton;
