# Activos de Marca - BAJA WEB CO.

## Estructura de Directorios

```
public/images/brand/
├── logo/
│   ├── logo-primary.png              ✅ Logotipo principal (versión transparente)
│   ├── logo-dark.png                 ⏳ TODO: Variante para fondos claros
│   ├── logo-light.png                ⏳ TODO: Variante para fondos oscuros
│   ├── logo-mono.png                 ⏳ TODO: Versión monocromática
│   ├── logo-square.png               ⏳ TODO: Versión cuadrada (favicon)
│   └── README.md                     📋 Este archivo
│
├── social/
│   ├── facebook-cover.png            ⏳ TODO: Imagen de portada (recuperar de Facebook)
│   ├── facebook-profile.png          ⏳ TODO: Imagen de perfil (recuperar de Facebook)
│   └── README.md                     📋 Documentación de redes sociales
│
└── graphics/
    ├── wave-pattern.svg              ⏳ TODO: Elemento ondulante decorativo
    ├── map-pattern.svg               ⏳ TODO: Mapa de Baja California
    └── README.md                     📋 Documentación de gráficos
```

## Inventario de Archivos

### ✅ Archivos Disponibles

| Archivo | Ubicación | Tipo | Descripción | Estado |
|---------|-----------|------|-------------|--------|
| `logo-primary.png` | `public/images/brand/logo/` | PNG | Logotipo oficial BAJA WEB CO. | ✅ Active |

### ⏳ Archivos Pendientes de Crear

| Archivo | Ubicación | Tipo | Descripción | Prioridad |
|---------|-----------|------|-------------|-----------|
| `logo-dark.png` | `public/images/brand/logo/` | PNG | Variante para fondos claros | Alta |
| `logo-light.png` | `public/images/brand/logo/` | PNG | Variante para fondos oscuros | Alta |
| `logo-mono.png` | `public/images/brand/logo/` | PNG | Versión monocromática/blanco y negro | Media |
| `logo-square.png` | `public/images/brand/logo/` | PNG | Versión cuadrada para favicon | Alta |
| `facebook-cover.png` | `public/images/brand/social/` | PNG | Imagen de portada de Facebook | Baja |
| `facebook-profile.png` | `public/images/brand/social/` | PNG | Imagen de perfil de Facebook | Baja |
| `wave-pattern.svg` | `public/images/brand/graphics/` | SVG | Patrón ondulante (elemento decorativo) | Media |
| `map-pattern.svg` | `public/images/brand/graphics/` | SVG | Mapa estilizado de Baja California | Media |

## Especificaciones de Logo

### Logo Primario

- **Archivo:** `logo-primary.png`
- **Formato:** PNG con transparencia
- **Dimensiones:** 400 x 400 px (versión master)
- **Colores:** Azul Marino (#004B87) + Cyan (#00BCD4)
- **Uso Recomendado:** 
  - Encabezado principal del sitio web
  - Hero section con fondo oscuro
  - Footer
  - Elementos de marca corporativa
  - Documentos oficiales

### Variantes Requeridas (TODO)

#### 1. Logo para Fondo Claro (logo-dark.png)
- Variante con contorno más definido
- Colores primarios intensificados
- Uso: Sobre fondos blancos o claros
- Tamaño mínimo: 100 x 100 px

#### 2. Logo para Fondo Oscuro (logo-light.png)
- Versión en blanco o colores claros
- Posible: Blanco sólido o versión en cyan/turquesa
- Uso: Sobre fondos azul marino o fondos muy oscuros
- Tamaño mínimo: 100 x 100 px

#### 3. Logo Monocromático (logo-mono.png)
- Versión en blanco y negro
- Versión en escala de grises
- Uso: Documentos impresos, situaciones de restricción de color
- Tamaño mínimo: 100 x 100 px

#### 4. Logo Cuadrado (logo-square.png)
- Variante cuadrada o iframe del logo circular
- Dimensiones: 256 x 256 px (favicon master)
- Uso: Favicon, perfiles sociales, aplicaciones
- Versión optimizada para pequeños tamaños

## Directrices de Uso

### ✅ Uso Correcto del Logo

- Mantener proporciones originales (1:1)
- Usar versión transparente sobre fondos con contraste
- Respetar espacios mínimos (16px alrededor del logo)
- No cambiar colores oficiales sin aprobación
- Usar variantes apropiadas según contexto
- Mantener claridad y legibilidad en todos los tamaños

### ❌ Uso Incorrecto del Logo

- NO estirar ni distorsionar las proporciones
- NO cambiar los colores oficiales (#004B87 y #00BCD4)
- NO agregar efectos visuales (sombras, brillos, etc.)
- NO colocar sobre fondos con poco contraste
- NO combinar con otros logotipos de forma confusa
- NO simplificar ni rediseñar sin aprobación
- NO eliminar el mapa de Baja California del centro
- NO alterar el texto "BAJA WEB CO." o "BWC"

## Tamaños Mínimos Recomendados

| Contexto | Tamaño Mínimo | Formato |
|----------|---------------|---------|
| Favicon | 32 x 32 px | PNG |
| Logo en encabezado | 80 x 80 px | PNG |
| Logo en footer | 60 x 60 px | PNG |
| Tarjeta de demostración | 40 x 40 px | PNG |
| Documento impreso | 2.5 x 2.5 cm | PDF |
| Redes sociales | 100 x 100 px | PNG |

## Integración en el Proyecto

### HTML

```html
<!-- En el header -->
<img src="/images/brand/logo/logo-primary.png" alt="BAJA WEB CO. Logo" class="logo-header" />

<!-- Como favicon -->
<link rel="icon" type="image/png" href="/images/brand/logo/logo-square.png" />

<!-- En el footer -->
<img src="/images/brand/logo/logo-primary.png" alt="BAJA WEB CO." class="logo-footer" />
```

### CSS

```css
.logo-header {
  width: 80px;
  height: auto;
  margin: 10px 0;
}

.logo-footer {
  width: 60px;
  height: auto;
  opacity: 0.9;
}

/* Ajuste para tema oscuro */
.dark-mode .logo-primary {
  /* Considerar usar logo-light variant cuando esté disponible */
  filter: brightness(1.1);
}
```

### TypeScript/React

```typescript
import brandConfig from '@/config/brand.config';

export const Header = () => {
  return (
    <header>
      <img 
        src={brandConfig.ASSETS.logo.primary} 
        alt={brandConfig.BRAND.name}
        className="logo-header"
      />
    </header>
  );
};
```

## Variantes para Demostraciones

Las demostraciones (García & Asociados, Despacho Legal, Inmobiliaria, etc.) tienen sus propios logotipos y colores corporativos.

**Importante:** No usar el logo de BAJA WEB CO. como elemento principal en las demostraciones. Usar solo para:
- Indicar procedencia en footer
- Disclaimer: "Demostración comercial desarrollada por BAJA WEB CO."
- Navegación de retorno al portafolio principal

## Control de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2026-10-12 | Creación de estructura inicial y logo primario |

## Contacto y Cambios

Para cambios en estos activos, consultar:
- Responsable de marca: [Información pendiente]
- Correo de contacto: [Información pendiente]
- Teléfono: [Información pendiente]

## Referencias

- [Guía de Marca Completa](../../docs/brand-guidelines.md)
- [Configuración de Marca (TypeScript)](../../src/config/brand.config.ts)
- [Paleta de Colores](../../src/config/brand-colors.json)
- [Tipografía](../../src/config/brand-typography.json)
- [Reporte de Auditoría](../../BRAND_AUDIT_REPORT.md)
