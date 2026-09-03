import React, { useState } from 'react'
import { products as allProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import { FaFilter, FaTimes, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'

const productsToShow = [];

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
    <div className="pt-16 sm:pt-20">
      <div className="bg-primary-green py-10 md:py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90">
            Discover our range of premium Nigerian herbal bitters, crafted with tradition and quality in mind.
          </p>
        </div>
      </div>
      
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-2 flex justify-between items-center">
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-800 font-medium text-sm"
              >
                <FaFilter />
                <span>Filters ({activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)})</span>
              </button>
            </div>
            
            {/* Sidebar Filters */}
            <aside className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 lg:mb-0">
                <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h3 className="text-lg font-semibold">Categories</h3>
                  <button 
                    onClick={() => setShowFilters(false)} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                
                <div>
                  <h3 className="hidden lg:block text-lg font-semibold mb-4">Categories</h3>
                  <ul className="flex flex-wrap lg:flex-col gap-2">
                    {categories.map((category) => (
                      <li key={category} className="w-auto lg:w-full">
                        <button
                          onClick={() => {
                            handleCategoryChange(category)
                            setShowFilters(false)
                          }}
                          className={`text-left px-3 py-2 rounded-md transition text-sm sm:text-base ${
                            activeCategory === category
                              ? 'bg-primary-green text-white font-medium'
                              : 'bg-gray-100 lg:bg-transparent hover:bg-gray-200'
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