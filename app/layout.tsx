import React from "react"
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-merriweather' })

export const metadata: Metadata = {
  title: 'The Clayborn Group | Tax Preparation Services in Alpharetta, GA',
  description: 'Alpharetta\'s specialized tax professionals for individuals and businesses. Individual tax prep, business tax prep, and year-round tax planning services in North Atlanta.',
}

export const viewport = {
  themeColor: '#1B365D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
