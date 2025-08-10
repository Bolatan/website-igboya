import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../contexts/CartContext'
import Logo from './Logo'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSticky 
          ? 'bg-white shadow-md' 
          : isHomePage 
            ? 'bg-transparent' 
            : 'bg-primary-green'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="z-10 flex items-center space-x-2">
            <Logo color={isSticky ? '#1a5e1a' : '#FFFFFF'} />
            <span className={`text-lg font-semibold ${isSticky ? 'text-gray-800' : 'text-white'}`}>
              Edwin Eastwood Russ Distilleries and Food Ltd
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <NavLink 
                    to="/" 
                    className={({isActive}) => 
                      `nav-link ${isActive ? 'active' : ''} ${
                        isSticky ? 'text-gray-800' : 'text-white hover:text-gold'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({isActive}) => 
                      `nav-link ${isActive ? 'active' : ''} ${
                        isSticky ? 'text-gray-800' : 'text-white hover:text-gold'
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/products" 
                    className={({isActive}) => 
                      `nav-link ${isActive ? 'active' : ''} ${
                        isSticky ? 'text-gray-800' : 'text-white hover:text-gold'
                      }`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({isActive}) => 
                      `nav-link ${isActive ? 'active' : ''} ${
                        isSticky ? 'text-gray-800' : 'text-white hover:text-gold'
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                className={`${
                  isSticky ? 'text-gray-800' : 'text-white'
                } hover:text-gold transition-colors`}
              >
                <FaSearch size={18} />
              </button>
              <Link to="/cart" className="relative">
                <FaShoppingCart 
                  size={20} 
                  className={`${
                    isSticky ? 'text-gray-800' : 'text-white'
                  } hover:text-gold transition-colors`} 
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-xs text-gray-900 font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
          
          <button 
            className="md:hidden z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes 
                size={24} 
                className={isSticky ? 'text-gray-800' : 'text-white'} 
              />
            ) : (
              <FaBars 
                size={24} 
                className={isSticky ? 'text-gray-800' : 'text-white'} 
              />
            )}
          </button>
          
          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-primary-green bg-opacity-95 flex flex-col items-center justify-center transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } md:hidden`}
          >
            <nav className="mb-8">
              <ul className="flex flex-col items-center space-y-6">
                <li>
                  <NavLink 
                    to="/" 
                    className={({isActive}) => 
                      `text-white text-xl font-medium ${isActive ? 'font-bold' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({isActive}) => 
                      `text-white text-xl font-medium ${isActive ? 'font-bold' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/products" 
                    className={({isActive}) => 
                      `text-white text-xl font-medium ${isActive ? 'font-bold' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({isActive}) => 
                      `text-white text-xl font-medium ${isActive ? 'font-bold' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-gold transition-colors">
                <FaSearch size={20} />
              </button>
              <Link 
                to="/cart"
                className="relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaShoppingCart size={22} className="text-white hover:text-gold transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-xs text-gray-900 font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header