const form = document.querySelector('form')

// this usecase will receive empty string from height input, then convert empty string into integer. so the value of height variable will be NaN. this codeline will receive value of height input, before form submission.
// const height = parseInt(document.querySelector('#height').value)


// we want to receive value of height input after the submission of form, so this code line should be written inside the callback function of submit event. so that you may get value given by user, after he/she submit the form.

//by default we receive input values in string datatype. so here you need to convert them into integer.

form.addEventListener('submit',function(e){
    
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt( document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector("#message")
    
    if (height === '' || height <= 0 || isNaN(height)) {

        results.innerHTML = "please give a valid height"

    }else if(weight === '' || weight <= 0 || isNaN(weight) ){

        results.innerHTML = "please give a valid weight"

    }else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        //showing the value of BMI .
        results.innerHTML = `<span>your BMI is ${BMI}</span>`
        results.style.marginLeft = "55px"

        // showing the conclusion on the bases of calculated BMI.
        if (BMI < 18.6) {
            message.innerHTML = "you are underweight"
            message.style.color = "#a61616"
        } else if( BMI > 18.6 && BMI < 24.9){
            message.innerHTML = "your weight is normal"
            message.style.color = "#135b0dff"
        }else{
            message.innerHTML = "you are overweight"
            message.style.color = "#a61616"

        }
    }


})