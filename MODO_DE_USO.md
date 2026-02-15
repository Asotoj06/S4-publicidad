# 📌 NOTA IMPORTANTE - Modo de Uso Actual

## ✅ Configuración Actual: Sin Servidor Local

La landing page está configurada para **funcionar directamente** al abrir `index.html` en tu navegador, sin necesidad de servidor local.

### Cómo Funciona Ahora

Los componentes (header y footer) están **insertados directamente** en `index.html`, pero mantienen comentarios que indican su origen:

```html
<!-- ============================================
     HEADER COMPONENT
     Archivo fuente: components/header.html
     Para editar, modifica components/header.html
     ============================================ -->
<!-- Contenido del header aquí -->
```

### 🎯 Cómo Usar

**Simplemente abre `index.html` en tu navegador** y todo funcionará correctamente.

### 📝 Cómo Editar Componentes

Tienes dos opciones:

#### Opción 1: Edición Directa (Más Simple)
1. Abre `index.html`
2. Busca el comentario del componente que quieres editar
3. Edita el HTML entre los comentarios
4. Guarda y recarga el navegador

#### Opción 2: Edición Modular (Recomendada)
1. Edita el archivo en `components/` (ej: `components/header.html`)
2. Copia el contenido actualizado
3. Pégalo en `index.html` entre los comentarios correspondientes
4. Guarda y recarga el navegador

### 🔄 Modo con Servidor Local (Opcional)

Si prefieres usar carga dinámica de componentes:

1. **Inicia un servidor local**:
   ```bash
   python -m http.server 8000
   ```

2. **Abre** `http://localhost:8000`

3. El sistema detectará automáticamente que los componentes ya están en el HTML y funcionará igual.

### 📂 Estructura de Archivos

```
components/
├── header.html    # Archivo de referencia para el header
└── footer.html    # Archivo de referencia para el footer

index.html         # Contiene los componentes insertados directamente
```

### 💡 Ventajas de Esta Configuración

- ✅ **Funciona sin servidor**: Abre directamente en el navegador
- ✅ **Mantiene modularidad**: Los componentes están en archivos separados como referencia
- ✅ **Fácil de editar**: Comentarios claros indican dónde está cada componente
- ✅ **Compatible**: Funciona con o sin servidor local

### 🚀 Para Producción

Esta configuración es **ideal para producción** porque:
- No requiere JavaScript para cargar componentes
- Carga más rápido (todo en un archivo)
- Mejor para SEO (contenido visible inmediatamente)
- Compatible con cualquier hosting estático

---

**¿Preguntas?** Consulta `ESTRUCTURA_MODULAR.md` para más detalles sobre la arquitectura.
