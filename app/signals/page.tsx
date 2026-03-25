import type { Metadata } from 'next'
import Link from 'next/link'
import TypewriterHero from './TypewriterHero'
import NarrativeCTA from './NarrativeCTA'
import { entries, type Tag } from './data'

export const metadata: Metadata = {
  title: 'Signals — Castar',
  description:
    'Regulation is here. Consumers want stablecoin wallets. Payment giants are going all in. Track the signals.',
  openGraph: {
    title: 'Signals — Castar',
    description:
      'Regulation is here. Consumers want stablecoin wallets. Payment giants are going all in. Track the signals.',
  },
}

const tagStyles: Record<Tag, { label: string; classes: string; dot: string }> = {
  stablecoins: {
    label: 'Stablecoins',
    classes: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    dot: 'bg-emerald-500',
  },
  'entertainment finance': {
    label: 'Entertainment Finance',
    classes: 'text-violet-700 bg-violet-50 border-violet-200',
    dot: 'bg-violet-500',
  },
}

const sortedEntries = [...entries].sort(
  (a, b) => new Date(b.date + 'T00:00:00').getTime() - new Date(a.date + 'T00:00:00').getTime()
)

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}


export default function NarrativePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-slate-200">
        {/* Gradient glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-100/60 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-600 active:text-teal-700 text-sm transition-colors mb-12 sm:mb-16"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Castar
          </Link>

          <TypewriterHero signalCount={sortedEntries.length} />
        </div>
      </header>

      {/* Timeline feed */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="relative">
          {/* Timeline line — 4px center = where dots center */}
          <div className="absolute left-[4px] top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-slate-200 to-slate-200" />

          <ol>
            {sortedEntries.map((entry, i) => (
              <li key={i} className="relative pl-10 sm:pl-12">
                {/* Timeline dot — 9px wide, centered at left 4.5px → offset = 0px */}
                <span className="absolute left-0 top-6 sm:top-7 flex h-[9px] w-[9px] items-center justify-center">
                  <span className={`h-[9px] w-[9px] rounded-full border-2 ${i === 0 ? 'bg-teal-500 border-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.4)]' : 'bg-white border-slate-300'}`} />
                </span>

                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl hover:bg-slate-50 active:scale-[0.98] px-4 py-5 sm:px-5 sm:py-6 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide border rounded-full px-2.5 py-0.5 ${tagStyles[entry.tag].classes}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${tagStyles[entry.tag].dot}`} />
                      {tagStyles[entry.tag].label}
                    </span>
                    <time className="text-xs font-semibold text-slate-400 tabular-nums">
                      {formatDate(entry.date)}
                    </time>
                    <span className="text-slate-300 text-xs">·</span>
                    <span className="text-xs text-slate-400">
                      {entry.source}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 group-hover:text-teal-600 transition-colors leading-snug">
                    {entry.title}
                  </h2>
                </a>
              </li>
            ))}
          </ol>

        </div>
      </section>

      <NarrativeCTA />

      {/* Minimal footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <small className="text-slate-500 text-xs">© 2026 Castar Labs</small>
          <Link href="/" className="text-slate-500 hover:text-teal-600 text-xs transition-colors">
            castar.tech
          </Link>
        </div>
      </footer>
    </main>
  )
}
