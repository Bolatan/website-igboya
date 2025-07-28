import React from 'react'
import { Link } from 'react-router-dom'
import ProductSlider from './ProductSlider'
import heroBg from '../assets/bold gin.jpeg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-2xl text-white">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover Your New Favorite Drink
          </h1>
          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/products" className="btn btn-gold">
              Shop Now
            </Link>
            <Link to="/about" className="btn btn-secondary text-white border-white hover:bg-white hover:bg-opacity-20">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full z-20 mt-12">
        <ProductSlider />
      </div>
    </section>
  )
}

export default Hero