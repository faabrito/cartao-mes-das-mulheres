const quotes = [
    "\"Onde há uma mulher, há magia e revolução.\"",
    "\"O lugar da mulher é onde ela quiser, inclusive no Groove!\"",
    "\"A força feminina move o mundo e dita o ritmo.\"",
    "\"Respeito, igualdade e admiração todos os dias.\"",
    "\"Mulheres no código e na música transformam o futuro.\""
];

const btn = document.getElementById('btnCelebrate');
const textEl = document.getElementById('quoteText');

btn.addEventListener('click', () => {
    // 1. Disparar Confetes
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6c5ce7', '#fd79a8', '#a29bfe']
    });

    // 2. Trocar a Frase com animação simples
    textEl.style.opacity = 0;
    
    setTimeout(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        textEl.innerText = randomQuote;
        textEl.style.opacity = 1;
    }, 300);
    // Adicione isso dentro do EventListener do botão, no script.js
const spotifyIcon = document.querySelector('.fa-spotify');

btn.addEventListener('click', () => {
    // ... código anterior (confetes e frases) ...

    // Easter egg: o ícone dá uma giradinha na comemoração
    spotifyIcon.style.transition = "transform 0.5s ease";
    spotifyIcon.style.transform = "rotate(360deg)";
    
    setTimeout(() => {
        spotifyIcon.style.transform = "rotate(0deg)";
    }, 500);
});
});