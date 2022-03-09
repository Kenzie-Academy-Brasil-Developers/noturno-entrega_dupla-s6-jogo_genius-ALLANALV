import { machine } from "./test_machine.js";

const box_blue = document.getElementById('blue');
const box_red = document.getElementById('red');
const box_yellow = document.getElementById('yellow');
const box_green = document.getElementById('green')

function showSequenceColors() {
    machine.random.forEach((value, index) => {
        if (value.toLowerCase() === box_blue.id.toLowerCase()) {
            setTimeout(() => {
                box_blue.classList.add('animationblue');
            }, index * 1000)

        }
        if (value.toLowerCase() === box_green.id.toLowerCase()) {
            setTimeout(() => {
                box_green.classList.add('animationgreen');
            }, index * 1000)

        }
        if (value.toLowerCase() === box_red.id.toLowerCase()) {
            setTimeout(() => {
                box_red.classList.add('animationred');
            }, index * 1000)

        }
        if (value.toLowerCase() === box_yellow.id.toLowerCase()) {
            setTimeout(() => {
                box_yellow.classList.add('animationyellow');
            }, index * 1000)
        }
    });
}

function showAgain() {
    setTimeout(function () {

        machine.sequenceColors()
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

