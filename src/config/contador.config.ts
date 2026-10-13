/**
 * Contador (Accounting) Configuration
 * 
 * Professional accounting firm landing page
 * Pattern: Trust & Authority
 * Colors: Navy (#1E3A8A) + Gold (#B45309)
 * Typography: EB Garamond + Lato
 */

export const CONTADOR = {
  nombre: 'CPA Laura Morales Gutiérrez',
  especialidad: 'Contabilidad y Asesoría Fiscal',
  descripcion: 'Asesoría contable integral para PYMES y negocios en crecimiento',
  años_experiencia: 15,
  bio: 'Contadora Pública titulada de la UABC con 15 años de experiencia en contabilidad, auditoría y asesoría fiscal. Especialista en optimización tributaria para PYMES.',
  foto: '/images/demo/contador-perfil.jpg',
  credenciales: [
    'Contador Público Certificado',
    'Cédula Profesional 87654321',
    'Especialización en Auditoría',
    'Miembro de IMCP (Instituto Mexicano de Contadores Públicos)',
  ],
} as const;

export const CONTACTO_CONTADOR = {
  whatsapp: '+525551234567',
  email: 'contacto@contadorcpa.com',
  telefono: '+52 664 123 4567',
  direccion: 'Zona Centro, Tijuana, B.C.',
  direccion_completa: 'Blvd Diaz Ordaz #456, Tijuana, Baja California, 22000, México',
  gps: { lat: 32.5149, lng: -117.0382 },
  horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábado: 9:00 AM - 1:00 PM',
  redes: {
    facebook: 'https://facebook.com/contadorcpa',
    linkedin: 'https://linkedin.com/in/lauramorales',
  },
} as const;

export const SERVICIOS_CONTADOR = [
  {
    id: 'contabilidad',
    nombre: 'Contabilidad Empresarial',
    descripcion: 'Registro y organización completa de transacciones financieras',
    icono: '📊',
    beneficios: [
      'Estados financieros mensuales',
      'Conciliaciones bancarias',
      'Control de inventarios',
      'Análisis financiero detallado',
    ],
  },
  {
    id: 'impuestos',
    nombre: 'Asesoría Fiscal',
    descripcion: 'Optimización tributaria y cumplimiento normativo',
    icono: '🏛️',
    beneficios: [
      'Cálculo de impuestos',
      'Declaraciones mensuales',
      'Auditoría fiscal',
      'Defensa ante autoridades',
    ],
  },
  {
    id: 'nomina',
    nombre: 'Nómina y RRHH',
    descripcion: 'Gestión integral de recursos humanos y nómina',
    icono: '👥',
    beneficios: [
      'Cálculo y emisión de nómina',
      'Cumplimiento legal IMSS/SAT',
      'Reportes de seguridad social',
      'Consultoría laboral',
    ],
  },
  {
    id: 'auditoria',
    nombre: 'Auditoría y Revisión',
    descripcion: 'Evaluación independiente de la situación financiera',
    icono: '🔍',
    beneficios: [
      'Auditoría externa independiente',
      'Revisión de procesos contables',
      'Dictamen contable',
      'Mejora de controles internos',
    ],
  },
  {
    id: 'constitucion',
    nombre: 'Constitución de Empresas',
    descripcion: 'Trámites legales y fiscales para formar tu negocio',
    icono: '📋',
    beneficios: [
      'Asesoría en estructura legal',
      'Trámites ante notario',
      'RFC y cédulas profesionales',
      'Orientación fiscal inicial',
    ],
  },
  {
    id: 'consultoria',
    nombre: 'Consultoría Financiera',
    descripcion: 'Asesoría estratégica para el crecimiento de tu empresa',
    icono: '💡',
    beneficios: [
      'Análisis de rentabilidad',
      'Proyecciones financieras',
      'Planes de crecimiento',
      'Acceso a crédito bancario',
    ],
  },
] as const;

export const TESTIMONIOS_CONTADOR = [
  {
    id: 1,
    autor: 'Javier López',
    empresa: 'López & Asociados, Consultoría',
    foto: '/images/demo/testimonio-contador-1.jpg',
    mensaje: 'Laura nos ha ayudado a reducir nuestros impuestos en más de 30% sin perder transparencia. Su asesoría fiscal es invaluable.',
    rating: 5,
  },
  {
    id: 2,
    autor: 'María González',
    empresa: 'Comercializadora González S.A.',
    foto: '/images/demo/testimonio-contador-2.jpg',
    mensaje: 'La mejor decisión fue contratar a Laura. Ahora entendemos perfectamente nuestras finanzas y tenemos proyecciones claras.',
    rating: 5,
  },
  {
    id: 3,
    autor: 'Carlos Ramírez',
    empresa: 'Imprenta Ramírez',
    foto: '/images/demo/testimonio-contador-3.jpg',
    mensaje: 'Profesional, puntual y confiable. Ha sido nuestro contador por 7 años y no hay razón para cambiar.',
    rating: 5,
  },
] as const;

export const FAQ_CONTADOR = [
  {
    id: 1,
    pregunta: '¿Cuál es el costo de los servicios de contabilidad?',
    respuesta: 'El costo depende del tamaño y complejidad de tu empresa. Ofrecemos consulta gratuita para evaluar tu situación y dar una cotización personalizada sin compromiso.',
  },
  {
    id: 2,
    pregunta: '¿Qué documentación necesito para la consulta inicial?',
    respuesta: 'Básicamente tu RFC, acta constitutiva y últimos estados financieros. No es necesario que tengas todo perfecto; nos encargamos de organizarlo.',
  },
  {
    id: 3,
    pregunta: '¿Pueden asesorar a empresas recién constituidas?',
    respuesta: 'Sí, es nuestro fuerte. Ayudamos a emprendedores desde la constitución legal hasta la implementación de sistemas contables profesionales.',
  },
  {
    id: 4,
    pregunta: '¿Realiza auditorías de empresas medianas?',
    respuesta: 'Definitivamente. Trabajamos con empresas desde 5 hasta 500 empleados. Nuestras auditorías cumplen estándares internacionales.',
  },
  {
    id: 5,
    pregunta: '¿Qué pasa si tengo retrasos en declaraciones?',
    respuesta: 'No hay problema. Podemos ayudarte a ponerte al corriente con las autoridades fiscales, minimizando multas y sanciones.',
  },
  {
    id: 6,
    pregunta: '¿Ofrecen capacitación al equipo de la empresa?',
    respuesta: 'Sí, incluimos sesiones de capacitación en sistemas contables, interpretación de estados financieros y cumplimiento fiscal.',
  },
] as const;

export const ESTADISTICAS_CONTADOR = [
  { numero: '150+', etiqueta: 'Clientes Satisfechos' },
  { numero: '15', etiqueta: 'Años de Experiencia' },
  { numero: '98%', etiqueta: 'Tasa de Retención' },
  { numero: '24/7', etiqueta: 'Disponibilidad' },
] as const;
