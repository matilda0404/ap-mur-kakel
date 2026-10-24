// "Till toppen"-knappen visas först när man har scrollat en bit ner på sidan
const toppKnapp = document.getElementById('tilltoppen');

function visaToppKnapp() {
    toppKnapp.classList.toggle('synlig', window.scrollY > 400);
}

window.addEventListener('scroll', visaToppKnapp);
visaToppKnapp();

// Stänger av menyns animation medan fönstret ändrar storlek,
// annars syns hamburgarmenyn glida ut när man går till en mindre skärm
let storlekTimer;
window.addEventListener('resize', function () {
    document.documentElement.classList.add('andrar-storlek');
    clearTimeout(storlekTimer);
    storlekTimer = setTimeout(function () {
        document.documentElement.classList.remove('andrar-storlek');
    }, 300);
});
