import { machine } from "./sequenceColors.js";
import { player } from "./clickplayer.js";

function initialGame() {
    const divCenter = document.querySelector('.center')

    divCenter.innerHTML = ""
    const p = document.createElement('p')
    const span = document.createElement('span')
    divCenter.appendChild(p)
    divCenter.appendChild(span)

    setTimeout(function () {
        machine.sequenceColors()
        showSequenceColors()
    }, 500);
}

const box_blue = document.getElementById('blue');
const box_red = document.getElementById('red');
const box_yellow = document.getElementById('yellow');
const box_green = document.getElementById('green')

function showSequenceColors() {
    machine.random.forEach((value, index) => {
        setTimeout(teste(value, index), 400)
    });

}

function teste(value, index) {
    
    if (value.toLowerCase() === box_blue.id.toLowerCase()) {
       
        setTimeout(() => {
            box_blue.classList.replace('darkBlue', 'ligthBlue')
        }, (index + 1) * 1000)

        setTimeout(() => {
            box_blue.classList.replace('ligthBlue', 'darkBlue')
        }, (index + 1) * 1200)

    }

    if (value.toLowerCase() === box_green.id.toLowerCase()) {
       
        setTimeout(() => {
            box_green.classList.replace('darkGreen', 'ligthGreen')
        }, (index + 1) * 1000)

        setTimeout(() => {
            box_green.classList.replace('ligthGreen', 'darkGreen')
        }, (index + 1) * 1200)


    }

    if (value.toLowerCase() === box_red.id.toLowerCase()) {
        
        setTimeout(() => {
            box_red.classList.replace('darkRed', 'ligthRed')
        }, (index + 1) * 1000)

        setTimeout(() => {
            box_red.classList.replace('ligthRed', 'darkRed')
        }, (index + 1) * 1200)

    }

    if (value.toLowerCase() === box_yellow.id.toLowerCase()) {
        
        setTimeout(() => {
            box_yellow.classList.replace('darkYellow', 'ligthYellow')
        }, (index + 1) * 1000)

        setTimeout(() => {
            box_yellow.classList.replace('ligthYellow', 'darkYellow')
        }, (index + 1) * 1200)

    }
}

function showAgain() {
    player.playerArray = []
    setTimeout(function () {

        machine.sequenceColors()
        showSequenceColors()
    }, 500)
}

function endGame() {
    const divCenter = document.querySelector('.center');
    const paragraph = document.querySelector('p');
    const resultPlayer = document.querySelector('span')
    paragraph.innerHTML = "Você errou a sequência!"
    resultPlayer.innerHTML = `Número de acertos ${player.playerScore}`

    const btn_play_again = document.createElement('button');
    btn_play_again.innerText = 'jogar novamente'

    

    divCenter.appendChild(btn_play_again);


    btn_play_again.addEventListener('click', playAgain)
}

function keepGood() {

    const paragraph = document.querySelector('p');
    paragraph.innerHTML = "Muito Bem! Continue assim.";

    setTimeout(() => {
        paragraph.innerText = ""
    }, 1000)

}

function playAgain() {
    const divCenter = document.querySelector('.center')
    divCenter.innerHTML = ""

    const h1 = document.createElement('h1')
    const form = document.createElement('form')
    const p = document.createElement('p')
    const inputText = document.createElement('input')
    const inputSubmit = document.createElement('input')

    inputText.setAttribute('type', 'text')
    inputSubmit.setAttribute('type', 'submit')
    inputSubmit.setAttribute('id', 'btn-send')
    inputSubmit.setAttribute('value', 'start')

    h1.innerText = "Vamos Jogar"
    p.innerText = "nome do jogador"

    form.appendChild(p)
    form.appendChild(inputText)
    form.appendChild(inputSubmit)
    divCenter.appendChild(h1)
    divCenter.appendChild(form)

    inputSubmit.addEventListener('click', showFormAgain)
}

function showFormAgain() {

    const divCenter = document.querySelector('.center')
    divCenter.innerHTML = ""
    const p = document.createElement('p')
    const span = document.createElement('span')
    divCenter.appendChild(p)
    divCenter.appendChild(span)

    const box_blue = document.getElementById('blue');
    const box_red = document.getElementById('red');
    const box_yellow = document.getElementById('yellow');
    const box_green = document.getElementById('green');

    box_blue.classList.remove('animationblue');
    box_red.classList.remove('animationred');
    box_yellow.classList.remove('animationyellow');
    box_green.classList.remove('animationgreen');
    player.playerScore = 0
    player.playerArray = []
    
    setTimeout(function () {
        machine.sequenceColors()
        showSequenceColors()
    }, 500)

}

export { initialGame, showSequenceColors, showAgain, endGame, keepGood }

