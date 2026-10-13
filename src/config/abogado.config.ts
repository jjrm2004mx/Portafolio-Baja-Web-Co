/**
 * Abogado Demo Configuration
 * 
 * Variables personalizables para cambiar fácilmente los datos de la landing page.
 * Reemplaza estos valores con los datos del cliente real.
 * 
 * IMPORTANTE: Estos son datos FICTICIOS de demostración.
 * Marca claramente en la página que se trata de un ejemplo comercial.
 */

// ============================================
// IDENTIDAD DEL ABOGADO
// ============================================

export const ABOGADO = {
  // Nombre completo del abogado
  nombre: 'Lic. Roberto Mendoza García',
  
  // Especialidad principal
  especialidad: 'Derecho Mercantil y Laboral',
  
  // Descripción corta
  descripcion: 'Asesoría legal integral para empresas y personas físicas',
  
  // Años de experiencia
  años_experiencia: 18,
  
  // Bio profesional
  bio: 'Graduado de la Universidad Autónoma de Baja California (UABC) con 18 años de experiencia en derecho mercantil, laboral e inmobiliario. Especialista en asesoría a PYMES y emprendedores.',
  
  // Foto de perfil (reemplazar con ruta real)
  foto: '/images/demo/abogado-perfil.jpg',
  
  // Credenciales
  credenciales: [
    'Cédula profesional 12345678',
    'Miembro de la Barra de Abogados de B.C.',
    'Certificación en Mediación y Arbitraje',
  ],
} as const;

// ============================================
// CONTACTO & UBICACIÓN
// ============================================

export const CONTACTO = {
  // Número de WhatsApp (con código de país)
  // Formato: +525551234567 (Mexico +52, Tijuana 664, etc)
  whatsapp: '+525551234567',
  
  // Email de contacto
  email: 'contacto@ejemplo-abogado.com',
  
  // Teléfono de línea fija (opcional)
  telefono: '+52 664 123 4567',
  
  // Dirección física
  direccion: 'Zona Centro, Tijuana, B.C.',
  direccion_completa: 'Calle ejemplo #123, Tijuana, Baja California, 22000, México',
  
  // Ubicación GPS (para mapa)
  gps: {
    lat: 32.5149,
    lng: -117.0382,
  },
  
  // Horarios de atención
  horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábado: 9:00 AM - 1:00 PM',
  
  // Redes sociales (opcional)
  redes: {
    facebook: 'https://facebook.com/ejemplo',
    linkedin: 'https://linkedin.com/in/ejemplo',
    instagram: 'https://instagram.com/ejemplo',
  },
} as const;

// ============================================
// SERVICIOS LEGALES
// ============================================

export const SERVICIOS = [
  {
    id: 'mercantil',
    nombre: 'Derecho Mercantil',
    descripcion: 'Constitución de empresas, contratos comerciales, fusiones y adquisiciones',
    icono: '📋',
    beneficios: [
      'Constitución legal correcta desde el inicio',
      'Contratos blindados ante conflictos',
      'Asesoría en operaciones comerciales',
    ],
  },
  {
    id: 'laboral',
    nombre: 'Derecho Laboral',
    descripcion: 'Asesoría en contratación, conflictos laborales, despidos y finiquitos',
    icono: '👥',
    beneficios: [
      'Protección ante demandas laborales',
      'Finiquitos legales y seguros',
      'Asesoría en relaciones obrero-patronales',
    ],
  },
  {
    id: 'familiar',
    nombre: 'Derecho Familiar',
    descripcion: 'Divorcios, pensiones alimenticias, herencias, custodia de menores',
    icono: '👨‍👩‍👧‍👦',
    beneficios: [
      'Procesos ágiles y discretos',
      'Protección de derechos de menores',
      'Acuerdos equitativos',
    ],
  },
  {
    id: 'inmobiliario',
    nombre: 'Derecho Inmobiliario',
    descripcion: 'Compra-venta de propiedades, escrituras, litigios y desalojos',
    icono: '🏠',
    beneficios: [
      'Escrituras públicas correctas',
      'Validación de documentación',
      'Resolución de conflictos de propiedad',
    ],
  },
  {
    id: 'tributario',
    nombre: 'Derecho Tributario',
    descripcion: 'Asesoría fiscal, auditorías, amparos y gestión ante SAT',
    icono: '💼',
    beneficios: [
      'Cumplimiento normativo SAT',
      'Resolución de auditorías',
      'Optimización fiscal legal',
    ],
  },
  {
    id: 'penal',
    nombre: 'Derecho Penal',
    descripcion: 'Defensa penal, amparo, querellas, delitos federales y del fuero común',
    icono: '⚖️',
    beneficios: [
      'Defensa integral y estratégica',
      'Protección de derechos constitucionales',
      'Reducción de sanciones',
    ],
  },
] as const;

// ============================================
// BENEFICIOS PARA EL CLIENTE
// ============================================

export const BENEFICIOS = [
  {
    titulo: 'Transparencia Total',
    descripcion: 'Costos y tiempos claros desde la primera consulta, sin sorpresas',
    icono: '👁️',
  },
  {
    titulo: 'Disponibilidad 24/7',
    descripcion: 'WhatsApp, teléfono y email para consultas urgentes',
    icono: '📱',
  },
  {
    titulo: 'Especialización Probada',
    descripcion: `${ABOGADO.años_experiencia} años de experiencia en casos complejos`,
    icono: '🎓',
  },
  {
    titulo: 'Resultados Comprobados',
    descripcion: 'Casos exitosos resueltos en tiempo record con satisfacción del cliente',
    icono: '✓',
  },
  {
    titulo: 'Asesoría Personalizada',
    descripcion: 'Soluciones adaptadas a tu caso específico, no soluciones genéricas',
    icono: '🎯',
  },
  {
    titulo: 'Proceso Paso-a-Paso',
    descripcion: 'Te explicamos cada fase del proceso legal de forma clara y comprensible',
    icono: '📍',
  },
] as const;

// ============================================
// PROCESO DE TRABAJO
// ============================================

export const PROCESO = [
  {
    numero: 1,
    titulo: 'Consulta Inicial Gratuita',
    descripcion: 'Agenda una cita por teléfono, WhatsApp o presencial. Duración: 30 minutos.',
    detalles: [
      'Explicación de tu situación legal',
      'Evaluación profesional sin costo',
      'Propuesta de solución',
    ],
  },
  {
    numero: 2,
    titulo: 'Análisis Profundo del Caso',
    descripcion: 'Revisamos documentación completa y elaboramos estrategia legal personalizada.',
    detalles: [
      'Recopilación de pruebas y documentos',
      'Investigación del marco legal aplicable',
      'Estrategia de resolución definida',
    ],
  },
  {
    numero: 3,
    titulo: 'Propuesta de Honorarios',
    descripcion: 'Presentamos presupuesto detallado, tiempos estimados y opciones de pago.',
    detalles: [
      'Costos transparentes y desglosados',
      'Opciones de honorarios (fijos o contingentes)',
      'Cronograma de actuaciones',
    ],
  },
  {
    numero: 4,
    titulo: 'Ejecución de Gestiones',
    descripcion: 'Realizamos trámites, escritos, gestiones administrativas y acuerdos.',
    detalles: [
      'Presentación de demandas o escritos',
      'Gestiones ante autoridades',
      'Negociaciones de acuerdos',
    ],
  },
  {
    numero: 5,
    titulo: 'Seguimiento y Resolución',
    descripcion: 'Monitoreo constante hasta obtener sentencia o acuerdo favorable.',
    detalles: [
      'Actualizaciones semanales sobre el caso',
      'Coordinación de audiencias',
      'Negociación de términos finales',
    ],
  },
  {
    numero: 6,
    titulo: 'Cierre del Caso',
    descripcion: 'Entrega de documentación completa, explicación de resultados y asesoría post-venta.',
    detalles: [
      'Expediente legal completo',
      'Explicación detallada de sentencia/acuerdo',
      'Asesoría para implementar resultados',
    ],
  },
] as const;

// ============================================
// PREGUNTAS FRECUENTES
// ============================================

export const FAQS = [
  {
    pregunta: '¿Cuál es el costo de una consulta inicial?',
    respuesta: 'La consulta inicial es completamente gratuita. Durante 30 minutos analizamos tu caso, te asesoramos sin compromiso y te presentamos opciones de honorarios si decides continuar.',
  },
  {
    pregunta: '¿Cuánto tiempo toma resolver un caso?',
    respuesta: 'Depende del tipo de caso: divorcios amistosos (1-3 meses), divorcios contenciosos (6-12 meses), mercantil (2-6 meses). En la consulta inicial estimamos el tiempo con precisión.',
  },
  {
    pregunta: '¿Cómo funciona el pago de honorarios?',
    respuesta: 'Ofrecemos tres opciones: honorarios fijos (cantidad definida desde el inicio), honorarios por acto (por cada gestión realizada), o contingente (solo si ganas el caso). Tú eliges.',
  },
  {
    pregunta: '¿Puedo contactarte fuera de horario de oficina?',
    respuesta: 'Sí. Puedes enviar mensajes por WhatsApp en cualquier momento. Para consultas urgentes, tenemos teléfono de emergencia disponible 24/7.',
  },
  {
    pregunta: '¿Qué documentos debo traer a la primera consulta?',
    respuesta: 'Depende del caso: para divorcios (acta de matrimonio), mercantil (contratos), laboral (documentos de contratación). Te enviaremos una lista específica cuando agendemos.',
  },
  {
    pregunta: '¿Cuál es tu tasa de éxito?',
    respuesta: 'Hemos resuelto favorablemente el 89% de nuestros casos. Los casos que no ganamos se resuelven por acuerdo, minimizando los impactos para el cliente.',
  },
  {
    pregunta: '¿Ofrecen asesoría preventiva para empresas?',
    respuesta: 'Sí. Podemos asesorarte en la constitución de tu empresa, contratos, políticas internas y cumplimiento legal antes de que surjan problemas.',
  },
  {
    pregunta: '¿Garantizan confidencialidad?',
    respuesta: 'Por supuesto. La relación abogado-cliente está protegida por secreto profesional. Toda la información es confidencial y no se comparte con terceros.',
  },
] as const;

// ============================================
// TESTIMONIOS (FICTICIOS - MARCAR CLARAMENTE)
// ============================================

export const TESTIMONIOS = [
  {
    nombre: 'María González López',
    empresa: 'Restaurante "El Sabor"',
    foto: '/images/demo/testimonial-1.jpg',
    quote: 'El Lic. Mendoza nos ayudó en la constitución de la empresa y resolución de conflictos laborales. Su asesoría fue clave para que creciéramos sin complicaciones legales.',
    rating: 5,
    nota: '(EJEMPLO COMERCIAL)',
  },
  {
    nombre: 'Carlos Rodríguez Pérez',
    empresa: 'Empresa Constructora "BC Edificios"',
    foto: '/images/demo/testimonial-2.jpg',
    quote: 'Excelente profesional. Nos asesoró en compra de terrenos e inmuebles. Todo quedó documentado correctamente y sin problemas futuros.',
    rating: 5,
    nota: '(EJEMPLO COMERCIAL)',
  },
  {
    nombre: 'Patricia Hernández Ruiz',
    empresa: 'Particular',
    foto: '/images/demo/testimonial-3.jpg',
    quote: 'Proceso de divorcio ágil y sin conflictos innecesarios. El Lic. Mendoza me explicó todo paso-a-paso. Muy recomendable.',
    rating: 5,
    nota: '(EJEMPLO COMERCIAL)',
  },
] as const;

// ============================================
// ESTADÍSTICAS & NÚMEROS
// ============================================

export const ESTADISTICAS = [
  {
    numero: '150+',
    label: 'Casos resueltos',
  },
  {
    numero: '89%',
    label: 'Tasa de éxito',
  },
  {
    numero: '18',
    label: 'Años de experiencia',
  },
  {
    numero: '95%',
    label: 'Clientes satisfechos',
  },
] as const;

// ============================================
// META TAGS SEO
// ============================================

export const SEO = {
  title: 'Lic. Roberto Mendoza - Abogado en Tijuana | Asesoría Legal Integral',
  description: 'Asesoría legal profesional en Derecho Mercantil, Laboral y Familiar en Tijuana, B.C. Consulta gratuita. 18 años de experiencia.',
  keywords: 'abogado, asesoría legal, Tijuana, derecho mercantil, derecho laboral, divorcio',
  ogImage: '/images/demo/abogado-og.jpg',
  canonical: 'https://ejemplo-abogado.com',
} as const;

// ============================================
// COLORES DEL SISTEMA DE DISEÑO
// ============================================

export const COLORES = {
  primary: '#003366',      // Navy azul profundo
  secondary: '#1B7A8A',    // Teal/azul verdoso
  accent: '#D4AF37',       // Gold/dorado
  light: '#F0F4F8',        // Fondo claro
  white: '#FFFFFF',
  dark: '#0F172A',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

// ============================================
// TIPOGRAFÍA
// ============================================

export const TIPOGRAFIA = {
  headingFont: 'Lora',     // Serif, autoridad
  bodyFont: 'Open Sans',   // Sans-serif, claridad
  headingWeight: 700,
  bodyWeight: 400,
} as const;
