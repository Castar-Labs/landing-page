import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Castar — One Card. Infinite Worlds.',
  description:
    'Turn your everyday spending into exclusive rewards, VIP access, and real-world impact for your favorite creators—without spending an extra dime.',
  openGraph: {
    title: 'Castar — One Card. Infinite Worlds.',
    description:
      'Support your favorite creators passively. Earn XP, unlock exclusive rewards, and fund their chosen charities—just by spending like normal.',
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
