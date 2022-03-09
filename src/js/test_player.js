//import { machine } from "./test_machine.js"
import { verification } from "./verification.js"

class playerArray {
    constructor() {
        this.playerArray = []
    }
}

const player = new playerArray()

const blueDiv = document.getElementById('blue')
const redDiv = document.getElementById('red')
const greenDiv = document.getElementById('green')
const yellowDiv = document.getElementById('yellow')

blueDiv.addEventListener('click', function () {
    player.playerArray.push('blue')
    console.log(player.playerArray)
    // blueDiv.classList.remove('animationblue');
    //blueDiv.classList.add('animationblue')
    verification()

})

redDiv.addEventListener('click', function () {
    player.playerArray.push('red')
    console.log(player.playerArray)
    // redDiv.classList.remove('animationred');
    // redDiv.classList.add('animationred')
    verification()

})

greenDiv.addEventListener('click', function () {
    player.playerArray.push('green')
    console.log(player.playerArray)
    // greenDiv.classList.remove('animationgreen');
    //greenDiv.classList.add('animationgreen')
    verification()


})

yellowDiv.addEventListener('click', function () {
    player.playerArray.push('yellow')
    console.log(player.playerArray)
    // yellowDiv.classList.remove('animatioyellow');
    yellowDiv.classList.add('animationyellow')
    verification()



})

export { player }

