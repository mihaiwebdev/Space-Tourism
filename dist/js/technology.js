const navbar = document.getElementById('navbar');
const header = document.querySelector('.header-content')
const techHero = document.getElementById('hero-tech');
const descriptionInfo = document.querySelector('.info');
const launchInfo = document.querySelector('.launch-info');
const numbers = document.querySelector('.numbers');
const number = document.querySelectorAll('.num');
const stepName = document.querySelector('.name');
const lead = document.querySelector('.lead');
const rocket = document.querySelector('.rocket-image');
const rocketDiv = document.querySelector('.rocket');

const spinner = document.createElement('div')
spinner.className = 'spinner'

let loading = true;

async function getData() {

    const res = await fetch(`./js/data.json`);
    const data = await res.json();
    loading = false
    return data;

}


numbers.addEventListener('click', async (e) => {
    loading = true
    loading ? header.appendChild(spinner) : header.removeChild(spinner)
    const data = await getData();


    if (e.target.classList.contains('num-one')) {
        number.forEach((num) => {
            if (num.classList.contains('active-step')) {
                num.classList.remove('active-step')
            }
        })
        e.target.classList.add('active-step');
        launchInfo.className = 'launch-info hide'
        rocket.className = 'rocket-image hide'

        setTimeout(() => {
            launchInfo.className = 'launch-info';

            setTimeout(() => {
                launchInfo.className = 'launch-info show';
                stepName.innerHTML = `${data.technology[0].name}`
                lead.innerHTML = `${data.technology[0].description}`
                if (document.documentElement.clientWidth <= 1250 &&
                    document.documentElement.clientWidth > 745) {
                    rocket.style.background = `url(${data.technology[0].images.landscape})no-repeat 0% 80% /cover`
                } else if (document.documentElement.clientWidth <= 745) {
                    rocket.style.background = `url(${data.technology[0].images.portrait})no-repeat 0% 70% /cover`
                }
                else {
                    rocket.style.background = `url(${data.technology[0].images.portrait})no-repeat center center /cover`
                }

                rocket.className = 'rocket-image show'
            }, 200)

        }, 300)

    }

    if (e.target.classList.contains('num-two')) {
        number.forEach((num) => {
            if (num.classList.contains('active-step')) {
                num.classList.remove('active-step')
            }
        })
        e.target.classList.add('active-step');
        launchInfo.className = 'launch-info hide'
        rocket.className = 'rocket-image hide'

        setTimeout(() => {
            launchInfo.className = 'launch-info';

            setTimeout(() => {
                launchInfo.className = 'launch-info show';
                stepName.innerHTML = `${data.technology[1].name}`
                lead.innerHTML = `${data.technology[1].description}`
                if (document.documentElement.clientWidth <= 1250 &&
                    document.documentElement.clientWidth > 745) {
                    rocket.style.background = `url(${data.technology[1].images.landscape})no-repeat 0% 80% /cover`
                } else if (document.documentElement.clientWidth <= 745) {
                    rocket.style.background = `url(${data.technology[1].images.portrait})no-repeat 0% 90% /cover`
                }
                else {
                    rocket.style.background = `url(${data.technology[1].images.portrait})no-repeat center center /cover`
                }

                rocket.className = 'rocket-image show'
            }, 200)

        }, 300)

    }

    if (e.target.classList.contains('num-three')) {
        number.forEach((num) => {
            if (num.classList.contains('active-step')) {
                num.classList.remove('active-step')
            }
        })
        e.target.classList.add('active-step');
        launchInfo.className = 'launch-info hide'
        rocket.className = 'rocket-image hide'

        setTimeout(() => {
            launchInfo.className = 'launch-info';

            setTimeout(() => {
                launchInfo.className = 'launch-info show';
                stepName.innerHTML = `${data.technology[2].name}`
                lead.innerHTML = `${data.technology[2].description}`
                if (document.documentElement.clientWidth <= 1250 &&
                    document.documentElement.clientWidth > 745) {
                    rocket.style.background = `url(${data.technology[2].images.landscape})no-repeat 0% 60% /cover`
                } else if (document.documentElement.clientWidth <= 745) {
                    rocket.style.background = `url(${data.technology[2].images.portrait})no-repeat center 30% /cover`
                }
                else {
                    rocket.style.background = `url(${data.technology[2].images.portrait})no-repeat center center /cover`
                }

                rocket.className = 'rocket-image show'
            }, 200)

        }, 300)

    }
    loading ? header.appendChild(spinner) : header.removeChild(spinner)
})

window.addEventListener('load', () => {

    techHero.classList.add('show');
    descriptionInfo.classList.add('show');
    rocket.classList.add('show');
    rocketDiv.classList.add('load');

})