import React from 'react'

export default function Login() { 
  return (
  <div className='flex-1 flex items-center justify-center px-5 py-12 relative overflow-hidden bg-gradient-radial'>
   <section className="relative z-10 w-full max-w-4xl grid md:grid-cols-[1.05fr_1fr] bg-slate-50 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 flex flex-col gap-6">
            <span className="self-start bg-blue-500/20 text-blue-300 px-3 py-2 rounded-full text-xs uppercase tracking-[0.18em]">Member Access</span>
            <h1 className="m-0 text-4xl md:text-5xl font-bold tracking-tight">Welcome back</h1>
            <p className="m-0 text-slate-300/80 leading-relaxed">
              Sign in to manage orders, track repairs, and keep your hardware
              collection in sync.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1.5">
                <strong className="text-2xl text-blue-400">24/7</strong>
                <span className="text-sm text-slate-400">Live support</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <strong className="text-2xl text-blue-400">12k+</strong>
                <span className="text-sm text-slate-400">Happy builders</span>
              </div>
            </div>
          </div>
          <form className="p-12 flex flex-col gap-4 bg-slate-50">
            <div>
              <h2 className="m-0 text-3xl font-bold">Log in</h2>
              <p className="mt-1.5 mb-0 text-slate-600">Use your email and password to continue.</p>
            </div>
            <label className="flex flex-col gap-2 text-sm text-slate-900">
              <span>Email</span>
              <input type="email" placeholder="you@hardwarehub.com" required className="border border-slate-300 rounded-xl px-3.5 py-3 text-base bg-slate-100 outline-none transition-all focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-900">
              <span>Password</span>
              <input type="password" placeholder="Enter your password" required className="border border-slate-300 rounded-xl px-3.5 py-3 text-base bg-slate-100 outline-none transition-all focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
            </label>
            <div className="flex items-center justify-between gap-3 text-sm flex-wrap">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input type="checkbox" />
                Remember me
              </label>
              <button type="button" className="bg-transparent border-0 text-blue-500 font-semibold cursor-pointer p-0">Forgot password?</button>
            </div>
            <button className="border-0 rounded-xl px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-slate-950 font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30" type="submit">Sign in</button>
            <div className="relative text-center text-xs text-slate-500 before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[36%] before:h-px before:bg-slate-300 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[36%] after:h-px after:bg-slate-300">
              <span>or continue with</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="border border-slate-300 rounded-xl px-3 py-2.5 bg-white cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition-colors">Google</button>
              <button type="button" className="border border-slate-300 rounded-xl px-3 py-2.5 bg-white cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition-colors">GitHub</button>
            </div>
            <p className="m-0 text-center text-slate-600 text-sm">
              New here? <button type="button" className="bg-transparent border-0 text-blue-500 font-semibold cursor-pointer p-0">Create an account</button>
            </p>
          </form>
        </section>
      </div>
  )
}
