import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from './BlogCard';

function BlogPosts({ posts, isDarkMode }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className={`text-lg ${
          isDarkMode ? 'text-gray-300' : 'text-[#8B7A6B]'
        }`}>
          No posts found
        </p>
        <p className={`text-sm ${
          isDarkMode ? 'text-gray-500' : 'text-[#B5A89C]'
        }`}>
          Try adjusting your search
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {currentPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index} 
              isDarkMode={isDarkMode}
            />
          ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 text-sm transition-colors ${
              currentPage === 1
                ? isDarkMode ? 'text-gray-600 cursor-not-allowed' : 'text-[#B5A89C] cursor-not-allowed'
                : isDarkMode 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-[#8B7A6B] hover:text-[#E7B4A3]'
            }`}
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 text-sm transition-colors ${
                currentPage === i + 1
                  ? isDarkMode
                    ? 'text-gray-200 font-medium'
                    : 'text-[#E7B4A3] font-medium'
                  : isDarkMode
                    ? 'text-gray-500 hover:text-gray-300'
                    : 'text-[#B5A89C] hover:text-[#8B7A6B]'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 text-sm transition-colors ${
              currentPage === totalPages
                ? isDarkMode ? 'text-gray-600 cursor-not-allowed' : 'text-[#B5A89C] cursor-not-allowed'
                : isDarkMode 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-[#8B7A6B] hover:text-[#E7B4A3]'
            }`}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogPosts;