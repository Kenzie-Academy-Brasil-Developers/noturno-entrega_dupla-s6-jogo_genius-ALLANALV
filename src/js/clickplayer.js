import { verification } from "./verification.js"

class playerArray {
    constructor() {
        this.playerArray = []
        this.playerScore = 0
    }
}

const player = new playerArray()

const blueDiv = document.getElementById('blue')
const redDiv = document.getElementById('red')
const greenDiv = document.getElementById('green')
const yellowDiv = document.getElementById('yellow')

blueDiv.addEventListener('click', function () {
    player.playerArray.push('blue')

    blueDiv.classList.replace('darkBlue', 'ligthBlue')
    
    setTimeout(() => {
        blueDiv.classList.replace('ligthBlue', 'darkBlue')
    }, 400)

    verification()

})

redDiv.addEventListener('click', function () {
    player.playerArray.push('red')
    
    redDiv.classList.replace('darkRed', 'ligthRed')
    
    setTimeout(() => {
        redDiv.classList.replace('ligthRed', 'darkRed')
    }, 400)

    verification()

})

greenDiv.addEventListener('click', function () {
    player.playerArray.push('green')

    greenDiv.classList.replace('darkGreen', 'ligthGreen')
    
    setTimeout(() => {
        greenDiv.classList.replace('ligthGreen', 'darkGreen')
    }, 400)
    
    verification()

})

yellowDiv.addEventListener('click', function () {
    player.playerArray.push('yellow')

    yellowDiv.classList.replace('darkYellow', 'ligthYellow')

    setTimeout(() => {
        yellowDiv.classList.replace('ligthYellow', 'darkYellow')
    }, 400)

    verification()

})

export { player }

