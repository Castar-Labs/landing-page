import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Castar — Microbank-as-a-Service',
  description:
    'Launch your own branded neobank for your fanbase. Efficient like stablecoins. Distributed in the Entertainment Economy.',
  openGraph: {
    title: 'Castar — Microbank-as-a-Service',
    description:
      'Launch your own branded neobank for your fanbase. No banking license needed.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
