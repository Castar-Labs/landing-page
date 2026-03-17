'use client'

import { useState } from 'react'

const links = [
  { href: '#for-creators', label: 'For Creators' },
  { href: '#for-fans', label: 'For Fans' },
  { href: '#impact', label: 'Impact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/logo3.svg" alt="Castar" width="32" height="32" className="h-8 w-auto" />
            <span className="text-white font-bold text-lg tracking-tight">Castar</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#for-creators"
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Apply as Creator
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
            >
              <span className={`block w-5 h-0.5 bg-white motion-safe:transition-all duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white motion-safe:transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white motion-safe:transition-all duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white text-base font-medium py-2.5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
