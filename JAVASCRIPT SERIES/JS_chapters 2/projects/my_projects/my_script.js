

//USING SWITCH CASE
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

 /*buttons.forEach( (button) => {
     console.log(button);
 } )*/
 buttons.forEach(function (but) {
     console.log(but);
     but.addEventListener('click', function (e) {
       console.log(e);
       console.log(e.target);
       switch (e.target.id) {
        case 'grey':
          body.style.backgroundColor = 'grey'
          break;
        case 'blue':
          body.style.backgroundColor = 'blue'
          break;
        case 'yellow':
          body.style.backgroundColor = 'yellow'
          break;
        case 'white':
          body.style.backgroundColor = 'white'
          break;
        case 'purple':
          body.style.backgroundColor = 'purple'
          break;
        default:
          break;
       }
     });
   });