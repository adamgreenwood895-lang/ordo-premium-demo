export default function CategoryGrid({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={`category-card ${activeCategory === cat.key ? 'active' : ''}`}
          onClick={() => onSelect(cat.key)}
          style={{ '--accent': cat.accent }}
        >
          <div className="category-label">{cat.label}</div>
          <div className="category-subtitle">{cat.subtitle}</div>
        </button>
      ))}
    </div>
  )
}
