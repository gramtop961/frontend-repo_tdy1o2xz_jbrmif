import { ShoppingCart, Search, Menu } from "lucide-react"

function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
          <a href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-slate-900 text-white grid place-items-center font-bold">N</div>
            <span className="text-xl font-semibold tracking-tight">Nova</span>
          </a>
        </div>
        <div className="hidden md:flex items-center max-w-md w-full">
          <div className="relative w-full">
            <input
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Search for tees, hoodies, accessories..."
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onCartClick} className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white hover:opacity-90">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-rose-500 text-white w-5 h-5 rounded-full grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
