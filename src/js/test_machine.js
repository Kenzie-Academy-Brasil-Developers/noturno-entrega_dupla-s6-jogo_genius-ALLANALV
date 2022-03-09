import { showSequenceColors } from "./base.js";

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

        }
    }
}

const machine = new Genius()

export { machine }