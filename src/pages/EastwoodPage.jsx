import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const EastwoodPage = () => {
  const eastwoodProducts = products.filter(p => p.category === 'eastwood');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Eastwood Products</h1>
      <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {eastwoodProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default EastwoodPage;
