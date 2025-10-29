// Product Images
import productImg1 from '../assets/product-1.jpg'
import productImg2 from '../assets/product-2.jpg'
import productImg3 from '../assets/product-3.jpg'
import productImg4 from '../assets/product-4.jpg'
import productImg5 from '../assets/2.jpeg'
import productImg6 from '../assets/3.jpeg'
import productImg7 from '../assets/5.jpeg'
import teKanLeeImg from '../assets/t.jpeg'
import igboyaImg from '../assets/igboya.jpeg'
import yatchginImg from '../assets/yatchgin.jpeg'
import splendorLiquerImg from '../assets/SplendorLiquer.jpeg'
import splendorBittersImg from '../assets/splendor bitters.jpeg'
import yatchChocolateVodkaImg from '../assets/yatchvodka.jpeg'
import boldGinImg from '../assets/boldgin.jpeg'
import productImg375 from '../assets/375.jpeg'


export const products = [
  {
    id: 5,
    name: 'Igboya Bitters - Family Pack',
    shortDescription: 'Special bundle of 750ml, 375ml, and 200ml bottles.',
    fullDescription: 'The perfect introduction to Igboya Bitters for the whole family. This special pack includes our three most popular sizes (750ml, 375ml, and 200ml), allowing different family members to enjoy our premium herbal formula according to their needs. Save money with this bundle while ensuring everyone in your household can experience the benefits of traditional Nigerian herbal medicine.',
    price: 7500,
    discount: 0,
    category: 'bundle',
    tags: ['alcoholic', 'herbal'],
    image: productImg1,
    gallery: [productImg1, productImg2, productImg3],
    featured: false,
    isNew: false,
    rating: 4.5,
    reviews: 27,
    stock: 10,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Great value for families',
      'Supports digestive health',
      'Boosts immune system',
      'Enhances energy levels',
      'Improves blood circulation'
    ],
    clickable: true
  },
  {
    id: 6,
    name: 'Igboya Bitters - Ginger Boost 375ml',
    shortDescription: 'Special formula with extra ginger for enhanced benefits.',
    fullDescription: 'Our Ginger Boost variant contains an extra concentration of ginger extract, known for its powerful anti-inflammatory and digestive properties. This special 375ml bottle delivers an intensified warming sensation and is especially popular during cold weather or when experiencing digestive discomfort. The enhanced ginger provides additional circulatory benefits while maintaining our traditional flavor profile.',
    price: 3000,
    discount: 0,
    category: 'specialty',
    tags: ['alcoholic', 'herbal'],
    image: productImg375,
    gallery: [productImg2, productImg3, productImg4],
    featured: false,
    isNew: true,
    rating: 4.5,
    reviews: 19,
    stock: 25,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Extra Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Enhanced warming effect',
      'Stronger anti-inflammatory properties',
      'Superior digestive support',
      'Improved circulation',
      'Natural energy boost'
    ],
    clickable: true
  },
  {
    id: 10,
    name: 'Te Kan Lee',
    shortDescription: 'Awaken Your Vitality, Excite Your Taste Buds.',
    fullDescription: `…….Awaken Your Vitality, Excite Your Taste Buds Experience the extraordinary fusion of traditional herbal wisdom and modern wellness with Tee KAN LE Herbal Mixture – the revolutionary non-alcoholic herbal drink that's transforming lives across the nation. This meticulously crafted blend doesn't just tantalize your taste buds; it delivers a powerhouse of natural immune boost that your body craves. A Symphony of Natural Healing Tee KAN LE is more than just a drink – it's your daily passport to optimal health and vitality. Each bottle contains a carefully balanced fusion of premium herbal extracts, specifically formulated to work in harmony with your body's natural processes. Comprehensive Health Benefits 🌿 Complete Body Detoxification • Deep cleanses vital organs including liver, kidneys, and digestive system • Eliminates harmful toxins accumulated from daily exposure • Promotes cellular regeneration and organ optimization 💪 Enhanced Male Vitality • Naturally supports healthy blood circulation • Addresses erectile dysfunction in a single dose • Restores confidence and masculine energy 🛡️ Immune System Fortification • Strengthens your body's natural defense mechanisms • Provides essential antioxidants and nutrients • Builds resistance against common ailments and infections ✨ Additional Medicinal Values • Improves energy levels and reduces fatigue • Supports healthy metabolism and digestive function • Enhances mental clarity and focus • Balances hormones naturally Premium Quality Assurance Every bottle of Tee KAN LE undergoes rigorous quality control to ensure you receive: • 100% natural herbal ingredients • No artificial preservatives or harmful chemicals • Optimal potency and effectiveness • Safe, non-alcoholic formulation suitable for daily consumption Professional Usage Instructions 📋 Recommended Dosage: • One (1) bottle per day for optimal results • Shake well before drinking to ensure proper ingredient distribution • Take at least one hour before intimate activities for maximum effectiveness ⏰ Best Practice Tips: • Store in a cool, dry place away from direct sunlight The Tee KAN LE Difference Unlike synthetic supplements that may cause unwanted side effects, Tee KAN LE harnesses the gentle yet powerful healing properties of nature. Our unique "Knack Am Down" formula has been developed through extensive research into traditional herbal medicine, creating a modern solution that respects ancient wisdom while delivering contemporary results. Your Journey to Wellness Starts Here Don't let fatigue, poor health, or diminished vitality hold you back from living your best life. Tee KAN LE Herbal Mixture offers you a natural pathway to renewed energy, enhanced performance, and comprehensive wellness. Experience the transformation. Taste the difference. Feel the power. Tee KAN LE Herbal Mixture – Where Traditional Wisdom Meets Modern Wellness`,
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['non-alcoholic', 'herbal'],
    image: teKanLeeImg,
    gallery: [teKanLeeImg],
    featured: true,
    isNew: false,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 17,
    name: 'Combo',
    shortDescription: 'A new product.',
    fullDescription: 'A new product.',
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic'],
    image: productImg5,
    gallery: [productImg5],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: false
  },
  {
    id: 18,
    name: 'Combo 2',
    shortDescription: 'Another new product.',
    fullDescription: 'Another new product.',
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic'],
    image: productImg6,
    gallery: [productImg6],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: false
  },
  {
    id: 19,
    name: 'Igboya Bitters',
    shortDescription: "Nature's Premium Herbal Blend.",
    fullDescription: `Igboya Bitters: Nature's Premium Herbal Blend
Discover the Power of Traditional Wellness
Igboya Bitters represents the perfect marriage of time-honored herbal wisdom and modern craftsmanship. This premium alcoholic herbal drink is meticulously crafted from a carefully curated selection of natural herbs, each chosen for their unique therapeutic properties and centuries of traditional use.
Artfully Blended for Maximum Potency
Our master blenders have spent years perfecting the precise combination of natural herbs that make Igboya Bitters truly exceptional. Every bottle contains a harmonious blend of potent botanicals, expertly balanced to deliver both exceptional taste and comprehensive wellness benefits.
Comprehensive Health Benefits
Immune System Support
Strengthen your body's natural defenses with our powerful blend of immune-boosting herbs. Regular consumption helps fortify your system against common ailments and seasonal challenges.
Natural Body Cleanser
Experience the purifying power of nature as Igboya Bitters works to cleanse and detoxify your system, promoting overall vitality and well-being.
Fertility Enhancement
Traditional herbs known for their fertility-supporting properties have been carefully incorporated to support reproductive health naturally.
Pain Management Solutions
•	Back Ache Relief: Find comfort from persistent back pain with our targeted herbal formula
•	Waist Pain Remedy: Address lower back and waist discomfort naturally
•	Menstrual Pain Relief: Gentle yet effective support for women's monthly comfort
Digestive Health Support
Our specially selected herbs also provide relief for digestive concerns, including support for those dealing with hemorrhoids and related discomfort.
The Igboya Difference
What sets Igboya Bitters apart is our unwavering commitment to quality and authenticity. We source only the finest natural herbs, ensuring that each bottle delivers the full spectrum of benefits that nature intended. Our traditional preparation methods preserve the potency and effectiveness of these time-tested remedies.
Experience Wellness Naturally
Igboya Bitters isn't just a drink – it's a daily wellness ritual that connects you to the healing power of nature. Whether you're seeking to boost your immune system, cleanse your body, or address specific health concerns, our carefully crafted herbal blend offers a natural path to better health.
Embrace the wisdom of traditional herbal medicine with Igboya Bitters – where nature meets wellness in every bottle.`,
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic', 'herbal'],
    image: productImg7,
    gallery: [productImg7],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 21,
    name: 'Yatch Gin',
    shortDescription: 'A fine spirit.',
    fullDescription: 'A fine spirit.',
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic'],
    image: yatchginImg,
    gallery: [yatchginImg],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true,
    path: '/yatch-gin'
  },
  {
    id: 22,
    name: 'Splendor Liquer',
    shortDescription: 'A fine spirit.',
    fullDescription: 'A fine spirit.',
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic'],
    image: splendorLiquerImg,
    gallery: [splendorLiquerImg],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 23,
    name: 'Splendor Bitters',
    shortDescription: 'A fine spirit.',
    fullDescription: 'SPLENDOR BITTERS\nFor those who crave a taste that stands apart, this is your calling. Bold, exciting, and masterfully refined, Splendor Bitters delivers the perfect balance of intensity and satisfaction in every sip.\n\nSearching for an unbeatable taste of bitters?\nTry Splendor Bitters. This exceptional blend is infused with potent natural extracts that awaken your senses and leave a rich, lasting impression.\n\nCarefully crafted by the King of Bitters,\nEastwood Edwin Russ Distilleries & Food Ltd,\nSplendor Bitters embodies expertise, tradition, and the confidence of a brand that knows what true quality means.\n\nStrong in character. Unmatched in taste.\nAlways ready when you are…\n\nEnjoy the Beauty of Bitters on-the-GO.',
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic', 'herbal'],
    image: splendorBittersImg,
    gallery: [splendorBittersImg],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 24,
    name: 'Yatch Chocolate Vodka',
    shortDescription: 'A fine spirit.',
    fullDescription: 'A fine spirit.',
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic'],
    image: yatchChocolateVodkaImg,
    gallery: [yatchChocolateVodkaImg],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 25,
    name: 'Bold Gin',
    shortDescription: 'A fine spirit.',
    fullDescription: `BOLD GIN......Stir you BOLDness
An Original Native Masterpiece from Eastwood Edwin Russ Distilleries & Food Ltd

Introducing a spirit born from tradition and perfected with mastery. BOLD GIN is crafted from the finest natural African palm wine, meticulously distilled to preserve the rich character of our native roots while delivering a refined and exhilarating drinking experience.

Every drop carries the heartbeat of the motherland. The robust essence of palm wine is elevated by a careful blend of botanicals that awaken the senses. What emerges is a gin unlike any other: smooth yet daring, familiar yet exciting, proudly authentic.

This is not just a drink. It is a celebration of culture and craftsmanship. A tribute to the past, bottled for the future. BOLD GIN invites you to taste the story of our people, to savor the legacy in every sip, and to raise your glass to originality.

For the brave. The expressive. The ones who step forward with confidence and take life on their own terms.

BOLD GIN
Be Original. Be Untamed. Be Bold......stir your BOLDness`,
    price: 0,
    discount: 0,
    category: 'standard',
    tags: ['alcoholic'],
    image: boldGinImg,
    gallery: [boldGinImg],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 30,
    name: 'Eastwood Native GIn (From Palm WIne)',
    shortDescription: 'A fine spirit.',
    fullDescription: 'A fine spirit.',
    price: 0,
    discount: 0,
    category: 'eastwood',
    tags: ['alcoholic'],
    image: yatchginImg,
    gallery: [yatchginImg],
    featured: false,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  },
  {
    id: 31,
    name: 'Eastwood Liquer',
    shortDescription: 'A fine spirit.',
    fullDescription: 'A fine spirit.',
    price: 0,
    discount: 0,
    category: 'eastwood',
    tags: ['alcoholic'],
    image: yatchginImg,
    gallery: [yatchginImg],
    featured: false,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 10,
    ingredients: [],
    benefits: [],
    clickable: true
  }
]