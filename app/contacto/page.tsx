import Image from 'next/image'
import EditorialHero from '@/components/EditorialHero'
import Reveal, { Line } from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { coverage, faqs, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Contacto y reserva de cita',
  description:
    'Reserva tu cita con Estela Villodres, wedding planner en Barcelona. Primera reunión sin compromiso en persona o por videollamada. Bodas y eventos en Catalunya.',
  path: '/contacto',
})

export default function Contacto() {
  return (
    <>
      <EditorialHero
        eyebrow="Contacto"
        watermark="Hola"
        lines={[
          'Reserva',
          <span key="l2">
            tu <em>cita</em>
          </span>,
        ]}
        text="Cuéntame lo que tienes en mente. Te respondo en menos de 48 horas y quedamos para un café en Barcelona o por videollamada."
      />

      <section className="section">
        <div className="container contact">
          <div>
            <Reveal>
              <span className="eyebrow">Escríbeme</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Cuantos más <em>detalles</em>, mejor
              </h2>
            </Reveal>
            <Line width="4rem" delay={0.12} />
            <Reveal delay={0.16} className="contact__card">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp · respuesta rápida
              </a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`} target="_blank" rel="noopener noreferrer">
                Instagram {siteConfig.instagram}
              </a>
            </Reveal>
            <Reveal variant="scale-in" delay={0.2} className="about__photo" style={{ aspectRatio: '4 / 3' }}>
              <Image
                src="/photos/estela-sombrero.webp"
                alt="Estela Villodres sonriendo con sombrero de paja claro"
                fill
                sizes="(min-width: 900px) 40vw, 100vw"
              />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split-note">
          <div>
            <Reveal>
              <span className="eyebrow">Zona de cobertura</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Desde Barcelona, a <em>donde</em> me lleves
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Mi base está en Barcelona y organizo bodas y eventos en toda Catalunya. Para bodas de destino en otras zonas
                de España, te preparo una propuesta con desplazamientos incluidos.
              </p>
            </Reveal>
          </div>
          <ul className="coverage">
            {coverage.map((c, i) => (
              <Reveal as="li" key={c.place} index={i}>
                <strong>{c.place}</strong>
                <span>{c.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split-note">
          <div>
            <Reveal>
              <span className="eyebrow">Antes de escribir</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Dudas <em>frecuentes</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <a href={waLink()} className="btn btn--solid" target="_blank" rel="noopener noreferrer">
                Prefiero WhatsApp
              </a>
            </Reveal>
          </div>
          <Reveal className="faq" delay={0.1}>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
