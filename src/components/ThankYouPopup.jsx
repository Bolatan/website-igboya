import React from 'react'

const ThankYouPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-primary-green mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={onClose}
          className="bg-primary-green text-white py-2 px-6 rounded-lg font-semibold hover:bg-dark-green transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ThankYouPopup
