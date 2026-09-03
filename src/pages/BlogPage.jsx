import React from 'react';

function BlogPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Blog</h1>
        <div className="bg-white rounded-lg shadow p-6 text-center sm:text-left">
          <p className="text-gray-600">Welcome to our blog! Stay tuned for health tips, traditional herbal recipes, and product updates.</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;