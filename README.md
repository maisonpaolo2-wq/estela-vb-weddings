# VB Weddings · Estela Villodres

Web en Next.js 15 para **VB Weddings** (Instagram [@estelavbweddings](https://www.instagram.com/estelavbweddings/)), wedding & event planner en Barcelona.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3640
npm run build
```

## Contenido

Todo el texto está en `content/data.ts` (siteConfig, services, processSteps, testimonials, photos, faqs, coverage).

**Datos provisionales** (no aparecen en el perfil de Instagram, cambiar antes de publicar):
- `email`: hola@estelavbweddings.com
- `whatsapp`: 34600000000
- `domain`: www.estelavbweddings.com
- Testimonios: inventados, sustituir por reales.

## Fotos

`npm run photos` ejecuta `scripts/crop-photos.mjs`:
- `photos-src/instagram-perfil.webp` (captura del perfil) → extrae las miniaturas del grid por coordenadas, sin status bar, iconos de pin/reel/carrusel ni marcas de agua de TikTok.
- Cualquier otra foto en `photos-src/` → recorte automático de barras oscuras/claras arriba y abajo.
- Genera `public/photos/*.webp` y `public/og-image.jpg` (1200×630).

Las fotos actuales salen de una captura (baja resolución). Sustituirlas por los originales en `photos-src/` y ajustar `content/data.ts`.

## Formulario

`app/api/lead` envía los leads con Resend. Copia `.env.local.example` a `.env.local` y añade `RESEND_API_KEY`. Sin clave, el lead se registra en la consola del servidor.

## Paleta

| Token | Hex |
|---|---|
| `--color-bg` | `#fcf6f2` |
| `--color-surface` | `#f6e7df` |
| `--color-text` | `#2a1f22` |
| `--color-accent` | `#c0718a` |
| `--color-muted` | `#8a7775` |

Tipografías: Bodoni Moda (titulares) + Jost (texto) + Mrs Saint Delafield (firma).
