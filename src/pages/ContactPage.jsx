import React, { useState, useEffect } from 'react'
import { useForm } from '@formspree/react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import ThankYouPopup from '../components/ThankYouPopup'

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xvgvvyeg")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    if (state.succeeded) {
      setIsPopupOpen(true)
    }
  }, [state.succeeded])

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className="pt-20">
      <ThankYouPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <div className="bg-primary-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Have questions about our products? We're here to help and would love to hear from you.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our products, need assistance with an order, or want to learn more about herbal wellness, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-green p-3 rounded-full text-white mr-4">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">08126670037, 09099319340</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-green p-3 rounded-full text-white mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">enquiries@eastwoodedwinruss.com</p>
                    <p className="text-gray-600">eastwoodedwinrussindfoodltd@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-green p-3 rounded-full text-white mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">ADDRESS</h3>
                    <p className="text-gray-600">EASTWOOD EDWIN RUSS DISTILLERIES & FOOD LTD.</p>
                    <p className="text-gray-600">48, Gberigbe Road, Off Ijede Road, Ikorodu, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary-green text-white py-3 rounded-lg font-semibold hover:bg-dark-green transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage