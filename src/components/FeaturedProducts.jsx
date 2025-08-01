import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductCard from './ProductCard'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Discover our most popular herbal bitters, carefully selected for their exceptional quality and effectiveness.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {featuredProducts.map(product => (
              <div key={product.id} className="px-2">
                {product.name === 'Te Kan Lee' ? (
                  <Link to="/te-kan-le">
                    <ProductCard product={product} hidePrice={true} />
                  </Link>
                ) : product.name === 'Field Marshal' ? (
                  <Link to="/field-marshall">
                    <ProductCard product={product} hidePrice={true} />
                  </Link>
                ) : (
                  <ProductCard product={product} hidePrice={true} />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts