import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailPage() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Loading product {id}...</p>
      </div>
    </div>
  )
}

export default ProductDetailPage