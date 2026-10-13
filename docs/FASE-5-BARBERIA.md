# FASE 5: BARBERÍA
**Fecha:** 2026-10-12  
**Estado:** 🚀 EN PROGRESO

---

## 📋 Análisis Estratégico - Barbería

### Sector: Servicios Personales & Lifestyle
**Objetivo:** Posicionar como barbería moderna, trendy y de confianza para el grooming masculino

### Target Audience
- Hombres 18-55 años (profesionales, students, entrepreneurs)
- Clientes premium que valoran calidad
- Early adopters de tendencias
- Personas que buscan experiencia + servicio

### Propuesta de Valor
✅ Cortes de tendencia internacional  
✅ Afeitados tradicionales Premium  
✅ Tratamientos barba y cabello  
✅ Ambiente moderno y relajante  
✅ Barberos expertos certificados  
✅ Reserva online fácil  

---

## 🎨 Estrategia de Diseño (UI/UX Pro Max)

### Estilo: **Modern Lifestyle / Luxury Grooming**
- **Paleta:** Navy (#004B87) + Copper/Bronze accent + Charcoal
- **Tipografía:** Inter (body), Poppins (headings, bold)
- **Tono:** Moderno, relajado, Premium, accesible
- **Iconografía:** Tijeras, máquina, navaja, barbero silhouette
- **Atmósfera:** Lujo accesible, maestría, confianza

### Diferenciador vs Contador
- **Contador:** Profesional, confianza, números
- **Barbería:** Lifestyle, visual, experiencia sensorial

---

## 🏗️ Estructura de Secciones

### 1. **Hero Section (Premium Lifestyle)**
- Background: Video/imagen barbero trabajando (placeholder: dark image)
- Overlay: Gradient Dark Navy
- Headline: "Barber & Grooming Experience"
- Subheadline: "Maestría en cada corte, confianza en cada afeitada"
- CTA: "Reservar Cita" + "Ver Servicios"
- Badge: "Premium Barbershop"

### 2. **Services Grid (6-8 servicios)**
- Corte Clásico
- Corte Fade/Undercut
- Afeitado Tradicional
- Tratamiento Barba
- Tinte Profesional
- Tratamiento Capilar Premium
- Pack Premium (corte + afeitada + tratamiento)
- Gifts Cards

### 3. **Portfolio/Gallery (Visual Showcase)**
- Grid de 6-8 fotos de trabajos realizados
- Before/After slider (optional)
- Hover effect: enlarge + overlay con servicios

### 4. **Meet the Team**
- 3-4 barberos con foto + nombre + especialidades
- Cards con redes sociales
- Años de experiencia

### 5. **Why Choose Us / Diferenciadores**
- Premium experience
- Expert craftsmen
- Modern facilities
- Best products
- Community first

### 6. **Booking Section**
- Simple form: Nombre, teléfono, servicio, fecha/hora
- Link a sistema externo (Calendly/Acuity)
- Copy: "Reserva en segundos"

### 7. **Testimonials**
- 3-4 testimonios de clientes (con foto, nombre, servicio)
- Rating stars
- Short quotes

### 8. **Ubicación & Contacto**
- Mapa embebido (simple)
- Horarios
- Dirección
- Teléfono + WhatsApp
- Redes sociales

### 9. **CTA Final**
- "Únete a nuestra comunidad de barbería"
- Newsletter signup (opcional)
- Social links

---

## 🧩 Componentes a Crear

```
src/components/barberia/
├── HeroSection.tsx
├── ServicesGrid.tsx
├── ServiceCard.tsx
├── GallerySection.tsx
├── GalleryItem.tsx
├── TeamSection.tsx
├── TeamMember.tsx
├── WhyChooseUs.tsx
├── BookingCta.tsx
├── TestimonialCard.tsx
├── TestimonialSection.tsx
├── LocationSection.tsx
└── FinalCta.tsx

src/demos/barberia/
└── BarberyPage.tsx (MEJORADO)
```

---

## 🎨 Color Strategy (Barbería-specific)

| Color | Hex | Uso |
|-------|-----|-----|
| Navy | #004B87 | Principal, confianza |
| Copper | #B87333 | Accent, lujo, calidez |
| Charcoal | #36454F | Dark backgrounds |
| White | #FFFFFF | Clean, premium |
| Warm Gray | #4A4A4A | Neutral, sofisticado |

---

## 📱 Responsividad

| Device | Layout |
|--------|--------|
| Mobile | 1 col, stacked, hero reducido |
| Tablet | 2 cols para servicios, gallery |
| Desktop | 3 cols servicios, full gallery, side-by-side team |

---

## ✨ Animaciones

- Hero fade-in con parallax (si es video/imagen)
- Gallery items fade-in on scroll
- Team members slide-in
- Testimonials carousel (simple)
- Hover: Scale, copper shadow, smooth transitions

---

## ✅ Checklist

- [ ] HeroSection con fondo oscuro + overlay
- [ ] ServicesGrid 6+ servicios
- [ ] GallerySection con grid de fotos
- [ ] TeamSection con barberos
- [ ] WhyChooseUs con 4-5 beneficios
- [ ] BookingCta con link/form
- [ ] TestimonialSection carousel
- [ ] LocationSection con mapa
- [ ] FinalCta
- [ ] Build & validar
- [ ] Responsividad completa
