const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btnOverlay = document.querySelector('.btn-overlay')

const card = document.querySelector('.card')
const kayak = document.querySelector('.kayak')
const water = document.querySelector('.water')
const stone = document.querySelector('.stone')

const camp = document.querySelector('.camp')
const ivy = document.querySelector('.ivy')
const ivyRock = document.querySelector('.ivyRock')

btn1.addEventListener('click', () => {
    btnOverlay.classList.remove('active')
    btn1.classList.add('active')
    btn2.classList.remove('active')

    card.classList.remove('active')
    kayak.classList.add('active')
    water.classList.add('active')
    stone.classList.add('active')

    camp.classList.remove('active')
    ivy.classList.remove('active')
    ivyRock.classList.remove('active')
    

})

btn2.addEventListener('click', () => {
    btnOverlay.classList.add('active')
    btn2.classList.add('active')
    btn1.classList.remove('active')

    card.classList.add('active')
    kayak.classList.remove('active')
    water.classList.remove('active')
    stone.classList.remove('active')

    camp.classList.add('active')
    ivy.classList.add('active')
    ivyRock.classList.add('active')




})