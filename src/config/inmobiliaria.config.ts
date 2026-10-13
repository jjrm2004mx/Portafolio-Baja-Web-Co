/**
 * Inmobiliaria Configuration
 * 
 * Real estate agency landing page
 * Pattern: Hero-Centric (Glassmorphism)
 * Colors: Teal (#0F766E) + Blue (#0369A1)
 * Typography: Cinzel + Josefin Sans
 */

export const INMOBILIARIA = {
  nombre: 'Propiedades Premium Tijuana',
  especialidad: 'Real Estate Luxury',
  descripcion: 'Desarrollo y venta de propiedades de alto valor',
  años_experiencia: 10,
  bio: 'Agencia inmobiliaria especializada en propiedades de lujo, desarrollos residenciales premium y asesoría integral en inversión inmobiliaria.',
  foto: '/images/demo/inmobiliaria-perfil.jpg',
  credenciales: [
    'Corredor Inmobiliario Certificado',
    'Especialista en Inversión Inmobiliaria',
    'Acreditado por AMPI (Asociación de Agentes Inmobiliarios)',
  ],
} as const;

export const CONTACTO_INMOBILIARIA = {
  whatsapp: '+525551234567',
  email: 'ventas@propiedadespremuim.com.mx',
  telefono: '+52 664 123 4567',
  direccion: 'Zona Río, Tijuana, B.C.',
  direccion_completa: 'Paseo de los Mártires #999, Zona Río, Tijuana, Baja California, 22000, México',
  gps: { lat: 32.5149, lng: -117.0382 },
  horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábado: 10:00 AM - 3:00 PM',
  redes: {
    facebook: 'https://facebook.com/propiedadespremuim',
    linkedin: 'https://linkedin.com/company/propiedadespremuim',
  },
} as const;

export const PROPIEDADES_DESTACADAS = [
  {
    id: 1,
    nombre: 'Casa Moderna Zona Río',
    ubicacion: 'Zona Río, Tijuana',
    precio: '$750,000',
    metros: '180 m²',
    recamaras: 3,
    banos: 2,
    descripcion: 'Casa moderna con vista panorámica, área de entretenimiento, alberca privada',
    imagen: '/images/demo/propiedad-1.jpg',
  },
  {
    id: 2,
    nombre: 'Departamento Luxury Downtown',
    ubicacion: 'Centro Histórico, Tijuana',
    precio: '$450,000',
    metros: '95 m²',
    recamaras: 2,
    banos: 2,
    descripcion: 'Departamento de lujo con amenidades premium, gym, business center',
    imagen: '/images/demo/propiedad-2.jpg',
  },
  {
    id: 3,
    nombre: 'Residencial Campestre',
    ubicacion: 'Valle de Guadalupe',
    precio: '$1,200,000',
    metros: '300 m²',
    recamaras: 4,
    banos: 3,
    descripcion: 'Residencia campestre con viñedos, área de spa, entertainment premium',
    imagen: '/images/demo/propiedad-3.jpg',
  },
  {
    id: 4,
    nombre: 'Penthouse Panorámico',
    ubicacion: 'Playas de Tijuana',
    precio: '$890,000',
    metros: '150 m²',
    recamaras: 3,
    banos: 2,
    descripcion: 'Penthouse con terraza, vista al mar, acceso a playa privada',
    imagen: '/images/demo/propiedad-4.jpg',
  },
] as const;

export const SERVICIOS_INMOBILIARIA = [
  {
    id: 'venta',
    titulo: 'Venta de Propiedades',
    descripcion: 'Ayudamos a vender tu propiedad al mejor precio',
    icono: '🏠',
  },
  {
    id: 'compra',
    titulo: 'Asesoría de Compra',
    descripcion: 'Encuentramos la propiedad perfecta para ti',
    icono: '🔍',
  },
  {
    id: 'renta',
    titulo: 'Renta Inmobiliaria',
    descripcion: 'Gestión completa de propiedades en renta',
    icono: '📝',
  },
  {
    id: 'inversion',
    titulo: 'Asesoría de Inversión',
    descripcion: 'Estrategia de inversión inmobiliaria personalizada',
    icono: '💰',
  },
] as const;

export const FINANCIAMIENTO = [
  {
    id: 1,
    nombre: 'Crédito Hipotecario',
    descripcion: 'Financiamiento a largo plazo con tasas preferenciales',
    tasa: 'Desde 6.5% anual',
    plazo: 'Hasta 30 años',
  },
  {
    id: 2,
    nombre: 'Enganche Facilitado',
    descripcion: 'Programas de enganche con hasta 10% de la propiedad',
    tasa: 'Sin intereses iniciales',
    plazo: 'Hasta 60 meses',
  },
  {
    id: 3,
    nombre: 'Inversión Inmobiliaria',
    descripcion: 'Estructuras fiscales optimizadas para inversionistas',
    tasa: 'Personalizado',
    plazo: 'Flexible',
  },
] as const;

export const TESTIMONIOS_INMOBILIARIA = [
  {
    id: 1,
    autor: 'Fernando Montoya',
    empresa: 'Empresario',
    mensaje: 'Encontraron exactamente la propiedad que buscaba. Profesionales de verdad.',
    rating: 5,
  },
  {
    id: 2,
    autor: 'Valeria Sánchez',
    empresa: 'Inversionista',
    mensaje: 'Excelente asesoría. Me ayudaron a estructurar mi portafolio inmobiliario.',
    rating: 5,
  },
  {
    id: 3,
    autor: 'Ricardo Flores',
    empresa: 'Ejecutivo',
    mensaje: 'Proceso rápido, transparente y confiable. Los recomiendo ampliamente.',
    rating: 5,
  },
] as const;

export const ESTADISTICAS_INMOBILIARIA = [
  { numero: '200+', etiqueta: 'Propiedades Vendidas' },
  { numero: '10', etiqueta: 'Años en el Mercado' },
  { numero: '1.2B', etiqueta: 'Volumen Transado' },
  { numero: '98%', etiqueta: 'Satisfacción' },
] as const;
