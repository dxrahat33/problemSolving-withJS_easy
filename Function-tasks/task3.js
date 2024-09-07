// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let average = total / numbers.length;
    return average
}

const numbers = [14, 16, 16, 456, 12, 88, 5648, 7, 45, 4, 564, 564, 65, 465, 4, 64, 56, 465, 4, 56];
console.log(make_avg(numbers))