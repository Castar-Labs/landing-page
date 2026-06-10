'use client'

import { useState } from 'react'

export default function EarlyAccessForm() {
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
        body: JSON.stringify({ email, userGroup: 'early-access' }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center gap-3 rounded-2xl py-8 px-6 text-center"
        style={{ background: 'rgba(60,129,240,0.07)', border: '1px solid rgba(60,129,240,0.2)' }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(60,129,240,0.12)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#3c81f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-lg mb-1" style={{ color: '#07121e' }}>You're on the list.</div>
          <div className="text-sm leading-relaxed" style={{ color: '#4d5660' }}>
            We'll send the demo link to{' '}
            <span style={{ color: '#07121e', fontWeight: 500 }}>{email}</span>{' '}
            within 24 hours.
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2.5">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="early-access-email" className="sr-only">Email address</label>
        <input
          id="early-access-email"
          type="email"
          required
          autoFocus
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-all"
          style={{
            background: '#fff',
            border: '1px solid #e0ded7',
            color: '#07121e',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3c81f0'
            e.target.style.boxShadow = '0 0 0 3px rgba(60,129,240,0.15)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e0ded7'
            e.target.style.boxShadow = 'none'
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60"
          style={{
            background: 'linear-gradient(135deg, #3c81f0, #4a4bf3)',
            boxShadow: '0 4px 14px rgba(60,129,240,0.35)',
            focusRingColor: '#3c81f0',
          } as React.CSSProperties}
        >
          {status === 'loading' ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Get Demo Access
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs flex items-center gap-1.5" style={{ color: '#ff625e' }}>
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
            <circle cx="8" cy="8" r="7.5" stroke="#ff625e" strokeWidth="1" />
            <path d="M8 5v4M8 11v.5" stroke="#ff625e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Something went wrong — email us at{' '}
          <a href="mailto:hello@castar.tech" className="underline">hello@castar.tech</a>
        </p>
      )}
    </form>
  )
}
