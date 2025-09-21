import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers/providers'
import HeaderWithLinks from './components/Header'
import Header from './components/Header'



const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Форма о фактах происшествий'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html className="light" lang='en'>
      <body
        className={`light ${inter.variable} antialiased`}
      >
        <div className='flex flex-col h-screen overflow-auto'>
          <Providers >
          <Header/>
          {children}
        </Providers>
        </div>
      </body>
    </html>
  )
}
