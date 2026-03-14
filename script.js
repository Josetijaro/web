// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Menú Móvil ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animación para el icono de hamburguesa (puedes añadir CSS extra si quieres que se crucen)
        mobileMenu.classList.toggle('is-active');
    });

    // Cerrar el menú si se hace clic en un enlace (en móvil)
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Validación y Envío del Formulario (Simulación) ---
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe realmente

        // Obtener los datos del formulario
        const formData = new FormData(contactForm);
        const nombre = formData.get('nombre');
        const email = formData.get('email');

        // Aquí iría la lógica para enviar los datos a un servidor real (ej. usando fetch())

        // Simular respuesta del servidor
        formResponse.innerHTML = 'Enviando...';
        formResponse.style.color = '#333';

        setTimeout(() => {
            // Suponemos éxito
            formResponse.innerHTML = `¡Gracias, ${nombre}! Un especialista en IA se contactará con ${email} pronto.`;
            formResponse.style.color = 'green';
            contactForm.reset(); // Limpiar el formulario
        }, 1500); // Espera 1.5 segundos
    });
});