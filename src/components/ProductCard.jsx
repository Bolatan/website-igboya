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
  const isFieldMarshal = product.name === 'Field Marshal';
  const isIgboyaBitters = product.name.includes('Igboya Bitters');
  const isSplendorBitters = product.name.includes('Splendor Bitters');
  const isBoldGin = product.name === 'Bold Gin';
  const isSplendorLiqueur = product.name === 'Splendor Liqueur';
  const isYatchChocolateVodka = product.name === 'Yatch Chocolate Vodka';

  const cardLink = isTeKanLe
    ? '/te-kan-le'
    : isFieldMarshal
    ? '/field-marshall'
    : isIgboyaBitters
    ? '/igboya-bitters'
    : isSplendorBitters
    ? '/splendor-bitters'
    : isBoldGin
    ? '/bold-gin'
    : isSplendorLiqueur
    ? '/splendor-liqueur'
    : isYatchChocolateVodka
    ? '/yatch-chocolate-vodka'
    : `/products/${product.id}`;

  const CardWrapper = ({ children }) => {
    if (product.clickable !== false) {
      return <Link to={cardLink}>{children}</Link>;
    }
    return <div>{children}</div>;
  };

  return (
    <div
      className="product-card"
      data-aos="fade-up"
    >
      <CardWrapper>
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
            </div>
          
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          
          <p className="text-gray-600 text-sm mb-3">{product.shortDescription}</p>
        </div>
      </CardWrapper>
    </div>
  )
}

export default ProductCard