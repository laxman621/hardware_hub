import React from 'react'

const serviceCategories = [
  'Delivery & Logistics',
  'Calibration & Testing',
  'Inventory Management',
  'Training & Safety',
  'Maintenance & Repair',
  'Consulting',
]

const responseTimeFilters = [
  { label: 'Same-day service', count: 12 },
  { label: '24-48 hour SLA', count: 18 },
  { label: 'Scheduled service', count: 22 },
]

const serviceCards = [
  {
    id: 1,
    title: 'Jobsite Delivery',
    desc: 'Schedule same-day drops, fleet tracking, and secure handoff.',
  },
  {
    id: 2,
    title: 'Tool Calibration',
    desc: 'Certified calibration for torque tools, meters, and testers.',
  },
  {
    id: 3,
    title: 'Managed Inventory',
    desc: 'Bin stocking, auto-replenishment, and spend analytics.',
  },
  {
    id: 4,
    title: 'On-site Training',
    desc: 'Safety training and equipment walkthroughs for your crew.',
  },
]



export default function ServicesPage() {
  return (
    <div className="px-5 sm:px-8 lg:px-14 py-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-10 sm:px-10 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Services</p>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Services that keep crews moving
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-200">
          From delivery to calibration, our services are built for fast-paced field teams.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Filters</h2>
            <button className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reset
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Service type</p>
            <div className="mt-3 grid gap-2">
              {serviceCategories.map((category) => (
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
            <p className="text-sm font-semibold text-slate-700">Response time</p>
            <div className="mt-3 grid gap-2">
              {responseTimeFilters.map((filter) => (
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

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700">Support level</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 px-3 py-2">Standard</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2">Priority</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2">Enterprise</div>
            </div>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Available services</h2>
              <p className="mt-1 text-sm text-slate-500">Professional services for your team</p>
            </div>
            <select
              className="appearance-none rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
              defaultValue="popular"
            >
              <option value="popular">Most popular</option>
              <option value="fastest">Fastest response</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {serviceCards.map((card) => (
              <article
                key={card.id}
                className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-white" />
                <h2 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
                <button className="mt-5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}
