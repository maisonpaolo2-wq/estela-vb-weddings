// Datos del cliente. Email, WhatsApp y dominio son provisionales (no aparecen
// en el perfil de Instagram): cambiarlos aquí y se actualiza toda la web.
export const siteConfig = {
  name: 'VB Weddings',
  planner: 'Estela Villodres',
  domain: 'www.estelavbweddings.com',
  email: 'hola@estelavbweddings.com',
  whatsapp: '34600000000',
  instagram: '@estelavbweddings',
  locations: ['Barcelona', 'Maresme', 'Penedès', 'Costa Brava', 'Catalunya'],
  tagline: 'Bodas y fiestas con alma, diseñadas a tu medida',
  bio: 'Soy Estela Villodres, wedding & event planner en Barcelona. Llevo años organizando bodas, fiestas y celebraciones con una manera muy concreta de trabajar: escuchar primero, diseñar después y estar presente en cada detalle. Me encargo de la planificación, el diseño y la coordinación para que tú solo tengas que vivir tu día. Cada boda empieza con un café y una conversación sin prisas, porque el asesoramiento personalizado es la base de todo lo que hago.',
  bioShort:
    'Diseño y organizo bodas y eventos en Barcelona con asesoramiento personalizado de principio a fin. Tú disfrutas, yo me ocupo de todo lo demás.',
  quote: 'Una boda bonita se ve. Una boda bien organizada se siente, y eso es lo que yo cuido.',
}

export const stats = [
  { value: '1', label: 'planner contigo de principio a fin' },
  { value: '12', label: 'meses de acompañamiento en bodas integrales' },
  { value: '100%', label: 'diseños únicos, sin plantillas' },
]

export const services: Array<{
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  includes: string[]
}> = [
  {
    title: 'Organización integral de bodas',
    slug: 'bodas-integrales',
    description:
      'De la primera idea al último baile. Busco el espacio, selecciono proveedores y coordino cada paso contigo.',
    longDescription:
      'Empezamos con una reunión para conocer vuestra historia, vuestro presupuesto y cómo os imagináis el día. A partir de ahí busco y visito espacios, negocio con proveedores, diseño el cronograma y llevo el control del presupuesto en un documento compartido. Durante los meses de preparación tenéis una única persona de referencia: yo. El día de la boda coordino montaje, horarios, proveedores e invitados para que vosotros no tengáis que mirar el reloj ni una vez.',
    image: '/photos/anillos-peonia-blanca.webp',
    includes: [
      'Búsqueda y visita de espacios en Barcelona y alrededores',
      'Selección, negociación y contratación de proveedores',
      'Cronograma, presupuesto y seating plan compartidos',
      'Coordinación completa del día con equipo de apoyo',
    ],
  },
  {
    title: 'Diseño y decoración',
    slug: 'diseno-decoracion',
    description:
      'Estilismo floral, papelería y ambientación con una línea estética coherente, hecha para vosotros.',
    longDescription:
      'Creo un concepto visual propio para cada boda: paleta de color, flores, mantelería, iluminación, papelería y señalética. Os presento un moodboard con referencias reales y, una vez aprobado, me encargo de producirlo con floristas y decoradores de confianza. El resultado es una boda que se reconoce en cada foto, desde el pasillo de ceremonia hasta la mesa dulce.',
    image: '/photos/gypsophila-rosas-blancas.webp',
    includes: [
      'Moodboard y concepto estético personalizado',
      'Estilismo floral de ceremonia, banquete y ramo',
      'Papelería, seating y señalética a juego',
      'Montaje y desmontaje el mismo día',
    ],
  },
  {
    title: 'Coordinación del día B',
    slug: 'coordinacion-dia-b',
    description:
      'Si ya lo tenéis casi todo, entro los últimos dos meses para que el día salga redondo.',
    longDescription:
      'Pensado para parejas que han organizado su boda por su cuenta y quieren llegar al día tranquilas. Revisamos juntos contratos y horarios, hablo con cada proveedor, preparo el minuto a minuto y visito el espacio antes de la boda. El día B estoy allí desde el montaje hasta el final de la fiesta, resolviendo cualquier imprevisto sin que os enteréis.',
    image: '/photos/anillos-detalle.webp',
    includes: [
      'Reunión de traspaso y revisión de contratos',
      'Minuto a minuto y contacto con todos los proveedores',
      'Visita técnica previa al espacio',
      'Coordinación presencial durante todo el evento',
    ],
  },
  {
    title: 'Fiestas y eventos',
    slug: 'fiestas-eventos',
    description:
      'Cumpleaños, pedidas, baby showers y graduaciones con decoración, globos y mesa dulce.',
    longDescription:
      'La parte de parties de VB Weddings. Organizo celebraciones privadas y pequeños eventos con el mismo cuidado que una boda: arcos de globos, photocall, mesa dulce, flores y ambientación completa. Trabajo con el espacio que elijáis o os propongo uno, y me encargo del montaje para que el anfitrión también pueda disfrutar de su fiesta.',
    image: '/photos/arco-globos-amarillos.webp',
    includes: [
      'Concepto y decoración temática',
      'Arcos de globos, photocall y mesa dulce',
      'Búsqueda de espacio y catering si hace falta',
      'Montaje, coordinación y recogida',
    ],
  },
]

export const processSteps: Array<{
  number: number
  title: string
  description: string
}> = [
  {
    number: 1,
    title: 'Reserva tu cita',
    description:
      'Escríbeme por WhatsApp o desde el formulario y quedamos en persona o por videollamada. Primera reunión sin compromiso.',
  },
  {
    number: 2,
    title: 'Asesoramiento personalizado',
    description:
      'Me cuentas vuestra historia, estilo e invitados. Te preparo una propuesta clara con servicios, calendario y presupuesto orientativo.',
  },
  {
    number: 3,
    title: 'Diseño y proveedores',
    description:
      'Creamos el moodboard, elegimos espacio y proveedores y cerramos cada detalle en un documento compartido que siempre está al día.',
  },
  {
    number: 4,
    title: 'Tu día, sin preocupaciones',
    description:
      'Coordino montaje, horarios y equipo desde primera hora. Tú solo tienes que vivirlo, yo me ocupo de que todo ocurra.',
  },
]

export const testimonials: Array<{
  name: string
  date: string
  location: string
  text: string
}> = [
  {
    name: 'Marta y Joan',
    date: 'Junio 2025',
    location: 'Masía en el Penedès · 140 invitados',
    text: 'Estela encontró la masía en dos semanas cuando nosotros llevábamos meses buscando. El pasillo de gypsophila y rosas blancas era exactamente lo que le enseñé en una foto de Pinterest. El día de la boda ni vimos a los proveedores, solo a ella con su pinganillo.',
  },
  {
    name: 'Laia Ferrer',
    date: 'Abril 2025',
    location: 'Cumpleaños de 40 · Poblenou',
    text: 'Le pedí una fiesta amarilla para mis 40 y montó un arco de globos, mesa dulce y photocall en un local de Poblenou en tres horas. Mis amigas todavía me preguntan quién lo organizó.',
  },
  {
    name: 'Clara y David',
    date: 'Septiembre 2025',
    location: 'Boda civil en el Maresme',
    text: 'Contratamos solo la coordinación del día B y fue la mejor decisión. Revisó todos los contratos, detectó que el catering y la música tenían horarios que no cuadraban y lo solucionó un mes antes. Llegamos a la boda sin nervios.',
  },
  {
    name: 'Núria y Pol',
    date: 'Octubre 2024',
    location: 'Boda íntima en Barcelona · 60 invitados',
    text: 'Queríamos algo pequeño y muy nuestro. Estela diseñó la papelería con nuestras iniciales, las flores en tonos malva y hasta un rincón con fotos de nuestros abuelos. Cada invitado nos dijo que la boda se parecía mucho a nosotros.',
  },
  {
    name: 'Sandra Moreno',
    date: 'Febrero 2026',
    location: 'Baby shower · Sant Cugat',
    text: 'Organizó el baby shower de mi hermana con muy poco tiempo y todo en rosa empolvado y blanco. Se encargó de la tarta, los globos y las flores. Yo solo tuve que llevar a la futura mamá con los ojos tapados.',
  },
  {
    name: 'Anna y Guillem',
    date: 'Mayo 2025',
    location: 'Boda en la Costa Brava',
    text: 'Vivimos en Londres y organizamos todo a distancia con ella. Videollamadas cada dos semanas, un documento compartido con todo al día y fotos de cada visita. Aterrizamos tres días antes y ya estaba todo hecho.',
  },
]

export const photos: Array<{
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
}> = [
  { src: '/photos/jardin-flores-ceremonia.webp', alt: 'Pasillo de ceremonia en un jardín con gypsophila, rosas blancas y pétalos sobre el césped frente a una masía', featured: true, orientation: 'landscape' },
  { src: '/photos/estela-retrato-marca.webp', alt: 'Estela Villodres con vestido blanco y sombrero sobre fondo melocotón junto al logotipo de VB Weddings', featured: true, orientation: 'portrait' },
  { src: '/photos/estela-ramo-flores.webp', alt: 'Estela sonríe con un gran ramo envuelto en papel rosa frente a una pared de ladrillo con plantas colgantes', featured: true, orientation: 'portrait' },
  { src: '/photos/anillos-peonia-blanca.webp', alt: 'Alianzas de boda grabadas apoyadas sobre los pétalos de una peonía blanca', featured: true, orientation: 'landscape' },
  { src: '/photos/arco-globos-amarillos.webp', alt: 'Arco de globos amarillos y arco azul preparados para una fiesta en un local de ladrillo visto', featured: false, orientation: 'landscape' },
  { src: '/photos/gypsophila-rosas-blancas.webp', alt: 'Detalle de centro floral con gypsophila y rosas blancas en el jardín de la ceremonia', featured: false, orientation: 'portrait' },
  { src: '/photos/estela-sombrero.webp', alt: 'Retrato de perfil de Estela sonriendo con sombrero de paja claro y pulseras doradas', featured: false, orientation: 'landscape' },
  { src: '/photos/anillos-detalle.webp', alt: 'Primer plano de dos alianzas plateadas entrelazadas sobre flores blancas', featured: false, orientation: 'landscape' },
  { src: '/photos/ramo-papel-rosa.webp', alt: 'Ramo de flores silvestres envuelto en papel de seda rosa pálido', featured: false, orientation: 'portrait' },
  { src: '/photos/petalos-cesped.webp', alt: 'Pétalos blancos esparcidos sobre el césped junto a un arreglo floral de ceremonia', featured: false, orientation: 'landscape' },
]

export const faqs = [
  {
    q: '¿Con cuánta antelación debo contactarte?',
    a: 'Para una boda integral lo ideal es entre 10 y 14 meses antes. Para coordinación del día B, dos o tres meses. Las fiestas pueden organizarse en pocas semanas.',
  },
  {
    q: '¿Trabajas fuera de Barcelona?',
    a: 'Sí. Organizo bodas en toda Catalunya y también bodas de destino en España. Los desplazamientos se incluyen en la propuesta desde el principio.',
  },
  {
    q: '¿Puedo elegir mis propios proveedores?',
    a: 'Claro. Te recomiendo a los que conozco y en los que confío, pero si ya tienes fotógrafo, florista o catering, me coordino con ellos sin problema.',
  },
  {
    q: '¿Cuánto cuestan tus servicios?',
    a: 'Depende del servicio, la fecha y el número de invitados. En la primera cita te doy un presupuesto claro y cerrado, sin sorpresas después.',
  },
]

export const coverage = [
  { place: 'Barcelona ciudad', note: 'Sin coste de desplazamiento' },
  { place: 'Maresme y Vallès', note: 'Masías y fincas a 30 minutos' },
  { place: 'Penedès y Garraf', note: 'Bodas entre viñedos y mar' },
  { place: 'Costa Brava y Girona', note: 'Bodas de fin de semana' },
  { place: 'Resto de España', note: 'Bodas de destino bajo consulta' },
]

export const photoBySrc = (src: string) => photos.find((p) => p.src === src)
