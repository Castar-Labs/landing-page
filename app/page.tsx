import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CheckCircle,
  Lightning,
  Plugs,
  ShieldCheck,
  Stack,
  Storefront,
  Wallet,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import Reveal from './components/Reveal'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-900 text-white antialiased">
      {/* Site-wide structural overlays — fixed, behind content */}
      <div aria-hidden className="sqd-grid-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div aria-hidden className="sqd-scanline" />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <SectionBreak />
        <TrustBar />
        <SectionBreak />
        <Stats />
        <SectionBreak />
        <Problem />
        <SectionBreak />
        <Solution />
        <SectionBreak />
        <CodeSection />
        <SectionBreak />
        <CategoryMap />
        <SectionBreak />
        <Audiences />
        <SectionBreak />
        <Timeline />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  )
}

function SectionBreak() {
  return <div aria-hidden className="sqd-section-break" />
}

/* -------------------------------------------------------------------------- */
/*                                Wordmark / Nav                              */
/* -------------------------------------------------------------------------- */

function Wordmark({ size = 'md' }: { size?: 'md' | 'sm' }) {
  const cls =
    size === 'sm'
      ? 'h-6 w-6'
      : 'h-7 w-7'
  return (
    <div className="flex items-center gap-2.5">
      <span className={`castar-logo-mark ${cls}`} aria-hidden />
      <span className="text-[17px] font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
        CASTAR
      </span>
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#2A2A2A] bg-[#030303]/88 backdrop-blur-md">
      <div className="mx-auto flex h-[56px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="Castar home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/45 md:flex">
          <a href="#solution" className="transition hover:text-white">Product</a>
          <a href="#audiences" className="transition hover:text-white">For brands</a>
          <a href="#audiences" className="transition hover:text-white">For issuers</a>
          <a href="#market" className="transition hover:text-white">Why now</a>
          <a href="#docs" className="transition hover:text-white">Demo</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-2 text-[13.5px] font-semibold text-white/70 transition hover:bg-white/[0.06] hover:text-white sm:inline-flex"
          >
            Talk to us
          </a>
          <a href="#contact" className="sqd-btn-primary !py-2 !px-4 !text-[13.5px]">
            Get API access
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[12%] h-[34rem] w-[34rem] rounded-full bg-[#F04C1C]/[0.12] blur-[150px]" />
        <div className="absolute right-[-18%] bottom-[-18%] h-[36rem] w-[36rem] rounded-full bg-[#F04C1C]/[0.08] blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-start px-5 sm:items-center sm:px-6 lg:px-10">
        <div className="w-full max-w-5xl py-16 sm:py-28 lg:py-32">
          <Reveal delay={80}>
            <h1 className="max-w-5xl text-display-1 font-extrabold tracking-[-0.04em] text-white text-balance">
              <span className="block text-gradient-accent">Shareholder identity</span>
              <span className="block">
                for tokenized stocks.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.55] text-white/70 sm:text-[19px]">
              One API to verify tokenized-stock ownership across every rail.
              Turn verified ownership into programmable shareholder benefits.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="castar-brand-bars" aria-hidden>
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#contact" className="sqd-btn-primary">
                Get API access
                <ArrowRight size={16} weight="bold" />
              </a>
              <a href="#solution" className="sqd-btn-ghost">
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/55">
              <Bullet>Read-only OAuth</Bullet>
              <Bullet>EAS attestations on-chain</Bullet>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle size={16} weight="fill" className="text-[#F04C1C]" />
      <span className="font-medium text-white/80">{children}</span>
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Trust bar                                 */
/* -------------------------------------------------------------------------- */

function TrustBar() {
  const partners = ['Alpaca', 'xStocks', 'Backed', 'Kraken', 'Phantom', 'Chainlink', 'Solana', 'INK']
  return (
    <section className="border-y border-[#2A2A2A] bg-[#030303]/70 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <p className="mb-6 text-center font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">
          Built to plug into the tokenized-stock stack
        </p>
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
            {partners.map((p) => (
              <span
                key={p}
                className="text-[19px] font-extrabold uppercase tracking-[-0.05em] text-white/35 sm:text-[22px]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Stats                                   */
/* -------------------------------------------------------------------------- */

function Stats() {
  const stats: { value: string; label: string; source: string }[] = [
    { value: '$25–30B', label: 'xStocks cumulative volume', source: 'kraken.com · cryptotimes.io' },
    { value: '94%', label: 'Alpaca-reported tokenized US equities + ETFs share', source: 'alpaca.markets/blog' },
    { value: '100K+', label: 'Unique on-chain xStock holders', source: 'cryptotimes.io · Apr 2026' },
    { value: '100+', label: 'xStock tokens · target 500 by EOY', source: 'kraken.com/blog' },
    { value: '5', label: 'Chains: Solana · Ethereum · Mantle · TON · Ink', source: 'xstocks.com' },
    { value: '~30%', label: 'Japanese listed companies with shareholder-perk programs', source: 'J-STAGE systematic review' },
    { value: '$1.15B', label: 'Alpaca Series D valuation · Jan 2026', source: 'theblock.co' },
  ]

  return (
    <section id="market" className="sqd-section-gradient relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="sqd-eyebrow mb-4">Why now</p>
          <h2 className="text-display-2 font-extrabold text-balance text-gradient-heading max-w-3xl">
            Tokenized stocks tripled in 12 months.
            <span className="text-white/45"> The utility layer doesn&apos;t exist yet.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/65">
            Today:{' '}
            <strong className="text-white">$25–30B+ cumulative volume</strong>,{' '}
            <strong className="text-white">100K+ on-chain holders</strong>, and{' '}
            <strong className="text-white">live multi-chain rails</strong>. Every actor is in place. Nobody owns the network that binds them.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-[#2A2A2A] bg-[#2A2A2A] sm:grid-cols-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0A0A0A] p-6 transition hover:bg-[#111] sm:p-7"
              >
                <div className="text-[clamp(1.7rem,2.4vw,2.4rem)] font-extrabold tracking-[-0.05em] text-white leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-[13.5px] font-medium leading-snug text-white/80">
                  {s.label}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                  {s.source}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   Problem                                  */
/* -------------------------------------------------------------------------- */

function Problem() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="sqd-eyebrow mb-4">The wedge</p>
            <h2 className="text-display-2 font-extrabold tracking-[-0.04em] text-gradient-heading text-balance">
              Today, holding a tokenized share is just price exposure.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
              No votes. No dividends. No perks at the businesses you own a piece of. The platforms say so themselves: they just haven&apos;t built the layer that fixes it.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <div className="grid gap-4">
              <Pullquote
                source="alpaca.markets/tokenization"
                text="Holders of tokenized assets have no voting rights, dividend entitlements, or legal claims to the underlying company shares… unless explicitly stated otherwise."
              />
              <Pullquote
                source="kraken.com/legal/xstocks"
                text="No voting rights. No governance participation. No traditional dividend distributions. No redemption rights."
              />
              <p className="mt-2 max-w-xl text-[14.5px] font-medium text-white/55">
                That &quot;unless explicitly stated otherwise&quot; is the entire opportunity. Castar is the layer that explicitly states otherwise, verifiably across every rail.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Pullquote({ source, text }: { source: string; text: string }) {
  return (
    <figure className="sqd-card p-6 sm:p-7">
      <blockquote className="text-[17px] font-medium leading-snug text-white/90 sm:text-[18px]">
        <span className="mr-1 text-3xl leading-none text-white/25">“</span>
        {text}
      </blockquote>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F04C1C]">
        Source: {source}
      </figcaption>
    </figure>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   Solution                                 */
/* -------------------------------------------------------------------------- */

function Solution() {
  const features = [
    {
      icon: <Plugs size={22} weight="duotone" />,
      title: 'Cross-rail by design',
      text: 'Bind one Castar identity to Alpaca, xStocks, and self-custody wallets. Sum holdings nobody else can see in a single attestation.',
    },
    {
      icon: <ShieldCheck size={22} weight="duotone" />,
      title: 'Privacy-preserving',
      text: 'Raw balances never leave Castar. Brands get a signed entitlement: qualified, tier, expiry. We are the data minimizer.',
    },
    {
      icon: <Lightning size={22} weight="duotone" />,
      title: 'Permissionless to ship',
      text: 'Read-only OAuth on Alpaca needs no scope. On-chain reads need no permission. Integrate in a weekend, scale into the Alliance.',
    },
    {
      icon: <Stack size={22} weight="duotone" />,
      title: 'Programmable benefits',
      text: 'Perks, cashback, voting, gated drops, brand access. Castar verifies; you decide the experience. Same primitive, every shape.',
    },
    {
      icon: <CheckCircle size={22} weight="duotone" />,
      title: 'Compliance posture: Plaid',
      text: 'Read-only aggregation. Never broker-dealer. Never custody securities or fiat. SOC 2 Type 1 in year one.',
    },
    {
      icon: <Wallet size={22} weight="duotone" />,
      title: 'Custodial + non-custodial',
      text: 'A Phantom user holding TSLAx in self-custody and an Alpaca user holding TSLA in custody resolve to the same entitlement.',
    },
  ]

  return (
    <section id="solution" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="sqd-eyebrow mb-4">The product</p>
            <h2 className="text-display-1 font-extrabold tracking-[-0.04em] text-balance text-gradient-heading">
              One API. Every rail.
              <br />
              <span className="text-white/45">Signed entitlements out.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/65">
              A brand calls{' '}
              <code className="border border-[#2A2A2A] bg-[#0A0A0A] px-2 py-1 font-mono text-[13px] text-[#F04C1C]">
                castar/verify
              </code>
              . We resolve the holder&apos;s identity across custodial, tokenized, and on-chain rails, then return a signed attestation. The brand never sees raw positions.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="sqd-card group h-full p-6 sm:p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-[#2A2A2A] bg-[#030303] text-[#F04C1C]">
                  {f.icon}
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Cashback section                              */
/* -------------------------------------------------------------------------- */

function CodeSection() {
  return (
    <section id="docs" className="sqd-section-gradient relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="sqd-eyebrow mb-4">The magic moment / zero friction</p>
            <h2 className="text-display-2 font-extrabold tracking-[-0.04em] text-gradient-heading text-balance">
              A shareholder perk that feels like instant cashback.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/65">
              The end-user pays normally. Castar handles the ownership proof quietly in the background, then turns identity into money in the wallet.
            </p>
            <div className="mt-10 space-y-5">
              <CashbackStep
                number="01"
                title="Action"
                text="The user buys a $15 coffee at Starbucks with their standard neobank card."
              />
              <CashbackStep
                number="02"
                title="Verification"
                text="Castar checks whether the user holds more than 10 shares of $SBUX."
              />
              <CashbackStep
                number="03"
                title="Reward"
                text="The user receives: Shareholder status verified. +5% USDC dropped into your wallet."
              />
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            <CashbackReceipt />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CashbackStep({
  number,
  title,
  text,
}: {
  number: string
  title: string
  text: string
}) {
  return (
    <div className="sqd-card grid grid-cols-[3.25rem_1fr] gap-4 p-5">
      <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#F04C1C]">
        {number}
      </span>
      <div>
        <h3 className="text-[17px] font-bold tracking-[-0.02em] text-white">
          {title}
        </h3>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/65">
          {text}
        </p>
      </div>
    </div>
  )
}

function CashbackReceipt() {
  const rows = [
    ['Merchant', 'Starbucks'],
    ['Amount', '$15.00'],
    ['Rule', '>10 SBUX'],
    ['Status', 'Synced'],
  ]

  return (
    <div className="relative mx-auto max-w-md overflow-hidden border border-[#2A2A2A] bg-[#0A0A0A] p-6 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(240,76,28,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_38%)]"
      />
      <div className="relative">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="castar-logo-mark h-8 w-8" aria-hidden />
            <span className="text-[18px] font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
              CASTAR
            </span>
          </div>
          <span className="h-2.5 w-8 rounded-full bg-[#F04C1C]" aria-hidden />
        </div>

        <h3 className="text-[44px] font-extrabold leading-[0.95] tracking-[-0.045em] text-white sm:text-[56px]">
          Identity
          <br />
          <span className="text-gradient-accent">verified.</span>
        </h3>

        <div className="mt-10 border-y border-[#2A2A2A] py-5">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              <span className="text-white/42">{label}</span>
              <strong className="text-right font-semibold text-white">{value}</strong>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#F04C1C] p-5 text-black">
          <strong className="block text-[34px] font-extrabold leading-none tracking-[-0.05em]">
            +5% USDC
          </strong>
          <span className="mt-3 block font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em]">
            Shareholder cashback dropped
          </span>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Category map                                  */
/* -------------------------------------------------------------------------- */

function CategoryMap() {
  type Tile = { role: string; who: string; status: 'filled' | 'castar' | 'open' }
  const tiles: Tile[] = [
    { role: 'Issuer', who: 'Backed Assets · Kraken', status: 'filled' },
    { role: 'Custody (TradFi)', who: 'Alpaca · InCore · Maerki Baumann', status: 'filled' },
    { role: 'Exchanges', who: 'Kraken · Bybit · Gate · KuCoin', status: 'filled' },
    { role: 'Wallets', who: 'Phantom · Solflare · Trust', status: 'filled' },
    { role: 'Chains', who: 'Solana · Ethereum · Mantle · TON · Ink', status: 'filled' },
    { role: 'Oracle', who: 'Chainlink', status: 'filled' },
    { role: 'On-ramp', who: 'Alchemy Pay', status: 'filled' },
    { role: 'DeFi (DEX/lending)', who: 'Raydium · Jupiter · Kamino', status: 'filled' },
    { role: 'Engagement · Utility · Loyalty', who: 'Castar', status: 'castar' },
    { role: 'Audit / Compliance', who: 'Open tile', status: 'open' },
  ]
  return (
    <section className="sqd-section-gradient relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="sqd-eyebrow mb-4">The category</p>
            <h2 className="text-display-2 font-extrabold tracking-[-0.04em] text-gradient-heading text-balance">
              Every layer of the stack has an owner.
              <br />
              <span className="text-white/45">Until you get to the holder relationship.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/65">
              The xStocks Alliance has tiles for issuers, exchanges, wallets, chains, oracles, on-ramps. There is no perks/utility tile. Castar is the venue-neutral way to fill it across every issuer and every rail.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tiles.map((t, i) => (
            <Reveal key={t.role} delay={i * 40}>
              <div
                className={[
                  'h-full border p-5 transition',
                  t.status === 'castar'
                    ? 'border-[#F04C1C]/70 bg-[#F04C1C]/[0.08]'
                    : t.status === 'open'
                      ? 'border-dashed border-white/30 bg-white/[0.025]'
                      : 'border-white/10 bg-white/[0.025]',
                ].join(' ')}
              >
                <div
                  className={[
                    'font-mono text-[10px] uppercase tracking-[0.14em]',
                    t.status === 'castar'
                      ? 'text-[#F04C1C]'
                      : t.status === 'open'
                        ? 'text-white/55'
                        : 'text-white/40',
                  ].join(' ')}
                >
                  {t.role}
                </div>
                <div
                  className={[
                    'mt-2 text-[13.5px] font-semibold leading-snug',
                    t.status === 'castar' ? 'text-white' : 'text-white/85',
                  ].join(' ')}
                >
                  {t.who}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 Audiences                                  */
/* -------------------------------------------------------------------------- */

function Audiences() {
  return (
    <section id="audiences" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="sqd-eyebrow mb-4">Who it&apos;s for</p>
            <h2 className="text-display-2 font-extrabold tracking-[-0.04em] text-gradient-heading text-balance">
              Two sides of the same primitive.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <AudienceCard
              icon={<Storefront size={22} weight="duotone" />}
              tag="For brands"
              title="Reward the holders who already own a piece of you."
              bullets={[
                'Verify shareholder status in one API call',
                'Run perks, cashback, gated drops, voting',
                'Brand never sees raw positions. Privacy by design',
                'Pricing: per-attestation + take-rate on cashback',
              ]}
              cta="Book a brand pilot"
              href="#contact"
              variant="outline"
            />
          </Reveal>
          <Reveal delay={120}>
            <AudienceCard
              icon={<Buildings size={22} weight="duotone" />}
              tag="For issuers + custodians"
              title="Turn tokens into real shareholder identities."
              bullets={[
                'Drop-in engagement layer for ITN tokens',
                'Castar never custodies, never executes. Read-only',
                'Joint launch + co-marketing on first pilot brand',
                'We drive volume back to your rail, not away from it',
              ]}
              cta="Become a launch partner"
              href="#contact"
              variant="accent"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function AudienceCard({
  icon,
  tag,
  title,
  bullets,
  cta,
  href,
  variant,
}: {
  icon: React.ReactNode
  tag: string
  title: string
  bullets: string[]
  cta: string
  href: string
  variant: 'outline' | 'accent'
}) {
  const isAccent = variant === 'accent'
  return (
    <div
      className={[
        'relative h-full overflow-hidden border p-8 sm:p-10',
        isAccent
          ? 'border-[#F04C1C]/60 bg-[#F04C1C]'
          : 'border-white/10 bg-white/[0.025]',
      ].join(' ')}
    >
      {isAccent ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-black/10 blur-3xl"
        />
      ) : null}
      <div className="relative">
        <div className={`mb-6 inline-flex h-11 w-11 items-center justify-center border ${isAccent ? 'border-black/20 bg-black text-white' : 'border-[#2A2A2A] bg-[#030303] text-[#F04C1C]'}`}>
          {icon}
        </div>
        <div className={`font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${isAccent ? 'text-black/60' : 'text-[#F04C1C]'}`}>
          {tag}
        </div>
        <h3 className={`mt-3 text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[32px] ${isAccent ? 'text-black' : 'text-white'}`}>
          {title}
        </h3>
        <ul className={`mt-6 space-y-3 text-[14.5px] ${isAccent ? 'text-black/75' : 'text-white/75'}`}>
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle size={18} weight="fill" className={`mt-0.5 ${isAccent ? 'text-black' : 'text-[#F04C1C]'}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-semibold transition ${
            isAccent
              ? 'bg-black text-white hover:bg-[#141414]'
              : 'border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08]'
          }`}
        >
          {cta}
          <ArrowRight size={16} weight="bold" />
        </a>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Timeline                                  */
/* -------------------------------------------------------------------------- */

function Timeline() {
  const events = [
    { when: 'Jun 2025', text: 'xStocks launches with 60 tokens on Solana. Backed/Kraken Alliance formed.' },
    { when: 'Oct 2025', text: 'Alpaca ITN launches at TOKEN2049 with Backed, Ondo, Dinari, DRW.' },
    { when: 'Dec 2025', text: 'Kraken acquires Backed. Alliance now Kraken-controlled.' },
    { when: 'Jan 2026', text: 'Alpaca raises $150M Series D at $1.15B. Tokenization infrastructure momentum accelerates.' },
    { when: 'Feb 2026', text: 'TiiCKER ships TickerPerks for TradFi brokers, proving perks demand.' },
    { when: 'Mar 2026', text: 'xStocks rewards split into two lanes: Kraken-held Opt-In Rewards and onchain xPoints activity.' },
    { when: 'Apr 2026', text: 'Ondo + Broadridge ship tokenized voting on 250+ tokens, limited to Ondo.' },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-6 lg:px-10 2xl:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 xl:gap-x-24">
          <Reveal className="lg:col-span-4">
            <p className="sqd-eyebrow mb-4">The window</p>
            <h2 className="max-w-[10ch] text-[clamp(3rem,5.2vw,5.55rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-gradient-heading text-balance">
              Eighteen months of compounding signals.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/65">
              Three competitors shipped pieces of this layer in the last 90 days. None is cross-rail. The category-defining player has not yet been crowned.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 2xl:col-start-7">
            <ol className="relative space-y-0 border-l-2 border-white/10 pl-8 lg:pl-10">
              {events.map((e, i) => (
                <li key={e.when} className="relative pb-10 last:pb-0">
                  <span
                    className={[
                      'absolute -left-[41px] top-1 grid h-4 w-4 place-items-center rounded-full bg-ink-700 ring-2 ring-white/15 lg:-left-[49px]',
                    ].join(' ')}
                  />
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F04C1C]">
                    {e.when}
                  </div>
                  <div className="mt-1 text-[15px] leading-relaxed text-white/80">
                    {e.text}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 Final CTA                                  */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_30%_30%,rgba(240,76,28,0.22),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(240,76,28,0.10),transparent_45%)]"
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="text-display-1 font-extrabold tracking-[-0.04em] text-balance text-gradient-heading">
            The Visa moment for
            <br />
            tokenized shareholders.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-white/70 sm:text-[19px]">
            Pilot-ready engine. Deployed contracts. Talk to us about a launch pilot, brand partnership, or Alliance integration.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hi@castar.dev" className="sqd-btn-primary">
              Talk to us
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#docs" className="sqd-btn-ghost">
              Read the docs
            </a>
          </div>
          <div className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            hi@castar.dev · shareholder benefits API
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Footer                                  */
/* -------------------------------------------------------------------------- */

function Footer() {
  const cols: { heading: string; links: { label: string; href: string }[] }[] = [
    {
      heading: 'Product',
      links: [
        { label: 'Verify API', href: '#solution' },
        { label: 'EAS attestations', href: '#docs' },
        { label: 'Programmable benefits', href: '#solution' },
        { label: 'Compliance', href: '#solution' },
      ],
    },
    {
      heading: 'Developers',
      links: [
        { label: 'Quickstart', href: '#docs' },
        { label: 'API reference', href: '#docs' },
        { label: 'Code examples', href: '#docs' },
        { label: 'Attestation flow', href: '#docs' },
      ],
    },
    {
      heading: 'Partners',
      links: [
        { label: 'For brands', href: '#audiences' },
        { label: 'For issuers', href: '#audiences' },
        { label: 'For custodians', href: '#audiences' },
        { label: 'Become a launch partner', href: '#contact' },
      ],
    },
    {
      heading: 'Network',
      links: [
        { label: 'xStocks Alliance', href: '#market' },
        { label: 'Alpaca Connect', href: '#market' },
        { label: 'Supported chains', href: '#market' },
        { label: 'Roadmap', href: '#market' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#contact' },
        { label: 'Signals', href: '/signals' },
        { label: 'Creators', href: '/creators' },
        { label: 'Contact', href: 'mailto:hi@castar.dev' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/[0.06] bg-ink-950/60 px-5 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Wordmark />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/55">
              The cross-rail verification + benefits layer for tokenized stocks. Plaid for shareholder identity.
            </p>
            <div className="mt-5 flex items-center gap-3 text-white/40">
              <a href="mailto:hi@castar.dev" aria-label="Email" className="transition hover:text-white">
                <ArrowUpRight size={18} weight="bold" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {cols.map((c) => (
              <div key={c.heading}>
                <h3 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">
                  {c.heading}
                </h3>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13px] text-white/65 transition hover:text-white/95"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[12px] text-white/40">
          <div>© {new Date().getFullYear()} Castar Labs. All rights reserved.</div>
          <div className="font-mono uppercase tracking-[0.18em]">
            Programmable shareholder benefits
          </div>
        </div>
      </div>
    </footer>
  )
}
