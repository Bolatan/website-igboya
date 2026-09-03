import React from 'react';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-primary-green">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-dark-green transition-colors font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage; // ✅ Add this line