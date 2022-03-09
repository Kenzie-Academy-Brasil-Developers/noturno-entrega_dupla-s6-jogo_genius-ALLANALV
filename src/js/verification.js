import { endGame, showAgain, showSequenceColors } from "./base.js";
import { machine } from "./test_machine.js";
import { playerArray } from "./test_player.js";

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
    
    
    if (machine.random.length === playerArray.length) {

        for (let counter = 0; counter < machine.random.length; counter++) {
            if (machine.random[counter].toLowerCase() !== playerArray[counter].toLowerCase()) {
                console.log(machine.random[counter])
                console.log(playerArray[counter])
                endGame()
            }
        }
        
       
       
        const box_blue = document.getElementById('blue');
        const box_red = document.getElementById('red');
        const box_yellow = document.getElementById('yellow');
        const box_green = document.getElementById('green');

        box_blue.classList.remove('animationblue');
        box_red.classList.remove('animationred');
        box_yellow.classList.remove('animationyellow');
        box_green.classList.remove('animationgreen');
        
        showAgain()
        console.log('array machine' + machine.random)
    }

}

export { verification }