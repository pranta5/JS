let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#sbt')
const userInput = document.querySelector('#guess-field')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("enter a valid number")
    }else if(guess<1){
        alert('enter a number greater than 0')
    }else if (guess>100){
        alert('entera number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess>10){
            displayGuess(guess)
            dispalyMessage(`game over . Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if (guess === randomNumber) {
        dispalyMessage(` number matched`)
        endGame()
    }else if(guess < randomNumber){
        dispalyMessage(` number is low`)
    }else if(guess > randomNumber){
        dispalyMessage(` number is high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function dispalyMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start new Game </h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}