import React from 'react';
import { motion } from 'framer-motion';

function BlogCard({ post, index, isDarkMode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800' 
          : 'bg-white'
      }`}
    >
      <div className="p-6">
        {/* Category and Date */}
        <div className="flex justify-between items-center mb-3">
          <span className={`text-xs font-medium uppercase tracking-wider ${
            isDarkMode ? 'text-gray-400' : 'text-[#E7B4A3]'
          }`}>
            {post.category}
          </span>
          <span className={`text-xs ${
            isDarkMode ? 'text-gray-500' : 'text-[#B5A89C]'
          }`}>
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h2 className={`text-xl font-medium mb-2 transition-colors hover:${
          isDarkMode ? 'text-gray-300' : 'text-[#E7B4A3]'
        } ${
          isDarkMode ? 'text-gray-200' : 'text-[#8B7A6B]'
        }`}>
          {post.title}
        </h2>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-2 leading-relaxed ${
          isDarkMode ? 'text-gray-400' : 'text-[#B5A89C]'
        }`}>
          {post.description}
        </p>

        {/* Author */}
        <div className={`flex items-center gap-2 pt-3 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-[#FFE4D6]'
        }`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-300' 
              : 'bg-[#FFE4D6] text-[#8B7A6B]'
          }`}>
            {post.author[0]}
          </div>
          <span className={`text-xs ${
            isDarkMode ? 'text-gray-400' : 'text-[#8B7A6B]'
          }`}>
            {post.author}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default BlogCard;