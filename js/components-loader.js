// ===================================
// CARGADOR DE COMPONENTES
// ===================================

/**
 * Carga un componente HTML desde un archivo externo
 * @param {string} componentPath - Ruta al archivo del componente
 * @param {string} targetSelector - Selector CSS del elemento donde se insertará
 */
async function loadComponent(componentPath, targetSelector) {
    try {
        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(`Error al cargar ${componentPath}: ${response.status}`);
        }

        const html = await response.text();
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            targetElement.innerHTML = html;
        } else {
            console.error(`No se encontró el elemento: ${targetSelector}`);
        }
    } catch (error) {
        console.error('Error cargando componente:', error);
    }
}

/**
 * Carga todos los componentes de la página
 */
async function loadAllComponents() {
    // Cargar header
    await loadComponent('components/header.html', '#header-placeholder');

    // Cargar footer
    await loadComponent('components/footer.html', '#footer-placeholder');

    // Emitir evento personalizado cuando todos los componentes estén cargados
    document.dispatchEvent(new Event('componentsLoaded'));
}

// Cargar componentes cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
} else {
    loadAllComponents();
}

// ===================================
// EXPORTAR PARA USO EN OTROS SCRIPTS
// ===================================
window.ComponentLoader = {
    load: loadComponent,
    loadAll: loadAllComponents
};
