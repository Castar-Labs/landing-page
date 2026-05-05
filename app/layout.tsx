import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/logo3.svg', shortcut: '/logo3.svg', apple: '/logo3.svg' },
  title: 'Castar: Shareholder identity for tokenized stocks.',
  description:
    'One API to verify tokenized-stock ownership across every rail. Turn verified ownership into programmable shareholder benefits.',
  openGraph: {
    title: 'Castar: Shareholder identity for tokenized stocks.',
    description:
      'The cross-rail verification + benefits layer for tokenized stocks. Plaid for shareholder identity.',
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
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
