const click_red = document.getElementById('red');
const click_blue = document.getElementById('blue');
const click_green = document.getElementById('green');
const click_yellow = document.getElementById('yellow');

class Genius {
    constructor() {
        this.random = [];

        this.randomGame = function () {
            let target_color = Math.floor(Math.random() * 4);
            return target_color
        }

        this.brigthColor = function () {

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
    //elem.classList.remove('animation' + elem.id)
}

machine.brigthColor()
console.log(machine.random)
brilha(click_red);
brilha(click_green);
brilha(click_yellow);
brilha(click_blue);