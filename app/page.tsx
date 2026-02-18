function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A1A]/80 backdrop-blur-md border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/castar.svg" alt="Castar" className="w-8 h-8 rounded-lg" />
            <span className="text-white font-bold text-lg tracking-tight">Castar</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-white/50 hover:text-white text-sm transition-colors">Product</a>
            <a href="#market" className="text-white/50 hover:text-white text-sm transition-colors">Market</a>
            <a href="#team" className="text-white/50 hover:text-white text-sm transition-colors">Team</a>
          </div>
          <a
            href="https://calendar.app.google/BE7t6886uFgY8uSN8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-teal bg-grid" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-teal-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-400 text-sm font-medium">Raising $2M Pre-Seed &middot; 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
              Microbank
            </span>{' '}
            Platform for the Creator Economy
          </h1>

          <p className="text-xl text-white/55 mb-10 max-w-2xl leading-relaxed">
            Launch your own branded neobank for your fanbase. No banking license needed.
            Powered by stablecoins. Distributed through influence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendar.app.google/BE7t6886uFgY8uSN8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02]"
            >
              Book a Demo
            </a>
            <a
              href="https://drive.google.com/file/d/1DVTnA4rGOMR0jLWUVd1eT9KpV4FD88l7/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              View Investor Deck
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section id="product" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">The Problem</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Anyone with a community will want their own Neobank.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              But they won&apos;t have the capital, time, and expertise to deploy it.
              Building a neobank is a complex, multi-year undertaking requiring
              specialized expertise across every domain.
            </p>
            <div className="space-y-2.5">
              {['Tech infrastructure', 'Legal & compliance', 'Treasury management', 'Risk frameworks', 'Customer support'].map((req) => (
                <div key={req} className="flex items-center gap-3 text-white/45">
                  <div className="w-5 h-5 rounded border border-red-500/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-white/30 text-xs uppercase tracking-widest mb-6">Online Entertainers in the US alone</div>
            {[
              { audience: '100M+', count: '~20', desc: 'Mega creators with massive reach' },
              { audience: '10M+', count: '~1,000', desc: 'Top-tier influencers' },
              { audience: '1M+', count: '~30,000', desc: 'Mid-tier creators' },
            ].map((item) => (
              <div key={item.audience} className="bg-white/[0.04] border border-teal-500/15 rounded-2xl p-5 flex items-center justify-between hover:border-teal-500/30 transition-colors">
                <div>
                  <div className="text-teal-400 font-semibold text-sm mb-1">{item.audience} audience</div>
                  <div className="text-white/40 text-xs">{item.desc}</div>
                </div>
                <div className="text-3xl font-bold text-white">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Solution() {
  return (
    <section className="py-28 bg-gradient-to-b from-transparent via-teal-500/[0.04] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">The Solution</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Efficient like stablecoins.{' '}
            <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
              Distributed in the Entertainment Economy.
            </span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Castar&apos;s Microbank-as-a-Service platform lets any influencer launch a
            fully branded neobank for their community in days — not years.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: 'Shortened Go-to-Market',
              desc: 'Deploy in days for a fraction of the cost. Our reusable stablecoin rails eliminate the need for new banking licenses with every deployment.',
              icon: (
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              title: 'Abstracted Complexity',
              desc: "High-fidelity UI/UX removes all friction from DeFi and global banking. Your fans won't know they're using crypto — they'll just see a modern banking app.",
              icon: (
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              ),
            },
            {
              title: 'Tailored Solution',
              desc: "Forward Deployed Engineering ensures each microbank is perfectly tailored to the creator's brand and community — then integrated back into the platform.",
              icon: (
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 transition-colors group">
              <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-500/25 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2.5">{item.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Customers() {
  return (
    <section className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">Built for both</div>
          <h2 className="text-4xl font-bold text-white">Win-win for Influencers and Fans</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white/[0.04] border border-teal-500/20 rounded-2xl p-8">
            <div className="text-teal-400 font-semibold text-xs uppercase tracking-widest mb-3">For Influencers</div>
            <h3 className="text-2xl font-bold text-white mb-2">The Ultimate Monetization Engine</h3>
            <p className="text-white/45 text-sm mb-6">
              Transform your social capital into a recurring financial ecosystem.
              Earn from every transaction your community makes.
            </p>
            <div className="space-y-3">
              {[
                'New high-retention engagement channel',
                'Earn a percentage on all community deposits',
                'Earn a percentage on transaction volume',
                'Native upselling infrastructure built-in',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/65 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.04] border border-teal-500/20 rounded-2xl p-8">
            <div className="text-teal-400 font-semibold text-xs uppercase tracking-widest mb-3">For Fans</div>
            <h3 className="text-2xl font-bold text-white mb-2">Banking That Actually Earns</h3>
            <p className="text-white/45 text-sm mb-6">
              Access institutional-grade yields and exclusive perks from your
              favorite creators — all in a simple, beautiful banking interface.
            </p>
            <div className="space-y-3">
              {[
                'Unique financial benefits from their favorite creator',
                'One-click access to DeFi yields via Aave, Morpho, Lido',
                'Onchain assets including stablecoins and stocks',
                'Exclusive community perks and personalized rewards',
                'Agentic commerce powered by AI agents',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/65 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Market() {
  return (
    <section id="market" className="py-28 bg-gradient-to-b from-transparent via-teal-500/[0.04] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">Market Opportunity</div>
          <h2 className="text-4xl font-bold text-white mb-4">A market projected to grow 10x</h2>
          <p className="text-white/50 text-lg">
            We are positioning Castar at the center of three converging multi-trillion dollar markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            {
              value: '$200B → $2T+',
              label: 'Global Neobanking Market',
              detail: '54.8% CAGR from 2023 to 2030. From 350M users today to 800M+ by 2030.',
              source: 'Grand View Research / Fortune Business Insights',
            },
            {
              value: '10x Growth',
              label: 'Stablecoin Market',
              detail: 'Citibank projects stablecoin market reaches $3.7T by 2030. Circle already sharing USDC yield.',
              source: 'Citibank Stablecoins 2030 Report',
            },
            {
              value: '30M Fans',
              label: 'Immediate Distribution',
              detail: "Our first two anchor clients alone provide access to 30M fans. Even 0.1% conversion = 30,000 MAU.",
              source: 'Conservative internal modeling',
            },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.04] border border-teal-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-teal-400 mb-2 leading-tight">{item.value}</div>
              <div className="text-white font-semibold mb-2">{item.label}</div>
              <div className="text-white/45 text-sm leading-relaxed mb-4">{item.detail}</div>
              <div className="text-white/25 text-xs">Source: {item.source}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.03] border border-teal-500/15 rounded-2xl p-6">
          <div className="text-white/30 text-xs uppercase tracking-widest mb-4">Entertainment Finance is beginning now</div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              'MrBeast acquires Step neobank — Entertainment Finance begins',
              'Pengu (Pudgy Penguins) drives 100k card signups for Kast',
              'Elon Musk\'s X Money entering closed beta — targeting mass finance',
            ].map((event) => (
              <div key={event} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyNow() {
  return (
    <section className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">Why Now</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              The perfect convergence of trends
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              We are not first movers in stablecoin banking — we benefit from entering
              as a second-wave player in a narrative that is already forming, reducing
              both execution and narrative risk.
            </p>
            <div className="bg-white/[0.04] border border-teal-500/20 rounded-2xl p-5">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-3">2027 Targets</div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '30K', label: 'Monthly Active Users' },
                  { value: '$476K', label: 'Annualized Revenue' },
                  { value: '$216M', label: 'Yearly Volume' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-teal-400">{stat.value}</div>
                    <div className="text-white/35 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Legislative Clarity',
                desc: 'US GENIUS Act and EU MiCA are creating unambiguous regulatory frameworks for stablecoin operations — giving us a compliant path to scale.',
              },
              {
                num: '02',
                title: 'Institutional Adoption',
                desc: 'JPMorgan, BlackRock, and Visa are all entering stablecoins — validating the infrastructure and accelerating mainstream acceptance.',
              },
              {
                num: '03',
                title: 'Entertainment Finance Begins',
                desc: "MrBeast acquires Step. X Money launching. Pengu drives 100k card signups. The narrative is forming — we're entering at the perfect moment.",
              },
              {
                num: '04',
                title: 'Stablecoin Revenue Revolution',
                desc: 'Circle sharing USDC yield. Ethena white-label stablecoins surging. The economics of stablecoin-native banking are proven and compelling.',
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 bg-white/[0.03] border border-white/8 rounded-xl p-4 hover:border-teal-500/20 transition-colors">
                <div className="text-teal-500/40 font-mono text-xs font-semibold pt-0.5 w-6 flex-shrink-0">{item.num}</div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-white/45 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Ecosystem() {
  const partners = [
    { category: 'Chains', names: ['Ethereum', 'Base', 'Polygon'] },
    { category: 'Stablecoins', names: ['USDC (Circle)', 'USDT (Tether)', 'M0', 'Sky'] },
    { category: 'DeFi', names: ['Aave', 'Morpho', 'Spark', 'Lido', 'Ethena'] },
    { category: 'Cards', names: ['Rain', 'Monavate'] },
    { category: 'Fiat Rails', names: ['Circle Mint', 'Fiat Republic'] },
  ]

  return (
    <section className="py-28 bg-gradient-to-b from-transparent via-teal-500/[0.04] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">Infrastructure</div>
          <h2 className="text-4xl font-bold text-white mb-4">Built on proven rails</h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            We leverage battle-tested financial infrastructure so creators don&apos;t have to.
            No need to build a protocol — just the distribution layer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {partners.map((group) => (
            <div key={group.category}>
              <div className="text-white/30 text-xs uppercase tracking-widest mb-3">{group.category}</div>
              <div className="space-y-2">
                {group.names.map((name) => (
                  <div key={name} className="bg-white/[0.04] border border-white/8 rounded-lg px-3 py-2 text-white/60 text-sm hover:border-teal-500/20 hover:text-white/80 transition-colors">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    {
      name: 'Franciszek Krawczyk',
      role: 'Founding Engineer',
      bio: 'Founding Engineer with deep expertise in stablecoin banking systems and financial infrastructure at scale.',
      linkedin: null,
      twitter: null,
    },
  ]

  return (
    <section id="team" className="py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">Team</div>
          <h2 className="text-4xl font-bold text-white mb-4">Built by neofinance veterans</h2>
          <p className="text-white/50">We have already built neofinance products together at L2BEAT, Spire Labs, and MiniPay.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div key={member.name} className="bg-white/[0.04] border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/35 transition-colors">
              <div className="w-11 h-11 bg-teal-500/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-teal-400 font-bold text-lg">{member.name[0]}</span>
              </div>
              <div className="text-white font-semibold text-sm mb-0.5">{member.name}</div>
              <div className="text-teal-400 text-xs font-medium mb-3">{member.role}</div>
              <p className="text-white/40 text-xs leading-relaxed mb-4">{member.bio}</p>
              <div className="flex gap-3">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-teal-400 transition-colors text-xs">LinkedIn</a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-teal-400 transition-colors text-xs">Twitter</a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function Raising() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-teal-500/15 via-teal-900/10 to-transparent border border-teal-500/25 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-teal bg-grid opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-400 text-sm font-medium">Raising $2M Pre-Seed &middot; 2026</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to build the future<br />of community banking?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re an influencer looking to launch a microbank, a chain seeking
              distribution, or an investor backing the creator economy — let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.app.google/BE7t6886uFgY8uSN8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02]"
              >
                Book a Demo
              </a>
              <a
                href="https://drive.google.com/file/d/1DVTnA4rGOMR0jLWUVd1eT9KpV4FD88l7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                View Investor Deck
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { value: '$2M', label: 'Pre-Seed Round' },
                { value: '2026', label: 'Target Close' },
                { value: 'Delaware', label: 'C-Corp' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xl font-bold text-teal-400">{item.value}</div>
                  <div className="text-white/30 text-xs mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/castar.svg" alt="Castar" className="w-6 h-6 rounded" />
            <span className="text-white font-bold text-sm">Castar</span>
            <span className="text-white/25 text-sm ml-1">Microbank-as-a-Service</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://calendar.app.google/BE7t6886uFgY8uSN8" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 text-sm transition-colors">Book a Demo</a>
            <span className="text-white/20 text-sm">Delaware, USA &middot; Warsaw, Poland</span>
          </div>
          <div className="text-white/20 text-xs">&copy; 2026 Castar Labs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="bg-[#0A1A1A] min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Customers />
      <Market />
      <WhyNow />
      <Ecosystem />
      <Team />
      <Raising />
      <Footer />
    </main>
  )
}
