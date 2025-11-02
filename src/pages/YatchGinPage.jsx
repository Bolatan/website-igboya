import React from 'react';
import yatchginImg from '../assets/yatchgin22.jpeg';

const YatchGinPage = () => {
  return (
    <div className="container mx-auto px-4 pt-16 pb-8">
      <div className="flex flex-col md:flex-row md:space-x-8 my-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={yatchginImg}
            alt="Yatch Gin"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className='text-4xl font-bold mb-4'>YATCH GIN</h1>
          <p className='mb-4'>
            A journey of taste designed for those who love to feel alive. Yatch Gin
            brings together crisp botanicals and a refreshing blend that commands
            attention from the very first sip. It is bold, stylish, and driven by an
            adventurous spirit.
          </p>
          <p className='mb-4'>
            Every pour invites you into a world where pleasure meets confidence. A
            smooth rush of flavor flows through your senses, lifting your mood and
            elevating your vibe. Whether you are at the club, the beach, or the
            center of the celebration, Yatch Gin delivers the thrill that keeps the
            night young.
          </p>
          <p className='mb-4'>
            Raise the anchor. Set your excitement in motion. Experience the freedom,
            the boldness, and the pure enjoyment that only a finely crafted gin can
            give.
          </p>
          <p className='font-bold'>Makes Your Body Come ALIVE</p>
        </div>
      </div>
    </div>
  )
}

export default YatchGinPage;
