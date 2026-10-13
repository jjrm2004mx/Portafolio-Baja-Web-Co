# 📖 Guía de Ejecución - Landing Page Abogado

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18+
- npm o pnpm
- Visual Studio Code

### Instalación y Ejecución Inicial

```bash
# 1. Navegar al directorio del proyecto
cd jesus-BajaWebCo-architect-portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# La página estará disponible en: http://localhost:5173/demos/abogado
```

### Compilación para Producción

```bash
# Generar build optimizado
npm run build

# Previsualizar build
npm run preview
```

---

## 📂 Estructura del Proyecto

### Archivos Principales del Abogado

```
src/
├── config/
│   └── abogado.config.ts          ← CONFIGURACIÓN CENTRALIZADA (modificar aquí)
├── components/abogado/
│   ├── HeroSection.tsx            ← Sección hero con CTA principal
│   ├── ServicesGrid.tsx           ← Grilla de servicios legales
│   ├── BenefitsSection.tsx        ← Por qué elegirnos
│   ├── ProcessSection.tsx         ← Proceso de trabajo (6 pasos)
│   ├── TestimonialSection.tsx     ← Testimonios
│   ├── FaqSection.tsx             ← Preguntas frecuentes
│   └── CtaSection.tsx             ← Sección final de contacto
└── demos/abogado/
    └── AbogadoPage.tsx            ← Página principal (union de componentes)

design-system/
└── abogado/
    └── MASTER.md                  ← Sistema de diseño completo

docs/
└── FASE-ABOGADO-LANDING.md        ← Este archivo
```

---

## ✏️ Personalización para tu Cliente

### Paso 1: Editar `abogado.config.ts`

Este es el **archivo principal** donde cambias TODOS los datos sin tocar código React.

**Ubicación:** `src/config/abogado.config.ts`

#### Variables a Modificar

| Variable | Ubicación | Ejemplo |
|----------|-----------|---------|
| **nombre** | `ABOGADO.nombre` | `'Lic. Juan Pérez'` |
| **especialidad** | `ABOGADO.especialidad` | `'Derecho Penal'` |
| **años_experiencia** | `ABOGADO.años_experiencia` | `25` |
| **bio** | `ABOGADO.bio` | `'Graduado de UABC...'` |
| **whatsapp** | `CONTACTO.whatsapp` | `'+525551234567'` |
| **email** | `CONTACTO.email` | `'contacto@abogado.com'` |
| **telefono** | `CONTACTO.telefono` | `'+52 664 123 4567'` |
| **direccion** | `CONTACTO.direccion` | `'Centro, Tijuana'` |

#### Ejemplo Completo de Cambios

```typescript
// ANTES (demo)
export const ABOGADO = {
  nombre: 'Lic. Roberto Mendoza García',
  especialidad: 'Derecho Mercantil y Laboral',
  años_experiencia: 18,
  // ...
}

// DESPUÉS (cliente real)
export const ABOGADO = {
  nombre: 'Lic. Ana María Rodríguez González',
  especialidad: 'Derecho Familia y Matrimonial',
  años_experiencia: 22,
  // ...
}
```

---

## 🔧 Modificaciones Comunes

### Agregar Servicios Adicionales

En `abogado.config.ts`, dentro del array `SERVICIOS`:

```typescript
export const SERVICIOS = [
  // ... servicios existentes ...
  {
    id: 'ambiental',
    nombre: 'Derecho Ambiental',
    descripcion: 'Asesoría en permisos ambientales, cumplimiento normativo',
    icono: '🌱',
    beneficios: [
      'Trámites ambientales sin complicaciones',
      'Cumplimiento de regulaciones',
      'Defensa ante autoridades ambientales',
    ],
  },
]
```

### Cambiar Colores

En `abogado.config.ts`:

```typescript
export const COLORES = {
  primary: '#1E3A8A',      // Azul más oscuro
  secondary: '#0891B2',    // Cyan
  accent: '#F59E0B',       // Ámbar
  // ... más colores
}
```

**Importante:** Actualizar también `MASTER.md` (sistema de diseño) si cambias paleta.

### Editar Testimonios

En `abogado.config.ts`:

```typescript
export const TESTIMONIOS = [
  {
    nombre: 'Cliente Real 1',
    empresa: 'Empresa XYZ',
    foto: '/images/demo/cliente-real.jpg', // Ruta a foto real
    quote: 'Testimonio verificable y con consentimiento...',
    rating: 5,
    nota: '',  // Dejar vacío si es real (sin "EJEMPLO COMERCIAL")
  },
]
```

---

## 🖼️ Imágenes Necesarias

### Ubicación de Imágenes

```
public/images/demo/
├── abogado-perfil.jpg          ← Foto profesional del abogado
├── abogado-oficina.jpg         ← Foto de oficina/despacho
├── cliente-1.jpg               ← Foto de cliente para testimonial
├── cliente-2.jpg
├── cliente-3.jpg
└── abogado-og.jpg              ← Imagen para redes sociales (1200x630)
```

### Especificaciones de Imágenes

| Imagen | Tamaño Recomendado | Formato | Compresión |
|--------|-------------------|---------|-----------|
| **abogado-perfil** | 400x400px | JPG | 70-80% |
| **abogado-oficina** | 1200x600px | JPG | 70-80% |
| **testimoniales** | 300x300px | JPG | 70-80% |
| **og-image** | 1200x630px | JPG | 80-90% |

**Herramientas de compresión recomendadas:**
- TinyPNG (https://tinypng.com)
- ImageOptim (Mac)
- FileZilla o similar (para optimización)

---

## 🔗 Actualizar Enlaces

### WhatsApp

El formato automático se genera a partir de `CONTACTO.whatsapp`:

```typescript
// En config/abogado.config.ts
whatsapp: '+525551234567'  // Formato: +52 (México) + código área + número
```

**Formato correcto:**
- México: `+52` + código área (sin 0) + número
- Ej: Tijuana (664) → `+525551234567` (sin el 0 del 664)

### Email

```typescript
email: 'contacto@ejemplo-abogado.com'
```

### Redes Sociales

En `abogado.config.ts`:

```typescript
redes: {
  facebook: 'https://facebook.com/nombre-usuario',
  linkedin: 'https://linkedin.com/in/nombre-usuario',
  instagram: 'https://instagram.com/nombre-usuario',
}
```

---

## 📱 Responsive Design

La página está optimizada para:

- **Mobile:** < 640px (stacked vertical)
- **Tablet:** 640px - 1024px (2 columnas)
- **Desktop:** > 1024px (3+ columnas)

**Testear en navegador:**

```bash
# En Chrome DevTools: Ctrl+Shift+J
# 1. Click en Device Toolbar (icono móvil)
# 2. Seleccionar diferentes dispositivos (iPhone, iPad, etc.)
# 3. Verificar que todo sea legible y clickeable
```

---

## 🧪 Validación Pre-Launch

### Checklist Básico

- [ ] Todos los datos personalizados en `abogado.config.ts`
- [ ] Imágenes reales subidas a `public/images/demo/`
- [ ] WhatsApp funciona correctamente (probar click)
- [ ] Teléfono clickeable (`tel:` link)
- [ ] Email accesible
- [ ] Testimonios actualizados con clientes reales
- [ ] Proceso de 6 pasos refleja tu flujo real
- [ ] FAQs responden preguntas comunes del sector

### Testeo en Dispositivos Reales

```bash
# 1. Obtener IP local de la máquina
ipconfig getifaddr en0  (Mac)
ipconfig (Windows)

# 2. Acceder desde teléfono (mismo WiFi)
http://[TU_IP]:5173/demos/abogado

# 3. Verificar:
#    - Botones son clickeables
#    - Formularios funcionan
#    - Imágenes cargan correctamente
#    - Textos son legibles
#    - Videos (si aplican) funcionan
```

---

## 🚀 Despliegue en Producción

### Opciones de Hosting

#### 1. **Netlify** (Recomendado - Gratis)

```bash
# 1. Compilar
npm run build

# 2. Conectar repo a Netlify
# https://app.netlify.com/

# 3. Configurar build
Build command: npm run build
Publish directory: dist

# 4. Deployment automático en push
```

#### 2. **Vercel**

```bash
# 1. Instalar CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Seguir instrucciones interactivas
```

#### 3. **Servidor Propio**

```bash
# 1. Compilar
npm run build

# 2. Copiar contenido de `dist/` a servidor
# 3. Configurar servidor web (Apache/Nginx)
```

---

## 🔐 Seguridad & Privacidad

### Variables Sensibles

**NUNCA hardcodear en el código:**
- Contraseñas
- API Keys
- Tokens

**Usar variables de entorno:**

Crear `.env.local`:
```env
VITE_WHATSAPP_NUMBER=+525551234567
VITE_API_KEY=tu-api-key-aqui
```

Usar en código:
```typescript
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER
```

### GDPR & Privacidad

- [ ] Privacy Policy actualizada
- [ ] Consentimiento para datos personales (si captura)
- [ ] No guardar datos sin permiso
- [ ] Link a política de privacidad en footer

---

## 📞 Soporte

### Problemas Comunes

#### "Página en blanco después de compilar"

```bash
# 1. Limpiar cache
rm -rf node_modules .next dist
npm install
npm run build

# 2. Verificar imports en AbogadoPage.tsx
# ¿Están todas las rutas correctas?
```

#### "Estilos Tailwind no se aplican"

```bash
# Verificar tailwind.config.ts incluya src/
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // ...
}
```

#### "WhatsApp link no funciona en móvil"

```
Verificar:
- Formato: +525551234567 (sin espacios, sin guiones)
- Probar directamente: https://wa.me/525551234567
```

---

## 📊 Analytics & Conversión

### Medir Resultados

1. **Google Analytics**
   ```html
   <!-- Agregar en <head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   ```

2. **Pixel de Conversión**
   - Cada CTA button registra conversión
   - Análisis de hot spots

3. **Formularios**
   - Usar servicio como Formspree, Basin, etc.

---

## ✅ Entregables Finales

Antes de dar por terminado el proyecto, verificar:

1. ✅ `abogado.config.ts` personalizado
2. ✅ Imágenes optimizadas en `public/images/demo/`
3. ✅ Sistema de diseño actualizado en `design-system/abogado/MASTER.md`
4. ✅ Componentes testeados en móvil y desktop
5. ✅ Documentación de variables guardada
6. ✅ Deploy exitoso en producción
7. ✅ URLs funcionales (WhatsApp, email, teléfono)

---

## 📅 Próximos Pasos

- [ ] Recolectar testimonios verificables
- [ ] Crear contenido de blog sobre casos legales (SEO)
- [ ] Implementar chatbot de IA para consultas iniciales
- [ ] Integrar calendario de agendamiento (Calendly)
- [ ] A/B Testing de CTAs y colores

---

**Última actualización:** 2026-10-12  
**Responsable:** Baja Web Co.  
**Versión:** 1.0.0
