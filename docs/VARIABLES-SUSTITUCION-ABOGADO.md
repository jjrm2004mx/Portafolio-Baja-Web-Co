# 📋 Variables de Sustitución - Landing Page Abogado

## Resumen Ejecutivo

Esta es la **lista maestra** de TODOS los valores que deben ser reemplazados para personalizar la landing page del abogado para un cliente específico.

**Ubicación principal:** `src/config/abogado.config.ts`

---

## 🔴 CRÍTICAS (Cambiar Obligatoriamente)

Estos valores aparecen visibles en la página. **TODOS DEBEN cambiar.**

### Sección: ABOGADO (Datos Personales)

| Variable | Ubicación | Tipo | Ejemplo |
|----------|-----------|------|---------|
| `nombre` | `ABOGADO.nombre` | String | `'Lic. Juan Pérez García'` |
| `especialidad` | `ABOGADO.especialidad` | String | `'Derecho Penal'` |
| `descripcion` | `ABOGADO.descripcion` | String | `'Especialista en derecho penal y familia'` |
| `años_experiencia` | `ABOGADO.años_experiencia` | Number | `20` |
| `bio` | `ABOGADO.bio` | String | `'Graduado de UABC con 20 años...'` |
| `credenciales` | `ABOGADO.credenciales` | Array | `['Cédula 87654321', 'Miembro Colegio...']` |

### Sección: CONTACTO

| Variable | Ubicación | Tipo | Formato | Crítica |
|----------|-----------|------|---------|---------|
| `whatsapp` | `CONTACTO.whatsapp` | String | `'+525551234567'` | 🔴 |
| `email` | `CONTACTO.email` | String | `'contacto@abogado.com'` | 🔴 |
| `telefono` | `CONTACTO.telefono` | String | `'+52 664 123 4567'` | 🔴 |
| `direccion` | `CONTACTO.direccion` | String | `'Centro, Tijuana'` | 🔴 |
| `direccion_completa` | `CONTACTO.direccion_completa` | String | `'Calle X #123...'` | 🟡 |
| `horario` | `CONTACTO.horario` | String | `'Lunes-Viernes 9am-6pm'` | 🟡 |

---

## 🟡 CONTENIDO (Actualizar Según Servicio)

Estos valores customizarse para cada cliente pero tienen valores por defecto.

### Sección: SERVICIOS

Array de objetos. **Puedes agregar/quitar servicios.**

Cada servicio contiene:
```typescript
{
  id: 'identificador-unico',
  nombre: 'Nombre del Servicio',
  descripcion: 'Descripción breve',
  icono: '📋',  // Emoji o SVG
  beneficios: ['Beneficio 1', 'Beneficio 2', ...]
}
```

**Servicios por defecto:**
1. Derecho Mercantil
2. Derecho Laboral
3. Derecho Familiar
4. Derecho Inmobiliario
5. Derecho Tributario
6. Derecho Penal

**Acción:** Agregar/remover según especialidad del abogado.

### Sección: BENEFICIOS

Array de 6 beneficios diferenciadores.

```typescript
{
  titulo: 'Transparencia Total',
  descripcion: 'Explicación clara',
  icono: '👁️'
}
```

**Acción:** Personalizar para destacar fortalezas del abogado.

### Sección: PROCESO

Array de 6 pasos del proceso legal.

Cada paso:
```typescript
{
  numero: 1,
  titulo: 'Consulta Inicial Gratuita',
  descripcion: '...',
  detalles: ['Detalle 1', 'Detalle 2', ...]
}
```

**Acción:** Adaptar el proceso a la metodología real del abogado.

### Sección: FAQS

Array de preguntas frecuentes.

```typescript
{
  pregunta: '¿Cuál es el costo?',
  respuesta: 'Respuesta detallada...'
}
```

**Acción:** Responder las preguntas más comunes de clientes potenciales.

---

## 🔵 TESTIMONIOS (Verificabilidad Crítica)

**IMPORTANTE:** Los testimonios en el archivo demo son ficticios.

Para cliente real, **reemplazar con**:
- Testimonios reales de clientes
- Con consentimiento escrito
- Foto real de cliente (autorizado)
- Nota vacía (sin "EJEMPLO COMERCIAL")

```typescript
{
  nombre: 'Cliente Verificable',
  empresa: 'Empresa Real XYZ',
  foto: '/images/demo/cliente-real.jpg',  // Foto real
  quote: 'Testimonio verificable...',
  rating: 5,
  nota: '',  // Vacío = cliente real
}
```

---

## 🟢 ESTADÍSTICAS (Números Verificables)

```typescript
export const ESTADISTICAS = [
  {
    numero: '150+',
    label: 'Casos resueltos'
  },
  // ...
]
```

**Cambiar a números REALES del abogado:**
- Casos resueltos
- Tasa de éxito
- Años de experiencia
- Clientes satisfechos

---

## 🟣 SEO (Metadatos)

```typescript
export const SEO = {
  title: 'Lic. X - Abogado en Tijuana | Especialista en...',
  description: 'Asesoría legal profesional...',
  keywords: 'abogado, derecho mercantil, Tijuana, ...',
  ogImage: '/images/demo/abogado-og.jpg',
  canonical: 'https://tu-dominio.com'
}
```

**Acción:** Actualizar para el dominio real del cliente.

---

## 🎨 COLORES (Opcional - Si Cambias Paleta)

```typescript
export const COLORES = {
  primary: '#003366',      // Navy azul
  secondary: '#1B7A8A',    // Teal
  accent: '#D4AF37',       // Gold
  // ...
}
```

**Acción:** Cambiar solo si cliente requiere paleta diferente.

---

## 📊 Tabla Resumen de Cambios

| Sección | Qué Cambiar | Crítica | Notas |
|---------|------------|---------|-------|
| **Datos Personales** | Nombre, especialidad, años | 🔴 | Obligatorio |
| **Contacto** | WhatsApp, email, teléfono | 🔴 | Obligatorio |
| **Servicios** | Agregar/quitar servicios | 🟡 | Según especialidad |
| **Beneficios** | Ajustar diferenciadores | 🟡 | Personalizar |
| **Proceso** | Adaptar 6 pasos | 🟡 | Importante |
| **FAQs** | Responder preguntas reales | 🟡 | Conversión |
| **Testimonios** | Reemplazar con reales | 🔴 | Verificable |
| **Estadísticas** | Números reales | 🔴 | Comprobables |
| **SEO** | Meta tags del cliente | 🟡 | SEO |
| **Colores** | Paleta de marca | 🟢 | Opcional |

---

## 🔧 Instrucciones de Cambio Rápido

### Paso 1: Abrir archivo de configuración
```bash
# Abrir en editor
src/config/abogado.config.ts
```

### Paso 2: Buscar & Reemplazar (Ctrl+H en VSCode)

| Buscar | Reemplazar |
|--------|-----------|
| `'Lic. Roberto Mendoza García'` | `'Lic. [Nombre Real]'` |
| `'Derecho Mercantil y Laboral'` | `'[Especialidad]'` |
| `18` | `[Años reales]` |
| `'+525551234567'` | `'+52[Número real]'` |

### Paso 3: Verificar cambios
```bash
npm run dev
# Abrir http://localhost:5173/demos/abogado
# Verificar que todos los valores nuevos aparecen
```

---

## 📸 Imágenes a Reemplazar

| Archivo Actual | Nueva Ruta | Especificación |
|----------------|-----------|-----------------|
| `/images/demo/abogado-perfil.jpg` | Cliente proporcionará | 400x400px, JPG, 70% |
| `/images/demo/testimonial-1.jpg` | Foto cliente 1 | 300x300px, JPG, 70% |
| `/images/demo/testimonial-2.jpg` | Foto cliente 2 | 300x300px, JPG, 70% |
| `/images/demo/testimonial-3.jpg` | Foto cliente 3 | 300x300px, JPG, 70% |

---

## ✅ Checklist de Substitución Completa

- [ ] `ABOGADO.nombre` actualizado
- [ ] `ABOGADO.especialidad` actualizado
- [ ] `ABOGADO.años_experiencia` correcto
- [ ] `CONTACTO.whatsapp` con número real
- [ ] `CONTACTO.email` verificado
- [ ] `CONTACTO.telefono` verificado
- [ ] `CONTACTO.direccion` completa
- [ ] `SERVICIOS` lista personalizada (agregar/quitar)
- [ ] `BENEFICIOS` adaptados a cliente
- [ ] `PROCESO` refleja workflow real
- [ ] `FAQS` responde preguntas comunes
- [ ] `TESTIMONIOS` reemplazados con reales
- [ ] `ESTADISTICAS` números verificables
- [ ] `SEO.title` con datos cliente
- [ ] `SEO.description` descriptivo
- [ ] Imágenes en `public/images/demo/` subidas
- [ ] Test en móvil ✓
- [ ] Test en desktop ✓

---

## 🚨 Errores Comunes & Soluciones

### ❌ WhatsApp no abre

**Problema:** Formato incorrecto  
**Solución:** 
```
Formato correcto: +525551234567 (sin espacios, sin paréntesis)
Incorrecto: +52(664) 123-4567
```

### ❌ Página ve datos viejos

**Problema:** Caché del navegador  
**Solución:**
```bash
# Limpiar caché
Ctrl+Shift+Delete (Chrome)
# o hacer reload duro: Ctrl+Shift+R
```

### ❌ Imágenes no cargan

**Problema:** Ruta incorrecta  
**Solución:**
```typescript
// ❌ Incorrecto
foto: 'images/abogado.jpg'

// ✅ Correcto
foto: '/images/demo/abogado.jpg'
```

### ❌ Componentes rojos en consola

**Problema:** Imports faltantes  
**Solución:**
```bash
# Verificar que AbogadoPage.tsx importe Helmet
import { Helmet } from 'react-helmet'
```

---

## 📞 Contacto para Cambios Complejos

Si necesitas:
- Agregar campos de formulario
- Cambiar estructura HTML
- Agregar nuevas secciones

**Contacta:** Baja Web Co.

---

**Última actualización:** 2026-10-12  
**Versión:** 1.0.0
