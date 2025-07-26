import React from 'react'
import { FaLeaf, FaHeartbeat, FaStopwatch, FaBrain, FaShieldAlt, FaBolt } from 'react-icons/fa'

const benefitsData = [
  {
    icon: <FaHeartbeat size={36} className="text-primary-green" />,
    title: 'Supports Cardiovascular Health',
    description: 'Contains compounds that help maintain healthy blood pressure and cholesterol levels.'
  },
  {
    icon: <FaLeaf size={36} className="text-primary-green" />,
    title: '100% Natural Ingredients',
    description: 'Made from premium herbs and plants sourced from organic farms across Nigeria.'
  },
  {
    icon: <FaStopwatch size={36} className="text-primary-green" />,
    title: 'Traditional Formula',
    description: 'Based on time-tested recipes passed down through generations of herbalists.'
  },
  {
    icon: <FaBrain size={36} className="text-primary-green" />,
    title: 'Enhances Mental Clarity',
    description: 'Natural compounds that support cognitive function and mental alertness.'
  },
  {
    icon: <FaShieldAlt size={36} className="text-primary-green" />,
    title: 'Immune System Support',
    description: 'Rich in antioxidants that strengthen the body\'s natural defense mechanisms.'
  },
  {
    icon: <FaBolt size={36} className="text-primary-green" />,
    title: 'Boosts Energy Levels',
    description: 'Provides natural, sustained energy without the crash of caffeine or sugar.'
  }
]

const Benefits = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4\" data-aos="fade-up">
            The Benefits of Igboya Bitters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Discover why Igboya Bitters has been a trusted health supplement in Nigerian culture for generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits