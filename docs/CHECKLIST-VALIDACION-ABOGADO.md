# ✅ Checklist de Validación - Landing Page Abogado

## 📱 Validación MÓVIL (< 640px)

### Hero Section
- [ ] Headline legible sin truncamiento
- [ ] Subheadline visible completamente
- [ ] Botón "Agendar Consulta" ocupa ancho completo
- [ ] Badge de confianza centrado y legible
- [ ] Estadísticas en 2 columnas (100/150, 89/95%)
- [ ] Nota demo visible al final
- [ ] Sin scroll horizontal

### Services Grid
- [ ] Servicios en 1 columna (stacked vertical)
- [ ] Tarjeta de servicio respeta padding
- [ ] Icono visible (emoji legible)
- [ ] Texto no truncado
- [ ] Botón "Consultar →" clickeable
- [ ] Separación clara entre servicios

### Benefits Section
- [ ] 6 beneficios en 1 columna vertical
- [ ] Emoji visible y proporcional
- [ ] Título y descripción legibles
- [ ] Botón CTA ancho completo
- [ ] Padding correcto sin abrumar contenido

### Process Section
- [ ] Timeline números visibles (1-6)
- [ ] Paso a paso sin cortes
- [ ] Detalles de cada paso legibles
- [ ] Texto en puntos no truncado
- [ ] Número en círculo dorado visible

### Testimonials
- [ ] Tarjetas en 1 columna
- [ ] Rating de estrellas visible
- [ ] Quote ("...") legible
- [ ] Nombre y empresa legibles
- [ ] Nota "EJEMPLO COMERCIAL" visible (si aplica)

### FAQs
- [ ] Preguntas expandibles sin scroll
- [ ] Respuesta se expande suavemente
- [ ] Flecha de chevron rota correctamente
- [ ] Contraste de texto suficiente
- [ ] Botón CTA ancho completo

### CTA Final
- [ ] Heading centrado
- [ ] Botones WhatsApp y Llamar en 1 columna
- [ ] Números de contacto copiables
- [ ] Horario completo sin truncamiento

### Footer
- [ ] Nota demo centrada
- [ ] Copyright visible
- [ ] Sin scroll horizontal

---

## 💻 Validación DESKTOP (> 1024px)

### Hero Section
- [ ] Headline en 1-2 líneas máximo
- [ ] Subheadline clara
- [ ] Botones alineados horizontalmente
- [ ] Estadísticas en 4 columnas
- [ ] Máximo ancho de contenido (1200px)

### Services Grid
- [ ] Servicios en 3 columnas
- [ ] Altura de tarjetas uniforme
- [ ] Hover effect (sombra + color dorado)
- [ ] Icono escalable sin truncar
- [ ] Gap uniforme entre tarjetas

### Benefits Section
- [ ] Beneficios en 3 columnas
- [ ] Altura uniforme
- [ ] Emojis proporcionales
- [ ] Textos alineados

### Process Section
- [ ] Timeline con números visuales
- [ ] Descripción de cada paso al lado
- [ ] Detalles legibles
- [ ] Conexión visual entre pasos

### Testimonials
- [ ] 3 tarjetas en 1 fila
- [ ] Altura uniforme
- [ ] Efecto de cristal visible
- [ ] Hover transiciones suaves

### FAQs
- [ ] Máximo ancho de contenido
- [ ] Preguntas sin scroll
- [ ] Transición suave de apertura
- [ ] Padding adecuado

### CTA Final
- [ ] Botones lado a lado
- [ ] Info de contacto organizada
- [ ] Espaciado profesional

---

## 🎯 Validación de INTERACCIÓN

### Botones y Enlaces
- [ ] Botones tienen cursor pointer al hover
- [ ] Cambio de color en hover evidente
- [ ] Focus state visible (outline azul)
- [ ] Transición suave (no instantáneo)
- [ ] Touch target > 44x44px (móvil)

### WhatsApp
- [ ] Link funciona: `https://wa.me/525551234567`
- [ ] Abre en nueva ventana (target="_blank")
- [ ] Número correcto sin espacios/guiones
- [ ] En móvil: abre WhatsApp app
- [ ] En desktop: abre web.whatsapp.com

### Teléfono
- [ ] Link con formato: `tel:+525551234567`
- [ ] En móvil: inicia llamada
- [ ] En desktop: cliente de VoIP o popup

### Email
- [ ] Link con formato: `mailto:email@ejemplo.com`
- [ ] Abre cliente de correo

### Links de Navegación Interna
- [ ] `#servicios` → scroll a sección servicios
- [ ] `#contacto` → scroll a sección contacto
- [ ] Scroll suave (smooth scroll)

### FAQ Expandible
- [ ] Click abre respuesta
- [ ] Click nuevamente cierra
- [ ] Chevron rota al abrir/cerrar
- [ ] No tiene saltos bruscos

---

## ♿ Validación de ACCESIBILIDAD

### Contraste
- [ ] Texto principal vs fondo: ratio 4.5:1 mínimo
- [ ] Botones tienen suficiente contraste
- [ ] Placeholders no tienen bajo contraste
- [ ] Usar WCAG Color Contrast Checker

### Navegación por Teclado
- [ ] Tab navega todos los elementos interactivos
- [ ] Tab order lógico (izq-der, arriba-abajo)
- [ ] Focus state visible en todos los botones
- [ ] Enter activa botones
- [ ] Escape cierra modales

### Semántica HTML
- [ ] `<h1>` una sola vez
- [ ] `<h2>` para títulos principales de sección
- [ ] `<h3>` para subtítulos
- [ ] `<button>` para acciones
- [ ] `<a>` para navegación
- [ ] `<section>` para bloques de contenido

### Atributos ARIA
- [ ] Botones de icono tienen `aria-label`
- [ ] Campos de input tienen `<label>`
- [ ] Alertas tienen `role="alert"`
- [ ] Links externos tienen `rel="noopener noreferrer"`

### Imágenes
- [ ] Todas las imágenes tienen `alt` descriptivo
- [ ] Alt text no empieza con "imagen de"
- [ ] SVG tiene `<title>` si es decorativo
- [ ] Decorativos tienen `aria-hidden="true"`

### Formularios (si aplican)
- [ ] Campos tienen labels asociados
- [ ] Errores son claros y accesibles
- [ ] Submit button es visible
- [ ] Validación en tiempo real comunica cambios

---

## 🖼️ Validación de IMÁGENES

### Carga
- [ ] Imágenes cargan sin delay excesivo
- [ ] Placeholder o skeleton visible mientras carga
- [ ] Sin broken image icons (404)
- [ ] Formato optimizado (JPG, WebP)

### Tamaño
- [ ] Perfil abogado: 400x400px
- [ ] Testimoniales: 300x300px
- [ ] OG image: 1200x630px
- [ ] Tamaño de archivo < 150KB cada una

### Responsividad
- [ ] Imágenes se adaptan al ancho en móvil
- [ ] Sin distorsión o estirado
- [ ] Aspect ratio mantenido
- [ ] Retina-ready (2x densidad si aplica)

### Alternativas
- [ ] `srcset` implementado si hay varias resoluciones
- [ ] Fallback para navegadores viejos

---

## 🎨 Validación de DISEÑO

### Colores
- [ ] Navy (#003366) en headings
- [ ] Teal (#1B7A8A) en accents
- [ ] Gold (#D4AF37) en CTAs
- [ ] Blanco en fondos primarios
- [ ] Gray para textos secundarios

### Tipografía
- [ ] Headings (H1-H5): Lora serif
- [ ] Body: Open Sans sans-serif
- [ ] Tamaños consistentes según nivel
- [ ] Line height > 1.5 en body

### Espaciado
- [ ] Padding interno uniforme (16-24px)
- [ ] Margin entre secciones (48-64px)
- [ ] Gap entre elementos (16-24px)
- [ ] Alineación visual

### Componentes
- [ ] Botones: altura 44px mínimo
- [ ] Cards: border-radius 8-12px
- [ ] Inputs: height 44px, padding 12px
- [ ] Iconos: tamaño legible

---

## ⚡ Validación de PERFORMANCE

### Velocidad de Carga
- [ ] First Contentful Paint < 2 segundos
- [ ] Time to Interactive < 4 segundos
- [ ] Total page size < 2MB
- [ ] Lighthouse score > 85/100

### Optimización
- [ ] Imágenes comprimidas
- [ ] CSS minificado
- [ ] JavaScript minificado
- [ ] Lazy loading en imágenes (si aplica)

### Recursos
- [ ] No hay requests fallidas (404)
- [ ] No hay advertencias de console
- [ ] No hay memory leaks
- [ ] Smooth scrolling sin jank

---

## 🔍 Validación de CONTENIDO

### Textos
- [ ] Sin faltas ortográficas
- [ ] Puntuación correcta
- [ ] Términos legales claros (no jerga)
- [ ] Tono profesional pero accesible
- [ ] Longitud de párrafos < 4 líneas

### Datos Dinámicos
- [ ] Nombre del abogado correcto
- [ ] Especialidades coinciden con descripción
- [ ] Años de experiencia realistas
- [ ] Números de contacto verificables

### CTAs
- [ ] Copy clara: "Agendar Consulta Gratuita"
- [ ] No: "Enviar" o "Siguiente"
- [ ] Botón primario evidente
- [ ] Uno por sección máximo

### Testimonios
- [ ] Marcados como "EJEMPLO COMERCIAL" (demo)
- [ ] O verificables si son reales
- [ ] Sin claims sin verificar
- [ ] Ratings consistentes

---

## 📊 Validación de ANALYTICS & Tracking

- [ ] Google Analytics código presente
- [ ] Conversiones de CTA registradas
- [ ] Link tracking de WhatsApp
- [ ] Scroll depth tracking (opcional)
- [ ] Form submissions tracked (si aplica)

---

## 🌍 Validación de SEO

### Meta Tags
- [ ] Title tag < 60 caracteres
- [ ] Meta description < 160 caracteres
- [ ] Open Graph (og:title, og:description, og:image)
- [ ] Twitter Card (si aplica)

### Estructura
- [ ] `<h1>` contiene keyword principal
- [ ] Headings jerárquicos correctos
- [ ] URLs amigables
- [ ] Canonical tag presente

### Contenido
- [ ] Keyword principal en primeros 100 palabras
- [ ] Densidad de keyword natural (1-2%)
- [ ] Palabras clave secundarias distribuidas
- [ ] Interno links contextuales

### Técnico
- [ ] Mobile-friendly
- [ ] Robots.txt configurado
- [ ] Sitemap.xml presente
- [ ] robots meta tags correctos

---

## 🚀 Checklist Pre-Launch

- [ ] Todos los tests anteriores pasaron
- [ ] Nombre de dominio verificado
- [ ] SSL/HTTPS configurado
- [ ] Email de soporte funcionando
- [ ] WhatsApp número verificado
- [ ] Backup de archivos realizado
- [ ] Deploy a producción exitoso
- [ ] Monitoreo de errores activado
- [ ] Backup plan en caso de problemas
- [ ] Notificación a cliente enviada

---

## 📋 Navegadores a Probar

- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)
- [ ] Safari mobile (iOS)
- [ ] Chrome mobile (Android)

---

## 📱 Dispositivos a Probar

**Físicamente (si es posible):**
- [ ] iPhone 12/13/14 (375x812)
- [ ] Samsung S21/S22 (360x720)
- [ ] iPad (768x1024)
- [ ] Desktop 1440p

**DevTools (Chrome):**
- [ ] Pixel 4 (412x869)
- [ ] iPhone 12 (390x844)
- [ ] iPad (768x1024)
- [ ] Laptop 1920x1080

---

## ⏱️ Tiempo Estimado de Validación

- Solo móvil: 20-30 min
- Móvil + desktop: 45-60 min
- Completo (incluye accesibilidad): 2-3 horas

---

## 📝 Notas de Auditor

```
Fecha: __________
Auditor: __________
Navegador: __________
Dispositivo: __________
Resultados: [ ] PASE  [ ] FALLO

Observaciones:
_________________________________________________________________________
_________________________________________________________________________
_________________________________________________________________________

Problemas encontrados:
1. ________________________________
2. ________________________________
3. ________________________________

Acciones correctivas:
1. ________________________________
2. ________________________________

Fecha de re-test: __________
```

---

**Última actualización:** 2026-10-12  
**Versión:** 1.0.0  
**Responsable:** Baja Web Co. QA Team
