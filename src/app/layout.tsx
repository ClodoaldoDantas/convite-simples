import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Convite Simples',
  description: 'Crie convites de forma simples e rápida',
  keywords: [
    'convites',
    'convite digital',
    'criar convites',
    'convite online',
    'design de convites',
    'eventos',
  ],
  authors: [
    {
      name: 'Clodoaldo Dantas',
      url: 'https://clodoaldo.dev/',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} antialiased bg-gray-50`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: 'Outfit, sans-serif',
            },
          }}
        />
      </body>
    </html>
  )
}
