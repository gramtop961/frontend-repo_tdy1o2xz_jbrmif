function Footer(){
  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="w-10 h-10 rounded bg-slate-900 text-white grid place-items-center font-bold">N</div>
          <p className="mt-3 text-slate-600">Minimal, comfortable essentials. Made to move with you.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#" className="hover:text-slate-900">T-Shirts</a></li>
            <li><a href="#" className="hover:text-slate-900">Hoodies</a></li>
            <li><a href="#" className="hover:text-slate-900">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#" className="hover:text-slate-900">About</a></li>
            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get updates</h4>
          <div className="flex gap-2">
            <input placeholder="Your email" className="flex-1 border border-slate-300 rounded-lg px-3 py-2" />
            <button className="px-4 rounded-lg bg-slate-900 text-white">Join</button>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-slate-500 text-xs">© {new Date().getFullYear()} Nova. All rights reserved.</div>
    </footer>
  )
}

export default Footer
