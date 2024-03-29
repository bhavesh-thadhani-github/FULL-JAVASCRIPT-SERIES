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


