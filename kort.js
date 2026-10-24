// Kontaktkorten: på mobil (ingen hover) visar första trycket knappen,
// andra trycket gör handlingen (ringer, mejlar, öppnar kartan osv.).
const kort = document.querySelectorAll('.kontaktkort a');
const harHover = window.matchMedia('(hover: hover)');

kort.forEach(function (lank) {
    lank.addEventListener('click', function (e) {
        if (harHover.matches) return;
        if (!lank.classList.contains('aktiv')) {
            e.preventDefault();
            kort.forEach(function (annan) { annan.classList.remove('aktiv'); });
            lank.classList.add('aktiv');
        }
    });
});

// Tryck utanför korten stänger knappen igen
document.addEventListener('click', function (e) {
    if (!e.target.closest('.kontaktkort a')) {
        kort.forEach(function (lank) { lank.classList.remove('aktiv'); });
    }
});
