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
    <section id="waitlist" className="relative py-14 sm:py-20 lg:py-28 bg-slate-950">
      <div className="absolute inset-x-0 top-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.3), transparent)' }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
          Ready to change the way you spend?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
          Join the waitlist today. The first 10,000 users get a permanent{' '}
          <span className="text-teal-400 font-semibold">2x XP multiplier</span>.
        </p>

        {status === 'success' ? (
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-2xl py-8 px-6">
            <div className="flex justify-center mb-4"><Confetti weight="duotone" className="w-10 h-10 text-teal-400" /></div>
            <div className="text-white font-bold text-xl mb-2">You're on the list!</div>
            <div className="text-slate-400 text-sm">We'll reach out when your early access is ready.</div>
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
              className="flex-1 bg-white/5 border border-white/10 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all motion-safe:hover:scale-[1.02] whitespace-nowrap shadow-lg shadow-teal-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {status === 'loading' ? 'Saving...' : 'Claim My Spot'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-500 text-xs mt-3">
            Something went wrong — email us at{' '}
            <a href="mailto:hello@castar.tech" className="underline">hello@castar.tech</a>
          </p>
        )}
      </div>
    </section>
  )
}
