import {
  ArrowRight,
  CheckCircle,
  Lightning,
  ShieldCheck,
  Stack,
  Plugs,
  Wallet,
  Buildings,
  Storefront,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <CodeSection />
      <Market />
      <HowItWorks />
      <CategoryMap />
      <Audiences />
      <Timeline />
      <FinalCTA />
      <Footer />
    </main>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Nav                                     */
/* -------------------------------------------------------------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#solution" className="hover:text-slate-900">Product</a>
          <a href="#audiences" className="hover:text-slate-900">For brands</a>
          <a href="#audiences" className="hover:text-slate-900">For issuers</a>
          <a href="#market" className="hover:text-slate-900">Why now</a>
          <a href="#docs" className="hover:text-slate-900">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:inline-flex"
          >
            Talk to us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get API access
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Wordmark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-7 w-7 place-items-center rounded-md bg-slate-900 text-[15px] font-black text-[#E8FF6B]">
        c
      </div>
      <span className="text-[17px] font-extrabold tracking-tight">castar</span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#06070C] text-white">
      {/* Ambient gradient orbs (drift) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-orb-a absolute left-[-12%] top-[12%] h-[42rem] w-[42rem] rounded-full bg-[#E8FF6B]/[0.10] blur-[140px]" />
        <div className="hero-orb-b absolute right-[-8%] bottom-[-10%] h-[48rem] w-[48rem] rounded-full bg-cyan-400/[0.10] blur-[140px]" />
        <div className="hero-orb-c absolute right-[18%] top-[28%] h-[24rem] w-[24rem] rounded-full bg-violet-500/[0.10] blur-[110px]" />
      </div>

      {/* Subtle dot field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]"
      />

      {/* Vignette to anchor type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_30%_55%,rgba(0,0,0,0.55)_0%,transparent_55%)]"
      />

      {/* Animated ribbons + node */}
      <HeroRibbons />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-28 sm:py-32 lg:py-40">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8FF6B] shadow-[0_0_10px_rgba(232,255,107,0.9)]" />
            Live on INK · 6 xStock tokens supported
          </div>
          <h1 className="font-extrabold tracking-[-0.03em]">
            <span className="block bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl leading-[1.02] text-transparent sm:text-6xl lg:text-[5.75rem] lg:leading-[0.96]">
              Shareholder identity
            </span>
            <span className="mt-2 block text-5xl leading-[1.02] text-white/45 sm:text-6xl lg:text-[5.75rem] lg:leading-[0.96]">
              for tokenized stocks.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-[1.55] text-white/70 sm:text-xl">
            One API to verify tokenized‑stock ownership across every rail — Alpaca custody, xStocks tokens, on‑chain wallets — and trigger programmable benefits.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#E8FF6B] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_-8px_rgba(232,255,107,0.6)] transition hover:bg-[#f0ff8a]"
            >
              Get API access
              <ArrowRight
                size={16}
                weight="bold"
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/[0.08]"
            >
              See how it works
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/55">
            <BulletDark>Read‑only OAuth</BulletDark>
            <BulletDark>Never custodial</BulletDark>
            <BulletDark>EAS attestations on‑chain</BulletDark>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
        <span>scroll</span>
        <span aria-hidden className="h-6 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}

function BulletDark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle size={16} weight="fill" className="text-[#E8FF6B]" />
      <span className="font-medium text-white/80">{children}</span>
    </span>
  )
}

/* ----------------------------------------------------------- */
/*  HeroRibbons — two flowing curves converging to a node      */
/*  Pure SVG + SMIL animation; no client JS required.          */
/* ----------------------------------------------------------- */

function HeroRibbons() {
  // Two C-shaped curves converging at a node on the right side.
  // viewBox = 1600 x 900. Node sits at (1380, 450).
  const PATH_A = 'M 80 820 C 1180 820, 1480 460, 760 80'
  const PATH_B = 'M 80 80 C 1180 80, 1480 460, 760 820'
  const NODE_X = 1380
  const NODE_Y = 450

  // Particle drop-in delays (staggered along each ribbon)
  const aDelays = ['0s', '1.4s', '2.8s', '4.2s']
  const bDelays = ['0.7s', '2.1s', '3.5s', '4.9s']

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="ribbonA" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="#E8FF6B" stopOpacity="0" />
            <stop offset="35%" stopColor="#E8FF6B" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#5EEAD4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbonB" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="#A5F3FC" stopOpacity="0" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#7F77DD" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7F77DD" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="nodeHalo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#E8FF6B" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#E8FF6B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E8FF6B" stopOpacity="0" />
          </radialGradient>

          <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          {/* Reusable path defs — referenced by <use> and <mpath> */}
          <path id="ribbon-path-a" d={PATH_A} />
          <path id="ribbon-path-b" d={PATH_B} />
        </defs>

        {/* ======= RIBBON A ======= */}
        {/* halo glow under-layer */}
        <use
          href="#ribbon-path-a"
          stroke="#E8FF6B"
          strokeOpacity="0.22"
          strokeWidth="48"
          fill="none"
          filter="url(#ribbonGlow)"
        />
        {/* main flowing layer */}
        <use
          href="#ribbon-path-a"
          stroke="url(#ribbonA)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="160 70"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1380"
            dur="6s"
            repeatCount="indefinite"
          />
        </use>
        {/* fast bright sparkle layer */}
        <use
          href="#ribbon-path-a"
          stroke="#FFFFFF"
          strokeOpacity="0.85"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3 36"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-780"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </use>

        {/* ======= RIBBON B ======= */}
        <use
          href="#ribbon-path-b"
          stroke="#7F77DD"
          strokeOpacity="0.22"
          strokeWidth="48"
          fill="none"
          filter="url(#ribbonGlow)"
        />
        <use
          href="#ribbon-path-b"
          stroke="url(#ribbonB)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="160 70"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="1380"
            dur="6.6s"
            repeatCount="indefinite"
          />
        </use>
        <use
          href="#ribbon-path-b"
          stroke="#E8FF6B"
          strokeOpacity="0.8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3 36"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="780"
            dur="2.7s"
            repeatCount="indefinite"
          />
        </use>

        {/* ======= PARTICLES along each path ======= */}
        {aDelays.map((begin, i) => (
          <circle key={`pa-${i}`} r="3" fill="#E8FF6B">
            <animateMotion
              dur="5.6s"
              repeatCount="indefinite"
              begin={begin}
              rotate="auto"
            >
              <mpath href="#ribbon-path-a" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;0.95;1;0.9;0"
              keyTimes="0;0.15;0.5;0.85;1"
              dur="5.6s"
              repeatCount="indefinite"
              begin={begin}
            />
          </circle>
        ))}
        {bDelays.map((begin, i) => (
          <circle key={`pb-${i}`} r="3" fill="#A5F3FC">
            <animateMotion
              dur="5.6s"
              repeatCount="indefinite"
              begin={begin}
              rotate="auto"
            >
              <mpath href="#ribbon-path-b" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;0.95;1;0.9;0"
              keyTimes="0;0.15;0.5;0.85;1"
              dur="5.6s"
              repeatCount="indefinite"
              begin={begin}
            />
          </circle>
        ))}

        {/* ======= NODE ======= */}
        <g transform={`translate(${NODE_X} ${NODE_Y})`}>
          {/* slow rotating dashed orbit ring (outer) */}
          <g>
            <circle
              r="180"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.06"
              strokeWidth="1"
              strokeDasharray="2 16"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="48s"
              repeatCount="indefinite"
            />
          </g>
          {/* mid orbit ring (counter-rotating) */}
          <g>
            <circle
              r="120"
              fill="none"
              stroke="#E8FF6B"
              strokeOpacity="0.18"
              strokeWidth="1"
              strokeDasharray="3 12"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="-360"
              dur="32s"
              repeatCount="indefinite"
            />
          </g>

          {/* sonar pings (3 staggered) */}
          {[
            { begin: '0s' },
            { begin: '1s' },
            { begin: '2s' },
          ].map((ring, i) => (
            <circle
              key={`ring-${i}`}
              r="14"
              fill="none"
              stroke="#E8FF6B"
              strokeWidth="1.5"
            >
              <animate
                attributeName="r"
                from="14"
                to="100"
                dur="3s"
                begin={ring.begin}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                from="0.7"
                to="0"
                dur="3s"
                begin={ring.begin}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* big halo (radial gradient, pulsing) */}
          <circle r="60" fill="url(#nodeHalo)">
            <animate
              attributeName="r"
              values="50;72;50"
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>

          {/* solid lime core */}
          <circle r="14" fill="#E8FF6B">
            <animate
              attributeName="r"
              values="13;16;13"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>

          {/* inner white highlight */}
          <circle r="5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                Trust bar                                   */
/* -------------------------------------------------------------------------- */

function TrustBar() {
  const partners = [
    'Alpaca',
    'xStocks',
    'Backed',
    'Kraken',
    'Phantom',
    'Chainlink',
    'Solana',
    'INK',
  ]
  return (
    <section className="border-b border-slate-200/70 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center font-mono text-[11px] tracking-[0.2em] text-slate-500">
          BUILT TO PLUG INTO THE TOKENIZED‑STOCK STACK
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="text-base font-bold tracking-tight text-slate-400"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Problem                                   */
/* -------------------------------------------------------------------------- */

function Problem() {
  return (
    <section className="border-b border-slate-200/70 bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>The wedge</Eyebrow>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Today, holding a tokenized share is just price exposure.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              No votes. No dividends. No perks at the businesses you own a piece of. The platforms say so themselves — they just haven&apos;t built the layer that fixes it.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            <Pullquote
              source="alpaca.markets/tokenization"
              text="Holders of tokenized assets have no voting rights, dividend entitlements, or legal claims to the underlying company shares… unless explicitly stated otherwise."
            />
            <Pullquote
              source="kraken.com/legal/xstocks"
              text="No voting rights. No governance participation. No traditional dividend distributions. No redemption rights."
            />
            <p className="mt-2 max-w-xl text-sm font-medium text-slate-500">
              That &quot;unless explicitly stated otherwise&quot; is the entire opportunity. Castar is the layer that explicitly states otherwise — verifiably, across every rail.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
      {children}
    </span>
  )
}

function Pullquote({ source, text }: { source: string; text: string }) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <blockquote className="text-lg font-medium leading-snug text-slate-800 sm:text-xl">
        <span className="mr-1 text-3xl leading-none text-slate-300">“</span>
        {text}
      </blockquote>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
        — {source}
      </figcaption>
    </figure>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Solution                                  */
/* -------------------------------------------------------------------------- */

function Solution() {
  return (
    <section id="solution" className="border-b border-slate-200/70 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The product</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            One API. Every rail.
            <br />
            <span className="text-slate-500">Signed entitlements out.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A brand calls{' '}
            <code className="rounded-md bg-slate-900 px-2 py-1 font-mono text-[13px] text-[#E8FF6B]">
              castar/verify
            </code>
            . We resolve the holder&apos;s identity across custodial, tokenized, and on‑chain rails — and return a signed attestation. The brand never sees raw positions.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Plugs size={22} weight="duotone" />}
            title="Cross‑rail by design"
            text="Bind one Castar identity to Alpaca, xStocks, and self‑custody wallets. Sum holdings nobody else can see in a single attestation."
          />
          <Feature
            icon={<ShieldCheck size={22} weight="duotone" />}
            title="Privacy‑preserving"
            text="Raw balances never leave Castar. Brands get a signed entitlement — qualified, tier, expiry. We are the data minimizer."
          />
          <Feature
            icon={<Lightning size={22} weight="duotone" />}
            title="Permissionless to ship"
            text="Read‑only OAuth on Alpaca needs no scope. On‑chain reads need no permission. Integrate in a weekend, scale into the Alliance."
          />
          <Feature
            icon={<Stack size={22} weight="duotone" />}
            title="Programmable benefits"
            text="Perks, cashback, voting, gated drops, brand access. Castar verifies — you decide the experience. Same primitive, every shape."
          />
          <Feature
            icon={<CheckCircle size={22} weight="duotone" />}
            title="Compliance posture: Plaid"
            text="Read‑only aggregation. Never broker‑dealer. Never custody securities or fiat. SOC 2 Type 1 in year one."
          />
          <Feature
            icon={<Wallet size={22} weight="duotone" />}
            title="Custodial + non‑custodial"
            text="A Phantom user holding TSLAx in self‑custody and an Alpaca user holding TSLA in custody resolve to the same entitlement."
          />
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm sm:p-7">
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-[#E8FF6B]">
        {icon}
      </div>
      <h3 className="text-lg font-bold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                Code section                                */
/* -------------------------------------------------------------------------- */

function CodeSection() {
  return (
    <section
      id="docs"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_18%_15%,rgba(232,255,107,0.18),transparent_42%),radial-gradient(circle_at_82%_84%,rgba(45,212,191,0.16),transparent_42%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8FF6B]">
              Two paths · both shippable in weeks
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built on permissionless reads.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
              Read‑only positions on Alpaca need no scope. xStocks transfers are open. The hard part isn&apos;t access — it&apos;s the resolver that binds rails into one identity. That&apos;s us.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-200">
              <CodeBullet>SIWE + EAS attestations live on INK Sepolia</CodeBullet>
              <CodeBullet>Alpaca Connect Marketplace ready</CodeBullet>
              <CodeBullet>Token2022 Scaled UI Amount supported</CodeBullet>
              <CodeBullet>Six xStock tokens shipped today</CodeBullet>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <CodeCard
                label="Custodial · Alpaca OAuth"
                lines={[
                  ['comment', '// read-only — no scope required'],
                  ['plain', 'GET /v2/positions'],
                  ['plain', 'Authorization: Bearer <token>'],
                  ['blank', ''],
                  ['comment', '// → resolved holdings'],
                  ['plain', '[ { symbol: "TSLA", qty: "12.4" } ]'],
                ]}
              />
              <CodeCard
                label="Non‑custodial · on‑chain"
                lines={[
                  ['comment', '// permissionless balance read'],
                  ['plain', 'const acc = await getAccount(conn, ata)'],
                  ['plain', 'const cfg = await getScaledUi(mint)'],
                  ['plain', 'shares = acc.amount * cfg.multiplier'],
                  ['blank', ''],
                  ['comment', '// SIWE → EAS attestation'],
                  ['plain', 'castar/verify { uid, sig, msg }'],
                ]}
              />
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-slate-300">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E8FF6B]">
                  The bind is the moat —{' '}
                </span>
                one Castar user_id ties (Alpaca account) ↔ (Phantom wallet) ↔ (Kraken account). Brand asks &quot;does this user qualify?&quot;, Castar fans out, sums, signs. Neither broker nor wallet alone can answer that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E8FF6B]" />
      <span>{children}</span>
    </li>
  )
}

function CodeCard({
  label,
  lines,
}: {
  label: string
  lines: ['comment' | 'plain' | 'blank', string][]
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <div className="border-b border-white/5 px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#E8FF6B]">
        {label}
      </div>
      <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.7]">
        {lines.map(([kind, text], i) => {
          if (kind === 'blank') return <div key={i} className="h-3" />
          if (kind === 'comment')
            return (
              <div key={i} className="text-slate-500">
                {text}
              </div>
            )
          return (
            <div key={i} className="text-slate-100">
              {text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Market                                    */
/* -------------------------------------------------------------------------- */

function Market() {
  const stats: { value: string; label: string; source: string }[] = [
    { value: '$25–30B', label: 'xStocks cumulative volume', source: 'kraken.com · cryptotimes.io' },
    { value: '94%', label: 'Alpaca share of tokenized US stocks', source: 'alpaca.markets/blog' },
    { value: '$480M+', label: 'Alpaca tokenized AUC', source: 'alpaca.markets/blog' },
    { value: '100K+', label: 'Unique on‑chain xStock holders', source: 'cryptotimes.io · Apr 2026' },
    { value: '100+', label: 'xStock tokens · target 500 by EOY', source: 'kraken.com/blog' },
    { value: '6', label: 'Chains: SOL · ETH · Mantle · TON · Ink · BNB', source: 'xstocks.com' },
    { value: '$20B/yr', label: 'Kabunushi yutai precedent in Japan', source: 'shareholder perks proven loop' },
    { value: '$1.15B', label: 'Alpaca Series D valuation · Jan 2026', source: 'theblock.co' },
  ]

  return (
    <section id="market" className="border-b border-slate-200/70 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Eyebrow>Why now</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Tokenized stocks tripled in six months.
              <span className="text-slate-500"> The utility layer doesn&apos;t exist yet.</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-slate-600">
              Six months ago Alpaca&apos;s ITN didn&apos;t exist and xStocks volume was $10B. Today: <strong className="text-slate-900">$25–30B+ cumulative volume</strong>, <strong className="text-slate-900">100K+ on‑chain holders</strong>, <strong className="text-slate-900">$480M+ AUC on Alpaca alone</strong>. Every actor is in place. Nobody owns the network that binds them.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 sm:p-7">
              <div className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-[13.5px] font-medium leading-snug text-slate-700">
                {s.label}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                How it works                                */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Bind the rails',
      text: 'User connects Alpaca via OAuth, links a Phantom wallet via SIWE, and any other broker via Plaid Investments. One Castar user_id, every position.',
    },
    {
      n: '02',
      title: 'Verify on demand',
      text: 'Brand calls castar/verify with the asset and tier rules. We fan out across every linked rail, sum holdings, and check entitlement criteria.',
    },
    {
      n: '03',
      title: 'Return a signed attestation',
      text: 'Castar returns an EAS‑signed entitlement: qualifies, tier, expiry. The brand pays the perk via their existing rails. We stay non‑custodial.',
    },
  ]
  return (
    <section className="border-b border-slate-200/70 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Three steps from holder to entitlement.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
            >
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                Step {s.n}
              </div>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    { role: 'Chains', who: 'Solana · Mantle · TON · Ink · BNB · ETH', status: 'filled' },
    { role: 'Oracle', who: 'Chainlink', status: 'filled' },
    { role: 'On‑ramp', who: 'Alchemy Pay', status: 'filled' },
    { role: 'DeFi (DEX/lending)', who: 'Raydium · Jupiter · Kamino', status: 'filled' },
    { role: 'Engagement · Utility · Loyalty', who: 'Castar', status: 'castar' },
    { role: 'Audit / Compliance', who: 'Open tile', status: 'open' },
  ]
  return (
    <section className="border-b border-slate-200/70 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The category</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Every layer of the stack has an owner.
            <br />
            <span className="text-slate-500">Until you get to the holder relationship.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            The xStocks Alliance has tiles for issuers, exchanges, wallets, chains, oracles, on‑ramps. There is no perks/utility tile. Castar is the venue‑neutral way to fill it — across every issuer, every rail.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tiles.map((t) => (
            <div
              key={t.role}
              className={[
                'rounded-2xl border p-5',
                t.status === 'castar'
                  ? 'border-slate-900 bg-slate-900 text-white shadow-[0_0_0_4px_rgba(232,255,107,0.18)]'
                  : t.status === 'open'
                    ? 'border-amber-300 border-dashed bg-amber-50 text-slate-800'
                    : 'border-slate-200 bg-white text-slate-800',
              ].join(' ')}
            >
              <div
                className={[
                  'font-mono text-[10px] uppercase tracking-[0.14em]',
                  t.status === 'castar'
                    ? 'text-[#E8FF6B]'
                    : t.status === 'open'
                      ? 'text-amber-700'
                      : 'text-slate-500',
                ].join(' ')}
              >
                {t.role}
              </div>
              <div
                className={[
                  'mt-2 text-sm font-semibold leading-snug',
                  t.status === 'castar' ? 'text-white' : '',
                ].join(' ')}
              >
                {t.who}
              </div>
            </div>
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
    <section
      id="audiences"
      className="border-b border-slate-200/70 bg-slate-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <AudienceCard
            icon={<Storefront size={22} weight="duotone" />}
            tag="For brands"
            title="Reward the holders who already own a piece of you."
            bullets={[
              'Verify shareholder status in one API call',
              'Run perks, cashback, gated drops, voting',
              'Brand never sees raw positions — privacy by design',
              'Pricing: per‑attestation + take‑rate on cashback',
            ]}
            cta="Book a brand pilot"
            href="#contact"
            tone="light"
          />
          <AudienceCard
            icon={<Buildings size={22} weight="duotone" />}
            tag="For issuers + custodians"
            title="Turn tokens into real shareholder identities."
            bullets={[
              'Drop‑in engagement layer for ITN tokens',
              'Castar never custodies, never executes — read‑only',
              'Joint launch + co‑marketing on first pilot brand',
              'We drive volume back to your rail, not away from it',
            ]}
            cta="Become a launch partner"
            href="#contact"
            tone="dark"
          />
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
  tone,
}: {
  icon: React.ReactNode
  tag: string
  title: string
  bullets: string[]
  cta: string
  href: string
  tone: 'light' | 'dark'
}) {
  const isDark = tone === 'dark'
  return (
    <div
      className={[
        'rounded-3xl border p-8 sm:p-10',
        isDark
          ? 'border-slate-900 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-900',
      ].join(' ')}
    >
      <div
        className={[
          'mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl',
          isDark ? 'bg-white/10 text-[#E8FF6B]' : 'bg-slate-900 text-[#E8FF6B]',
        ].join(' ')}
      >
        {icon}
      </div>
      <div
        className={[
          'font-mono text-[11px] font-semibold uppercase tracking-[0.2em]',
          isDark ? 'text-[#E8FF6B]' : 'text-amber-700',
        ].join(' ')}
      >
        {tag}
      </div>
      <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-[2rem] sm:leading-[1.1]">
        {title}
      </h3>
      <ul
        className={[
          'mt-6 space-y-3 text-[15px]',
          isDark ? 'text-slate-300' : 'text-slate-600',
        ].join(' ')}
      >
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle
              size={18}
              weight="fill"
              className={isDark ? 'mt-0.5 text-[#E8FF6B]' : 'mt-0.5 text-emerald-600'}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={[
          'mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
          isDark
            ? 'bg-[#E8FF6B] text-slate-900 hover:bg-[#f0ff8a]'
            : 'bg-slate-900 text-white hover:bg-slate-800',
        ].join(' ')}
      >
        {cta}
        <ArrowRight size={16} weight="bold" />
      </a>
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
    { when: 'Dec 2025', text: 'Kraken acquires Backed. Alliance now Kraken‑controlled.' },
    { when: 'Jan 2026', text: 'Alpaca raises $150M Series D at $1.15B. 94% market share confirmed.' },
    { when: 'Feb 2026', text: 'TiiCKER ships TickerPerks for TradFi brokers — proves perks demand.' },
    { when: 'Mar 2026', text: 'Kraken Points launches — custodial‑only "perks‑adjacent" yield.' },
    { when: 'Apr 2026', text: 'Ondo + Broadridge ship tokenized voting on 250+ tokens — Ondo‑only.' },
    { when: 'May 2026', text: 'Castar opens BD with the Alliance + applies to YC. The cross‑rail wedge.' },
    { when: 'H1 2027', text: 'Kraken/Backed × Nasdaq permissioned US gateway goes live. US TAM unlocks.' },
  ]

  return (
    <section className="border-b border-slate-200/70 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>The window</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Eighteen months of compounding signals.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Three competitors shipped pieces of this layer in the last 90 days. None is cross‑rail. The category‑defining player has not yet been crowned.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="relative space-y-1 border-l-2 border-slate-200 pl-8">
              {events.map((e, i) => (
                <li
                  key={e.when}
                  className="relative pb-7 last:pb-0"
                >
                  <span
                    className={[
                      'absolute -left-[37px] top-1 grid h-4 w-4 place-items-center rounded-full',
                      i === events.length - 2
                        ? 'bg-slate-900 ring-4 ring-[#E8FF6B]'
                        : 'bg-white ring-2 ring-slate-300',
                    ].join(' ')}
                  >
                    {i === events.length - 2 ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E8FF6B]" />
                    ) : null}
                  </span>
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">
                    {e.when}
                  </div>
                  <div className="mt-1 text-[15px] leading-relaxed text-slate-700">
                    {e.text}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                Final CTA                                   */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_30%,rgba(232,255,107,0.20),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(45,212,191,0.18),transparent_45%)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          The Visa moment for
          <br />
          tokenized shareholders.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Live engine. Deployed contracts. Six tokens supported. Talk to us about a launch pilot, brand partnership, or Alliance integration.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hi@castar.dev"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8FF6B] px-7 py-4 text-base font-semibold text-slate-900 transition hover:bg-[#f0ff8a]"
          >
            Talk to us
            <ArrowRight size={18} weight="bold" />
          </a>
          <a
            href="#docs"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Read the docs
          </a>
        </div>
        <div className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
          hi@castar.dev · live on INK Sepolia
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Footer                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Wordmark />
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} Castar Labs.
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-slate-600">
          <a href="#solution" className="hover:text-slate-900">Product</a>
          <a href="#audiences" className="hover:text-slate-900">For brands</a>
          <a href="#audiences" className="hover:text-slate-900">For issuers</a>
          <a href="#docs" className="hover:text-slate-900">Docs</a>
          <a href="/creators" className="hover:text-slate-900">Creators</a>
          <a href="mailto:hi@castar.dev" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
