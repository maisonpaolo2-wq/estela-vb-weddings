import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/data'
import { waLink } from './WhatsAppButton'
import { Monogram } from './Nav'

export default function Footer() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Image src="/photos/petalos-cesped.webp" alt="Pétalos blancos sobre el césped de una ceremonia al aire libre" fill sizes="100vw" />
      </div>
      <div className="container">
        <p className="footer__quote">“{siteConfig.quote}”</p>
        <p className="footer__sig">{siteConfig.planner}</p>
        <div className="footer__grid">
          <div className="footer__brand">
            <Monogram className="monogram--light" />
            <p className="small" style={{ opacity: 0.8, marginTop: '1.25rem', maxWidth: '22rem' }}>
              Wedding planner &amp; parties en Barcelona. Diseño de bodas y eventos con asesoramiento personalizado.
            </p>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/sobre-mi">Sobre mí</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Hablemos</h4>
            <ul>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp · Reserva tu cita
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                  Instagram {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Dónde trabajo</h4>
            <ul>
              {siteConfig.locations.slice(0, 4).map((l) => (
                <li key={l}>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.planner}
          </span>
          <span>Wedding &amp; Event Planner · Barcelona</span>
        </div>
      </div>
    </footer>
  )
}
