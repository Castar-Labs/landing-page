'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const TITLE_PLAIN = 'Why this is the perfect time to build '
const TITLE_ACCENT = 'Stablecoin Neobanks'
const TITLE_END = '?'
const FULL_TEXT = TITLE_PLAIN + TITLE_ACCENT + TITLE_END
const ACCENT_START = TITLE_PLAIN.length
const ACCENT_END = ACCENT_START + TITLE_ACCENT.length
const CHAR_DELAY = 20
const CURSOR_LINGER = 800
const FADE_DURATION = 1000

export default function TypewriterHero({ signalCount }: { signalCount: number }) {
  const plainRef = useRef<HTMLSpanElement>(null)
  const accentRef = useRef<HTMLSpanElement>(null)
  const endRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const [done, setDone] = useState(false)
  const [showAfter, setShowAfter] = useState(false)
  const [ready, setReady] = useState(false)

  const finish = useCallback(() => {
    if (cursorRef.current) cursorRef.current.style.display = 'none'
    setDone(true)
    setTimeout(() => setShowAfter(true), 200)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      if (plainRef.current) plainRef.current.textContent = TITLE_PLAIN
      if (accentRef.current) accentRef.current.textContent = TITLE_ACCENT
      if (endRef.current) endRef.current.textContent = TITLE_END
      setReady(true)
      finish()
      return
    }

    setReady(true)
    let charIndex = 0
    let lastTime = 0
    let rafId: number

    function tick(time: number) {
      if (!lastTime) lastTime = time
      const elapsed = time - lastTime

      if (elapsed >= CHAR_DELAY) {
        charIndex++
        lastTime = time

        // Direct DOM updates — no React re-renders
        if (plainRef.current) {
          plainRef.current.textContent = FULL_TEXT.slice(0, Math.min(charIndex, ACCENT_START))
        }
        if (accentRef.current && charIndex > ACCENT_START) {
          accentRef.current.textContent = FULL_TEXT.slice(ACCENT_START, Math.min(charIndex, ACCENT_END))
        }
        if (endRef.current && charIndex > ACCENT_END) {
          endRef.current.textContent = FULL_TEXT.slice(ACCENT_END, charIndex)
        }

        if (charIndex >= FULL_TEXT.length) {
          setTimeout(finish, CURSOR_LINGER)
          return
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [finish])

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

        {/* Visible typed text — updated via refs, no re-renders */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 absolute inset-0"
          style={{ opacity: ready ? 1 : 0 }}
        >
          <span ref={plainRef} />
          <span ref={accentRef} className="text-teal-600" />
          <span ref={endRef} className="text-teal-600" />
          {!done && (
            <span
              ref={cursorRef}
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
          {showAfter && (
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75 animate-[ping_1s_ease-out_forwards]"
            />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
        </span>
        <span className="text-teal-700 text-xs font-semibold tracking-wide uppercase">{signalCount} signals tracked</span>
      </div>
    </>
  )
}
