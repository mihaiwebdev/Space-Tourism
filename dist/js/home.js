const homeHero = document.getElementById('hero');
const navbar = document.getElementById('navbar');
const planet = document.querySelector('.planet');
const descriptionInfo = document.querySelector('.info');


window.addEventListener('load', () => {
    navbar.classList.add('show');
    planet.classList.add('show');
    descriptionInfo.classList.add('show');
    homeHero.classList.add('show');
})