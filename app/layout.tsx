import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Empire Industrial Corp. | Industrial Chemical & Material Solutions',
  description:
    'Engineering-backed supply chain solutions for industrial chemicals and materials across North America and Asia. Serving fertilizer, mining, metallurgy, and manufacturing industries.',
  keywords: [
    'industrial chemicals',
    'chemical supplier',
    'fertilizers',
    'sulphur',
    'petroleum coke',
    'industrial inorganics',
    'B2B chemicals',
    'North America',
    'Asia',
    'supply chain',
  ],
  authors: [{ name: 'Empire Industrial Corp.' }],
  openGraph: {
    title: 'Empire Industrial Corp. | Industrial Chemical & Material Solutions',
    description:
      'Engineering-backed supply chain solutions for industrial chemicals and materials across North America and Asia.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Empire Industrial Corp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empire Industrial Corp.',
    description:
      'Engineering-backed supply chain solutions for industrial chemicals and materials.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
