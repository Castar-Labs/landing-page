'use client'

import { useState } from 'react'

function useLoopsForm(userGroup: 'fan' | 'creator') {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userGroup }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { email, setEmail, status, handleSubmit }
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Castar" className="h-8 w-auto" />
            <span className="text-slate-900 font-bold text-lg tracking-tight">Castar</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#for-fans" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">For Fans</a>
            <a href="#for-creators" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">For Creators</a>
            <a href="#impact" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Impact</a>
          </div>
          <a
            href="#waitlist"
            className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  )
}

function VirtualCard({ gradient, avatar }: { gradient: string; avatar: string }) {
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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-400 text-sm font-medium">Now accepting early access signups</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              One Card.{' '}
              <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                Infinite Worlds.
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Turn your everyday spending into exclusive rewards, VIP access, and real-world impact for your favorite creators—without spending an extra dime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-teal-500/25"
              >
                Get the App — Join Waitlist
              </a>
              <a
                href="#for-creators"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                Apply as a Creator
              </a>
            </div>
          </div>

          {/* Stacked rotating cards */}
          <div className="relative flex items-center justify-center h-64 lg:h-80">
            <div className="absolute" style={{ transform: 'rotate(-8deg) translateY(16px) translateX(-8px)' }}>
              <VirtualCard gradient="bg-gradient-to-br from-violet-600 to-pink-600" avatar="🎵" />
            </div>
            <div className="absolute" style={{ transform: 'rotate(4deg) translateY(-8px) translateX(8px)' }}>
              <VirtualCard gradient="bg-gradient-to-br from-orange-500 to-rose-600" avatar="🎮" />
            </div>
            <div className="relative">
              <VirtualCard gradient="bg-gradient-to-br from-teal-500 to-cyan-600" avatar="⭐" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                Active — 2,450 XP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Pick Your World',
      desc: 'Download the Castar app and select your favorite creator. Watch the entire app instantly transform into their unique brand, colors, and community hub.',
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3M9 21h6" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Spend Like Normal',
      desc: 'Add your free Castar virtual card to Apple Pay or Google Pay. Buy your morning coffee, order pizza, or shop for sneakers—nothing changes.',
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Level Up & Give Back',
      desc: 'Every swipe earns you XP, unlocks creator rewards—merch, shoutouts, private chats—and automatically funds their chosen charity.',
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">How It Works</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Support them passively.{' '}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Reward yourself instantly.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-teal-200 to-teal-200 pointer-events-none" />
          {steps.map((step) => (
            <div key={step.num} className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-teal-300 hover:shadow-md transition-all group">
              <div className="absolute -top-3 left-6 bg-teal-600 text-white text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                {step.num}
              </div>
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ForFans() {
  const perks = [
    {
      title: 'Support Without Subscriptions',
      desc: 'Cancel the $5/month paywalls. Support your idol passively just by buying the things you already buy.',
      icon: '💳',
    },
    {
      title: 'Exclusive Discounts',
      desc: 'Unlock special Card-Linked Offers curated by your creator. Get up to 20% cashback at partner brands.',
      icon: '🏷️',
    },
    {
      title: 'Climb the Leaderboard',
      desc: 'Earn XP for every dollar spent. Prove you\'re the #1 fan and unlock exclusive perks, early merch drops, and VIP Discord access.',
      icon: '🏆',
    },
    {
      title: 'Dynamic Theming',
      desc: 'Bored? Switch your active creator anytime. Your card, your rules.',
      icon: '🎨',
    },
  ]

  return (
    <section id="for-fans" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">For Fans</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              The Ultimate{' '}
              <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                Fan Pass.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              One free card. Zero extra spending. Everything you love about being a fan - turned into a game you actually win.
            </p>
            <div className="space-y-5">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-lg flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold text-sm mb-1">{perk.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{perk.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 bg-slate-900 rounded-3xl p-4 shadow-2xl">
              <div className="bg-slate-800 rounded-2xl p-4 mb-3">
                <div className="text-slate-400 text-xs mb-1">Active Creator</div>
                <div className="text-white font-bold">MrBeast World 🎮</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-4 mb-3 shadow-lg">
                <div className="text-white/70 text-xs mb-4">CASTAR VIRTUAL CARD</div>
                <div className="text-white/60 text-xs font-mono mb-3">•••• •••• •••• 4821</div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-semibold text-sm">Fan Member</span>
                  <span className="text-white/70 text-xs">⭐ Level 7</span>
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
                {['🛒 Starbucks — +12 XP', '👟 Nike — +45 XP', '🎵 Spotify — +8 XP'].map((tx) => (
                  <div key={tx} className="bg-slate-800 rounded-xl px-3 py-2 text-slate-400 text-xs">{tx}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CreatorForm() {
  const { email, setEmail, status, handleSubmit } = useLoopsForm('creator')

  if (status === 'success') {
    return (
      <div className="mt-8 bg-teal-50 border border-teal-200 rounded-2xl py-5 px-6 text-center">
        <div className="text-2xl mb-2">🎉</div>
        <div className="text-teal-800 font-bold text-base mb-1">Application received!</div>
        <div className="text-teal-600 text-sm">We'll be in touch within 48 hours.</div>
      </div>
    )
  }

  return (
    <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm outline-none transition-colors bg-white"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:scale-[1.02] whitespace-nowrap"
      >
        {status === 'loading' ? 'Sending...' : 'Apply as a Creator →'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-xs mt-2 w-full">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}

function ForCreators() {
  const perks = [
    {
      title: 'True Passive Income',
      desc: 'Stop relying on one-off sponsorships. Earn a percentage of your community\'s everyday spending for years to come.',
      icon: '💰',
    },
    {
      title: 'Zero Cost to Fans',
      desc: 'Never ask your audience for money again. They get free cashback; you get a revenue share from the world\'s biggest retail brands.',
      icon: '🎁',
    },
    {
      title: 'Boost Your D2C Sales',
      desc: 'Have your own merch or cosmetics line? We\'ll subsidize massive cashback rates on your store to drive explosive sales and card adoption.',
      icon: '🚀',
    },
    {
      title: 'Turnkey Infrastructure',
      desc: 'Live in 14 days. We handle the banking, the compliance, and the gamification. You just invite your fans.',
      icon: '⚡',
    },
  ]

  return (
    <section id="for-creators" className="py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Creator dashboard mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-72 bg-slate-900 rounded-3xl p-5 shadow-2xl">
              <div className="text-slate-400 text-xs mb-1">Creator Dashboard</div>
              <div className="text-white font-bold text-lg mb-5">@YourChannel ✦</div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Total GMV', value: '$4.2M' },
                  { label: 'Passive Income', value: '$84,300' },
                  { label: 'Active Fans', value: '62,400' },
                  { label: 'Impact Generated', value: '$18,900' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-800 rounded-xl p-3">
                    <div className="text-teal-400 font-bold text-base">{stat.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-teal-900/50 border border-teal-700/30 rounded-xl p-3 mb-3">
                <div className="text-teal-400 text-xs font-semibold mb-1">This Month</div>
                <div className="text-white text-sm">+$6,240 in passive revenue</div>
              </div>
              <div className="text-slate-600 text-xs text-center">Powered by Castar · Live in 14 days</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">For Creators</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Monetize loyalty,{' '}
              <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                not just eyeballs.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Your audience already spends thousands every month. It's time you got a piece of it.
            </p>
            <div className="space-y-5">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl border border-teal-100 flex items-center justify-center text-lg flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold text-sm mb-1">{perk.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{perk.desc}</div>
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

function ImpactEngine() {
  return (
    <section id="impact" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">The Impact Engine</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Spend for Good.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We believe in the power of community. That's why every Castar card has a built-in Impact Engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-teal-200 transition-colors">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-5 text-xl">🌍</div>
            <h3 className="text-slate-900 font-bold text-lg mb-3">Brand-Funded Impact</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              A percentage of our brand commissions goes directly to a charity chosen by your creator. You spend nothing extra—the brands pay.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-teal-200 transition-colors">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-5 text-xl">🪙</div>
            <h3 className="text-slate-900 font-bold text-lg mb-3">Spare Change Round-Ups</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Buy a coffee for $4.50. We round it up to $5.00 and donate the $0.50 to causes like animal shelters, mental health, or climate action. Watch your impact grow in real-time.
            </p>
          </div>
        </div>

        {/* Impact card visual */}
        <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          <div className="relative grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🐾', cause: 'Animal Shelters', desc: 'Support local shelters and rescue organizations' },
              { icon: '🧠', cause: 'Mental Health', desc: 'Fund awareness campaigns and access to care' },
              { icon: '🌱', cause: 'Climate Action', desc: 'Back reforestation and clean energy projects' },
            ].map((item) => (
              <div key={item.cause}>
                <div className="text-4xl mb-3">{item.icon}</div>
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

function FinalCTA() {
  const { email, setEmail, status, handleSubmit } = useLoopsForm('fan')

  return (
    <section id="waitlist" className="py-28 bg-slate-950">
      <div className="absolute inset-x-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.3), transparent)' }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-teal-400 text-sm font-medium">Limited early access spots available</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Ready to change the way you spend?
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Join the waitlist today. The first 10,000 users get a permanent{' '}
          <span className="text-teal-400 font-semibold">2x XP multiplier</span>.
        </p>

        {status === 'success' ? (
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-2xl py-8 px-6">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-white font-bold text-xl mb-2">You're on the list!</div>
            <div className="text-slate-400 text-sm">We'll reach out when your early access is ready.</div>
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-[1.02] whitespace-nowrap shadow-lg shadow-teal-500/25"
            >
              {status === 'loading' ? 'Saving...' : 'Claim My Spot'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-xs mt-3">Something went wrong. Please try again.</p>
        )}
        <p className="text-slate-600 text-xs mt-6">We promise no SPAM 🤞</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-900 py-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Castar" className="h-6 w-auto" />
            <span className="text-white font-bold text-sm">Castar</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#for-creators" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Creator Application</a>
            <a href="mailto:hello@castar.tech" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">Support</a>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-6">
          <p className="text-slate-600 text-xs text-center max-w-2xl mx-auto leading-relaxed">
            &copy; 2026 Castar Labs. All rights reserved. Castar is a financial technology company, not a bank. Card issuing and payment services are provided by our regulated partners.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <Hero />

      <HowItWorks />
      <ForFans />
      <ForCreators />
      <ImpactEngine />
      <FinalCTA />
      <Footer />
    </main>
  )
}
