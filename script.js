const fallingText = document.querySelector('.falling-text');

// Generar palabras "Te amo" repetidamente para rellenar el efecto
const teAmoArray = Array(200).fill('Te amo').join(' ');

// Agregar las palabras al contenedor
fallingText.innerHTML = teAmoArray;
