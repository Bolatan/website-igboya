import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const FieldMarshallPage = () => {
  const fieldMarshallProducts = products.filter(
    (product) => product.category === 'field-marshall' || product.category === 'eastwood'
  );

  return (
    <div className="pt-20">
      <div className="bg-primary-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Field Marshall & Eastwood</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            A selection of our finest spirits, from the classic Field Marshall range to the unique Eastwood collection.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldMarshallProducts.length > 0 ? (
              fieldMarshallProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">
                  There are currently no products available in this collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FieldMarshallPage;
