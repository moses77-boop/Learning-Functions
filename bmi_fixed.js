function bmi(weight, height) {
    return weight / (height ** 2);
}

function bmiCategory(weight, height) {
    const bmiValue = bmi(weight, height);

    if (bmiValue <= 18.5) {
        return "Underweight";
    }
    if (bmiValue <= 25.0) {
        return "Normal";
    }
    if (bmiValue <= 30.0) {
        return "Overweight";
    }
    return "Obese";
}

console.log(bmiCategory(70, 1.72));
