const randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

// 1)
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid Number` )
    }else if(guess <= 0){
        alert(`Please enter a Number Greater than 0` )
    }else if(guess > 100){
        alert(`Please enter a Number Less than 100` )
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GAME OVER! The Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// 2)
function checkGuess(guess){
    if(guess === randomNumber){
        // displayGuess(guess)
        displayMessage('WOWW! YOU GUESS THE CORRECT NUMBER')
        endGame()
    }else if(guess > randomNumber){
        // displayGuess(guess)
        displayMessage(`Your Number is TOOO HIGH!`)
    }else if(guess < randomNumber){
        // displayGuess(guess)
        displayMessage(`Your Number is TOOO LOW!`)
    }
}

// 3)
function displayGuess(guess){ //partially problematic
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `    
    numGuess++
    remaining.innerHTML = `${11 - numGuess}` //problematic
}

// 4)
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// 5)
function endGame(){ //full problematic
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'>Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

// 6)
function newGame(){ //DUE
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
            randomNumber = parseInt(Math.random()*100+1)
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)

            playGame = true
    })
}








/*let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

// To check whether the User is allowed or not to play the Game
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

// 1) To Validate User Input
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if(guess <= 0){
        alert('Please enter a Number Greater than 1')
    }else if(guess >= 100){
        alert('Please enter a Number Less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GAME OVER! Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// 2) To Check User's Guess
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed it RIGHT!')
        endGame()
    }else if(guess < randomNumber){
        displayMessage('Number is TOOO LOW!')
    }else if(guess > randomNumber){
        displayMessage('Number is TOOO HIGH!')
    }
}

// 3) To Display User's Guess
//  1. Clean the Input Field(For New Value)
//  2. Update the Array for Previous Guesses
//  3. Also Update the Remaining Guess
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

// 4)Take the message(Input) from the User & Display Result [Interact with DOM]
//  Print the Message (whether the Number is Low or High) in lowOrHigh
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// 5) To End the Game
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '') //To disable User's Input
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'>Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()    
}

// 6) To Restart (New Game)
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`        
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)        

        playGame = true
    })
}*/


