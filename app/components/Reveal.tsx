'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setReady(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${ready && !visible ? 'is-pending' : 'is-visible'} ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
