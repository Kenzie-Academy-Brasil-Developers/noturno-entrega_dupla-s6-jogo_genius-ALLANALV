import { endGame, initialGame, keepGood, showAgain } from "./base.js";
import { machine } from "./sequenceColors.js";
import { player } from "./clickplayer.js";

const buttonStart = document.getElementById('btn-send')



buttonStart.addEventListener('click', initialGame)


function verification() {

    if (player.playerArray.length <= machine.random.length) {

        for (let counter = 0; counter < player.playerArray.length; counter++) {
            if (machine.random[counter].toLowerCase() !== player.playerArray[counter].toLowerCase()) {
                machine.random = []
                endGame()
            }
        }
    }

    if (machine.random.length === player.playerArray.length) {
        keepGood()
        showAgain()
        player.playerScore+=1
    }
}

export { verification}
