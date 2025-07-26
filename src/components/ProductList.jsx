import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, title, subtitle }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))]
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                  activeCategory === category
                    ? 'bg-primary-green text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList