import type { ReactNode } from 'react'
import HeroTitle from './HeroTitle'
import Reveal from './Reveal'

type Props = { eyebrow: string; lines: ReactNode[]; text?: string; watermark?: string }

// Cabecera tipográfica sin foto sobre fondo mármol
export default function EditorialHero({ eyebrow, lines, text, watermark = 'EV' }: Props) {
  return (
    <section className="ed-hero marble">
      <span className="watermark" aria-hidden="true">
        {watermark}
      </span>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal variant="fade-in">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <HeroTitle lines={lines} />
        {text && (
          <Reveal delay={0.5}>
            <p className="muted">{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
