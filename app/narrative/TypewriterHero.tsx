'use client'

import { useEffect, useRef, useState } from 'react'

const TITLE_PLAIN = 'Why this is the perfect time to build '
const TITLE_ACCENT = 'Stablecoin Neobanks'
const TITLE_END = '?'
const FULL_TEXT = TITLE_PLAIN + TITLE_ACCENT + TITLE_END
const CHAR_DELAY = 35
const CURSOR_LINGER = 800
const FADE_DURATION = 1000

export default function TypewriterHero({ signalCount }: { signalCount: number }) {
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)
  const [showAfter, setShowAfter] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion.current) {
      setCharIndex(FULL_TEXT.length)
      setDone(true)
      setShowAfter(true)
      return
    }

    let i = 0
    const interval = setInterval(() => {
      i++
      setCharIndex(i)
      if (i >= FULL_TEXT.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          setTimeout(() => setShowAfter(true), 200)
        }, CURSOR_LINGER)
      }
    }, CHAR_DELAY)

    return () => clearInterval(interval)
  }, [])

  const accentStart = TITLE_PLAIN.length
  const accentEnd = accentStart + TITLE_ACCENT.length

  const plainVisible = FULL_TEXT.slice(0, Math.min(charIndex, accentStart))
  const accentVisible = charIndex > accentStart
    ? FULL_TEXT.slice(accentStart, Math.min(charIndex, accentEnd))
    : ''
  const endVisible = charIndex > accentEnd
    ? FULL_TEXT.slice(accentEnd, charIndex)
    : ''

  return (
    <>
      <div className="relative mb-6">
        {/* Invisible spacer — reserves the full multi-line height */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 invisible"
          aria-hidden="true"
        >
          {TITLE_PLAIN}<span>{TITLE_ACCENT}</span>{TITLE_END}
        </h1>

        {/* Visible typed text, positioned over the spacer */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 absolute inset-0"
        >
          {plainVisible}
          {accentVisible && <span className="text-teal-600">{accentVisible}</span>}
          {endVisible && <span className="text-teal-600">{endVisible}</span>}
          {!done && (
            <span
              className="inline-block w-[3px] sm:w-[4px] bg-teal-500 ml-0.5 animate-[blink_0.6s_steps(1)_infinite]"
              style={{ height: '0.72em', verticalAlign: 'baseline' }}
              aria-hidden="true"
            />
          )}
        </h1>
      </div>

      <p
        className="text-slate-500 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8"
        style={{
          opacity: showAfter ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease`,
        }}
      >
        Every major player is racing to connect stablecoins with consumer finance. Here&apos;s the proof.
      </p>

      <div
        className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5"
        style={{
          opacity: showAfter ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease 300ms`,
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
        </span>
        <span className="text-teal-700 text-xs font-semibold tracking-wide uppercase">{signalCount} signals tracked</span>
      </div>
    </>
  )
}
