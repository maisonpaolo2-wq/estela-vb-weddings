import Link from 'next/link'
import type { ReactNode } from 'react'
import Reveal, { Line } from './Reveal'
import { waLink } from './WhatsAppButton'

type Props = { title?: ReactNode; text?: string; surface?: boolean }

export default function CtaBand({
  title = (
    <>
      ¿Tomamos un <em>café</em> y me lo cuentas?
    </>
  ),
  text = 'La primera cita es sin compromiso, en persona en Barcelona o por videollamada. Me cuentas vuestra idea y te digo cómo puedo ayudarte.',
  surface = true,
}: Props) {
  return (
    <section className={`section cta-band marble${surface ? ' section--surface' : ''}`}>
      <span className="watermark" aria-hidden="true">
        EV
      </span>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <span className="eyebrow eyebrow--center">Reserva tu cita</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="title">{title}</h2>
        </Reveal>
        <Line width="5rem" delay={0.12} />
        <Reveal delay={0.16}>
          <p className="muted" style={{ maxWidth: '34rem', margin: '1.5rem auto 2rem' }}>
            {text}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="btn-row">
          <Link href="/contacto" className="btn btn--solid">
            Escribirme
          </Link>
          <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
