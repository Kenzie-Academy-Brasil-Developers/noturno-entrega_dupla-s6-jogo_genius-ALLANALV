import { machine } from "./test_machine.js";
import { playerArray } from "./test_player.js";

const buttonStart = document.getElementById('btn-send')

buttonStart.addEventListener('click', function(){
    const divCenter = document.querySelector('.center')

    divCenter.innerHTML = ""

    setTimeout(function() {
    machine.sequenceColors()
        
     }, 1000)
})


function verification () {

    if (machine.random.length === playerArray.length) {

        for (let counter = 0; counter < playerArray.length; counter++){
            if (machine.random[counter] !== playerArray[counter]){
                fimJogo()
            }
        }

        machine.sequenceColors()
    }

}

export {verification}