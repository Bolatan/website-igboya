import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
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
                The Heritage of <span className="text-primary-green">Igboya Bitters</span>
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
                <img 
                  src="https://images.pexels.com/photos/6280696/pexels-photo-6280696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Traditional herbal preparation" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-gold p-4 rounded-lg shadow-md">
                  <p className="text-lg font-bold text-gray-900">100% Natural</p>
                  <p className="text-sm text-gray-800">Traditional Recipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      {/* How to Use Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
              How to Use Igboya Bitters
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Follow these simple guidelines to get the most benefit from your Igboya Bitters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Measure Carefully</h3>
              <p className="text-gray-300">
                Use 30ml (approximately 2 tablespoons) of Igboya Bitters per serving. Use the cap as a measuring guide.
              </p>
            </div>
            
            <div 
              className="text-center p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Time to Take</h3>
              <p className="text-gray-300">
                For optimal results, take Igboya Bitters in the morning before breakfast or in the evening before dinner.
              </p>
            </div>
            
            <div 
              className="text-center p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Consistency is Key</h3>
              <p className="text-gray-300">
                For best results, use Igboya Bitters regularly as part of your daily wellness routine.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
            <Link to="/products" className="btn btn-gold">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      
      <Benefits />
      
      <Testimonials />
      
      {/* Featured Blog Posts */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
              Herbal Wellness Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Discover tips, recipes, and knowledge from our herbal wellness experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img 
                src="https://images.pexels.com/photos/4959854/pexels-photo-4959854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Traditional herbs" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-primary-green text-sm font-semibold mb-2">HERBAL KNOWLEDGE</p>
                <h3 className="text-xl font-semibold mb-2">The Power of Traditional Nigerian Herbs</h3>
                <p className="text-gray-600 mb-4">
                  Explore the rich history and powerful health benefits of herbs used in traditional Nigerian medicine.
                </p>
                <Link 
                  to="/blog/1" 
                  className="text-primary-green font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img 
                src="https://images.pexels.com/photos/8353570/pexels-photo-8353570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Herbal drink recipe" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-primary-green text-sm font-semibold mb-2">RECIPES</p>
                <h3 className="text-xl font-semibold mb-2">5 Refreshing Ways to Enjoy Igboya Bitters</h3>
                <p className="text-gray-600 mb-4">
                  Discover creative and delicious ways to incorporate Igboya Bitters into your daily routine.
                </p>
                <Link 
                  to="/blog/2" 
                  className="text-primary-green font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img 
                src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Health benefits" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-primary-green text-sm font-semibold mb-2">HEALTH & WELLNESS</p>
                <h3 className="text-xl font-semibold mb-2">Natural Remedies for Digestive Health</h3>
                <p className="text-gray-600 mb-4">
                  Learn how bitter herbs can support digestive health and overall wellbeing in your daily life.
                </p>
                <Link 
                  to="/blog/3" 
                  className="text-primary-green font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
            <Link to="/blog" className="btn btn-secondary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  )
}

export default HomePage