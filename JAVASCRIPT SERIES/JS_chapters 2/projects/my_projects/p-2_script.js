const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please provide a Valid Height ${height}`
    } else if
    (weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please provide a Valid Weight ${weight}`
    } else{
        results.innerHTML = `<span> ${bmi} </span>`
        const final = document.querySelector('#final-result')
        
        if(bmi <= 18.6){
            final.innerHTML = `You are Under Weight`
            results.style = 'border: 2px solid red'
        } else if(bmi >= 18.6 && bmi <= 24.9){
            final.innerHTML = `Your BMI is Normal`
            results.style = 'border: 2px solid rgb(0, 255, 0)'
        } else{
            final.innerHTML = `You are OverWeight`
            results.style = 'border: 2px solid red'
        }
    }

})

