const mobNav = document.querySelector('.mobile-ul');
const hamburger = document.querySelector('.hamburger');



hamburger.addEventListener('click', () => {

    mobNav.classList.toggle('show');
    hamburger.classList.toggle('close');
})

