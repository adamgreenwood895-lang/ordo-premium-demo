export default function TrackingScreen({ product, onBack, onPay }) {
  return (
    <section className="screen tracking-shell">
      <div className="top-row">
        <button className="icon-button" onClick={onBack}>←</button>
        <div className="screen-title">On its way</div>
        <div style={{ width: 36 }} />
      </div>

      <div className="tracking-card">
        <div className="tracking-product">
          <div
            className="tracking-image"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div>
            <div className="tracking-name">{product.name}</div>
            <div className="tracking-price">£{product.price}</div>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item done"><span className="dot" /><span>Order Confirmed</span></div>
          <div className="timeline-item done"><span className="dot" /><span>Packed</span></div>
          <div className="timeline-item active"><span className="dot" /><span>Out for Delivery</span></div>
          <div className="timeline-item"><span className="dot" /><span>Arrives tomorrow</span></div>
        </div>

        <div className="tracking-note">
          Your order is on its way and will arrive tomorrow.
        </div>

        <div className="product-actions">
          <button className="primary-button small" onClick={onPay}>Pay now</button>
          <button className="secondary-button small" onClick={onBack}>Done</button>
        </div>
      </div>
    </section>
  )
}
