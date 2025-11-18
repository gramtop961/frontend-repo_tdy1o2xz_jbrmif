import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart])
  const cartTotal = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.quantity, 0), [cart])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${backend}/api/products`)
        if (res.ok) {
          const data = await res.json()
          if (data.length === 0) {
            // seed if empty
            await fetch(`${backend}/api/seed`)
            const res2 = await fetch(`${backend}/api/products`)
            const data2 = await res2.json()
            setProducts(data2)
          } else {
            setProducts(data)
          }
        } else {
          throw new Error('Failed to load products')
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, image: product.images?.[0], quantity: 1 }]
    })
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id))
  const updateQty = (id, qty) => setCart((prev) => prev.map((i) => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i))

  const checkout = async () => {
    if (cart.length === 0) return
    const order = {
      items: cart.map(c => ({ product_id: c.id, title: c.title, price: c.price, quantity: c.quantity, image: c.image })),
      customer: {
        name: 'Guest', email: 'guest@example.com', address_line1: '123 Main St', city: 'San Francisco', state: 'CA', postal_code: '94105', country: 'US'
      },
      subtotal: cartTotal,
      shipping: cartTotal > 75 ? 0 : 6,
      total: cartTotal > 75 ? cartTotal : cartTotal + 6,
      status: 'pending'
    }
    const res = await fetch(`${backend}/api/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(order) })
    if (res.ok) {
      const data = await res.json()
      alert(`Order placed! Order id: ${data.id}`)
      setCart([])
    } else {
      alert('Failed to place order')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar cartCount={cartCount} onCartClick={checkout} />
      <Hero />

      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured products</h2>
          <div className="text-sm text-slate-500">{products.length} items</div>
        </div>

        {loading && <div className="py-10 text-center text-slate-600">Loading products…</div>}
        {error && <div className="py-10 text-center text-rose-600">{error}</div>}

        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        )}

        {/* Cart summary */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Cart</div>
              <div className="text-slate-600 text-sm">{cartCount} items</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold">${cartTotal.toFixed(2)}</div>
              <div className="text-xs text-slate-500">Free shipping over $75</div>
            </div>
          </div>
          {cart.length > 0 && (
            <div className="mt-4 divide-y">
              {cart.map(item => (
                <div key={item.id} className="py-3 flex items-center gap-4">
                  <img src={item.image} className="w-14 h-14 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-slate-600">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" min={1} value={item.quantity} onChange={(e)=>updateQty(item.id, Number(e.target.value))} className="w-16 border rounded px-2 py-1" />
                    <button className="text-slate-500 hover:text-rose-600" onClick={()=>removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <button onClick={checkout} className="px-5 py-2 rounded-lg bg-slate-900 text-white hover:opacity-90 disabled:opacity-50" disabled={cart.length===0}>
              Checkout
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
