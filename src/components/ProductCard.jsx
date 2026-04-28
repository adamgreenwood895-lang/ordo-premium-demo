export default function ProductCard({ product, onGetIt, onTrack }) {
  return (
    <article className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="product-copy">
        <div className="product-brand">{product.brand}</div>
        <h2 className="product-name">{product.name}</h2>
        <div className="product-price">£{product.price}</div>
        <div className="product-delivery">{product.delivery}</div>
        <div className="product-actions">
          <button className="primary-button small" onClick={onGetIt}>Get it</button>
          <button className="secondary-button small" onClick={onTrack}>Track</button>
        </div>
      </div>
    </article>
  )
}
