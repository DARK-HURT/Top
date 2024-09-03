const topItems = [
    'Top #1: Mejor Jugador',
    'Top #2: Mejores Jugadas',
    'Top #3: Mejores Momentos',
    // Agrega más elementos de tu top aquí
];

let currentIndex = 0;
const textElement = document.getElementById('top-item');

function updateText() {
    textElement.textContent = topItems[currentIndex];
    currentIndex = (currentIndex + 1) % topItems.length;
}

setInterval(updateText, 5000); // Cambia cada 5 segundos