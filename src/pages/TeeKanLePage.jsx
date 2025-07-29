import React from 'react';

const TeeKanLePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-gold-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Tee KAN LE Herbal Mixture</h1>
        <p className="text-xl mt-2">(Knack Am Down)</p>
        <p className="text-2xl mt-4">Premium Non-Alcoholic Herbal Wellness Drink</p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <p className="text-center text-2xl mb-12">…….Awaken Your Vitality, Excite Your Taste Buds</p>

        <section className="mb-16">
          <p className="text-lg leading-relaxed mb-6">
            Experience the extraordinary fusion of traditional herbal wisdom and modern wellness with Tee KAN LE Herbal Mixture – the revolutionary non-alcoholic herbal drink that's transforming lives across the nation. This meticulously crafted blend doesn't just tantalize your taste buds; it delivers a powerhouse of natural immune boost that your body craves.
          </p>
          <h2 className="text-3xl font-bold text-center mb-8">A Symphony of Natural Healing</h2>
          <p className="text-lg leading-relaxed">
            Tee KAN LE is more than just a drink – it's your daily passport to optimal health and vitality. Each bottle contains a carefully balanced fusion of premium herbal extracts, specifically formulated to work in harmony with your body's natural processes.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comprehensive Health Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">🌿 Complete Body Detoxification</h3>
              <ul className="list-disc list-inside">
                <li>Deep cleanses vital organs including liver, kidneys, and digestive system</li>
                <li>Eliminates harmful toxins accumulated from daily exposure</li>
                <li>Promotes cellular regeneration and organ optimization</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">💪 Enhanced Male Vitality</h3>
              <ul className="list-disc list-inside">
                <li>Naturally supports healthy blood circulation</li>
                <li>Addresses erectile dysfunction in a single dose</li>
                <li>Restores confidence and masculine energy</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">🛡️ Immune System Fortification</h3>
              <ul className="list-disc list-inside">
                <li>Strengthens your body's natural defense mechanisms</li>
                <li>Provides essential antioxidants and nutrients</li>
                <li>Builds resistance against common ailments and infections</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md col-span-full lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">✨ Additional Medicinal Values</h3>
              <ul className="list-disc list-inside">
                <li>Improves energy levels and reduces fatigue</li>
                <li>Supports healthy metabolism and digestive function</li>
                <li>Enhances mental clarity and focus</li>
                <li>Balances hormones naturally</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Premium Quality Assurance</h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6">
            Every bottle of Tee KAN LE undergoes rigorous quality control to ensure you receive:
          </p>
          <ul className="text-lg text-center space-y-2">
            <li>100% natural herbal ingredients</li>
            <li>No artificial preservatives or harmful chemicals</li>
            <li>Optimal potency and effectiveness</li>
            <li>Safe, non-alcoholic formulation suitable for daily consumption</li>
          </ul>
        </section>

        <section className="bg-gold-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Usage Instructions</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">📋 Recommended Dosage:</h3>
              <ul className="list-disc list-inside">
                <li>One (1) bottle per day for optimal results</li>
                <li>Shake well before drinking to ensure proper ingredient distribution</li>
                <li>Take at least one hour before intimate activities for maximum effectiveness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">⏰ Best Practice Tips:</h3>
              <p>Store in a cool, dry place away from direct sunlight</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">The Tee KAN LE Difference</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Unlike synthetic supplements that may cause unwanted side effects, Tee KAN LE harnesses the gentle yet powerful healing properties of nature. Our unique "Knack Am Down" formula has been developed through extensive research into traditional herbal medicine, creating a modern solution that respects ancient wisdom while delivering contemporary results.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Journey to Wellness Starts Here</h2>
          <p className="text-xl mb-8">
            Don't let fatigue, poor health, or diminished vitality hold you back from living your best life. Tee KAN LE Herbal Mixture offers you a natural pathway to renewed energy, enhanced performance, and comprehensive wellness.
          </p>
          <p className="text-2xl font-semibold">Experience the transformation. Taste the difference. Feel the power.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>Tee KAN LE Herbal Mixture – Where Traditional Wisdom Meets Modern Wellness</p>
      </footer>
    </div>
  );
};

export default TeeKanLePage;
