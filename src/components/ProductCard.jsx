function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden bg-slate-50">
        <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-900 line-clamp-1">{product.title}</h3>
          <span className="font-semibold text-slate-900">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">{product.category}</span>
          <button onClick={() => onAdd(product)} className="px-3 py-1.5 text-sm rounded-full bg-slate-900 text-white hover:opacity-90">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
