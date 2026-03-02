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
            <a href="#platform" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Platform</a>
            <a href="#for-creators" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">For Creators</a>
            <a href="#tech" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">The Tech</a>
            <a href="#investors" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">For Investors</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://calendly.com/hubert-castar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Book a Call
            </a>
            <a
              href="https://tally.so/r/PdAr4b"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Request Access to Data Room
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(20,184,166,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-teal-700 text-sm font-medium">Raising $2M Pre-Seed &middot; 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
            The Ultimate{' '}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              White-Label Microbanking
            </span>{' '}
            Platform for the Creator Economy.
          </h1>

          <p className="text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
            We turn massive audiences into thriving micro-economies. Launch a fully compliant,
            creator-branded stablecoin bank in days—with zero technical or regulatory friction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://calendly.com/hubert-castar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02]"
            >
              Book a Call
            </a>
            <a
              href="https://tally.so/r/PdAr4b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-900 font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              Request Access to Data Room
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            Entertainment Finance is here. The neobanking market will reach $2T by 2030.
          </p>
        </div>
      </div>
    </section>
  )
}

function MarketOpportunity() {
  return (
    <section id="platform" className="py-28 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">The Shift in Entertainment Finance</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Distribution without Monetization is a Missed Opportunity.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Stablecoin banks do not understand that distribution is king. Entertainers are not
            aware of how profitable stablecoins are. We connect the two.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-red-100 rounded-2xl p-8 shadow-sm">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="text-red-500 font-semibold text-xs uppercase tracking-widest mb-3">The Problem</div>
            <p className="text-slate-700 text-base leading-relaxed">
              Anyone with a massive community wants their own Neobank (like MrBeast acquiring Step),
              but they lack the <strong>capital</strong>, <strong>time</strong>, <strong>legal framework</strong>,
              and <strong>treasury expertise</strong> to build it.
            </p>
          </div>

          <div className="bg-white border border-teal-100 rounded-2xl p-8 shadow-sm">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-3">The Solution: Microbanks</div>
            <p className="text-slate-700 text-base leading-relaxed">
              We blend the <strong>extreme capital efficiency of stablecoins</strong> with the
              <strong> unmatched distribution power of the Entertainment Economy</strong>.
              One platform. Infinite audiences.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-teal-50 border border-teal-100 rounded-2xl p-6">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-4">Entertainment Finance is beginning now</div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              'MrBeast acquires Step neobank — Entertainment Finance begins',
              'Pengu (Pudgy Penguins) drives 100k card signups for Kast',
              "Elon Musk's X Money entering closed beta — targeting mass finance",
            ].map((event) => (
              <div key={event} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm leading-relaxed">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueProposition() {
  const features = [
    {
      title: 'Passive Revenue Engine',
      desc: (
        <>
          Keep <strong>70% of the net profit</strong> generated by treasury yields and daily card interchange fees.
        </>
      ),
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
    },
    {
      title: 'Fan Gamification',
      desc: 'Drive engagement with Daily Gifts and XP levels based on platform usage. Fans never see the word "crypto".',
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
    },
    {
      title: 'Real-World Utility',
      desc: 'Your fans get a virtual debit card (Apple Pay / Google Pay) to spend their creator-branded digital dollars anywhere in the world.',
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="for-creators" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">For Creators &amp; Agencies</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Your Brand.{' '}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Your Bank.
            </span>{' '}
            Your Profit.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Castar handles the complexity: compliance, fiat onramps, card issuing, and smart contracts.
            You simply promote your co-branded card to your fans and collect passive income.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 transition-colors group shadow-sm">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-slate-900 font-semibold text-base mb-2.5">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechMoat() {
  const pillars = [
    {
      num: '01',
      title: 'Zero-Fee ACH Onboarding',
      desc: 'Powered by Bridge API & Plaid. Fans deposit fiat for free; we subsidize the onramp. Zero friction from day one.',
    },
    {
      num: '02',
      title: 'Native Treasury Yield',
      desc: 'Under the hood, deposits are tokenized via our custom M0 extension, generating US Treasury yield safely and natively.',
    },
    {
      num: '03',
      title: 'Sponsored Smart Wallets',
      desc: 'Built on ERC-4337 (Account Abstraction). We sponsor all network fees on L2 so the user experience is completely flawless.',
    },
    {
      num: '04',
      title: 'Just-In-Time (JIT) Spending',
      desc: 'Powered by Stripe Issuing. When a fan swipes their card, we instantly liquidate their tokenized balance to fund the transaction in <2 seconds. No manual top-ups.',
    },
  ]

  return (
    <section id="tech" className="py-28 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">The Tech Moat</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Complex Under the Hood. Invisible to the Fan.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We removed all friction from the user journey. No gas fees, no seed phrases,
              just a seamless banking experience that feels like any other modern fintech app.
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="text-slate-400 text-xs uppercase tracking-widest mb-3">Powered By</div>
              <div className="grid grid-cols-3 gap-3">
                {['Bridge API', 'Plaid', 'M0 Protocol', 'ERC-4337', 'Stripe Issuing', 'Blockchain'].map((tech) => (
                  <div key={tech} className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-600 text-xs text-center hover:border-teal-300 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {pillars.map((item) => (
              <div key={item.num} className="flex gap-4 bg-white border border-slate-100 rounded-xl p-4 hover:border-teal-200 transition-colors shadow-sm">
                <div className="text-teal-300 font-mono text-xs font-semibold pt-0.5 w-6 flex-shrink-0">{item.num}</div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Investors() {
  return (
    <section id="investors" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">Unit Economics Engine</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Built for Scale. Profitable from Day One.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Our B2B2C model means creators act as our exclusive distribution channel. We acquire
            audiences, not individual users, driving our CAC to near zero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            {
              value: '~$2.00',
              label: 'Customer Acquisition Cost',
              detail: 'Our only acquisition cost is the one-time KYC verification.',
            },
            {
              value: '~5.0x',
              label: 'LTV:CAC Ratio',
              detail: 'Achieved even after paying out 70% of net profits to the creator and fully subsidizing the Web3 UX.',
            },
            {
              value: '$1.4M',
              label: 'ARR Target',
              detail: 'Achievable with just 2 active microbanks at 30,000 Monthly Active Users.',
            },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-teal-600 mb-2 leading-tight">{item.value}</div>
              <div className="text-slate-900 font-semibold mb-2">{item.label}</div>
              <div className="text-slate-500 text-sm leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="relative bg-teal-50 border border-teal-200 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(20,184,166,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white border border-teal-200 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-teal-700 text-sm font-medium">Raising $2M Pre-Seed &middot; 2026</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Funding Our Legal Framework, JIT Engineering,<br className="hidden sm:block" /> and Tier-1 Creator Partnerships.
            </h3>
            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              We are currently raising a <strong>$2M Pre-Seed</strong> round to fund our legal/compliance
              framework, high-end JIT engineering, and secure minimum guarantees with Tier-1 creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://calendly.com/hubert-castar/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02]"
              >
                Book a Call
              </a>
              <a
                href="https://tally.so/r/PdAr4b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-teal-200 hover:border-teal-300 text-teal-700 font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                Request Access to Data Room
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { value: '$2M', label: 'Pre-Seed Round' },
                { value: '2026', label: 'Target Close' },
                { value: 'Delaware', label: 'C-Corp' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xl font-bold text-teal-600">{item.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const team = [
    {
      name: 'Hubert Kotliński',
      role: 'CEO',
      bio: 'Head of DevRel at Spire Labs. Former Head of GTM at L2BEAT and Stablewatch. Market Entry Specialist at Tools for Humanity. Advisor to Self Labs, Swell, Tenderly, Immunefi.',
      linkedin: 'https://www.linkedin.com/in/hubert-kotli%C5%84ski-574351200/',
      twitter: 'https://x.com/hubkotl',
    },
    {
      name: 'Antoni Pawlak',
      role: 'CPO',
      bio: 'Founding Engineer at L2BEAT. Global Data Analyst with a track record of high-impact analytics and infrastructure projects across multiple domains.',
      linkedin: 'https://www.linkedin.com/in/antonipawlak/',
      twitter: 'https://x.com/antoonip',
    },
    {
      name: 'Michał Sobieraj-Jakubiec',
      role: 'CTO',
      bio: 'Rollup Stack Blockchain Engineer at Spire Labs. Former Core Team Engineer at L2BEAT. Specialist in blockchain systems and global AI agent implementations.',
      linkedin: 'https://www.linkedin.com/in/michal-sobieraj-jakubiec/',
      twitter: 'https://x.com/miszke_eth',
    },
  ]

  return (
    <section id="team" className="py-28 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">Team</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Built by neofinance veterans</h2>
          <p className="text-slate-500">We have already built neofinance products together at L2BEAT, Spire Labs, and MiniPay.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {team.map((member) => (
            <div key={member.name} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 transition-colors shadow-sm">
              <div className="w-11 h-11 bg-teal-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-teal-600 font-bold text-lg">{member.name[0]}</span>
              </div>
              <div className="text-slate-900 font-semibold text-sm mb-0.5">{member.name}</div>
              <div className="text-teal-600 text-xs font-medium mb-3">{member.role}</div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{member.bio}</p>
              <div className="flex gap-3">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 transition-colors text-xs">LinkedIn</a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 transition-colors text-xs">Twitter</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Castar" className="h-6 w-auto" />
            <span className="text-slate-900 font-bold text-sm">Castar</span>
            <span className="text-slate-400 text-sm ml-1">— Architecting Entertainment Finance</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-700 text-sm transition-colors">Home</a>
            <a href="https://tally.so/r/PdAr4b" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 text-sm transition-colors">Data Room</a>
<a href="mailto:hello@castar.tech" className="text-slate-400 hover:text-teal-600 text-sm transition-colors">hello@castar.tech</a>
          </div>
          <div className="text-slate-400 text-xs">&copy; 2026 Castar Labs. All rights reserved.</div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-slate-400 text-xs text-center max-w-2xl mx-auto leading-relaxed">
            Castar is a financial technology company, not a bank. Card issuing and fiat services are provided by our regulated partners.
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
      <MarketOpportunity />
      <ValueProposition />
      <TechMoat />
      <Investors />
      <Team />
      <Footer />
    </main>
  )
}
