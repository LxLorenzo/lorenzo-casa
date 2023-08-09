import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Footer'
import ToastProvider from './providers/ToastProvider'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={mulish.className}>
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
