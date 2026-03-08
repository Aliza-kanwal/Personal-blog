import React from 'react';
import { motion } from 'framer-motion';

function BlogHeader({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange, isDarkMode }) {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/90 border-b border-gray-800' 
          : 'bg-white/80 border-b border-[#E7B4A3]/20'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        {/* Blog Title */}
        <div className="text-center mb-6">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-5xl md:text-6xl font-light mb-3 tracking-wide"
          >
            <span className={isDarkMode ? 'text-gray-400' : 'text-[#8B7A6B]'}>✍️</span>{' '}
            <span className={`font-serif transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-[#8B7A6B]'
            }`}>
              Personal Blog
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-lg font-light italic transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-[#B5A89C]'
            }`}
          >
            thoughts, stories, and ideas
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`w-full px-5 py-2.5 rounded-lg text-sm transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:border-gray-600' 
                  : 'bg-white/60 border border-[#E7B4A3]/30 text-[#8B7A6B] placeholder-[#B5A89C]/50 focus:border-[#E7B4A3]'
              } focus:outline-none`}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? isDarkMode
                    ? 'bg-gray-700 text-white'
                    : 'bg-[#E7B4A3] text-white'
                  : isDarkMode
                    ? 'text-gray-400 hover:bg-gray-800'
                    : 'text-[#8B7A6B] hover:bg-[#FFE4D6]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}

export default BlogHeader;