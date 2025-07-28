// Product Images

import productImg1 from '../assets/bold gin.jpeg'
import productImg2 from '../assets/splendor bitters.jpeg'
import productImg3 from '../assets/splendor liquer.jpeg'
import productImg4 from '../assets/yatch chocolate vodka.jpeg'
import productImg5 from '../assets/yatchgin.jpeg'

export const products = [
  {
    id: 1,
    name: 'Bold Gin',
    shortDescription: 'Our flagship premium herbal bitters in 750ml size.',
    fullDescription: 'Igboya Bitters combines the power of traditional Nigerian herbs with modern production techniques. Our flagship 750ml bottle contains our premium formula, crafted from a blend of roots, herbs and spices sourced from across Nigeria. This potent elixir supports digestive health, boosts immunity, and provides natural energy.',
    price: 4500,
    discount: 0,
    category: 'premium',
    image: productImg1,
    gallery: [productImg1, productImg2, productImg3],
    featured: true,
    isNew: false,
    rating: 5,
    reviews: 124,
    stock: 50,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Supports digestive health',
      'Boosts immune system',
      'Enhances energy levels',
      'Improves blood circulation',
      'Helps with stress management'
    ]
  },
  {
    id: 2,
    name: 'Splendor Bitters',
    shortDescription: 'Medium-sized bottle of our premium herbal formula.',
    fullDescription: 'The perfect size for first-time users or those who want a more portable option. Our 375ml bottle contains the same powerful blend of traditional Nigerian herbs known to support overall wellness. Each sip delivers a perfect balance of bitter and sweet notes, with the full therapeutic benefits of our proprietary formula.',
    price: 2500,
    discount: 10,
    category: 'standard',
    image: productImg2,
    gallery: [productImg2, productImg1, productImg3],
    featured: true,
    isNew: false,
    rating: 4.5,
    reviews: 86,
    stock: 35,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Supports digestive health',
      'Boosts immune system',
      'Enhances energy levels',
      'Improves blood circulation'
    ]
  },
  {
    id: 3,
    name: 'Splendor Liquer',
    shortDescription: 'Convenient travel-sized bottle of our herbal bitters.',
    fullDescription: 'Our 200ml bottle is perfect for travel or for those who want to try our product before committing to a larger size. Despite its small size, it packs the full potency of our traditional formula. This travel-friendly option ensures you never have to miss your daily dose of wellness, even when on the go.',
    price: 1500,
    discount: 0,
    category: 'travel',
    image: productImg3,
    gallery: [productImg3, productImg1, productImg2],
    featured: true,
    isNew: false,
    rating: 4,
    reviews: 52,
    stock: 20,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Supports digestive health',
      'Boosts immune system',
      'Enhances energy levels'
    ]
  },
  {
    id: 4,
    name: 'Yatch Chocolate Vodka',
    shortDescription: 'Our premium bitters with an extra touch of natural honey.',
    fullDescription: 'For those who prefer a sweeter taste profile, our Honey Infused variant combines our traditional herbal formula with an extra measure of pure Nigerian honey. This special blend offers the same health benefits as our classic formula but with a smoother taste that appeals to those new to herbal bitters. The 750ml bottle is perfect for regular users.',
    price: 5000,
    discount: 0,
    category: 'premium',
    image: productImg4,
    gallery: [productImg4, productImg1, productImg3],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 38,
    stock: 15,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Extra Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Smoother taste profile',
      'Supports digestive health',
      'Boosts immune system',
      'Enhances energy levels',
      'Improves blood circulation',
      'Natural antioxidant properties'
    ]
  },
  {
    id: 5,
    name: 'Yatch Gin',
    shortDescription: 'Special bundle of 750ml, 375ml, and 200ml bottles.',
    fullDescription: 'The perfect introduction to Igboya Bitters for the whole family. This special pack includes our three most popular sizes (750ml, 375ml, and 200ml), allowing different family members to enjoy our premium herbal formula according to their needs. Save money with this bundle while ensuring everyone in your household can experience the benefits of traditional Nigerian herbal medicine.',
    price: 7500,
    discount: 15,
    category: 'bundle',
    image: productImg5,
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
    ]
  },
  {
    id: 6,
    name: 'Igboya Bitters - Ginger Boost 375ml',
    shortDescription: 'Special formula with extra ginger for enhanced benefits.',
    fullDescription: 'Our Ginger Boost variant contains an extra concentration of ginger extract, known for its powerful anti-inflammatory and digestive properties. This special 375ml bottle delivers an intensified warming sensation and is especially popular during cold weather or when experiencing digestive discomfort. The enhanced ginger provides additional circulatory benefits while maintaining our traditional flavor profile.',
    price: 3000,
    discount: 0,
    category: 'specialty',
    image: productImg2,
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
    ]
  },
  {
    id: 7,
    name: 'Igboya Bitters - Monthly Supply',
    shortDescription: 'One-month supply pack with daily recommended servings.',
    fullDescription: 'Our Monthly Supply pack is designed for regular users who want to ensure they never run out of their daily Igboya Bitters. This special package includes enough of our premium formula to last 30 days when taken at the recommended daily serving. The convenient packaging includes a measuring cup to ensure proper dosage, and comes with a special guidebook on maximizing the benefits of herbal bitters.',
    price: 9000,
    discount: 20,
    category: 'bundle',
    image: productImg3,
    gallery: [productImg3, productImg1, productImg4],
    featured: false,
    isNew: false,
    rating: 5,
    reviews: 42,
    stock: 8,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
      'Convenient monthly supply',
      'Includes measuring cup',
      'Great value package',
      'Consistent daily wellness support',
      'Includes usage guidebook'
    ]
  },
  {
    id: 8,
    name: 'Igboya Bitters - Gift Set',
    shortDescription: 'Premium gift box with 750ml bottle and ceremonial cup.',
    fullDescription: 'Our special Gift Set is the perfect present for those who appreciate traditional Nigerian culture and natural wellness. The elegantly designed box contains our premium 750ml bottle alongside a handcrafted ceremonial wooden cup. This special set also includes a beautifully illustrated booklet detailing the history and cultural significance of herbal bitters in Nigerian traditions, making it not just a gift of wellness but also of heritage.',
    price: 8500,
    discount: 0,
    category: 'premium',
    image: productImg4,
    gallery: [productImg4, productImg1, productImg2],
    featured: false,
    isNew: true,
    rating: 5,
    reviews: 31,
    stock: 12,
    ingredients: [
      'Bitter Kola',
      'Aloe Vera',
      'Garlic Extract',
      'Ginger Root',
      'Honey',
      'Traditional Herbs'
    ],
    benefits: [
.      'Elegant gift presentation',
      'Includes ceremonial wooden cup',
      'Cultural information booklet',
      'Premium wellness experience',
      'Celebrates Nigerian heritage'
    ]
  },
  {
    id: 9,

    name: 'Tee KAN LE Herbal Mixture',
    shortDescription: 'Premium Non-Alcoholic Herbal Wellness Drink.',
    fullDescription: 'Experience the extraordinary fusion of traditional herbal wisdom and modern wellness with Tee KAN LE Herbal Mixture – the revolutionary non-alcoholic herbal drink that\'s transforming lives across the nation. This meticulously crafted blend doesn\'t just tantalize your taste buds; it delivers a powerhouse of natural immune boost that your body craves.',
    price: 6000,
    discount: 0,
    category: 'premium',
    image: productImg1,
    gallery: [productImg1, productImg2, productImg3],
    featured: true,
    isNew: true,
    rating: 5,
    reviews: 0,
    stock: 20,
    ingredients: [
      'Traditional Herbs',
      'Natural extracts'
    ],
    benefits: [
      'Complete Body Detoxification',
      'Enhanced Male Vitality',
      'Immune System Fortification',
      'Improves energy levels and reduces fatigue',
      'Supports healthy metabolism and digestive function',
      'Enhances mental clarity and focus',
      'Balances hormones naturally'
    ]
  }
]