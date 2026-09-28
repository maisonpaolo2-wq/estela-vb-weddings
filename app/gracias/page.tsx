import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import HeroTitle from '@/components/HeroTitle'
import { waLink } from '@/components/WhatsAppButton'
import { siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = {
  ...pageMeta({
    title: 'Gracias por escribir',
    description:
      'Gracias por contactar con VB Weddings. Estela Villodres, wedding planner en Barcelona, te responderá en menos de 48 horas para reservar vuestra primera cita.',
    path: '/gracias',
  }),
  robots: { index: false, follow: true },
}

export default function Gracias() {
  return (
    <section className="thanks marble">
      <div className="container thanks__inner">
        <div>
          <Reveal variant="fade-in">
            <span className="eyebrow">Mensaje recibido</span>
          </Reveal>
          <HeroTitle
            className="title"
            lines={[
              'Gracias,',
              <span key="l2">
                ya lo <em>tengo</em>
              </span>,
            ]}
          />
          <Reveal delay={0.4}>
            <p className="about__sig">Estela</p>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="muted">
              He recibido tu mensaje y te contestaré en menos de 48 horas. Mientras tanto, puedes ver más montajes en
              Instagram {siteConfig.instagram} o escribirme por WhatsApp si te corre prisa.
            </p>
          </Reveal>
          <Reveal delay={0.6} className="btn-row">
            <Link href="/" className="btn btn--solid">
              Volver al inicio
            </Link>
            <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Reveal>
        </div>
        <Reveal variant="scale-in" className="thanks__photo">
          <Image
            src="/photos/estela-ramo-flores.webp"
            alt="Estela sonriendo con un ramo de flores envuelto en papel rosa"
            fill
            priority
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  )
}
