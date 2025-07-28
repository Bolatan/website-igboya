import React from 'react'
import logoImage from '../assets/logo.jpeg'

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <img src={logoImage} alt="Igboya Bitters Logo" className="h-10 w-auto" />
      </div>
    </div>
  )
}

export default Logo