import React from 'react'
import { Link } from 'react-router-dom'
import ProductSlider from './ProductSlider'

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      
      <div className="w-full z-20">
        <ProductSlider />
      </div>
    </section>
  )
}

export default Hero