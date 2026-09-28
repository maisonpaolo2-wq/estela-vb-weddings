'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

type Photo = { src: string; alt: string; orientation: 'landscape' | 'portrait' }

// Portfolio en scroll horizontal con snap, abre el lightbox al tocar
export default function Filmstrip({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      <div className="filmstrip" role="list">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            role="listitem"
            className={`filmstrip__item filmstrip__item--${p.orientation}`}
            onClick={() => setActive(i)}
            aria-label={`Ampliar: ${p.alt}`}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 900px) 30vw, 80vw" />
            <span className="filmstrip__n">{String(i + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <Lightbox photos={photos} index={active} onChange={setActive} />
    </>
  )
}
