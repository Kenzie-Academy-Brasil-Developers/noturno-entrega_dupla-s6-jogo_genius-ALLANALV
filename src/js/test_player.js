import { machine } from "./test_machine.js"
import { verification } from "./verification.js"

let playerArray = []

const blueDiv = document.getElementById('blue')
const redDiv = document.getElementById('red')
const greenDiv = document.getElementById('green')
const yellowDiv = document.getElementById('yellow')

blueDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('blue')
        console.log(playerArray)
        // blueDiv.classList.remove('animationblue');
        blueDiv.classList.add('animationblue')
        verification()
    }
})

redDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('red')
        console.log(playerArray)
        // redDiv.classList.remove('animationred');
        redDiv.classList.add('animationred')
        verification()
    }
})

greenDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('green')
        console.log(playerArray)
        // greenDiv.classList.remove('animationgreen');
        greenDiv.classList.add('animationgreen')
        verification()
    }
})

yellowDiv.addEventListener('click', function () {
    if (playerArray.length < machine.random.length) {
        playerArray.push('yellow')
        console.log(playerArray)
        // yellowDiv.classList.remove('animatioyellow');
        yellowDiv.classList.add('animationyellow')
        verification()
    }
})

export { playerArray }

