import hoodie1 from '../assets/hoodie-1.jpg'
import hoodie2 from '../assets/hoodie-2.jpg'
import tee1 from '../assets/tee-1.jpg'
import tee2 from '../assets/tee-2.jpg'
import bag1 from '../assets/bag-1.jpg'
import bag2 from '../assets/bag-2.jpg'
import track1 from '../assets/track-1.jpg'
import track2 from '../assets/track-2.jpg'

export const categories = [
  { key: 'hoodys', label: 'Hoodys', subtitle: 'Heavyweight streetwear', accent: '#56b8ff' },
  { key: 'tshirts', label: 'Tshirts', subtitle: 'Premium everyday basics', accent: '#7c6dff' },
  { key: 'bags', label: 'Bags', subtitle: 'Utility with luxury feel', accent: '#5effc8' },
  { key: 'tracksuits', label: 'Tracksuits', subtitle: 'Matching sets', accent: '#ff6dc8' }
]

export const products = [
  {
    id: 1,
    category: 'hoodys',
    brand: 'Ordo',
    name: 'Shadow Cloud Hoodie',
    price: 74,
    delivery: 'Arrives tomorrow',
    image: hoodie1
  },
  {
    id: 2,
    category: 'hoodys',
    brand: 'Ordo',
    name: 'Midnight Core Hoodie',
    price: 82,
    delivery: 'Arrives tomorrow',
    image: hoodie2
  },
  {
    id: 3,
    category: 'tshirts',
    brand: 'Ordo',
    name: 'Ultra Soft Tee',
    price: 34,
    delivery: 'Arrives in 2 days',
    image: tee1
  },
  {
    id: 4,
    category: 'tshirts',
    brand: 'Ordo',
    name: 'Studio Fit Tee',
    price: 39,
    delivery: 'Arrives tomorrow',
    image: tee2
  },
  {
    id: 5,
    category: 'bags',
    brand: 'Ordo',
    name: 'Transit Sling Bag',
    price: 58,
    delivery: 'Arrives tomorrow',
    image: bag1
  },
  {
    id: 6,
    category: 'bags',
    brand: 'Ordo',
    name: 'Urban Carry Tote',
    price: 66,
    delivery: 'Arrives in 2 days',
    image: bag2
  },
  {
    id: 7,
    category: 'tracksuits',
    brand: 'Ordo',
    name: 'Velocity Tracksuit',
    price: 96,
    delivery: 'Arrives tomorrow',
    image: track1
  },
  {
    id: 8,
    category: 'tracksuits',
    brand: 'Ordo',
    name: 'Aero Set',
    price: 110,
    delivery: 'Arrives tomorrow',
    image: track2
  }
]
