/**
 * Restaurante Configuration
 * 
 * Fine dining restaurant landing page
 * Pattern: Funnel 3-Step
 * Colors: Red (#DC2626) + Gold (#A16207)
 * Typography: Playfair Display SC + Karla
 */

export const RESTAURANTE = {
  nombre: 'Casa Delizia',
  especialidad: 'Fine Dining Italiano',
  descripcion: 'Autenticidad italiana en el corazón de Tijuana',
  años_experiencia: 8,
  bio: 'Restaurante gastronómico especializado en cocina italiana auténtica. Ingredientes importados, recetas tradicionales y experiencia culinaria única.',
  foto: '/images/demo/restaurante-perfil.jpg',
  credenciales: [
    'Chef Maestro Italiano Certificado',
    'Mejor Restaurante Italiano 2023',
    'Distinción Michelin Guide Recommendation',
  ],
} as const;

export const CONTACTO_RESTAURANTE = {
  whatsapp: '+525551234567',
  email: 'reservas@casadelizia.com.mx',
  telefono: '+52 664 123 4567',
  direccion: 'Zona Centro, Tijuana, B.C.',
  direccion_completa: 'Blvd Salina Cruz #456, Tijuana, Baja California, 22000, México',
  gps: { lat: 32.5149, lng: -117.0382 },
  horario: 'Martes a Jueves: 5:00 PM - 11:00 PM | Viernes-Sábado: 5:00 PM - 12:00 AM | Domingo: 2:00 PM - 11:00 PM',
  redes: {
    instagram: 'https://instagram.com/casadelizia',
    facebook: 'https://facebook.com/casadelizia',
  },
} as const;

export const MENU_DESTACADO = [
  {
    id: 'pasta-fresca',
    nombre: 'Pasta Fresca Artesanal',
    descripcion: 'Elaborada diariamente con técnicas tradicionales',
    platos: ['Tagliatelle Bolognese', 'Ravioli de Ricotta', 'Pappardelle al Cinghiale'],
  },
  {
    id: 'carnes-premium',
    nombre: 'Carnes Premium',
    descripcion: 'Seleccionadas de los mejores proveedores',
    platos: ['Osso Buco', 'Costilla de Res Maturada', 'Chuleta de Cordero'],
  },
  {
    id: 'pescados-mariscos',
    nombre: 'Pescados & Mariscos',
    descripcion: 'Del mercado fresco diariamente',
    platos: ['Branzino al Horno', 'Camarones Scampi', 'Pulpo a la Parrilla'],
  },
  {
    id: 'especialidades',
    nombre: 'Especialidades de Casa',
    descripcion: 'Creaciones exclusivas del Chef',
    platos: ['Risotto de Azafrán', 'Tabla Italiana Premium', 'Postre del Chef'],
  },
] as const;

export const ESPECIALES_SEMANA = [
  {
    id: 1,
    dia: 'Martes',
    especial: 'Pasta Night - 30% OFF en todas las pastas',
  },
  {
    id: 2,
    dia: 'Miércoles',
    especial: 'Wine Tasting - Degustación de vinos italianos premium',
  },
  {
    id: 3,
    dia: 'Jueves',
    especial: 'Carne Premium - Tabla mixta a precio especial',
  },
  {
    id: 4,
    dia: 'Viernes-Domingo',
    especial: 'Menú Degustación 5 Tiempos - Experiencia Completa',
  },
] as const;

export const TESTIMONIOS_RESTAURANTE = [
  {
    id: 1,
    autor: 'Andrea Ruiz',
    empresa: 'Restaurantera',
    mensaje: 'La mejor experiencia italiana que he tenido en México. Calidad insuperable.',
    rating: 5,
  },
  {
    id: 2,
    autor: 'Roberto González',
    empresa: 'Crítico Gastronómico',
    mensaje: 'Autenticidad, pasión y maestría. Casa Delizia es una joya culinaria.',
    rating: 5,
  },
  {
    id: 3,
    autor: 'Mariana López',
    empresa: 'Chef Propietaria',
    mensaje: 'Cada plato es una obra de arte. Definitivamente volveré.',
    rating: 5,
  },
] as const;

export const ESTADISTICAS_RESTAURANTE = [
  { numero: '500+', etiqueta: 'Comensales Mensuales' },
  { numero: '8', etiqueta: 'Años de Excelencia' },
  { numero: '4.9★', etiqueta: 'Calificación' },
  { numero: '100%', etiqueta: 'Ingredientes Premium' },
] as const;
