'use client'

import { useState } from 'react'

export default function NarrativeCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userGroup: 'narrative' }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Let&apos;s build a <span className="text-teal-600">Stablecoin Neobank</span> together.
        </h2>
        <p className="text-slate-500 text-base sm:text-lg mb-8 max-w-xl">
          If this resonates, leave your email. We&apos;ll be in touch.
        </p>

        {status === 'success' ? (
          <div className="bg-teal-50 border border-teal-200 rounded-xl py-5 px-6 max-w-md">
            <div className="text-teal-800 font-semibold text-base mb-1">Got it.</div>
            <div className="text-teal-600 text-sm">We&apos;ll reach out soon.</div>
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={handleSubmit}>
            <label htmlFor="narrative-email" className="sr-only">Email address</label>
            <input
              id="narrative-email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all active:scale-[0.98] whitespace-nowrap shadow-sm shadow-teal-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              {status === 'loading' ? 'Sending...' : 'Get in touch'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-slate-500 text-xs mt-3">
            Something went wrong — try{' '}
            <a href="mailto:hello@castar.tech" className="underline text-teal-600">hello@castar.tech</a>
          </p>
        )}
      </div>
    </section>
  )
}
