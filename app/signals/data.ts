export type SourceKind = 'corporate' | 'press' | 'social'
export type Tag = 'stablecoins' | 'entertainment finance'

export type SignalEntry = {
  date: string
  source: string
  kind: SourceKind
  tag: Tag
  title: string
  href: string
}

export const entries: SignalEntry[] = [
  {
    date: '2026-03-24',
    source: '@pudgypenguins on X',
    kind: 'social',
    tag: 'entertainment finance',
    title: 'Pudgy Penguins Launches Pengu Visa Card Globally Across 170+ Countries via KAST',
    href: 'https://x.com/pudgypenguins/status/2036527343464825256',
  },
  {
    date: '2026-03-18',
    source: 'Fortune',
    kind: 'press',
    tag: 'stablecoins',
    title: 'Stripe Launches Tempo — a Stablecoin Blockchain Built for AI-Era Payments',
    href: 'https://fortune.com/2026/03/18/stripe-tempo-paradigm-mpp-ai-payments-protocol/',
  },
  {
    date: '2026-03-17',
    source: 'Mastercard Investor Relations',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'Mastercard to Acquire BVNK for $1.8 Billion to Connect On-Chain Payments and Fiat Rails',
    href: 'https://investor.mastercard.com/investor-news/investor-news-details/2026/Mastercard-to-Acquire-BVNK-to-Connect-On-Chain-Payments-and-Fiat-Rails/default.aspx',
  },
  {
    date: '2026-03-10',
    source: '@elonmusk on X',
    kind: 'social',
    tag: 'entertainment finance',
    title: 'Elon Musk Announces X Money Early Public Access Launching in April',
    href: 'https://x.com/autismcapital/status/2021716424893612244',
  },
  {
    date: '2026-03-04',
    source: 'Kraken Blog',
    kind: 'press',
    tag: 'stablecoins',
    title: 'Kraken Becomes First Digital Asset Bank to Receive a Federal Reserve Master Account',
    href: 'https://blog.kraken.com/news/federal-reserve-master-account',
  },
  {
    date: '2026-03-03',
    source: 'Visa Investor Relations',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'Visa and Bridge Expand Collaboration with Plans to Bring Stablecoin-Linked Cards to Over 100 Countries',
    href: 'https://investor.visa.com/news/news-details/2026/Visa-and-Bridge-Expand-Collaboration-with-Plans-to-Bring-Stablecoin-Linked-Cards-to-Over-100-Countries/default.aspx',
  },
  {
    date: '2026-02-27',
    source: 'M0',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'MoonPay, M0 and PayPal Announce PYUSDx — the Infrastructure Platform for White-Label Stablecoin Deployments',
    href: 'https://www.m0.org/press-releases/moonpay-m0-and-paypal-announce-pyusdx-the-infrastructure-platform-for-pyusd-backed-stablecoins',
  },
  {
    date: '2026-02-26',
    source: '@MetaMask on X',
    kind: 'social',
    tag: 'stablecoins',
    title: 'MetaMask Launches Mastercard-Backed Crypto Card in the United States',
    href: 'https://x.com/MetaMask/status/2027022499683410167',
  },
  {
    date: '2026-02-25',
    source: 'Tether',
    kind: 'corporate',
    tag: 'entertainment finance',
    title: 'Tether Invests in Whop to Power Stablecoin Payments for the Creator Economy',
    href: 'https://tether.io/news/tether-invests-in-whop-one-of-the-fastest-growing-internet-markets-to-power-stablecoin-payments-for-the-next-generation-of-the-internet-economy/',
  },
  {
    date: '2026-02-11',
    source: 'Pantera Capital',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'Building Permissionless Neobanks — How Stablecoins Are Rebuilding the Financial Backend',
    href: 'https://panteracapital.com/building-permissionless-neobanks/',
  },
  {
    date: '2026-02-12',
    source: 'Grab Investor Relations',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'Grab Signs Agreement to Acquire Stash, Expanding Financial Services Roadmap',
    href: 'https://x.com/oost_marcel/status/2021729512887660919',
  },
  {
    date: '2025-02-04',
    source: 'CNBC',
    kind: 'press',
    tag: 'stablecoins',
    title: 'Stripe Closes $1.1 Billion Bridge Acquisition, Prepares for Stablecoin Push',
    href: 'https://www.cnbc.com/2025/02/04/stripe-closes-1point1-billion-bridge-deal-prepares-for-stablecoin-push-.html',
  },
  {
    date: '2026-02-09',
    source: '@MrBeast on X',
    kind: 'social',
    tag: 'entertainment finance',
    title: 'MrBeast (500M+ Subscribers) Acquires Neobank Step',
    href: 'https://x.com/MrBeast/status/2020910218360782929',
  },
  {
    date: '2026-01-09',
    source: 'Reuters',
    kind: 'press',
    tag: 'stablecoins',
    title: 'Stablecoin Firm Rain Valued at $1.95 Billion in Latest Fundraise',
    href: 'https://www.reuters.com/technology/stablecoin-firm-rain-valued-195-billion-latest-fundraise-2026-01-09/',
  },
  {
    date: '2025-12-11',
    source: 'Fortune',
    kind: 'press',
    tag: 'entertainment finance',
    title: 'YouTube Enables Stablecoin Payments for Creators via PayPal PYUSD',
    href: 'https://fortune.com/2025/12/11/youtube-paypal-google-stablecoin-payouts-pyusd/',
  },
  {
    date: '2026-02-27',
    source: 'BVNK × YouGov × Coinbase',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'Stablecoin Utility Report 2026 — 77% of Holders Would Open a Stablecoin Wallet via Their Bank',
    href: 'https://bvnk.com/utility',
  },
  {
    date: '2025-07-18',
    source: 'White House',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'United States Signs GENIUS Act — First Federal Regulatory Framework for Stablecoins',
    href: 'https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-signs-genius-act-into-law/',
  },
  {
    date: '2025-09-25',
    source: 'Citi GPS',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'Stablecoins 2030 — Digital Dollars and the Future of Payments',
    href: 'https://www.citigroup.com/global/insights/stablecoins-2030',
  },
  {
    date: '2024-12-30',
    source: 'K&L Gates',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'EU MiCA Regulation Becomes Fully Applicable — First Comprehensive Crypto-Asset Framework Across All Member States',
    href: 'https://www.klgates.com/The-Regulation-on-Markets-in-Crypto-Assets-Becomes-Fully-Applicable-in-All-Member-States-of-the-European-Union-1-24-2025',
  },
  {
    date: '2025-05-29',
    source: 'Artemis Analytics',
    kind: 'corporate',
    tag: 'stablecoins',
    title: 'What Are Stablecoins Used For? — $72B Payment Run Rate at +88% YoY Growth',
    href: 'https://www.artemisanalytics.com/resources/what-are-stablecoins-used-for',
  },
  {
    date: '2025-08-22',
    source: 'Trend Hunter',
    kind: 'press',
    tag: 'entertainment finance',
    title: 'Kanye West Debuts YZY Card — a Crypto Debit Card Under the YZY Money Ecosystem',
    href: 'https://www.trendhunter.com/trends/yzy-card',
  },
]

export const SIGNAL_COUNT = entries.length
