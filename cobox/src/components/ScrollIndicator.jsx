import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-accent transition-all" style={{ width: `${scroll * 100}%` }} />
    </div>
  );
};

export default ScrollIndicator;
