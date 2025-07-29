// Product Images
import productImg1 from '../assets/product-1.jpg'
import productImg2 from '../assets/product-2.jpg'
import productImg3 from '../assets/product-3.jpg'
import productImg4 from '../assets/product-4.jpg'

export const products = [
  {
    id: 1,
    name: 'Igboya Bitters - 750ml',
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
    name: 'Igboya Bitters - 375ml',
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
    name: 'Igboya Bitters - 200ml',
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
    name: 'Igboya Bitters - Honey Infused 750ml',
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
  }
]