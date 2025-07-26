import React, { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { FaFilter, FaTimes, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))]
  
  // Handle filter changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    applyFilters(category, priceRange, sortBy)
  }
  
  const handlePriceChange = (e) => {
    const newPriceRange = [...priceRange]
    newPriceRange[1] = parseInt(e.target.value)
    setPriceRange(newPriceRange)
    applyFilters(activeCategory, newPriceRange, sortBy)
  }
  
  const handleSortChange = (value) => {
    setSortBy(value)
    applyFilters(activeCategory, priceRange, value)
  }
  
  // Apply all filters
  const applyFilters = (category, price, sort) => {
    let result = [...products]
    
    // Apply category filter
    if (category !== 'all') {
      result = result.filter(product => product.category === category)
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= price[0] && product.price <= price[1]
    )
    
    // Apply sorting
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Default sorting (featured)
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
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
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
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
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="500"
                      value={priceRange[1]}
                      onChange={handlePriceChange}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2">
                      <span>₦0</span>
                      <span>₦{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <h3 className="text-lg font-semibold mb-4">Sort By</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'default'}
                        onChange={() => handleSortChange('default')}
                        className="mr-2"
                      />
                      Featured
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'price-asc'}
                        onChange={() => handleSortChange('price-asc')}
                        className="mr-2"
                      />
                      Price: Low to High
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'price-desc'}
                        onChange={() => handleSortChange('price-desc')}
                        className="mr-2"
                      />
                      Price: High to Low
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'rating'}
                        onChange={() => handleSortChange('rating')}
                        className="mr-2"
                      />
                      Top Rated
                    </label>
                  </div>
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
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border rounded px-3 py-1.5"
                  >
                    <option value="default">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
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