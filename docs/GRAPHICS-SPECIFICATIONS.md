# ESPECIFICACIONES DE ELEMENTOS GRÁFICOS SVG
**BAJA WEB CO. - Reusable Graphics for Branding**

---

## 📐 ELEMENTOS GRÁFICOS REQUERIDOS

Estos son elementos vectoriales reutilizables extraídos o inspirados en la identidad de BAJA WEB CO.

---

## 🌊 ELEMENTO 1: PATRÓN DE ONDA (Wave Pattern)

**Nombre Archivo:** `wave-pattern.svg`  
**Ubicación:** `/public/images/brand/graphics/`  
**Propósito:** Elemento decorativo, divisores de sección, fondos  
**Prioridad:** ⭐⭐⭐ MEDIA

### Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Formato | SVG (Scalable Vector Graphics) |
| Ancho | 1200 px (responsive) |
| Alto | 200 px (variante estándar) |
| Color Space | RGB |
| Compresión | SVGZ (opcional) |
| Viewbox | 0 0 1200 200 |
| Responsive | Sí |

### Especificaciones de Diseño

**Paleta de colores:**
```
Primario: #00BCD4 (Cyan)
Secundario: #004B87 (Azul Marino)
Terciario: #E8F4F8 (Azul muy claro)
Fondo: Ninguno (transparente)
```

**Descripción visual:**
- Ondas suaves que sugieren movimiento y fluidez
- Inspiradas en las olas del mar (región costera de Baja California)
- Patrón repetible horizontalmente
- Líneas suavizadas (Bézier curves)
- 2-3 capas de ondas para profundidad

**Dimensiones:**
```
Onda 1 (primaria):     Amplitud: 40px, Período: 300px
Onda 2 (secundaria):   Amplitud: 25px, Período: 400px
Onda 3 (terciaria):    Amplitud: 15px, Período: 500px
```

**Estilos:**
- Onda principal: Cyan (#00BCD4), stroke-width: 3px
- Onda secundaria: Azul Marino (#004B87), stroke-width: 2px
- Onda terciaria: Azul Claro (#E8F4F8), stroke-width: 1.5px
- Fill: None (sin relleno, solo líneas)

### Casos de Uso

1. **Hero Section Background**
   ```html
   <svg class="wave-bg" viewBox="0 0 1200 200">
     <use href="/images/brand/graphics/wave-pattern.svg#wave"/>
   </svg>
   ```

2. **Divisor de Secciones**
   ```
   Imagen SVG completa como separador entre secciones
   ```

3. **Fondo de Tarjetas**
   ```
   Patrón repetido como patrón de fondo CSS
   ```

4. **Decoración de Bordes**
   ```
   Aplicada a top o bottom de elementos
   ```

### Instrucciones de Creación

1. **Herramienta:** Inkscape, Adobe Illustrator, o Figma
2. **Crear canvas:** 1200x200 px
3. **Crear onda 1:**
   - Usar Bezier tool
   - Puntos: (0,150), (300,110), (600,150), (900,110), (1200,150)
   - Suavizar curvas
   - Stroke: #00BCD4, 3px
   - Fill: None
4. **Crear onda 2:**
   - Puntos: (0,140), (400,100), (800,140), (1200,100)
   - Stroke: #004B87, 2px
   - Fill: None
5. **Crear onda 3:**
   - Puntos: (0,130), (500,95), (1000,130)
   - Stroke: #E8F4F8, 1.5px
   - Fill: None
6. **Optimizar:** Remover puntos innecesarios
7. **Exportar:** SVG 1200x200, sin relleno
8. **Validar:** Probar responsividad con viewBox

### CSS para Implementación

```css
.wave-pattern {
  width: 100%;
  height: auto;
  max-height: 200px;
  background: transparent;
}

.section-with-wave::before {
  content: '';
  display: block;
  width: 100%;
  height: 200px;
  background-image: url('/images/brand/graphics/wave-pattern.svg');
  background-repeat: repeat-x;
  background-size: 100% 100%;
}

/* Versión de relleno */
.wave-pattern-filled {
  background: linear-gradient(to bottom, #00BCD4, #FFFFFF);
}
```

### Validación

- [ ] SVG válido (sin errores de sintaxis)
- [ ] Ondas suaves y continuas
- [ ] Colores correctos (#00BCD4, #004B87, #E8F4F8)
- [ ] Sin relleno (stroke only)
- [ ] Repetible horizontalmente
- [ ] Responsive (viewBox funciona)
- [ ] Tamaño archivo < 10KB
- [ ] Funciona en todos los navegadores modernos

---

## 🗺️ ELEMENTO 2: MAPA DE BAJA CALIFORNIA (Map Pattern)

**Nombre Archivo:** `map-pattern.svg`  
**Ubicación:** `/public/images/brand/graphics/`  
**Propósito:** Elemento identitario regional, fondos, decoración  
**Prioridad:** ⭐⭐⭐ MEDIA

### Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Formato | SVG |
| Ancho | 300 px (master) |
| Alto | 400 px (Baja es vertical) |
| Color Space | RGB |
| Compresión | SVGZ (opcional) |
| Viewbox | 0 0 300 400 |
| Responsive | Sí |

### Especificaciones de Diseño

**Paleta de colores:**
```
Primario (Land): #004B87 (Azul Marino)
Secundario (Water): #00BCD4 (Cyan)
Terciario (Accent): #E8F4F8 (Azul claro)
Texto: #FFFFFF (Blanco)
```

**Descripción visual:**
- Silueta estilizada de Península de Baja California
- Proporciones aproximadas pero reconocibles
- Pueden incluirse ciudades principales (Tijuana, La Paz, Ensenada)
- Línea de costa definida
- Elementos marinos opcionales (olas, estrellas de mar)
- Minimalista y moderno

### Características Geográficas

**Elementos principales:**
1. **Contorno de península:** Línea suave que define Baja California
2. **Ciudades principales:** Puntos o círculos marcadores
   - Tijuana (norte)
   - Ensenada
   - La Paz (sur)
3. **Agua (océano):** Fondo o acentos en cyan
4. **Decoración:** Ondas, estrellas de mar, líneas de latitud (opcionales)

### Coordenadas Aproximadas

```
Baja California (simplificada):
- Punto norte (Tijuana): (150, 20)
- Punta este (centro): (200, 120)
- Punto sur (La Paz): (140, 380)
- Punta oeste (costa): (50, 200)

Forma general: Triángulo con curvas suaves
```

### Estilos

**Silueta:**
- Fill: #004B87 (Azul Marino)
- Stroke: #FFFFFF (Blanco), 1-2px
- Opacity: 1

**Agua:**
- Fill: #00BCD4 (Cyan)
- Opacity: 0.3-0.5 (semi-transparente)

**Ciudades (puntos):**
- Radius: 3-5px
- Fill: #FFFFFF (Blanco)
- Stroke: #004B87, 0.5px

**Decoración (ondas):**
- Stroke: #00BCD4, 0.5px
- Fill: None

### Casos de Uso

1. **Hero Section Background**
   ```
   Posicionado a la derecha o izquierda con opacidad baja
   ```

2. **Watermark**
   ```
   Semi-transparente en fondos de secciones
   ```

3. **Divider**
   ```
   Entre secciones como elemento visual
   ```

4. **Social Media**
   ```
   En posts para reforzar identidad regional
   ```

5. **Print Materials**
   ```
   En membretes, tarjetas de negocio, brochures
   ```

### Instrucciones de Creación

1. **Herramienta:** Inkscape, Figma, o Adobe Illustrator
2. **Crear canvas:** 300x400 px
3. **Referencia:** Buscar mapa de Baja California en Google Maps
4. **Crear silueta:**
   - Usar Bezier/Pen tool
   - Simplificar contorno (12-20 puntos máximo)
   - Puntos clave: Tijuana, Ensenada, La Paz
   - Suavizar todas las curvas
   - Fill: #004B87
   - Stroke: #FFFFFF, 1.5px
5. **Crear agua (opcional):**
   - Dibujar polígono para océano
   - Fill: #00BCD4, Opacity: 0.4
6. **Agregar ciudades:**
   - Círculos de 3-4px en ciudades principales
   - Fill: #FFFFFF
   - Stroke: #004B87, 0.5px
7. **Agregar labels (opcional):**
   - Texto para ciudades en 10px
   - Font: Inter
   - Color: #FFFFFF o #004B87
8. **Agregar decoración (opcional):**
   - 2-3 ondas decorativas alrededor
   - Stroke: #00BCD4, 0.5px
9. **Optimizar:** Remover puntos innecesarios, unificar paths
10. **Exportar:** SVG 300x400
11. **Validar:** Reconocibilidad y proporciones

### CSS para Implementación

```css
.map-pattern {
  width: 100%;
  max-width: 300px;
  height: auto;
  opacity: 0.8;
}

.hero-section {
  background-image: url('/images/brand/graphics/map-pattern.svg');
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 250px auto;
  background-attachment: fixed;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    background-size: 150px auto;
  }
}

.map-watermark {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.15;
  width: 400px;
  pointer-events: none;
}
```

### Validación

- [ ] SVG válido (sin errores de sintaxis)
- [ ] Forma de Baja California reconocible
- [ ] Ciudades marcadas correctamente
- [ ] Colores correctos
- [ ] Línea de costa suave
- [ ] Responsive (viewBox funciona)
- [ ] Tamaño archivo < 15KB
- [ ] Funciona como fondo (opacidad)
- [ ] Funciona como elemento standalone

---

## 📦 ENTREGABLES FINALES

Después de crear ambos elementos gráficos:

```
public/images/brand/graphics/
├── wave-pattern.svg     (1200x200, nuevo)
└── map-pattern.svg      (300x400, nuevo)
```

**Total: 2 archivos SVG (nuevos)**

---

## 🔗 HERRAMIENTAS RECOMENDADAS

### Profesional
- **Adobe Illustrator:** Mejor para precisión profesional
- **Affinity Designer:** Alternativa moderna pago único
- **Sketch:** Para web design

### Gratuito/Open Source
- **Inkscape:** Más completo para SVG, gratuito
- **Gravit Designer:** Web-based gratuito (limitado)
- **Boxy SVG:** Editor web especializado (pago)

### Online (sin instalación)
- **Figma:** Colaborativo, gratuito plan básico
- **Canva:** Interfaz amigable, gratuito
- **Draw.io:** Para diagramas y formas

### Recursos de Referencia
- **Mapa de Baja California:** [Google Maps](https://www.google.com/maps/place/Baja+California,+Mexico/)
- **Ondas SVG:** [SVG Waves Generator](https://www.svgwaves.io/)
- **SVG Editor Online:** [Boxy SVG](https://boxy-svg.com/)

---

## ✅ CHECKLIST DE VALIDACIÓN FINAL

### Wave Pattern
- [ ] Creado en 1200x200
- [ ] 3 capas de ondas
- [ ] Colores correctos (#00BCD4, #004B87, #E8F4F8)
- [ ] Sin relleno (stroke only)
- [ ] Suave y continuo
- [ ] Repetible horizontalmente
- [ ] SVG < 10KB
- [ ] Responsive

### Map Pattern
- [ ] Creado en 300x400
- [ ] Forma de Baja California clara
- [ ] Ciudades marcadas
- [ ] Colores correctos
- [ ] Línea de costa suave
- [ ] Agua opcional agregada
- [ ] SVG < 15KB
- [ ] Responsive

### General
- [ ] Ambos en `/public/images/brand/graphics/`
- [ ] Nombres consistentes
- [ ] SVG válido
- [ ] Sin rellenos innecesarios
- [ ] Metadata limpiada
- [ ] Documentación actualizada

---

## 📋 REFERENCIAS

- Guía de marca: `docs/brand-guidelines.md`
- Configuración: `src/config/brand.config.ts`
- Logo: `/public/images/brand/logo/logo-primary.png`

---

**Documento generado:** 2026-10-12  
**Estado:** Listo para crear elementos gráficos  
**Prioridad:** Media (después de variantes de logo)
