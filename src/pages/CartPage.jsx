import React from 'react'

function CartPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    </div>
  )
}

export default CartPage