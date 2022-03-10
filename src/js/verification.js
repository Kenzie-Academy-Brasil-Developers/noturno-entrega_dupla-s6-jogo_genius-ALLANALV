import { endGame, showAgain, showSequenceColors } from "./base.js";
import { machine } from "./test_machine.js";
import { player } from "./test_player.js";

const buttonStart = document.getElementById('btn-send')

buttonStart.addEventListener('click', function () {
    const divCenter = document.querySelector('.center')

    divCenter.innerHTML = ""

    setTimeout(function () {
        machine.sequenceColors()
        showSequenceColors()
    }, 500)
})


function verification() {
    
    if (player.playerArray.length <= machine.random.length) {
            
        for (let counter = 0; counter < player.playerArray.length; counter++) {
                if (machine.random[counter].toLowerCase() !== player.playerArray[counter].toLowerCase() ) {
                machine.random = []
                endGame()
                }
            }
        }
    
    if (machine.random.length === player.playerArray.length) {

        const box_blue = document.getElementById('blue');
        const box_red = document.getElementById('red');
        const box_yellow = document.getElementById('yellow');
        const box_green = document.getElementById('green');

        box_blue.classList.remove('animationblue');
        box_red.classList.remove('animationred');
        box_yellow.classList.remove('animationyellow');
        box_green.classList.remove('animationgreen');

        player.playerArray = []
        showAgain()
    }
}

export { verification }