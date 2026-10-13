/**
 * Brand Configuration for BAJA WEB CO.
 * 
 * Centralized brand identity, colors, typography, and messaging.
 * This is the single source of truth for all brand elements.
 * 
 * Last Updated: 2026-10-12
 * Status: Active
 */

// ============================================
// BRAND IDENTITY
// ============================================

export const BRAND = {
  // Official business name
  name: 'BAJA WEB CO.',
  
  // Official abbreviation
  abbreviation: 'BWC',
  
  // Brand tagline (confirmed or to be confirmed)
  tagline: 'Soluciones web para el crecimiento de tu negocio',
  
  // Business location
  location: {
    region: 'Baja California',
    country: 'Mexico',
  },
  
  // Brand description
  description: 'Web development agency and portfolio showcase for business solutions',
  
  // Brand mission (to be confirmed)
  mission: 'Proporcionar soluciones web profesionales para empresas locales',
  
  // Brand values (to be confirmed)
  values: [
    'Profesionalismo',
    'Innovación',
    'Excelencia',
    'Dedicación al cliente',
  ],
} as const;

// ============================================
// LOGO CONFIGURATION
// ============================================

export const LOGO = {
  // Primary logo (full horizontal/stacked)
  primary: {
    path: '/images/brand/logo/logo-primary.png',
    format: 'PNG',
    width: 400,
    height: 400,
    alt: 'BAJA WEB CO. Logo',
    useCases: ['header', 'hero', 'footer', 'brand-materials'],
  },
  
  // Alternative logo variants (to be created)
  variants: {
    dark: {
      path: '/images/brand/logo/logo-dark.png',
      format: 'PNG',
      usage: 'Light backgrounds',
      status: 'TODO: Create variant',
    },
    light: {
      path: '/images/brand/logo/logo-light.png',
      format: 'PNG',
      usage: 'Dark backgrounds',
      status: 'TODO: Create variant',
    },
    mono: {
      path: '/images/brand/logo/logo-mono.png',
      format: 'PNG',
      usage: 'Monochrome / restricted color applications',
      status: 'TODO: Create variant',
    },
    square: {
      path: '/images/brand/logo/logo-square.png',
      format: 'PNG',
      usage: 'Favicon, profile pictures, square layouts',
      status: 'TODO: Create variant',
    },
  },
  
  // Clear space and minimum sizes
  spacing: {
    minPadding: 16, // pixels
    minSize: 32, // pixels
  },
  
  // Aspect ratio (circular logo)
  aspectRatio: '1:1',
} as const;

// ============================================
// COLOR PALETTE
// ============================================

export const COLORS = {
  // Primary colors (main brand colors)
  primary: {
    // Azul Marino - Main brand blue
    navy: '#004B87',
    // Cyan/Turquesa - Secondary accent
    cyan: '#00BCD4',
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
    mediumGray: '#E8E8E8',
    darkGray: '#333333',
    charcoal: '#1A1A1A',
  },
  
  // Extended palette (for demostraciones and variations)
  extended: {
    // For Despacho Contable
    accounting: {
      primary: '#0D47A1',
      accent: '#00796B',
    },
    // For other demostraciones
    demo: {
      primary: '#C62828',
      accent: '#F57C00',
    },
  },
  
  // Semantic colors
  semantic: {
    success: '#4CAF50',
    warning: '#FFA500',
    error: '#F44336',
    info: '#2196F3',
  },
} as const;

// Color aliases for easier usage
export const COLOR_MAP = {
  // Primary brand colors
  brandPrimary: COLORS.primary.navy,
  brandSecondary: COLORS.primary.cyan,
  
  // Text
  textPrimary: COLORS.neutral.darkGray,
  textSecondary: COLORS.neutral.mediumGray,
  textOnPrimary: COLORS.neutral.white,
  textOnDark: COLORS.neutral.white,
  
  // Backgrounds
  bgPrimary: COLORS.neutral.white,
  bgSecondary: COLORS.neutral.lightGray,
  bgDark: COLORS.primary.navy,
  
  // Buttons
  buttonPrimary: COLORS.primary.navy,
  buttonSecondary: COLORS.primary.cyan,
  buttonText: COLORS.neutral.white,
  
  // Borders
  borderColor: COLORS.neutral.mediumGray,
  divider: COLORS.neutral.lightGray,
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const TYPOGRAPHY = {
  // Font families
  family: {
    // Primary font for headings and body
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    
    // Secondary font (if needed)
    secondary: 'Poppins, sans-serif',
    
    // System font fallback
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  
  // Font weights
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Typography scale
  scale: {
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '1.2',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '1.3',
      letterSpacing: '-0.3px',
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '1.4',
      letterSpacing: '0px',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '1.4',
    },
    bodyLarge: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '1.5',
    },
    body: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '1.6',
    },
    bodySmall: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '1.5',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '1.4',
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.5',
    },
    nav: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '1.5',
    },
  },
} as const;

// ============================================
// SOCIAL MEDIA & CONTACT
// ============================================

export const SOCIAL_MEDIA = {
  // Facebook (confirmed)
  facebook: {
    url: 'https://www.facebook.com/share/1Dzfsqov99/?mibextid=wwXIfr',
    username: 'baja-web-co', // To be confirmed
    status: 'Active',
  },
  
  // Other social platforms (to be confirmed)
  instagram: {
    url: null, // To be confirmed
    username: null,
    status: 'To be confirmed',
  },
  
  linkedin: {
    url: null, // To be confirmed
    username: null,
    status: 'To be confirmed',
  },
  
  twitter: {
    url: null, // To be confirmed
    username: null,
    status: 'To be confirmed',
  },
} as const;

export const CONTACT = {
  // Official contact information (to be confirmed from Facebook)
  email: null, // To be confirmed
  phone: null, // To be confirmed
  address: null, // To be confirmed
  
  // Website (to be implemented)
  website: {
    url: null, // To be defined
    status: 'Under development',
  },
} as const;

// ============================================
// MESSAGING FRAMEWORK
// ============================================

export const MESSAGING = {
  // Hero message
  heroMessage: 'Soluciones web profesionales para el crecimiento de tu negocio',
  
  // Value propositions (identified from demostraciones)
  valuePropositions: [
    'Asesoría profesional adaptada a tu negocio',
    'Soluciones web modernas y funcionales',
    'Experiencia enfocada en resultados',
    'Atención personalizada al cliente',
  ],
  
  // Target audiences
  targetAudiences: [
    'Despachos contables',
    'Empresas de servicios legales',
    'Agencias inmobiliarias',
    'Negocios de servicios profesionales',
    'Pequeñas y medianas empresas',
  ],
  
  // Key messaging
  keyMessages: {
    primary: 'Transformamos tu visión en soluciones web que generan resultados',
    secondary: 'Servicios web profesionales con enfoque en tu negocio',
    tertiary: 'Desarrollo web especializado para empresas locales',
  },
} as const;

// ============================================
// DEMONSTRATIONS (DEMOSTRACIONES)
// ============================================

export const DEMONSTRATIONS = {
  accounting: {
    name: 'García & Asociados',
    type: 'Despacho Contable',
    description: 'Soluciones contables y fiscales profesionales',
    colors: {
      primary: '#0D47A1',
      accent: '#00796B',
    },
    isDemo: true,
    disclaimer: 'Esta es una demostración comercial desarrollada para el portafolio de BAJA WEB CO.',
  },
  
  legal: {
    name: 'Despacho Jurídico',
    type: 'Servicios Legales',
    description: 'Asesoría legal profesional para empresas',
    colors: {
      primary: '#1565C0',
      accent: '#00838F',
    },
    isDemo: true,
    disclaimer: 'Esta es una demostración comercial desarrollada para el portafolio de BAJA WEB CO.',
  },
  
  realEstate: {
    name: 'Inmobiliaria',
    type: 'Servicios Inmobiliarios',
    description: 'Soluciones inmobiliarias modernas',
    colors: {
      primary: '#C62828',
      accent: '#F57C00',
    },
    isDemo: true,
    disclaimer: 'Esta es una demostración comercial desarrollada para el portafolio de BAJA WEB CO.',
  },
  
  restaurant: {
    name: 'Restaurante',
    type: 'Servicios de Alimentos',
    description: 'Plataforma moderna para restaurantes',
    colors: {
      primary: '#6D4C41',
      accent: '#D84315',
    },
    isDemo: true,
    disclaimer: 'Esta es una demostración comercial desarrollada para el portafolio de BAJA WEB CO.',
  },
} as const;

// ============================================
// ASSETS INVENTORY
// ============================================

export const ASSETS = {
  logo: {
    primary: '/images/brand/logo/logo-primary.png',
    dark: '/images/brand/logo/logo-dark.png', // TODO
    light: '/images/brand/logo/logo-light.png', // TODO
    mono: '/images/brand/logo/logo-mono.png', // TODO
    square: '/images/brand/logo/logo-square.png', // TODO
  },
  
  social: {
    facebookCover: '/images/brand/social/facebook-cover.png', // TODO
    facebookProfile: '/images/brand/social/facebook-profile.png', // TODO
  },
  
  graphics: {
    wavePattern: '/images/brand/graphics/wave-pattern.svg', // TODO
    mapPattern: '/images/brand/graphics/map-pattern.svg', // TODO
  },
  
  demonstrations: {
    accounting: '/images/demo/Despacho-Contable-1-2026.PNG',
    legal: '/images/demo/Despacho-Legal-2026.PNG',
    realEstate: '/images/demo/Inmobiliaria-1-2026.PNG',
  },
} as const;

// ============================================
// THEME CONFIGURATION
// ============================================

export const THEME = {
  light: {
    colors: {
      background: COLOR_MAP.bgPrimary,
      surface: COLOR_MAP.bgSecondary,
      text: COLOR_MAP.textPrimary,
      textSecondary: COLOR_MAP.textSecondary,
      brand: COLOR_MAP.brandPrimary,
      brandAccent: COLOR_MAP.brandSecondary,
      border: COLOR_MAP.borderColor,
    },
    logo: LOGO.primary,
  },
  
  dark: {
    colors: {
      background: COLOR_MAP.bgDark,
      surface: COLORS.primary.navy,
      text: COLOR_MAP.textOnDark,
      textSecondary: COLORS.neutral.mediumGray,
      brand: COLORS.primary.cyan,
      brandAccent: COLORS.primary.cyan,
      border: COLORS.neutral.charcoal,
    },
    logo: LOGO.primary, // Can be updated to light variant
  },
} as const;

// ============================================
// COMPLIANCE & BRAND RULES
// ============================================

export const BRAND_RULES = {
  logo: {
    rules: [
      'No alterar proporciones',
      'No cambiar colores oficiales sin aprobación',
      'Mantener espacios mínimos alrededor del logo',
      'Usar variantes apropiadas según fondo',
      'No agregar efectos visuales',
      'Preservar claridad y legibilidad',
    ],
  },
  
  colors: {
    rules: [
      'Azul Marino (#004B87) es el color primario',
      'Cyan (#00BCD4) es el color de acento',
      'Mantener contraste WCAG AA en textos',
      'Usar colores secundarios solo en demostraciones',
    ],
  },
  
  typography: {
    rules: [
      'Usar Inter/Poppins como familia principal',
      'Mantener jerarquía tipográfica',
      'Responder escalas de tipografía definidas',
      'Usar pesos consistentes por rol',
    ],
  },
  
  demonstrations: {
    rules: [
      'Cada demostración debe tener identidad visual propia',
      'No usar logo de BAJA WEB CO. como elemento principal',
      'Agregar disclaimer: "Demostración comercial de BAJA WEB CO."',
      'Conectar al portafolio principal con navegación clara',
    ],
  },
} as const;

// ============================================
// EXPORT TYPES
// ============================================

export type BrandConfig = typeof BRAND;
export type LogoConfig = typeof LOGO;
export type ColorConfig = typeof COLORS;
export type TypographyConfig = typeof TYPOGRAPHY;
export type ThemeConfig = typeof THEME;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get current theme colors
 * @param isDark - Whether dark mode is enabled
 * @returns Theme color configuration
 */
export const getThemeColors = (isDark: boolean = false) => {
  return isDark ? THEME.dark.colors : THEME.light.colors;
};

/**
 * Get CSS variable string for color
 * @param colorKey - Key from COLOR_MAP
 * @returns CSS variable name (e.g., 'var(--color-brand-primary)')
 */
export const getCSSVariable = (colorKey: keyof typeof COLOR_MAP) => {
  return `var(--color-${colorKey.replace(/([A-Z])/g, '-$1').toLowerCase()})`;
};

/**
 * Check if all required assets are available
 * @returns Object with asset availability status
 */
export const checkAssetAvailability = () => {
  return {
    logoRequiredVariants: {
      primary: true,
      dark: false, // TODO
      light: false, // TODO
      mono: false, // TODO
      square: false, // TODO
    },
    socialAssets: {
      facebookCover: false, // TODO
      facebookProfile: false, // TODO
    },
    graphics: {
      wavePattern: false, // TODO
      mapPattern: false, // TODO
    },
    demostraciones: {
      accounting: true,
      legal: true,
      realEstate: true,
      restaurant: false, // TODO
    },
  };
};

export default {
  BRAND,
  LOGO,
  COLORS,
  COLOR_MAP,
  TYPOGRAPHY,
  SOCIAL_MEDIA,
  CONTACT,
  MESSAGING,
  DEMONSTRATIONS,
  ASSETS,
  THEME,
  BRAND_RULES,
  getThemeColors,
  getCSSVariable,
  checkAssetAvailability,
};
