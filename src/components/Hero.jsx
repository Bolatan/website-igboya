import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { products } from '../data/products'
import ProductCard from './ProductCard'

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the Power of <span className="text-gold">Nigerian Heritage</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover the secret to vitality with our premium herbal bitters, crafted from traditional recipes.
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

          <div className="w-full" data-aos="fade-left" data-aos-delay="400">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full"
            >
              {products.filter(p => [4, 17, 18].includes(p.id)).map(product => (
                <SwiperSlide key={product.id} style={{ width: '320px' }}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}

              <div className="slider-controler mt-4">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero