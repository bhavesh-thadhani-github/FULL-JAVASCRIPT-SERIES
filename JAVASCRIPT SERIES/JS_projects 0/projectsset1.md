# Projects realted to DOM

## project link

# Solution Code

## project 1

```javascript

## project 1 solution code:
//Here we are creating another box with purple color 
const purpleBox = document.createElement('div')
purpleBox.id = 'purple'
purpleBox.className = 'button'
purpleBox.style.backgroundColor = 'purple'
document.body.appendChild(purpleBox)
//Inserting the purple box in parent div with class 'box'
const parent = document.querySelector('.box')
parent.appendChild(purpleBox)

//The main code starts from here:
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target); //tells you that where does this even coming from(eg: div, span, h1, etc.)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
    })
})


## project 2 solution code:
const form = document.querySelector('form')

const div = document.createElement('div')
div.id = 'remarks'
form.appendChild(div)

form.addEventListener('submit',function(e){
    e.preventDefault()  //this preventDefault stops the data to submit to the server

    const height = parseInt(document.querySelector('#height').value ) //if we write this outside this function(global) then it 'll take empty value(when the page 'll load) We don't need Empty values.
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height <=30 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi =(weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            div.innerHTML = 'You are UNDERWEIGHT'
        }else if(bmi > 24.9){
            div.innerHTML = 'You are OVERWEIGHT'
        }else{
            div.innerHTML = 'You are NORMAL'
        }
    }
})

## project 3 solution code:
const clock = document.getElementById('clock')

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


## project 4 solution code:
let randomNumber = parseInt(Math.random() * 100 + 1);

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
}


