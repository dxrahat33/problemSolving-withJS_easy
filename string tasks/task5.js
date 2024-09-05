// Capitalize Every first Letter of each word in a String

let lowerCase = 'amar sonar bangla. i love my country'
let capEachWord = '';

for(let i=0;i<lowerCase.length;i++) {
    if(i === 0 || lowerCase[i - 1]=== ' ') {
        capEachWord += lowerCase[i].toUpperCase();
    }
    else{
        capEachWord += lowerCase[i];
    }
}

console.log(capEachWord)