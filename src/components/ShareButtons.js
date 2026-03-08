import React, { useState } from 'react';

function ShareButtons({ post }) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = window.location.href;
  const shareTitle = post?.title || "Check out this blog post!";
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Share:</span>
      
      {/* Twitter */}
      <a 
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Share on Twitter"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.092-3.285 13.94 13.94 0 002.01-7.177c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>

      {/* Facebook */}
      <a 
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-[#4267B2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Share on Facebook"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a 
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a 
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Share on WhatsApp"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.123 1.527 5.854L.054 24l6.288-1.562C7.977 22.417 9.951 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.937 17.445c-.357.895-1.732 1.638-2.833 1.781-.754.098-1.702.14-2.75-.148-1.063-.293-2.432-.959-4.007-2.041-2.063-1.417-3.462-3.238-3.856-3.985-.394-.747-.818-1.976-.293-3.104.395-.848 1.04-1.117 1.414-1.238.374-.121.748-.015.957.022.137.024.255.039.364.063.247.054.518.407.652.704.134.297.893 2.173.97 2.332.078.159.156.346.047.558-.109.212-.163.346-.326.532-.163.186-.342.415-.492.557-.149.142-.303.296-.13.581.173.285.768 1.267 1.646 2.051 1.133 1.012 2.042 1.384 2.382 1.542.34.158.54.132.74-.08.2-.212.855-.997 1.083-1.34.228-.342.456-.285.77-.171.313.114 1.986.938 2.327 1.109.341.171.568.256.652.4.083.144.083.832-.274 1.727z"/>
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="relative w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Copy link"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        
        {/* Copied tooltip */}
        {copied && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}

export default ShareButtons;