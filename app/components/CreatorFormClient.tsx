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
        body: JSON.stringify({ email, userGroup: 'creator' }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { email, setEmail, status, handleSubmit }
}

export default function CreatorForm() {
  const { email, setEmail, status, handleSubmit } = useLoopsForm()

  if (status === 'success') {
    return (
      <div className="mt-8 bg-teal-50 border border-teal-200 rounded-2xl py-5 px-6 text-center">
        <div className="flex justify-center mb-2"><Confetti weight="duotone" className="w-8 h-8 text-teal-600" /></div>
        <div className="text-teal-800 font-bold text-base mb-1">Application received!</div>
        <div className="text-teal-600 text-sm">We'll be in touch within 48 hours.</div>
      </div>
    )
  }

  return (
    <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={handleSubmit}>
      <label htmlFor="creator-email" className="sr-only">Email address</label>
      <input
        id="creator-email"
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm outline-none transition-colors bg-white"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all motion-safe:hover:scale-[1.02] whitespace-nowrap"
      >
        {status === 'loading' ? 'Sending...' : 'Apply as a Creator →'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-xs mt-2 w-full">
          Something went wrong — email us at{' '}
          <a href="mailto:hello@castar.tech" className="underline">hello@castar.tech</a>
        </p>
      )}
    </form>
  )
}
