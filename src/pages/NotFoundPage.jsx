import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFoundPage; // ✅ Add this line