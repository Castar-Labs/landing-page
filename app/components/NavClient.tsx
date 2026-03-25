'use client'

import { useState } from 'react'
import { SIGNAL_COUNT } from '../signals/data'

const pageLinks = [
  { href: '#for-creators', label: 'For Creators' },
  { href: '#for-fans', label: 'For Fans' },
  { href: '#impact', label: 'For Charities' },
]

const externalLinks = [
  { href: '/signals', label: 'Signals', count: SIGNAL_COUNT },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/logo3.svg" alt="Castar" width="32" height="32" className="h-8 w-auto" />
            <span className="text-slate-900 font-bold text-lg tracking-tight">Castar</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {pageLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
              >
                {l.label}
              </a>
            ))}
            <div className="w-px h-4 bg-slate-200" />
            {externalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-full px-3 py-1 text-teal-700 text-xs font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500" />
                </span>
                {l.label}
                <span className="bg-teal-500 text-white text-[10px] font-bold rounded-full min-w-[1.25rem] h-5 px-1.5 inline-flex items-center justify-center">{l.count}</span>
              </a>
            ))}
            <a
              href="https://x.com/Castar_tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-400 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/castartech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#for-creators"
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all motion-safe:hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Apply as Creator
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
            >
              <span className={`block w-5 h-0.5 bg-slate-800 motion-safe:transition-all duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-800 motion-safe:transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-800 motion-safe:transition-all duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white shadow-[0_16px_40px_-4px_rgba(0,0,0,0.25)]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {pageLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-slate-900 text-base font-medium py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-slate-200 my-1" />
            {externalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 self-start bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-full px-3 py-1.5 text-teal-700 text-xs font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500" />
                </span>
                {l.label}
                <span className="bg-teal-500 text-white text-[10px] font-bold rounded-full min-w-[1.25rem] h-5 px-1.5 inline-flex items-center justify-center">{l.count}</span>
              </a>
            ))}
            <a
              href="https://x.com/Castar_tech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-slate-700 hover:text-slate-900 text-base font-medium py-2.5 transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </a>
            <a
              href="https://www.linkedin.com/company/castartech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-slate-700 hover:text-slate-900 text-base font-medium py-2.5 transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
