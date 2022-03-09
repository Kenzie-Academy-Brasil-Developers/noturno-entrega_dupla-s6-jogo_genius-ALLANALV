import { machine } from "./test_machine.js";
import { playerArray } from "./test_player.js";

const box_blue = document.getElementById('blue');
const box_red = document.getElementById('red');
const box_yellow = document.getElementById('yellow');
const box_green = document.getElementById('green')

function showSequenceColors() {

    machine.random.forEach((value) => {
        if (value.toLowerCase() === box_blue.id.toLowerCase()) {
            box_blue.classList.add('animationblue');
            setTimeout(function(){
                box_blue.classList.remove('animationblue')
            }, 500)
        }
        if (value.toLowerCase() === box_green.id.toLowerCase()) {
            box_green.classList.add('animationgreen');
            setTimeout(function(){
                box_green.classList.remove('animationblue')
            }, 500)

        }
        if (value.toLowerCase() === box_red.id.toLowerCase()) {
            box_red.classList.add('animationred');
            setTimeout(function(){
                box_red.classList.remove('animationblue')
            }, 500)

        }
        if (value.toLowerCase() === box_yellow.id.toLowerCase()) {
            box_yellow.classList.add('animationyellow');
            setTimeout(function(){
                box_yellow.classList.remove('animationblue')
            }, 500)

        }
    });
}

function showAgain() {
    for (let counter = 0; counter < playerArray.length; counter++){
        playerArray.pop()
    }
    setTimeout(function () {
       
        machine.sequenceColors()
        showSequenceColors()
    }, 500)
}

function endGame() {
    const divCenter = document.querySelector('.center')
    const paragraph = document.createElement('p')
    divCenter.innerHTML = ""

    paragraph.innerHTML = "Você errou a sequência"

    divCenter.appendChild(paragraph)

}

export { showSequenceColors, showAgain, endGame }

