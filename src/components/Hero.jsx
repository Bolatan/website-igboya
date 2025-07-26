import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-2xl text-white">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" 
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Experience the Power of <span className="text-gold">Nigerian Heritage</span>
          </h1>
          <p 
            className="text-lg md:text-xl opacity-90 mb-8" 
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Igboya Bitters combines ancient herbal traditions with modern wellness science. Crafted from premium natural ingredients for health and vitality.
          </p>
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
      
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div 
          className="animate-bounce bg-white bg-opacity-20 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero