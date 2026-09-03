import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailPage() {
  const { id } = useParams()

  return (
    <div className="pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Product Details</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Loading product {id}...</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage