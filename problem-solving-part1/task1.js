// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    let fahrenheit = 0
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let tempCelsius = 250;
let tempFahrenheit = celsiusToFahrenheit(tempCelsius);
console.log(tempCelsius + '°C celsius is' + ' ' + tempFahrenheit + '°F Fahrenheit')