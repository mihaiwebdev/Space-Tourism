const navbar = document.getElementById('navbar');
const crewHero = document.getElementById('hero-crew');
const crewTitle = document.querySelector('.crew-title');
const charName = document.querySelector('.crew-name');
const crewLead = document.getElementById('crew-lead');
const charImg = document.querySelector('.char-photo');
const changeChar = document.querySelector('.change-char');
const dot = document.querySelectorAll('.dot');
const info = document.querySelector('.info');


async function getData() {

    const res = await fetch(`./js/data.json`);
    const data = await res.json();
    return data;

}



changeChar.addEventListener('click', async (e) => {

    const data = await getData();


    if (e.target.classList.contains('dot-one')) {
        info.className = 'info left'
        charImg.classList.remove('show');
        dot.forEach(dot => {
            dot.style.opacity = '17.44%'
        })
        e.target.style.opacity = '100%';
        setTimeout(() => {
            info.className = 'info';

            setTimeout(() => {
                info.className = 'info info-active';
                crewTitle.innerHTML = `${data.crew[0].role}`
                charName.innerHTML = `${data.crew[0].name}`
                crewLead.innerHTML = `${data.crew[0].bio}`
                charImg.style.background = `url(${data.crew[0].images.png})no-repeat 0% 0% /cover`
                charImg.className = 'char-photo doug show ';
            }, 200)

        }, 300)

    }

    if (e.target.classList.contains('dot-two')) {
        info.className = 'info left'
        charImg.classList.remove('show');
        dot.forEach(dot => {
            dot.style.opacity = '17.44%'
        })
        e.target.style.opacity = '100%';
        setTimeout(() => {
            info.className = 'info'


            setTimeout(() => {
                info.className = 'info info-active';
                crewTitle.innerHTML = `${data.crew[1].role}`
                charName.innerHTML = `${data.crew[1].name}`
                crewLead.innerHTML = `${data.crew[1].bio}`
                charImg.style.background = `url(${data.crew[1].images.png})no-repeat 0% 0% /cover`
                charImg.className = 'char-photo mark show ';
            }, 200)

        }, 300)
    }

    if (e.target.classList.contains('dot-three')) {
        info.className = 'info left'
        charImg.classList.remove('show');
        dot.forEach(dot => {
            dot.style.opacity = '17.44%'
        })
        e.target.style.opacity = '100%';
        setTimeout(() => {
            info.className = 'info';

            setTimeout(() => {
                info.className = 'info info-active';
                crewTitle.innerHTML = `${data.crew[2].role}`
                charName.innerHTML = `${data.crew[2].name}`
                crewLead.innerHTML = `${data.crew[2].bio}`
                charImg.style.background = `url(${data.crew[2].images.png})no-repeat center center /cover`
                charImg.className = 'char-photo victor show ';
            }, 200);

        }, 300)

    }

    if (e.target.classList.contains('dot-four')) {
        info.className = 'info left'
        charImg.classList.remove('show');
        dot.forEach(dot => {
            dot.style.opacity = '17.44%'
        })
        e.target.style.opacity = '100%';
        setTimeout(() => {
            info.className = 'info';

            setTimeout(() => {
                info.className = 'info info-active';
                crewTitle.innerHTML = `${data.crew[3].role}`
                charName.innerHTML = `${data.crew[3].name}`
                crewLead.innerHTML = `${data.crew[3].bio}`
                charImg.style.background = `url(${data.crew[3].images.png})no-repeat center center/cover`
                charImg.className = 'char-photo ansari show ';
            }, 200);

        }, 300)

    }

});

window.addEventListener('load', () => {
    info.className = 'info info-active';
    charImg.className = 'char-photo show';
    crewHero.classList.add('show');
    // navbar.classList.add('show');
})