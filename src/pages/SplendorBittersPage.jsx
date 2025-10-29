import React from 'react'
import { Link } from 'react-router-dom'

const SplendorBittersPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gold mt-8">
          SPLENDOR BITTERS
        </h1>
        <p className="text-lg md:text-xl mb-6">
          For those who crave a taste that stands apart, this is your calling. Bold, exciting, and masterfully refined, Splendor Bitters delivers the perfect balance of intensity and satisfaction in every sip.
        </p>
        <p className="mb-4">
          Searching for an unbeatable taste of bitters?
          Try Splendor Bitters. This exceptional blend is infused with potent natural extracts that awaken your senses and leave a rich, lasting impression.
        </p>
        <p className="mb-4">
          Carefully crafted by the King of Bitters,
          Eastwood Edwin Russ Distilleries & Food Ltd,
          Splendor Bitters embodies expertise, tradition, and the confidence of a brand that knows what true quality means.
        </p>
        <p className="font-bold">
          Strong in character. Unmatched in taste.
          Always ready when you are…
        </p>
        <p className="font-bold">
          Enjoy the Beauty of Bitters on-the-GO.
        </p>
      </div>

      <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
        <Link to="/products" className="btn btn-gold">
          Shop Now
        </Link>
      </div>
    </>
  )
}

export default SplendorBittersPage
