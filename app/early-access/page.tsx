import type { Metadata } from 'next'
import EarlyAccessForm from '../components/EarlyAccessFormClient'

export const metadata: Metadata = {
  title: 'Early Access — Castar',
  description: "Get exclusive access to the Castar demo. Trade tokenized stocks, earn real yield, and spend anywhere.",
  robots: { index: false },
}

const trust = [
  'Free to join — no credit card',
  'Demo link delivered within 24h',
  'Non-custodial · Passkey-secured',
]

export default function EarlyAccessPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: '#f7f5ee', color: '#07121e' }}
    >
      <div className="w-full max-w-sm flex flex-col items-center text-center">

        {/* Logo */}
        <img
          src="/castar-mark.png"
          alt="Castar"
          width="72"
          height="82"
          className="mb-5 select-none"
          style={{ filter: 'drop-shadow(0 8px 24px rgba(60,129,240,0.40))' }}
        />

        {/* Brand name */}
        <span
          className="text-[15px] font-semibold tracking-tight mb-10"
          style={{
            fontFamily: 'var(--font-bricolage, sans-serif)',
            background: 'linear-gradient(135deg, #3c81f0, #4a4bf3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Castar
        </span>

        {/* Headline */}
        <h1
          className="text-[2.4rem] sm:text-5xl font-semibold tracking-tight leading-[1.05] mb-4"
          style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
        >
          Ready to spend like a{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3c81f0, #4a4bf3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            billionaire?
          </span>
        </h1>

        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: '#4d5660' }}
        >
          Trade tokenized stocks, earn real yield on idle cash, and spend anywhere — your keys, always.
        </p>

        <div className="w-full">
          <EarlyAccessForm />
        </div>

        {/* Trust signals */}
        <ul className="mt-7 flex flex-col items-start gap-2 w-full">
          {trust.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#4d5660' }}>
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="rgba(60,129,240,0.12)" />
                <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#3c81f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <p
        className="mt-16 text-xs text-center"
        style={{ color: '#4d5660' }}
      >
        © 2026 Castar Labs · Financial technology company, not a bank.
      </p>
    </div>
  )
}
