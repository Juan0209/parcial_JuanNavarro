 // Función para desplazar suavemente hacia arriba
 function scrollUp(pixels) {
    window.scrollBy({
        top: -pixels,
        behavior: 'smooth'
    });
}

// Seleccionamos todos los enlaces
const links = document.querySelectorAll('a[href^="#"]');

// Agregamos un evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', (event) => {
        // Evitamos el comportamiento por defecto del enlace
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazamos suavemente hasta el elemento objetivo
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Luego, después de 0.2 segundos, desplazamos 10px hacia arriba
        setTimeout(() => {
        scrollUp(100);
        }, 10);
    });
});