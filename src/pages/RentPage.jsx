import React from 'react'

const equipmentCategories = [
  'Power Tools',
  'Scaffolding',
  'Cutting & Grinding',
  'Generators',
  'Concrete & Masonry',
  'Lifts & Ladders',
]

const availabilityFilters = [
  { label: 'Available today', count: 24 },
  { label: 'Next-day pickup', count: 18 },
  { label: 'Limited stock', count: 8 },
]

const rentalItems = [
  {
    id: 1,
    name: 'Industrial Core Drill Kit',
    rate: 58,
    unit: 'day',
    deposit: 200,
    availability: 'Available today',
  },
  {
    id: 2,
    name: 'Scaffold Tower (6 ft)',
    rate: 42,
    unit: 'day',
    deposit: 150,
    availability: 'Next-day pickup',
  },
  {
    id: 3,
    name: 'Tile Cutter Pro 48 in',
    rate: 36,
    unit: 'day',
    deposit: 120,
    availability: 'Available today',
  },
  {
    id: 4,
    name: 'Generator 6500W',
    rate: 65,
    unit: 'day',
    deposit: 250,
    availability: 'Limited stock',
  },
]

const steps = [
  {
    title: 'Reserve online',
    desc: 'Pick dates, add delivery, and lock inventory instantly.',
  },
  {
    title: 'Confirm pickup',
    desc: 'Skip the counter with QR check-in and ready staging.',
  },
  {
    title: 'Return or extend',
    desc: 'Extend on the fly or schedule a smooth return.',
  },
]

export default function RentPage() {
  return (
    <div className="px-5 sm:px-8 lg:px-14 py-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 sm:px-10 text-white">
        <div className="absolute -top-24 -right-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-100">Rentals</p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Rent heavy-duty gear on your schedule
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-amber-50">
            Daily, weekly, and project bundles with fast pickup or site delivery.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr_400px]">
        <aside className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Filters</h2>
            <button className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reset
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Equipment type</p>
            <div className="mt-3 grid gap-2">
              {equipmentCategories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
                >
                  <input type="checkbox" className="accent-slate-900" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Daily rate</p>
            <div className="mt-3 rounded-2xl border border-slate-200 px-4 py-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>$0</span>
                <span>$200+</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                defaultValue="100"
                className="mt-3 w-full accent-slate-900"
              />
              <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                <span>Up to $100</span>
                <button className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Availability</p>
            <div className="mt-3 grid gap-2">
              {availabilityFilters.map((filter) => (
                <label
                  key={filter.label}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  <span className="text-slate-700">{filter.label}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
                    {filter.count}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Popular rentals</h2>
              <p className="mt-1 text-sm text-slate-500">Most booked equipment for active job sites.</p>
            </div>
            <select
              className="appearance-none rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
              defaultValue="popular"
            >
              <option value="popular">Most popular</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="newest">Newest additions</option>
            </select>
          </div>
          <div className="mt-6 space-y-4">
            {rentalItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                      Deposit ${item.deposit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-slate-900">${item.rate}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">per {item.unit}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-emerald-600">{item.availability}</span>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Reserve
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-semibold">How rentals work</h2>
          <div className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-200">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/15 p-4">
            <p className="text-sm text-slate-200">Need a long-term quote?</p>
            <button className="mt-3 w-full rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Request proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
