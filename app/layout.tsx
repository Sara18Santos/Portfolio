import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Portfolio - Sara Santos',
  description: 'A portfolio website showcasing the projects and skills of Sara Santos, a passionate software developer. Explore my work, experience, and contact information to learn more about my journey in the world of technology.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}