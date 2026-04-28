import { useMemo, useState } from 'react'
import { categories, products } from './data/products'
import VoiceScreen from './components/VoiceScreen'
import CategoryGrid from './components/CategoryGrid'
import ProductCard from './components/ProductCard'
import TrackingScreen from './components/TrackingScreen'
import PaymentScreen from './components/PaymentScreen'
import Modal from './components/Modal'

export default function App() {
  const [stage, setStage] = useState('voice')
  const [activeCategory, setActiveCategory] = useState('hoodys')
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const primaryProduct = filtered[0] || products[0]

  const openProduct = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  if (stage === 'tracking') {
    return (
      <TrackingScreen
        product={selectedProduct}
        onBack={() => setStage('results')}
        onPay={() => setStage('payment')}
      />
    )
  }

  if (stage === 'payment') {
    return (
      <PaymentScreen
        product={selectedProduct}
        onBack={() => setStage('tracking')}
      />
    )
  }

  if (stage === 'results') {
    return (
      <section className="screen results-shell">
        <div className="top-row">
          <button className="icon-button" onClick={() => setStage('voice')}>←</button>
          <div className="screen-title">Best options</div>
          <div style={{ width: 36 }} />
        </div>

        <CategoryGrid
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <ProductCard
          product={primaryProduct}
          onGetIt={() => {
            setSelectedProduct(primaryProduct)
            setStage('tracking')
          }}
          onTrack={() => {
            setSelectedProduct(primaryProduct)
            setStage('tracking')
          }}
        />

        <div className="product-list">
          {filtered.map((product) => (
            <button
              key={product.id}
              className={`list-item ${selectedProduct.id === product.id ? 'active' : ''}`}
              onClick={() => openProduct(product)}
            >
              <span>{product.name}</span>
              <span>£{product.price}</span>
            </button>
          ))}
        </div>

        <Modal
          open={modalOpen}
          title={selectedProduct.name}
          onClose={() => setModalOpen(false)}
        >
          <div className="modal-product">
            <div
              className="modal-image"
              style={{ backgroundImage: `url(${selectedProduct.image})` }}
            />
            <div className="modal-copy">
              <p>{selectedProduct.brand}</p>
              <p>{selectedProduct.delivery}</p>
              <p>Price: £{selectedProduct.price}</p>
              <button
                className="primary-button small"
                onClick={() => {
                  setModalOpen(false)
                  setStage('tracking')
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </Modal>
      </section>
    )
  }

  return (
    <main className="app">
      <VoiceScreen onDemoSearch={() => setStage('results')} />
    </main>
  )
        }
