# S4 - Landing Page Moderna

Una landing page profesional y moderna desarrollada con HTML, CSS y JavaScript vanilla.

## 📋 Descripción

Landing page informativa con diseño moderno, animaciones suaves y totalmente responsive. Perfecta para presentar servicios, características y captar clientes potenciales.

## ✨ Características

### Diseño
- 🎨 **Diseño Moderno**: Interfaz oscura con gradientes vibrantes
- 📱 **Totalmente Responsive**: Adaptable a todos los dispositivos
- 🌈 **Gradientes y Efectos**: Colores modernos y efectos visuales atractivos
- ✨ **Animaciones Suaves**: Transiciones y animaciones fluidas

### Secciones
- 🏠 **Hero Section**: Presentación impactante con llamados a la acción
- 💼 **Servicios**: Muestra tus servicios principales con iconos
- ⭐ **Características**: Destaca por qué elegirte
- 💬 **Testimonios**: Opiniones de clientes satisfechos
- 📧 **Contacto**: Formulario funcional con validación
- 🔗 **Footer**: Información adicional y redes sociales

### Funcionalidades JavaScript
- 🔄 **Smooth Scroll**: Navegación suave entre secciones
- 📍 **Active Link Detection**: Resalta la sección actual automáticamente
- 📱 **Menú Móvil**: Menú hamburguesa responsive
- 🎭 **Animaciones on Scroll**: Elementos que aparecen al hacer scroll
- 📝 **Validación de Formulario**: Validación en tiempo real
- 🔔 **Sistema de Notificaciones**: Feedback visual para el usuario
- 🎨 **Efecto Parallax**: Fondo con efecto de profundidad

## 🚀 Cómo Usar

### ⚠️ Importante: Servidor Local Requerido

Debido a la arquitectura modular con carga dinámica de componentes, **necesitas un servidor local** para que la página funcione correctamente (no funciona con `file://`).

### Opción 1: Python (Recomendado)
```bash
# Con Python 3
python -m http.server 8000
```

### Opción 2: Node.js
```bash
# Con http-server
npx http-server
```

### Opción 3: PHP
```bash
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Alternativa Sin Servidor

Si prefieres no usar servidor local, puedes copiar el contenido de `components/header.html` y `components/footer.html` directamente en `index.html`. El código tiene un fallback automático que detectará esto.

## 📁 Estructura de Archivos

```
S4/
├── components/             # Componentes HTML reutilizables
│   ├── header.html         # Navegación/Header
│   └── footer.html         # Footer
│
├── css/                    # Estilos
│   └── style.css           # Estilos principales con variables y responsive
│
├── js/                     # Scripts JavaScript
│   ├── components-loader.js # Sistema de carga de componentes
│   └── main.js             # Lógica principal de la aplicación
│
├── index.html              # Página principal
├── README.md               # Este archivo
├── GUIA_PERSONALIZACION.md # Guía de personalización
└── ESTRUCTURA_MODULAR.md   # Documentación de la arquitectura modular
```

## 🏗️ Arquitectura Modular

El proyecto usa una **arquitectura basada en componentes** que permite:

- ✅ **Reutilización**: Header y Footer en archivos separados
- ✅ **Mantenimiento**: Actualiza un componente, se refleja en todas las páginas
- ✅ **Escalabilidad**: Fácil agregar nuevos componentes

Para más detalles, consulta `ESTRUCTURA_MODULAR.md`.

## 🎨 Personalización

### Colores
Los colores principales se definen en las variables CSS en `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... más colores */
}
```

### Contenido
1. **Textos**: Edita directamente en `index.html`
2. **Servicios**: Modifica la sección `.services-grid`
3. **Testimonios**: Actualiza `.testimonials-grid`
4. **Información de Contacto**: Cambia los datos en `.contact-details`

### Tipografía
La fuente actual es **Inter** de Google Fonts. Para cambiarla:

1. En `index.html`, modifica el link de Google Fonts
2. En `style.css`, actualiza `--font-primary`

## 🔧 Funcionalidades Avanzadas

### Formulario de Contacto
El formulario incluye validación básica. Para conectarlo con un backend:

1. Abre `script.js`
2. Busca la sección `FORMULARIO DE CONTACTO`
3. Descomenta y modifica el código de `fetch()` para tu API

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
```

### Agregar Imágenes
Para agregar imágenes con lazy loading:

```html
<img data-src="ruta/imagen.jpg" alt="Descripción">
```

El script automáticamente cargará las imágenes cuando sean visibles.

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 480px

## 🌐 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)

## 🎯 SEO

La página incluye:
- Meta tags descriptivos
- Estructura semántica HTML5
- Títulos jerárquicos apropiados
- Atributos `alt` en imágenes
- URLs amigables con anchors

## 📝 Próximas Mejoras

Ideas para expandir el proyecto:

- [ ] Agregar más secciones (Blog, Portfolio, FAQ)
- [ ] Integrar con backend para formulario
- [ ] Agregar modo claro/oscuro toggle
- [ ] Implementar i18n (multi-idioma)
- [ ] Agregar animaciones más complejas con bibliotecas
- [ ] Optimizar imágenes y assets
- [ ] Implementar PWA (Progressive Web App)

## 🤝 Contribuciones

Este es un proyecto base. Siéntete libre de:
- Agregar nuevas secciones
- Mejorar animaciones
- Optimizar el código
- Agregar nuevas funcionalidades

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 👨‍💻 Desarrollo

Desarrollado con:
- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript ES6+ (Vanilla JS)
- Google Fonts (Inter)

---

**¿Necesitas ayuda?** Revisa el código comentado o consulta la documentación de cada sección.

¡Disfruta construyendo tu landing page! 🚀
