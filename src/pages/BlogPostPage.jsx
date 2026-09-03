import React from 'react';

const BlogPostPage = () => {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Blog Post</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Individual blog post content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; // ✅ Add this line