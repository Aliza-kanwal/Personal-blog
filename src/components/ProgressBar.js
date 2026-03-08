
import React, { useState, useEffect } from 'react';

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ProgressBar;