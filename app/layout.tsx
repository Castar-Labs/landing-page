import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Castar — Architecting Entertainment Finance',
  description:
    'The ultimate white-label microbanking platform for the creator economy. Launch a fully compliant, creator-branded stablecoin bank in days—with zero technical or regulatory friction.',
  openGraph: {
    title: 'Castar — Architecting Entertainment Finance',
    description:
      'We turn massive audiences into thriving micro-economies. Launch a creator-branded stablecoin bank in days.',
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
