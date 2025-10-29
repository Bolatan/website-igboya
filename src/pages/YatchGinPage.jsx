import React from 'react'
import { Link } from 'react-router-dom'
import yatchginImg from '../assets/yatchgin.jpeg'

const YatchGinPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gold mt-8">
          YATCH GIN
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A journey of taste designed for those who love to feel alive. Yatch Gin brings together crisp botanicals and a refreshing blend that commands attention from the very first sip. It is bold, stylish, and driven by an adventurous spirit.
        </p>
        <p className="mb-4">
          Every pour invites you into a world where pleasure meets confidence. A smooth rush of flavor flows through your senses, lifting your mood and elevating your vibe. Whether you are at the club, the beach, or the center of the celebration, Yatch Gin delivers the thrill that keeps the night young.
        </p>
        <p className="mb-4">
          Raise the anchor. Set your excitement in motion. Experience the freedom, the boldness, and the pure enjoyment that only a finely crafted gin can give.
        </p>
        <p className="font-bold">
          Makes Your Body Come ALIVE
        </p>
      </div>

      <div className="text-center mt-10 mb-10" data-aos="fade-up" data-aos-delay="500">
        <Link to="/products" className="btn btn-gold">
          Shop Now
        </Link>
      </div>

      <div className="w-full">
        <img
          src={yatchginImg}
          alt="Yatch Gin"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  )
}

export default YatchGinPage