// ===================================
// VARIABLES GLOBALES
// ===================================
let navbar, menuToggle, navMenu, navLinks, contactForm;

// ===================================
// INICIALIZACIÓN DE COMPONENTES
// ===================================
function initializeComponents() {
    navbar = document.getElementById('navbar');
    menuToggle = document.getElementById('menuToggle');
    navMenu = document.getElementById('navMenu');
    navLinks = document.querySelectorAll('.nav-link');
    contactForm = document.getElementById('contactForm');

    // Inicializar event listeners después de que los componentes estén cargados
    initializeEventListeners();
}

// ===================================
// EVENT LISTENERS
// ===================================
function initializeEventListeners() {
    // NAVEGACIÓN - SCROLL EFFECT
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const servicesSection = document.getElementById('servicios');

        // Agregar clase 'scrolled' cuando se hace scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Cambiar color al llegar a la sección de servicios
        if (servicesSection) {
            const servicesPosition = servicesSection.offsetTop - navbar.offsetHeight;
            if (currentScroll >= servicesPosition) {
                navbar.classList.add('scrolled-dark');
            } else {
                navbar.classList.remove('scrolled-dark');
            }
        }

        lastScroll = currentScroll;
    });

    // MENÚ MÓVIL - TOGGLE
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevenir scroll cuando el menú está abierto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // NAVEGACIÓN - SMOOTH SCROLL Y ACTIVE LINK
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Solo aplicar smooth scroll si es un anchor link
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Cerrar menú móvil si está abierto
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';

                    // Scroll suave a la sección
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Actualizar link activo
                    updateActiveLink(link);
                }
            }
        });
    });

    // INTERSECTION OBSERVER - ACTIVE LINK ON SCROLL
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (correspondingLink) {
                    updateActiveLink(correspondingLink);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // FORMULARIO DE CONTACTO
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validación básica
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Por favor, completa todos los campos', 'error');
            return;
        }

        // Validar email
        if (!isValidEmail(formData.email)) {
            showNotification('Por favor, ingresa un email válido', 'error');
            return;
        }

        // Simular envío (aquí conectarías con tu backend)
        showNotification('Enviando mensaje...', 'info');

        setTimeout(() => {
            showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
            contactForm.reset();
        }, 1500);

        // En producción, aquí harías una petición al servidor:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            showNotification('¡Mensaje enviado con éxito!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showNotification('Error al enviar el mensaje. Intenta de nuevo.', 'error');
        });
        */
    });
}

// ===================================
// FUNCIONES AUXILIARES
// ===================================

// Función para actualizar el link activo
function updateActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ANIMACIONES DE ENTRADA - FADE IN
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .testimonial-card, .feature-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Agregar delay escalonado para efecto cascada
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// ===================================
// SISTEMA DE NOTIFICACIONES
// ===================================
function showNotification(message, type = 'info') {
    // Remover notificación existente si hay alguna
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Estilos inline (podrías moverlos a CSS)
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        maxWidth: '400px'
    });

    // Colores según tipo
    const colors = {
        success: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        error: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
        info: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    };

    notification.style.background = colors[type] || colors.info;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Agregar animaciones de notificación al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// EFECTO PARALLAX EN HERO
// ===================================
const heroBackground = document.querySelector('.hero-background');

if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ===================================
// CONTADOR ANIMADO (opcional - para estadísticas)
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===================================
// LAZY LOADING DE IMÁGENES (si agregas imágenes)
// ===================================
const lazyImages = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback para navegadores antiguos
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}

// ===================================
// PREVENIR COMPORTAMIENTO POR DEFECTO EN LINKS VACÍOS
// ===================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===================================
// PERFORMANCE - DEBOUNCE PARA SCROLL
// ===================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a eventos de scroll si es necesario
const debouncedScroll = debounce(() => {
    // Aquí puedes agregar funciones adicionales de scroll
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// CONSOLA - MENSAJE DE BIENVENIDA
// ===================================
console.log('%c¡Bienvenido a S4! 🚀', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cSitio desarrollado con HTML, CSS y JavaScript vanilla', 'color: #764ba2; font-size: 14px;');

// ===================================
// INICIALIZACIÓN
// ===================================

// Esperar a que los componentes se carguen
document.addEventListener('componentsLoaded', () => {
    console.log('✅ Componentes cargados');

    // Inicializar componentes y event listeners
    initializeComponents();

    // Ejecutar animaciones
    animateOnScroll();

    console.log('✅ Landing page inicializada correctamente');
});

// Fallback si no se usa el sistema de componentes
document.addEventListener('DOMContentLoaded', () => {
    // Si los componentes ya están en el HTML (sin carga dinámica)
    if (document.getElementById('navbar') && !navbar) {
        console.log('✅ Modo sin componentes dinámicos');
        initializeComponents();
        animateOnScroll();
    }
});
