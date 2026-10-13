/**
 * Barbería Configuration
 * 
 * Luxury barbershop landing page
 * Pattern: Scroll-Triggered Storytelling
 * Colors: Black (#1C1917) + Gold (#A16207)
 * Typography: Cormorant + Montserrat
 */

export const BARBERIA = {
  nombre: 'La Barbería del Maestro',
  especialidad: 'Barbershop Premium Luxury',
  descripcion: 'Experiencia de barbería artesanal y personalizada',
  años_experiencia: 12,
  bio: 'Espacio dedicado al arte de la barbería tradicional con maestría moderna. Especialistas en cuidado de barba, cortes clásicos y tratamientos capilares premium.',
  foto: '/images/demo/barberia-perfil.jpg',
  credenciales: [
    'Maestro Barbero Certificado',
    'Especialización en Barba Artesanal',
    'Premiado Mejor Barbería Tijuana 2023',
  ],
} as const;

export const CONTACTO_BARBERIA = {
  whatsapp: '+525551234567',
  email: 'reservas@labarberiadelmaestro.com',
  telefono: '+52 664 123 4567',
  direccion: 'Zona Centro, Tijuana, B.C.',
  direccion_completa: 'Paseo de los Mártires #789, Tijuana, Baja California, 22000, México',
  gps: { lat: 32.5149, lng: -117.0382 },
  horario: 'Martes a Viernes: 10:00 AM - 8:00 PM | Sábado y Domingo: 10:00 AM - 6:00 PM',
  redes: {
    instagram: 'https://instagram.com/labarberiadelmaestro',
    facebook: 'https://facebook.com/labarberiadelmaestro',
  },
} as const;

export const SERVICIOS_BARBERIA = [
  {
    id: 'corte-clasico',
    nombre: 'Corte Clásico',
    descripcion: 'Corte tradicional con técnica de navaja',
    icono: '✂️',
    precio: '$120',
    duracion: '30 min',
    beneficios: ['Línea precisa', 'Acabado profesional', 'Consultoría de estilo'],
  },
  {
    id: 'barba-artesanal',
    nombre: 'Barba Artesanal',
    descripcion: 'Recorte y perfilado experto de barba',
    icono: '🪮',
    precio: '$80',
    duracion: '25 min',
    beneficios: ['Forma personalizada', 'Suavizado', 'Productos premium'],
  },
  {
    id: 'corte-barba-combo',
    nombre: 'Corte + Barba Premium',
    descripcion: 'Experiencia completa de grooming premium',
    icono: '👔',
    precio: '$180',
    duracion: '60 min',
    beneficios: ['Servicio completo', 'Masaje facial', 'Toalla caliente'],
  },
  {
    id: 'tratamiento-capilar',
    nombre: 'Tratamiento Capilar',
    descripcion: 'Revitalización y reparación profesional',
    icono: '💆',
    precio: '$150',
    duracion: '45 min',
    beneficios: ['Hidratación profunda', 'Brillo restaurado', 'Resultados inmediatos'],
  },
  {
    id: 'facial-barba',
    nombre: 'Facial para Barba',
    descripcion: 'Limpieza profunda y cuidado de piel',
    icono: '🧴',
    precio: '$100',
    duracion: '30 min',
    beneficios: ['Piel limpia', 'Prevención acné', 'Suavidad garantizada'],
  },
  {
    id: 'cejas-perfilado',
    nombre: 'Cejas + Perfilado',
    descripcion: 'Diseño de cejas y ajuste facial completo',
    icono: '👁️',
    precio: '$70',
    duracion: '20 min',
    beneficios: ['Forma armónica', 'Expresión mejorada', 'Acabado limpio'],
  },
] as const;

export const EQUIPO_BARBERIA = [
  {
    id: 1,
    nombre: 'Miguel Rivera',
    rol: 'Maestro Barbero',
    especialidad: 'Cortes Clásicos',
    foto: '/images/demo/barbero-miguel.jpg',
  },
  {
    id: 2,
    nombre: 'Diego Sánchez',
    rol: 'Especialista Barba',
    especialidad: 'Barba Artesanal',
    foto: '/images/demo/barbero-diego.jpg',
  },
  {
    id: 3,
    nombre: 'Carlos López',
    rol: 'Especialista Grooming',
    especialidad: 'Tratamientos Capilares',
    foto: '/images/demo/barbero-carlos.jpg',
  },
] as const;

export const TESTIMONIOS_BARBERIA = [
  {
    id: 1,
    autor: 'Javier Escamilla',
    mensaje: 'Mejor barbería en Tijuana. Los maestros conocen su arte. Recomendado 100%.',
    rating: 5,
  },
  {
    id: 2,
    autor: 'Rodrigo Martínez',
    mensaje: 'Ambiente relajante, profesionales expertos, resultados impecables. Vuelvo cada mes.',
    rating: 5,
  },
  {
    id: 3,
    autor: 'Fernando Guerrero',
    mensaje: 'Mi barbería de confianza desde hace 5 años. Calidad y servicio inmejorable.',
    rating: 5,
  },
] as const;

export const ESTADISTICAS_BARBERIA = [
  { numero: '3000+', etiqueta: 'Clientes Satisfechos' },
  { numero: '12', etiqueta: 'Años de Tradición' },
  { numero: '4.9★', etiqueta: 'Calificación' },
  { numero: '95%', etiqueta: 'Retorno' },
] as const;
