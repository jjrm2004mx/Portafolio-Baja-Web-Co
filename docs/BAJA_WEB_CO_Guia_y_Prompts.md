# BAJA WEB CO.

## Guía de uso y prompts maestros para el portafolio de landing pages

**Objetivo:** construir un portafolio comercial de landing pages para
BAJA WEB CO. en un único repositorio Git, utilizando GitHub Copilot,
UI/UX Pro Max, React, Vite, TypeScript y Tailwind CSS.

Este documento reúne: - La forma recomendada de utilizar el flujo de
trabajo. - La arquitectura funcional del portafolio. - El análisis de
identidad de marca a partir de la página comercial de Facebook. - El
prompt maestro para inspeccionar y desarrollar el proyecto. - El proceso
de diseño individual para cada sector. - Los prompts específicos para
las cuatro landing pages. - Los criterios de calidad y los entregables
esperados.

------------------------------------------------------------------------

# 1. Objetivo del proyecto

BAJA WEB CO. tendrá un portafolio principal que presenta el servicio de
diseño y desarrollo web y permite explorar cuatro demostraciones
comerciales:

1.  Despacho contable.
2.  Barbería.
3.  Restaurante.
4.  Inmobiliaria.

Cada demostración debe mostrar cómo podría verse la página web de un
negocio de ese sector. Las marcas, propiedades, precios, horarios,
testimonios y datos comerciales de las demostraciones deben ser
ficticios y estar identificados como ejemplos cuando corresponda.

El objetivo no es crear cuatro plantillas que solo cambien de color.
Cada landing page debe tener una dirección visual, un sistema de diseño,
contenido y estrategia de conversión apropiados para su sector.

# 2. Arquitectura funcional

Todo el proyecto vive en **un único repositorio Git** y parte de un
único proyecto frontend.

``` text
BAJA WEB CO.
└── PORTAFOLIO PRINCIPAL
    ├── CONTADOR
    │   └── Landing page del despacho contable
    ├── BARBERÍA
    │   └── Landing page de la barbería
    ├── RESTAURANTE
    │   └── Landing page del restaurante
    └── INMOBILIARIA
        └── Landing page de la inmobiliaria
```

## Rutas públicas

  Ruta                    Página
  ----------------------- --------------------------------------
  `/`                     Portafolio principal de BAJA WEB CO.
  `/demos/contador`       Landing page del despacho contable
  `/demos/barberia`       Landing page de la barbería
  `/demos/restaurante`    Landing page del restaurante
  `/demos/inmobiliaria`   Landing page de la inmobiliaria

Cada demostración debe tener una forma discreta de regresar al
portafolio principal. Todas las rutas deben funcionar al navegar
internamente y al abrir o recargar directamente la URL.

# 3. Tecnologías y herramientas

Utilizar, si son compatibles con el repositorio existente:

-   **React** para la interfaz.
-   **Vite** para desarrollo y compilación.
-   **TypeScript** para tipado.
-   **Tailwind CSS** para estilos.
-   **React Router** si resulta apropiado para las rutas.
-   **Git y GitHub** para control de versiones.
-   **GitHub Copilot en modo agente** como asistente de programación.
-   **UI/UX Pro Max** para apoyar la investigación y las decisiones de
    diseño.
-   **Vercel** como opción de publicación inicial, si se elige ese
    proveedor.

No es necesario agregar Spring Boot, una API o una base de datos para
estas demostraciones estáticas. Incorpóralos solo si un requisito real
lo justifica.

Antes de instalar paquetes o modificar versiones, inspeccionar
`package.json` y las configuraciones existentes.

# 4. Cómo utilizar esta guía

## Paso 1. Abrir el repositorio

1.  Abre en VS Code la carpeta raíz del repositorio de BAJA WEB CO.
2.  Comprueba que estás en el repositorio correcto.
3.  Revisa el estado de Git para identificar cambios pendientes.
4.  No sobrescribas trabajo existente.
5.  Abre GitHub Copilot en modo agente.

## Paso 2. Comprobar UI/UX Pro Max

Consulta la documentación oficial del repositorio:

-   GitHub: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Comprueba si la skill ya está instalada y cómo se invoca en el entorno
actual. Si no está instalada, sigue las instrucciones vigentes del
repositorio oficial. No supongas comandos ni rutas: verifica la
documentación correspondiente a la versión instalada.

Si se utiliza la CLI documentada por el proyecto, verifica primero los
requisitos y el directorio de destino. No ejecutes instaladores a ciegas
ni sobrescribas configuraciones de Copilot sin revisarlas.

## Paso 3. Ejecutar primero el prompt de inspección

Copia el **Prompt maestro** de la sección 7 en el chat de Copilot. El
prompt exige que Copilot empiece únicamente por inspeccionar el
repositorio, revisar la identidad de marca y presentar un plan.

No autorices cambios de código hasta revisar el resultado.

## Paso 4. Validar la identidad de marca

Utiliza el enlace público de Facebook como referencia:

https://www.facebook.com/share/1Dzfsqov99/?mibextid=wwXIfr

Copilot puede no tener acceso a todos los recursos de Facebook. Si no
puede acceder, aporta manualmente el logotipo original, la imagen de
portada, los colores o capturas de referencia. No debe inventar
elementos oficiales ni afirmar que recuperó activos que no pudo
consultar.

## Paso 5. Aprobar e implementar por fases

Después de revisar el análisis: 1. Aprueba o ajusta el plan. 2.
Construye la base del proyecto y el portafolio principal. 3. Implementa
una landing page a la vez. 4. Valida cada página antes de avanzar. 5.
Ejecuta las pruebas y documenta resultados reales.

## Paso 6. Validar antes de publicar

Comprueba compilación, navegación, responsive, accesibilidad, enlaces,
CTA, imágenes y comportamiento de las rutas. No publiques información
ficticia como si fuera real.

------------------------------------------------------------------------

# 5. Identidad de marca de BAJA WEB CO.

## Fuente de referencia

Página comercial de Facebook:

https://www.facebook.com/share/1Dzfsqov99/?mibextid=wwXIfr

Antes de diseñar el portafolio principal, analizar los recursos públicos
accesibles de BAJA WEB CO. y elaborar un inventario de marca.

## Elementos que se deben identificar

### Logotipos

-   Logotipo principal.
-   Versiones alternativas.
-   Variantes para fondos claros y oscuros, si existen.
-   Versiones monocromáticas, horizontales o verticales, si existen.
-   Símbolos o isotipos.

No redibujar ni sustituir el logotipo original por uno generado por IA
sin autorización. No alterar sus proporciones ni colores oficiales.

### Colores

Identificar, cuando sea posible, los códigos HEX de: - Color
principal. - Color secundario. - Colores de acento. - Colores de
fondo. - Colores de texto y botones.

Distinguir los colores confirmados de las aproximaciones visuales. No
presentar una estimación como color oficial confirmado.

### Tipografía

Identificar las familias tipográficas utilizadas, cuando sea posible. Si
no están disponibles para web, proponer alternativas compatibles sin
modificar el logotipo.

### Recursos gráficos

-   Imagen de perfil.
-   Imagen de portada.
-   Banners.
-   Fotografías institucionales.
-   Publicaciones promocionales.
-   Ilustraciones, fondos e iconografía.
-   Otros elementos recurrentes.

Priorizar archivos originales de alta calidad. Una imagen visible
públicamente en Facebook no queda automáticamente libre de restricciones
de reutilización.

### Identidad comercial

Identificar, cuando estén confirmados: - Nombre comercial. - Eslogan. -
Propuesta de valor. - Servicios. - Tono de comunicación. - Información
de contacto. - Enlaces oficiales. - CTA habituales.

No inventar datos comerciales ni atribuir mensajes nuevos a la marca
como si fueran oficiales.

## Inventario de marca esperado

  Elemento                 Qué documentar
  ------------------------ -------------------------------------------
  Logotipo principal       Archivo, ubicación y uso recomendado
  Variantes del logotipo   Versiones disponibles y contexto
  Paleta cromática         Códigos y nivel de certeza
  Tipografía               Fuente confirmada o alternativa propuesta
  Portada y gráficos       Archivo, descripción y procedencia
  Eslogan                  Texto confirmado o "no identificado"
  Información comercial    Dato confirmado y fuente
  Redes sociales           URL confirmada

## Organización sugerida de activos

Adaptar a la estructura existente; no crear archivos ficticios para
llenar esta estructura.

``` text
public/
└── images/
    └── brand/
        ├── logo/
        ├── social/
        ├── banners/
        └── graphics/
```

## Reglas de marca

-   El portafolio principal debe mantener la identidad oficial de BAJA
    WEB CO.
-   Las landing pages de demostración deben tener identidades propias.
-   No imponer la paleta corporativa completa a los negocios de ejemplo.
-   La relación con BAJA WEB CO. se puede indicar discretamente como
    "Demostración comercial desarrollada para el portafolio de BAJA WEB
    CO.".
-   No presentar los negocios ficticios como clientes reales.
-   No inventar URLs sociales.
-   Conservar los originales sin modificaciones destructivas.
-   Verificar los permisos de uso de fotografías, iconos y otros
    recursos.

Si Facebook no es accesible, registrar qué se pudo revisar y qué
recursos faltan. Solicitar archivos originales o capturas al usuario
cuando sean necesarios.

------------------------------------------------------------------------

# 6. Arquitectura de directorios de referencia

La estructura real del repositorio tiene prioridad. Si está vacío o
carece de organización, se puede usar esta referencia:

``` text
src/
├── app/
│   └── router.tsx
├── components/
│   ├── shared/
│   │   ├── ContactButton.tsx
│   │   └── SectionContainer.tsx
│   └── layout/
│       └── DemoNavigation.tsx
├── config/
│   ├── site.config.ts
│   ├── brand.config.ts
│   └── demos.config.ts
├── pages/
│   └── portfolio/
│       ├── PortfolioPage.tsx
│       └── components/
│           ├── PortfolioHero.tsx
│           └── DemoCard.tsx
├── demos/
│   ├── contador/
│   │   ├── ContadorPage.tsx
│   │   ├── components/
│   │   ├── sections/
│   │   ├── styles/
│   │   └── data/
│   ├── barberia/
│   │   ├── BarberiaPage.tsx
│   │   ├── components/
│   │   ├── sections/
│   │   ├── styles/
│   │   └── data/
│   ├── restaurante/
│   │   ├── RestaurantePage.tsx
│   │   ├── components/
│   │   ├── sections/
│   │   ├── styles/
│   │   └── data/
│   └── inmobiliaria/
│       ├── InmobiliariaPage.tsx
│       ├── components/
│       ├── sections/
│       ├── styles/
│       └── data/
├── assets/
│   ├── brand/
│   └── shared/
├── hooks/
├── lib/
├── types/
├── App.tsx
└── main.tsx

public/
└── images/
    ├── portfolio/
    ├── contador/
    ├── barberia/
    ├── restaurante/
    ├── inmobiliaria/
    └── brand/
```

Esta estructura no obliga a crear directorios vacíos. Evitar dos
archivos de entrada con responsabilidades ambiguas. Reutilizar módulos
existentes cuando cumplan la función requerida.

------------------------------------------------------------------------

# 7. PROMPT MAESTRO PARA GITHUB COPILOT

Copia todo el contenido de este prompt en Copilot, desde la raíz del
repositorio.

------------------------------------------------------------------------

## INICIO DEL PROMPT MAESTRO

# PROYECTO: BAJA WEB CO.

## Portafolio comercial de landing pages

Actúa como arquitecto de software senior, diseñador UI/UX senior y
desarrollador frontend especializado en landing pages orientadas a
conversión.

Tu objetivo es construir y mantener un portafolio comercial de landing
pages para BAJA WEB CO. utilizando React, Vite, TypeScript, Tailwind CSS
y UI/UX Pro Max.

El propósito es presentar demostraciones profesionales a clientes
potenciales y mostrar cómo podría verse su negocio en Internet.

**Regla fundamental:** antes de modificar archivos, inspecciona el
repositorio real. Respeta su arquitectura, convenciones, dependencias y
funcionalidades existentes. No sobrescribas archivos sin revisar su
contenido.

## A. Arquitectura funcional obligatoria

Todo debe vivir en un único repositorio Git y partir de un proyecto
frontend integrado.

``` text
BAJA WEB CO.
└── PORTAFOLIO PRINCIPAL
    ├── CONTADOR
    │   └── Landing page del despacho contable
    ├── BARBERÍA
    │   └── Landing page de la barbería
    ├── RESTAURANTE
    │   └── Landing page del restaurante
    └── INMOBILIARIA
        └── Landing page de la inmobiliaria
```

Rutas:

-   `/`: portafolio principal.
-   `/demos/contador`: despacho contable.
-   `/demos/barberia`: barbería.
-   `/demos/restaurante`: restaurante.
-   `/demos/inmobiliaria`: inmobiliaria.

El portafolio debe enlazar a las cuatro demostraciones. Cada
demostración debe permitir regresar al portafolio.

## B. Identidad de marca: análisis previo obligatorio

Analiza la página comercial pública de Facebook de BAJA WEB CO.:

https://www.facebook.com/share/1Dzfsqov99/?mibextid=wwXIfr

Busca identificar el logotipo, variantes, paleta cromática, tipografía,
portada, recursos gráficos, eslogan, servicios, tono de comunicación y
datos comerciales confirmados.

No supongas que puedes acceder a todos los contenidos de Facebook. No
eludas autenticación ni restricciones. Si no puedes recuperar un activo,
documenta la limitación y solicita el archivo original o una referencia
al usuario.

No inventes logos, colores oficiales, eslóganes, datos de contacto ni
enlaces sociales. Distingue los datos confirmados de las aproximaciones.

Prepara un inventario de marca antes de diseñar el portafolio. Conserva
los archivos originales y verifica los permisos de uso de los recursos
gráficos.

El portafolio principal debe mantener la identidad de BAJA WEB CO. Las
cuatro demostraciones deben tener identidades propias y no deben parecer
clientes reales.

## C. Tecnologías

Utiliza React, Vite, TypeScript y Tailwind CSS si son compatibles con el
proyecto existente. Usa React Router cuando sea apropiado.

Antes de instalar o actualizar dependencias, revisa `package.json` y las
configuraciones actuales. No agregues backend ni base de datos sin
necesidad justificada.

Utiliza UI/UX Pro Max siguiendo la documentación y los comandos
realmente disponibles en la instalación. No inventes comandos ni afirmes
haber utilizado la herramienta si no pudiste hacerlo.

## D. Portafolio principal

Debe incluir: 1. Encabezado con identidad de BAJA WEB CO. 2. Hero
section con propuesta de valor. 3. Presentación de servicios. 4.
Catálogo de las cuatro demostraciones. 5. Beneficios de una landing page
profesional. 6. Descripción del proceso de trabajo. 7. CTA comercial. 8.
Contacto configurable. 9. Footer.

Cada tarjeta de demostración debe mostrar el sector, imagen, descripción
y un botón para explorarla. El sitio debe ser moderno, profesional,
responsive y orientado a conversión.

No inventes clientes, certificaciones, testimonios ni resultados
comerciales.

## E. Proceso obligatorio para cada landing page

Aplica este proceso por separado a contador, barbería, restaurante e
inmobiliaria:

1.  Analizar el sector, público objetivo, necesidades, objeciones,
    factores de confianza y objetivo comercial.
2.  Consultar UI/UX Pro Max según su documentación instalada.
3.  Definir estilo visual, paleta, tipografía, jerarquía, espaciado,
    componentes, imágenes y accesibilidad.
4.  Definir CTA principal, CTA secundario y estrategia de conversión.
5.  Diseñar la estructura de secciones apropiada al negocio.
6.  Implementar y validar la página.
7.  Documentar las decisiones y las variables que el cliente debe
    sustituir.

No reutilices una misma plantilla cambiando solo textos y colores.
Comparte únicamente componentes cuya reutilización sea razonable.

## F. Requisitos técnicos para todas las landing pages

-   Diseño responsive para móvil, tableta y escritorio.
-   Componentes organizados y mantenibles.
-   HTML semántico.
-   Buen contraste.
-   Navegación por teclado y foco visible.
-   Textos alternativos.
-   Metadatos SEO básicos por página.
-   Imágenes optimizadas y con permisos de uso adecuados.
-   Estados hover y focus accesibles.
-   CTA con destinos configurados.
-   Sin dependencias innecesarias.
-   Sin credenciales ni secretos en frontend.
-   Sin formularios que simulen envíos exitosos si no existe integración
    real.
-   Sin funcionalidades ficticias presentadas como reales.

## G. Configuración

Centraliza los datos comunes de BAJA WEB CO. y mantén separados los
datos de cada demostración.

Permite personalizar, como mínimo: - Nombre comercial y logotipo. -
Colores y tipografía. - Correo y WhatsApp. - Ubicación y horarios. -
Servicios y precios de demostración. - Enlaces sociales. - Imágenes,
textos, CTA y metadatos SEO.

No compartas por error datos de contacto o información comercial entre
demostraciones.

## H. Validación

Comprueba: - Las cinco rutas (portafolio y cuatro demostraciones). -
Navegación desde las tarjetas y regreso al portafolio. - Acceso directo
y recarga de rutas. - Compilación TypeScript. - Build del proyecto. -
Diseño responsive. - Enlaces e imágenes. - CTA y WhatsApp. -
Accesibilidad básica. - Ausencia de errores críticos.

No declares una prueba aprobada si no la ejecutaste. Documenta cualquier
limitación.

## I. Documentación

Mantén un README que explique objetivo, tecnologías, requisitos,
instalación, ejecución local, estructura, rutas, personalización, cómo
agregar una nueva demostración, validaciones y despliegue.

Documenta cada sistema de diseño con objetivo comercial, público,
dirección visual, paleta, tipografía, componentes, CTA y datos que deben
sustituirse.

## J. Trabajo por fases

**Fase 1. Inspección** - Revisar estructura, dependencias y
configuraciones. - Verificar UI/UX Pro Max. - Analizar la identidad de
Facebook y elaborar el inventario de marca. - Identificar recursos
faltantes. - Presentar diagnóstico y plan.

**Fase 2. Fundación** - Definir/adaptar rutas y estructura. - Configurar
marca y datos comunes. - Verificar compilación.

**Fase 3. Portafolio principal** - Aplicar la identidad de BAJA WEB
CO. - Crear las tarjetas de las cuatro demostraciones. - Validar
navegación.

**Fase 4. Despacho contable** - Diseñar, implementar y validar.

**Fase 5. Barbería** - Diseñar, implementar y validar.

**Fase 6. Restaurante** - Diseñar, implementar y validar.

**Fase 7. Inmobiliaria** - Diseñar, implementar y validar.

**Fase 8. Validación final** - Ejecutar pruebas disponibles. - Corregir
errores. - Actualizar documentación. - Resumir archivos modificados,
pruebas ejecutadas y limitaciones.

## Instrucción final

Comienza exclusivamente por la **Fase 1: Inspección**. No implementes
páginas ni modifiques archivos todavía.

Entrega: 1. Estado del repositorio. 2. Arquitectura y dependencias
detectadas. 3. Disponibilidad de UI/UX Pro Max. 4. Inventario de
identidad de marca y fuentes consultadas. 5. Recursos que no pudieron
recuperarse. 6. Estructura propuesta. 7. Riesgos o incompatibilidades.
8. Plan por fases.

Espera mi aprobación antes de modificar archivos.

## FIN DEL PROMPT MAESTRO

------------------------------------------------------------------------

# 8. Prompt de diseño individual para cada landing page

Después de aprobar la inspección y tener lista la arquitectura, usa el
siguiente prompt para diseñar una landing page específica.

Cambia los valores de `SECTOR`, `OBJETIVO`, `PÚBLICO` y `RUTA` según la
demostración. Las secciones sectoriales de la sección 9 contienen
requisitos particulares para cada caso.

## Plantilla de prompt individual

### INICIO DEL PROMPT INDIVIDUAL

Actúa como diseñador UI/UX senior y desarrollador frontend especializado
en landing pages orientadas a conversión.

#### Objetivo

Construir una landing page de demostración comercial para
**\[SECTOR\]**, ubicada o contextualizada en Tijuana, Baja California,
México, cuando resulte pertinente.

La página formará parte del portafolio de BAJA WEB CO. y se utilizará
para mostrar a clientes potenciales cómo podría verse su propio sitio
web.

-   Ruta: `[RUTA]`
-   Objetivo comercial: `[OBJETIVO]`
-   Público objetivo: `[PÚBLICO]`

#### Herramientas

-   Utiliza UI/UX Pro Max para generar el sistema de diseño.
-   React con Vite, si coincide con la arquitectura existente.
-   TypeScript.
-   Tailwind CSS.
-   Diseño responsive.
-   Git para el control de versiones.

#### Dirección de diseño

Primero, analiza el sector y genera una propuesta de diseño que incluya:

-   Estilo visual apropiado.
-   Paleta de colores.
-   Combinación tipográfica.
-   Jerarquía visual.
-   Sistema de espaciado.
-   Componentes reutilizables.
-   Recomendaciones de accesibilidad.
-   Tratamiento de imágenes.
-   Estrategia de conversión.
-   CTA principal y secundario.

Evita utilizar una plantilla genérica de SaaS. La página debe responder
a las necesidades del sector y diferenciarse visualmente de las otras
demostraciones.

Consulta UI/UX Pro Max mediante sus instrucciones reales. No inventes
comandos ni afirmes haberla usado si no está disponible.

#### Estructura de la landing page

Define las secciones apropiadas al sector. Considera, según corresponda:

1.  Encabezado con logotipo, navegación y CTA.
2.  Hero section con propuesta de valor.
3.  Servicios o productos.
4.  Beneficios para el cliente.
5.  Diferenciadores.
6.  Proceso de trabajo o atención.
7.  Galería, catálogo o propiedades, según el sector.
8.  Preguntas frecuentes, cuando aporten valor.
9.  Contacto.
10. Footer con datos comerciales de demostración.

No incluyas secciones solo para completar una lista; cada sección debe
tener una finalidad.

#### Conversión

Incluye un CTA principal coherente con el sector y, cuando resulte
pertinente, un CTA secundario por WhatsApp.

El enlace de WhatsApp debe construirse mediante una variable de
configuración. No inventes un número real.

Todos los botones deben tener un destino funcional. No simules envíos,
citas, reservaciones ni solicitudes procesadas si no existe una
integración real.

#### Requisitos técnicos

-   Adaptación a móviles, tabletas y escritorio.
-   Componentes organizados y mantenibles.
-   Buen contraste y navegación por teclado.
-   Etiquetas semánticas.
-   Metadatos SEO básicos.
-   Imágenes optimizadas y con derechos de uso compatibles.
-   Estados hover y focus accesibles.
-   Evitar dependencias innecesarias.
-   No agregar backend ni base de datos sin necesidad justificada.
-   No incluir credenciales ni secretos en el código.
-   No alterar archivos existentes sin revisar su contenido.

#### Datos de demostración

Utiliza una identidad ficticia y aclara que se trata de un ejemplo
comercial.

No inventes testimonios presentándolos como reales ni afirmes
certificaciones, resultados o disponibilidad de productos que no hayan
sido comprobados.

Los precios, horarios, propiedades y datos comerciales deben ser
configurables e identificables como información de demostración.

#### Entregables

1.  Sistema de diseño.
2.  Ficha de decisiones UI/UX.
3.  Estructura de componentes.
4.  Landing page funcional.
5.  Instrucciones para ejecutar el proyecto localmente.
6.  Lista de variables que deben sustituirse para personalizarla.
7.  Lista de comprobaciones para móvil y escritorio.
8.  Resumen de archivos creados y modificados.

Antes de implementar, revisa la estructura existente y presenta un plan
breve. No sobrescribas archivos sin revisar su contenido.

### FIN DEL PROMPT INDIVIDUAL

------------------------------------------------------------------------

# 9. Requisitos específicos por sector

Usa estos requisitos junto con el prompt individual de la sección 8.

## 9.1. Despacho contable

**Ruta:** `/demos/contador`

**Objetivo:** presentar servicios contables y fiscales, transmitir
confianza y recibir solicitudes de asesoría.

**Público de ejemplo:** personas físicas con actividad empresarial,
profesionistas, emprendedores y pequeñas y medianas empresas.

### Secciones sugeridas

-   Hero con propuesta de valor.
-   Servicios contables y fiscales.
-   Segmentos de clientes.
-   Beneficios.
-   Proceso de atención.
-   Elementos de confianza.
-   Preguntas frecuentes.
-   Contacto.
-   Footer.

### Dirección visual

Profesional, confiable, clara y sobria. Evitar una plantilla SaaS
genérica.

### Conversión

CTA principal: solicitar asesoría. CTA secundario: WhatsApp.

No inventar certificaciones, afiliaciones, testimonios reales ni
resultados fiscales garantizados.

## 9.2. Barbería

**Ruta:** `/demos/barberia`

**Objetivo:** mostrar servicios, diferenciar el establecimiento y
facilitar citas.

### Secciones sugeridas

-   Hero distintivo.
-   Servicios y precios de demostración.
-   Galería visual.
-   Presentación del establecimiento.
-   Diferenciadores.
-   Horarios y ubicación configurable.
-   Preguntas frecuentes, cuando aporten valor.
-   Contacto.

### Dirección visual

Urbana, moderna, distintiva, con fotografías de calidad y jerarquía
tipográfica marcada.

### Conversión

CTA principal: reservar una cita. CTA secundario: WhatsApp.

No presentar precios, horarios ni datos ficticios como información real.

## 9.3. Restaurante

**Ruta:** `/demos/restaurante`

**Objetivo:** presentar la propuesta gastronómica y facilitar
reservaciones o consultas.

### Secciones sugeridas

-   Hero con fotografía gastronómica.
-   Concepto culinario.
-   Selección de platillos.
-   Menú de demostración.
-   Diferenciadores.
-   Galería.
-   Horarios y ubicación configurable.
-   Reservaciones o contacto.

### Dirección visual

Atractiva, editorial, centrada en la experiencia gastronómica, con
fotografía protagonista.

### Conversión

CTA principal: reservar una mesa o consultar disponibilidad. CTA
secundario: WhatsApp.

No simular un sistema de reservaciones real. Identificar el menú y los
precios como demostración.

## 9.4. Inmobiliaria

**Ruta:** `/demos/inmobiliaria`

**Objetivo:** presentar propiedades y captar solicitudes de información
o visitas.

### Secciones sugeridas

-   Encabezado con identidad de marca.
-   Hero con fotografía inmobiliaria.
-   Propuesta de valor.
-   Propiedades destacadas.
-   Fichas de propiedades.
-   Opciones de compra, venta o renta.
-   Beneficios y proceso de atención.
-   Solicitud de información.
-   Preguntas frecuentes, cuando aporten valor.
-   Contacto y footer.

### Datos por propiedad

Mantén las propiedades en una estructura de datos tipada. Cada ficha
puede incluir:

-   Identificador.
-   Título.
-   Tipo de inmueble.
-   Operación: venta o renta.
-   Precio de demostración.
-   Ubicación general.
-   Superficie.
-   Habitaciones.
-   Baños.
-   Estacionamiento.
-   Descripción.
-   Fotografías.
-   CTA para solicitar información.

### Dirección visual

Confiable, profesional, visualmente cuidada y fácil de explorar. Las
fichas deben permitir identificar rápidamente los datos principales de
cada inmueble.

### Conversión

CTA principal: solicitar información sobre una propiedad. CTA
secundario: agendar visita o contactar por WhatsApp.

El mensaje de contacto puede incluir el identificador o nombre de la
propiedad. El número debe ser configurable.

No inventar integraciones con portales, mapas, bases de datos o
inventarios. No presentar propiedades ficticias como disponibles
realmente.

------------------------------------------------------------------------

# 10. Validación de calidad

Ejecuta y documenta las comprobaciones disponibles.

## Arquitectura

-   Un solo repositorio.
-   Un portafolio principal.
-   Cuatro páginas independientes.
-   Configuración común centralizada.
-   Datos sectoriales separados.
-   Posibilidad de incorporar nuevas demostraciones sin reescribir las
    existentes.

## Diseño

-   Identidad propia para cada sector.
-   Coherencia con BAJA WEB CO. en el portafolio.
-   Diseño responsive.
-   Tipografía legible.
-   Imágenes apropiadas.
-   CTA claros.
-   Sin desbordamientos horizontales.

## Funcionalidad

-   Todas las rutas funcionan.
-   Las tarjetas llevan a la página correcta.
-   Los enlaces para regresar al portafolio funcionan.
-   Las rutas funcionan al abrirse directamente y al recargarse.
-   Los CTA tienen destinos configurados.
-   WhatsApp usa números configurables.
-   No hay botones que aparenten funcionar sin hacerlo.

## Accesibilidad

-   Navegación por teclado.
-   Foco visible.
-   Contraste adecuado.
-   HTML semántico.
-   Textos alternativos.
-   Formularios accesibles, si existen.

## Calidad técnica

-   TypeScript sin errores.
-   Build correcto.
-   Sin errores críticos en consola.
-   Imágenes cargadas correctamente.
-   Rutas compatibles con el despliegue.
-   Rendimiento razonable.

No afirmar que una prueba pasó si no se ejecutó. Documentar las
limitaciones.

------------------------------------------------------------------------

# 11. Publicación

Vercel es una opción para publicar el frontend desde GitHub. Antes de
desplegar:

1.  Verifica que el proyecto compile.
2.  Configura el fallback para las rutas de React si el proveedor lo
    requiere.
3.  Comprueba cada ruta publicada.
4.  Revisa títulos, descripciones e imágenes.
5.  Sustituye datos ficticios cuando una demostración se convierta en un
    proyecto real.
6.  Comprueba que las imágenes y fuentes puedan utilizarse en
    producción.
7.  Verifica que los CTA no apunten a números, direcciones o correos
    ajenos.
8.  Confirma que no se publican secretos ni datos privados.

------------------------------------------------------------------------

# 12. Checklist de aprobación por landing page

Antes de considerar terminada una página, marca cada punto:

-   [ ] Se analizó el sector.
-   [ ] Se consultó UI/UX Pro Max, o se documentó por qué no estuvo
    disponible.
-   [ ] Se definió y documentó el sistema de diseño.
-   [ ] La identidad visual es distinta de las otras demostraciones.
-   [ ] La estructura responde a un objetivo comercial.
-   [ ] El CTA principal funciona.
-   [ ] WhatsApp usa configuración y destino válidos.
-   [ ] Los datos ficticios están identificados.
-   [ ] Las imágenes se cargan y tienen uso permitido.
-   [ ] El diseño se verificó en móvil, tableta y escritorio.
-   [ ] Se revisó accesibilidad básica.
-   [ ] Se verificaron título y metadatos SEO.
-   [ ] TypeScript compila.
-   [ ] El proyecto genera build correctamente.
-   [ ] La ruta funciona al abrirse directamente y al recargar.
-   [ ] La documentación indica qué debe personalizarse.
-   [ ] Se documentaron las pruebas ejecutadas y las limitaciones.

------------------------------------------------------------------------

# 13. Resultado esperado

Al finalizar, BAJA WEB CO. contará con:

1.  Un portafolio principal con identidad de marca consistente.
2.  Una landing page de despacho contable.
3.  Una landing page de barbería.
4.  Una landing page de restaurante.
5.  Una landing page de inmobiliaria.
6.  Cuatro sistemas de diseño diferenciados.
7.  Componentes mantenibles y configuración centralizada.
8.  Recursos de marca organizados.
9.  Documentación de ejecución, personalización y despliegue.
10. Validaciones documentadas.

**Orden de trabajo obligatorio:** inspeccionar primero; analizar la
identidad de marca; presentar el plan; esperar aprobación; implementar
el portafolio; construir una demostración a la vez; validar antes de
avanzar.

------------------------------------------------------------------------

# 14. Referencias

-   Repositorio UI/UX Pro Max:
    https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
-   Página de Facebook de BAJA WEB CO.:
    https://www.facebook.com/share/1Dzfsqov99/?mibextid=wwXIfr
-   React: https://react.dev/
-   Vite: https://vite.dev/
-   Tailwind CSS: https://tailwindcss.com/
-   Vercel: https://vercel.com/

Las herramientas y sus instrucciones pueden cambiar. Verifica la
documentación oficial vigente antes de instalar o actualizar
dependencias.
