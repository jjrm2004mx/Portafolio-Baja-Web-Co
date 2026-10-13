# FASE 4: DESPACHO CONTABLE
**Fecha:** 2026-10-12  
**Estado:** 🚀 EN PROGRESO

---

## 📋 Análisis Estratégico - Despacho Contable

### Sector: Servicios Financieros & Asesoría Fiscal
**Objetivo:** Posicionar como despacho moderno, confiable y accesible para PYMES

### Target Audience
- Empresarios PYME (10-100 empleados)
- Freelancers y autónomos
- Startups en crecimiento
- Profesionales independientes

### Propuesta de Valor
✅ Asesoría contable integral  
✅ Optimización fiscal legal  
✅ Cumplimiento normativo  
✅ Consultoría estratégica  
✅ Acceso 24/7 a documentos  

---

## 🎨 Estrategia de Diseño (UI/UX Pro Max)

### Estilo: **Professional Trust-Driven**
- **Paleta Principal:** Navy (#004B87) + Cyan (#00BCD4)
- **Accent:** Green/Emerald para éxito/confianza
- **Tipografía:** Inter (body), Poppins (headings)
- **Tono:** Serio pero accesible, experto pero cercano
- **Iconografía:** Números, gráficos, documentos, escudo (confianza)

### Diferenciador vs Portfolio
- **Portfolio:** Showcase general, intro a 4 demos
- **Contador:** Deep-dive en UNO específico con valor real

---

## 🏗️ Estructura de Secciones

### 1. **Hero Section (Profesional)**
- Headline: "Asesoría Contable Integral para tu Negocio"
- Subheadline: "Optimiza tu fiscalidad, crece sin preocupaciones"
- CTA: "Agendar Consulta Gratuita" + "Ver Servicios"
- Background: Subtle grid pattern + gradient overlay
- Visual: Gráfico simple (chart/documents)

### 2. **Trust Indicators**
- 3 números clave: Años experiencia, clientes, casos
- Copy corta: "Confiado por más de X empresas"
- Icons: Checkmark, shield, chart

### 3. **Services Section**
- 6 servicios principales en cards:
  1. Contabilidad Integral
  2. Asesoría Fiscal
  3. Auditoría Interna
  4. Nómina & RRHH
  5. Consultoría Estratégica
  6. Regularización Fiscal
- Card layout: Icon + title + brief description + "Saber más"
- Hover: Scale + color change

### 4. **Why Choose Us**
- 3-4 beneficios principales
- Icons + strong headline + description
- Examples: "Expertos certificados", "Respuesta en 24h", "Precios competitivos"

### 5. **Process Section**
- 4 pasos visuales:
  1. Diagnóstico Inicial
  2. Plan Personalizado
  3. Implementación
  4. Seguimiento Continuo
- Números grandes + flechas conectivas
- Descripción breve por paso

### 6. **Testimonials (Placeholder)**
- 2-3 testimonios de empresarios
- Avatar placeholder + nombre + empresa + cita
- Rating stars

### 7. **FAQ Section**
- 5-6 preguntas frecuentes
- Accordion component (simple, sin JS extra)
- Temas: Fiscalidad, precios, servicios, onboarding

### 8. **CTA Final**
- "¿Listo para optimizar tu fiscalidad?"
- Button: "Agendar Consulta Gratuita"
- Subtext: "Primera consulta sin costo"

---

## 🧩 Componentes a Crear

```
src/components/contador/
├── HeroSection.tsx
├── TrustSection.tsx
├── ServicesGrid.tsx
├── ServiceCard.tsx
├── WhyChooseUs.tsx
├── ProcessSection.tsx
├── ProcessStep.tsx
├── FaqSection.tsx
├── FaqItem.tsx
└── TestimonialCard.tsx

src/demos/contador/
└── ContadorPage.tsx (MEJORADO)
```

---

## 🎨 Color Strategy (Contador-specific)

**Primary Navy:** Trust, professionalism  
**Accent Cyan:** Modernity, accessibility  
**Success Green:** Positive results (#4caf50)  
**Warning Amber:** Alerts/caution (#ff9800)  
**Neutral Grays:** Data backgrounds, clean space  

---

## 📱 Responsividad

| Device | Layout |
|--------|--------|
| Mobile | 1 col, stacked |
| Tablet | 2 cols para services |
| Desktop | 3 cols para services, full width |

---

## ✨ Animaciones

- Hero fade-in staggered
- Services cards slide-in on scroll
- Process steps flow animation (left→right)
- FAQ accordion smooth expand
- Hover: Scale, shadow, color transitions

---

## ✅ Checklist

- [ ] Crear componentes contador específicos
- [ ] Implementar HeroSection profesional
- [ ] Componentes de servicios (card + grid)
- [ ] Sección "Why Choose Us"
- [ ] Process visual flow
- [ ] FAQ accordion básico
- [ ] Testimonials placeholder
- [ ] CTA final
- [ ] Build & validar
- [ ] Responsividad en todos los breakpoints
