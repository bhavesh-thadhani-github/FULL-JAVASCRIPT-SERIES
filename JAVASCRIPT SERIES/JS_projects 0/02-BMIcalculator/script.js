const form = document.querySelector('form')

//function for conversion of height(from different units) to meter
function convertToMeters(height, selectedOptionH){
    if(selectedOptionH === 'cm'){
        return height/100
    } else if(selectedOptionH === 'in'){
        return height * 0.0254
    } else if(selectedOptionH === 'ft'){
        return height * 0.3048
    } else{
        return height
    }
}
//function for conversion of weight(from pounds) to KG
function convertToKilograms(weight,selectedOptionW){
    if(selectedOptionW === 'lb'){
        return weight * 0.453592
    } else{
        return weight
    }
}
//function to calculate BMI
function calculateBMI(height,weight){
    return (weight / (height * height)).toFixed(2);
}

//EVENTLISTENER 1
form.addEventListener('input', function(e){
    //height variables
    const height = parseFloat(document.querySelector('#height').value)
    const heightM = document.querySelector('#heightM')
    const dropdownH = document.querySelector('#heightUnit')
    const selectedOptionH = dropdownH.value

    //weight variables
    const weight = parseFloat(document.querySelector('#weight').value)
    const weightKG = document.querySelector('#weightKG')
    const dropdownW = document.querySelector('#weightUnit')
    const selectedOptionW = dropdownW.value    

    //checking conditions
    if(height === '' || height <=0 || isNaN(height)){
        heightM.value = ''
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        weightKG.value = ''
    } else{
        weightKG.value = convertToKilograms(weight,selectedOptionW).toFixed(2)
        heightM.value = convertToMeters(height,selectedOptionH).toFixed(2)
    }
})

//EVENTLISTENER 2
form.addEventListener('submit', function(e){
    e.preventDefault()
    
    //height
    const height = parseFloat(document.querySelector('#height').value)
    const dropdownH = document.querySelector('#heightUnit')
    const selectedOptionH = dropdownH.value

    //weight
    const weight = parseFloat(document.querySelector('#weight').value)
    const dropdownW = document.querySelector('#weightUnit')
    const selectedOptionW = dropdownW.value

    //other(result)
    const results = document.querySelector('#results')
    const remarks = document.querySelector('#remarks')

    //checking conditions
    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please provide a Valid Height ${height}`
        remarks.innerHTML = ''
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please provide a Valid Weight ${weight}`
        remarks.innerHTML = ''
    }else{
        //converted values of height(in m) & weight(in kg) using functions
         const heightinMeters = convertToMeters(height, selectedOptionH) 
         const weightinKilograms = convertToKilograms(weight,selectedOptionW)

        //final bmi calculation (using calculateBMI function)
        const bmiResult = calculateBMI(heightinMeters,weightinKilograms)

        //printing result (in #result div)
        results.innerHTML = bmiResult

        //printing remarks by checking conditions (in #remarks div)
        if(bmiResult <= 18.6){
            remarks.textContent = 'You are UNDERWEIGHT'
        }else if(bmiResult >= 24.9){
            remarks.textContent = 'You are OVERWEIGHT'
        }else{
            remarks.textContent = 'You are NORMAL'
        }
    }
})


/*const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const remarks = document.querySelector('#remarks')
    const dropdownH = document.querySelector('#heightUnit')
    const selectedOptionH = dropdownH.value
    const dropdownW = document.querySelector('#weightUnit')
    const selectedOptionW = dropdownW.value

    if(height <= 0 || height === '' || isNaN(height)){
        results.innerHTML = 'Please provide valid height'
    }else if(weight <= 0 || weight === '' || isNaN(weight)){
        results.innerHTML = 'Please provide valid weight'
    }else{
        let bmi;
        if(selectedOptionH === 'cm' && selectedOptionW === 'kg'){
            bmi = (weight / ((height * height) / 10000)).toFixed(2)
        }else if(selectedOptionH === 'm' && selectedOptionW === 'kg'){
            bmi = (weight / (height * height)).toFixed(2)
        }

        results.innerHTML = bmi
        if(results <= 18.6){
            remarks.textContent = 'You are UNDERWEIGHT'
        }else if(results >= 24.9){
            remarks.textContent = 'You are OVERWEIGHT'
        }else{
            remarks.textContent = 'You are NORMAL'
        }
    }
})*/