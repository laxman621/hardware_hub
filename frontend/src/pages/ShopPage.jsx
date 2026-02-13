import React, { useState } from 'react'

const categories = [
  'Power Tools',
  'Hand Tools',
  'Fasteners',
  'Safety Gear',
  'Electrical',
  'Plumbing',
  'Workshop',
]

const ratings = [5, 4, 3]

const products = [
  {
    id: 1,
    name: 'Titan 18V Brushless Drill Kit',
    tag: 'Best Seller',
    price: 189.0,
    rating: 5,
    reviews: 1328,
    ship: 'Free next-day',
  },
  {
    id: 2,
    name: 'ForgeMax 7-1/4 in Circular Saw',
    tag: 'Limited Deal',
    price: 139.0,
    rating: 4,
    reviews: 842,
    ship: 'Free delivery',
  },
  {
    id: 3,
    name: 'Impact Driver + Bit Set (42 pcs)',
    tag: 'Bundle',
    price: 99.0,
    rating: 4,
    reviews: 514,
    ship: 'Ships today',
  },
  {
    id: 4,
    name: 'ProSteel Socket Set 1/4"-1/2"',
    tag: 'Prime',
    price: 74.5,
    rating: 5,
    reviews: 976,
    ship: 'Free delivery',
  },
  {
    id: 5,
    name: 'ArcShield Safety Goggles (2 pack)',
    tag: 'Prime',
    price: 18.99,
    rating: 4,
    reviews: 260,
    ship: 'Free delivery',
  },
  {
    id: 6,
    name: 'Precision Multimeter 6000 Count',
    tag: 'Pro Pick',
    price: 58.0,
    rating: 4,
    reviews: 311,
    ship: 'Ships today',
  },
  {
    id: 7,
    name: 'RapidGrip Pipe Wrench 14 in',
    tag: 'Prime',
    price: 24.5,
    rating: 3,
    reviews: 198,
    ship: 'Free delivery',
  },
  {
    id: 8,
    name: 'Wall Organizer + 30 Bins',
    tag: 'Workshop',
    price: 89.0,
    rating: 4,
    reviews: 455,
    ship: 'Free delivery',
  },
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="px-5 sm:px-8 lg:px-14 py-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 sm:px-10 sm:py-12 text-white">
        <div className="absolute -top-24 -right-20 h-60 w-60 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative z-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">HardwareHub Marketplace</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Shop pro-grade hardware like the big marketplaces
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-200">
              Bulk pricing, fast fulfillment, and category filters built for contractors, makers, and teams.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-slate-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <form
            className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search tools, brands, or SKUs"
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none"
            />
            {searchQuery.length > 0 && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="rounded-lg border border-slate-300 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="ml-auto rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-white"
              disabled={searchQuery.trim().length === 0}
            >
              GO
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <select
                className="appearance-none rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                defaultValue="most-popular"
              >
                <option value="most-popular">Most popular</option>
                <option value="top-rated">Top rated</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="newest">Newest arrivals</option>
              </select>
            </div>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Delivery: Tomorrow
            </button>
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Filters</h2>
            <button className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Reset</button>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Categories</p>
            <div className="mt-3 grid gap-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  <span className="text-slate-700">{category}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">Hot</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Rating</p>
            <div className="mt-3 grid gap-2">
              {ratings.map((rating) => (
                <label
                  key={rating}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  <span className="text-slate-700">{rating} stars & up</span>
                  <span className="text-amber-500">{'★★★★★'.slice(0, rating)}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Price range</p>
            <div className="mt-3 rounded-2xl border border-slate-200 px-4 py-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>$0</span>
                <span>$500+</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                defaultValue="250"
                className="mt-3 w-full accent-slate-900"
              />
              <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                <span>Up to $250</span>
                <button className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </aside>

        <section>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Trending hardware</h2>
            <p className="text-sm text-slate-500">128 results • updated daily</p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 p-6">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                    {product.tag}
                  </span>
                  <div className="mt-6 h-28 w-full rounded-2xl bg-gradient-to-br from-slate-300 to-slate-100" />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <span className="text-amber-500">{'★★★★★'.slice(0, product.rating)}</span>
                    <span>({product.reviews})</span>
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">
                        {product.ship}
                      </p>
                    </div>
                    <button className="rounded-2xl bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition group-hover:-translate-y-0.5">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
