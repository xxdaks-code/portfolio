import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Sarah Daks — Creative Marketer & Events',
  description: 'Creative marketer in branding, events coordination, and film publicity based in Los Angeles.',
  openGraph: {
    title: 'Sarah Daks — Creative Marketer & Events',
    description: 'Creative marketer in branding, events coordination, and film publicity based in Los Angeles.',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain">
        <main>{children}</main>
      </body>
    </html>
  )
}
