function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,#e2e8f0,transparent),radial-gradient(800px_400px_at_110%_-20%,#c7d2fe,transparent)] opacity-70" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Elevate your everyday. Nova clothing.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Modern essentials designed for comfort and confidence. Shop signature tees, performance hoodies, and minimalist accessories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#catalog" className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white hover:opacity-90">Shop bestsellers</a>
              <a href="#categories" className="inline-flex items-center px-6 py-3 rounded-full border border-slate-300 hover:bg-white">Explore categories</a>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-2xl shadow-2xl w-full object-cover" src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop" alt="Nova apparel" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-white shadow-xl hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
