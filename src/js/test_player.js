import { verification } from "./verification.js"

let playerArray = []


const blueDiv = document.getElementById('blue')
const redDiv = document.getElementById('red')
const greenDiv = document.getElementById('green')
const yellowDiv = document.getElementById('yellow')

blueDiv.addEventListener('click', function() {
    playerArray.push('azul')
    blueDiv.classList.add('animationblue')
    verification()
})

redDiv.addEventListener('click', function() {
    playerArray.push('vermelho')
    redDiv.classList.add('animationRed')
    verification()
})

greenDiv.addEventListener('click', function() {
    playerArray.push('verde')
    greenDiv.classList.add('')
    verification()
})

yellowDiv.addEventListener('click', function() {
    playerArray.push('amarelo')
    verification()
})

export {playerArray}

