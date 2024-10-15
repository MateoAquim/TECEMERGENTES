document.addEventListener('DOMContentLoaded', () => {
    // Menú de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Carrusel de imágenes
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');
    let currentSlideIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = slides.length - 1;
        }
        updateSlidePosition();
    });

    // Validación del formulario de contacto
    const form = document.querySelector('#contacto form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío del formulario por defecto
        const nombre = document.querySelector('#nombre');
        const email = document.querySelector('#email');
        const mensaje = document.querySelector('#mensaje');

        if (nombre.value.trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            nombre.focus();
            return;
        }

        if (!validateEmail(email.value)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            email.focus();
            return;
        }

        if (mensaje.value.trim() === '') {
            alert('Por favor, ingresa un mensaje.');
            mensaje.focus();
            return;
        }

        form.submit(); // Si todo es válido, envía el formulario
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
