import {
  Trophy,
  GameController,
  MusicNote,
  ShoppingCart,
  Sneaker,
  PawPrint,
  Brain,
  Leaf,
} from '@phosphor-icons/react/dist/ssr'
import Nav from './components/NavClient'
import CreatorForm from './components/CreatorFormClient'
import FinalCTA from './components/FinalCTAClient'

function VirtualCard({ gradient, avatar }: { gradient: string; avatar: React.ReactNode }) {
  return (
    <div
      className={`w-72 h-44 rounded-2xl p-6 shadow-2xl flex flex-col justify-between ${gradient}`}
      style={{ fontFamily: 'monospace' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Castar</span>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">{avatar}</div>
      </div>
      <div>
        <div className="text-white/60 text-xs mb-1">•••• •••• •••• 4821</div>
        <div className="text-white font-semibold text-sm">Fan Member</div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="main-content" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Stacked rotating cards — first on mobile */}
          <div aria-hidden="true" className="relative flex items-center justify-center h-56 sm:h-64 lg:h-80 order-first lg:order-last">
            <div className="absolute" style={{ transform: 'rotate(-8deg) translateY(16px) translateX(-8px)' }}>
              <VirtualCard gradient="bg-gradient-to-br from-violet-600 to-pink-600" avatar={<MusicNote weight="duotone" className="w-5 h-5 text-white" />} />
            </div>
            <div className="absolute" style={{ transform: 'rotate(4deg) translateY(-8px) translateX(8px)' }}>
              <VirtualCard gradient="bg-gradient-to-br from-orange-500 to-rose-600" avatar={<GameController weight="duotone" className="w-5 h-5 text-white" />} />
            </div>
            <div className="relative">
              <VirtualCard gradient="bg-gradient-to-br from-teal-500 to-cyan-600" avatar={<img src="/logo3.svg" width="20" height="20" className="w-5 h-5 brightness-0 invert" alt="Castar" />} />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                Active — 2,450 XP
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-last lg:order-first">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6">
              One Card.{' '}
              <span className="text-teal-400">Infinite Worlds.</span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Turn your everyday spending into exclusive rewards, VIP access, and real-world impact for your favorite creators — without spending an extra dime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#for-creators"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all motion-safe:hover:scale-[1.02] shadow-lg shadow-teal-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Apply as a Creator
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Join Fan Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const perksCreators = [
  {
    title: 'True Passive Income',
    desc: "Stop relying on one-off sponsorships. Earn a percentage of your community's everyday spending for years to come.",
  },
  {
    title: 'Zero Cost to Fans',
    desc: "Never ask your audience for money again. They get free cashback; you get a revenue share from the world's biggest retail brands.",
  },
  {
    title: 'Boost Your D2C Sales',
    desc: "Have your own merch or cosmetics line? We'll subsidize massive cashback rates on your store to drive explosive sales and card adoption.",
  },
  {
    title: 'Turnkey Infrastructure',
    desc: 'Live in 14 days. We handle the banking, the compliance, and the gamification. You just invite your fans.',
  },
]

function ForCreators() {
  return (
    <section id="for-creators" className="py-24 sm:py-36 bg-teal-50 border-t border-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Creator dashboard mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-72 bg-slate-900 rounded-3xl p-5 shadow-2xl">
              <div className="text-slate-400 text-xs mb-1">Creator Dashboard</div>
              <div className="text-white font-bold text-lg mb-6">@YourChannel ✦</div>

              <div className="mb-6 pb-6 border-b border-slate-800">
                <div className="text-slate-400 text-xs mb-2">Passive Income</div>
                <div className="text-4xl font-extrabold text-teal-400 tracking-tight leading-none">$84,300</div>
                <div className="text-teal-400/70 text-xs font-semibold mt-2">↑ +$6,240 this month</div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Active Fans', value: '62,400' },
                  { label: 'Total GMV', value: '$4.2M' },
                  { label: 'Impact Generated', value: '$18,900' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-slate-500 text-xs">{stat.label}</span>
                    <span className="text-slate-100 text-sm font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-slate-600 text-xs text-center mt-5 pt-4 border-t border-slate-800">
                Powered by Castar · Live in 14 days
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Monetize loyalty, not just eyeballs.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Your audience already spends thousands every month. It&apos;s time you got a piece of it.
            </p>

            <div className="space-y-6">
              {perksCreators.map((perk, i) => (
                <div key={perk.title} className="flex gap-4">
                  <span className="text-teal-500 font-bold text-sm tabular-nums mt-0.5 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="text-slate-900 font-semibold text-base mb-1">{perk.title}</div>
                    <div className="text-slate-600 text-sm leading-relaxed">{perk.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <CreatorForm />
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    num: '01',
    title: 'Pick Your World',
    desc: 'Download the Castar app and select your favorite creator. Watch the entire app instantly transform into their unique brand, colors, and community hub.',
  },
  {
    num: '02',
    title: 'Spend Like Normal',
    desc: 'Add your free Castar virtual card to Apple Pay or Google Pay. Buy your morning coffee, order pizza, or shop for sneakers — nothing changes.',
  },
  {
    num: '03',
    title: 'Level Up & Give Back',
    desc: 'Every swipe earns you XP, unlocks creator rewards, merch, shoutouts, private chats, and automatically funds their chosen charity.',
  },
]

function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-xl">
            Spend the same. Earn more. Give back.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 md:divide-x md:divide-slate-200">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={[
                'flex flex-col',
                i === 0 ? 'md:pr-10' : '',
                i === 1 ? 'md:px-10' : '',
                i === 2 ? 'md:pl-10' : '',
                i > 0 ? 'border-t border-slate-100 pt-10 md:border-t-0 md:pt-0' : '',
              ].join(' ')}
            >
              <div className="text-7xl font-extrabold text-slate-100 leading-none mb-6 select-none tabular-nums">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const perksFans = [
  {
    title: 'Support Without Subscriptions',
    desc: 'Cancel the $5/month paywalls. Support your idol passively just by buying the things you already buy.',
  },
  {
    title: 'Exclusive Discounts',
    desc: 'Unlock special Card-Linked Offers curated by your creator. Get up to 20% cashback at partner brands.',
  },
  {
    title: 'Climb the Leaderboard',
    desc: "Earn XP for every dollar spent. Prove you're the #1 fan and unlock exclusive perks, early merch drops, and VIP Discord access.",
  },
  {
    title: 'Dynamic Theming',
    desc: 'Bored? Switch your active creator anytime. Your card, your rules.',
  },
]

function ForFans() {
  return (
    <section id="for-fans" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              The Ultimate Fan Pass.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              One free card. Zero extra spending. Everything you love about being a fan — turned into a game you actually win.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {perksFans.map((perk) => (
                <div key={perk.title}>
                  <div className="text-slate-900 font-semibold text-base mb-1.5">{perk.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{perk.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* App mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 bg-slate-900 rounded-3xl p-4 shadow-2xl">
              <div className="bg-slate-800 rounded-2xl p-4 mb-3">
                <div className="text-slate-400 text-xs mb-1">Active Creator</div>
                <div className="text-white font-bold flex items-center gap-1.5">MrBeast World <GameController weight="duotone" className="w-4 h-4 text-teal-400" /></div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-4 mb-3 shadow-lg">
                <div className="text-white/70 text-xs mb-4">CASTAR VIRTUAL CARD</div>
                <div className="text-white/60 text-xs font-mono mb-3">•••• •••• •••• 4821</div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-semibold text-sm">Fan Member</span>
                  <span className="text-white/70 text-xs flex items-center gap-1"><Trophy weight="duotone" className="w-3 h-3" /> Level 7</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-4 mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400 text-xs">XP Progress</span>
                  <span className="text-teal-400 text-xs font-semibold">2,450 / 3,000</span>
                </div>
                <div className="bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { Icon: ShoppingCart, label: 'Starbucks — +12 XP' },
                  { Icon: Sneaker, label: 'Nike — +45 XP' },
                  { Icon: MusicNote, label: 'Spotify — +8 XP' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="bg-slate-800 rounded-xl px-3 py-2 text-slate-400 text-xs flex items-center gap-2">
                    <Icon weight="duotone" className="w-3.5 h-3.5 flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type CellValue = { check: boolean | null; text: string | null }

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(20,184,166,0.15)" />
      <path d="M5.5 10.5l3 3 6-6" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(100,116,139,0.12)" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#475569" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Cell({ value }: { value: CellValue }) {
  if (value.check === false) return <Cross />
  if (value.check === true) {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <Check />
        {value.text && <span className="text-teal-400 text-[11px] font-medium leading-tight">{value.text}</span>}
      </span>
    )
  }
  return <span className="text-slate-500 text-xs font-medium">{value.text}</span>
}

const features = [
  {
    label: 'Support Creators for Free',
    neobank: { check: false, text: null },
    creatorSubs: { check: false, text: null },
    rewards: { check: false, text: null },
    castar: { check: true, text: 'Funded by Brands' },
  },
  {
    label: 'Earn Cashback on Spend',
    neobank: { check: null, text: 'Basic / Limited' },
    creatorSubs: { check: false, text: null },
    rewards: { check: true, text: null },
    castar: { check: true, text: 'Up to 20% CLO' },
  },
  {
    label: 'Gamified XP & Leaderboards',
    neobank: { check: false, text: null },
    creatorSubs: { check: false, text: null },
    rewards: { check: false, text: null },
    castar: { check: true, text: null },
  },
  {
    label: 'Creator-Branded UI / App',
    neobank: { check: false, text: null },
    creatorSubs: { check: true, text: null },
    rewards: { check: false, text: null },
    castar: { check: true, text: 'Dynamic Theming' },
  },
  {
    label: 'Automatic Charity Impact',
    neobank: { check: null, text: 'Optional / Manual' },
    creatorSubs: { check: false, text: null },
    rewards: { check: false, text: null },
    castar: { check: true, text: 'Built-in' },
  },
] satisfies { label: string; neobank: CellValue; creatorSubs: CellValue; rewards: CellValue; castar: CellValue }[]

function ComparisonTable() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Why Castar <span className="text-teal-400">wins.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The only card that combines banking, creator support, and rewards.
          </p>
        </div>

        {/* ── Mobile layout (< md) ── */}
        <div className="md:hidden flex flex-col gap-3">
          {features.map((row) => {
            const competitors: { label: string; sub: string; value: CellValue }[] = [
              { label: 'Neobanks', sub: 'Revolut', value: row.neobank },
              { label: 'Creator Subs', sub: 'Patreon', value: row.creatorSubs },
              { label: 'Rewards Apps', sub: 'Honey', value: row.rewards },
            ]
            return (
              <div key={row.label} className="rounded-xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-900/60 px-4 py-3 text-slate-300 text-sm font-semibold">
                  {row.label}
                </div>
                <div
                  className="flex items-center justify-between px-4 py-3 border-t-2 border-violet-500/40"
                  style={{ background: 'linear-gradient(90deg, rgba(109,40,217,0.18), rgba(109,40,217,0.08))' }}
                >
                  <span className="text-violet-300 text-xs font-bold tracking-wide">✦ Castar</span>
                  <span className="flex items-center gap-1.5">
                    <Cell value={row.castar} />
                  </span>
                </div>
                {competitors.map((c) => (
                  <div key={c.label} className="flex items-center justify-between px-4 py-2.5 border-t border-slate-800/60">
                    <span className="text-slate-500 text-xs">
                      {c.label} <span className="text-slate-700">· {c.sub}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Cell value={c.value} />
                    </span>
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        {/* ── Desktop layout (≥ md) ── */}
        <div className="hidden md:block rounded-2xl border border-slate-800 overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="text-left px-6 py-5 text-slate-500 text-xs font-semibold uppercase tracking-wider bg-slate-900/60 w-[30%] border-b border-slate-800">
                  Feature
                </th>
                <th
                  scope="col"
                  className="px-5 py-5 text-center border-b border-violet-500/40 border-l-2 border-l-violet-500/50"
                  style={{ background: 'linear-gradient(180deg, rgba(109,40,217,0.18) 0%, rgba(109,40,217,0.06) 100%)' }}
                >
                  <span className="block text-violet-300 text-sm font-bold tracking-tight">Castar</span>
                </th>
                {[
                  { label: 'Neobanks', sub: 'Revolut' },
                  { label: 'Creator Subs', sub: 'Patreon' },
                  { label: 'Rewards Apps', sub: 'Honey' },
                ].map((col) => (
                  <th
                    key={col.label}
                    scope="col"
                    className="px-5 py-5 text-center bg-slate-900/40 border-b border-slate-800 border-l border-slate-800"
                  >
                    <span className="block text-slate-400 text-sm font-semibold">{col.label}</span>
                    <span className="block text-slate-600 text-xs mt-0.5">{col.sub}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-slate-900/20' : 'bg-transparent'}>
                  <th scope="row" className="px-6 py-5 text-left text-slate-300 text-sm font-medium border-t border-slate-800/70">
                    {row.label}
                  </th>
                  <td
                    className="px-5 py-5 text-center border-t border-violet-500/20 border-l-2 border-l-violet-500/50"
                    style={{ background: 'linear-gradient(180deg, rgba(109,40,217,0.10) 0%, rgba(109,40,217,0.04) 100%)' }}
                  >
                    <Cell value={row.castar} />
                  </td>
                  <td className="px-5 py-5 text-center border-t border-slate-800/70 border-l border-slate-800/50">
                    <Cell value={row.neobank} />
                  </td>
                  <td className="px-5 py-5 text-center border-t border-slate-800/70 border-l border-slate-800/50">
                    <Cell value={row.creatorSubs} />
                  </td>
                  <td className="px-5 py-5 text-center border-t border-slate-800/70 border-l border-slate-800/50">
                    <Cell value={row.rewards} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-xs text-center mt-6">
          Competitor features based on publicly available information as of 2026. Subject to change.
        </p>
      </div>
    </section>
  )
}

function ImpactEngine() {
  return (
    <section id="impact" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Spend for Good.
            </h2>
          </div>
          <div className="space-y-0">
            <div className="pb-8">
              <h3 className="text-slate-900 font-bold text-base mb-2">Brand-Funded Impact</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A percentage of our brand commissions goes directly to a charity chosen by your creator. You spend nothing extra — the brands pay.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-slate-900 font-bold text-base mb-2">Spare Change Round-Ups</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Buy a coffee for $4.50. We round it up to $5.00 and donate the $0.50 to causes like animal shelters, mental health, or climate action. Watch your impact grow in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          <div className="relative grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: PawPrint, cause: 'Animal Shelters', desc: 'Support local shelters and rescue organizations' },
              { icon: Brain, cause: 'Mental Health', desc: 'Fund awareness campaigns and access to care' },
              { icon: Leaf, cause: 'Climate Action', desc: 'Back reforestation and clean energy projects' },
            ].map((item) => (
              <div key={item.cause}>
                <div className="flex justify-center mb-3"><item.icon weight="duotone" className="w-10 h-10 text-white/80" /></div>
                <div className="text-white font-bold text-lg mb-2">{item.cause}</div>
                <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="relative text-center mt-10">
            <div className="text-white/60 text-sm">Creators choose their cause. Every swipe moves the needle.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo3.svg" alt="Castar" width="28" height="28" className="h-7 w-auto" />
              <span className="text-white font-bold text-base">Castar</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              One card. Every creator. Built for the communities that make the internet worth watching.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#for-creators" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Creator Application</a>
            <a href="mailto:hello@castar.tech" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">hello@castar.tech</a>
            <a href="https://www.linkedin.com/company/castartech" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900/80 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <small className="text-slate-500 text-xs">© 2026 Castar Labs. All rights reserved.</small>
          <small className="text-slate-500 text-xs text-center sm:text-right max-w-md leading-relaxed">
            Castar is a financial technology company, not a bank. Card issuing and payment services are provided by our regulated partners.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal-500 focus:text-white focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Nav />
      <Hero />
      <ForCreators />
      <HowItWorks />
      <ForFans />
      <ComparisonTable />
      <ImpactEngine />
      <FinalCTA />
      <Footer />
    </main>
  )
}
