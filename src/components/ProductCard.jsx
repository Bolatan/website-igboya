import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { useCart } from '../contexts/CartContext'

const ProductCard = ({ product, hidePrice }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  const isTeKanLe = product.name === 'Te Kan Lee';
  const cardLink = isTeKanLe ? '/te-kan-le' : `/products/${product.id}`;

  return (
    <div 
      className="product-card" 
      data-aos="fade-up"
    >
      <Link to={cardLink}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-gold text-gray-900 px-2 py-1 rounded font-semibold text-sm">
              New
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded font-semibold text-sm">
              {product.discount}% Off
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-2">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  size={14} 
                  className={i < product.rating ? 'text-gold' : 'text-gray-300'} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
          </div>
          
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          
          <p className="text-gray-600 text-sm mb-3">{product.shortDescription}</p>
          
          {!hidePrice && (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {product.discount > 0 ? (
                  <>
                    <span className="text-lg font-bold text-primary-green">
                      ₦{(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₦{product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-primary-green">
                    ₦{product.price.toFixed(2)}
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                className="p-2 bg-primary-green text-white rounded-full hover:bg-dark-green transition-colors"
              >
                <FaShoppingCart size={16} />
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProductCard