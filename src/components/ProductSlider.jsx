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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="product-slider-container">
      <Slider {...settings}>
        {featuredProducts.map(product => (
          <div key={product.id}>
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-screen object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
                  <p className="text-lg mb-4">{product.shortDescription}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-gold">
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
