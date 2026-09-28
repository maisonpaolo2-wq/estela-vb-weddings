import Image from 'next/image'
import EditorialHero from '@/components/EditorialHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Sobre mí · Estela Villodres',
  description:
    'Conoce a Estela Villodres, wedding & event planner en Barcelona. Su historia, su forma de trabajar y por qué cada boda empieza con un café y mucha escucha.',
  path: '/sobre-mi',
})

const values = [
  {
    title: 'Escucha',
    text: 'Antes de proponer nada, quiero entender quiénes sois, cómo os conocisteis y qué os hace reír.',
    icon: <path d="M12 3a7 7 0 0 1 7 7c0 4-3 5-3 8a3 3 0 0 1-6 0M9 10a3 3 0 0 1 6 0" />,
  },
  {
    title: 'Detalle',
    text: 'Del grosor del papel de la invitación a la altura de los centros. Lo pequeño es lo que se recuerda.',
    icon: <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />,
  },
  {
    title: 'Calma',
    text: 'Un documento compartido siempre al día y una sola persona de referencia. Nada de sorpresas.',
    icon: <path d="M3 12c3-4 6-4 9 0s6 4 9 0M3 17c3-4 6-4 9 0s6 4 9 0" />,
  },
  {
    title: 'Presencia',
    text: 'El día de la boda estoy desde el montaje hasta el último baile. Si algo falla, no te enteras.',
    icon: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />,
  },
]

export default function SobreMi() {
  return (
    <>
      <EditorialHero
        eyebrow="Sobre mí"
        watermark="Estela"
        lines={[
          'Organizo bodas',
          <span key="l2">
            como me gustaría <em>vivir</em>
          </span>,
          'la mía',
        ]}
        text="Soy Estela Villodres, wedding & event planner en Barcelona. Esta es mi historia y la forma en que trabajo."
      />

      <section className="section">
        <div className="container">
          <div className="about">
            <Reveal variant="scale-in" className="about__photo">
              <Image
                src="/photos/estela-retrato-marca.webp"
                alt="Retrato de Estela Villodres con vestido blanco y sombrero, imagen de marca de VB Weddings"
                fill
                priority
                sizes="(min-width: 900px) 55vw, 100vw"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="about__sig">Estela</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">Todo empezó organizando las fiestas de mis amigas. Nunca he dejado de hacerlo.</p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="muted">
                  Siempre era la que se encargaba de las sorpresas, los cumpleaños y las despedidas. Con los años entendí que lo
                  que más disfrutaba no era la fiesta en sí, sino ver la cara de la gente cuando todo salía como lo habíamos
                  imaginado. De ahí nació VB Weddings.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container story">
          <Reveal>
            <span className="eyebrow">Mi historia</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Me formé como wedding &amp; event planner y empecé a trabajar en bodas en Barcelona colaborando con decoradores,
              floristas y espacios de toda Catalunya. Aprendí que una boda tiene cientos de piezas y que la diferencia entre
              un buen día y un día inolvidable está en cómo encajan entre ellas.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Hoy organizo bodas integrales, diseño decoraciones y coordino días B para parejas que prefieren disfrutar su
              boda antes que gestionarla. También sigo haciendo lo que me trajo hasta aquí: fiestas, cumpleaños, baby showers
              y graduaciones, con globos, flores y mesa dulce.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Trabajo con pocas bodas al año para poder estar de verdad en cada una. {siteConfig.bioShort}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="separator" aria-label="Frase de Estela">
        <div className="separator__media">
          <Image src="/photos/estela-sombrero.webp" alt="Estela sonriendo de perfil con sombrero de paja y pulseras doradas" fill sizes="100vw" />
        </div>
        <Reveal variant="fade-in">
          <p>Escuchar primero, diseñar después</p>
          <small>Mi manera de trabajar</small>
        </Reveal>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Valores</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title">
              Lo que no <em>negocio</em>
            </h2>
          </Reveal>
          <div className="values" style={{ marginTop: '2.5rem' }}>
            {values.map((v, i) => (
              <Reveal key={v.title} className="value" index={i}>
                <svg viewBox="0 0 24 24" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
                  {v.icon}
                </svg>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Me encantará <em>conocerte</em>
          </>
        }
      />
    </>
  )
}
