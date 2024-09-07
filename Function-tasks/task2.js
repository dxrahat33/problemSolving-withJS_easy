// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


let result = 0;
function number(numb) {
    if (numb % 2 === 0) {
        result = numb/2;
    }
    else{
        result = numb * 2;
    }
    return result;
}
const digit = 10;


number(digit);
console.log(result);