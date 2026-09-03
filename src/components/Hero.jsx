import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tableImg from '../assets/table.jpeg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const newImages = [
  '/images/a.jpeg',
  '/images/b.jpeg',
  '/images/c.jpeg',
  '/images/i.jpeg',
  '/images/j.jpeg',
  '/images/igboyabittersbigbottle.jpeg',
  '/images/sp.jpeg',
];

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center py-12 md:py-0">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${tableImg})`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-center md:text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the Power of <span className="text-gold">Nigerian Heritage</span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover the secret to vitality with our premium herbal bitters, crafted from traditional recipes.
            </p>
          </div>

          <div className="w-full max-w-full overflow-hidden" data-aos="fade-left" data-aos-delay="400">
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
              {newImages.map((image, index) => (
                <SwiperSlide key={index} className="!w-[260px] sm:!w-[320px]">
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto max-h-[350px] sm:max-h-[400px] object-cover rounded-lg" />
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