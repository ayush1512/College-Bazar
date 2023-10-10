// Typewriter effect
const typeWriter = document.querySelector('.typewriter');
const text = typeWriter.innerHTML;
typeWriter.innerHTML = '';

let i = 0;
function typeWriterEffect() {
    if (i < text.length) {
        typeWriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriterEffect, 50);
    }
}
typeWriterEffect();