import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import CtaBand from '@/components/CtaBand'
import TestimonialCards from '@/components/TestimonialCards'
import { photos } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Portfolio de bodas y eventos',
  description:
    'Bodas, ceremonias y fiestas organizadas por Estela Villodres en Barcelona y Catalunya. Flores, decoración, detalles y celebraciones reales de VB Weddings.',
  path: '/portfolio',
})

export default function Portfolio() {
  return (
    <>
      <PageHero
        image="/photos/gypsophila-rosas-blancas.webp"
        alt="Centro floral de gypsophila y rosas blancas en una ceremonia al aire libre"
        eyebrow="Portfolio"
        lines={[
          'Momentos que',
          <span key="l2">
            ya son <em>recuerdo</em>
          </span>,
        ]}
        text="Flores, alianzas, arcos de globos y mucha emoción. Toca cualquier foto para verla en grande."
      />

      <section className="section">
        <div className="container">
          <div className="portfolio-head">
            <div>
              <Reveal>
                <span className="eyebrow">Bodas y fiestas</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title" style={{ margin: 0 }}>
                  Galería <em>completa</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <p className="muted" style={{ margin: 0, maxWidth: '26rem' }}>
                Más en Instagram, donde comparto cada montaje casi en directo.
              </p>
            </Reveal>
          </div>
          <Gallery photos={photos} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Detrás de cada foto</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title">
              Las <em>historias</em>
            </h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem' }}>
            <TestimonialCards />
          </div>
        </div>
      </section>

      <CtaBand
        surface={false}
        title={
          <>
            ¿La próxima <em>historia</em> es la tuya?
          </>
        }
      />
    </>
  )
}
