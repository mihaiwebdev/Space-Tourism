const navbar = document.getElementById('navbar');
const header = document.querySelector('.header-content')
const planet = document.querySelector('.planet');
const descriptionInfo = document.querySelector('.info');
const destination = document.getElementById('hero-destination');
const planetNav = document.querySelector('.planet-nav');
const planetImg = document.querySelector('.planet-img');
const planetName = document.querySelector('.planet-name');
const planetInfo = document.getElementById('planet-lead');
const toPlanetKm = document.querySelector('.km');
const planetTravelTime = document.querySelector('.days');
const moon = document.querySelector('.moon');
const mars = document.querySelector('.mars');
const europa = document.querySelector('.europa');
const titan = document.querySelector('.titan');

const spinner = document.createElement('div')
spinner.className = 'spinner'

let loading = true;


async function getData() {
    const res = await fetch('./js/data.json');
    const data = await res.json();
    loading = false
    return data;

}

// Finger Swipe
let touchstartX = 0
let touchendX = 0
let i = 0;

async function checkDirection() {
    loading = true
    loading ? header.appendChild(spinner) : header.removeChild(spinner)
    const data = await getData();

    if (touchendX + 30 < touchstartX) {
        i++;
        if (i >= data.destinations.length) {
            i = 0
        }

        moon.classList.remove('active')
        mars.classList.remove('active');
        europa.classList.remove('active');
        titan.classList.remove('active');

        planetNav.children[i].classList.add('active');

        planetName.className = 'planet-name hide';
        setTimeout(() => {
            planetName.className = 'planet-name show';
            planetName.innerHTML = `${data.destinations[i].name}`
        }, 500);

        planetInfo.className = 'lead hide'
        setTimeout(() => {
            planetInfo.className = 'lead show'
            planetInfo.innerHTML = `${data.destinations[i].description}`
        }, 500);

        toPlanetKm.className = 'km hide'
        setTimeout(() => {
            toPlanetKm.className = 'km show';
            toPlanetKm.innerHTML = `${data.destinations[i].distance}`

        }, 500);

        planetTravelTime.className = 'days hide'
        setTimeout(() => {
            planetTravelTime.className = 'days show'
            planetTravelTime.innerHTML = `${data.destinations[i].travel}`
        }, 500);



        planetImg.classList.remove('rotate');
        planetImg.style.background = `url(${data.destinations[i].images.webp})no-repeat center center /cover`
        setTimeout(() => {
            planetImg.classList.add('rotate');
        }, 500);



    }

    if (touchendX - 30 > touchstartX) {
        i--;
        if (i < 0) {
            i = data.destinations.length - 1;
        }

        moon.classList.remove('active')
        mars.classList.remove('active');
        europa.classList.remove('active');
        titan.classList.remove('active');

        planetNav.children[i].classList.add('active');

        planetName.className = 'planet-name hide';
        setTimeout(() => {
            planetName.className = 'planet-name show';
            planetName.innerHTML = `${data.destinations[i].name}`
        }, 300);

        planetInfo.className = 'lead hide'
        setTimeout(() => {
            planetInfo.className = 'lead show'
            planetInfo.innerHTML = `${data.destinations[i].description}`
        }, 300);

        toPlanetKm.className = 'km hide'
        setTimeout(() => {
            toPlanetKm.className = 'km show';
            toPlanetKm.innerHTML = `${data.destinations[i].distance}`

        }, 300);

        planetTravelTime.className = 'days hide'
        setTimeout(() => {
            planetTravelTime.className = 'days show'
            planetTravelTime.innerHTML = `${data.destinations[i].travel}`
        }, 300);



        planetImg.classList.remove('rotate');
        planetImg.style.background = `url(${data.destinations[i].images.webp})no-repeat center center /cover`
        setTimeout(() => {
            planetImg.classList.add('rotate');
        }, 300);


    }
    loading ? header.appendChild(spinner) : header.removeChild(spinner)
}


planet.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX


})

planet.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection();


})

const fetchData = async (e) => {
    loading = true
    loading ? header.appendChild(spinner) : header.removeChild(spinner)
    const data = await getData();

    if (e.target.classList.contains('moon')) {

        e.target.classList.add('active')
        mars.classList.remove('active');
        europa.classList.remove('active');
        titan.classList.remove('active');


        planetImg.style.background = `url(${data.destinations[0].images.webp})no-repeat center center /cover`
        planetImg.classList.remove('rotate');
        setTimeout(() => {
            planetImg.classList.add('rotate');
        }, 500);

        planetName.className = 'planet-name hide';
        setTimeout(() => {
            planetName.className = 'planet-name show';
            planetName.innerHTML = `${data.destinations[0].name}`
        }, 500);

        planetInfo.className = 'lead hide'
        setTimeout(() => {
            planetInfo.className = 'lead show'
            planetInfo.innerHTML = `${data.destinations[0].description}`
        }, 500);

        toPlanetKm.className = 'km hide'
        setTimeout(() => {
            toPlanetKm.className = 'km show';
            toPlanetKm.innerHTML = `${data.destinations[0].distance}`

        }, 500);

        planetTravelTime.className = 'days hide'
        setTimeout(() => {
            planetTravelTime.className = 'days show'
            planetTravelTime.innerHTML = `${data.destinations[0].travel}`
        }, 500);
    }


    if (e.target.classList.contains('mars')) {
        e.target.classList.add('active')
        moon.classList.remove('active');
        europa.classList.remove('active');
        titan.classList.remove('active');


        planetImg.classList.remove('rotate');
        planetImg.style.background = `url(${data.destinations[1].images.webp})no-repeat center center /cover`
        setTimeout(() => {
            planetImg.classList.add('rotate');
        }, 500);

        planetName.className = 'planet-name hide';
        setTimeout(() => {
            planetName.className = 'planet-name show';
            planetName.innerHTML = `${data.destinations[1].name}`
        }, 500);

        planetInfo.className = 'lead hide'
        setTimeout(() => {
            planetInfo.className = 'lead show'
            planetInfo.innerHTML = `${data.destinations[1].description}`
        }, 500);


        toPlanetKm.className = 'km hide'
        setTimeout(() => {
            toPlanetKm.className = 'km show';
            toPlanetKm.innerHTML = `${data.destinations[1].distance}`

        }, 500);


        planetTravelTime.className = 'days hide'
        setTimeout(() => {
            planetTravelTime.className = 'days show'
            planetTravelTime.innerHTML = `${data.destinations[1].travel}`
        }, 500);

    }

    if (e.target.classList.contains('europa')) {
        e.target.classList.add('active')
        moon.classList.remove('active');
        mars.classList.remove('active');
        titan.classList.remove('active');


        planetImg.classList.remove('rotate');
        planetImg.style.background = `url(${data.destinations[2].images.webp})no-repeat center center /cover`
        setTimeout(() => {
            planetImg.classList.add('rotate');
        }, 500);

        planetName.className = 'planet-name hide';
        setTimeout(() => {
            planetName.className = 'planet-name show';
            planetName.innerHTML = `${data.destinations[2].name}`
        }, 500);

        planetInfo.className = 'lead hide'
        setTimeout(() => {
            planetInfo.className = 'lead show'
            planetInfo.innerHTML = `${data.destinations[2].description}`
        }, 500);


        toPlanetKm.className = 'km hide'
        setTimeout(() => {
            toPlanetKm.className = 'km show';
            toPlanetKm.innerHTML = `${data.destinations[2].distance}`

        }, 500);

        planetTravelTime.className = 'days hide'
        setTimeout(() => {
            planetTravelTime.className = 'days show'
            planetTravelTime.innerHTML = `${data.destinations[2].travel}`
        }, 500);

    }

    if (e.target.classList.contains('titan')) {
        e.target.classList.add('active')
        moon.classList.remove('active');
        mars.classList.remove('active');
        europa.classList.remove('active');


        planetImg.classList.remove('rotate');
        planetImg.style.background = `url(${data.destinations[3].images.webp})no-repeat center center /cover`
        setTimeout(() => {
            planetImg.classList.add('rotate');
        }, 500);

        planetName.className = 'planet-name hide';
        setTimeout(() => {
            planetName.className = 'planet-name show';
            planetName.innerHTML = `${data.destinations[3].name}`
        }, 500);

        planetInfo.className = 'lead hide'
        setTimeout(() => {
            planetInfo.className = 'lead show'
            planetInfo.innerHTML = `${data.destinations[3].description}`
        }, 500);

        toPlanetKm.className = 'km hide'
        setTimeout(() => {
            toPlanetKm.className = 'km show';
            toPlanetKm.innerHTML = `${data.destinations[3].distance}`

        }, 500);

        planetTravelTime.className = 'days hide'
        setTimeout(() => {
            planetTravelTime.className = 'days show'
            planetTravelTime.innerHTML = `${data.destinations[3].travel}`
        }, 500);

    }


    loading ? header.appendChild(spinner) : header.removeChild(spinner)
}

planetNav.addEventListener('click', fetchData);


window.addEventListener('load', () => {
    destination.classList.add('show');
    planetImg.classList.add('rotate');
    planet.classList.add('show');
    descriptionInfo.classList.add('show');
})
