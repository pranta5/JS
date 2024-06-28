const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const heightVal = parseInt(document.querySelector('#height').value)
    const weightval = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const guideResult = document.querySelector('#guide-result')

    if (heightVal==='' || heightVal <=0 || isNaN(heightVal)) {
        result.innerHTML = 'please enter a valid height';
    }else if (weightval==='' || weightval <=0 || isNaN(weightval)) {
        result.innerHTML = 'please enter a valid weight';
    }else {
        const BMI= (weightval/((heightVal*heightVal)/10000)).toFixed(2)
        result.innerHTML=BMI
        if (BMI<18.6) {
            guideResult.innerHTML='Under weight'
        }else if (BMI >= 18.6 && BMI <= 24.9) {
            guideResult.innerHTML='Normal Range'
        } else if(BMI>24.9) {
            guideResult.innerHTML='Over Weight'
        }else{
            guideResult.innerHTML='Invalid BMI value'

        }
    }


})