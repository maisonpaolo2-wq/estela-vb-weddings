import Image from 'next/image'
import Link from 'next/link'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Filmstrip from '@/components/Filmstrip'
import TestimonialCards from '@/components/TestimonialCards'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { photos, processSteps, services, siteConfig, stats } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Wedding & Event Planner en Barcelona',
  description:
    'Estela Villodres, wedding planner en Barcelona. Diseño de bodas y eventos, coordinación del día B y fiestas con asesoramiento personalizado. Reserva tu cita.',
  path: '/',
})

export default function Home() {
  return (
    <>
      {/* HERO · fullbleed */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/photos/jardin-flores-ceremonia.webp"
            alt="Pasillo de ceremonia con gypsophila y rosas blancas en el jardín de una masía, con pétalos sobre el césped"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow eyebrow--light">Wedding &amp; Event Planner · Barcelona</span>
          </Reveal>
          <HeroTitle
            lines={[
              'Tu boda,',
              <span key="l2">
                con <em>alma</em>
              </span>,
              'y sin prisas',
            ]}
          />
          <Reveal delay={0.6}>
            <p className="hero__sig">Estela Villodres</p>
          </Reveal>
          <Reveal delay={0.7}>
            <p className="hero__sub">{siteConfig.bioShort}</p>
          </Reveal>
          <Reveal delay={0.8} className="btn-row">
            <a href={waLink()} className="btn btn--light" target="_blank" rel="noopener noreferrer">
              Reserva tu cita
            </a>
            <Link href="#servicios" className="btn btn--light">
              Ver servicios
            </Link>
          </Reveal>
        </div>
        <span className="hero__scroll" aria-hidden="true">
          Desliza
        </span>
      </section>

      {/* INTRO · asimétrica 40/60, empieza con subtítulo fino */}
      <section className="section" id="intro">
        <div className="container">
          <div className="intro">
            <div>
              <Reveal>
                <span className="eyebrow">Wedding planner &amp; parties</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">
                  Diseño bodas que se <em>parecen</em> a quien se casa
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">Escucho primero, diseño después y estoy en cada detalle.</p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="muted">
                  Organizo bodas, fiestas y celebraciones en Barcelona y toda Catalunya. Contigo desde la primera idea hasta
                  el último baile, con asesoramiento personalizado y una sola persona de referencia: yo.
                </p>
              </Reveal>
              <div className="stats">
                {stats.map((s, i) => (
                  <Reveal key={s.label} index={i}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="intro__collage">
              <Reveal variant="scale-in" className="intro__main">
                <Image
                  src="/photos/estela-retrato-marca.webp"
                  alt="Estela Villodres con vestido blanco y sombrero sobre fondo melocotón junto al logotipo EV"
                  fill
                  sizes="(min-width: 900px) 50vw, 85vw"
                />
              </Reveal>
              <Reveal variant="scale-in" delay={0.15} className="intro__small">
                <Image
                  src="/photos/anillos-peonia-blanca.webp"
                  alt="Alianzas de boda apoyadas sobre una peonía blanca"
                  fill
                  sizes="(min-width: 900px) 25vw, 45vw"
                />
              </Reveal>
              <Reveal variant="fade-in" delay={0.3}>
                <span className="intro__script" aria-hidden="true">
                  con cariño
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS · tarjetas con foto, empieza con línea + título */}
      <section className="section section--surface" id="servicios">
        <div className="container">
          <div className="svc-head">
            <div>
              <Reveal>
                <span className="eyebrow">Servicios</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">
                  Lo que puedo <em>hacer</em> por ti
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <p className="muted" style={{ margin: 0 }}>
                Desde la organización completa de tu boda hasta una fiesta de cumpleaños. Cada propuesta se adapta a lo que
                ya tienes y a lo que te falta.
              </p>
            </Reveal>
          </div>
          <div className="svc-cards">
            {services.map((s, i) => (
              <article key={s.slug} className="svc-card">
                <Reveal variant="scale-in" className="svc-card__media">
                  <Image src={s.image} alt={photos.find((p) => p.src === s.image)?.alt ?? s.title} fill sizes="(min-width: 900px) 55vw, 100vw" />
                </Reveal>
                <div>
                  <Reveal>
                    <span className="svc-card__n">0{i + 1}</span>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h3>{s.title}</h3>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="muted">{s.description}</p>
                  </Reveal>
                  <Reveal delay={0.24}>
                    <Link href={`/servicios#${s.slug}`} className="link-arrow">
                      Saber más <span aria-hidden="true">→</span>
                    </Link>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARADOR · foto a sangre */}
      <section className="separator" aria-label="Frase de Estela">
        <div className="separator__media">
          <Image src="/photos/ramo-papel-rosa.webp" alt="Ramo de flores silvestres envuelto en papel de seda rosa" fill sizes="100vw" />
        </div>
        <Reveal variant="fade-in">
          <p>Que tú solo tengas que vivirlo</p>
          <small>Asesoramiento personalizado</small>
        </Reveal>
      </section>

      {/* PROCESO · números grandes, empieza con número XXL */}
      <section className="section process" id="proceso">
        <span className="watermark" aria-hidden="true">
          04
        </span>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <span className="eyebrow">Cómo trabajamos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '16ch' }}>
              Cuatro pasos, <em>cero</em> nervios
            </h2>
          </Reveal>
          <div className="steps" style={{ marginTop: '2.5rem' }}>
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

      {/* PORTFOLIO · filmstrip */}
      <section className="section section--surface" id="portfolio" style={{ paddingBottom: '4rem' }}>
        <div className="container portfolio-head">
          <div>
            <Reveal>
              <span className="eyebrow">Portfolio</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title" style={{ margin: 0 }}>
                Detalles que se <em>recuerdan</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/portfolio" className="link-arrow">
              Ver portfolio completo <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
        <Reveal variant="fade-in">
          <Filmstrip photos={photos} />
        </Reveal>
      </section>

      {/* SOBRE MÍ · foto portrait grande, empieza con firma */}
      <section className="section" id="sobre-mi">
        <div className="container">
          <div className="about">
            <Reveal variant="scale-in" className="about__photo">
              <Image
                src="/photos/estela-ramo-flores.webp"
                alt="Estela Villodres sonriendo con un ramo envuelto en papel rosa frente a una pared de ladrillo"
                fill
                sizes="(min-width: 900px) 55vw, 100vw"
              />
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">Sobre mí</span>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="about__sig">Hola, soy Estela</p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">Me gusta que las bodas se sientan tan bien como se ven.</p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="muted">{siteConfig.bio}</p>
              </Reveal>
              <Reveal delay={0.32}>
                <Link href="/sobre-mi" className="btn">
                  Conóceme
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS · tarjetas */}
      <section className="section section--surface" id="testimonios">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Parejas y familias</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title">
              Lo que <em>cuentan</em> después
            </h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem' }}>
            <TestimonialCards limit={3} />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section marble" id="contacto">
        <div className="container contact">
          <div>
            <Reveal>
              <span className="eyebrow">Reserva tu cita</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Empecemos por un <em>café</em>
              </h2>
            </Reveal>
            <Line width="4rem" delay={0.12} />
            <Reveal delay={0.16}>
              <p className="muted" style={{ marginTop: '1.5rem' }}>
                Cuéntame fecha, zona y cómo os imagináis el día. Te respondo en menos de 48 horas para quedar en persona en
                Barcelona o por videollamada.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="contact__card">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp · respuesta rápida
              </a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`} target="_blank" rel="noopener noreferrer">
                Instagram {siteConfig.instagram}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  )
}
