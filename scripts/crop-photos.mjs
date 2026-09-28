// Recorta el "chrome" de capturas de iPhone/Instagram y genera las fotos de la web.
//
// 1) Capturas de perfil (photos-src/instagram-perfil.*): se extraen las miniaturas
//    del grid por coordenadas, esquivando status bar, cabecera, iconos de pin/reel/
//    carrusel y marcas de agua. Las coordenadas son sobre una captura de 923 px de
//    ancho y se escalan si la captura tiene otro tamaño.
// 2) Resto de imágenes en photos-src/: se detectan barras oscuras o claras
//    (top/bottom) y se recortan automáticamente.
//
// Salida: public/photos/*.webp + public/og-image.jpg (1200x630).
// Uso: npm run photos
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = path.resolve('photos-src')
const OUT = path.resolve('public/photos')
const TARGET_W = 1600
const SCREEN_W = 923
const HERO = 'jardin-flores-ceremonia'

// [left, top, width, height] sobre la captura de 923x2000
const TILES = {
  'jardin-flores-ceremonia': [617, 1753, 245, 247],
  'estela-ramo-flores': [309, 1343, 244, 407],
  'estela-retrato-marca': [0, 1343, 240, 407],
  'anillos-peonia-blanca': [0, 1753, 245, 247],
  'arco-globos-amarillos': [389, 1798, 170, 155],
  'ramo-papel-rosa': [329, 1523, 140, 190],
  'gypsophila-rosas-blancas': [737, 1813, 125, 187],
  'anillos-detalle': [90, 1893, 140, 107],
  'estela-sombrero': [40, 1343, 190, 150],
  'petalos-cesped': [617, 1843, 150, 157],
}

function isBarRow(data, width, channels, y) {
  let sum = 0
  let sumSq = 0
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels
    const l = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    sum += l
    sumSq += l * l
  }
  const mean = sum / width
  const std = Math.sqrt(Math.max(0, sumSq / width - mean * mean))
  return std < 10 && (mean < 30 || mean > 235)
}

async function detectCrop(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const limit = Math.floor(height * 0.25)
  let top = 0
  while (top < limit && isBarRow(data, width, channels, top)) top++
  let bottom = 0
  while (bottom < limit && isBarRow(data, width, channels, height - 1 - bottom)) bottom++
  if (top < 4) top = 0
  if (bottom < 4) bottom = 0
  return { left: 0, top, width, height: height - top - bottom }
}

// Las miniaturas son pequeñas: se amplían con lanczos y un enfoque suave
const finish = (img) =>
  img
    .resize({ width: TARGET_W, kernel: 'lanczos3' })
    .sharpen({ sigma: 1.1, m1: 0.6, m2: 1.5 })
    .modulate({ saturation: 1.04 })
    .webp({ quality: 84 })

async function run() {
  await mkdir(OUT, { recursive: true })
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))

  for (const f of files) {
    const input = path.join(SRC, f)
    if (/^instagram-perfil/i.test(f)) {
      const { width } = await sharp(input).metadata()
      const k = width / SCREEN_W
      for (const [name, [l, t, w, h]] of Object.entries(TILES)) {
        const region = { left: Math.round(l * k), top: Math.round(t * k), width: Math.round(w * k), height: Math.round(h * k) }
        const meta = await finish(sharp(input).extract(region)).toFile(path.join(OUT, `${name}.webp`))
        console.log(`grid       ${name}.webp  ${meta.width}x${meta.height}`)
      }
      continue
    }
    const crop = await detectCrop(input)
    const name = f.replace(/\.[^.]+$/, '')
    const meta = await finish(sharp(input).extract(crop)).toFile(path.join(OUT, `${name}.webp`))
    console.log(`${crop.top ? 'recortada' : 'ok       '}  ${name}.webp  ${meta.width}x${meta.height}`)
  }

  const svg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2a1f22" stop-opacity="0.2"/>
        <stop offset="1" stop-color="#2a1f22" stop-opacity="0.78"/>
      </linearGradient></defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <text x="80" y="430" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="8" fill="#fcf6f2">WEDDING PLANNER &amp; PARTIES · BARCELONA</text>
      <line x1="80" y1="462" x2="150" y2="462" stroke="#e9a9bd" stroke-width="2"/>
      <text x="76" y="560" font-family="Didot, 'Bodoni 72', Georgia, serif" font-size="96" fill="#ffffff">VB Weddings</text>
    </svg>`)
  await sharp(path.join(OUT, `${HERO}.webp`))
    .resize(1200, 630, { fit: 'cover' })
    .blur(1.2)
    .composite([{ input: svg }])
    .jpeg({ quality: 86 })
    .toFile(path.resolve('public/og-image.jpg'))
  console.log('og-image.jpg generada')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
