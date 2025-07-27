import React from 'react'

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Igboya Bitters: Nature's Premium Herbal Blend</h1>
      <p className="text-xl text-center text-gray-600 mb-8">Discover the Power of Traditional Wellness</p>

      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <p className="text-lg">
            Igboya Bitters represents the perfect marriage of time-honored herbal wisdom and modern craftsmanship. This premium alcoholic herbal drink is meticulously crafted from a carefully curated selection of natural herbs, each chosen for their unique therapeutic properties and centuries of traditional use.
          </p>
          <p className="text-lg mt-4">
            Igboya Bitters combines ancient herbal traditions with modern wellness science. Crafted from premium natural ingredients for health and vitality.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Artfully Blended for Maximum Potency</h2>
          <p className="text-lg">
            Our master blenders have spent years perfecting the precise combination of natural herbs that make Igboya Bitters truly exceptional. Every bottle contains a harmonious blend of potent botanicals, expertly balanced to deliver both exceptional taste and comprehensive wellness benefits.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Comprehensive Health Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Immune System Support</h3>
              <p>Strengthen your body's natural defenses with our powerful blend of immune-boosting herbs. Regular consumption helps fortify your system against common ailments and seasonal challenges.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Natural Body Cleanser</h3>
              <p>Experience the purifying power of nature as Igboya Bitters works to cleanse and detoxify your system, promoting overall vitality and well-being.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Fertility Enhancement</h3>
              <p>Traditional herbs known for their fertility-supporting properties have been carefully incorporated to support reproductive health naturally.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Pain Management Solutions</h3>
              <ul className="list-disc list-inside">
                <li>Back Ache Relief: Find comfort from persistent back pain with our targeted herbal formula</li>
                <li>Waist Pain Remedy: Address lower back and waist discomfort naturally</li>
                <li>Menstrual Pain Relief: Gentle yet effective support for women's monthly comfort</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Digestive Health Support</h3>
              <p>Our specially selected herbs also provide relief for digestive concerns, including support for those dealing with hemorrhoids and related discomfort.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">The Igboya Difference</h2>
          <p className="text-lg">
            What sets Igboya Bitters apart is our unwavering commitment to quality and authenticity. We source only the finest natural herbs, ensuring that each bottle delivers the full spectrum of benefits that nature intended. Our traditional preparation methods preserve the potency and effectiveness of these time-tested remedies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Experience Wellness Naturally</h2>
          <p className="text-lg">
            Igboya Bitters isn't just a drink – it's a daily wellness ritual that connects you to the healing power of nature. Whether you're seeking to boost your immune system, cleanse your body, or address specific health concerns, our carefully crafted herbal blend offers a natural path to better health.
          </p>
        </section>

        <section className="text-center">
          <p className="text-xl font-semibold">
            Embrace the wisdom of traditional herbal medicine with Igboya Bitters – where nature meets wellness in every bottle.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutPage