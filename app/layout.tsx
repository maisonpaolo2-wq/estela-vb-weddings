import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Jost, Mrs_Saint_Delafield } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

const serif = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--ff-serif-loaded',
  display: 'swap',
})
const sans = Jost({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--ff-sans-loaded', display: 'swap' })
const script = Mrs_Saint_Delafield({ subsets: ['latin'], weight: '400', variable: '--ff-script-loaded', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Wedding & Event Planner en Barcelona`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Estela Villodres, wedding planner en Barcelona. Bodas integrales, diseño y decoración, coordinación del día B y fiestas con asesoramiento personalizado.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#fcf6f2',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
