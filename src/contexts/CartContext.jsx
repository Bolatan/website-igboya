import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const initialState = {
  cartItems: [],
  itemCount: 0,
  total: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      )
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1
        }
        
        return {
          ...state,
          cartItems: updatedCartItems,
        }
      } else {
        // Item doesn't exist, add new item
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        }
      }
    }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity } 
            : item
        ),
      }
    
    case 'CLEAR_CART':
      return initialState
    
    case 'CALCULATE_TOTALS': {
      const { itemCount, total } = state.cartItems.reduce(
        (acc, item) => {
          const itemTotal = item.price * item.quantity
          acc.itemCount += item.quantity
          acc.total += itemTotal
          return acc
        },
        { itemCount: 0, total: 0 }
      )
      
      return {
        ...state,
        itemCount,
        total,
      }
    }
    
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTALS' })
  }, [state.cartItems])
  
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }
  
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity },
    })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}