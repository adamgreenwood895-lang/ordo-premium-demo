export default function PaymentScreen({ product, onBack }) {
  return (
    <section className="screen payment-shell">
      <div className="top-row">
        <button className="icon-button" onClick={onBack}>←</button>
        <div className="screen-title">Payment</div>
        <div style={{ width: 36 }} />
      </div>

      <div className="payment-card">
        <div className="payment-glow" />
        <div className="payment-row">
          <div className="payment-product">
            <div
              className="payment-image"
              style={{ backgroundImage: `url(${product.image})` }}
            />
          </div>
          <div className="payment-info">
            <div className="payment-brand">{product.brand}</div>
            <div className="payment-name">{product.name}</div>
            <div className="payment-price">£{product.price}</div>
          </div>
        </div>

        <div className="payment-box">
          <div className="payment-line"><span>Subtotal</span><span>£{product.price}</span></div>
          <div className="payment-line"><span>Delivery</span><span>Free</span></div>
          <div className="payment-line total"><span>Total</span><span>£{product.price}</span></div>
        </div>

        <button className="primary-button">Complete purchase</button>
      </div>
    </section>
  )
}
