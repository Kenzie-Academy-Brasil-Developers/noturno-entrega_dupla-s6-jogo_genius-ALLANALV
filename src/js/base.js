import { machine } from "./test_machine.js";

const box_blue = document.getElementById('blue');
const box_red = document.getElementById('red');
const box_yellow = document.getElementById('yellow');
const box_green = document.getElementById('green')

function showSequenceColors() {

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
        showSequenceColors()
    }, 500)
}
export { showSequenceColors, showAgain }