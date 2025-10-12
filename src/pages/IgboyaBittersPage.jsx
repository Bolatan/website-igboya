import React from 'react'
import Benefits from '../components/Benefits'
import { Link } from 'react-router-dom'

const IgboyaBittersPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gold mt-8">
          Igboya Bitters: Nature's Premium Herbal Blend
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the Power of Traditional Wellness
        </p>
        <p className="mb-4">
          Igboya Bitters represents the perfect marriage of time-honored herbal wisdom and modern craftsmanship. This premium alcoholic herbal drink is meticulously crafted from a carefully curated selection of natural herbs, each chosen for their unique therapeutic properties and centuries of traditional use.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Artfully Blended for Maximum Potency</h2>
        <p className="mb-4">
          Our master blenders have spent years perfecting the precise combination of natural herbs that make Igboya Bitters truly exceptional. Every bottle contains a harmonious blend of potent botanicals, expertly balanced to deliver both exceptional taste and comprehensive wellness benefits.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Comprehensive Health Benefits</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <span className="font-bold">Immune System Support</span>
            <p>Strengthen your body's natural defenses with our powerful blend of immune-boosting herbs. Regular consumption helps fortify your system against common ailments and seasonal challenges.</p>
          </li>
          <li className="mb-2">
            <span className="font-bold">Natural Body Cleanser</span>
            <p>Experience the purifying power of nature as Igboya Bitters works to cleanse and detoxify your system, promoting overall vitality and well-being.</p>
          </li>
          <li className="mb-2">
            <span className="font-bold">Fertility Enhancement</span>
            <p>Traditional herbs known for their fertility-supporting properties have been carefully incorporated to support reproductive health naturally.</p>
          </li>
          <li className="mb-2">
            <span className="font-bold">Pain Management Solutions</span>
            <ul className="list-disc list-inside ml-4">
              <li>Back Ache Relief: Find comfort from persistent back pain with our targeted herbal formula</li>
              <li>Waist Pain Remedy: Address lower back and waist discomfort naturally</li>
              <li>Menstrual Pain Relief: Gentle yet effective support for women's monthly comfort</li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-bold">Digestive Health Support</span>
            <p>Our specially selected herbs also provide relief for digestive concerns, including support for those dealing with hemorrhoids and related discomfort.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Igboya Difference</h2>
        <p className="mb-4">
          What sets Igboya Bitters apart is our unwavering commitment to quality and authenticity. We source only the finest natural herbs, ensuring that each bottle delivers the full spectrum of benefits that nature intended. Our traditional preparation methods preserve the potency and effectiveness of these time-tested remedies.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Experience Wellness Naturally</h2>
        <p className="mb-4">
          Igboya Bitters isn't just a drink – it's a daily wellness ritual that connects you to the healing power of nature. Whether you're seeking to boost your immune system, cleanse your body, or address specific health concerns, our carefully crafted herbal blend offers a natural path to better health.
        </p>
        <p className="font-bold">
          Embrace the wisdom of traditional herbal medicine with Igboya Bitters – where nature meets wellness in every bottle.
        </p>
      </div>

      {/* How to Use Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
              How to Use Igboya Bitters
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Follow these simple guidelines to get the most benefit from your Igboya Bitters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Measure Carefully</h3>
              <p className="text-gray-300">
                Use 30ml (approximately 2 tablespoons) of Igboya Bitters per serving. Use the cap as a measuring guide.
              </p>
            </div>

            <div
              className="text-center p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Time to Take</h3>
              <p className="text-gray-300">
                For optimal results, take Igboya Bitters in the morning before breakfast or in the evening before dinner.
              </p>
            </div>

            <div
              className="text-center p-6 bg-gray-800 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Consistency is Key</h3>
              <p className="text-gray-300">
                For best results, use Igboya Bitters regularly as part of your daily wellness routine.
              </p>
            </div>
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
            <Link to="/products" className="btn btn-gold">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <Benefits />

      <div className="w-full">
        <img
          src="/images/igboya-bitters.jpeg"
          alt="Igboya Bitters"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  )
}

export default IgboyaBittersPage