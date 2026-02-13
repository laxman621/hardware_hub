import React from 'react'

const cartItems = [
  {
    id: 1,
    name: 'Titan 18V Brushless Drill Kit',
    sku: 'DRL-18V-840',
    price: 189.0,
    qty: 1,
    delivery: 'Arrives tomorrow',
  },
  {
    id: 2,
    name: 'ProSteel Socket Set 1/4"-1/2"',
    sku: 'SOC-SET-125',
    price: 74.5,
    qty: 2,
    delivery: 'Ships today',
  },
  {
    id: 3,
    name: 'ArcShield Safety Goggles (2 pack)',
    sku: 'SAFE-GOG-2P',
    price: 18.99,
    qty: 3,
    delivery: 'Arrives in 2 days',
  },
]

const summaryRows = [
  { label: 'Subtotal', value: 394.98 },
  { label: 'Delivery', value: 12.5 },
  { label: 'Tax (est.)', value: 26.4 },
]

export default function CartPage() {
  const subtotal = summaryRows.reduce((acc, row) => acc + row.value, 0)

  return (
    <div className="px-5 sm:px-8 lg:px-14 py-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 sm:px-10 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">HardwareHub Cart</p>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">Your cart is ready</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-200">
          Review items, adjust quantities, and confirm delivery before checkout.
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <section className="space-y-4">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{item.sku}</p>
                    </div>
                    <p className="text-lg font-semibold text-slate-900">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                      <span>Qty</span>
                      <span className="font-semibold text-slate-900">{item.qty}</span>
                    </div>
                    <span className="text-emerald-600">{item.delivery}</span>
                    <button className="ml-auto text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
          <div className="mt-5 space-y-3">
            {summaryRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm text-slate-600">
                <span>{row.label}</span>
                <span className="font-semibold text-slate-900">${row.value.toFixed(2)}</span>
              </div>
            ))}
            <div className="h-px bg-slate-200" />
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-2xl font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Proceed to checkout
          </button>
          <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
            Secure payments, invoicing, and purchase orders supported.
          </div>
        </aside>
      </div>
    </div>
  )
}
