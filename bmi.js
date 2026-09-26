function bmi(weight, height){
    return weight/(height**2);
}
function bmiCategory(weight, height){
const bmiChecker = bmi(weight, height)
    
    if (bmiChecker <= 18.5){
    return "Underweight";
    }
    if (bmiChecker <= 25.0){
    return "Normal"
    }
    if (bmiChecker <= 30.0){
    return "Overweight";
    }
    if (bmiChecker > 30){
    return "Obese"
    }
}
console.log(bmiCategory(100, 1.72))