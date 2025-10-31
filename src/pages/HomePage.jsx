import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import SplendorLiqueur from '../components/SplendorLiqueur'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Heritage
              </h2>
              <p className="text-gray-600 mb-4">
                For generations, Nigerian herbalists have carefully crafted herbal bitters to promote health and vitality. Igboya Bitters continues this tradition with our premium blend of natural ingredients.
              </p>
              <p className="text-gray-600 mb-6">
                Our unique formula combines ancient wisdom with modern production standards to create a product that honors our heritage while meeting today's quality expectations.
              </p>
              <Link to="/about" className="btn btn-primary">
                Discover Our Story
              </Link>
            </div>

            <div className="order-1 md:order-2" data-aos="fade-left">
              <div className="relative">
              <div className="rounded-lg shadow-lg w-full h-auto overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/HB7XKKDj-QY?autoplay=1&mute=1"
    className="w-full h-64 md:h-80 lg:h-96"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      <SplendorLiqueur />

      <Testimonials />
    </>
  )
}

export default HomePage
