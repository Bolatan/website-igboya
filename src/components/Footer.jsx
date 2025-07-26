import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo color="#FFFFFF" />
            <p className="mt-4 text-gray-400">
              Premium Nigerian herbal bitters made from the finest natural ingredients, 
              following traditional recipes passed down through generations.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <FaFacebook size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 text-gold" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-gold" />
                <span>info@igboyabitters.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-gold" />
                <span>123 Herbal Street, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new products, special offers, and health tips.
            </p>
            <form>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button 
                  type="submit" 
                  className="bg-gold text-gray-900 px-4 py-2 rounded font-medium hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Igboya Bitters. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="text-gray-400 hover:text-gold transition-colors">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer