import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="thanks marble">
      <div className="container thanks__inner">
        <div>
          <span className="eyebrow">Error 404</span>
          <h1 className="title" style={{ fontSize: 'var(--text-display)' }}>
            Esta página se ha <em>perdido</em>
          </h1>
          <p className="muted">
            Como un anillo antes de la ceremonia. Tranquila, que todo tiene solución: vuelve al inicio y seguimos desde ahí.
          </p>
          <div className="btn-row">
            <Link href="/" className="btn btn--solid">
              Volver al inicio
            </Link>
            <Link href="/contacto" className="btn">
              Contacto
            </Link>
          </div>
        </div>
        <div className="thanks__photo">
          <Image src="/photos/anillos-detalle.webp" alt="Dos alianzas plateadas sobre flores blancas" fill sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
      </div>
    </section>
  )
}
