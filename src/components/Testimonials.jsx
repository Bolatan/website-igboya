import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Oluwaseun Adebayo',
    role: 'Fitness Instructor',
    quote: 'Igboya Bitters has been a game-changer for my digestive health. I recommend it to all my clients as part of their wellness routine.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Amara Okafor',
    role: 'Nutritionist',
    quote: 'As a nutritionist, I\'m very selective about what I recommend. Igboya Bitters stands out for its quality ingredients and noticeable health benefits.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Chinedu Eze',
    role: 'Business Executive',
    quote: 'My high-stress job was taking a toll on my health. Igboya Bitters has helped me maintain my energy levels and manage stress better.',
    rating: 4,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Folake Johnson',
    role: 'Herbalist',
    quote: 'I\'ve studied traditional herbal medicine for decades, and Igboya Bitters upholds the highest standards of quality and efficacy in herbal formulation.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Hear from people who have experienced the benefits of Igboya Bitters in their daily lives.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <div className="flex text-gold mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            size={14} 
                            className={i < testimonial.rating ? 'text-gold' : 'text-gray-300'} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <FaQuoteLeft className="text-primary-green opacity-20 text-3xl mb-2" />
                    <p className="text-gray-600 italic">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials