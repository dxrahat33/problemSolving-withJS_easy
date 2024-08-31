/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = prompt("enter your weight here(in KG):")
let heightFoot = prompt("enter your height in foot:")
let heightInches = prompt("enter your height in inches:")

const heightMeter = ((heightFoot * 0.3048) + (heightInches * 0.0254));

const bmi = weight / (heightMeter * heightMeter)

console.log(bmi.toFixed(2));

if(bmi <18.5){
    console.log("you are underweight");
}
else if(bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal");
}
else if(bmi >=25 && bmi <= 29.9) {
    console.log("you are overweight");
}
else{
    console.log("you are obese");
}