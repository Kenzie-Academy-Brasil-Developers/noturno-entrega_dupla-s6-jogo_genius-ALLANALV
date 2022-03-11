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
    verification()

})

redDiv.addEventListener('click', function () {
    player.playerArray.push('red')
    verification()

})

greenDiv.addEventListener('click', function () {
    player.playerArray.push('green')
    verification()

})

yellowDiv.addEventListener('click', function () {
    player.playerArray.push('yellow')
    verification()

})

export { player }

