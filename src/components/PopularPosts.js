import React from 'react';
import { popularPosts } from '../data/blogData';
import { useTheme } from '../context/ThemeContext';

function PopularPosts() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`mt-8 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-24`}>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Popular Posts
      </h3>
      
      <div className="space-y-4">
        {popularPosts.map(post => (
          <a 
            key={post.id}
            href={`#post-${post.id}`}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              // Scroll to post (you can implement this later)
              console.log('Navigate to post', post.id);
            }}
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform"
            />
            <div className="flex-1">
              <h4 className={`text-sm font-medium group-hover:text-teal-600 transition-colors line-clamp-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                <span className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {post.views}
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comments}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-teal-600 hover:text-teal-800 font-medium text-center">
        View All Posts →
      </button>
    </div>
  );
}

export default PopularPosts;