import React from 'react';
import Slider from 'react-slick';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="product-slider-container py-12 bg-gray-100">
      <Slider {...settings}>
        {featuredProducts.map(product => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">₦{product.price.toLocaleString()}</span>
                  <Link to={`/products/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
