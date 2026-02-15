# Assets - S4 Publicidad

Esta carpeta contiene todos los recursos multimedia del proyecto.

## Estructura

```
assets/
└── images/
    └── espectacular.jpg    # Imagen de fondo del hero
```

## Imágenes

### espectacular.jpg
- **Ubicación**: `assets/images/espectacular.jpg`
- **Uso**: Imagen de fondo de la sección hero (primera sección)
- **Características**: 
  - Overlay oscuro aplicado con CSS para mejor legibilidad del texto
  - Efecto parallax (background-attachment: fixed)
  - Responsive y optimizada para diferentes tamaños de pantalla

## Cómo Agregar Nuevas Imágenes

1. Coloca las imágenes en la carpeta correspondiente:
   - `assets/images/` - Para imágenes generales
   
2. Referencia la imagen en tu HTML o CSS:
   ```html
   <img src="assets/images/tu-imagen.jpg" alt="Descripción">
   ```
   
   ```css
   background-image: url('../assets/images/tu-imagen.jpg');
   ```

## Optimización

Para mejor rendimiento:
- Usa formatos modernos (WebP, AVIF) cuando sea posible
- Comprime las imágenes antes de subirlas
- Considera usar diferentes tamaños para responsive design
