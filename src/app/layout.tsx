import './globals.css'
import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Footer'
import ToastProvider from './providers/ToastProvider'
import ThemeProvider from './providers/ThemeProvider'
import ScrollToTop from './components/ScrollToTop'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Lorenzo Casa | Portfólio',
  description:
    'Front-end developer e estudante. Apaixonado por tecnologia. Meu nome é Lorenzo Casa e este é meu portfólio. Aqui você pode encontrar meus projetos, sobre mim e muito mais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={archivo.className}>
        <ToastProvider>
          <ThemeProvider>
            <Header />
            {children}
            <ScrollToTop />
            <Footer />
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
