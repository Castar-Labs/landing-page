import type { Metadata } from 'next'
import Link from 'next/link'
import TypewriterHero from './TypewriterHero'
import NarrativeCTA from './NarrativeCTA'

export const metadata: Metadata = {
  title: 'Narrative — Castar',
  description:
    'The market is moving. Follow the signals shaping the future of creator-powered finance.',
}

type SourceKind = 'corporate' | 'press' | 'social'

const entries: { date: string; source: string; kind: SourceKind; title: string; href: string }[] = [
  {
    date: '2026-03-24',
    source: '@pudgypenguins on X',
    kind: 'social',
    title: 'Pudgy Penguins Launches Pengu Visa Card Globally Across 170+ Countries via KAST',
    href: 'https://x.com/pudgypenguins/status/2036527343464825256',
  },
  {
    date: '2026-03-18',
    source: 'Fortune',
    kind: 'press',
    title: 'Stripe Launches Tempo — a Stablecoin Blockchain Built for AI-Era Payments',
    href: 'https://fortune.com/2026/03/18/stripe-tempo-paradigm-mpp-ai-payments-protocol/',
  },
  {
    date: '2026-03-17',
    source: 'Mastercard Investor Relations',
    kind: 'corporate',
    title: 'Mastercard to Acquire BVNK to Connect On-Chain Payments and Fiat Rails',
    href: 'https://investor.mastercard.com/investor-news/investor-news-details/2026/Mastercard-to-Acquire-BVNK-to-Connect-On-Chain-Payments-and-Fiat-Rails/default.aspx',
  },
  {
    date: '2026-03-10',
    source: '@elonmusk on X',
    kind: 'social',
    title: 'Elon Musk Announces X Money Early Public Access Launching in April',
    href: 'https://x.com/autismcapital/status/2021716424893612244',
  },
  {
    date: '2026-03-04',
    source: 'Kraken Blog',
    kind: 'press',
    title: 'Kraken Becomes First Digital Asset Bank to Receive a Federal Reserve Master Account',
    href: 'https://blog.kraken.com/news/federal-reserve-master-account',
  },
  {
    date: '2026-03-03',
    source: 'Visa Investor Relations',
    kind: 'corporate',
    title: 'Visa and Bridge Expand Collaboration with Plans to Bring Stablecoin-Linked Cards to Over 100 Countries',
    href: 'https://investor.visa.com/news/news-details/2026/Visa-and-Bridge-Expand-Collaboration-with-Plans-to-Bring-Stablecoin-Linked-Cards-to-Over-100-Countries/default.aspx',
  },
  {
    date: '2026-02-27',
    source: 'M0',
    kind: 'corporate',
    title: 'MoonPay, M0 and PayPal Announce PYUSDx — the Infrastructure Platform for White-Label Stablecoin Deployments',
    href: 'https://www.m0.org/press-releases/moonpay-m0-and-paypal-announce-pyusdx-the-infrastructure-platform-for-pyusd-backed-stablecoins',
  },
  {
    date: '2026-02-26',
    source: '@MetaMask on X',
    kind: 'social',
    title: 'MetaMask Launches Mastercard-Backed Crypto Card in the United States',
    href: 'https://x.com/MetaMask/status/2027022499683410167',
  },
  {
    date: '2026-02-25',
    source: 'Tether',
    kind: 'corporate',
    title: 'Tether Invests in Whop to Power Stablecoin Payments for the Creator Economy',
    href: 'https://tether.io/news/tether-invests-in-whop-one-of-the-fastest-growing-internet-markets-to-power-stablecoin-payments-for-the-next-generation-of-the-internet-economy/',
  },
  {
    date: '2026-02-11',
    source: 'Pantera Capital',
    kind: 'corporate',
    title: 'Building Permissionless Neobanks — How Stablecoins Are Rebuilding the Financial Backend',
    href: 'https://panteracapital.com/building-permissionless-neobanks/',
  },
  {
    date: '2026-02-12',
    source: 'Grab Investor Relations',
    kind: 'corporate',
    title: 'Grab Signs Agreement to Acquire Stash, Expanding Financial Services Roadmap',
    href: 'https://x.com/oost_marcel/status/2021729512887660919',
  },
  {
    date: '2026-02-09',
    source: '@MrBeast on X',
    kind: 'social',
    title: 'MrBeast Acquires Neobank Step',
    href: 'https://x.com/MrBeast/status/2020910218360782929',
  },
  {
    date: '2026-01-09',
    source: 'Reuters',
    kind: 'press',
    title: 'Stablecoin Firm Rain Valued at $1.95 Billion in Latest Fundraise',
    href: 'https://www.reuters.com/technology/stablecoin-firm-rain-valued-195-billion-latest-fundraise-2026-01-09/',
  },
  {
    date: '2025-12-11',
    source: 'Fortune',
    kind: 'press',
    title: 'YouTube Enables Stablecoin Payments for Creators via PayPal PYUSD',
    href: 'https://fortune.com/2025/12/11/youtube-paypal-google-stablecoin-payouts-pyusd/',
  },
  {
    date: '2025-09-25',
    source: 'Citi GPS',
    kind: 'corporate',
    title: 'Stablecoins 2030 — Digital Dollars and the Future of Payments',
    href: 'https://www.citigroup.com/global/insights/stablecoins-2030',
  },
  {
    date: '2025-08-22',
    source: 'Trend Hunter',
    kind: 'press',
    title: 'Kanye West Debuts YZY Card — a Crypto Debit Card Under the YZY Money Ecosystem',
    href: 'https://www.trendhunter.com/trends/yzy-card',
  },
]

const kindStyles: Record<SourceKind, string> = {
  corporate: 'text-teal-700 bg-teal-50 border-teal-200',
  press: 'text-slate-500 bg-slate-100 border-slate-200',
  social: 'text-sky-600 bg-sky-50 border-sky-200',
}

const sortedEntries = [...entries].sort(
  (a, b) => new Date(b.date + 'T00:00:00').getTime() - new Date(a.date + 'T00:00:00').getTime()
)

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function daysAgo(dateStr: string) {
  const now = new Date()
  const then = new Date(dateStr + 'T00:00:00')
  const diff = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Today'
  if (diff === 1) return '1 day ago'
  if (diff < 30) return `${diff} days ago`
  if (diff < 60) return '1 month ago'
  return `${Math.floor(diff / 30)} months ago`
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
                    <time className="text-xs font-semibold text-slate-400 tabular-nums">
                      {formatDate(entry.date)}
                    </time>
                    <span className="text-slate-300 text-xs hidden sm:inline">—</span>
                    <span className="text-xs text-slate-400 hidden sm:inline">{daysAgo(entry.date)}</span>
                    <span className={`text-[11px] font-medium border rounded px-2 py-0.5 ${kindStyles[entry.kind]}`}>
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
