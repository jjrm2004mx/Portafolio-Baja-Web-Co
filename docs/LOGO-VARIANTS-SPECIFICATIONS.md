# ESPECIFICACIONES DE VARIANTES DE LOGO
**BAJA WEB CO. - Logo Asset Generation**

---

## 📐 LOGO PRIMARIO (REFERENCIA)

**Archivo:** `logo-primary.png`  
**Ubicación:** `/public/images/brand/logo/`  
**Estado:** ✅ Existente  
**Dimensiones:** 400 x 400 px  
**Formato:** PNG con canal RGBA (transparencia)  
**Colores:** Azul Marino #004B87 + Cyan #00BCD4  
**Estilo:** Circular, transparente, badge/sello

**Elementos:**
- Anillo exterior con texto "BAJA WEB CO."
- Centro con mapa estilizado de Baja California
- Onda de agua decorativa
- "BWC" en la base

---

## 🎨 VARIANTE 1: LOGO OSCURO (Dark)

**Nombre Archivo:** `logo-dark.png`  
**Ubicación:** `/public/images/brand/logo/`  
**Propósito:** Usar sobre fondos CLAROS y LUMINOSOS  
**Prioridad:** ⭐⭐⭐⭐⭐ ALTA

### Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Ancho | 400 px |
| Alto | 400 px |
| DPI | 72 ppi (web) |
| Formato | PNG |
| Transparencia | Sí (canal ALFA) |
| Color Space | RGB |
| Compresión | Óptima (sin pérdida) |

### Especificaciones de Diseño

**Paleta de colores:**
```
Primario (reemplazar #004B87): #003366
Secundario (reemplazar #00BCD4): #0099CC
Neutrales: Ninguno (sin gris)
Acento: Opcional #003366
```

**Contraste:**
- Sobre blanco #FFFFFF: Mínimo 10:1 ✓
- Sobre gris claro #F5F5F5: Mínimo 8:1 ✓

**Estilo:**
- Aumentar saturación de colores primarios
- Engrosar líneas en 5-10% para claridad
- Mantener onda de agua pero aumentar contraste
- Preservar proporciones exactas

**Casos de Uso:**
- Sitio web (fondo blanco)
- Hero sections claros
- Tarjetas sobre fondos blancos
- Materiales impresos (papel blanco)
- Fondos de fotografía clara

### Instrucciones de Creación

1. **Punto de partida:** logo-primary.png
2. **Operación 1:** Aumentar saturation +20%
3. **Operación 2:** Aumentar contraste +15%
4. **Operación 3:** Cambiar azul #004B87 → #003366
5. **Operación 4:** Cambiar cyan #00BCD4 → #0099CC
6. **Operación 5:** Engrosar líneas en 7%
7. **Validación:** Verificar contraste 10:1 sobre blanco
8. **Exportar:** PNG 400x400 optimizado

### Validación

- [ ] Contraste sobre #FFFFFF: 10:1+
- [ ] Ambos colores distinguibles claramente
- [ ] Líneas de texto legibles a 80px
- [ ] Transparencia preservada
- [ ] Tamaño archivo < 80KB

---

## 🎨 VARIANTE 2: LOGO CLARO (Light)

**Nombre Archivo:** `logo-light.png`  
**Ubicación:** `/public/images/brand/logo/`  
**Propósito:** Usar sobre fondos OSCUROS  
**Prioridad:** ⭐⭐⭐⭐⭐ ALTA

### Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Ancho | 400 px |
| Alto | 400 px |
| DPI | 72 ppi (web) |
| Formato | PNG |
| Transparencia | Sí (canal ALFA) |
| Color Space | RGB |
| Compresión | Óptima (sin pérdida) |

### Especificaciones de Diseño

**Paleta de colores:**
```
Primario 1 (Blanco): #FFFFFF
Primario 2 (Cyan claro): #00D4E8
Neutrales: Ninguno
Acento: Opcional #E8F4F8
Fondo: TRANSPARENTE (no relleno)
```

**Contraste:**
- Sobre azul marino #004B87: Mínimo 10:1 ✓
- Sobre negro #1A1A1A: Mínimo 12:1 ✓

**Estilo:**
- Colores inversos al logo oscuro
- Blanco (#FFFFFF) como color principal
- Cyan más claro (#00D4E8) para acentos
- Mantener onda de agua visible
- Preservar proporciones exactas

**Casos de Uso:**
- Sitio web sobre fondos oscuros
- Navbars azul marino
- Hero sections con gradientes oscuros
- Footers oscuros
- Botones sobre fondos primarios

### Instrucciones de Creación

1. **Punto de partida:** logo-primary.png
2. **Operación 1:** Invertir colores (Negative)
3. **Operación 2:** Cambiar azul #004B87 → #FFFFFF
4. **Operación 3:** Cambiar cyan #00BCD4 → #00D4E8
5. **Operación 4:** Ajustar luminosidad +15%
6. **Operación 5:** Aumentar contraste +10%
7. **Validación:** Verificar contraste 10:1 sobre #004B87
8. **Exportar:** PNG 400x400 optimizado

### Validación

- [ ] Contraste sobre #004B87: 10:1+
- [ ] Contraste sobre #1A1A1A: 12:1+
- [ ] Blanco claramente visible
- [ ] Cyan acentos perceptibles
- [ ] Transparencia preservada
- [ ] Tamaño archivo < 80KB

---

## 🎨 VARIANTE 3: LOGO MONOCROMÁTICO (Mono)

**Nombre Archivo:** `logo-mono.png`  
**Ubicación:** `/public/images/brand/logo/`  
**Propósito:** Uso en BLANCO Y NEGRO / ESCALA DE GRISES  
**Prioridad:** ⭐⭐⭐ MEDIA

### Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Ancho | 400 px |
| Alto | 400 px |
| DPI | 72 ppi (web) |
| Formato | PNG |
| Transparencia | Sí (canal ALFA) |
| Color Space | RGB (pero valores B&W) |
| Compresión | Óptima (sin pérdida) |

### Especificaciones de Diseño

**Paleta de colores:**
```
Principal: #000000 (Negro puro)
Secundario: #FFFFFF (Blanco puro)
Intermedios: Ninguno (solo B&W)
Fondo: TRANSPARENTE
```

**Opciones de Uso (elegir según contexto):**

#### Opción A: Negro sobre transparente
```
- Texto: Negro #000000
- Elementos: Negro #000000
- Fondo: Transparente
- Uso: Sobre fondos blancos, fondos claros
```

#### Opción B: Blanco sobre transparente
```
- Texto: Blanco #FFFFFF
- Elementos: Blanco #FFFFFF
- Fondo: Transparente
- Uso: Sobre fondos oscuros, fondos negros
```

**Estilo:**
- Máximo contraste
- Líneas claras y definidas
- Sin gris intermedio
- Usar dithering si es necesario para tonos
- Preservar proporciones exactas

**Casos de Uso:**
- Documentos impresos en blanco y negro
- Fotocopias
- Faxes
- Impresión en dispositivos limitados
- Documentos PDF en escala de grises
- Sellos y tampones

### Instrucciones de Creación

1. **Punto de partida:** logo-primary.png
2. **Operación 1:** Convertir a escala de grises
3. **Operación 2:** Aumentar contraste al máximo
4. **Operación 3:** Aplicar threshold (umbral) para B&W puro
   - Threshold: 128
4. **Operación 4:** Suavizar bordes ligeramente
5. **Operación 5:** Exportar versión negra (#000000)
6. **Operación 6:** Invertir y exportar versión blanca (#FFFFFF)
7. **Validación:** Sin colores intermedios
8. **Exportar:** PNG 400x400 (sin compresión con pérdida)

### Validación

- [ ] Solo negro (#000000) y blanco (#FFFFFF) presentes
- [ ] Sin grises intermedios
- [ ] Líneas claras y legibles
- [ ] Proporciones preservadas
- [ ] Ambas versiones (negro y blanco) disponibles
- [ ] Funciona en fotocopias
- [ ] Tamaño archivo < 50KB

---

## 🎨 VARIANTE 4: LOGO CUADRADO (Square)

**Nombre Archivo:** `logo-square.png`  
**Ubicación:** `/public/images/brand/logo/`  
**Propósito:** Perfiles sociales, Favicons, Layouts cuadrados  
**Prioridad:** ⭐⭐⭐⭐⭐ ALTA

### Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Ancho | 256 x 256 px (master) |
| Alto | 256 x 256 px |
| DPI | 72 ppi (web) |
| Formato | PNG |
| Transparencia | Sí (canal ALFA) |
| Color Space | RGB |
| Compresión | Óptima (sin pérdida) |
| Versiones adicionales | 128x128, 64x64, 32x32, 16x16 |

### Especificaciones de Diseño

**Paleta de colores:**
```
Primario: #004B87
Secundario: #00BCD4
Neutrales: Blanco #FFFFFF, Grises
Fondo: TRANSPARENTE
```

**Cambios de composición:**
- Adaptar diseño circular a marco cuadrado
- Padding interno: 10px desde bordes
- Mantener proporciones de elementos clave
- Preservar legibilidad de "BWC"
- Centro enfatizado sobre anillo exterior

**Estilo:**
- Versión derivada del logo circular
- Adaptación a formato cuadrado
- Sin bordes cortados
- Máxima claridad en espacios pequeños
- Funcionamiento en 16x16px

**Casos de Uso:**
- Favicon del sitio web (16x16, 32x32)
- Avatar de perfil Facebook (170x170)
- Avatar de perfil Twitter (400x400)
- Avatar de perfil Instagram (110x110)
- Perfil LinkedIn (200x200)
- App icons
- Marcadores de búsqueda
- Thumbnails

### Instrucciones de Creación

1. **Punto de partida:** logo-primary.png (circular)
2. **Operación 1:** Crear canvas 256x256 cuadrado
3. **Operación 2:** Colocar logo circular en centro con padding
4. **Operación 3:** Adaptar proporciones de elementos
   - Anillo exterior: reducir radio en 5%
   - Mapa: mantener visibilidad
   - "BWC": aumentar legibilidad
5. **Operación 4:** Exportar versión 256x256 (master)
6. **Operación 5:** Crear versiones escaladas:
   - 256x256 (master)
   - 128x128 (redes sociales)
   - 64x64 (media)
   - 32x32 (favicon)
   - 16x16 (favicon pequeño)
7. **Validación:** Legibilidad en 16x16
8. **Exportar:** PNG todos los tamaños

### Variaciones por Plataforma

| Plataforma | Tamaño Recomendado | Archivo | Nota |
|------------|-------------------|---------|------|
| Favicon | 32x32, 16x16 | favicon.png | Puede incluir canvas sólido |
| Facebook | 170x170 | facebook-square.png | Versión clara preferida |
| Twitter | 400x400 | twitter-square.png | Redes sociales |
| Instagram | 110x110 | instagram-square.png | Redes sociales |
| LinkedIn | 200x200 | linkedin-square.png | Redes sociales |
| App Icon | 180x180+ | app-icon.png | iOS/Android |
| Sitio Web | 80x80 | nav-logo-square.png | Navegación |

### Validación

- [ ] Legible en 16x16px
- [ ] Legible en 32x32px
- [ ] Legible en 80x80px
- [ ] Aspecto cuadrado perfecto (256:256)
- [ ] Colores corporativos preservados
- [ ] Transparencia funciona
- [ ] Todas las versiones escaladas disponibles
- [ ] Tamaño 256x256 < 50KB
- [ ] Tamaños pequeños < 10KB cada uno

---

## 📦 ENTREGABLES FINALES

Después de crear las 4 variantes, la estructura debe ser:

```
public/images/brand/logo/
├── logo-primary.png          (400x400, ✅ existente)
├── logo-dark.png             (400x400, nuevo)
├── logo-light.png            (400x400, nuevo)
├── logo-mono.png             (400x400, nuevo - versión negra)
├── logo-mono-white.png       (400x400, nuevo - versión blanca)
├── logo-square.png           (256x256, nuevo - master)
├── logo-square-128.png       (128x128, nuevo)
├── logo-square-64.png        (64x64, nuevo)
├── logo-square-32.png        (32x32, nuevo)
├── logo-square-16.png        (16x16, nuevo)
└── README-variants.md        (Documentación)
```

**Total: 11 archivos de logo (1 existente + 10 nuevos)**

---

## ✅ CHECKLIST DE VALIDACIÓN FINAL

Antes de dar por completado este paso, verificar:

### Logo Oscuro (dark)
- [ ] Creado en 400x400
- [ ] Colores oscuros intensos
- [ ] Contraste 10:1 sobre blanco
- [ ] PNG con transparencia
- [ ] Archivo < 80KB

### Logo Claro (light)
- [ ] Creado en 400x400
- [ ] Colores claros (blanco + cyan)
- [ ] Contraste 10:1 sobre azul marino
- [ ] PNG con transparencia
- [ ] Archivo < 80KB

### Logo Monocromático (mono)
- [ ] Creado en 400x400
- [ ] Solo negro y blanco
- [ ] Versión negra disponible
- [ ] Versión blanca disponible
- [ ] PNG sin compresión con pérdida
- [ ] Archivo < 50KB

### Logo Cuadrado (square)
- [ ] Master en 256x256
- [ ] Versiones: 256, 128, 64, 32, 16
- [ ] Legible en 16x16
- [ ] Adaptaciones por plataforma
- [ ] PNG con transparencia
- [ ] Todos < 50KB

### General
- [ ] Todos los archivos en `/public/images/brand/logo/`
- [ ] Nombres consistentes (logo-[variante].png)
- [ ] Metadata EXIF limpiada
- [ ] Optimización sin pérdida
- [ ] Documentación actualizada

---

## 🔗 REFERENCIAS PARA HERRAMIENTAS

### Software Recomendado (Gratuito/Pago)

**Profesional:**
- Adobe Illustrator (Pago)
- Adobe Photoshop (Pago)
- Affinity Designer (Pago único)

**Gratuito/Open Source:**
- Inkscape (vector, gratuito)
- GIMP (raster, gratuito)
- Krita (digital painting, gratuito)
- Photopea (web-based, gratuito)

**Online (sin instalación):**
- Canva Pro (web)
- Photopea (web)
- Pixlr (web)

### Comandos CLI Alternativos

**ImageMagick:**
```bash
# Logo oscuro (aumentar saturación)
convert logo-primary.png -modulate 100,120,100 -normalize logo-dark.png

# Logo claro (invertir)
convert logo-primary.png -negate logo-light.png

# Logo monocromático
convert logo-primary.png -colorspace Gray -modulate 100,0,100 -threshold 50% logo-mono.png

# Logo cuadrado (redimensionar)
convert logo-primary.png -background none -resize 256x256 -gravity center -extent 256x256 logo-square.png
```

**FFmpeg/ImageMagick alternativo:**
```bash
# Crear favicon multi-tamaño
convert logo-square.png -define icon:auto-resize=256,128,64,32,16 favicon.ico
```

---

## 📞 SOPORTE

Si tienes dudas sobre:
- **Creación:** Consult Adobe/Inkscape docs
- **Especificaciones:** Referirse a este documento
- **Validación:** Verificar WCAG contrast ratios
- **Implementación:** Ver `src/config/brand.config.ts`

---

**Documento generado:** 2026-10-12  
**Última actualización:** 2026-10-12  
**Responsable:** Sistema de Auditoría de Marca  
**Estado:** Listo para crear variantes
