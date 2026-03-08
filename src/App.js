import React, { useState, useEffect } from 'react';
import BlogHeader from './components/BlogHeader';
import BlogPosts from './components/BlogPosts';
import ThemeToggle from './components/ThemeToggle';
import blogData from './data/blogData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('blog-theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('blog-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const categories = ['All', ...new Set(blogData.map(post => post.category))];

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-[#1a1a1a]' : 'bg-gradient-to-br from-[#FAF6F0] to-[#FFE4D6]'
    }`}>
      <BlogHeader 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDarkMode={isDarkMode}
      />
      
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="container mx-auto px-4 py-12">
        <BlogPosts posts={filteredPosts} isDarkMode={isDarkMode} />
      </main>

      <footer className={`mt-16 py-8 text-center border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'border-[#333] text-gray-400' 
          : 'border-[#E7B4A3]/30 text-[#8B7A6B]'
      }`}>
        <p className="text-sm">
          © 2026 My Personal Blog • Designed with warmth
        </p>
      </footer>
    </div>
  );
}

export default App;