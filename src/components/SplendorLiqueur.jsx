import React from 'react';
import tableBg from '../assets/table.jpeg';

const SplendorLiqueur = () => {
  return (
    <section
      data-testid="splendor-section"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${tableBg})` }}
    >
      <div className="container mx-auto px-4">
        {/* Content removed as per request */}
      </div>
    </section>
  );
};

export default SplendorLiqueur;
