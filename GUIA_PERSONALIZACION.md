# 🎨 Guía de Personalización Rápida

Esta guía te ayudará a personalizar rápidamente tu landing page para adaptarla a tu marca o proyecto.

## 🎯 Cambios Básicos (5 minutos)

### 1. Cambiar el Nombre del Proyecto
**Archivo**: `index.html`

Busca y reemplaza "S4" por el nombre de tu proyecto en:
- Línea 9: `<title>S4 - Landing Page</title>`
- Línea 25: `<a href="#" class="logo">S4</a>`
- Línea 237: `<h3 class="footer-logo">S4</h3>`

### 2. Cambiar Colores Principales
**Archivo**: `style.css` (líneas 5-9)

```css
:root {
    --primary-color: #667eea;      /* Color principal */
    --primary-dark: #5568d3;       /* Versión oscura */
    --primary-light: #7c8ff0;      /* Versión clara */
    --secondary-color: #764ba2;    /* Color secundario */
    --accent-color: #f093fb;       /* Color de acento */
}
```

**Ejemplos de paletas:**

**Azul Profesional:**
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #60a5fa;
```

**Verde Tecnológico:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

**Morado Creativo:**
```css
--primary-color: #8b5cf6;
--secondary-color: #7c3aed;
--accent-color: #a78bfa;
```

**Naranja Energético:**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
--accent-color: #fb923c;
```

### 3. Actualizar Información de Contacto
**Archivo**: `index.html` (líneas 186-212)

```html
<!-- Ubicación -->
<p>Ciudad, País</p>

<!-- Email -->
<p>contacto@s4.com</p>

<!-- Teléfono -->
<p>+52 123 456 7890</p>
```

## 📝 Personalización de Contenido

### Hero Section (Sección Principal)
**Archivo**: `index.html` (líneas 40-56)

```html
<h1 class="hero-title">
    Transforma tu <span class="gradient-text">Visión</span> en Realidad
</h1>
<p class="hero-description">
    Tu mensaje principal aquí...
</p>
```

**Tips:**
- Usa palabras clave que resuenen con tu audiencia
- La palabra dentro de `<span class="gradient-text">` tendrá el efecto de gradiente
- Mantén el título corto y poderoso (máximo 10 palabras)

### Servicios
**Archivo**: `index.html` (líneas 67-107)

Cada servicio tiene esta estructura:
```html
<div class="service-card">
    <div class="service-icon">
        <!-- SVG del icono -->
    </div>
    <h3 class="service-title">Título del Servicio</h3>
    <p class="service-description">
        Descripción del servicio...
    </p>
</div>
```

**Para agregar más servicios:**
1. Copia todo el bloque `<div class="service-card">...</div>`
2. Pégalo dentro de `<div class="services-grid">`
3. Actualiza el contenido

**Iconos SVG gratuitos:**
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)
- [Lucide Icons](https://lucide.dev/)

### Testimonios
**Archivo**: `index.html` (líneas 151-177)

```html
<div class="testimonial-card">
    <div class="testimonial-rating">★★★★★</div>
    <p class="testimonial-text">
        "Tu testimonio aquí..."
    </p>
    <div class="testimonial-author">
        <div class="author-avatar">JD</div>
        <div>
            <h4 class="author-name">Nombre</h4>
            <p class="author-role">Cargo, Empresa</p>
        </div>
    </div>
</div>
```

## 🎨 Personalización Visual Avanzada

### Cambiar Tipografía
**Archivo**: `index.html` (líneas 13-16)

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Selecciona una fuente
3. Copia el link y reemplázalo
4. Actualiza en `style.css`:

```css
:root {
    --font-primary: 'TuFuente', sans-serif;
}
```

**Fuentes recomendadas:**
- **Moderna**: Inter, Poppins, Outfit
- **Profesional**: Roboto, Open Sans, Lato
- **Elegante**: Playfair Display, Merriweather
- **Tecnológica**: Space Grotesk, JetBrains Mono

### Ajustar Espaciado
**Archivo**: `style.css` (líneas 24-28)

```css
:root {
    --spacing-xs: 0.5rem;   /* Muy pequeño */
    --spacing-sm: 1rem;     /* Pequeño */
    --spacing-md: 2rem;     /* Medio */
    --spacing-lg: 4rem;     /* Grande */
    --spacing-xl: 6rem;     /* Muy grande */
}
```

### Cambiar Border Radius (Redondez)
**Archivo**: `style.css` (líneas 42-46)

```css
:root {
    --radius-sm: 0.5rem;    /* Poco redondeado */
    --radius-md: 1rem;      /* Medio */
    --radius-lg: 1.5rem;    /* Muy redondeado */
    --radius-full: 9999px;  /* Completamente redondo */
}
```

Para un diseño más cuadrado, reduce estos valores:
```css
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
```

## 🖼️ Agregar Imágenes

### Reemplazar el Placeholder de Características
**Archivo**: `index.html` (línea 143)

Reemplaza el SVG con:
```html
<div class="features-image">
    <img src="ruta/a/tu/imagen.jpg" alt="Descripción">
</div>
```

### Agregar Logo
**Archivo**: `index.html` (línea 25)

```html
<a href="#" class="logo">
    <img src="logo.png" alt="Logo S4" style="height: 40px;">
</a>
```

### Lazy Loading de Imágenes
Para imágenes que cargan al hacer scroll:

```html
<img data-src="imagen.jpg" alt="Descripción" class="lazy">
```

El JavaScript ya está configurado para manejarlas automáticamente.

## 🔗 Redes Sociales

### Actualizar Links del Footer
**Archivo**: `index.html` (líneas 254-277)

```html
<a href="https://facebook.com/tupagina" aria-label="Facebook">
<a href="https://twitter.com/tuusuario" aria-label="Twitter">
<a href="https://instagram.com/tuusuario" aria-label="Instagram">
<a href="https://linkedin.com/company/tuempresa" aria-label="LinkedIn">
```

### Agregar Más Redes Sociales
Copia este bloque y cambia el SVG:

```html
<a href="https://tiktok.com/@tuusuario" aria-label="TikTok">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <!-- SVG de TikTok -->
    </svg>
</a>
```

## ⚡ Optimizaciones

### Mejorar Velocidad de Carga

1. **Minificar CSS y JS** (en producción):
   - Usa herramientas online como [CSS Minifier](https://cssminifier.com/)
   - Para JS: [JavaScript Minifier](https://javascript-minifier.com/)

2. **Optimizar Imágenes**:
   - Usa formatos modernos: WebP
   - Comprime con [TinyPNG](https://tinypng.com/)
   - Tamaño recomendado: máximo 200KB por imagen

3. **Lazy Loading**:
   - Ya implementado para imágenes con `data-src`
   - Agrega `loading="lazy"` a imágenes normales

### SEO Básico

**Archivo**: `index.html` (líneas 5-8)

```html
<meta name="description" content="Tu descripción aquí (150-160 caracteres)">
<meta name="keywords" content="palabra1, palabra2, palabra3">
<meta name="author" content="Tu Nombre">
```

**Agregar Open Graph para Redes Sociales:**
```html
<meta property="og:title" content="S4 - Landing Page">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="https://tudominio.com/imagen-preview.jpg">
<meta property="og:url" content="https://tudominio.com">
```

## 🎭 Animaciones Personalizadas

### Cambiar Velocidad de Transiciones
**Archivo**: `style.css` (líneas 38-40)

```css
:root {
    --transition-fast: 0.2s ease;    /* Rápida */
    --transition-normal: 0.3s ease;  /* Normal */
    --transition-slow: 0.5s ease;    /* Lenta */
}
```

### Desactivar Animaciones
Si prefieres un diseño más estático, comenta estas líneas en `script.js`:

```javascript
// document.addEventListener('DOMContentLoaded', animateOnScroll);
```

## 📱 Ajustes Responsive

### Cambiar Breakpoints
**Archivo**: `style.css` (líneas 687-738)

```css
@media (max-width: 768px) {
    /* Estilos para tablet */
}

@media (max-width: 480px) {
    /* Estilos para móvil */
}
```

## 🚀 Checklist Pre-Lanzamiento

Antes de publicar tu landing page, verifica:

- [ ] Todos los textos están actualizados
- [ ] Información de contacto es correcta
- [ ] Links de redes sociales funcionan
- [ ] Imágenes están optimizadas
- [ ] Formulario de contacto está conectado (si usas backend)
- [ ] Meta tags de SEO están completos
- [ ] Probado en diferentes navegadores
- [ ] Probado en móvil y tablet
- [ ] Sin errores en la consola del navegador
- [ ] Favicon agregado (opcional)

## 💡 Recursos Útiles

- **Paletas de Colores**: [Coolors.co](https://coolors.co/)
- **Gradientes**: [UI Gradients](https://uigradients.com/)
- **Iconos**: [Heroicons](https://heroicons.com/), [Font Awesome](https://fontawesome.com/)
- **Fuentes**: [Google Fonts](https://fonts.google.com/)
- **Imágenes Gratis**: [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/)
- **Inspiración**: [Awwwards](https://awwwards.com/), [Dribbble](https://dribbble.com/)

---

¿Necesitas ayuda con algo específico? ¡Consulta el código comentado o experimenta! 🎨
