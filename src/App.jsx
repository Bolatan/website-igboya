import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage'
import TeeKanLePage from './pages/TeeKanLePage'
import FieldMarshallPage from './pages/FieldMarshallPage'
import IgboyaBittersPage from './pages/IgboyaBittersPage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
    })
  }, [])

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/te-kan-le" element={<TeeKanLePage />} />
          <Route path="/field-marshall" element={<FieldMarshallPage />} />
          <Route path="/igboya-bitters" element={<IgboyaBittersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App