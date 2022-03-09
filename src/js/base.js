import { machine } from "./test_machine.js";
import { player } from "./test_player.js";

const box_blue = document.getElementById('blue');
const box_red = document.getElementById('red');
const box_yellow = document.getElementById('yellow');
const box_green = document.getElementById('green')

function showSequenceColors() {
    let time = 500;
    machine.random.forEach((value) => {
        if (value.toLowerCase() === box_blue.id.toLowerCase()) {
            box_blue.classList.add('animationblue');

        }
        if (value.toLowerCase() === box_green.id.toLowerCase()) {
            box_green.classList.add('animationgreen');

        }
        if (value.toLowerCase() === box_red.id.toLowerCase()) {
            box_red.classList.add('animationred');

        }
        if (value.toLowerCase() === box_yellow.id.toLowerCase()) {
            box_yellow.classList.add('animationyellow');
        }
    });
}

function showAgain() {
    setTimeout(function () {

        machine.sequenceColors()
        console.log('array machine' + machine.random)
        showSequenceColors()
    }, 500)
}

function endGame() {
    const divCenter = document.querySelector('.center');
    const paragraph = document.createElement('p');
    divCenter.innerHTML = ""

    paragraph.innerHTML = "Você errou a sequência!"
    divCenter.appendChild(paragraph)

    setTimeout((() => {
        const section = document.querySelector('section');
        section.innerHTML = ''

        const btn_play_again = document.createElement('button');
        btn_play_again.innerText = 'jogar novamente'

        section.appendChild(btn_play_again);
        section.classList.add('box_button')
    }), 2000)

}

export { showSequenceColors, showAgain, endGame }

