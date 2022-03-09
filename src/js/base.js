import { machine } from "./test_machine.js";
import { player } from "./test_player.js";

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

    const btn_play_again = document.createElement('button');
    btn_play_again.innerText = 'jogar novamente'

    divCenter.appendChild(btn_play_again);
        
        
    // btn_play_again.addEventListener('click', function(){
    
    //     divCenter.innerHTML = ""
        
    //     const h1 = document.createElement('h1')
    //     const form = document.createElement('form')
    //     const p = document.createElement('p')
    //     const inputText = document.createElement('input')
    //     const inputSubmit = document.createElement('input')
        
    //     inputText.setAttribute('type', 'text')
    //     inputSubmit.setAttribute('type', 'submit')
    //     inputSubmit.setAttribute('id', 'btn-send')
    //     inputSubmit.setAttribute('value', 'start')

    //     h1.innerText = "Vamos Jogar"
    //     p.innerText = "nome do jogador"

    //     form.appendChild(p)
    //     form.appendChild(inputText)
    //     form.appendChild(inputSubmit)
    //     divCenter.appendChild(h1)
    //     divCenter.appendChild(form)


    //     inputSubmit.addEventListener('click', function(){
            
    //         divCenter.innerHTML = ""
    //         const box_blue = document.getElementById('blue');
    //         const box_red = document.getElementById('red');
    //         const box_yellow = document.getElementById('yellow');
    //         const box_green = document.getElementById('green');
    
    //         box_blue.classList.remove('animationblue');
    //         box_red.classList.remove('animationred');
    //         box_yellow.classList.remove('animationyellow');
    //         box_green.classList.remove('animationgreen');
            
    //         player.playerArray = []
    //         machine.random = []

    //         setTimeout(function () {
    //             machine.sequenceColors()
    //             showSequenceColors()
    //         }, 500)
    //     })

    // })

}

export { showSequenceColors, showAgain, endGame }

