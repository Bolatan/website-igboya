import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail('')
    }, 500)
  }

  return (
    <section className="bg-primary-green py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Join Our Wellness Community
          </h2>
          <p className="mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
            Subscribe to our newsletter for exclusive health tips, special offers, and updates on new products.
          </p>
          
          {isSubmitted ? (
            <div 
              className="bg-white text-primary-green p-4 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm mt-1">We've sent a confirmation email to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-2 opacity-75">
                By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter