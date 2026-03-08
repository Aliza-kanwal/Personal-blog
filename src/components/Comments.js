import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { isDarkMode } = useTheme();

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${postId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [postId]);

  // Save comments to localStorage when they change
  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const comment = {
        id: Date.now(),
        userName: userName,
        text: newComment,
        date: new Date().toLocaleDateString(),
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setUserName('');
      setShowForm(false);
    }
  };

  const handleLike = (commentId) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 } 
        : comment
    ));
  };

  const handleDelete = (commentId) => {
    if (window.confirm('Delete this comment?')) {
      setComments(comments.filter(comment => comment.id !== commentId));
    }
  };

  return (
    <div className={`mt-8 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comments ({comments.length})
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Comment'}
        </button>
      </div>

      {/* Comment Form */}
      {showForm && (
        <form onSubmit={handleSubmitComment} className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
            }`}
            required
          />
          <textarea
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="4"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
            }`}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Post Comment
          </button>
        </form>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map(comment => (
            <div
              key={comment.id}
              className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-sm`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold flex items-center">
                    {comment.userName}
                    <span className={`text-xs ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {comment.date}
                    </span>
                  </h4>
                </div>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {comment.text}
              </p>
              <button
                onClick={() => handleLike(comment.id)}
                className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {comment.likes} {comment.likes === 1 ? 'Like' : 'Likes'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;