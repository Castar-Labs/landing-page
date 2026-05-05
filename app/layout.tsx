import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/logo3.svg', shortcut: '/logo3.svg', apple: '/logo3.svg' },
  title: 'Castar — Shareholder identity for tokenized stocks.',
  description:
    'One API to verify tokenized-stock ownership across every rail — Alpaca custody, xStocks tokens, on-chain wallets — and trigger programmable shareholder benefits.',
  openGraph: {
    title: 'Castar — Shareholder identity for tokenized stocks.',
    description:
      'The cross-rail verification + benefits layer for tokenized stocks. Plaid for shareholder identity. Live on INK with six xStock tokens supported.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>{children}</body>
    </html>
  )
}
