import React, { useState } from 'react'
import { products as allProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import { FaFilter, FaTimes, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'

const productsToShow = [
  "yatch chocolate vodka",
  "bold gin",
  "yatch gin",
  "splendour liquor",
  "splendor liquer",
  "splendour bitters",
  "splendor bitters",
];

const products = allProducts.filter(p => {
  const lowerCaseName = p.name.toLowerCase();
  return productsToShow.includes(lowerCaseName) || p.name.includes('Igboya') || p.name === 'Te Kan Lee';
});

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  
  // Get unique categories
  const categories = ['all', 'alcoholic', 'non-alcoholic', 'herbal']
  
  // Handle filter changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    applyFilters(category)
  }
  
  // Apply all filters
  const applyFilters = (category) => {
    let result = [...products]
    
    // Apply category filter
    if (category !== 'all') {
      result = result.filter(product => product.tags && product.tags.includes(category));
    }
    
    setFilteredProducts(result)
  }
  
  return (
    <div className="pt-20">
      <div className="bg-primary-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Discover our range of premium Nigerian herbal bitters, crafted with tradition and quality in mind.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4 flex justify-between items-center">
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded"
              >
                <FaFilter />
                <span>Filters</span>
              </button>
              
            </div>
            
            {/* Sidebar Filters */}
            <aside className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6 lg:hidden">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button 
                    onClick={() => setShowFilters(false)} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left px-3 py-2 rounded-md transition ${
                            activeCategory === category
                              ? 'bg-primary-green text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </aside>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              {/* Results Summary & Sort (Desktop) */}
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              
              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No products found</h3>
                    <p className="text-gray-600">
                      Try adjusting your filters to find what you're looking for.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage