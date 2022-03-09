import { machine } from "./test_machine.js"
import { verification } from "./verification.js"

let playerArray = []

const blueDiv = document.getElementById('blue')
const redDiv = document.getElementById('red')
const greenDiv = document.getElementById('green')
const yellowDiv = document.getElementById('yellow')

blueDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('azul')
        blueDiv.classList.add('animationblue')
        verification()
    }
})

redDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('vermelho')
        console.log(playerArray)
        redDiv.classList.add('animationRed')
        verification()
    }
})

greenDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('verde')
        console.log(playerArray)
        greenDiv.classList.add('animationgreen')
        verification()
    }
})

yellowDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('amarelo')
        console.log(playerArray)
        yellowDiv.classList.add('animationyellow')
        verification()
    }
})

export { playerArray }

