const box_red = document.getElementById('red');
const box_blue = document.getElementById('blue');
const box_green = document.getElementById('green');
const box_yellow = document.getElementById('yellow');

class Genius {
    constructor() {
        this.random = [];

        this.randomGame = function () {
            let target_color = Math.floor(Math.random() * 4);
            return target_color
        }

        this.sequenceColors = function () {

            const variable_result = this.randomGame()
            if (variable_result === 0) {
                this.random.push('RED')
            } else if (variable_result === 1) {
                this.random.push('BLUE')
            } else if (variable_result === 2) {
                this.random.push('GREEN')
            } else {
                this.random.push('YELLOW')
            }

            //for (let index = 0; index < 15; index++) {
            //    const variable_result = this.randomGame()
            //
            //    if (variable_result === 0) {
            //        array.push('RED')
            //    } else if (variable_result === 1) {
            //        array.push('BLUE')
            //    } else if (variable_result === 2) {
            //        array.push('GREEN')
            //    } else {
            //        array.push('YELLOW')
            //    }
            //}
        }
    }
}

const machine = new Genius()

function brilha(elem) {
    for (let index = 0; index < machine.random.length; index++) {

        if (elem.id.toLowerCase() === machine.random[index].toLowerCase()) {
            elem.classList.add('animation' + elem.id)
        }
    }
}

machine.sequenceColors()

brilha(box_red);
brilha(box_green);
brilha(box_yellow);
brilha(box_blue);

setTimeout(() => {
    machine.sequenceColors()

    brilha(box_red);
    brilha(box_green);
    brilha(box_yellow);
    brilha(box_blue);

}, 3000)

