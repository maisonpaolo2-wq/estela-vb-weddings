import { testimonials } from '@/content/data'
import Reveal from './Reveal'

export default function TestimonialCards({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials
  return (
    <div className="tcards">
      {list.map((t, i) => (
        <Reveal key={t.name} as="article" className="tcard" index={i % 3}>
          <span className="tcard__mark" aria-hidden="true">
            “
          </span>
          <blockquote>{t.text}</blockquote>
          <footer>
            <strong>{t.name}</strong>
            <span>
              {t.date} · {t.location}
            </span>
          </footer>
        </Reveal>
      ))}
    </div>
  )
}
