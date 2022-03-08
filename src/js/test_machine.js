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

export { machine }
// function brilha(elem) {
//     for (let index = 0; index < machine.random.length; index++) {
// 
//         if (elem.id.toLowerCase() === machine.random[index].toLowerCase()) {
//             elem.classList.add('animation' + elem.id)
//         }
//     }
// }

// box_blue.addEventListener('click', () => {
//     machine.sequenceColors()
//     console.log('array Machine:' + ' ' + machine.random)
//     arr_person.push('blue')
//     console.log(arr_person)
//     for (let index = 0; index < machine.random.length; index++) {
//         if (machine.random[index].toLowerCase() === arr_person[index].toLowerCase()) {
//             console.log('sequence equals')
//         } else {
//             console.log('sequece wrong!')
//             machine.random = []
//             arr_person = []
//         }
//     }
//     console.log('------')
//     console.log(machine.random)
//     console.log(arr_person)
// });
// 
// box_green.addEventListener('click', () => {
//     machine.sequenceColors()
//     console.log('array Machine:' + ' ' + machine.random)
//     arr_person.push('green')
//     console.log(arr_person)
//     for (let index = 0; index < machine.random.length; index++) {
//         if (machine.random[index].toLowerCase() === arr_person[index].toLowerCase()) {
//             console.log('sequence equals')
//         } else {
//             console.log('sequece wrong!')
//             machine.random = []
//             arr_person = []
//         }
//     }
//     console.log('------')
//     console.log(machine.random)
//     console.log(arr_person)
// })
// 
// box_red.addEventListener('click', () => {
//     machine.sequenceColors();
//     console.log('array Machine:' + ' ' + machine.random)
//     arr_person.push('red')
//     console.log(arr_person)
//     console.log(arr_person)
//     for (let index = 0; index < machine.random.length; index++) {
//         if (machine.random[index].toLowerCase() === arr_person[index].toLowerCase()) {
//             console.log('sequence equals')
//         } else {
//             console.log('sequece wrong!')
//             machine.random = []
//             arr_person = []
//         }
//     }
//     console.log('------')
//     console.log(machine.random)
//     console.log(arr_person)
// })
// box_yellow.addEventListener('click', () => {
//     machine.sequenceColors();
//     console.log('array Machine:' + ' ' + machine.random)
//     arr_person.push('yellow')
//     console.log(arr_person)
//     for (let index = 0; index < machine.random.length; index++) {
//         if (machine.random[index].toLowerCase() === arr_person[index].toLowerCase()) {
//             console.log('sequence equals')
//         } else {
//             console.log('sequece wrong!')
//             machine.random = []
//             arr_person = []
//         }
//     }
//     console.log('------')
//     console.log(machine.random)
//     console.log(arr_person)
// })


