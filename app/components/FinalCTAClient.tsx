'use client'

import { useState } from 'react'
import { Confetti } from '@phosphor-icons/react'

function useLoopsForm() {
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
        body: JSON.stringify({ email, userGroup: 'fan' }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { email, setEmail, status, handleSubmit }
}

export default function FinalCTA() {
  const { email, setEmail, status, handleSubmit } = useLoopsForm()

  return (
    <section id="waitlist" className="relative py-14 sm:py-20 lg:py-28 bg-gradient-to-br from-teal-500 to-teal-700 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
          Your fans are already spending. Let's make it count.
        </h2>
        <p className="text-teal-100 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
          Join the waitlist today. The first 10,000 users get a permanent{' '}
          <span className="text-white font-semibold">2x XP multiplier</span>.
        </p>

        {status === 'success' ? (
          <div className="bg-white/15 border border-white/25 rounded-2xl py-8 px-6">
            <div className="flex justify-center mb-3"><Confetti weight="duotone" className="w-9 h-9 text-white" /></div>
            <div className="text-white font-bold text-lg mb-1">You&apos;re on the list!</div>
            <div className="text-teal-100 text-sm">We&apos;ll reach out when your early access is ready.</div>
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="fan-email" className="sr-only">Email address</label>
            <input
              id="fan-email"
              type="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-colors shadow-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all motion-safe:hover:scale-[1.02] whitespace-nowrap shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-600"
            >
              {status === 'loading' ? 'Saving...' : 'Claim My Spot'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-white/80 text-xs mt-3">
            Something went wrong — email us at{' '}
            <a href="mailto:hello@castar.tech" className="underline text-white">hello@castar.tech</a>
          </p>
        )}
      </div>
    </section>
  )
}
