const fallingText = document.querySelector('.falling-text');

// Generar la forma de un corazón usando palabras "Te amo"
const heartPattern = [
    "       Te amo amo       ",
    "    Te amo Te amo Te amo    ",
    "  Te amo Te amo Te amo Te   ",
    "Te amo Te amo Te amo Te amo ",
    " Te amo Te amo Te amo Te am",
    "   Te amo Te amo Te amo Te a  ",
    "     Te amo Te amo Te amo    ",
    "        Te amo Te amo       ",
    "          Te amo            "
];

// Crear un flujo continuo de texto
function generateFallingText() {
    const repeatedPattern = heartPattern.join('\n').repeat(10); // Repetir varias veces
    fallingText.innerText = repeatedPattern;
}

// Inicializar el contenido
generateFallingText();
