import React from 'react';
import { motion } from 'framer-motion';

function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? '#1a1a1a' : '#E7B4A3',
        color: isDarkMode ? '#FBBF24' : '#8B7A6B',
        border: isDarkMode ? '2px solid #FBBF24' : 'none'
      }}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </motion.button>
  );
}

export default ThemeToggle;