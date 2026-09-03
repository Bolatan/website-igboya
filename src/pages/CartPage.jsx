import React from 'react'

function CartPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow p-6 text-center sm:text-left">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      </div>
    </div>
  )
}

export default CartPage