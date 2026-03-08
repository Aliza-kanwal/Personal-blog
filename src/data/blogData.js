const blogData = [
  {
    id: 1,
    title: "Getting Started with React",
    category: "Tech",
    date: "Feb 15, 2026",
    description: "Learn the basics of React and how to build your first component in this beginner-friendly guide.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "10 Must-Visit Places in Japan",
    category: "Travel",
    date: "Feb 12, 2026",
    description: "From Tokyo's bustling streets to Kyoto's serene temples, discover the best destinations in Japan.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
    author: "Mike Thompson"
  },
  {
    id: 3,
    title: "Easy Pasta Recipes for Beginners",
    category: "Food",
    date: "Feb 10, 2026",
    description: "Master these simple pasta dishes that are perfect for weeknight dinners and impressing guests.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=250&fit=crop",
    author: "Emily Chen"
  },
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    category: "Tech",
    date: "Feb 8, 2026",
    description: "Deep dive into one of JavaScript's most important concepts - closures and lexical scoping.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
    author: "Alex Rivera"
  },
  {
    id: 5,
    title: "Backpacking Through Europe on a Budget",
    category: "Travel",
    date: "Feb 5, 2026",
    description: "Tips and tricks for exploring Europe without breaking the bank, from hostels to free attractions.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=250&fit=crop",
    author: "Lisa Wang"
  },
  {
    id: 6,
    title: "The Art of Sourdough Baking",
    category: "Food",
    date: "Feb 3, 2026",
    description: "Create the perfect crusty sourdough bread at home with this comprehensive guide for beginners.",
    image: "https://images.unsplash.com/photo-1585478259715-4d3a5d5f6c7a?w=400&h=250&fit=crop",
    author: "David Miller"
  }
];

export default blogData;
// Add this to track popular posts
export const popularPosts = [
  {
    id: 3,
    title: "Easy Pasta Recipes for Beginners",
    views: 1542,
    comments: 23,
    category: "Food",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop"
  },
  {
    id: 1,
    title: "Getting Started with React",
    views: 1234,
    comments: 18,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    title: "Backpacking Through Europe on a Budget",
    views: 987,
    comments: 12,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    views: 876,
    comments: 9,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=100&h=100&fit=crop"
  }
];