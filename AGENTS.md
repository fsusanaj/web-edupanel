# AGENTS.md — Memoria del Proyecto (`web-edupanel`)

## ¿Qué es este proyecto?

Landing page oficial comercial de **EduPanel** (Plataforma Digital Escolar para colegios particulares en México).
- **Carpeta local:** `/home/adeodato/Documentos/web-edupanel`
- **Repositorio GitHub (`origin`):** `https://github.com/fsusanaj/web-edupanel.git` (rama `main`)
- **URL pública en producción (GitHub Pages):** `https://fsusanaj.github.io/web-edupanel/`
- **Sitio anterior en Netlify (de donde se recuperó):** `https://lighthearted-dasik-e3ed87.netlify.app`
- **Aplicación escolar PWA (proyecto hermano independiente):** `/home/adeodato/Documentos/app-panamericano` (`https://github.com/fsusanaj/app-panamericano.git` / `https://app-panamericana.web.app`). ⚠️ No mezclar ambos repositorios.

---

## Estructura de archivos

```text
web-edupanel/
├── index.html                  ← Landing page completa (Hero, Desafío, Solución, Módulos, Comunicación, Asistencia QR, Calificaciones+IA, Seguridad, Precios $0 activación, Contacto)
├── style.css                   ← Estilos vanilla CSS (paleta #00113a, #1a3a6b, #1a6fd4, #0d9488, #f0a500, #7c3aed)
├── main.js                     ← Interacciones (navbar scroll, menú móvil, animaciones AOS on-scroll, contadores, notificaciones flotantes)
├── img/
│   └── logo-edu-panel.png      ← Logotipo oficial de EduPanel (424×118 PNG)
├── 404.html                    ← Página 404 personalizada con estética de EduPanel
├── robots.txt                  ← Permite rastreo completo y enlaza sitemap.xml
├── sitemap.xml                 ← Sitemap oficial de https://fsusanaj.github.io/web-edupanel/
├── google9d307faa90bcdea5.html ← Archivo de verificación de Google Search Console (NO borrar)
└── AGENTS.md                   ← Este archivo de memoria y contexto
```

---

## Modelo Comercial y Datos de Contacto Configurados

1. **Precios y Activación (`#precios`):**
   - **$200 MXN por alumno / mes**
   - **Inversión inicial / Activación: $0 MXN** en todos los niveles (100, 200, 300 y 500+ alumnos).
   - Incluye el **scanner de entrada QR en comodato ($0)** y configuración de la app con el logo del colegio.
   - Muestra el **Beneficio institucional** ($50 MXN/alumno/mes para la escuela: $5,000, $10,000, $15,000 y $25,000+ MXN/mes).
2. **Datos de Contacto (`#contacto` y JSON-LD):**
   - **Correo:** `fsusanaj@gmail.com`
   - **WhatsApp / Teléfono:** `777 893 0598` (`https://wa.me/527778930598` con mensaje prellenado para agendar demo)
   - **Web:** `www.edupanel.mx` / `https://fsusanaj.github.io/web-edupanel/`

---

## SEO y Google Search Console (Actualizado: 18 de noviembre de 2026)

- **Meta etiquetas:** `<title>`, `description`, `keywords`, `canonical`, `theme-color`, `Open Graph` (`og:*` para WhatsApp/Facebook) y `Twitter Cards` configurados en `index.html`.
- **Datos estructurados (`Schema.org` JSON-LD):** Incluye `@graph` con `WebSite`, `SoftwareApplication` (`EducationalApplication`, oferta `$200 MXN`), `Organization` y `FAQPage` (3 preguntas frecuentes sobre $0 activación, scanner QR y mensualidad).
- **Estado en Google Search Console (cuenta `fsusanaj@gmail.com`):**
  - Propiedad `https://fsusanaj.github.io/web-edupanel/` registrada como **Prefijo de la URL** y **verificada automáticamente** el `2026-11-18` mediante `google9d307faa90bcdea5.html`.
  - Sitemap `/web-edupanel/sitemap.xml` enviado el `2026-11-18` con estado **"Correcto"** (`1` página descubierta).
  - Inspección de URL `https://fsusanaj.github.io/web-edupanel/` realizada y **"Solicitar indexación"** enviada a la cola de rastreo prioritaria el `2026-11-18` (no repetir la solicitud salvo cambios mayores).
- **Importante:** Si en el futuro se conecta un dominio personalizado (ej. `edupanel.mx` o `edupanel.io`), actualizar las URLs absolutas en `index.html` (`canonical`, `og:url`, `og:image`, `JSON-LD`), `robots.txt`, `sitemap.xml` y `404.html`, y nunca borrar `google9d307faa90bcdea5.html`.
