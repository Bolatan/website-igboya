import React from 'react'

const Logo = ({ color = '#1a5e1a' }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z" fill={color}/>
          <path d="M7 12L10 10M25 12L22 10M7 20L10 22M25 20L22 22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold font-playfair" style={{ color }}>
          Igboya<span className="text-[#FFD700]">Bitters</span>
        </h1>
      </div>
    </div>
  )
}

export default Logo