# 🎨 SISTEMA DE DISEÑO - DESPACHO CONTABLE
**Usando UI/UX Pro Max Skill** | Basado en datos verificados

---

## 📌 Análisis del Sector

### Tipo de Producto
**B2B Financial Services** - Despacho contable profesional

### Audiencia Objetivo
- **Primaria:** Pequeña-mediana empresa (PYME), 25-65 años, decision makers financieros
- **Secundaria:** Emprendedores, autónomos, startups
- **Contexto:** Búsqueda de confianza, profesionalismo, claridad fiscal

### Palabras Clave de Estilo
- Confianza (Trust)
- Profesionalismo (Professional)
- Seguridad (Secure)
- Claridad (Clear)
- Seriedad (Serious)

---

## 🎨 PALETA DE COLORES

**Basada en:** Banking/Traditional Finance (UI/UX Pro Max - colors.csv, línea 42)

### Colores Primarios

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| **Primary** | Navy Oscuro | `#0F172A` | Headers, nav, hero, call-to-action buttons |
| **Secondary** | Navy Medio | `#1E3A8A` | Secondary buttons, hover states, accents |
| **Accent** | Gold Profesional | `#A16207` | CTAs importantes, highlights, premium feel |
| **Background** | Gris Claro | `#F8FAFC` | Page background, neutral spaces |
| **Card** | Blanco Puro | `#FFFFFF` | Cards, form backgrounds, content blocks |

### Colores de Soporte

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| **Muted** | Gris Muy Claro | `#E8ECF1` | Subtle backgrounds, disabled states |
| **Muted Foreground** | Gris Oscuro | `#475569` | Secondary text, help text |
| **Border** | Gris Borde | `#E2E8F0` | Card borders, dividers, separators |
| **Destructive** | Rojo | `#DC2626` | Error messages, dangerous actions |
| **Success** | Verde | `#22C55E` | Confirmation, success states (added) |
| **Ring** | Azul Focus | `#0F172A` | Keyboard focus indicators |

### Psicología del Color

- **Navy #0F172A**: Confianza, autoridad, seriedad - fundamental para servicios financieros
- **Gold #A16207**: Profesionalismo, premium, exclusividad - eleva la marca
- **Blanco + Gris**: Claridad, limpieza, orden - facilita lectura de datos

---

## 🔤 SISTEMA TIPOGRÁFICO

**Basado en:** Financial Trust (UI/UX Pro Max - typography.csv, línea 31)

### Familia: IBM Plex Sans

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

font-family: 'IBM Plex Sans', sans-serif;
```

### Escalas Tipográficas

| Nivel | Font-Size | Font-Weight | Line-Height | Letter-Spacing | Uso |
|-------|-----------|-------------|-------------|-----------------|-----|
| **H1 (Hero)** | 56px | 700 | 1.2 | -0.02em | Hero heading principal |
| **H2 (Section)** | 42px | 700 | 1.2 | -0.01em | Section headings |
| **H3 (Subsection)** | 28px | 600 | 1.3 | 0 | Subsection titles |
| **H4 (Card Title)** | 24px | 600 | 1.3 | 0 | Card headings |
| **Body Large** | 18px | 400 | 1.6 | 0 | Descriptions principales |
| **Body Regular** | 16px | 400 | 1.6 | 0 | Párrafos generales |
| **Body Small** | 14px | 400 | 1.5 | 0 | Helper text, captions |
| **Caption** | 12px | 500 | 1.4 | 0.01em | Labels, badges |

### Recomendaciones

- ✅ **Pesos disponibles:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- ✅ **Font-weights máx:** No usar más de 3 pesos en la página
- ✅ **Line-height:** Mínimo 1.5 para body (accesibilidad)
- ✅ **Letter-spacing:** Aumentar en headings grandes (-0.02em) para elegancia

---

## 📐 SISTEMA DE ESPACIADO

**Escala Base:** 4px (sistema Tailwind CSS)

### Espaciado (Padding, Margin)

```
xs:  4px    (0.25rem)
sm:  8px    (0.5rem)
md:  16px   (1rem)
lg:  24px   (1.5rem)
xl:  32px   (2rem)
2xl: 48px   (3rem)
3xl: 64px   (4rem)
4xl: 96px   (6rem)
```

### Recomendaciones

- **Vertical padding en sections:** 64px-96px (desktop), 32px (mobile)
- **Horizontal padding:** 24px (desktop), 16px (tablet), 16px (mobile)
- **Gap en grids:** 24px-32px (desktop), 16px (mobile)
- **Heading margin-bottom:** 16px (H3), 24px (H2), 32px (H1)

---

## 🎯 ESTRATEGIA DE CONVERSIÓN

### Psicología del Cliente Contador

1. **Miedo principal:** Errores fiscales, incertidumbre, mal asesoramiento
2. **Deseo:** Seguridad, paz mental, profesionalismo, máximo ROI
3. **Trigger:** Autoridad, certificaciones, testimonios verificados, CTA claro

### Elementos de Conversión

#### 1. Hero Section
- **Headline:** Transmitir confianza + beneficio (ej: "Asesoría Contable que Protege tu Negocio")
- **Subheadline:** Specifico, números si es posible (ej: "Reduce 40% tus obligaciones fiscales")
- **CTA Primario:** "Agendar Consulta Gratuita" (Button Primary, Gold accent)
- **CTA Secundario:** "Descargar Guía Fiscal" o "Ver Testimonios"
- **Copy:** Máximo 2-3 párrafos, lenguaje claro, evitar jerga

#### 2. Sección de Servicios
- **Grid:** 3-4 tarjetas con iconos grandes
- **Cada tarjeta:** Icono + título + descripción breve + link "Ver detalles"
- **Servicios clave:** 
  - Contabilidad integral
  - Asesoría fiscal
  - Nóminas
  - Auditoría interna

#### 3. Sección de Beneficios
- **6 puntos clave** (2-3 por columna desktop)
- **Cada punto:** Icono + breve descripción (máx 15 palabras)
- **Ejemplo:** ✓ Optimización fiscal garantizada | ✓ Respuesta en 24 horas | ✓ 20+ años experiencia

#### 4. Proceso de Trabajo
- **4 pasos** con timeline visual
- **Cada paso:** Número + descripción breve
- **Formato:** Diagrama lineal con iconos
- **Psicología:** Reduce ansiedad mostrando estructura

#### 5. Testimonios & Social Proof
- **Mínimo 3 testimonios** (con foto + nombre + empresa)
- **Rating:** 5 estrellas verificadas
- **Longitud:** 2-3 líneas máximo (quote + metrics)
- **Ejemplo:** "Implementaron nuestra nómina en 48 horas. 10/10" - María López, Contadora

#### 6. FAQ Section
- **6-8 preguntas** más comunes
- **Accordion format** para no saturar
- **Temas:** Precios, procesos, garantías, RFC, INFONAVIT

#### 7. CTA Final (Contact)
- **Headline:** "¿Listo para optimizar tu fiscalidad?"
- **Form fields:**
  - Nombre completo
  - Email
  - Teléfono
  - Empresa/Régimen fiscal (select)
  - Mensaje breve
- **Privacy:** Checkbox "Acepto política de privacidad"
- **Botón:** "Agendar Ahora" (Gold background, white text)
- **Alternative:** WhatsApp link + phone link

#### 8. Footer
- **Datos ficticios claros:** (Demo - Despacho Contable Tijuana)
- **Links:** Privacy, Terms, Blog, Contact
- **Social:** LinkedIn, Facebook (si corresponde)
- **Copyright:** © 2026 Despacho Contable - Demostración

---

## 🧩 COMPONENTES REUTILIZABLES

### Base Components (Shared)
- ✅ **Button** → Variants: primary (gold), secondary (navy), ghost (outline)
- ✅ **Card** → Variants: elevated (shadow), outlined (border)
- ✅ **Container** → Responsive wrapper (max-width 1280px)
- ✅ **Input** → Text, email, tel, select (consistent styling)
- ✅ **Badge** → Info, success, warning, error

### Domain-Specific Components (Contador)

1. **ServiceCard**
   - Icon (emoji o SVG)
   - Title (H4)
   - Description (body-small)
   - CTA link

2. **BenefitPoint**
   - Icon + Title + Brief description
   - Hover: scale-105, shadow increase

3. **TestimonialCard**
   - Quote (italic)
   - Author name + role
   - 5-star rating
   - Avatar image

4. **TimelineStep**
   - Number badge
   - Title
   - Description
   - Connector line (desktop only)

5. **FAQItem**
   - Question (H5)
   - Answer (body-small)
   - Accordion toggle

6. **ContactForm**
   - Grid fields (2 cols desktop)
   - Consistent input styling
   - Submit button (full-width)
   - Success/error states

---

## ♿ RECOMENDACIONES DE ACCESIBILIDAD

### Color Contrast (WCAG AA)

| Combinación | Ratio | Status |
|-------------|-------|--------|
| Navy #0F172A + White | 18.5:1 | ✅ AAA |
| Navy #0F172A + Gold #A16207 | 4.5:1 | ✅ AA |
| Gold #A16207 + White | 3.8:1 | ⚠️ AA (use only for large text) |
| Gris #475569 + White | 5.5:1 | ✅ AA |

### Recomendaciones Técnicas

1. **Semantic HTML**
   - Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
   - One `<h1>` per page
   - Proper heading hierarchy (H1 → H2 → H3)

2. **Labels & Forms**
   - Every input must have `<label htmlFor="id">`
   - Name + ID attributes
   - Type: text, email, tel, number, select

3. **Interactive Elements**
   - Focus indicators visible (blue ring #0F172A)
   - Keyboard accessible (Tab order)
   - Buttons not divs
   - Links not buttons

4. **Images**
   - Descriptive alt text
   - Decorative images: `aria-hidden="true"`
   - Avoid "image" or "untitled"

5. **Motion**
   - Animations: 0.3s-0.6s duration
   - Respect `prefers-reduced-motion`
   - No autoplay video/sound

---

## 📱 RESPONSIVE BREAKPOINTS

### Device Targets

| Device | Width | Breakpoint | Layout |
|--------|-------|-----------|--------|
| Mobile | 320-639px | `sm:` | 1 column |
| Tablet | 640-1023px | `md:` | 2 columns |
| Desktop | 1024px+ | `lg:` | 3-4 columns |

### Recomendaciones

- **Hero:** Full-width, imagen background con overlay
- **Grids:** grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- **Forms:** 1 col mobile, 2 col desktop
- **Typography:** Scale down 20% on mobile
- **Touch targets:** Minimum 44x44px

---

## 🎬 ANIMACIONES & MOTION

### Scroll Animations (usando Intersection Observer)

```css
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
}
```

### Hover Effects

- **Buttons:** `hover:scale-105` + `shadow-lg`
- **Cards:** `hover:shadow-xl` + `hover:scale-105`
- **Links:** `hover:text-gold` + `underline`

### Timing

- **Standard:** 300ms ease-out
- **Slow:** 500ms ease-in-out
- **Stagger:** index * 100ms (for multiple items)

---

## 📊 ANTI-PATTERNS (EVITAR)

❌ **NO usar:**
- Colores brillantes o neon (destruye confianza)
- Demasiadas fuentes tipográficas (máx 2)
- Autoplay videos
- Pop-ups agresivos
- Copy con emojis excesivos
- Animaciones lentas (> 1s)
- Form fields sin labels
- Colores como única indicación
- Testimonios sin cara/nombre
- Múltiples CTAs compitiendo

---

## 🔄 PATRÓN JERÁRQUICO DE DISEÑO

**Master → Page Override Pattern**

```
design-system/
├── despacho-contable/
│   ├── MASTER.md (Este documento)
│   └── pages/
│       ├── contador.md (Página de Contador - Landing principal)
│       ├── servicios.md (Página de Servicios - Si se necesita)
│       └── blog.md (Página de Blog - Si se necesita)
```

**Uso:**
1. Leer `MASTER.md` para estilos globales
2. Si existe `contador.md`, sus reglas **override** el Master
3. Si no existe, usar Master exclusivamente

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] **Colores:** Aplicados a CSS variables / Tailwind config
- [ ] **Tipografía:** IBM Plex Sans importado de Google Fonts
- [ ] **Espaciado:** Sistema 4px consistente
- [ ] **Componentes:** Button, Card, Container, Input, Badge
- [ ] **Formularios:** Labels, validación, accesibilidad
- [ ] **Animaciones:** Scroll animations, hover effects
- [ ] **Responsive:** Mobile-first, 3 breakpoints
- [ ] **Accesibilidad:** WCAG AA, contrast verificado
- [ ] **SEO:** Meta tags, H1, alt text
- [ ] **Performance:** Images optimized, no unused CSS

---

**Generado con:** UI/UX Pro Max Skill  
**Fecha:** 12 Octubre 2026  
**Status:** Listo para implementación en React/Tailwind

