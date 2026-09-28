import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { waLink } from '@/components/WhatsAppButton'
import { faqs, photos, processSteps, services } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Servicios de wedding planner',
  description:
    'Organización integral de bodas, diseño y decoración, coordinación del día B y fiestas privadas en Barcelona y Catalunya. Propuestas a medida con Estela.',
  path: '/servicios',
  image: '/og-image.jpg',
})

export default function Servicios() {
  return (
    <>
      <PageHero
        image="/photos/anillos-peonia-blanca.webp"
        alt="Alianzas de boda grabadas sobre los pétalos de una peonía blanca"
        eyebrow="Servicios · Barcelona y Catalunya"
        lines={[
          'Cada boda,',
          <span key="l2">
            una <em>propuesta</em>
          </span>,
        ]}
        text="Cuatro formas de trabajar juntas. Elige la que encaja con lo que ya tienes, o cuéntame y la diseñamos a medida."
      />

      <section className="section">
        <div className="container">
          <div className="stacked">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className="stacked__item" style={{ scrollMarginTop: '6rem' }}>
                <div>
                  <Reveal>
                    <span className="eyebrow">Servicio 0{i + 1}</span>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2 className="stacked__title">{s.title}</h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="muted">{s.longDescription}</p>
                  </Reveal>
                  <ul className="includes">
                    {s.includes.map((inc, n) => (
                      <Reveal as="li" key={inc} index={n}>
                        {inc}
                      </Reveal>
                    ))}
                  </ul>
                  <Reveal delay={0.3} style={{ marginTop: '2rem' }}>
                    <a
                      href={waLink(`Hola Estela, me interesa el servicio de ${s.title.toLowerCase()}.`)}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar este servicio
                    </a>
                  </Reveal>
                </div>
                <Reveal variant="scale-in" className="stacked__media">
                  <Image src={s.image} alt={photos.find((p) => p.src === s.image)?.alt ?? s.title} fill sizes="(min-width: 900px) 50vw, 100vw" />
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split-note">
          <div>
            <Reveal>
              <span className="eyebrow">Siempre incluido</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                El método, en <em>cualquier</em> servicio
              </h2>
            </Reveal>
          </div>
          <div className="steps" style={{ gridTemplateColumns: '1fr' }}>
            {processSteps.map((s, i) => (
              <Reveal key={s.number} className="step" index={i}>
                <span className="step__n">{s.number}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-note">
          <div>
            <Reveal>
              <span className="eyebrow">Preguntas frecuentes</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Lo que siempre me <em>preguntan</em>
              </h2>
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

      <CtaBand />
    </>
  )
}
